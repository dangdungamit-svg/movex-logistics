const ORIGIN = 'https://movexlogistics.fi';

function absolutePath(path: string) {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${ORIGIN}${normalized === '/' ? '/' : `${normalized.replace(/\/+$/, '')}/`}`;
}

/** Add reciprocal Finnish/English language alternatives for the current page. */
export function setHreflangLinks(finnishPath: string, englishPath: string) {
  document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((link) => link.remove());

  const alternatives = [
    { language: 'fi-FI', path: finnishPath },
    { language: 'en-FI', path: englishPath },
    { language: 'x-default', path: finnishPath },
  ];

  alternatives.forEach(({ language, path }) => {
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.hreflang = language;
    link.href = absolutePath(path);
    document.head.appendChild(link);
  });
}
