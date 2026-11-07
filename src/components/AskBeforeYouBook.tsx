import { Check, Truck } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

// "Ask these before you choose a mover" – each answer is a fact from our own price list.
export default function AskBeforeYouBook() {
  const { lang } = useLanguage();
  const fi = lang === 'fi';

  const rows = fi
    ? [
        { tag: 'Hinta', q: 'Näkyykö hinta etukäteen?', a: 'Kyllä. Alkaen 50 €/h, alv 25,5 % sisältyy.' },
        { tag: 'Laskutus', q: 'Maksanko turhasta ajasta?', a: 'Minimi 1 h, sen jälkeen 30 min jaksoissa.' },
        { tag: 'Kokonaishinta', q: 'Saanko kiinteän hinnan?', a: 'Kyllä. Hinta vahvistetaan ennen työn alkua.' },
        { tag: 'Suojaus', q: 'Sisältyykö suojaus hintaan?', a: 'Muuttopeitteet ja kuorman kiinnitys sisältyvät.' },
        { tag: 'Aikataulu', q: 'Onnistuuko ilta tai viikonloppu?', a: 'Palvelemme joka päivä klo 7–21.' },
      ]
    : [
        { tag: 'Price', q: 'Is the price shown up front?', a: 'Yes. From €50/h, VAT 25.5% included.' },
        { tag: 'Billing', q: 'Do I pay for wasted time?', a: '1 h minimum, then 30-minute steps.' },
        { tag: 'Total price', q: 'Can I get a fixed price?', a: 'Yes. Confirmed before the work starts.' },
        { tag: 'Protection', q: 'Is protection included?', a: 'Moving blankets and load securing are included.' },
        { tag: 'Schedule', q: 'Evenings or weekends?', a: 'We work every day 7am–9pm.' },
      ];

  return (
    <section id="why-movex" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500">
          {fi ? 'Ennen kuin valitset muuttofirman' : 'Before you choose a mover'}
        </p>
        <h2 className="mt-3 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.03em] text-slate-900 sm:text-5xl lg:text-6xl">
          {fi ? 'Kysy nämä viisi asiaa. Meillä vastaus on valmiina.' : 'Ask these five things. Our answers are ready.'}
        </h2>

        {/* Road + van across all five */}
        <div className="relative mt-14 hidden lg:block" aria-hidden="true">
          <div className="h-[3px] w-full rounded-full bg-slate-200" />
          <div className="movex-road-fill absolute left-0 top-0 h-[3px] rounded-full bg-brand-500" />
          <div className="movex-road-van absolute top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex h-9 w-14 items-center justify-center rounded-md bg-slate-900 text-white shadow-[0_0_30px_rgba(59,130,246,0.55)]">
              <Truck className="h-5 w-5" />
            </div>
          </div>
        </div>

        <ol className="mt-8 grid gap-8 sm:grid-cols-2 lg:mt-10 lg:grid-cols-5 lg:gap-6">
          {rows.map((r, i) => (
            <li key={r.tag} className="border-t border-slate-200 pt-5 lg:border-t-0 lg:pt-0">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-400">
                0{i + 1} · {r.tag}
              </p>
              <p className="mt-3 text-lg font-semibold leading-snug text-slate-900">{r.q}</p>
              <p className="mt-3 flex gap-2 text-sm leading-relaxed text-slate-600">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                {r.a}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
