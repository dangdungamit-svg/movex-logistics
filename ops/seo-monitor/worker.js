const KEYWORDS = [
  "muuttopalvelu tampere",
  "muuttopalvelut tampere",
  "muuttofirma tampere",
  "muuttoapu tampere",
  "muutto tampere",
  "muuttopalvelun hinta tampere",
  "muuttofirma hinta tampere",
  "edullinen muuttopalvelu tampere",
  "halpa muutto tampere",
  "edullinen muutto tampere",
  "muuttoapu hinta tampere",
  "pieni muutto tampere",
  "opiskelijamuutto tampere",
  "pakettiauto kuljettajalla tampere",
  "paku ja kuski tampere",
  "kuljetuspalvelu tampere",
  "edullinen kuljetuspalvelu tampere",
  "tavarakuljetus tampere",
  "huonekalukuljetus tampere",
  "sohvan kuljetus tampere",
  "muuttomiehet tampere",
  "muuttofirma lähelläni",
  "muuttopalvelu lähelläni",
  "moving company tampere",
  "moving company near me",
  "moving service tampere",
  "affordable moving service tampere",
  "cheap movers tampere",
  "moving cost tampere",
  "furniture transport tampere"
];

const API = "https://www.googleapis.com/webmasters/v3/sites/";

function b64url(input) {
  const bytes = typeof input === "string" ? new TextEncoder().encode(input) : input;
  let binary = "";
  for (const b of bytes) binary += String.fromCharCode(b);
  return btoa(binary).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}

function pemToBytes(pem) {
  const clean = pem.replace(/-----BEGIN PRIVATE KEY-----|-----END PRIVATE KEY-----|\s/g, "");
  const raw = atob(clean);
  return Uint8Array.from(raw, c => c.charCodeAt(0));
}

async function accessToken(env) {
  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = b64url(JSON.stringify({
    iss: env.GSC_SERVICE_ACCOUNT_EMAIL,
    scope: "https://www.googleapis.com/auth/webmasters.readonly",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600
  }));
  const unsigned = header + "." + claims;
  const key = await crypto.subtle.importKey(
    "pkcs8", pemToBytes(env.GSC_PRIVATE_KEY),
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["sign"]
  );
  const signature = await crypto.subtle.sign("RSASSA-PKCS1-v1_5", key, new TextEncoder().encode(unsigned));
  const assertion = unsigned + "." + b64url(new Uint8Array(signature));
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion
    })
  });
  if (!response.ok) throw new Error("Google token request failed: " + response.status + " " + await response.text());
  return (await response.json()).access_token;
}

async function queryGsc(token, env, startDate, endDate) {
  const site = encodeURIComponent(env.GSC_SITE_URL);
  const response = await fetch(API + site + "/searchAnalytics/query", {
    method: "POST",
    headers: { authorization: "Bearer " + token, "content-type": "application/json" },
    body: JSON.stringify({
      startDate, endDate,
      dimensions: ["query"],
      rowLimit: 250,
      type: "web"
    })
  });
  if (!response.ok) throw new Error("Search Console query failed: " + response.status + " " + await response.text());
  const data = await response.json();
  const rows = data.rows || [];
  return KEYWORDS.map(keyword => {
    const matching = rows.filter(row => (row.keys?.[0] || "").toLocaleLowerCase().includes(keyword));
    const clicks = matching.reduce((sum, row) => sum + row.clicks, 0);
    const impressions = matching.reduce((sum, row) => sum + row.impressions, 0);
    const weightedPosition = matching.reduce((sum, row) => sum + row.position * row.impressions, 0);
    return {
      keyword,
      clicks,
      impressions,
      averagePosition: impressions ? Number((weightedPosition / impressions).toFixed(1)) : null
    };
  });
}

function isoDate(date) {
  return date.toISOString().slice(0, 10);
}

async function buildReport(env) {
  if (!env.GSC_SERVICE_ACCOUNT_EMAIL || !env.GSC_PRIVATE_KEY || !env.GSC_SITE_URL || !env.SEO_REPORTS) {
    throw new Error("Missing required Worker secrets or SEO_REPORTS KV binding.");
  }
  const token = await accessToken(env);
  const end = new Date();
  end.setUTCDate(end.getUTCDate() - 3); // Search Console data can be delayed.
  const start = new Date(end);
  start.setUTCDate(start.getUTCDate() - 27);
  const previousEnd = new Date(start);
  previousEnd.setUTCDate(previousEnd.getUTCDate() - 1);
  const previousStart = new Date(previousEnd);
  previousStart.setUTCDate(previousStart.getUTCDate() - 27);

  const [current, previous] = await Promise.all([
    queryGsc(token, env, isoDate(start), isoDate(end)),
    queryGsc(token, env, isoDate(previousStart), isoDate(previousEnd))
  ]);
  const report = {
    site: env.GSC_SITE_URL,
    generatedAt: new Date().toISOString(),
    currentPeriod: { start: isoDate(start), end: isoDate(end), keywords: current },
    previousPeriod: { start: isoDate(previousStart), end: isoDate(previousEnd), keywords: previous }
  };
  await env.SEO_REPORTS.put("latest", JSON.stringify(report));
  return report;
}

export default {
  async scheduled(_event, env, ctx) {
    ctx.waitUntil(buildReport(env));
  },
  async fetch(request, env) {
    const url = new URL(request.url);
    if (!env.ADMIN_TOKEN || url.searchParams.get("token") !== env.ADMIN_TOKEN) {
      return new Response("Unauthorized", { status: 401 });
    }
    try {
      if (url.pathname === "/run") {
        const report = await buildReport(env);
        return Response.json(report, { headers: { "cache-control": "no-store" } });
      }
      if (url.pathname === "/report") {
        const report = await env.SEO_REPORTS.get("latest", "json");
        if (!report) return Response.json({ status: "No report yet. Open /run?token=YOUR_ADMIN_TOKEN once." }, { status: 404 });
        return Response.json(report, { headers: { "cache-control": "no-store" } });
      }
      return new Response("MoveX SEO Monitor. Use /run or /report with your admin token.", {
        headers: { "content-type": "text/plain; charset=utf-8" }
      });
    } catch (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }
  }
};
