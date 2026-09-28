import { Check } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function WhatsIncluded() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            {t.whatsIncluded.title}
          </h2>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {t.whatsIncluded.items.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3.5 ring-1 ring-slate-200/60"
            >
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500">
                <Check className="h-3.5 w-3.5 text-white" />
              </div>
              <span className="text-sm font-medium text-slate-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
