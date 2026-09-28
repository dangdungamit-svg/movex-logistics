import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from 'react';
import { translations, type Language, type Translation } from './translations';

interface LanguageContextValue {
  lang: Language;
  t: Translation;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('fi');

  const setLang = useCallback((l: Language) => {
    setLangState(l);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = l;
    }
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((prev) => {
      const next = prev === 'fi' ? 'en' : 'fi';
      if (typeof document !== 'undefined') {
        document.documentElement.lang = next;
      }
      return next;
    });
  }, []);

  return (
    <LanguageContext.Provider
      value={{ lang, t: translations[lang] as Translation, setLang, toggleLang }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx)
    throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}

export function getWhatsAppLink(lang: Language) {
  const msg =
    lang === 'fi'
      ? encodeURIComponent(
          'Hei MoveX Logistics, haluaisin pyytää tarjouksen kuljetuksesta/muutosta.\n\nNouto: \nMääränpää: \nToivottu päivä: \nPalvelu: \nLisätiedot: '
        )
      : encodeURIComponent(
          'Hello MoveX Logistics, I would like to request a quote for transport/moving.\n\nPickup: \nDestination: \nPreferred date: \nService needed: \nDetails: '
        );
  return `https://wa.me/358413286939?text=${msg}`;
}

export function getEmailLink(lang: Language) {
  const subject =
    lang === 'fi'
      ? 'MoveX Logistics – Tarjouspyyntö'
      : 'MoveX Logistics – Quote Request';
  const body =
    lang === 'fi'
      ? 'Hei,\n\nhaluaisin pyytää tarjousta seuraavalle työlle:\n\nNouto: \nMääränpää: \nToivottu päivä: \nPalvelu: \nTavaran määrä: \nRaskaat tai erikoisesineet: \n\nYstävällisin terveisin,'
      : 'Hello,\n\nI would like to request a quote for the following job:\n\nPickup: \nDestination: \nPreferred date: \nType of transport/move: \nApproximate amount of goods: \nAny heavy or special items: \n\nBest regards,';
  return `mailto:dangdung.amit@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
