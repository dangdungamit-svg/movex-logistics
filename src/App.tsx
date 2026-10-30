import { useEffect } from 'react';
import { LanguageProvider, useLanguage } from '@/i18n/LanguageContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Pricing from '@/components/Pricing';
import FixedPriceQuote from '@/components/FixedPriceQuote';
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
import LandingPage from '@/components/LandingPage';
import { getLandingPage } from '@/i18n/landing';
import { getResponsiveWebpSrcSet } from '@/lib/images';

const photoSizes =
  '(max-width: 640px) calc(100vw - 2rem), (max-width: 1024px) calc(100vw - 3rem), (max-width: 1280px) calc(100vw - 4rem), 1216px';

function setHomepageMetadata(lang: 'fi' | 'en') {
  const title = lang === 'fi'
    ? 'Muutto ja kuljetus Tampereella | MoveX Logistics'
    : 'Moving & Transport in Tampere | MoveX Logistics';
  const description = lang === 'fi'
    ? 'Muutto- ja kuljetuspalvelut Tampereella ja Pirkanmaalla. Selkeät hinnat alkaen 50 €/h (sis. alv 25,5 %). Pyydä tarjous MoveX Logisticsilta.'
    : 'Moving and transport services in Tampere and Pirkanmaa. Clear prices from €50/hour, including Finnish VAT (25.5%). Request a quote.';
  document.title = title;
  const descTag = document.querySelector('meta[name="description"]');
  descTag?.setAttribute('content', description);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
  document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title);
  document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description);
  const canonical = document.querySelector('link[rel="canonical"]') ?? document.createElement('link');
  canonical.setAttribute('rel', 'canonical');
  canonical.setAttribute('href', 'https://movexlogistics.fi/');
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
  const landing = getLandingPage(pathname);
  useEffect(() => {
    if (!isBlog && !isAdmin && !landing) setHomepageMetadata(lang);
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
      <Header />
      {landing ? (
        <LandingPage page={landing} />
      ) : isBlog ? (
        <BlogPage />
      ) : (
        <main>
          <Hero />
          <Pricing />
          <FixedPriceQuote />
          <Services />

          {/* Photo 1: After Services */}
          <section className="bg-white py-6 lg:py-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200/60">
                <picture>
                  <source
                    type="image/webp"
                    srcSet={getResponsiveWebpSrcSet('/images/20_20260924_225406_0019')}
                    sizes={photoSizes}
                  />
                  <img
                    src="/images/20_20260924_225406_0019.png"
                    alt="Muuttopalvelu Tampereella – muuttoauto ja kuljettaja"
                    className="aspect-video w-full object-cover"
                    loading="lazy"
                    decoding="async"
                    width={1080}
                    height={608}
                  />
                </picture>
              </div>
            </div>
          </section>

          <VehicleCapacity />

          {/* Photo 2: After VehicleCapacity */}
          <section className="bg-white py-6 lg:py-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200/60">
                <picture>
                  <source
                    type="image/webp"
                    srcSet={getResponsiveWebpSrcSet('/images/22_20260924_225406_0021')}
                    sizes={photoSizes}
                  />
                  <img
                    src="/images/22_20260924_225406_0021.png"
                    alt="Muuttomiehet lastaamassa ja kiinnittämässä tavaroita"
                    className="aspect-video w-full object-cover"
                    loading="lazy"
                    decoding="async"
                    width={1080}
                    height={608}
                  />
                </picture>
              </div>
            </div>
          </section>

          <QualitySafety />
          <WhatsIncluded />

          {/* Photo 3: After WhatsIncluded */}
          <section className="bg-white py-6 lg:py-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200/60">
                <picture>
                  <source
                    type="image/webp"
                    srcSet={getResponsiveWebpSrcSet('/images/32_20260924_225406_0031')}
                    sizes={photoSizes}
                  />
                  <img
                    src="/images/32_20260924_225406_0031.png"
                    alt="Huonekalujen ja esineiden kuljetus Tampereella"
                    className="aspect-video w-full object-cover"
                    loading="lazy"
                    decoding="async"
                    width={1080}
                    height={608}
                  />
                </picture>
              </div>
            </div>
          </section>

          <LongDistance />
          <HowItWorks />

          {/* Photo 4: After HowItWorks */}
          <section className="bg-white py-6 lg:py-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200/60">
                <picture>
                  <source
                    type="image/webp"
                    srcSet={getResponsiveWebpSrcSet('/images/25_20260924_225406_0024')}
                    sizes={photoSizes}
                  />
                  <img
                    src="/images/25_20260924_225406_0024.png"
                    alt="Pakettiauto ja kuljettaja"
                    className="aspect-video w-full object-cover"
                    loading="lazy"
                    decoding="async"
                    width={1080}
                    height={608}
                  />
                </picture>
              </div>
            </div>
          </section>

          <WhyMoveX />
          <ServiceArea />

          {/* Photo 5: After ServiceArea */}
          <section className="bg-white py-6 lg:py-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200/60">
                <picture>
                  <source
                    type="image/webp"
                    srcSet={getResponsiveWebpSrcSet('/images/35_20260924_225406_0034')}
                    sizes={photoSizes}
                  />
                  <img
                    src="/images/35_20260924_225406_0034.png"
                    alt="Kuljetuspalvelu Tampereella ja Pirkanmaalla"
                    className="aspect-video w-full object-cover"
                    loading="lazy"
                    decoding="async"
                    width={1080}
                    height={608}
                  />
                </picture>
              </div>
            </div>
          </section>

          <FAQ />
          <Contact />

          {/* Photo 6: After Contact */}
          <section className="bg-white py-6 lg:py-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200/60">
                <picture>
                  <source
                    type="image/webp"
                    srcSet={getResponsiveWebpSrcSet('/images/34_20260924_225406_0033')}
                    sizes={photoSizes}
                  />
                  <img
                    src="/images/34_20260924_225406_0033.png"
                    alt="Ota yhteyttä MoveX Logisticsiin"
                    className="aspect-video w-full object-cover"
                    loading="lazy"
                    decoding="async"
                    width={1080}
                    height={608}
                  />
                </picture>
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
