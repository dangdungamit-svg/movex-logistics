import { ArrowRight, Clock, FileText, MessageCircle } from 'lucide-react';
import { useLanguage, getWhatsAppLink, trackContactConversion } from '@/i18n/LanguageContext';

export const QUOTE_PREF_EVENT = 'movex:quote-pref';

export default function FixedPriceQuote() {
  const { lang, t } = useLanguage();
  const f = t.fixedQuote;

  return (
    <section id="fixed-quote" className="bg-slate-50 py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 p-6 text-white shadow-xl ring-1 ring-slate-700 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-300">{f.title}</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{f.heading}</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300">{f.intro}</p>
          <p className="mt-3 text-sm font-medium text-white">{f.optional}</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <h3 className="flex items-center gap-2 font-semibold">
                <Clock className="h-5 w-5 text-brand-300" /> {f.hourlyTitle}
              </h3>
              <p className="mt-2 text-sm text-slate-300">{f.hourlyDesc}</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <h3 className="flex items-center gap-2 font-semibold">
                <FileText className="h-5 w-5 text-brand-300" /> {f.fixedTitle}
              </h3>
              <p className="mt-2 text-sm text-slate-300">{f.fixedDesc}</p>
            </div>
          </div>
          <p className="mt-4 text-xs text-slate-400">{f.basedOn}</p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              onClick={() => window.dispatchEvent(new CustomEvent(QUOTE_PREF_EVENT, { detail: 'fixed' }))}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-brand-400"
            >
              {f.ctaFixed}
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3.5 text-base font-semibold text-white ring-1 ring-white/15 transition-all hover:bg-white/15"
            >
              {f.ctaHourly}
            </a>
            <a
              href={getWhatsAppLink(lang)}
              onClick={trackContactConversion}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-[#1da851]"
            >
              <MessageCircle className="h-5 w-5" />
              {f.ctaWhatsApp}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
