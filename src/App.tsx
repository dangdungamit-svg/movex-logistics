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
import Admin from '@/components/Admin';

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
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
  const isAdmin = pathname === '/admin' || pathname === '/admin/login';
  const isBlog = pathname.startsWith('/blog');
  useEffect(() => {
    if (!isBlog && !isAdmin) setHomepageMetadata(lang);
  }, [isAdmin, isBlog, lang]);
  if (isAdmin) return <Admin loginOnly={pathname === '/admin/login'} />;

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

          {/* Photo 1: After Services */}
          <section className="bg-white py-6 lg:py-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200/60">
                <img
                  src="https://raw.githubusercontent.com/dangdungamit-svg/movex-logistics/main/public/images/20_20260924_225406_0019.png"
                  alt="Professional moving service"
                  className="aspect-video w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          <VehicleCapacity />

          {/* Photo 2: After VehicleCapacity */}
          <section className="bg-white py-6 lg:py-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200/60">
                <img
                  src="https://raw.githubusercontent.com/dangdungamit-svg/movex-logistics/main/public/images/22_20260924_225406_0021.png"
                  alt="Team loading and securing items"
                  className="aspect-video w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          <QualitySafety />
          <WhatsIncluded />

          {/* Photo 3: After WhatsIncluded */}
          <section className="bg-white py-6 lg:py-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200/60">
                <img
                  src="https://raw.githubusercontent.com/dangdungamit-svg/movex-logistics/main/public/images/32_20260924_225406_0031.png"
                  alt="Furniture and item transport"
                  className="aspect-video w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          <LongDistance />
          <HowItWorks />

          {/* Photo 4: After HowItWorks */}
          <section className="bg-white py-6 lg:py-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200/60">
                <img
                  src="https://raw.githubusercontent.com/dangdungamit-svg/movex-logistics/main/public/images/25_20260924_225406_0024.png"
                  alt="Van and driver service"
                  className="aspect-video w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          <WhyMoveX />
          <ServiceArea />

          {/* Photo 5: After ServiceArea */}
          <section className="bg-white py-6 lg:py-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200/60">
                <img
                  src="https://raw.githubusercontent.com/dangdungamit-svg/movex-logistics/main/public/images/35_20260924_225406_0034.png"
                  alt="Professional logistics transport"
                  className="aspect-video w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          <FAQ />
          <Contact />

          {/* Photo 6: After Contact */}
          <section className="bg-white py-6 lg:py-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200/60">
                <img
                  src="https://raw.githubusercontent.com/dangdungamit-svg/movex-logistics/main/public/images/34_20260924_225406_0033.png"
                  alt="Final delivery and service"
                  className="aspect-video w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </section>
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
