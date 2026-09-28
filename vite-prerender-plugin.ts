import { build as esbuildBuild } from 'esbuild';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const origin = 'https://movex-logistics-webs-zpae.bolt.host';

const routes = [
  {
    path: '/',
    title: 'MoveX Logistics – Muutto ja kuljetus Tampereella | Selkeät hinnat',
    description:
      'MoveX Logistics tarjoaa ammattimaiset muutto- ja kuljetuspalvelut Tampereella, Pirkanmaalla ja koko Suomessa. Selkeät hinnat, huolellinen käsittely ja suora yhteydenotto. Pyydä tarjous!',
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
        },
        external: ['react', 'react-dom', 'react-dom/server', 'lucide-react'],
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
          `<div id="root">${appHtml}</div>`
        );

        html = html.replace(
          /<title>.*?<\/title>/s,
          `<title>${route.title}</title>`
        );
        html = html.replace(
          /<meta name="description" content="[^"]*"/,
          `<meta name="description" content="${route.description}"`
        );
        html = html.replace(
          /<link rel="canonical" href="[^"]*"/,
          `<link rel="canonical" href="${route.canonical}"`
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
