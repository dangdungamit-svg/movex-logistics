import { useLanguage } from '@/i18n/LanguageContext';

// Big-number facts band under the hero. Only real, checkable facts.
export default function FactsBand() {
  const { lang } = useLanguage();
  const fi = lang === 'fi';

  const facts = fi
    ? [
        { label: 'Tuntihinta alkaen', value: '50 €', note: 'alv 25,5 % sisältyy' },
        { label: 'Laskutusjakso', value: '30 min', note: 'ensimmäisen tunnin jälkeen' },
        { label: 'Palvelemme', value: '7–21', note: 'joka päivä, myös viikonloppuisin' },
        { label: 'Google-arvio', value: '5,0 ★', note: 'asiakkaiden arvosteluista' },
      ]
    : [
        { label: 'Hourly rate from', value: '€50', note: 'VAT 25.5% included' },
        { label: 'Billing step', value: '30 min', note: 'after the first hour' },
        { label: 'We work', value: '7–21', note: 'every day, weekends too' },
        { label: 'Google rating', value: '5.0 ★', note: 'from customer reviews' },
      ];

  return (
    <section className="bg-slate-950 py-12 lg:py-16" aria-label={fi ? 'Pikatiedot' : 'Key facts'}>
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {facts.map((f, i) => (
          <div key={f.label} className={`pr-4 ${i > 0 ? 'lg:border-l lg:border-white/10 lg:pl-8' : ''}`}>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">{f.label}</p>
            <p className="mt-2 font-display text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              {f.value}
            </p>
            <p className="mt-1 text-sm text-slate-400">{f.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
