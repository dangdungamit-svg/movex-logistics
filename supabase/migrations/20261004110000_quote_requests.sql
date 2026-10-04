CREATE TABLE public.admin_users (
  user_id uuid PRIMARY KEY REFERENCES auth.users (id) ON DELETE CASCADE,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.admin_users FROM PUBLIC, anon, authenticated;

CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = ''
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.admin_users
    WHERE user_id = (SELECT auth.uid())
  );
$$;

REVOKE ALL ON FUNCTION public.is_admin() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.is_admin() TO authenticated;

CREATE TABLE public.quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 2 AND 120),
  email text NOT NULL CHECK (
    char_length(email) <= 254
    AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  ),
  phone text CHECK (phone IS NULL OR char_length(phone) <= 40),
  service text NOT NULL CHECK (char_length(service) BETWEEN 1 AND 120),
  pickup_location text CHECK (
    pickup_location IS NULL OR char_length(pickup_location) <= 300
  ),
  destination text CHECK (destination IS NULL OR char_length(destination) <= 300),
  preferred_date date,
  details text CHECK (details IS NULL OR char_length(details) <= 4000),
  consent boolean NOT NULL CHECK (consent IS TRUE),
  status text NOT NULL DEFAULT 'new'
    CHECK (status IN ('new', 'contacted', 'quoted', 'confirmed', 'completed', 'cancelled')),
  quoted_price numeric(10, 2) CHECK (quoted_price IS NULL OR quoted_price >= 0),
  admin_notes text CHECK (admin_notes IS NULL OR char_length(admin_notes) <= 5000)
);

ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.quote_requests FROM PUBLIC, anon, authenticated;
GRANT INSERT (
  name,
  email,
  phone,
  service,
  pickup_location,
  destination,
  preferred_date,
  details,
  consent
) ON public.quote_requests TO anon, authenticated;
GRANT SELECT ON public.quote_requests TO authenticated;
GRANT UPDATE (status, quoted_price, admin_notes)
  ON public.quote_requests TO authenticated;

CREATE POLICY "Public can submit quote requests"
  ON public.quote_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (consent IS TRUE AND status = 'new' AND quoted_price IS NULL AND admin_notes IS NULL);

CREATE POLICY "Admins can read quote requests"
  ON public.quote_requests
  FOR SELECT
  TO authenticated
  USING ((SELECT public.is_admin()));

CREATE POLICY "Admins can update quote requests"
  ON public.quote_requests
  FOR UPDATE
  TO authenticated
  USING ((SELECT public.is_admin()))
  WITH CHECK ((SELECT public.is_admin()));

CREATE OR REPLACE FUNCTION public.set_quote_request_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = ''
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER quote_requests_updated_at
  BEFORE UPDATE ON public.quote_requests
  FOR EACH ROW
  EXECUTE FUNCTION public.set_quote_request_updated_at();
