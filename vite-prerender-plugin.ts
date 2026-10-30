import { build as esbuildBuild } from 'esbuild';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const origin = 'https://movexlogistics.fi';

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
    title: 'Muuttopalvelu Tampere | MoveX Logistics',
    description:
      'Muuttopalvelu Tampereella: pakettiauto ja kuljettaja tai 1–3 muuttomiestä. Hinnat alkaen 50 €/h (sis. alv 25,5 %). Pyydä tarjous.',
    canonical: `${origin}/muuttopalvelu-tampere/`,
  },
  {
    path: '/muuttofirma-tampere',
    title: 'Muuttofirma Tampere | MoveX Logistics',
    description:
      'Muuttofirma Tampereella koteihin ja pienyrityksille. Pakettiauto ja kuljettaja alkaen 50 €/h, 1 muuttomies ja auto alkaen 75 €/h (sis. alv 25,5 %). Pyydä tarjous.',
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
    title: 'Pakettiauto kuljettajalla Tampereella: hinta ja käyttökohteet | MoveX Logistics',
    description:
      'Pakettiauto ja kuljettaja Tampereella alkaen 50 €/h (sis. alv 25,5 %). Katso palvelun käyttökohteet ja mitä tarjouspyyntöön tarvitaan.',
    canonical: `${origin}/blog/pakettiauto-kuljettajalla-tampere/`,
  },
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
        let html = template.replace(
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
