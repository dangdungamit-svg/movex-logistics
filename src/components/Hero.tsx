import { Phone, MessageCircle, ArrowRight, Clock, Truck } from 'lucide-react';
import { useLanguage, getWhatsAppLink } from '@/i18n/LanguageContext';
import { COMPANY, HERO_IMAGE } from '@/i18n/translations';

export default function Hero() {
  const { lang, t } = useLanguage();

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-slate-900 pt-16 lg:pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950" />
        <div className="absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-brand-600/20 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-brand-500/10 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left — text + price */}
          <div className="text-center lg:text-left">
            <div className="animate-fade-up mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-300 ring-1 ring-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
              {t.hero.badge}
            </div>

            <h1
              className="animate-fade-up text-4xl font-bold leading-[1.1] text-white text-balance sm:text-5xl lg:text-6xl"
              style={{ animationDelay: '0.05s' }}
            >
              {t.hero.title}
            </h1>

            <p
              className="animate-fade-up mt-4 text-lg text-slate-300 sm:text-xl"
              style={{ animationDelay: '0.1s' }}
            >
              {t.hero.subtitle}
            </p>

            <p
              className="animate-fade-up mt-2 text-base text-slate-400"
              style={{ animationDelay: '0.12s' }}
            >
              {t.hero.supporting}
            </p>

            {/* Price card */}
            <div
              className="animate-fade-up mt-6 inline-block rounded-2xl bg-gradient-to-br from-brand-500/15 to-brand-600/5 p-5 text-left ring-1 ring-brand-400/30 sm:p-6"
              style={{ animationDelay: '0.15s' }}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-300">
                    {t.hero.priceLabel}
                  </p>
                  <div className="mt-1 flex items-baseline gap-1.5">
                    <span className="font-display text-4xl font-bold text-white sm:text-5xl">
                      {t.hero.price}
                    </span>
                    <span className="text-lg font-semibold text-brand-300">
                      {t.hero.priceUnit}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-brand-200">
                    {t.hero.vatNote}
                  </p>
                </div>
                <div className="border-t border-brand-400/20 pt-3 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
                  <p className="text-sm font-semibold text-white">
                    {t.hero.minNote}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-400">
                    {t.hero.incrementNote}
                  </p>
                </div>
              </div>
            </div>

            {/* Service + capacity row */}
            <div
              className="animate-fade-up mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
              style={{ animationDelay: '0.18s' }}
            >
              <div className="inline-flex items-center gap-2.5 rounded-xl bg-white/5 px-4 py-2.5 ring-1 ring-white/10">
                <Truck className="h-5 w-5 text-brand-400" />
                <div className="text-left">
                  <p className="text-sm font-bold text-white">{t.hero.serviceLabel}</p>
                  <p className="text-xs text-slate-400">{t.hero.serviceDesc}</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div
              className="animate-fade-up mt-6 flex flex-col items-stretch gap-2.5 sm:flex-row sm:items-center sm:justify-center lg:justify-start"
              style={{ animationDelay: '0.25s' }}
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-3.5 text-base font-semibold text-white shadow-xl shadow-brand-500/25 transition-all hover:bg-brand-400 hover:shadow-brand-500/40"
              >
                {t.hero.ctaQuote}
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href={getWhatsAppLink(lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-base font-semibold text-white shadow-xl shadow-[#25D366]/20 transition-all hover:bg-[#1da851] hover:shadow-[#25D366]/30"
              >
                <MessageCircle className="h-5 w-5" />
                {t.hero.ctaWhatsApp}
              </a>
              <a
                href={COMPANY.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-6 py-3.5 text-base font-semibold text-white ring-1 ring-white/15 transition-all hover:bg-white/15"
              >
                <Phone className="h-5 w-5" />
                {t.hero.ctaCall}
              </a>
            </div>

            {/* Phone + hours */}
            <div
              className="animate-fade-up mt-4 flex flex-col items-center gap-2 text-sm text-slate-400 sm:flex-row sm:gap-4 lg:justify-start"
              style={{ animationDelay: '0.3s' }}
            >
              <a
                href={COMPANY.phoneHref}
                className="font-medium text-slate-300 transition-colors hover:text-white"
              >
                {t.hero.callLabel}
              </a>
              <span className="hidden sm:inline">·</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-brand-400" />
                {t.hero.openDaily}
              </span>
            </div>
          </div>

          {/* Right — visual */}
          <div
            className="animate-fade-up relative hidden lg:block"
            style={{ animationDelay: '0.15s' }}
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10">
              <img
                src={HERO_IMAGE}
                alt="Professional movers loading furniture into a moving van"
                className="h-[520px] w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

              {/* Floating VAT badge */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-slate-900/90 p-5 backdrop-blur-md ring-1 ring-white/10">
                <div className="flex items-center justify-center gap-8">
                  <div className="text-center">
                    <p className="font-display text-3xl font-bold text-brand-400">25.5%</p>
                    <p className="mt-0.5 text-xs text-slate-400">
                      {lang === 'fi' ? 'ALV sisältyy' : 'VAT inc.'}
                    </p>
                  </div>
                  <div className="h-10 w-px bg-white/15" />
                  <div className="text-center">
                    <p className="font-display text-3xl font-bold text-white">1 h</p>
                    <p className="mt-0.5 text-xs text-slate-400">
                      {lang === 'fi' ? 'Vähimmäisvaraus' : 'Minimum'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />
    </section>
  );
}
