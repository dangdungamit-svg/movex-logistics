import { useState, useEffect } from 'react';
import { Menu, X, Phone, Truck, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { COMPANY } from '@/i18n/translations';
import { landingPages, getLocalizedPath } from '@/i18n/landing';

export default function Header() {
  const { lang, t, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: t.nav.home, href: lang === 'en' ? '/en/#home' : '/#home' },
    { label: t.nav.services, href: lang === 'en' ? '/en/#services' : '/#services' },
    { label: t.nav.pricing, href: lang === 'en' ? '/en/#pricing' : '/#pricing' },
    { label: t.nav.howItWorks, href: lang === 'en' ? '/en/#how-it-works' : '/#how-it-works' },
    { label: t.nav.whyMoveX, href: lang === 'en' ? '/en/#why-movex' : '/#why-movex' },
    { label: t.nav.faq, href: lang === 'en' ? '/en/#faq' : '/#faq' },
    { label: t.nav.blog, href: lang === 'en' ? '/en/blog/' : '/blog' },
    { label: t.nav.contact, href: lang === 'en' ? '/en/#contact' : '/#contact' },
  ];

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg shadow-slate-900/10'
          : 'bg-slate-900'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <a
            href={lang === "en" ? "/en/#home" : "/#home"}
            onClick={closeMenu}
            className="flex items-center gap-2.5 text-white"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500/15 ring-1 ring-brand-400/30">
              <Truck className="h-5 w-5 text-brand-400" />
            </div>
            <span className="font-display text-lg font-bold tracking-tight sm:text-xl">
              MoveX<span className="text-brand-400"> Logistics</span>
            </span>
          </a>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {navItems.map((item) =>
              item.href === '/#services' ? (
                <details key={item.href} className="group relative">
                  <summary className="flex cursor-pointer list-none items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white">
                    {item.label}
                    <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                  </summary>
                  <ul className="absolute left-0 top-full z-50 mt-2 w-64 rounded-xl border border-slate-700 bg-slate-900 p-2 shadow-xl">
                    <li>
                      <a
                        href={item.href}
                        className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                      >
                        {lang === 'fi' ? 'Kaikki palvelut' : 'All services'}
                      </a>
                    </li>
                    {landingPages.map((page) => (
                      <li key={page.path}>
                        <a
                          href={getLocalizedPath(page.path, lang)}
                          className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                        >
                          {page.navLabel[lang]}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center rounded-lg bg-white/10 p-0.5">
              <button
                onClick={() => setLang('fi')}
                className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-colors ${
                  lang === 'fi'
                    ? 'bg-brand-600 text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                FI
              </button>
              <button
                onClick={() => setLang('en')}
                className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-colors ${
                  lang === 'en'
                    ? 'bg-brand-600 text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            <a
              href={COMPANY.phoneHref}
              className="hidden items-center gap-1.5 text-sm font-medium text-slate-300 transition-colors hover:text-white xl:flex"
            >
              <Phone className="h-4 w-4" />
              {COMPANY.phone}
            </a>

            <a
              href={lang === "en" ? "/en/#contact" : "/#contact"}
              className="hidden rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition-all hover:bg-brand-700 hover:shadow-brand-500/30 lg:inline-flex"
            >
              {t.nav.getQuote}
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
              aria-label={lang === 'fi' ? 'Valikko' : 'Menu'}
              aria-expanded={open}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="animate-slide-down border-t border-white/10 bg-slate-900 lg:hidden">
          <nav className="mx-auto max-w-7xl space-y-1 px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="block rounded-lg px-4 py-3 text-base font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <div className="border-t border-white/10 pt-3">
              <p className="px-4 pb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
                {lang === 'fi' ? 'Muuttopalvelut' : 'Moving services'}
              </p>
              {landingPages.map((page) => (
                <a
                  key={page.path}
                  href={getLocalizedPath(page.path, lang)}
                  onClick={closeMenu}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {page.navLabel[lang]}
                </a>
              ))}
            </div>
            <a
              href={lang === "en" ? "/en/#contact" : "/#contact"}
              onClick={closeMenu}
              className="mt-2 block rounded-xl bg-brand-600 px-4 py-3 text-center text-base font-semibold text-white shadow-lg shadow-brand-500/20"
            >
              {t.nav.getQuote}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
