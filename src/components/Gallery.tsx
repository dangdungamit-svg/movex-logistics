import { useLanguage } from '@/i18n/LanguageContext';

const photos = [
  '14_20260924_225406_0013.png',
  '34_20260924_225406_0033.png',
];

export default function Gallery() {
  const { lang } = useLanguage();

  return (
    <section id="gallery" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            {lang === 'fi' ? 'Galleria' : 'Gallery'}
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {photos.map((photo) => (
            <div
              key={photo}
              className="group relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200/60"
            >
              <div className="aspect-video overflow-hidden bg-slate-100">
                <img
                  src={`https://movexlogistics.fi/images/${photo}`}
                  alt={lang === 'fi' ? 'MoveX Logistics kuva' : 'MoveX Logistics photo'}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
