import { useCallback, useEffect, useMemo, useState, type FormEvent } from 'react';
import type { User } from '@supabase/supabase-js';
import { useLanguage } from '@/i18n/LanguageContext';
import { COMPANY } from '@/i18n/translations';
import { supabase } from '@/lib/supabase';

const statuses = ['new', 'contacted', 'quoted', 'confirmed', 'completed', 'cancelled'] as const;
type QuoteStatus = (typeof statuses)[number];

interface QuoteRequest {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  email: string;
  phone: string | null;
  service: string;
  pickup_location: string | null;
  destination: string | null;
  preferred_date: string | null;
  details: string | null;
  status: QuoteStatus;
  quoted_price: number | null;
  admin_notes: string | null;
}

const labels = {
  fi: {
    title: 'MoveX Logistics — Hallinta',
    loginTitle: 'Kirjaudu ylläpitoon',
    email: 'Sähköposti',
    password: 'Salasana',
    phone: 'Puhelin',
    login: 'Kirjaudu sisään',
    logout: 'Kirjaudu ulos',
    loading: 'Ladataan…',
    config: 'Supabase-yhteyttä ei ole määritetty.',
    loginError: 'Kirjautuminen epäonnistui. Tarkista tunnuksesi.',
    unauthorized: 'Tällä tilillä ei ole ylläpito-oikeuksia.',
    signInRequired: 'Kirjaudu sisään ylläpitotunnuksella.',
    loginLink: 'Siirry ylläpidon kirjautumiseen',
    heading: 'Tarjouspyynnöt',
    search: 'Hae nimellä, sähköpostilla, puhelimella tai palvelulla',
    allStatuses: 'Kaikki tilat',
    loadMore: 'Lataa lisää',
    empty: 'Tarjouspyyntöjä ei löytynyt.',
    loadError: 'Tarjouspyyntöjen lataaminen epäonnistui.',
    saveError: 'Muutoksia ei voitu tallentaa.',
    saved: 'Muutokset tallennettiin.',
    status: 'Tila',
    price: 'Tarjottu hinta (€)',
    notes: 'Muistiinpanot',
    save: 'Tallenna muutokset',
    call: 'Soita',
    whatsapp: 'WhatsApp',
    sendEmail: 'Sähköposti',
    received: 'Vastaanotettu',
    service: 'Palvelu',
    pickup: 'Noutopaikka',
    destination: 'Määränpää',
    date: 'Toivottu päivä',
    details: 'Lisätiedot',
    contact: 'Yhteystiedot',
    allDetails: 'Valitse tarjouspyyntö nähdäksesi tiedot.',
    invalidPrice: 'Hinnan tulee olla nolla tai sitä suurempi luku.',
  },
  en: {
    title: 'MoveX Logistics — Admin',
    loginTitle: 'Admin sign in',
    email: 'Email',
    password: 'Password',
    phone: 'Phone',
    login: 'Sign in',
    logout: 'Sign out',
    loading: 'Loading…',
    config: 'Supabase connection is not configured.',
    loginError: 'Sign in failed. Check your credentials.',
    unauthorized: 'This account does not have admin access.',
    signInRequired: 'Sign in with an admin account to continue.',
    loginLink: 'Go to admin sign in',
    heading: 'Quote Requests',
    search: 'Search by name, email, phone or service',
    allStatuses: 'All statuses',
    loadMore: 'Load more',
    empty: 'No quote requests found.',
    loadError: 'Quote requests could not be loaded.',
    saveError: 'Changes could not be saved.',
    saved: 'Changes saved.',
    status: 'Status',
    price: 'Quoted price (€)',
    notes: 'Notes',
    save: 'Save changes',
    call: 'Call',
    whatsapp: 'WhatsApp',
    sendEmail: 'Email',
    received: 'Received',
    service: 'Service',
    pickup: 'Pickup location',
    destination: 'Destination',
    date: 'Preferred date',
    details: 'Additional details',
    contact: 'Contact',
    allDetails: 'Select a quote request to see its details.',
    invalidPrice: 'Price must be a number greater than or equal to zero.',
  },
} as const;

const statusLabels: Record<'fi' | 'en', Record<QuoteStatus, string>> = {
  fi: {
    new: 'Uusi',
    contacted: 'Yhteydenotettu',
    quoted: 'Tarjous lähetetty',
    confirmed: 'Vahvistettu',
    completed: 'Valmis',
    cancelled: 'Peruutettu',
  },
  en: {
    new: 'New',
    contacted: 'Contacted',
    quoted: 'Quoted',
    confirmed: 'Confirmed',
    completed: 'Completed',
    cancelled: 'Cancelled',
  },
};

