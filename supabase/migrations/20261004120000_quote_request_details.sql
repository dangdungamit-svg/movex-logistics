ALTER TABLE public.quote_requests
  RENAME COLUMN details TO message;

ALTER TABLE public.quote_requests
  ADD COLUMN preferred_time text,
  ADD COLUMN number_of_movers integer,
  ADD COLUMN number_of_rooms integer,
  ADD COLUMN large_items text,
  ADD COLUMN elevator_available boolean,
  ADD COLUMN stairs boolean,
  ADD COLUMN parking_info text;

ALTER TABLE public.quote_requests
  ADD CONSTRAINT quote_requests_preferred_time_length
    CHECK (preferred_time IS NULL OR char_length(preferred_time) <= 40) NOT VALID,
  ADD CONSTRAINT quote_requests_number_of_movers_valid
    CHECK (number_of_movers BETWEEN 0 AND 3) NOT VALID,
  ADD CONSTRAINT quote_requests_number_of_rooms_valid
    CHECK (number_of_rooms IS NULL OR number_of_rooms BETWEEN 1 AND 100) NOT VALID,
  ADD CONSTRAINT quote_requests_large_items_length
    CHECK (large_items IS NULL OR char_length(large_items) <= 2000) NOT VALID,
  ADD CONSTRAINT quote_requests_parking_info_length
    CHECK (parking_info IS NULL OR char_length(parking_info) <= 1000) NOT VALID,
  ADD CONSTRAINT quote_requests_message_length
    CHECK (message IS NULL OR char_length(message) <= 4000) NOT VALID;

GRANT INSERT (
  name,
  email,
  phone,
  service,
  pickup_location,
  destination,
  preferred_date,
  consent,
  preferred_time,
  number_of_movers,
  number_of_rooms,
  large_items,
  elevator_available,
  stairs,
  parking_info,
  message
) ON public.quote_requests TO anon, authenticated;

DROP POLICY "Public can submit quote requests" ON public.quote_requests;

CREATE POLICY "Public can submit quote requests"
  ON public.quote_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    consent IS TRUE
    AND status = 'new'
    AND quoted_price IS NULL
    AND admin_notes IS NULL
    AND char_length(name) BETWEEN 2 AND 120
    AND phone IS NOT NULL
    AND service IN (
      'Pakettiauto + kuljettaja — 50 €/h, ALV sisältyy',
      'Pakettiauto + kuljettaja + 1 muuttomies — 75 €/h, ALV sisältyy',
      'Pakettiauto + kuljettaja + 2 muuttomiestä — 100 €/h, ALV sisältyy',
      'Pakettiauto + kuljettaja + 3 muuttomiestä — 125 €/h, ALV sisältyy',
      'Van + Driver — €50/h, VAT included',
      'Van + Driver + 1 mover — €75/h, VAT included',
      'Van + Driver + 2 movers — €100/h, VAT included',
      'Van + Driver + 3 movers — €125/h, VAT included'
    )
    AND pickup_location IS NOT NULL
    AND destination IS NOT NULL
    AND preferred_date IS NOT NULL
    AND number_of_movers IS NOT NULL
    AND number_of_movers BETWEEN 0 AND 3
    AND (
      service = 'Van + Driver — €50/h VAT included' AND number_of_movers = 0
      OR service = 'Van + Driver + 1 mover — €75/h VAT included' AND number_of_movers = 1
      OR service = 'Van + Driver + 2 movers — €100/h VAT included' AND number_of_movers = 2
      OR service = 'Van + Driver + 3 movers — €125/h VAT included' AND number_of_movers = 3
      OR service = 'Pakettiauto + kuljettaja — 50 €/h, ALV sisältyy' AND number_of_movers = 0
      OR service = 'Pakettiauto + kuljettaja + 1 muuttomies — 75 €/h, ALV sisältyy' AND number_of_movers = 1
      OR service = 'Pakettiauto + kuljettaja + 2 muuttomiestä — 100 €/h, ALV sisältyy' AND number_of_movers = 2
      OR service = 'Pakettiauto + kuljettaja + 3 muuttomiestä — 125 €/h, ALV sisältyy' AND number_of_movers = 3
    )
  );

GRANT SELECT (preferred_time, number_of_movers, number_of_rooms, large_items, elevator_available, stairs, parking_info, message)
  ON public.quote_requests TO authenticated;
