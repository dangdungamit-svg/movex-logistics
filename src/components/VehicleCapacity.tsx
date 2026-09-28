import { Truck, Wrench, ShieldCheck, HandHeart, Package, Boxes } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const icons = [Truck, Wrench, ShieldCheck, Boxes, HandHeart, Package];

export default function VehicleCapacity() {
  const { t } = useLanguage();

  return (
    <section id="capacity" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            {t.vehicleCapacity.title}
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            {t.vehicleCapacity.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.vehicleCapacity.items.map((item, i) => {
            const Icon = icons[i] ?? Truck;
            return (
              <div
                key={i}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/60 transition-all duration-300 hover:shadow-lg hover:ring-brand-200"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">
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
