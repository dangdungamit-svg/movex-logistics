import { Phone, MessageCircle, Mail, Check, Clock } from 'lucide-react';
import { useLanguage, getWhatsAppLink, getEmailLink } from '@/i18n/LanguageContext';
import { COMPANY } from '@/i18n/translations';
import QuoteRequestForm from '@/components/QuoteRequestForm';

export default function Contact() {
  const { lang, t } = useLanguage();

  return (
    <section id="contact" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            {t.contact.title}
          </h2>
          <p className="mt-3 text-lg text-slate-600">{t.contact.subtitle}</p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1.5 text-sm font-medium text-slate-600">
            <Clock className="h-4 w-4 text-brand-500" />
            {COMPANY.hours[lang]}
          </div>
        </div>

        {/* Three contact cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {/* Call */}
          <div className="flex flex-col items-center rounded-2xl bg-slate-50 p-8 text-center ring-1 ring-slate-200/60 transition-all duration-300 hover:shadow-lg hover:ring-brand-200">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
              <Phone className="h-8 w-8" />
            </div>
            <h3 className="mt-5 text-sm font-semibold uppercase tracking-wide text-slate-500">
              {t.contact.phone}
            </h3>

            {/* Two phone numbers with language flags */}
            <div className="mt-4 w-full space-y-3">
              <div className="rounded-xl bg-white p-3 ring-1 ring-slate-200/60">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-medium text-slate-600">
                    {t.contact.phoneFi}
                  </span>
                  <a
                    href={COMPANY.phoneFiHref}
                    className="font-display text-lg font-bold text-slate-900 transition-colors hover:text-brand-600"
                  >
                    {COMPANY.phoneFi}
                  </a>
                </div>
                <a
                  href={COMPANY.phoneFiHref}
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-brand-400"
                >
                  <Phone className="h-3.5 w-3.5" />
                  {t.contact.callBtn}
                </a>
              </div>

              <div className="rounded-xl bg-white p-3 ring-1 ring-slate-200/60">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-medium text-slate-600">
                    {t.contact.phoneEn}
                  </span>
                  <a
                    href={COMPANY.phoneEnHref}
                    className="font-display text-lg font-bold text-slate-900 transition-colors hover:text-brand-600"
                  >
                    {COMPANY.phoneEn}
                  </a>
                </div>
                <a
                  href={COMPANY.phoneEnHref}
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-brand-400"
                >
                  <Phone className="h-3.5 w-3.5" />
                  {t.contact.callBtn}
                </a>
              </div>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col items-center rounded-2xl bg-slate-50 p-8 text-center ring-1 ring-slate-200/60 transition-all duration-300 hover:shadow-lg hover:ring-green-200">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-green-600 ring-1 ring-green-100">
              <MessageCircle className="h-8 w-8" />
            </div>
            <h3 className="mt-5 text-sm font-semibold uppercase tracking-wide text-slate-500">
              {t.contact.whatsapp}
            </h3>
            <p className="mt-4 text-xl font-bold text-slate-900">
              {COMPANY.phone}
            </p>
            <a
              href={getWhatsAppLink(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/20 transition-all hover:bg-[#1da851]"
            >
              <MessageCircle className="h-4 w-4" />
              {t.contact.whatsappBtn}
            </a>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center rounded-2xl bg-slate-50 p-8 text-center ring-1 ring-slate-200/60 transition-all duration-300 hover:shadow-lg hover:ring-slate-300">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-600 ring-1 ring-slate-200">
              <Mail className="h-8 w-8" />
            </div>
            <h3 className="mt-5 text-sm font-semibold uppercase tracking-wide text-slate-500">
              {t.contact.email}
            </h3>
            <p className="mt-4 break-all text-base font-bold text-slate-900">
              {COMPANY.email}
            </p>
            <a
              href={getEmailLink(lang)}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-800 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-800/20 transition-all hover:bg-slate-700"
            >
              <Mail className="h-4 w-4" />
              {t.contact.emailBtn}
            </a>
          </div>
        </div>

        <QuoteRequestForm />

        {/* Instructions */}
        <div className="mx-auto mt-10 max-w-2xl rounded-2xl bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold text-white">
            {t.contact.instructions}
          </p>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {t.contact.instructionItems.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2.5 text-sm text-slate-300"
              >
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500/20">
                  <Check className="h-3 w-3 text-brand-400" />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
