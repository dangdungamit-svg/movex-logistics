import { useLanguage } from '@/i18n/LanguageContext';

export default function QuickInfo() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.quickInfo.items.map((item, i) => (
            <div key={i} className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200/60">
              <dt className="text-sm font-semibold text-slate-900">{item.q}</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-slate-600">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
