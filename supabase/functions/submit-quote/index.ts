const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  service: string;
  pickup_location: string;
  destination: string;
  preferred_date: string;
  preferred_time: string | null;
  number_of_movers: number | null;
  number_of_rooms: number | null;
  large_items: string | null;
  elevator_available: boolean | null;
  stairs: boolean | null;
  parking_info: string | null;
  message: string | null;
  consent: boolean;
}

interface SubmitQuoteBody extends Partial<QuoteRequest> {
  website?: unknown;
  pay_online?: unknown;
  lang?: unknown;
  return_path?: unknown;
}

// Online booking advance = price of the first hour (minimum booking), VAT included.
const advanceCentsByMovers = new Map<number, number>([
  [0, 5000],
  [1, 7500],
  [2, 10000],
  [3, 12500],
]);


const allowedServices = new Set([
  'Van + Driver — €50/h, VAT included',
  'Van + Driver + 1 mover — €75/h, VAT included',
  'Van + Driver + 2 movers — €100/h, VAT included',
  'Van + Driver + 3 movers — €125/h, VAT included',
  'Fixed offer — quote requested',
  'Not sure — recommend an option',
]);

const moversByService = new Map<string, number>([
  ['Van + Driver — €50/h, VAT included', 0],
  ['Van + Driver + 1 mover — €75/h, VAT included', 1],
  ['Van + Driver + 2 movers — €100/h, VAT included', 2],
  ['Van + Driver + 3 movers — €125/h, VAT included', 3],
]);

interface DenoRuntime {
  env: { get(name: string): string | undefined };
  serve(handler: (request: Request) => Response | Promise<Response>): void;
}

const runtime = (globalThis as typeof globalThis & { Deno?: DenoRuntime }).Deno;

