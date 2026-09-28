import { MapPin, Check, Truck, Shield, Banknote, HandHeart, Users, Navigation, Phone } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const icons = [
  MapPin,
  Banknote,
  HandHeart,
  Shield,
  Truck,
  Users,
  Navigation,
  Phone,
];

export default function WhyMoveX() {
  const { t } = useLanguage();

  return (
    <section id="why-movex" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            {t.whyMoveX.title}
          </h2>
          <p className="mt-3 text-lg text-slate-600">{t.whyMoveX.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.whyMoveX.items.map((item, i) => {
            const Icon = icons[i] ?? Check;
            return (
              <div
                key={i}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/60 transition-all duration-300 hover:shadow-lg hover:ring-brand-200"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
