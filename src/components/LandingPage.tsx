import { useEffect } from 'react';
import { ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { getWhatsAppLink, useLanguage } from '@/i18n/LanguageContext';
import { COMPANY } from '@/i18n/translations';
import { landingPages, type LandingPage as LandingPageData } from '@/i18n/landing';

const origin = 'https://movexlogistics.fi';

function canonicalUrl(path: string) {
  return `${origin}${path === '/' ? '/' : `${path.replace(/\/+$/, '')}/`}`;
}
const textLinkClass =
  'font-semibold text-slate-700 underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2';

// Keep client metadata updates aligned with setMetaContent in vite-prerender-plugin.ts.
function updateMetaContent(
  attribute: 'name' | 'property',
  key: string,
  content: string
) {
  let meta = document.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`
  );
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, key);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
}

export default function LandingPage({ page }: { page: LandingPageData }) {
  const { lang, t } = useLanguage();

  useEffect(() => {
    document.title = page.title[lang];
    updateMetaContent('name', 'description', page.description[lang]);
    updateMetaContent('property', 'og:title', page.title[lang]);
    updateMetaContent('property', 'og:description', page.description[lang]);
    updateMetaContent('property', 'og:url', `${canonicalUrl(page.path)}`);
    updateMetaContent('name', 'twitter:title', page.title[lang]);
    updateMetaContent('name', 'twitter:description', page.description[lang]);
    const canonical = document.querySelector('link[rel="canonical"]') ?? document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', `${canonicalUrl(page.path)}`);
    if (!canonical.parentElement) document.head.appendChild(canonical);
  }, [page, lang]);

  const faq = page.faq[lang];
  const relatedPages = landingPages.filter(
    (relatedPage) => relatedPage.path !== page.path
  );
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: page.h1[lang],
      description: page.description[lang],
      url: `${canonicalUrl(page.path)}`,
      provider: { '@type': 'Organization', name: COMPANY.name, url: `${origin}/` },
      areaServed: ['Tampere', 'Pirkanmaa'],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 pb-20 pt-28 lg:pt-36">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold leading-tight text-slate-900 sm:text-5xl">{page.h1[lang]}</h1>
        <p className="mt-5 text-lg leading-relaxed text-slate-600">{page.intro[lang]}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="/#contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white">
            {t.nav.getQuote} <ArrowRight className="h-4 w-4" />
          </a>
          <a href={getWhatsAppLink(lang)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-slate-950">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <a href={COMPANY.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-300">
            <Phone className="h-4 w-4" /> {COMPANY.phone}
          </a>
        </div>
        <div className="mt-10 space-y-9">
          {page.sections[lang].map((s) => (
            <section key={s.heading}>
              <h2 className="font-display text-2xl font-bold text-slate-900">{s.heading}</h2>
              {s.paragraphs.map((p) => (
                <p key={p} className="mt-3 text-base leading-relaxed text-slate-600">{p}</p>
              ))}
            </section>
          ))}
          <section>
            <h2 className="font-display text-2xl font-bold text-slate-900">{lang === 'fi' ? 'Usein kysyttyä' : 'FAQ'}</h2>
            <div className="mt-3 space-y-4">
              {faq.map((f) => (
                <div key={f.q}>
                  <h3 className="font-semibold text-slate-900">{f.q}</h3>
                  <p className="mt-1 text-base leading-relaxed text-slate-600">{f.a}</p>
                </div>
              ))}
            </div>
          </section>
          <section aria-labelledby="related-services">
            <h2 id="related-services" className="font-display text-2xl font-bold text-slate-900">
              {t.services.relatedTitle}
            </h2>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
              {relatedPages.map((relatedPage) => (
                <li key={relatedPage.path}>
                  <a href={relatedPage.path} className={textLinkClass}>
                    {relatedPage.navLabel[lang]}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <p className="mt-10 text-sm font-semibold">
          <a href="/#pricing" className={`mr-5 ${textLinkClass}`}>{t.nav.pricing}</a>
          <a href="/#services" className={`mr-5 ${textLinkClass}`}>{t.nav.services}</a>
          <a href="/blog" className={textLinkClass}>{t.nav.blog}</a>
        </p>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    </main>
  );
}
