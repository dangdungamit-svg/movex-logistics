import { Truck, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { COMPANY, SOCIAL_LINKS } from '@/i18n/translations';

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V8.69a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.12z" />
    </svg>
  );
}

const socials = [
  { name: 'Facebook', icon: Facebook, href: SOCIAL_LINKS.facebook, label: 'Facebook' },
  { name: 'Instagram', icon: Instagram, href: SOCIAL_LINKS.instagram, label: 'Instagram' },
  { name: 'TikTok', icon: TikTokIcon, href: SOCIAL_LINKS.tiktok, label: 'TikTok' },
];

const navLinks = [
  { key: 'services', href: '#services' },
  { key: 'pricing', href: '#pricing' },
  { key: 'faq', href: '#faq' },
  { key: 'blog', href: '/blog' },
  { key: 'contact', href: '#contact' },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 text-white">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500/15 ring-1 ring-brand-400/30">
                <Truck className="h-5 w-5 text-brand-400" />
              </div>
              <span className="font-display text-lg font-bold">
                MoveX<span className="text-brand-400"> Logistics</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed">{t.footer.tagline}</p>
            <p className="mt-3 text-xs text-slate-500">{t.footer.businessId}</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white">
              {t.footer.contactTitle}
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={COMPANY.phoneHref}
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 text-brand-400" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-2 break-all transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 text-brand-400" />
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-brand-400" />
                {t.footer.hours}
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-white">
              {t.footer.quickLinks}
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-white"
                  >
                    {t.nav[link.key as keyof typeof t.nav]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-sm font-semibold text-white">
              {t.footer.followUs}
            </h4>
            <div className="mt-4 flex gap-2.5">
              {socials.map((s) => {
                const Icon = s.icon;
                const isPlaceholder = s.href === '#';
                return (
                  <a
                    key={s.name}
                    href={isPlaceholder ? undefined : s.href}
                    target={isPlaceholder ? undefined : '_blank'}
                    rel={isPlaceholder ? undefined : 'noopener noreferrer'}
                    aria-label={s.label}
                    title={isPlaceholder ? `${s.label} (coming soon)` : s.label}
                    className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all ${
                      isPlaceholder
                        ? 'cursor-default bg-white/5 text-slate-600'
                        : 'bg-white/10 text-slate-300 hover:bg-brand-500 hover:text-white'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Legal note */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-xs text-slate-500">{t.footer.legalNote}</p>
        </div>

        {/* Bottom bar */}
        <div className="mt-4 flex flex-col items-center justify-between gap-3 text-xs text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} MoveX Logistics. {t.footer.rights}
          </p>
          <p>{t.footer.businessId}</p>
        </div>
      </div>
    </footer>
  );
}
