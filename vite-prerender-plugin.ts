import { build as esbuildBuild } from 'esbuild';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { blogArticles } from './src/i18n/blog';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const origin = 'https://movexlogistics.fi';

const languagePairs = [
  ['/', '/en'],
  ['/muuttopalvelu-tampere', '/en/moving-service-tampere'],
  ['/muuttofirma-tampere', '/en/moving-company-tampere'],
  ['/huonekalukuljetus-tampere', '/en/furniture-transport-tampere'],
  ['/pieni-muutto-tampere', '/en/small-move-tampere'],
  ['/kuljetuspalvelu-tampere', '/en/transport-service-tampere'],
  ['/muuttopalvelu-hinta-tampere', '/en/moving-cost-tampere'],
  ['/ikea-kuljetus-tampere', '/en/ikea-delivery-tampere'],
  ['/tori-nouto-tampere', '/en/marketplace-pickup-tampere'],
  ['/kodinkonekuljetus-tampere', '/en/appliance-transport-tampere'],
  ['/opiskelijamuutto-tampere', '/en/student-move-tampere'],
  ['/kaatopaikkakuljetus-tampere', '/en/junk-removal-tampere'],
  ['/muutto-nokia', '/en/moving-nokia'],
  ['/muutto-ylojarvi', '/en/moving-ylojarvi'],
  ['/muutto-pirkkala', '/en/moving-pirkkala'],
  ['/muutto-lempaala', '/en/moving-lempaala'],
  ['/muutto-kangasala', '/en/moving-kangasala'],
  ['/muutto-hervanta', '/en/moving-hervanta'],
  ['/blog', '/en/blog'],
  ...blogArticles.filter((article) => article.published).map((article) => [`/blog/${article.slug}`, `/en/blog/${article.slug}`] as const),
] as const;

function canonicalPath(routePath: string) {
  return routePath === '/' || routePath.endsWith('/') ? routePath : routePath + '/';
}

function addHreflang(html: string, routePath: string) {
  const pair = languagePairs.find(([fiPath, enPath]) => routePath === fiPath || routePath === enPath);
  if (!pair || html.includes('hreflang="fi-FI"')) return html;

  const [fiPath, enPath] = pair;
  const fiUrl = origin + canonicalPath(fiPath);
  const enUrl = origin + canonicalPath(enPath);
  const links = [
    '<link rel="alternate" hreflang="fi-FI" href="' + fiUrl + '" />',
    '<link rel="alternate" hreflang="en-FI" href="' + enUrl + '" />',
    '<link rel="alternate" hreflang="x-default" href="' + fiUrl + '" />',
  ].join(String.fromCharCode(10) + '    ');

  return html.replace('</head>', '    ' + links + String.fromCharCode(10) + '  </head>');
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function setCanonicalHref(html: string, href: string) {
  const tagPattern = /<link\b(?=[^>]*\brel="canonical")[^>]*>/i;
  const tag = html.match(tagPattern)?.[0];
  const escapedHref = escapeHtml(href);

  if (!tag) {
    return html.replace(
      '</head>',
      '    <link rel="canonical" href="' + escapedHref + '" />\n  </head>'
    );
  }

  const hrefPattern = /\bhref="[^"]*"/i;
  const updatedTag = hrefPattern.test(tag)
    ? tag.replace(hrefPattern, () => 'href="' + escapedHref + '"')
    : tag.replace(/\/?>$/, (ending) => ' href="' + escapedHref + '"' + ending);

  return html.replace(tag, () => updatedTag);
}

function setMetaContent(
  html: string,
  attribute: 'name' | 'property',
  key: string,
  content: string
) {
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const tagPattern = new RegExp(
    `<meta\\b(?=[^>]*\\b${attribute}="${escapedKey}")[^>]*>`,
    'i'
  );
  const tag = html.match(tagPattern)?.[0];
  if (!tag) {
    const newTag = `<meta ${attribute}="${escapeHtml(key)}" content="${escapeHtml(content)}" />`;
    return html.replace('</head>', () => `    ${newTag}\n  </head>`);
  }
  const contentPattern = /\bcontent="[^"]*"/i;
  const updatedTag = contentPattern.test(tag)
    ? tag.replace(
        contentPattern,
        () => `content="${escapeHtml(content)}"`
      )
    : tag.replace(/\/?>$/, (ending) =>
        ` content="${escapeHtml(content)}"${ending}`
      );
  return html.replace(tag, () => updatedTag);
}

