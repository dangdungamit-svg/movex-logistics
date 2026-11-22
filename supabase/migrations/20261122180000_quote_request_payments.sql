-- Online booking advance (first hour) paid through Stripe Checkout.
-- Payment fields are written only by the stripe-webhook Edge Function (service role).

ALTER TABLE public.quote_requests
  ADD COLUMN payment_status text NOT NULL DEFAULT 'unpaid',
  ADD COLUMN payment_amount_cents integer,
  ADD COLUMN stripe_session_id text,
  ADD COLUMN stripe_payment_intent_id text,
  ADD COLUMN paid_at timestamptz;

ALTER TABLE public.quote_requests
  ADD CONSTRAINT quote_requests_payment_status_valid
    CHECK (payment_status IN ('unpaid', 'pending', 'paid', 'refunded')),
  ADD CONSTRAINT quote_requests_payment_amount_valid
    CHECK (payment_amount_cents IS NULL OR payment_amount_cents BETWEEN 0 AND 1000000);

CREATE UNIQUE INDEX quote_requests_stripe_session_id_key
  ON public.quote_requests (stripe_session_id)
  WHERE stripe_session_id IS NOT NULL;

-- Public (anon/authenticated) inserts can never set payment data themselves.
CREATE OR REPLACE FUNCTION public.reset_quote_request_payment_fields()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = ''
AS $$
BEGIN
  IF current_user IN ('anon', 'authenticated') THEN
    NEW.payment_status = CASE WHEN NEW.payment_status = 'pending' THEN 'pending' ELSE 'unpaid' END;
    NEW.payment_amount_cents = NULL;
    NEW.stripe_session_id = NULL;
    NEW.stripe_payment_intent_id = NULL;
    NEW.paid_at = NULL;
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER quote_requests_reset_payment_fields
  BEFORE INSERT ON public.quote_requests
  FOR EACH ROW
  EXECUTE FUNCTION public.reset_quote_request_payment_fields();

GRANT SELECT (payment_status, payment_amount_cents, stripe_session_id, stripe_payment_intent_id, paid_at)
  ON public.quote_requests TO authenticated;
