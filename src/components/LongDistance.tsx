import { MapPin, ArrowRight, Check } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function LongDistance() {
  const { t } = useLanguage();

  return (
    <section id="long-distance" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200/60 shadow-sm">
          <div className="grid lg:grid-cols-2">
            {/* Left — content */}
            <div className="p-8 sm:p-10 lg:p-12">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-100">
                <MapPin className="h-3.5 w-3.5" />
                {t.longDistance.title}
              </div>

              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                {t.longDistance.subtitle}
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                {t.longDistance.description}
              </p>

              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {t.longDistance.factors.map((factor, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 text-sm text-slate-700"
                  >
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50">
                      <Check className="h-3 w-3 text-brand-600" />
                    </div>
                    {factor}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition-all hover:bg-brand-400"
                >
                  {t.longDistance.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <p className="text-sm font-medium text-slate-500">
                  {t.longDistance.note}
                </p>
              </div>
            </div>

            {/* Right — visual */}
            <div className="relative min-h-[280px] bg-gradient-to-br from-slate-800 to-slate-900 lg:min-h-[none]">
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                />
              </div>
              <div className="relative flex h-full flex-col items-center justify-center gap-4 p-8">
                <div className="flex flex-col items-center gap-1">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-500 text-white shadow-lg shadow-brand-500/30">
                    <MapPin className="h-7 w-7" />
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/10">
                    Tampere
                  </span>
                </div>
                <div className="h-16 w-0.5 bg-gradient-to-b from-brand-400 to-slate-600" />
                <div className="flex flex-col items-center gap-1">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-700 text-brand-300 ring-2 ring-brand-400/40">
                    <ArrowRight className="h-7 w-7" />
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/10">
                    Finland
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
