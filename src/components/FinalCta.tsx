import { ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { useLanguage, getWhatsAppLink } from '@/i18n/LanguageContext';
import { COMPANY } from '@/i18n/translations';

export default function FinalCta() {
  const { lang } = useLanguage();
  const fi = lang === 'fi';

  return (
    <section className="relative isolate overflow-hidden bg-slate-950 py-24 lg:py-32">
      <div className="absolute -left-40 top-0 -z-10 h-[420px] w-[420px] rounded-full bg-brand-600/25 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-slate-400">
          Tampere · Pirkanmaa · {fi ? 'Koko Suomi' : 'All of Finland'}
        </p>
        <h2 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl">
          {fi ? 'Muutto tulossa? Hoidetaan se.' : 'Moving soon? We’ve got it.'}
        </h2>
        <div className="mt-10 flex flex-col gap-2.5 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-base font-semibold text-slate-950 transition-colors hover:bg-slate-200"
          >
            {fi ? 'Pyydä tarjous' : 'Get a quote'}
            <ArrowRight className="h-5 w-5" />
          </a>
          <a
            href={getWhatsAppLink(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3.5 text-base font-semibold text-slate-950 transition-colors hover:bg-[#1da851]"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp
          </a>
          <a
            href={COMPANY.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/15"
          >
            <Phone className="h-5 w-5" />
            {COMPANY.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
