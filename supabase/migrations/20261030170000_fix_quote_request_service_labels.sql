-- Fix service labels in the public quote-request INSERT policy.
-- The form and submit-quote function submit English labels with a comma before "VAT included".
-- Keep this as a new migration so already-provisioned databases receive the correction.

DROP POLICY IF EXISTS "Public can submit quote requests" ON public.quote_requests;

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
      (service = 'Van + Driver — €50/h, VAT included' AND number_of_movers = 0)
      OR (service = 'Van + Driver + 1 mover — €75/h, VAT included' AND number_of_movers = 1)
      OR (service = 'Van + Driver + 2 movers — €100/h, VAT included' AND number_of_movers = 2)
      OR (service = 'Van + Driver + 3 movers — €125/h, VAT included' AND number_of_movers = 3)
      OR (service = 'Pakettiauto + kuljettaja — 50 €/h, ALV sisältyy' AND number_of_movers = 0)
      OR (service = 'Pakettiauto + kuljettaja + 1 muuttomies — 75 €/h, ALV sisältyy' AND number_of_movers = 1)
      OR (service = 'Pakettiauto + kuljettaja + 2 muuttomiestä — 100 €/h, ALV sisältyy' AND number_of_movers = 2)
      OR (service = 'Pakettiauto + kuljettaja + 3 muuttomiestä — 125 €/h, ALV sisältyy' AND number_of_movers = 3)
    )
  );
