import { Phone, MessageCircle, FileText } from 'lucide-react';
import { useLanguage, getWhatsAppLink } from '@/i18n/LanguageContext';
import { COMPANY } from '@/i18n/translations';

export default function MobileContactBar() {
  const { lang, t } = useLanguage();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-3 border-t border-slate-200 bg-white/95 backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.08)] lg:hidden">
      <a
        href={COMPANY.phoneHref}
        className="flex flex-col items-center gap-1 py-2.5 text-slate-700 transition-colors active:bg-slate-100"
      >
        <Phone className="h-5 w-5 text-brand-600" />
        <span className="text-xs font-semibold">{t.mobileBar.call}</span>
      </a>
      <a
        href={getWhatsAppLink(lang)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-1 border-x border-slate-200 py-2.5 text-green-600 transition-colors active:bg-green-50"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="text-xs font-semibold">{t.mobileBar.whatsapp}</span>
      </a>
      <a
        href="#contact"
        className="flex flex-col items-center gap-1 py-2.5 text-brand-600 transition-colors active:bg-brand-50"
      >
        <FileText className="h-5 w-5" />
        <span className="text-xs font-semibold">{t.mobileBar.quote}</span>
      </a>
    </div>
  );
}