const routes = [
  {
    path: '/',
    title: 'Muutto ja kuljetus Tampereella | MoveX Logistics',
    description:
      'Muutto- ja kuljetuspalvelut Tampereella ja Pirkanmaalla. Selkeät hinnat alkaen 50 €/h (sis. alv 25,5 %). Pyydä tarjous MoveX Logisticsilta.',
    canonical: `${origin}/`,
  },
  {
    path: '/blog',
    title: 'MoveX Logistics Blogi – Muutto- ja kuljetusoppaat',
    description:
      'Käytännöllisiä muutto- ja kuljetusoppaita Tampereelle, Pirkanmaalle ja koko Suomeen.',
    canonical: `${origin}/blog/`,
  },
  {
    path: '/en/blog',
    title: 'MoveX Logistics Blog – Moving & Transport Guides',
    description: 'Practical moving and transport guides for Tampere, Pirkanmaa and across Finland.',
    canonical: `${origin}/en/blog/`,
  },
  {
    path: '/blog/muutto-tampereella-tarkistuslista',
    title: 'Muutto Tampereella: käytännöllinen tarkistuslista | MoveX Logistics',
    description:
      'Käytännöllinen suomenkielinen opas muuttoon Tampereella: aikataulu, tavarat, pakkaaminen, kantaminen, palvelun valinta ja tarjouspyyntö – kaikki samasta tarkistuslistasta.',
    canonical: `${origin}/blog/muutto-tampereella-tarkistuslista/`,
  },
  {
    path: '/blog/muuttoapu-hinta-tampere',
    title: 'Muuttoapu Tampereella: hinnat ja mistä muuton hinta muodostuu? | MoveX Logistics',
    description:
      'Muuttoavun hinta Tampereella riippuu kuljetusreitistä, tavaroiden määrästä ja kantoavusta. Vertaa MoveX Logisticsin tuntihintoja ja katso, mitä tarjouspyyntöön kannattaa kertoa.',
    canonical: `${origin}/blog/muuttoapu-hinta-tampere/`,
  },
  {
    path: '/blog/huonekalukuljetus-tampere',
    title: 'Huonekalukuljetus Tampereella: mitä kannattaa ilmoittaa? | MoveX Logistics',
    description:
      'Näin saat huonekalu- ja esinekuljetuksesta mahdollisimman tarkan arvion.',
    canonical: `${origin}/blog/huonekalukuljetus-tampere/`,
  },
  {
    path: '/blog/muutto-tampereelta-muualle-suomeen',
    title: 'Muutto Tampereelta muualle Suomeen: miten tarjous muodostuu? | MoveX Logistics',
    description:
      'Yleiskatsaus asioihin, jotka vaikuttavat kaukomuuton kiinteään tarjoukseen.',
    canonical: `${origin}/blog/muutto-tampereelta-muualle-suomeen/`,
  },
  {
    path: '/pieni-muutto-tampere',
    title: 'Pieni muutto Tampere | MoveX Logistics',
    description:
      'Pieni muutto Tampereella: yksiö, opiskelijamuutto tai muutama huonekalu. Pakettiauto ja kuljettaja alkaen 50 €/h, alv sisältyy.',
    canonical: `${origin}/pieni-muutto-tampere/`,
  },
  {
    path: '/kuljetuspalvelu-tampere',
    title: 'Kuljetuspalvelu Tampere | MoveX Logistics',
    description:
      'Kuljetuspalvelu Tampereella: huonekalut, kodinkoneet, verkkokauppa- ja Tori.fi-noudot sekä pienkuljetukset. Pakettiauto ja kuljettaja alkaen 50 €/h.',
    canonical: `${origin}/kuljetuspalvelu-tampere/`,
  },
  {
    path: '/muuttopalvelu-tampere',
    title: 'Muuttopalvelu ja muuttoauto kuljettajalla Tampere | MoveX Logistics',
    description:
      'Muuttopalvelu Tampereella ja Pirkanmaalla: asunto- ja pienmuutot, pakettiauto ja kuljettaja tai 1–3 muuttomiestä. Alk. 50 €/h sis. alv. Pyydä tarjous.',
    canonical: `${origin}/muuttopalvelu-tampere/`,
  },
  {
    path: '/muuttofirma-tampere',
    title: 'Muuttofirma Tampere ja Pirkanmaa | MoveX Logistics',
    description:
      'Muuttofirma Tampereella ja Pirkanmaalla: koti- ja pienyritysmuutot, muuttoapu ja kuljetukset. Pakettiauto + kuljettaja 50 €/h (sis. alv). Pyydä tarjous.',
    canonical: `${origin}/muuttofirma-tampere/`,
  },
  {
    path: '/huonekalukuljetus-tampere',
    title: 'Huonekalukuljetus Tampere | MoveX Logistics',
    description:
      'Huonekalukuljetus Tampereella: sohvat, sängyt, kodinkoneet ja Tori.fi-ostokset. Pakettiauto ja kuljettaja alkaen 50 €/h (sis. alv 25,5 %).',
    canonical: `${origin}/huonekalukuljetus-tampere/`,
  },

  {
    path: '/blog/opiskelijamuutto-tampere',
    title: 'Opiskelijamuutto Tampereella: hinta, pakkaaminen ja muuttoapu | MoveX Logistics',
    description:
      'Suunnitteletko yksiön tai opiskelija-asunnon muuttoa Tampereella? Katso hinnat, pakkausvinkit ja milloin kannattaa ottaa kantoapua.',
    canonical: `${origin}/blog/opiskelijamuutto-tampere/`,
  },
  {
    path: '/blog/tori-ikea-kuljetus-tampere',
    title: 'Tori.fi- ja IKEA-kuljetus Tampereella: näin tilaat huonekalukuljetuksen | MoveX Logistics',
    description:
      'Ostitko sohvan, sängyn tai pöydän Tori.fi:stä tai kaupasta? Näin suunnittelet huonekalun noudon ja kuljetuksen Tampereella.',
    canonical: `${origin}/blog/tori-ikea-kuljetus-tampere/`,
  },
  {
    path: '/blog/pakettiauto-kuljettajalla-tampere',
    title: 'Muuttoauto Tampereella kuljettajalla | MoveX Logistics',
    description:
      'Tarvitsetko muuttoauton Tampereella? MoveX tarjoaa pakettiauton ja kuljettajan 50 €/h (sis. alv 25,5 %). Katso palvelun sisältö ja pyydä tarjous.',
    canonical: `${origin}/blog/pakettiauto-kuljettajalla-tampere/`,
  },

  {
    path: '/en',
    title: 'Moving & Transport in Tampere, Finland | MoveX Logistics',
    description: 'Moving and transport services in Tampere and Pirkanmaa, Finland. Clear hourly prices from €50 including Finnish VAT. Request a quote.',
    canonical: `${origin}/en/`,
  },
  {
    path: '/en/moving-service-tampere',
    title: 'Moving Service in Tampere & Pirkanmaa | MoveX Logistics',
    description: 'Moving service in Tampere and Pirkanmaa, Finland. Van and driver or 1–3 movers for local and long-distance moves. From €50/hour incl. VAT.',
    canonical: `${origin}/en/moving-service-tampere/`,
  },
  {
    path: '/en/moving-company-tampere',
    title: 'Moving Company in Tampere, Finland | MoveX Logistics',
    description: 'Moving company in Tampere and Pirkanmaa, Finland. Home and small business moves, van and driver from €50/hour incl. VAT. Request a quote.',
    canonical: `${origin}/en/moving-company-tampere/`,
  },
  {
    path: '/en/furniture-transport-tampere',
    title: 'Furniture Transport in Tampere | MoveX Logistics',
    description: 'Furniture transport in Tampere for sofas, beds, appliances and Tori.fi purchases. Van and driver from €50/hour, including Finnish VAT.',
    canonical: `${origin}/en/furniture-transport-tampere/`,
  },
  {
    path: '/en/small-move-tampere',
    title: 'Small Move in Tampere | MoveX Logistics',
    description: 'Small moves in Tampere: studio flats, student moves and a few items. Van and driver from €50/hour, Finnish VAT included.',
    canonical: `${origin}/en/small-move-tampere/`,
  },
  {
    path: '/muuttopalvelu-hinta-tampere',
    title: 'Muuttoapu ja muuttopalvelun hinta Tampere – hinnasto | MoveX Logistics',
    description: 'Muuttopalvelun hinta Tampereella alkaen 50 €/h. Vertaa selkeitä tuntihintoja, katso mistä muuton hinta muodostuu ja pyydä tarjous.',
    canonical: `${origin}/muuttopalvelu-hinta-tampere/`,
  },
  {
    path: '/en/transport-service-tampere',
    title: 'Transport Service in Tampere | MoveX Logistics',
    description: 'Transport service in Tampere and Pirkanmaa for furniture, appliances, store pickups and smaller loads. Van and driver from €50/hour incl. VAT.',
    canonical: `${origin}/en/transport-service-tampere/`,
  },
  {
    path: '/en/moving-cost-tampere',
    title: 'Moving Costs in Tampere, Finland | MoveX Logistics',
    description: 'Moving costs in Tampere, Finland: van and driver from €50/hour. Compare clear hourly rates, understand what affects the price and request a quote.',
    canonical: `${origin}/en/moving-cost-tampere/`,
  },
  {
    path: '/ikea-kuljetus-tampere',
    title: 'IKEA-kuljetus Tampere – nouto ja kotiinkuljetus | MoveX Logistics',
    description: 'IKEA-kuljetus Tampereella ja Pirkanmaalla: noudamme huonekalut ja paketit myymälästä tai noutopisteestä kotiisi. Pakettiauto + kuljettaja 50 €/h sis. alv.',
    canonical: `${origin}/ikea-kuljetus-tampere/`,
  },
  {
    path: '/en/ikea-delivery-tampere',
    title: 'IKEA Delivery in Tampere – Pickup & Home Delivery | MoveX Logistics',
    description: 'IKEA delivery in Tampere and Pirkanmaa: we collect your furniture and boxes from the store or pickup point and bring them home. Van and driver €50/h incl. VAT.',
    canonical: `${origin}/en/ikea-delivery-tampere/`,
  },
  {
    path: '/tori-nouto-tampere',
    title: 'Tori.fi- ja Marketplace-nouto Tampere | MoveX Logistics',
    description: 'Ostitko sohvan tai pesukoneen Tori.fi:stä tai Facebook Marketplacesta? Noudamme tavaran myyjältä ja tuomme sen kotiisi Tampereella ja Pirkanmaalla. 50 €/h sis. alv.',
    canonical: `${origin}/tori-nouto-tampere/`,
  },
  {
    path: '/en/marketplace-pickup-tampere',
    title: 'Tori.fi & Facebook Marketplace Pickup in Tampere | MoveX Logistics',
    description: 'Bought a sofa or washing machine on Tori.fi or Facebook Marketplace? We collect it from the seller and deliver it to your home in Tampere and Pirkanmaa. €50/h incl. VAT.',
    canonical: `${origin}/en/marketplace-pickup-tampere/`,
  },
  {
    path: '/kodinkonekuljetus-tampere',
    title: 'Kodinkonekuljetus Tampere – pesukone, jääkaappi, liesi | MoveX Logistics',
    description: 'Kodinkoneiden kuljetus Tampereella ja Pirkanmaalla: pesukoneet, jääkaapit, pakastimet ja liedet. Kantoapu saatavilla. 1 muuttomies + auto 75 €/h sis. alv.',
    canonical: `${origin}/kodinkonekuljetus-tampere/`,
  },
  {
    path: '/en/appliance-transport-tampere',
    title: 'Appliance Transport in Tampere – Washing Machines & Fridges | MoveX Logistics',
    description: 'Appliance transport in Tampere and Pirkanmaa: washing machines, fridges, freezers and cookers. Carrying help available. 1 mover + van €75/h incl. VAT.',
    canonical: `${origin}/en/appliance-transport-tampere/`,
  },
  {
    path: '/opiskelijamuutto-tampere',
    title: 'Opiskelijamuutto Tampere – edullinen muuttoapu | MoveX Logistics',
    description: 'Opiskelijamuutto Tampereella: yksiö, soluhuone tai muutama huonekalu. Pakettiauto + kuljettaja 50 €/h sis. alv, kantoapu saatavilla. Pyydä tarjous.',
    canonical: `${origin}/opiskelijamuutto-tampere/`,
  },
  {
    path: '/en/student-move-tampere',
    title: 'Student Move in Tampere – Affordable Moving Help | MoveX Logistics',
    description: 'Student moves in Tampere: studio, shared flat room or a few pieces of furniture. Van + driver €50/h incl. VAT, carrying help available. Request a quote.',
    canonical: `${origin}/en/student-move-tampere/`,
  },
  {
    path: '/kaatopaikkakuljetus-tampere',
    title: 'Kaatopaikkakuljetus Tampere – vanhojen huonekalujen poisvienti | MoveX Logistics',
    description: 'Viemme vanhat sohvat, tuolit, patjat ja muut tavarat jäteasemalle Tampereella ja Pirkanmaalla. Tuntihinta alkaen 50 €/h tai kiinteä hinta tarjouksella.',
    canonical: `${origin}/kaatopaikkakuljetus-tampere/`,
  },
  {
    path: '/en/junk-removal-tampere',
    title: 'Junk Removal in Tampere – Old Furniture Taken Away | MoveX Logistics',
    description: 'We take old sofas, chairs, mattresses and other items to the waste station in Tampere and Pirkanmaa. Hourly from €50/h or a fixed price by quote.',
    canonical: `${origin}/en/junk-removal-tampere/`,
  },
  {
    path: '/muutto-nokia',
    title: 'Muutto Nokia – muuttofirma ja kuljetukset Nokialla | MoveX Logistics',
    description: 'Muutot, huonekalukuljetukset, IKEA- ja Tori.fi-noudot sekä kaatopaikkakuljetukset Nokialla. Pakettiauto + kuljettaja 50 €/h sis. alv. Pyydä tarjous.',
    canonical: `${origin}/muutto-nokia/`,
  },
  {
    path: '/en/moving-nokia',
    title: 'Moving in Nokia – Movers & Transport | MoveX Logistics',
    description: 'Moves, furniture transport, IKEA and Tori.fi pickups and junk removal in Nokia, near Tampere. Van + driver €50/h incl. VAT. Request a quote.',
    canonical: `${origin}/en/moving-nokia/`,
  },
  {
    path: '/muutto-ylojarvi',
    title: 'Muutto Ylöjärvi – muuttofirma ja kuljetukset Ylöjärvellä | MoveX Logistics',
    description: 'Muutot, huonekalukuljetukset, IKEA- ja Tori.fi-noudot sekä kaatopaikkakuljetukset Ylöjärvellä. Pakettiauto + kuljettaja 50 €/h sis. alv. Pyydä tarjous.',
    canonical: `${origin}/muutto-ylojarvi/`,
  },
  {
    path: '/en/moving-ylojarvi',
    title: 'Moving in Ylöjärvi – Movers & Transport | MoveX Logistics',
    description: 'Moves, furniture transport, IKEA and Tori.fi pickups and junk removal in Ylöjärvi, near Tampere. Van + driver €50/h incl. VAT. Request a quote.',
    canonical: `${origin}/en/moving-ylojarvi/`,
  },
  {
    path: '/muutto-pirkkala',
    title: 'Muutto Pirkkala – muuttofirma ja kuljetukset Pirkkalassa | MoveX Logistics',
    description: 'Muutot, huonekalukuljetukset, IKEA- ja Tori.fi-noudot sekä kaatopaikkakuljetukset Pirkkalassa. Pakettiauto + kuljettaja 50 €/h sis. alv. Pyydä tarjous.',
    canonical: `${origin}/muutto-pirkkala/`,
  },
  {
    path: '/en/moving-pirkkala',
    title: 'Moving in Pirkkala – Movers & Transport | MoveX Logistics',
    description: 'Moves, furniture transport, IKEA and Tori.fi pickups and junk removal in Pirkkala, near Tampere. Van + driver €50/h incl. VAT. Request a quote.',
    canonical: `${origin}/en/moving-pirkkala/`,
  },
  {
    path: '/muutto-lempaala',
    title: 'Muutto Lempäälä – muuttofirma ja kuljetukset Lempäälässä | MoveX Logistics',
    description: 'Muutot, huonekalukuljetukset, IKEA- ja Tori.fi-noudot sekä kaatopaikkakuljetukset Lempäälässä. Pakettiauto + kuljettaja 50 €/h sis. alv. Pyydä tarjous.',
    canonical: `${origin}/muutto-lempaala/`,
  },
  {
    path: '/en/moving-lempaala',
    title: 'Moving in Lempäälä – Movers & Transport | MoveX Logistics',
    description: 'Moves, furniture transport, IKEA and Tori.fi pickups and junk removal in Lempäälä, near Tampere. Van + driver €50/h incl. VAT. Request a quote.',
    canonical: `${origin}/en/moving-lempaala/`,
  },
  {
    path: '/muutto-kangasala',
    title: 'Muutto Kangasala – muuttofirma ja kuljetukset Kangasalla | MoveX Logistics',
    description: 'Muutot, huonekalukuljetukset, IKEA- ja Tori.fi-noudot sekä kaatopaikkakuljetukset Kangasalla. Pakettiauto + kuljettaja 50 €/h sis. alv. Pyydä tarjous.',
    canonical: `${origin}/muutto-kangasala/`,
  },
  {
    path: '/en/moving-kangasala',
    title: 'Moving in Kangasala – Movers & Transport | MoveX Logistics',
    description: 'Moves, furniture transport, IKEA and Tori.fi pickups and junk removal in Kangasala, near Tampere. Van + driver €50/h incl. VAT. Request a quote.',
    canonical: `${origin}/en/moving-kangasala/`,
  },
  {
    path: '/muutto-hervanta',
    title: 'Muutto Hervanta – muuttofirma ja kuljetukset Hervannassa | MoveX Logistics',
    description: 'Muutot, huonekalukuljetukset, IKEA- ja Tori.fi-noudot sekä kaatopaikkakuljetukset Hervannassa. Pakettiauto + kuljettaja 50 €/h sis. alv. Pyydä tarjous.',
    canonical: `${origin}/muutto-hervanta/`,
  },
  {
    path: '/en/moving-hervanta',
    title: 'Moving in Hervanta – Movers & Transport | MoveX Logistics',
    description: 'Moves, furniture transport, IKEA and Tori.fi pickups and junk removal in Hervanta, near Tampere. Van + driver €50/h incl. VAT. Request a quote.',
    canonical: `${origin}/en/moving-hervanta/`,
  },
  ...blogArticles.filter((article) => article.published).map((article) => ({
    path: `/en/blog/${article.slug}`,
    title: `${article.title.en} | MoveX Logistics`,
    description: article.excerpt.en,
    canonical: `${origin}/en/blog/${article.slug}/`,
  })),
];

