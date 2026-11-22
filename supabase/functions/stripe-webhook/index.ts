// Receives Stripe events and marks quote requests as paid / refunded.
// Deploy with --no-verify-jwt: Stripe does not send a Supabase JWT; the
// Stripe-Signature header is verified instead (STRIPE_WEBHOOK_SECRET).

interface DenoRuntime {
  env: { get(name: string): string | undefined };
  serve(handler: (request: Request) => Response | Promise<Response>): void;
}

const runtime = (globalThis as typeof globalThis & { Deno?: DenoRuntime }).Deno;
const TOLERANCE_SECONDS = 300;
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function text(body: string, status = 200) {
  return new Response(body, { status, headers: { 'Content-Type': 'text/plain' } });
}

function timingSafeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

async function verifySignature(payload: string, header: string | null, secret: string) {
  if (!header) return false;
  const parts = header.split(',').map((p) => p.split('=', 2) as [string, string]);
  const timestamp = parts.find(([k]) => k === 't')?.[1];
  const signatures = parts.filter(([k]) => k === 'v1').map(([, v]) => v);
  if (!timestamp || signatures.length === 0) return false;
  const age = Math.abs(Date.now() / 1000 - Number(timestamp));
  if (!Number.isFinite(age) || age > TOLERANCE_SECONDS) return false;

  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const mac = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(`${timestamp}.${payload}`));
  const expected = Array.from(new Uint8Array(mac)).map((b) => b.toString(16).padStart(2, '0')).join('');
  return signatures.some((sig) => timingSafeEqual(sig, expected));
}

async function updateQuote(quoteId: string, values: Record<string, unknown>) {
  const supabaseUrl = runtime?.env.get('SUPABASE_URL');
  const serviceKey = runtime?.env.get('SUPABASE_SERVICE_ROLE_KEY');
  if (!supabaseUrl || !serviceKey) throw new Error('Database is not configured');
  const response = await fetch(`${supabaseUrl}/rest/v1/quote_requests?id=eq.${quoteId}`, {
    method: 'PATCH',
    headers: {
      apikey: serviceKey,
      Authorization: 'Bearer ' + serviceKey,
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
    },
    body: JSON.stringify(values),
  });
  if (!response.ok) throw new Error(`Quote update failed: ${response.status} ${await response.text()}`);
  const rows = await response.json();
  return Array.isArray(rows) ? rows[0] : null;
}

async function notifyPaid(row: Record<string, unknown> | null, amountCents: number) {
  const apiKey = runtime?.env.get('RESEND_API_KEY');
  const from = runtime?.env.get('RESEND_FROM_EMAIL');
  if (!apiKey || !from || !row) return;
  const lines = [
    `Booking advance PAID online: €${(amountCents / 100).toFixed(2)}`,
    '',
    `Name: ${row.name}`,
    `Phone: ${row.phone ?? '-'}`,
    `Email: ${row.email ?? '-'}`,
    `Service: ${row.service}`,
    `Pickup: ${row.pickup_location ?? '-'}`,
    `Destination: ${row.destination ?? '-'}`,
    `Preferred date: ${row.preferred_date ?? '-'}`,
    '',
    'Confirm the booking with the customer and add it to the calendar.',
  ];
  try {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + apiKey, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: ['dangdung.amit@gmail.com'],
        subject: `PAID booking advance – ${String(row.name ?? '').replace(/[\r\n]+/g, ' ')}`,
        text: lines.join('\n'),
      }),
      signal: AbortSignal.timeout(10_000),
    });
  } catch {
    console.error('Paid notification email could not be sent.');
  }
}

runtime?.serve(async (request) => {
  if (request.method !== 'POST') return text('Method not allowed', 405);
  const secret = runtime?.env.get('STRIPE_WEBHOOK_SECRET');
  if (!secret) {
    console.error('STRIPE_WEBHOOK_SECRET is not configured.');
    return text('Not configured', 500);
  }

  const payload = await request.text();
  if (!(await verifySignature(payload, request.headers.get('stripe-signature'), secret))) {
    return text('Invalid signature', 400);
  }

  interface StripeObject {
    id?: string;
    metadata?: Record<string, string>;
    client_reference_id?: string | null;
    payment_status?: string;
    amount_total?: number | null;
    payment_intent?: string | null;
    refunded?: boolean;
  }
  let event: { type?: string; data?: { object?: StripeObject } };
  try {
    event = JSON.parse(payload);
  } catch {
    return text('Invalid payload', 400);
  }
  const object: StripeObject = event.data?.object ?? {};

  try {
    if (
      (event.type === 'checkout.session.completed' && object.payment_status === 'paid') ||
      event.type === 'checkout.session.async_payment_succeeded'
    ) {
      const quoteId = object.metadata?.quote_id ?? object.client_reference_id;
      if (typeof quoteId === 'string' && UUID_RE.test(quoteId)) {
        const amount = typeof object.amount_total === 'number' ? object.amount_total : 0;
        const row = await updateQuote(quoteId, {
          payment_status: 'paid',
          payment_amount_cents: amount,
          stripe_session_id: object.id ?? null,
          stripe_payment_intent_id: typeof object.payment_intent === 'string' ? object.payment_intent : null,
          paid_at: new Date().toISOString(),
        });
        await notifyPaid(row, amount);
      }
    } else if (event.type === 'checkout.session.expired') {
      const quoteId = object.metadata?.quote_id ?? object.client_reference_id;
      if (typeof quoteId === 'string' && UUID_RE.test(quoteId)) {
        const supabaseUrl = runtime?.env.get('SUPABASE_URL');
        // Only reset requests that never got paid.
        const serviceKey = runtime?.env.get('SUPABASE_SERVICE_ROLE_KEY');
        if (supabaseUrl && serviceKey) {
          await fetch(`${supabaseUrl}/rest/v1/quote_requests?id=eq.${quoteId}&payment_status=eq.pending`, {
            method: 'PATCH',
            headers: { apikey: serviceKey, Authorization: 'Bearer ' + serviceKey, 'Content-Type': 'application/json' },
            body: JSON.stringify({ payment_status: 'unpaid' }),
          });
        }
      }
    } else if (event.type === 'charge.refunded' && object.refunded === true) {
      const paymentIntent = object.payment_intent;
      const supabaseUrl = runtime?.env.get('SUPABASE_URL');
      const serviceKey = runtime?.env.get('SUPABASE_SERVICE_ROLE_KEY');
      if (typeof paymentIntent === 'string' && /^pi_[A-Za-z0-9]+$/.test(paymentIntent) && supabaseUrl && serviceKey) {
        await fetch(`${supabaseUrl}/rest/v1/quote_requests?stripe_payment_intent_id=eq.${paymentIntent}`, {
          method: 'PATCH',
          headers: { apikey: serviceKey, Authorization: 'Bearer ' + serviceKey, 'Content-Type': 'application/json' },
          body: JSON.stringify({ payment_status: 'refunded' }),
        });
      }
    }
  } catch (error) {
    console.error('Stripe webhook handling failed.', error);
    return text('Handler error', 500);
  }

  return text('ok');
});
