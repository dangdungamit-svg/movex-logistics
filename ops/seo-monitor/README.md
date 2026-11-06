# MoveX Logistics — free Google Search Console monitor

This Worker reads Google Search Console performance data for five target keywords, compares the latest 28 complete days with the previous 28 days, and saves the report in Cloudflare KV. A weekly Cron Trigger refreshes it. It does **not** scrape Google search results, so average position is Search Console's measured average position—not a guaranteed live rank.

## 1. Google read-only access

1. In Google Cloud Console, create/select a project and enable **Google Search Console API**.
2. Create a **service account** and generate a JSON key. Keep the downloaded key private.
3. In Search Console, open the exact verified property for `movexlogistics.fi` → Settings → Users and permissions → Add user. Add the service account email with **Restricted** permission (read-only).
4. Note the property identifier exactly:
   - Domain property: `sc-domain:movexlogistics.fi`
   - URL-prefix property: `https://movexlogistics.fi/`

Do not send the private key to anyone or commit it to GitHub.

## 2. Cloudflare Worker setup

The Worker already created in the Cloudflare dashboard is named `movex-seo-monitor`.

1. Open Workers & Pages → `movex-seo-monitor` → Edit code. Replace the Hello World code with the contents of `worker.js`, then Deploy.
2. Create a KV namespace named `MOVEX_SEO_REPORTS`.
3. In Worker Settings → Bindings, add a **KV namespace** binding:
   - Variable name: `SEO_REPORTS`
   - KV namespace: `MOVEX_SEO_REPORTS`
4. In Worker Settings → Variables and Secrets, add these as **Secrets**:
   - `GSC_SERVICE_ACCOUNT_EMAIL`: service account email from Google Cloud
   - `GSC_PRIVATE_KEY`: the full `private_key` value from the downloaded JSON, including BEGIN/END PRIVATE KEY lines
   - `ADMIN_TOKEN`: create a long random password/token yourself
   Add this as a normal variable:
   - `GSC_SITE_URL`: exact property identifier from step 1
5. In Settings → Triggers → Cron Triggers, add `0 6 * * 1` (every Monday at 06:00 UTC).

## 3. First test

Open this URL in your browser, replacing the token with your own value:

`https://movex-seo-monitor.<your-workers-subdomain>.workers.dev/run?token=<YOUR_ADMIN_TOKEN>`

A successful response contains current and previous 28-day keyword metrics. Then use `/report?token=<YOUR_ADMIN_TOKEN>` to read the saved report. Keep the token private; it grants access to the report and manual refresh.

## Keywords monitored

The Worker tracks 30 Finnish and English local-intent phrases:

- muuttopalvelu tampere
- muuttopalvelut tampere
- muuttofirma tampere
- muuttoapu tampere
- muutto tampere
- muuttopalvelun hinta tampere
- muuttofirma hinta tampere
- edullinen muuttopalvelu tampere
- halpa muutto tampere
- edullinen muutto tampere
- muuttoapu hinta tampere
- pieni muutto tampere
- opiskelijamuutto tampere
- pakettiauto kuljettajalla tampere
- paku ja kuski tampere
- kuljetuspalvelu tampere
- edullinen kuljetuspalvelu tampere
- tavarakuljetus tampere
- huonekalukuljetus tampere
- sohvan kuljetus tampere
- muuttomiehet tampere
- muuttofirma lähelläni
- muuttopalvelu lähelläni
- moving company tampere
- moving company near me
- moving service tampere
- affordable moving service tampere
- cheap movers tampere
- moving cost tampere
- furniture transport tampere

The script searches query rows returned by Search Console and matches these phrases case-insensitively. Low-volume phrases may not appear in the API response, in which case their metrics are zero/null. Search Console may omit anonymized or low-volume queries.

## Cost and privacy

Cloudflare Workers Free and Search Console API can support this low-volume weekly workflow without TinyFish. Google credentials are stored as Cloudflare Worker secrets, and reports are stored in the bound KV namespace. No passwords or private keys belong in this repository.
