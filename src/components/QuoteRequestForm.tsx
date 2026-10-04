import { useState, type FormEvent } from 'react';
import { trackContactConversion } from '@/lib/analytics';
import { supabase } from '@/lib/supabase';
import { useLanguage } from '@/i18n/LanguageContext';

const services = {
  fi: [
    'Pakettiauto + kuljettaja — 50 €/h, ALV sisältyy',
    'Pakettiauto + kuljettaja + 1 muuttomies — 75 €/h, ALV sisältyy',
    'Pakettiauto + kuljettaja + 2 muuttomiestä — 100 €/h, ALV sisältyy',
    'Pakettiauto + kuljettaja + 3 muuttomiestä — 125 €/h, ALV sisältyy',
  ],
  en: [
    'Van + Driver — €50/h, VAT included',
    'Van + Driver + 1 mover — €75/h, VAT included',
    'Van + Driver + 2 movers — €100/h, VAT included',
    'Van + Driver + 3 movers — €125/h, VAT included',
  ],
};

const fieldClass =
  'mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100';

export default function QuoteRequestForm() {
  const { lang } = useLanguage();
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const copy = lang === 'fi'
    ? {
        title: 'Pyydä tarjous',
        subtitle: 'Kerro työstäsi, niin palaamme sinulle tarjouksella.',
        name: 'Nimi',
        email: 'Sähköposti',
        phone: 'Puhelin (valinnainen)',
        service: 'Palvelu',
        chooseService: 'Valitse palvelu',
        pickup: 'Noutopaikka (valinnainen)',
        destination: 'Määränpää (valinnainen)',
        date: 'Toivottu päivä (valinnainen)',
        details: 'Lisätiedot (valinnainen)',
        consent: 'Hyväksyn henkilötietojeni käsittelyn tähän tarjouspyyntöön vastaamiseksi.',
        submit: 'Lähetä tarjouspyyntö',
        sending: 'Lähetetään…',
        success: 'Kiitos! Tarjouspyyntösi on tallennettu. Otamme sinuun yhteyttä.',
        error: 'Tarjouspyyntöä ei voitu tallentaa. Yritä myöhemmin uudelleen tai ota yhteyttä puhelimitse.',
        configError: 'Tarjouspyyntö ei ole tällä hetkellä käytettävissä. Ota meihin yhteyttä puhelimitse, WhatsAppilla tai sähköpostitse.',
        minimum: 'Vähimmäisvaraus 1 tunti. Ensimmäisen tunnin jälkeen laskutus 30 minuutin välein.',
      }
    : {
        title: 'Request a Quote',
        subtitle: 'Tell us about your job and we will get back to you with a quote.',
        name: 'Name',
        email: 'Email',
        phone: 'Phone (optional)',
        service: 'Service',
        chooseService: 'Choose a service',
        pickup: 'Pickup location (optional)',
        destination: 'Destination (optional)',
        date: 'Preferred date (optional)',
        details: 'Additional details (optional)',
        consent: 'I consent to the processing of my personal data to respond to this quote request.',
        submit: 'Send Quote Request',
        sending: 'Sending…',
        success: 'Thank you! Your quote request has been saved. We will be in touch.',
        error: 'We could not save your quote request. Please try again later or contact us by phone.',
        configError: 'Quote requests are not available right now. Please contact us by phone, WhatsApp or email.',
        minimum: 'Minimum booking: 1 hour. After the first hour, billing continues in 30-minute increments.',
      };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage('');
    const formElement = event.currentTarget;

    const client = supabase;
    if (!client) {
      setMessage(copy.configError);
      return;
    }

    const form = new FormData(event.currentTarget);
    setSubmitting(true);
    try {
      const { data, error } = await client.functions.invoke('submit-quote', {
        body: {
          name: String(form.get('name') ?? '').trim(),
          email: String(form.get('email') ?? '').trim(),
          phone: String(form.get('phone') ?? '').trim() || null,
          service: String(form.get('service') ?? ''),
          pickup_location: String(form.get('pickup_location') ?? '').trim() || null,
          destination: String(form.get('destination') ?? '').trim() || null,
          preferred_date: String(form.get('preferred_date') ?? '') || null,
          details: String(form.get('details') ?? '').trim() || null,
          consent: form.get('consent') === 'on',
          website: String(form.get('website') ?? ''),
        },
      });
      if (error || data?.success !== true) throw new Error('Quote request was not saved');

      trackContactConversion();
      setMessage(copy.success);
      formElement.reset();
    } catch {
      setMessage(copy.error);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="mx-auto mt-12 max-w-4xl rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200/70 sm:p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-slate-900">{copy.title}</h3>
        <p className="mt-2 text-sm text-slate-600">{copy.subtitle}</p>
        <p className="mt-2 text-xs text-slate-500">{copy.minimum}</p>
      </div>
      <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          {copy.name} <span aria-hidden="true">*</span>
          <input className={fieldClass} name="name" autoComplete="name" maxLength={120} required />
        </label>
        <label className="text-sm font-medium text-slate-700">
          {copy.email} <span aria-hidden="true">*</span>
          <input className={fieldClass} name="email" type="email" autoComplete="email" maxLength={254} required />
        </label>
        <label className="text-sm font-medium text-slate-700">
          {copy.phone}
          <input className={fieldClass} name="phone" type="tel" autoComplete="tel" maxLength={40} />
        </label>
        <label className="text-sm font-medium text-slate-700">
          {copy.service} <span aria-hidden="true">*</span>
          <select className={fieldClass} name="service" defaultValue="" required>
            <option value="" disabled>{copy.chooseService}</option>
            {services[lang].map((service) => <option key={service} value={service}>{service}</option>)}
          </select>
        </label>
        <label className="text-sm font-medium text-slate-700">
          {copy.pickup}
          <input className={fieldClass} name="pickup_location" autoComplete="street-address" maxLength={300} />
        </label>
        <label className="text-sm font-medium text-slate-700">
          {copy.destination}
          <input className={fieldClass} name="destination" maxLength={300} />
        </label>
        <label className="text-sm font-medium text-slate-700">
          {copy.date}
          <input className={fieldClass} name="preferred_date" type="date" />
        </label>
        <label className="text-sm font-medium text-slate-700 sm:col-span-2">
          {copy.details}
          <textarea className={fieldClass} name="details" rows={4} maxLength={4000} />
        </label>
        <label
          className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
          aria-hidden="true"
        >
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
        <label className="flex items-start gap-3 text-sm leading-relaxed text-slate-600 sm:col-span-2">
          <input className="mt-1 h-4 w-4 shrink-0 accent-brand-500" name="consent" type="checkbox" required />
          <span>{copy.consent} <span aria-hidden="true">*</span></span>
        </label>
        {message && (
          <p
            className={`text-sm sm:col-span-2 ${message === copy.success ? 'text-green-700' : 'text-red-700'}`}
            role="status"
            aria-live="polite"
          >
            {message}
          </p>
        )}
        <div className="sm:col-span-2">
          <button
            className="inline-flex w-full items-center justify-center rounded-xl bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-400 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            type="submit"
            disabled={submitting}
          >
            {submitting ? copy.sending : copy.submit}
          </button>
        </div>
      </form>
    </div>
  );
}