export function prerenderPlugin() {
  return {
    name: 'prerender',
    apply: 'build' as const,
    closeBundle: async () => {
      const tmpFile = path.resolve(__dirname, 'dist/.server-entry.mjs');

      await esbuildBuild({
        entryPoints: [path.resolve(__dirname, 'src/entry-server.tsx')],
        bundle: true,
        outfile: tmpFile,
        format: 'esm',
        platform: 'neutral',
        jsx: 'automatic',
        logLevel: 'silent',
        alias: { '@': path.resolve(__dirname, 'src') },
        define: {
          'process.env.NODE_ENV': '"production"',
          'import.meta.env.VITE_SUPABASE_URL': '""',
          'import.meta.env.VITE_SUPABASE_ANON_KEY': '""',
        },
        external: [
          'react',
          'react-dom',
          'react-dom/server',
          'lucide-react',
          '@supabase/supabase-js',
        ],
      });

      const mod = await import(`file://${tmpFile}`);
      const template = fs.readFileSync(
        path.resolve(__dirname, 'dist/index.html'),
        'utf-8'
      );

      for (const route of routes) {
        const appHtml = mod.render(route.path);
        const routeLanguage = route.path === '/en' || route.path.startsWith('/en/') ? 'en' : 'fi';
        const routeTemplate = template.replace(
          /<html\b([^>]*\blang=")[^"]*"/i,
          (_match, prefix: string) => `<html${prefix}${routeLanguage}"`
        );
        const htmlLanguage = routeTemplate.match(/<html\b[^>]*\blang="([^"]+)"/i)?.[1];
        if (htmlLanguage !== routeLanguage) {
          throw new Error('Incorrect or missing HTML language for ' + route.path + ': ' + (htmlLanguage ?? 'missing'));
        }
        let html = routeTemplate.replace(
          '<div id="root"></div>',
          () =>
            `<div id="root" data-prerendered-path="${escapeHtml(route.path)}">${appHtml}</div>`
        );

        html = html.replace(
          /<title>.*?<\/title>/s,
          () => `<title>${escapeHtml(route.title)}</title>`
        );
        // Always ensure SEO tags exist; don't rely on the base template containing them.
        html = setMetaContent(html, 'name', 'description', route.description);
        html = setCanonicalHref(html, route.canonical);
        html = setMetaContent(html, 'property', 'og:title', route.title);
        html = setMetaContent(
          html,
          'property',
          'og:description',
          route.description
        );
        html = setMetaContent(html, 'property', 'og:url', route.canonical);
        html = setMetaContent(html, 'name', 'twitter:title', route.title);
        html = setMetaContent(
          html,
          'name',
          'twitter:description',
          route.description
        );
        html = html.replace(
          /<meta name="robots" content="[^"]*"/,
          '<meta name="robots" content="index, follow"'
        );

        const headEnd = html.indexOf('</head>');
        const renderedHead = headEnd >= 0 ? html.slice(0, headEnd) : html;
        const hasDescription = /<meta\b(?=[^>]*\bname="description")[^>]*\bcontent="[^"]+"/i.test(renderedHead);
        const canonicalMatch = renderedHead.match(/<link\b(?=[^>]*\brel="canonical")[^>]*\bhref="([^"]+)"/i);
        if (!hasDescription || !canonicalMatch || canonicalMatch[1] !== route.canonical) {
          throw new Error('Missing or incorrect SEO metadata for ' + route.path + ': description=' + hasDescription + ', canonical=' + (canonicalMatch?.[1] ?? 'missing'));
        }

        const outPath =
          route.path === '/'
            ? path.resolve(__dirname, 'dist/index.html')
            : path.resolve(__dirname, `dist${route.path}/index.html`);

        html = addHreflang(html, route.path);

        fs.mkdirSync(path.dirname(outPath), { recursive: true });
        fs.writeFileSync(outPath, html);

        const wordCount = appHtml
          .replace(/<[^>]+>/g, ' ')
          .trim()
          .split(/\s+/).length;
        console.log(`  prerendered ${route.path} (${wordCount} words)`);
      }

      fs.rmSync(tmpFile, { force: true });
    },
  };
}
