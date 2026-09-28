import { ArrowRight, Info, Sofa, MapPin } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            {t.pricing.title}
          </h2>
          <p className="mt-3 text-lg text-slate-600">{t.pricing.subtitle}</p>
        </div>

        {/* Hourly pricing cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.pricing.cards.map((card, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 shadow-sm ring-1 transition-all duration-300 hover:shadow-lg ${
                i === 0
                  ? 'bg-slate-900 ring-slate-700 text-white'
                  : 'bg-white ring-slate-200/80 hover:ring-brand-200'
              }`}
            >
              <h3
                className={`text-sm font-semibold uppercase tracking-wide ${
                  i === 0 ? 'text-brand-300' : 'text-slate-500'
                }`}
              >
                {card.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span
                  className={`font-display text-3xl font-bold ${
                    i === 0 ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {card.price}
                </span>
                <span
                  className={`text-sm font-medium ${
                    i === 0 ? 'text-slate-400' : 'text-slate-500'
                  }`}
                >
                  {card.unit}
                </span>
              </div>
              <div className="mt-3 space-y-1">
                <p
                  className={`text-xs font-medium ${
                    i === 0 ? 'text-brand-300' : 'text-brand-600'
                  }`}
                >
                  {card.vat}
                </p>
                <p
                  className={`text-xs ${
                    i === 0 ? 'text-slate-400' : 'text-slate-500'
                  }`}
                >
                  {card.min}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Increment note */}
        <p className="mt-4 text-center text-sm text-slate-500">
          {t.pricing.incrementNote}
        </p>

        {/* Furniture + Long distance */}
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {/* Furniture */}
          <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200/60 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                <Sofa className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900">
                  {t.pricing.furnitureTitle}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {t.pricing.furnitureDesc}
                </p>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-display text-2xl font-bold text-slate-900">
                    {t.pricing.furniturePrice}
                  </span>
                </div>
                <p className="mt-1.5 text-xs text-slate-500">
                  {t.pricing.furnitureNote}
                </p>
              </div>
            </div>
          </div>

          {/* Long distance */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 ring-1 ring-slate-700 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-500/20 text-brand-300 ring-1 ring-brand-500/30">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">
                  {t.pricing.longDistanceTitle}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {t.pricing.longDistanceDesc}
                </p>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-display text-2xl font-bold text-brand-300">
                    {t.pricing.longDistancePrice}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="mx-auto mt-8 max-w-2xl rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200/60">
          <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
            <Info className="h-4 w-4 text-brand-500" />
            {t.pricing.subtitle}
          </div>
          <ul className="space-y-1.5">
            <li className="flex items-start gap-2 text-sm text-slate-600">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
              {t.pricing.vatNote}
            </li>
            <li className="flex items-start gap-2 text-sm text-slate-600">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
              {t.pricing.minNote}
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:bg-brand-400 hover:shadow-brand-500/40"
          >
            {t.pricing.cta}
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
