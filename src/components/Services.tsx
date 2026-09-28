import {
  Boxes,
  Truck,
  Users,
  Sofa,
  Package,
  Building2,
  MapPin,
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const icons = [Boxes, Truck, Users, Sofa, Package, Building2, MapPin];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            {t.services.title}
          </h2>
          <p className="mt-3 text-lg text-slate-600">{t.services.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((item, i) => {
            const Icon = icons[i] ?? Boxes;
            return (
              <div
                key={i}
                className="group relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 hover:ring-brand-200"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
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
