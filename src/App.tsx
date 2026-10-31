import { useEffect } from 'react';
import { LanguageProvider, useLanguage } from '@/i18n/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileContactBar from '@/components/MobileContactBar';
import BlogPage from '@/components/Blog';
import Admin from '@/components/Admin';
import LandingPage from '@/components/LandingPage';
import HomeRedesign from '@/components/HomeRedesign';
import { getLandingPage } from '@/i18n/landing';

function setHomepageMetadata(lang: 'fi' | 'en') {
  const title = lang === 'fi' ? 'Muutto ja kuljetus Tampereella | MoveX Logistics' : 'Moving & Transport in Tampere | MoveX Logistics';
  const description = lang === 'fi'
    ? 'Muutto- ja kuljetuspalvelut Tampereella ja Pirkanmaalla. Selkeät hinnat alkaen 50 €/h (sis. alv 25,5 %). Pyydä tarjous MoveX Logisticsilta.'
    : 'Moving and transport services in Tampere and Pirkanmaa. Clear prices from €50/hour, including Finnish VAT (25.5%). Request a quote.';
  document.title = title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
  document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title);
  document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description);
  const canonical = document.querySelector('link[rel="canonical"]') ?? document.createElement('link');
  canonical.setAttribute('rel', 'canonical');
  canonical.setAttribute('href', window.location.pathname.startsWith('/en') ? 'https://movexlogistics.fi/en/' : 'https://movexlogistics.fi/');
  if (!canonical.parentElement) document.head.appendChild(canonical);
}

function AppContent() {
  const { lang } = useLanguage();
  const rawPathname = window.location.pathname.replace(/\/+$/, '') || '/';
  const isEnglishRoute = rawPathname === '/en' || rawPathname.startsWith('/en/');
  const pathname = isEnglishRoute ? (rawPathname.replace(/^\/en(?=\/|$)/, '') || '/') : rawPathname;
  const isAdmin = pathname === '/admin' || pathname === '/admin/login';
  const isBlog = pathname.startsWith('/blog');
  const landing = getLandingPage(rawPathname) ?? getLandingPage(pathname);

  useEffect(() => {
    if (!isBlog && !isAdmin && !landing) setHomepageMetadata(isEnglishRoute ? 'en' : lang);
  }, [isAdmin, isBlog, landing, lang, isEnglishRoute]);

  useEffect(() => {
    if (!isAdmin) return;
    document.querySelector('meta[name="robots"]')?.setAttribute('content', 'noindex, nofollow');
    document.querySelector('link[rel="canonical"]')?.remove();
  }, [isAdmin]);

  useEffect(() => {
    if (isBlog || isAdmin || landing || !window.location.hash) return;
    const id = decodeURIComponent(window.location.hash.slice(1));
    document.getElementById(id)?.scrollIntoView();
  }, [isAdmin, isBlog, landing]);

  if (isAdmin) return <Admin loginOnly={pathname === '/admin/login'} />;

  if (!isBlog && !landing) return <HomeRedesign />;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {landing ? <LandingPage page={landing} /> : <BlogPage />}
      <Footer />
      <MobileContactBar />
      <div className="h-14 lg:hidden" />
    </div>
  );
}

function App() {
  return <LanguageProvider><AppContent /></LanguageProvider>;
}

export default App;
