import { useLanguage } from '@/i18n/LanguageContext';

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500">
          {t.howItWorks.subtitle}
        </p>
        <h2 className="mt-3 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.03em] text-slate-900 sm:text-5xl lg:text-6xl">
          {t.howItWorks.title}
        </h2>

        <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {t.howItWorks.steps.map((step, i) => (
            <li key={i} className="border-t border-slate-200 pt-5">
              <p className="font-mono text-sm tracking-[0.15em] text-slate-400">
                0{i + 1}
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 max-w-sm text-base leading-relaxed text-slate-600">
                {step.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
