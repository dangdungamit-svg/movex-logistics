import { MapPin, Navigation } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function ServiceArea() {
  const { t } = useLanguage();

  return (
    <section id="service-area" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-100">
            <MapPin className="h-3.5 w-3.5" />
            {t.serviceArea.subtitle}
          </div>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            {t.serviceArea.title}
          </h2>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {t.serviceArea.areas.map((area) => (
            <span
              key={area}
              className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-5 py-3 text-base font-medium text-slate-700"
            >
              <span className="h-2 w-2 rounded-full bg-brand-500" />
              {area}
            </span>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-2xl">
          <div className="flex items-start gap-3 rounded-2xl bg-brand-50 p-5 ring-1 ring-brand-100">
            <Navigation className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
            <p className="text-sm font-medium text-slate-700">
              {t.serviceArea.nationwide}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