function jsonResponse(body: Record<string, boolean | string>, status = 200) {
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

// Stripe Payment Links (created in the Stripe dashboard, MoveX Logistics account).
// No API key is needed: the quote id is passed as client_reference_id and the
// stripe-webhook function marks the quote as paid on checkout.session.completed.
const paymentLinkByMovers = new Map<number, string>([
  [0, 'https://buy.stripe.com/fZuaEZ1v9dRd6iZf2ReZ200'], // 50 EUR
  [1, 'https://buy.stripe.com/6oU14p8XB4gDazf6wleZ201'], // 75 EUR
  [2, 'https://buy.stripe.com/8x200la1FdRd36N4odeZ202'], // 100 EUR
  [3, 'https://buy.stripe.com/8x228tgq34gD6iZf2ReZ203'], // 125 EUR
]);

function paymentLinkUrl(options: { quoteId: string; movers: number; email: string; lang: 'fi' | 'en' }): string | null {
  const base = paymentLinkByMovers.get(options.movers);
  if (!base) return null;
  const params = new URLSearchParams({
    client_reference_id: options.quoteId,
    prefilled_email: options.email,
    locale: options.lang,
  });
  return `${base}?${params.toString()}`;
}


// Owner notification email. Uses Resend when RESEND_API_KEY/RESEND_FROM_EMAIL are set,
// otherwise FormSubmit (no API key; the first email asks the owner to click "Activate" once).
const OWNER_EMAIL = 'dangdung.amit@gmail.com';

async function sendOwnerEmail(subject: string, fields: Record<string, string>) {
  const apiKey = runtime?.env.get('RESEND_API_KEY')?.trim();
  const from = runtime?.env.get('RESEND_FROM_EMAIL')?.trim();
  const text = Object.entries(fields).map(([k, v]) => `${k}: ${v}`).join('\n');
  try {
    if (apiKey && from) {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: 'Bearer ' + apiKey, 'Content-Type': 'application/json' },
        body: JSON.stringify({ from, to: [OWNER_EMAIL], subject, text }),
        signal: AbortSignal.timeout(10_000),
      });
      if (response.ok) return;
      console.error('Resend email failed, falling back to FormSubmit.', response.status);
    }
    const response = await fetch(`https://formsubmit.co/ajax/${OWNER_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Origin: 'https://movexlogistics.fi',
        Referer: 'https://movexlogistics.fi/',
      },
      body: JSON.stringify({ _subject: subject, _template: 'table', _captcha: 'false', ...fields }),
      signal: AbortSignal.timeout(10_000),
    });
    const result = await response.text();
    if (!response.ok) console.error('FormSubmit email failed.', response.status, result.slice(0, 300));
    else console.log('Owner email sent via FormSubmit.', result.slice(0, 200));
  } catch (error) {
    console.error('Owner email could not be sent.', error instanceof Error ? error.message : String(error));
  }
}

async function notifyByEmail(request: QuoteRequest, payment?: { amountCents: number }) {
  const yesNo = (v: boolean | null) => (v === null ? '-' : v ? 'Yes' : 'No');
  await sendOwnerEmail(`New MoveX booking request – ${request.name.replace(/[\r\n]+/g, ' ').trim()}`, {
    Name: request.name,
    Phone: request.phone ?? '-',
    Email: request.email,
    Service: request.service,
    Pickup: request.pickup_location ?? '-',
    Destination: request.destination ?? '-',
    'Preferred date': request.preferred_date ?? '-',
    'Preferred time': request.preferred_time ?? '-',
    'Large items': request.large_items ?? '-',
    Elevator: yesNo(request.elevator_available),
    Stairs: yesNo(request.stairs),
    Parking: request.parking_info ?? '-',
    'Online payment': payment
      ? `Customer is paying the booking advance €${(payment.amountCents / 100).toFixed(2)} online (wait for the PAID email)`
      : 'No',
    Message: request.message ?? '-',
  });
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
  const body = parsedBody as SubmitQuoteBody;

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
  const preferredTime = optionalText(body.preferred_time, 5);
  const largeItems = optionalText(body.large_items, 2000);
  const parkingInfo = optionalText(body.parking_info, 1000);
  const message = optionalText(body.message, 4000);
  const numberOfMovers = body.number_of_movers;
  const numberOfRooms = body.number_of_rooms;
  const elevatorAvailable = body.elevator_available;
  const stairs = body.stairs;
  const payOnline = body.pay_online === true;
  const lang: 'fi' | 'en' = body.lang === 'en' ? 'en' : 'fi';

  if (
    !name || name.length < 2 ||
    !email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) ||
    !phone ||
    !service || !allowedServices.has(service) ||
    (moversByService.has(service) ? moversByService.get(service) !== numberOfMovers : numberOfMovers !== null) ||
    !pickup ||
    !destination ||
    !preferredDate || !validDate(preferredDate) ||
    preferredTime === undefined || (preferredTime !== null && !/^([01]\d|2[0-3]):[0-5]\d$/.test(preferredTime)) ||
    numberOfMovers === undefined ||
    (numberOfMovers !== null && (typeof numberOfMovers !== 'number' || !Number.isInteger(numberOfMovers) || numberOfMovers < 0 || numberOfMovers > 3)) ||
    numberOfRooms !== null && numberOfRooms !== undefined && (
      typeof numberOfRooms !== 'number' || !Number.isInteger(numberOfRooms) || numberOfRooms < 1 || numberOfRooms > 100
    ) ||
    largeItems === undefined ||
    parkingInfo === undefined ||
    message === undefined ||
    elevatorAvailable !== null && elevatorAvailable !== undefined && typeof elevatorAvailable !== 'boolean' ||
    stairs !== null && stairs !== undefined && typeof stairs !== 'boolean' ||
    body.consent !== true ||
    (payOnline && (numberOfMovers === null || !advanceCentsByMovers.has(numberOfMovers)))
  ) {
    return jsonResponse({ success: false }, 400);
  }

  const supabaseUrl = runtime?.env.get('SUPABASE_URL');
  const supabaseAnonKey = runtime?.env.get('SUPABASE_ANON_KEY');
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Quote submission database is not configured.');
    return jsonResponse({ success: false }, 500);
  }

  const quoteId = crypto.randomUUID();
  const advanceCents = payOnline && numberOfMovers !== null ? advanceCentsByMovers.get(numberOfMovers)! : null;

  const quote: QuoteRequest = {
    name,
    email,
    phone,
    service,
    pickup_location: pickup,
    destination,
    preferred_date: preferredDate,
    preferred_time: preferredTime ?? null,
    number_of_movers: numberOfMovers,
    number_of_rooms: numberOfRooms ?? null,
    large_items: largeItems,
    elevator_available: elevatorAvailable ?? null,
    stairs: stairs ?? null,
    parking_info: parkingInfo,
    message,
    consent: true,
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
        id: quoteId,
        payment_status: advanceCents !== null ? 'pending' : 'unpaid',
        name: quote.name,
        email: quote.email,
        phone: quote.phone,
        service: quote.service,
        pickup_location: quote.pickup_location,
        destination: quote.destination,
        preferred_date: quote.preferred_date,
        preferred_time: quote.preferred_time,
        number_of_movers: quote.number_of_movers,
        number_of_rooms: quote.number_of_rooms,
        large_items: quote.large_items,
        elevator_available: quote.elevator_available,
        stairs: quote.stairs,
        parking_info: quote.parking_info,
        message: quote.message,
        consent: quote.consent,
      }),
    });
    if (!response.ok) {
      console.error('Quote request could not be saved.', response.status, await response.text());
      return jsonResponse({ success: false }, 400);
    }
  } catch {
    console.error('Quote request could not be saved.');
    return jsonResponse({ success: false }, 500);
  }

  await notifyByEmail(quote, advanceCents !== null ? { amountCents: advanceCents } : undefined);

  if (advanceCents !== null && numberOfMovers !== null) {
    const checkoutUrl = paymentLinkUrl({ quoteId, movers: numberOfMovers, email: quote.email, lang });
    if (!checkoutUrl) return jsonResponse({ success: true, checkout_error: true });
    return jsonResponse({ success: true, checkout_url: checkoutUrl });
  }

  return jsonResponse({ success: true });
});
