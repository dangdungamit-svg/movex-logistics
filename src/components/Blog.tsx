import { ArrowRight, BookOpen, Check, Clock, MessageCircle, Phone, Truck } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { getWhatsAppLink, useLanguage } from '@/i18n/LanguageContext';
import { COMPANY } from '@/i18n/translations';
import { blogArticles, getBlogArticle, type BlogArticle } from '@/i18n/blog';

const blogAccent = '#8f3b46';

function setPageMetadata(title: string, description: string, path: string, noIndex = false) {
  document.title = title;
  const descriptionTag = document.querySelector('meta[name="description"]');
  descriptionTag?.setAttribute('content', description);
  const robots = document.querySelector('meta[name="robots"]') ?? document.createElement('meta');
  robots.setAttribute('name', 'robots');
  robots.setAttribute('content', noIndex ? 'noindex, nofollow' : 'index, follow');
  if (!robots.parentElement) document.head.appendChild(robots);
  const canonical = document.querySelector('link[rel="canonical"]') ?? document.createElement('link');
  canonical.setAttribute('rel', 'canonical');
  canonical.setAttribute('href', `${window.location.origin}${path}`);
  if (!canonical.parentElement) document.head.appendChild(canonical);
}

function BlogMark() {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl text-white" style={{ backgroundColor: blogAccent }}>
      <BookOpen className="h-6 w-6" />
    </div>
  );
}

function BlogCTA() {
  const { lang, t } = useLanguage();
  return (
    <div className="mt-12 overflow-hidden rounded-3xl bg-slate-900 p-7 text-white shadow-xl sm:p-10">
      <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            {lang === 'fi' ? 'Oletko suunnittelemassa muuttoa?' : 'Planning a move?'}
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
            {lang === 'fi' ? 'Kerro meille työstäsi' : 'Tell us about your job'}
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300">
            {lang === 'fi'
              ? 'Saat selkeän hinnan tai tarjouksen työn tietojen perusteella.'
              : 'Get a clear price or quotation based on your job details.'}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href={getWhatsAppLink(lang)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1da851]">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <a href={COMPANY.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition-colors hover:bg-white/10">
            <Phone className="h-4 w-4" /> {t.hero.ctaCall}
          </a>
        </div>
      </div>
    </div>
  );
}

