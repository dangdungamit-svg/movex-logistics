import { Phone, FileText, Truck } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const icons = [Phone, FileText, Truck];

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            {t.howItWorks.title}
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            {t.howItWorks.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.howItWorks.steps.map((step, i) => {
            const Icon = icons[i] ?? Phone;
            return (
              <div key={i} className="relative text-center">
                {i < 2 && (
                  <div className="absolute left-[60%] top-8 hidden h-0.5 w-full bg-gradient-to-r from-brand-300 to-transparent md:block" />
                )}

                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 shadow-md ring-1 ring-slate-200/60">
                  <Icon className="h-7 w-7 text-brand-600" />
                  <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white shadow-md">
                    {i + 1}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
