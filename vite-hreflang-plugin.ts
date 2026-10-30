import fs from 'node:fs';
import path from 'node:path';

const outputDir = path.resolve(process.cwd(), 'dist');
const origin = 'https://movexlogistics.fi';

// The app uses the same landing-page slug under /en/ and switches language by prefix.
const languagePairs = [
  ['/', '/en/'],
  ['/muuttopalvelu-tampere/', '/en/muuttopalvelu-tampere/'],
  ['/muuttofirma-tampere/', '/en/muuttofirma-tampere/'],
  ['/huonekalukuljetus-tampere/', '/en/huonekalukuljetus-tampere/'],
  ['/pieni-muutto-tampere/', '/en/pieni-muutto-tampere/'],
  ['/kuljetuspalvelu-tampere/', '/en/kuljetuspalvelu-tampere/'],
] as const;

function outputPath(route: string) {
  const normalized = route.replace(/^\/+|\/+$/g, '');
  return path.join(outputDir, normalized, 'index.html');
}

function alternateLinks(fiPath: string, enPath: string) {
  const fiUrl = `${origin}${fiPath}`;
  const enUrl = `${origin}${enPath}`;
  return [
    `<link rel="alternate" hreflang="fi-FI" href="${fiUrl}" />`,
    `<link rel="alternate" hreflang="en-FI" href="${enUrl}" />`,
    `<link rel="alternate" hreflang="x-default" href="${fiUrl}" />`,
  ].join('\n    ');
}

export function hreflangPlugin() {
  return {
    name: 'hreflang-prerendered-pages',
    apply: 'build' as const,
    closeBundle: {
      order: 'post' as const,
      handler() {
        for (const [fiPath, enPath] of languagePairs) {
          const markup = alternateLinks(fiPath, enPath);
          for (const route of [fiPath, enPath]) {
            const file = outputPath(route);
            if (!fs.existsSync(file)) {
              throw new Error(`Cannot add hreflang links; prerendered page is missing: ${file}`);
            }
            const html = fs.readFileSync(file, 'utf8');
            if (html.includes('hreflang="fi-FI"')) continue;
            if (!html.includes('</head>')) {
              throw new Error(`Cannot add hreflang links; </head> is missing in ${file}`);
            }
            fs.writeFileSync(file, html.replace('</head>', `    ${markup}\n  </head>`));
          }
        }
        console.log('  added reciprocal fi-FI/en-FI hreflang links to 6 language pairs');
      },
    },
  };
}
