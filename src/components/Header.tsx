import { useState, useEffect } from 'react';
import { Menu, X, Phone, Truck } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { COMPANY } from '@/i18n/translations';

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
    { label: t.nav.home, href: '#home' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.pricing, href: '#pricing' },
    { label: t.nav.howItWorks, href: '#how-it-works' },
    { label: t.nav.whyMoveX, href: '#why-movex' },
    { label: t.nav.faq, href: '#faq' },
    { label: t.nav.blog, href: '/blog' },
    { label: t.nav.contact, href: '#contact' },
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
            href="#home"
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
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center rounded-lg bg-white/10 p-0.5">
              <button
                onClick={() => setLang('fi')}
                className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-colors ${
                  lang === 'fi'
                    ? 'bg-brand-500 text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                FI
              </button>
              <button
                onClick={() => setLang('en')}
                className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-colors ${
                  lang === 'en'
                    ? 'bg-brand-500 text-white'
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
              href="#contact"
              className="hidden rounded-xl bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition-all hover:bg-brand-400 hover:shadow-brand-500/30 lg:inline-flex"
            >
              {t.nav.getQuote}
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
              aria-label="Menu"
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
            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 block rounded-xl bg-brand-500 px-4 py-3 text-center text-base font-semibold text-white shadow-lg shadow-brand-500/20"
            >
              {t.nav.getQuote}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