const inputClass =
  'mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100';

function setAdminMetadata(title: string) {
  document.title = title;
  const robots = document.querySelector('meta[name="robots"]') ?? document.createElement('meta');
  robots.setAttribute('name', 'robots');
  robots.setAttribute('content', 'noindex, nofollow');
  if (!robots.parentElement) document.head.appendChild(robots);
  document.querySelector('link[rel="canonical"]')?.remove();
}

export default function Admin({ loginOnly = false }: { loginOnly?: boolean }) {
  const { lang, setLang } = useLanguage();
  const copy = labels[lang];
  const client = supabase;
  const [user, setUser] = useState<User | null | undefined>(undefined);
  const [access, setAccess] = useState<'checking' | 'allowed' | 'denied'>('checking');
  const [requests, setRequests] = useState<QuoteRequest[]>([]);
  const [nextOffset, setNextOffset] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [selectedId, setSelectedId] = useState('');
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | QuoteStatus>('all');
  const [status, setStatus] = useState<QuoteStatus>('new');
  const [price, setPrice] = useState('');
  const [notes, setNotes] = useState('');
  const [notice, setNotice] = useState('');
  const [loginError, setLoginError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setAdminMetadata(copy.title);
  }, [copy.title]);

  useEffect(() => {
    if (!client) {
      setUser(null);
      return;
    }
    let active = true;
    client.auth.getSession().then(({ data }) => {
      if (active) setUser(data.session?.user ?? null);
    });
    const { data: { subscription } } = client.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, [client]);

  const loadRequests = useCallback(async (offset = 0) => {
    if (!client) return;
    setLoading(true);
    const { data, error } = await client
      .from('quote_requests')
      .select('id, created_at, updated_at, name, email, phone, service, pickup_location, destination, preferred_date, details, status, quoted_price, admin_notes')
      .order('created_at', { ascending: false })
      .range(offset, offset + 499);
    setLoading(false);
    if (error) {
      setNotice(copy.loadError);
      return;
    }
    const items = (data ?? []) as unknown as QuoteRequest[];
    setRequests((current) => offset === 0 ? items : [...current, ...items]);
    setNextOffset(offset + items.length);
    setHasMore(items.length === 500);
    if (offset === 0) {
      setSelectedId((current) => items.some((item) => item.id === current) ? current : items[0]?.id ?? '');
    }
  }, [client, copy.loadError]);

  useEffect(() => {
    if (loginOnly || user === undefined) return;
    if (!user || !client) {
      setAccess('denied');
      return;
    }
    let active = true;
    client.rpc('is_admin').then(({ data, error }) => {
      if (!active) return;
      if (error || data !== true) {
        setAccess('denied');
        return;
      }
      setAccess('allowed');
      void loadRequests();
    });
    return () => {
      active = false;
    };
  }, [client, loadRequests, loginOnly, user]);

  const selected = requests.find((request) => request.id === selectedId) ?? null;
  const filteredRequests = useMemo(() => {
    const query = search.trim().toLocaleLowerCase();
    return requests.filter((request) => {
      const matchesStatus = filterStatus === 'all' || request.status === filterStatus;
      const matchesQuery = !query || [
        request.name,
        request.email,
        request.phone ?? '',
        request.service,
      ].some((value) => value.toLocaleLowerCase().includes(query));
      return matchesStatus && matchesQuery;
    });
  }, [filterStatus, requests, search]);

  useEffect(() => {
    if (!selected) return;
    setStatus(selected.status);
    setPrice(selected.quoted_price === null ? '' : String(selected.quoted_price));
    setNotes(selected.admin_notes ?? '');
    setNotice('');
  }, [selected]);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoginError('');
    if (!client) {
      setLoginError(copy.config);
      return;
    }
    const form = new FormData(event.currentTarget);
    setSubmitting(true);
    const { error } = await client.auth.signInWithPassword({
      email: String(form.get('email') ?? ''),
      password: String(form.get('password') ?? ''),
    });
    setSubmitting(false);
    if (error) {
      setLoginError(copy.loginError);
      return;
    }
    window.location.assign('/admin');
  }

  async function handleSave(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!client || !selected) return;
    const quotedPrice = price.trim() === '' ? null : Number(price);
    if (quotedPrice !== null && (!Number.isFinite(quotedPrice) || quotedPrice < 0)) {
      setNotice(copy.invalidPrice);
      return;
    }

    setSubmitting(true);
    setNotice('');
    const { error } = await client
      .from('quote_requests')
      .update({ status, quoted_price: quotedPrice, admin_notes: notes.trim() || null })
      .eq('id', selected.id);
    setSubmitting(false);
    if (error) {
      setNotice(copy.saveError);
      return;
    }
    const updated = {
      ...selected,
      status,
      quoted_price: quotedPrice,
      admin_notes: notes.trim() || null,
      updated_at: new Date().toISOString(),
    };
    setRequests((current) => current.map((item) => item.id === selected.id ? updated : item));
    setNotice(copy.saved);
  }

  async function handleLogout() {
    await client?.auth.signOut();
    window.location.assign('/admin/login');
  }

  const labelValue = (label: string, value: string | null | undefined) => (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</dt>
      <dd className="mt-1 whitespace-pre-wrap break-words text-sm text-slate-800">{value || '—'}</dd>
    </div>
  );

  return (
    <main className="min-h-screen bg-[#f4f2f0] px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <a href="/" className="font-display text-xl font-bold text-slate-900">{COMPANY.name}</a>
          <div className="flex items-center gap-3">
            <div className="flex rounded-lg bg-white p-1 ring-1 ring-slate-200">
              {(['fi', 'en'] as const).map((language) => (
                <button
                  key={language}
                  className={`rounded-md px-2.5 py-1 text-xs font-semibold ${lang === language ? 'bg-slate-900 text-white' : 'text-slate-600'}`}
                  onClick={() => setLang(language)}
                  type="button"
                >
                  {language.toUpperCase()}
                </button>
              ))}
            </div>
            {user && !loginOnly && (
              <button className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 ring-1 ring-slate-300" onClick={handleLogout} type="button">
                {copy.logout}
              </button>
            )}
          </div>
        </header>

        {!client ? (
          <p className="rounded-xl bg-white p-5 text-sm text-slate-700">{copy.config}</p>
        ) : loginOnly ? (
          <section className="mx-auto max-w-md rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
            <h1 className="text-2xl font-bold text-slate-900">{copy.loginTitle}</h1>
            <form className="mt-6 space-y-4" onSubmit={handleLogin}>
              <label className="block text-sm font-medium text-slate-700">
                {copy.email}
                <input className={inputClass} type="email" name="email" autoComplete="username" required />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                {copy.password}
                <input className={inputClass} type="password" name="password" autoComplete="current-password" required />
              </label>
              {loginError && <p className="text-sm text-red-700" role="alert">{loginError}</p>}
              <button className="w-full rounded-xl bg-brand-500 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-400 disabled:opacity-60" disabled={submitting} type="submit">
                {copy.login}
              </button>
            </form>
          </section>
        ) : user === undefined || access === 'checking' ? (
          <p className="rounded-xl bg-white p-5 text-sm text-slate-700">{copy.loading}</p>
        ) : !user || access === 'denied' ? (
          <section className="rounded-xl bg-white p-6 text-center ring-1 ring-slate-200">
            <p className="text-sm text-slate-700">{user ? copy.unauthorized : copy.signInRequired}</p>
            <a className="mt-4 inline-flex font-semibold text-brand-700" href="/admin/login">{copy.loginLink}</a>
          </section>
        ) : (
          <section>
            <h1 className="mb-5 text-3xl font-bold text-slate-900">{copy.heading}</h1>
            <div className="grid gap-5 lg:grid-cols-[minmax(18rem,0.8fr)_minmax(0,1.2fr)]">
              <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                <label className="block text-xs font-semibold text-slate-600">
                  <span className="sr-only">{copy.search}</span>
                  <input
                    className={inputClass}
                    type="search"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder={copy.search}
                  />
                </label>
                <label className="mt-3 block text-xs font-semibold text-slate-600">
                  <span className="sr-only">{copy.status}</span>
                  <select className={inputClass} value={filterStatus} onChange={(event) => setFilterStatus(event.target.value as 'all' | QuoteStatus)}>
                    <option value="all">{copy.allStatuses}</option>
                    {statuses.map((item) => <option key={item} value={item}>{statusLabels[lang][item]}</option>)}
                  </select>
                </label>
                <div className="mt-4 max-h-[70vh] space-y-2 overflow-y-auto">
                  {loading ? (
                    <p className="p-3 text-sm text-slate-500">{copy.loading}</p>
                  ) : filteredRequests.length === 0 ? (
                    <p className="p-3 text-sm text-slate-500">{notice || copy.empty}</p>
                  ) : filteredRequests.map((request) => (
                    <button
                      key={request.id}
                      className={`w-full rounded-xl border p-3 text-left transition ${selectedId === request.id ? 'border-brand-400 bg-brand-50' : 'border-slate-200 hover:bg-slate-50'}`}
                      onClick={() => setSelectedId(request.id)}
                      type="button"
                    >
                      <span className="flex items-start justify-between gap-2">
                        <span className="font-semibold text-slate-900">{request.name}</span>
                        <span className="shrink-0 rounded-full bg-slate-100 px-2 py-1 text-[10px] font-semibold text-slate-600">{statusLabels[lang][request.status]}</span>
                      </span>
                      <span className="mt-1 block truncate text-xs text-slate-600">{request.email}</span>
                      <span className="mt-2 block truncate text-xs text-slate-500">{request.service}</span>
                      <span className="mt-2 block text-[11px] text-slate-400">{new Date(request.created_at).toLocaleString(lang === 'fi' ? 'fi-FI' : 'en-GB')}</span>
                    </button>
                  ))}
                  {hasMore && (
                    <button
                      className="w-full rounded-xl px-3 py-3 text-sm font-semibold text-brand-700 ring-1 ring-slate-200 disabled:opacity-60"
                      onClick={() => void loadRequests(nextOffset)}
                      disabled={loading}
                      type="button"
                    >
                      {loading ? copy.loading : copy.loadMore}
                    </button>
                  )}
                </div>
              </div>

              <div className="min-h-80 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-7">
                {!selected ? (
                  <p className="text-sm text-slate-600">{copy.allDetails}</p>
                ) : (
                  <>
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900">{selected.name}</h2>
                        <p className="mt-1 text-xs text-slate-500">{copy.received}: {new Date(selected.created_at).toLocaleString(lang === 'fi' ? 'fi-FI' : 'en-GB')}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {selected.phone && <a className="rounded-lg bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700" href={`tel:${selected.phone.replace(/[^\d+]/g, '')}`}>{copy.call}</a>}
                        {selected.phone && <a className="rounded-lg bg-green-50 px-3 py-2 text-xs font-semibold text-green-800" href={`https://wa.me/${selected.phone.replace(/\D/g, '')}?text=${encodeURIComponent(lang === 'fi' ? 'Hei, otamme yhteyttä tarjouspyyntöösi.' : 'Hello, we are contacting you about your quote request.')}`} target="_blank" rel="noopener noreferrer">{copy.whatsapp}</a>}
                        <a className="rounded-lg bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700" href={`mailto:${encodeURIComponent(selected.email)}`}>{copy.sendEmail}</a>
                      </div>
                    </div>

                    <dl className="mt-6 grid gap-4 border-y border-slate-100 py-5 sm:grid-cols-2">
                      {labelValue(copy.contact, selected.email)}
                      {labelValue(copy.phone, selected.phone)}
                      {labelValue(copy.service, selected.service)}
                      {labelValue(copy.pickup, selected.pickup_location)}
                      {labelValue(copy.destination, selected.destination)}
                      {labelValue(copy.date, selected.preferred_date)}
                      {labelValue(copy.details, selected.details)}
                    </dl>

                    <form className="mt-5 space-y-4" onSubmit={handleSave}>
                      <label className="block text-sm font-medium text-slate-700">
                        {copy.status}
                        <select className={inputClass} value={status} onChange={(event) => setStatus(event.target.value as QuoteStatus)}>
                          {statuses.map((item) => <option key={item} value={item}>{statusLabels[lang][item]}</option>)}
                        </select>
                      </label>
                      <label className="block text-sm font-medium text-slate-700">
                        {copy.price}
                        <input className={inputClass} type="number" min="0" step="0.01" value={price} onChange={(event) => setPrice(event.target.value)} />
                      </label>
                      <label className="block text-sm font-medium text-slate-700">
                        {copy.notes}
                        <textarea className={inputClass} rows={4} maxLength={5000} value={notes} onChange={(event) => setNotes(event.target.value)} />
                      </label>
                      {notice && <p className="text-sm text-slate-700" role="status">{notice}</p>}
                      <button className="rounded-xl bg-brand-500 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-400 disabled:opacity-60" type="submit" disabled={submitting}>
                        {submitting ? copy.loading : copy.save}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