function ArticleCard({ article }: { article: BlogArticle }) {
  const { lang } = useLanguage();
  return (
    <article className="group flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-slate-300 sm:p-7">
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full px-3 py-1 text-xs font-semibold" style={{ backgroundColor: '#f5e8ea', color: blogAccent }}>
          {article.category[lang]}
        </span>
        <span className="flex items-center gap-1.5 text-xs text-slate-500"><Clock className="h-3.5 w-3.5" />{article.readTime[lang]}</span>
      </div>
      <h2 className="mt-5 font-display text-xl font-bold leading-tight text-slate-900">{article.title[lang]}</h2>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{article.excerpt[lang]}</p>
      <a href={`/blog/${article.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-bold transition-colors" style={{ color: blogAccent }}>
        {lang === 'fi' ? 'Lue artikkeli' : 'Read article'} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </a>
    </article>
  );
}

export function BlogHome() {
  const { lang } = useLanguage();
  useEffect(() => {
    setPageMetadata(
      lang === 'fi' ? 'MoveX Logistics Blogi – Muutto- ja kuljetusoppaat' : 'MoveX Logistics Blog – Moving & Transport Guides',
      lang === 'fi' ? 'Käytännöllisiä muutto- ja kuljetusoppaita Tampereelle, Pirkanmaalle ja koko Suomeen.' : 'Practical moving and transport guides for Tampere, Pirkanmaa and across Finland.',
      '/blog',
    );
  }, [lang]);

  return (
    <main className="min-h-screen bg-[#f4f2f0] pb-20 pt-28 lg:pt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-3xl text-center">
          <div className="mx-auto w-fit"><BlogMark /></div>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em]" style={{ color: blogAccent }}>{lang === 'fi' ? 'MoveX Logistics · Blogi' : 'MoveX Logistics · Journal'}</p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{lang === 'fi' ? 'Muutto ja kuljetus, selkeästi' : 'Moving and transport, made clear'}</h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">{lang === 'fi' ? 'Käytännöllisiä oppaita muuton, huonekalukuljetusten ja kaukokuljetusten suunnitteluun.' : 'Practical guides for planning moves, furniture transport and long-distance transport.'}</p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-600 ring-1 ring-slate-200"><Check className="h-4 w-4" style={{ color: blogAccent }} /> {lang === 'fi' ? 'Julkaistut oppaat' : 'Published guides'}</div>
        </section>
        <section className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3" aria-label={lang === 'fi' ? 'Blogioppaat' : 'Blog guides'}>
          {blogArticles.map((article) => <ArticleCard key={article.slug} article={article} />)}
        </section>
        <BlogCTA />
      </div>
    </main>
  );
}

export function BlogArticle({ slug }: { slug: string }) {
  const { lang } = useLanguage();
  const article = getBlogArticle(slug);
  const ldJsonRef = useRef<HTMLScriptElement>(null);

  useEffect(() => {
    if (!article) return;
    setPageMetadata(`${article.title[lang]} | MoveX Logistics`, article.excerpt[lang], `/blog/${article.slug}`, !article.published);
  }, [article, lang]);

  useEffect(() => {
    if (!article || !ldJsonRef.current) return;
    const data = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: article.title[lang],
      description: article.excerpt[lang],
      url: `${window.location.origin}/blog/${article.slug}`,
      mainEntityOfPage: `${window.location.origin}/blog/${article.slug}`,
      author: { '@type': 'Organization', name: COMPANY.name },
      publisher: { '@type': 'Organization', name: COMPANY.name },
      isAccessibleForFree: true,
    };
    const script = ldJsonRef.current;
    const textNode = document.createTextNode(JSON.stringify(data));
    script.textContent = '';
    script.appendChild(textNode);
  }, [article, lang]);

  if (!article) {
    return <main className="min-h-screen bg-[#f4f2f0] px-4 pb-20 pt-36 text-center"><h1 className="font-display text-3xl font-bold text-slate-900">{lang === 'fi' ? 'Artikkelia ei löytynyt' : 'Article not found'}</h1><a href="/blog" className="mt-5 inline-flex font-semibold" style={{ color: blogAccent }}>{lang === 'fi' ? 'Palaa blogiin' : 'Back to blog'}</a></main>;
  }

  return (
    <main className="min-h-screen bg-[#f4f2f0] pb-20 pt-28 lg:pt-36">
      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <a href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-slate-900"><ArrowRight className="h-4 w-4 rotate-180" /> {lang === 'fi' ? 'Kaikki oppaat' : 'All guides'}</a>
        <div className="mt-8 rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200/70 sm:p-10 lg:p-14">
          <div className="flex flex-wrap items-center gap-3"><span className="rounded-full px-3 py-1 text-xs font-bold" style={{ backgroundColor: '#f5e8ea', color: blogAccent }}>{article.category[lang]}</span><span className="text-xs text-slate-500">{article.readTime[lang]}</span></div>
          <h1 className="mt-6 font-display text-3xl font-bold leading-tight text-slate-900 sm:text-5xl">{article.title[lang]}</h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">{article.excerpt[lang]}</p>
          <div className="mt-10 space-y-9">
            {article.sections[lang].map((section) => <section key={section.heading}><h2 className="font-display text-2xl font-bold text-slate-900">{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-3 text-base leading-8 text-slate-600">{paragraph}</p>)}</section>)}
          </div>
          <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 border-t border-slate-200 pt-6 text-sm font-semibold"><a href="/#services" className="transition-colors hover:text-slate-900" style={{ color: blogAccent }}>{lang === 'fi' ? 'Tutustu palveluihin' : 'Explore services'}</a><a href="/#pricing" className="transition-colors hover:text-slate-900" style={{ color: blogAccent }}>{lang === 'fi' ? 'Katso hinnat' : 'See prices'}</a><a href="/#faq" className="transition-colors hover:text-slate-900" style={{ color: blogAccent }}>FAQ</a></div>
        </div>
        <BlogCTA />
      </article>
      <script type="application/ld+json" ref={ldJsonRef} />
    </main>
  );
}

export default function BlogPage() {
  const path = window.location.pathname.replace(/\/$/, '');
  const slug = path.split('/')[2];
  return slug ? <BlogArticle slug={slug} /> : <BlogHome />;
}
