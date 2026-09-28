import { useEffect } from 'react';
import { LanguageProvider, useLanguage } from '@/i18n/LanguageContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Pricing from '@/components/Pricing';
import Services from '@/components/Services';
import VehicleCapacity from '@/components/VehicleCapacity';
import QualitySafety from '@/components/QualitySafety';
import WhatsIncluded from '@/components/WhatsIncluded';
import LongDistance from '@/components/LongDistance';
import HowItWorks from '@/components/HowItWorks';
import WhyMoveX from '@/components/WhyMoveX';
import ServiceArea from '@/components/ServiceArea';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import MobileContactBar from '@/components/MobileContactBar';
import BlogPage from '@/components/Blog';

function setHomepageMetadata(lang: 'fi' | 'en') {
  const title = lang === 'fi'
    ? 'MoveX Logistics – Muutto ja kuljetus Tampereella | Selkeät hinnat'
    : 'MoveX Logistics – Moving & Transport Services in Tampere | Clear Prices';
  const description = lang === 'fi'
    ? 'MoveX Logistics tarjoaa ammattimaiset muutto- ja kuljetuspalvelut Tampereella, Pirkanmaalla ja koko Suomessa. Selkeät hinnat, huolellinen käsittely ja suora yhteydenotto. Pyydä tarjous!'
    : 'MoveX Logistics provides professional moving and transport services in Tampere, Pirkanmaa and across Finland. Clear prices, careful handling and direct communication. Get a quote!';
  document.title = title;
  const descTag = document.querySelector('meta[name="description"]');
  descTag?.setAttribute('content', description);
  const canonical = document.querySelector('link[rel="canonical"]') ?? document.createElement('link');
  canonical.setAttribute('rel', 'canonical');
  canonical.setAttribute('href', window.location.origin + '/');
  if (!canonical.parentElement) document.head.appendChild(canonical);
  const robots = document.querySelector('meta[name="robots"]') ?? document.createElement('meta');
  robots.setAttribute('name', 'robots');
  robots.setAttribute('content', 'index, follow');
  if (!robots.parentElement) document.head.appendChild(robots);
}

function AppContent() {
  const { lang } = useLanguage();
  const isBlog = window.location.pathname.startsWith('/blog');
  useEffect(() => {
    if (!isBlog) setHomepageMetadata(lang);
  }, [isBlog, lang]);
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {isBlog ? (
        <BlogPage />
      ) : (
        <main>
          <Hero />
          <Pricing />
          <Services />
          <VehicleCapacity />
          <QualitySafety />
          <WhatsIncluded />
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
