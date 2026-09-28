import {
  Shield,
  Boxes,
  Wrench,
  HandHeart,
  Truck,
  FileCheck,
  Scale,
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const icons = [Shield, Boxes, Wrench, HandHeart, Truck, FileCheck, Scale];

export default function QualitySafety() {
  const { t } = useLanguage();

  return (
    <section id="quality" className="bg-slate-900 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            {t.qualitySafety.title}
          </h2>
          <p className="mt-3 text-lg font-semibold uppercase tracking-wide text-brand-400">
            {t.qualitySafety.subtitle}
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            {t.qualitySafety.description}
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.qualitySafety.items.map((item, i) => {
            const Icon = icons[i] ?? Shield;
            return (
              <div
                key={i}
                className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:ring-brand-400/30"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15 text-brand-400 ring-1 ring-brand-400/20">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
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
