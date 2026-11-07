import { useEffect } from 'react';
import { LanguageProvider, useLanguage } from '@/i18n/LanguageContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import IntroSplash from '@/components/IntroSplash';
import GoogleReviews from '@/components/GoogleReviews';
import Pricing from '@/components/Pricing';
import FixedPriceQuote from '@/components/FixedPriceQuote';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import QualitySafety from '@/components/QualitySafety';
import LongDistance from '@/components/LongDistance';
import HowItWorks from '@/components/HowItWorks';
import WhyMoveX from '@/components/WhyMoveX';
import ServiceArea from '@/components/ServiceArea';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import MobileContactBar from '@/components/MobileContactBar';
import BlogPage from '@/components/Blog';
import Admin from '@/components/Admin';
import LandingPage from '@/components/LandingPage';
import { getLandingPage } from '@/i18n/landing';
import { setHreflangLinks } from '@/lib/seo';

function setHomepageMetadata(lang: 'fi' | 'en') {
  const title = lang === 'fi'
    ? 'Kuljetuspalvelu Tampere | Tavarakuljetus ja toimitus – MoveX Logistics'
    : 'Transport & Delivery in Tampere | MoveX Logistics';
  const description = lang === 'fi'
    ? 'Kuljetus- ja toimituspalvelut Tampereella ja Pirkanmaalla: tavarat, paketit, huonekalut, myymälänoudot, yrityskuljetukset ja sopivat lavakuljetukset. Pakettiauto + kuljettaja 50 €/h, sis. alv.'
    : 'Transport and delivery in Tampere and Pirkanmaa for goods, parcels, furniture, store pickups, business cargo and suitable pallet loads. Van + driver from €50/hour incl. VAT.';
  document.title = title;
  const descTag = document.querySelector('meta[name="description"]');
  descTag?.setAttribute('content', description);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
  document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title);
  document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description);
  const canonical = document.querySelector('link[rel="canonical"]') ?? document.createElement('link');
  canonical.setAttribute('rel', 'canonical');
  canonical.setAttribute('href', window.location.pathname.startsWith('/en') ? 'https://movexlogistics.fi/en/' : 'https://movexlogistics.fi/');
  if (!canonical.parentElement) document.head.appendChild(canonical);
  setHreflangLinks('/', '/en/');
  const robots = document.querySelector('meta[name="robots"]') ?? document.createElement('meta');
  robots.setAttribute('name', 'robots');
  robots.setAttribute('content', 'index, follow');
  if (!robots.parentElement) document.head.appendChild(robots);
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
  }, [isAdmin, isBlog, landing, lang]);
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

  return (
    <div className="min-h-screen bg-white">
      <Header overlay={!landing && !isBlog} />
      {landing ? (
        <LandingPage page={landing} />
      ) : isBlog ? (
        <BlogPage />
      ) : (
        <main>
          <IntroSplash />
          <Hero />
          <GoogleReviews />
          <Pricing />
          <FixedPriceQuote />
          <Services />
          <Gallery />
          <QualitySafety />
          <LongDistance />
          <HowItWorks />
          <WhyMoveX />
          <ServiceArea />
          <FAQ />
          <Contact />
        </main>
      )}
      <Footer />
      <MobileContactBar />
      <div className="h-14 lg:hidden" />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
