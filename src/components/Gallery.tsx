import { useLanguage } from '@/i18n/LanguageContext';
import { getResponsiveWebpSrcSet } from '@/lib/images';

// Portrait (9:16) photos, shown whole so nothing gets cut off.
const photos = [
  { file: '20_20260924_225406_0019', fi: 'MoveX-pakettiauto ja muuttomies Tampereella', en: 'MoveX van and mover in Tampere' },
  { file: '22_20260924_225406_0021', fi: 'Muuttopeitteet, hihnat ja kärryt tavaroiden suojaamiseen', en: 'Moving blankets, straps and a hand truck to protect your items' },
  { file: '32_20260924_225406_0031', fi: 'Muuttomies saapuu asiakkaan kotiin muuttopäivänä', en: 'Mover arriving at a customer’s home on moving day' },
  { file: '35_20260924_225406_0034', fi: 'Pakettiauto ja kuljettaja alkaen 50 €/h, alv sisältyy', en: 'Van and driver from €50/h, VAT included' },
];

export default function Gallery() {
  const { lang } = useLanguage();

  return (
    <section id="gallery" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            {lang === 'fi' ? 'Näin hoidamme muuttosi' : 'How we handle your move'}
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-6">
          {photos.map((photo) => (
            <div
              key={photo.file}
              className="overflow-hidden rounded-2xl bg-slate-100 shadow-md ring-1 ring-slate-200/60"
            >
              <picture>
                <source
                  type="image/webp"
                  srcSet={getResponsiveWebpSrcSet(`/images/${photo.file}`)}
                  sizes="(min-width: 1280px) 290px, (min-width: 1024px) 23vw, 48vw"
                />
                <img
                  src={`/images/${photo.file}.png`}
                  alt={photo[lang]}
                  className="aspect-[9/16] h-auto w-full object-contain"
                  loading="lazy"
                  decoding="async"
                  width={1080}
                  height={1920}
                />
              </picture>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
