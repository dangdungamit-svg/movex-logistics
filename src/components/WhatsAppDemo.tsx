import { MessageCircle, Phone } from 'lucide-react';
import { useLanguage, getWhatsAppLink } from '@/i18n/LanguageContext';
import { COMPANY } from '@/i18n/translations';

// Shows how easy booking is: one WhatsApp message. Clearly labelled as an example.
export default function WhatsAppDemo() {
  const { lang } = useLanguage();
  const fi = lang === 'fi';

  const you = fi
    ? 'Hei! Voitteko hakea sohvan Tori.fi-myyjältä Hervannasta ja tuoda sen Kalevaan lauantaina?'
    : 'Hi! Could you pick up a sofa from a Tori.fi seller in Hervanta and bring it to Kaleva on Saturday?';
  const us = fi
    ? 'Onnistuu! Pakettiauto + kuljettaja 50 €/h, alv sisältyy. Laita osoitteet ja kerros, niin vahvistetaan aika.'
    : 'Sure! Van + driver €50/h, VAT included. Send the addresses and floors and we’ll confirm the time.';

  return (
    <section className="bg-slate-950 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-slate-400">
            {fi ? 'Varaa yhdellä viestillä' : 'Book with one message'}
          </p>
          <h2 className="mt-3 text-4xl font-semibold leading-[1.02] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
            {fi ? 'Kerro mitä, mistä ja minne. Me hoidamme loput.' : 'Tell us what, from where and to where. We do the rest.'}
          </h2>
          <p className="mt-5 max-w-lg text-lg text-slate-300">
            {fi
              ? 'Ei lomakkeiden täyttelyä, jos et halua. Laita viesti WhatsAppiin tai soita – saat hinnan ja ajan suoraan meiltä.'
              : 'No forms if you don’t want them. Send a WhatsApp message or call – you get the price and time straight from us.'}
          </p>
          <div className="mt-8 flex flex-col gap-2.5 sm:flex-row">
            <a
              href={getWhatsAppLink(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3.5 text-base font-semibold text-slate-950 transition-colors hover:bg-[#1da851]"
            >
              <MessageCircle className="h-5 w-5" />
              {fi ? 'Kirjoita WhatsAppissa' : 'Message on WhatsApp'}
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

        <div className="mx-auto w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
            {fi ? 'Esimerkkikeskustelu · WhatsApp' : 'Example chat · WhatsApp'}
          </p>
          <div className="mt-5 space-y-4">
            <div className="flex flex-col items-end">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">{fi ? 'Sinä' : 'You'}</p>
              <p className="mt-1 max-w-[85%] rounded-2xl rounded-tr-sm bg-[#005c4b] px-4 py-3 text-sm leading-relaxed text-white">
                {you}
              </p>
            </div>
            <div className="flex flex-col items-start">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">MoveX</p>
              <p className="mt-1 max-w-[85%] rounded-2xl rounded-tl-sm bg-white/10 px-4 py-3 text-sm leading-relaxed text-white">
                {us}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
