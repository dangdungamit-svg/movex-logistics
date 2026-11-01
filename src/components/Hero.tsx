import { Phone, MessageCircle, ArrowRight, Clock, Truck } from 'lucide-react';
import { useLanguage, getWhatsAppLink } from '@/i18n/LanguageContext';
import { COMPANY } from '@/i18n/translations';

export default function Hero() {
  const { lang, t } = useLanguage();

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-slate-900 pt-16 lg:pt-20"
    >
      {/* MoveX background video: desktop/tablet; lightweight still image on small screens */}
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 bg-cover bg-center sm:hidden"
          style={{ backgroundImage: "url('/images/14_20260924_225406_0013-1080w.webp')" }}
        />
        <video
          className="absolute inset-0 hidden h-full w-full object-cover sm:block"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/14_20260924_225406_0013-1080w.webp"
        >
          <source src="/images/2026-09-19-215814347.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-slate-950/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/35" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-900/80 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto grid w-full max-w-4xl items-center gap-8">
          {/* Left — text + price */}
          <div className="text-center lg:text-left">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-300 ring-1 ring-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
              {t.hero.badge}
            </div>

            <h1
              className="text-4xl font-bold leading-[1.1] text-white text-balance sm:text-5xl lg:text-6xl"
            >
              {t.hero.title}
            </h1>

            <p
              className="mt-4 text-lg text-slate-300 sm:text-xl"
            >
              {t.hero.subtitle}
            </p>

            <p
              className="mt-2 text-base text-slate-400"
            >
              {t.hero.supporting}
            </p>

            {/* Price card */}
            <div
              className="mt-6 inline-block rounded-2xl bg-gradient-to-br from-brand-500/15 to-brand-600/5 p-5 text-left ring-1 ring-brand-400/30 sm:p-6"
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
              className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
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
              className="mt-6 flex flex-col items-stretch gap-2.5 sm:flex-row sm:items-center sm:justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-base font-semibold text-white shadow-xl shadow-brand-500/25 transition-all hover:bg-brand-700 hover:shadow-brand-500/40"
              >
                {t.hero.ctaQuote}
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href={getWhatsAppLink(lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-base font-semibold text-slate-950 shadow-xl shadow-[#25D366]/20 transition-all hover:bg-[#1da851] hover:shadow-[#25D366]/30"
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
              className="mt-4 flex flex-col items-center gap-2 text-sm text-slate-400 sm:flex-row sm:gap-4 lg:justify-start"
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


        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />
    </section>
  );
}
