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
  number_of_movers: number;
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
}

const allowedServices = new Set([
  'Van + Driver — €50/h VAT included',
  'Van + Driver + 1 mover — €75/h VAT included',
  'Van + Driver + 2 movers — €100/h VAT included',
  'Van + Driver + 3 movers — €125/h VAT included',
]);

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
    `Preferred time: ${request.preferred_time ?? 'Not provided'}`,
    `Number of movers: ${request.number_of_movers}`,
    `Number of rooms: ${request.number_of_rooms ?? 'Not provided'}`,
    `Large or heavy items: ${request.large_items ?? 'Not provided'}`,
    `Elevator available: ${request.elevator_available === null ? 'Not specified' : request.elevator_available ? 'Yes' : 'No'}`,
    `Stairs: ${request.stairs === null ? 'Not specified' : request.stairs ? 'Yes' : 'No'}`,
    `Parking information: ${request.parking_info ?? 'Not provided'}`,
    `Message: ${request.message ?? 'Not provided'}`,
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
        subject: `New MoveX quote request – ${request.name.replace(/[\r\n]+/g, ' ').trim()}`,
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

  if (
    !name || name.length < 2 ||
    !email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) ||
    !phone ||
    !service || !allowedServices.has(service) ||
    !pickup ||
    !destination ||
    !preferredDate || !validDate(preferredDate) ||
    preferredTime === undefined || (preferredTime !== null && !/^([01]\d|2[0-3]):[0-5]\d$/.test(preferredTime)) ||
    typeof numberOfMovers !== 'number' || !Number.isInteger(numberOfMovers) || numberOfMovers < 0 || numberOfMovers > 3 ||
    numberOfRooms !== null && numberOfRooms !== undefined && (
      typeof numberOfRooms !== 'number' || !Number.isInteger(numberOfRooms) || numberOfRooms < 1 || numberOfRooms > 100
    ) ||
    largeItems === undefined ||
    parkingInfo === undefined ||
    message === undefined ||
    elevatorAvailable !== null && elevatorAvailable !== undefined && typeof elevatorAvailable !== 'boolean' ||
    stairs !== null && stairs !== undefined && typeof stairs !== 'boolean' ||
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
