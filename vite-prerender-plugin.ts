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
    canonical: `${origin}/blog`,
  },
  {
    path: '/blog/muutto-tampereella-tarkistuslista',
    title: 'Muutto Tampereella: käytännöllinen tarkistuslista | MoveX Logistics',
    description:
      'Käytännöllinen suomi opas muuttoon Tampereella: aikataulu, tavarat, pakkaaminen, kantaminen, palvelun valinta ja tarjouspyyntö – kaikki samasta tarkistuslistasta.',
    canonical: `${origin}/blog/muutto-tampereella-tarkistuslista`,
  },
  {
    path: '/blog/huonekalukuljetus-tampere',
    title: 'Huonekalukuljetus Tampereella: mitä kannattaa ilmoittaa? | MoveX Logistics',
    description:
      'Näin saat huonekalu- ja esinekuljetuksesta mahdollisimman tarkan arvion.',
    canonical: `${origin}/blog/huonekalukuljetus-tampere`,
  },
  {
    path: '/blog/muutto-tampereelta-muualle-suomeen',
    title: 'Muutto Tampereelta muualle Suomeen: miten tarjous muodostuu? | MoveX Logistics',
    description:
      'Yleiskatsaus asioihin, jotka vaikuttavat kaukomuuton kiinteään tarjoukseen.',
    canonical: `${origin}/blog/muutto-tampereelta-muualle-suomeen`,
  },
  {
    path: '/muuttopalvelu-tampere',
    title: 'Muuttopalvelu Tampere | MoveX Logistics',
    description:
      'Muuttopalvelu Tampereella: pakettiauto ja kuljettaja tai 1–3 muuttomiestä. Hinnat alkaen 50 €/h (sis. alv 25,5 %). Pyydä tarjous.',
    canonical: `${origin}/muuttopalvelu-tampere`,
  },
  {
    path: '/muuttofirma-tampere',
    title: 'Muuttofirma Tampere | MoveX Logistics',
    description:
      'Muuttofirma Tampereella asunto-, talo- ja pienyritysmuuttoihin. Muuttomiehet ja pakettiauto alkaen 50 €/h (sis. alv 25,5 %). Pyydä tarjous.',
    canonical: `${origin}/muuttofirma-tampere`,
  },
  {
    path: '/huonekalukuljetus-tampere',
    title: 'Huonekalukuljetus Tampere | MoveX Logistics',
    description:
      'Huonekalukuljetus Tampereella: sohvat, sängyt, kodinkoneet ja Tori.fi-ostokset. Pakettiauto ja kuljettaja alkaen 50 €/h (sis. alv 25,5 %).',
    canonical: `${origin}/huonekalukuljetus-tampere`,
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
        html = html.replace(
          /<meta name="description" content="[^"]*"/,
          () =>
            `<meta name="description" content="${escapeHtml(route.description)}"`
        );
        html = html.replace(
          /<link rel="canonical" href="[^"]*"/,
          () => `<link rel="canonical" href="${escapeHtml(route.canonical)}"`
        );
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
