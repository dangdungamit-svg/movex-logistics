import { Phone, MessageCircle, ArrowRight, Clock, Star, ShieldCheck } from 'lucide-react';
import { useLanguage, getWhatsAppLink } from '@/i18n/LanguageContext';
import { COMPANY } from '@/i18n/translations';

export default function Hero() {
  const { lang, t } = useLanguage();
  const fi = lang === 'fi';

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-slate-950 pt-24"
    >
      {/* Full-bleed photo: MoveX van in Tampere */}
      <picture>
        <source
          type="image/webp"
          srcSet="/images/hero-tampere-van-480w.webp 480w, /images/hero-tampere-van-768w.webp 768w, /images/hero-tampere-van-1080w.webp 1080w"
          sizes="100vw"
        />
        <img
          src="/images/hero-tampere-van.jpg"
          alt={fi ? 'MoveX-pakettiauto ja muuttomies Tampereella' : 'MoveX van and mover in Tampere'}
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[60%_center]"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width={1080}
          height={608}
        />
      </picture>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/80 via-slate-950/30 to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-slate-300">
          {t.hero.badge}
        </p>

        <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.035em] text-white text-balance sm:text-6xl lg:text-7xl xl:text-8xl">
          {t.hero.title}
        </h1>

        <p className="mt-6 max-w-xl text-lg text-slate-300 sm:text-xl">
          {t.hero.subtitle}
        </p>

        {/* Price + CTAs */}
        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6">
          <div className="inline-flex items-baseline gap-2 self-start rounded-lg border border-white/15 bg-white/5 px-4 py-3 backdrop-blur-md">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">
              {t.hero.priceLabel}
            </span>
            <span className="font-display text-3xl font-semibold text-white">{t.hero.price}</span>
            <span className="text-sm font-medium text-slate-300">{t.hero.priceUnit}</span>
            <span className="ml-2 hidden text-xs text-slate-400 sm:inline">{t.hero.vatNote}</span>
          </div>

          <div className="flex flex-col gap-2.5 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-base font-semibold text-slate-950 transition-colors hover:bg-slate-200"
            >
              {t.hero.ctaQuote}
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href={getWhatsAppLink(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3.5 text-base font-semibold text-slate-950 transition-colors hover:bg-[#1da851]"
            >
              <MessageCircle className="h-5 w-5" />
              {t.hero.ctaWhatsApp}
            </a>
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/15"
            >
              <Phone className="h-5 w-5" />
              {t.hero.ctaCall}
            </a>
          </div>
        </div>

        {/* Trust row */}
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 pt-5 text-sm text-slate-300">
          <a href="#reviews" className="inline-flex items-center gap-1.5 font-medium transition-colors hover:text-white">
            <span className="flex" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </span>
            {fi ? '5,0 Googlessa' : '5.0 on Google'}
          </a>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-brand-400" />
            {fi ? 'Vakuutettu yritys' : 'Insured company'}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-brand-400" />
            {t.hero.openDaily}
          </span>
        </div>
      </div>
    </section>
  );
}
