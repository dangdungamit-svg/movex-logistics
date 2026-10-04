const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

interface QuoteRequest {
  name: string;
  email: string;
  phone: string | null;
  service: string;
  pickup_location: string | null;
  destination: string | null;
  preferred_date: string | null;
  details: string | null;
  consent: boolean;
  website: string;
}

interface DenoRuntime {
  env: { get(name: string): string | undefined };
  serve(handler: (request: Request) => Response | Promise<Response>): void;
}

const runtime = (globalThis as typeof globalThis & { Deno?: DenoRuntime }).Deno;

function jsonResponse(body: Record<string, boolean>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}

function optionalText(value: unknown, maximum: number): string | null | undefined {
  if (value === null || value === undefined || value === '') return null;
  if (typeof value !== 'string' || value.trim().length > maximum) return undefined;
  return value.trim();
}

function validDate(value: string | null | undefined): value is string | null {
  if (value === null) return true;
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00.000Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

async function notifyByEmail(request: QuoteRequest) {
  const apiKey = runtime?.env.get('RESEND_API_KEY');
  const from = runtime?.env.get('RESEND_FROM_EMAIL');
  if (!apiKey || !from) {
    console.error('Quote notification email is not configured.');
    return;
  }

  const lines = [
    'A new quote request was submitted on movexlogistics.fi.',
    '',
    `Name: ${request.name}`,
    `Email: ${request.email}`,
    `Phone: ${request.phone ?? 'Not provided'}`,
    `Service: ${request.service}`,
    `Pickup: ${request.pickup_location ?? 'Not provided'}`,
    `Destination: ${request.destination ?? 'Not provided'}`,
    `Preferred date: ${request.preferred_date ?? 'Not provided'}`,
    `Details: ${request.details ?? 'Not provided'}`,
  ];

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: ['dangdung.amit@gmail.com'],
        subject: 'New MoveX quote request',
        text: lines.join('\n'),
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) console.error('Quote notification email could not be sent.');
  } catch {
    console.error('Quote notification email could not be sent.');
  }
}

runtime?.serve(async (request) => {
  if (request.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }
  if (request.method !== 'POST') return jsonResponse({ success: false }, 405);
  const contentLength = Number(request.headers.get('content-length') ?? 0);
  if (contentLength > 12_000) return jsonResponse({ success: false }, 413);

  let parsedBody: unknown;
  try {
    parsedBody = await request.json();
  } catch {
    return jsonResponse({ success: false }, 400);
  }
  if (typeof parsedBody !== 'object' || parsedBody === null || Array.isArray(parsedBody)) {
    return jsonResponse({ success: false }, 400);
  }
  const body = parsedBody as Partial<QuoteRequest>;

  if (typeof body.website === 'string' && body.website.trim()) {
    return jsonResponse({ success: false }, 400);
  }

  const name = optionalText(body.name, 120);
  const email = optionalText(body.email, 254);
  const phone = optionalText(body.phone, 40);
  const service = optionalText(body.service, 120);
  const pickup = optionalText(body.pickup_location, 300);
  const destination = optionalText(body.destination, 300);
  const preferredDate = optionalText(body.preferred_date, 10);
  const details = optionalText(body.details, 4000);

  if (
    !name || name.length < 2 ||
    !email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) ||
    phone === undefined ||
    !service ||
    pickup === undefined ||
    destination === undefined ||
    preferredDate === undefined || !validDate(preferredDate) ||
    details === undefined ||
    body.consent !== true
  ) {
    return jsonResponse({ success: false }, 400);
  }

  const supabaseUrl = runtime?.env.get('SUPABASE_URL');
  const supabaseAnonKey = runtime?.env.get('SUPABASE_ANON_KEY');
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Quote submission database is not configured.');
    return jsonResponse({ success: false }, 500);
  }

  const quote: QuoteRequest = {
    name,
    email,
    phone,
    service,
    pickup_location: pickup,
    destination,
    preferred_date: preferredDate,
    details,
    consent: true,
    website: '',
  };

  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/quote_requests`, {
      method: 'POST',
      headers: {
        apikey: supabaseAnonKey,
        Authorization: 'Bearer ' + supabaseAnonKey,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({
        name: quote.name,
        email: quote.email,
        phone: quote.phone,
        service: quote.service,
        pickup_location: quote.pickup_location,
        destination: quote.destination,
        preferred_date: quote.preferred_date,
        details: quote.details,
        consent: quote.consent,
      }),
    });
    if (!response.ok) {
      console.error('Quote request could not be saved.');
      return jsonResponse({ success: false }, 400);
    }
  } catch {
    console.error('Quote request could not be saved.');
    return jsonResponse({ success: false }, 500);
  }

  await notifyByEmail(quote);
  return jsonResponse({ success: true });
});
