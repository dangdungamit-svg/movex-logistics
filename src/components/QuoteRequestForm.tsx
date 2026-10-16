import { useEffect, useState, type FormEvent } from 'react';
import { MessageCircle, Mail } from 'lucide-react';
import { trackContactConversion } from '@/lib/analytics';
import { useLanguage } from '@/i18n/LanguageContext';
import { COMPANY, WHATSAPP_NUMBER } from '@/i18n/translations';
import { QUOTE_PREF_EVENT } from '@/components/FixedPriceQuote';

type Pref = 'hourly' | 'fixed' | 'unsure';

const fieldClass =
  'mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100';

export default function QuoteRequestForm() {
  const { t } = useLanguage();
  const q = t.quoteForm;
  const [pref, setPref] = useState<Pref>('unsure');
  const [error, setError] = useState('');
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      const value = (e as CustomEvent<Pref>).detail;
      if (value === 'hourly' || value === 'fixed' || value === 'unsure') setPref(value);
    };
    window.addEventListener(QUOTE_PREF_EVENT, handler);
    return () => window.removeEventListener(QUOTE_PREF_EVENT, handler);
  }, []);

  function buildMessage(form: FormData) {
    const get = (k: string) => String(form.get(k) ?? '').trim();
    const yesNo = (k: string) => (get(k) === 'yes' ? q.yes : get(k) === 'no' ? q.no : '');
    const helpMap: Record<string, string> = {
      loading: q.helpLoading,
      unloading: q.helpUnloading,
      both: q.helpBoth,
      none: q.helpNone,
    };
    const prefText = { hourly: q.msgPrefHourly, fixed: q.msgPrefFixed, unsure: q.msgPrefUnsure }[pref];
    const contact = [get('phone'), get('email')].filter(Boolean).join(' / ');
    const lines: [string, string][] = [
      [q.msgPref, prefText],
      [q.msgName, get('name')],
      [q.msgContact, contact],
      [q.msgPickup, get('pickup')],
      [q.msgDelivery, get('delivery')],
      [q.msgDate, get('date')],
      [q.msgItems, get('items')],
      [q.msgPickupFloor, get('pickup_floor')],
      [q.msgDeliveryFloor, get('delivery_floor')],
      [q.msgPickupElevator, yesNo('pickup_elevator')],
      [q.msgDeliveryElevator, yesNo('delivery_elevator')],
      [q.msgHelp, helpMap[get('help')] ?? ''],
      [q.msgNotes, get('notes')],
    ];
    return `${q.msgHello}\n\n${lines.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join('\n')}`;
  }

  function handleSend(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    const form = new FormData(event.currentTarget);
    const phone = String(form.get('phone') ?? '').trim();
    const email = String(form.get('email') ?? '').trim();
    if (!phone && !email) {
      setError(q.errContact);
      return;
    }
    if (email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError(q.errEmail);
      return;
    }
    const channel = ((event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null)?.value;
    const text = encodeURIComponent(buildMessage(form));
    const url =
      channel === 'email'
        ? `mailto:${COMPANY.email}?subject=${encodeURIComponent(q.emailSubject)}&body=${text}`
        : `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    trackContactConversion();
    setOpened(true);
    if (channel === 'email') window.location.href = url;
    else window.open(url, '_blank', 'noopener,noreferrer');
  }

  const prefOptions: { value: Pref; label: string }[] = [
    { value: 'hourly', label: q.prefHourly },
    { value: 'fixed', label: q.prefFixed },
    { value: 'unsure', label: q.prefUnsure },
  ];
  const labelClass = 'text-sm font-medium text-slate-700';
  const yesNoOptions = (
    <>
      <option value="">{q.notSpecified}</option>
      <option value="yes">{q.yes}</option>
      <option value="no">{q.no}</option>
    </>
  );

  return (
    <div className="mx-auto mt-12 max-w-4xl rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200/70 sm:p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-slate-900">{q.title}</h3>
        <p className="mt-2 text-sm text-slate-600">{q.subtitle}</p>
        <p className="mt-2 text-xs text-slate-500">{q.minimum}</p>
      </div>
      <form onSubmit={handleSend} className="grid gap-5 sm:grid-cols-2">
        <fieldset className="sm:col-span-2">
          <legend className={labelClass}>{q.prefLegend}</legend>
          <div className="mt-2 grid gap-2 sm:grid-cols-3">
            {prefOptions.map((o) => (
              <label
                key={o.value}
                className={`flex cursor-pointer items-center gap-2 rounded-xl border px-4 py-3 text-sm ${
                  pref === o.value ? 'border-brand-500 bg-brand-50 text-slate-900' : 'border-slate-200 bg-white text-slate-700'
                }`}
              >
                <input
                  type="radio"
                  name="pref"
                  value={o.value}
                  checked={pref === o.value}
                  onChange={() => setPref(o.value)}
                  className="accent-brand-500"
                />
                {o.label}
              </label>
            ))}
          </div>
        </fieldset>
        <label className={labelClass}>
          {q.name}
          <input className={fieldClass} name="name" autoComplete="name" maxLength={120} />
        </label>
        <div className="grid gap-5 sm:col-span-2 sm:grid-cols-2">
          <label className={labelClass}>
            {q.phone}
            <input className={fieldClass} name="phone" type="tel" autoComplete="tel" maxLength={40} aria-describedby="contact-hint" />
          </label>
          <label className={labelClass}>
            {q.email}
            <input className={fieldClass} name="email" type="email" autoComplete="email" maxLength={254} aria-describedby="contact-hint" />
          </label>
          <p id="contact-hint" className="text-xs text-slate-500 sm:col-span-2">{q.contactHint}</p>
        </div>
        <label className={labelClass}>
          {q.pickup}
          <input className={fieldClass} name="pickup" autoComplete="street-address" maxLength={300} />
        </label>
        <label className={labelClass}>
          {q.delivery}
          <input className={fieldClass} name="delivery" maxLength={300} />
        </label>
        <label className={labelClass}>
          {q.date}
          <input className={fieldClass} name="date" type="date" />
        </label>
        <label className={labelClass}>
          {q.help}
          <select className={fieldClass} name="help" defaultValue="">
            <option value="">{q.notSpecified}</option>
            <option value="loading">{q.helpLoading}</option>
            <option value="unloading">{q.helpUnloading}</option>
            <option value="both">{q.helpBoth}</option>
            <option value="none">{q.helpNone}</option>
          </select>
        </label>
        <label className={`${labelClass} sm:col-span-2`}>
          {q.items}
          <textarea className={fieldClass} name="items" rows={3} maxLength={2000} placeholder={q.itemsPlaceholder} />
        </label>
        <label className={labelClass}>
          {q.pickupFloor}
          <input className={fieldClass} name="pickup_floor" maxLength={20} />
        </label>
        <label className={labelClass}>
          {q.deliveryFloor}
          <input className={fieldClass} name="delivery_floor" maxLength={20} />
        </label>
        <label className={labelClass}>
          {q.pickupElevator}
          <select className={fieldClass} name="pickup_elevator" defaultValue="">{yesNoOptions}</select>
        </label>
        <label className={labelClass}>
          {q.deliveryElevator}
          <select className={fieldClass} name="delivery_elevator" defaultValue="">{yesNoOptions}</select>
        </label>
        <label className={`${labelClass} sm:col-span-2`}>
          {q.notes}
          <textarea className={fieldClass} name="notes" rows={3} maxLength={4000} />
        </label>
        {error && (
          <p className="text-sm text-red-700 sm:col-span-2" role="alert">{error}</p>
        )}
        {opened && !error && (
          <p className="text-sm text-green-700 sm:col-span-2" role="status" aria-live="polite">{q.opened}</p>
        )}
        <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row">
          <button
            type="submit"
            value="whatsapp"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1da851]"
          >
            <MessageCircle className="h-4 w-4" />
            {q.sendWhatsApp}
          </button>
          <button
            type="submit"
            value="email"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-800 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            <Mail className="h-4 w-4" />
            {q.sendEmail}
          </button>
        </div>
        <p className="text-xs text-slate-500 sm:col-span-2">{q.whatsappNote} {q.emailNote}</p>
      </form>
    </div>
  );
}
