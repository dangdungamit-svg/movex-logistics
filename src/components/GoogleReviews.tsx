import { Star, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

// Real figures from the MoveX Logistics Google Business Profile.
// Update these when new reviews arrive.
const GOOGLE_RATING = '5,0';
const GOOGLE_RATING_EN = '5.0';
const GOOGLE_REVIEW_COUNT = 6;
const GOOGLE_REVIEWS_URL = 'https://www.google.com/maps/search/?api=1&query=MoveX+Logistics+Tampere';
const GOOGLE_WRITE_REVIEW_URL = 'https://g.page/r/CTGqc8Xz2oTHEAE/review';

// Short excerpts of real Google reviews (author name shortened).
const reviews = [
  { text: 'Very friendly and affordable service', author: 'Kapil B.' },
  { text: 'Recommended 👌🏻', author: 'DilliRaj G.' },
];

export default function GoogleReviews() {
  const { lang } = useLanguage();
  const fi = lang === 'fi';

  return (
    <section id="reviews" className="bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200/60 sm:p-8">
          <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:text-left">
            <div className="shrink-0">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                {fi ? 'Asiakkaiden arviot Googlessa' : 'Customer reviews on Google'}
              </p>
              <div className="mt-2 flex items-center justify-center gap-3 lg:justify-start">
                <span className="text-4xl font-bold text-slate-900">
                  {fi ? GOOGLE_RATING : GOOGLE_RATING_EN}
                </span>
                <div
                  className="flex"
                  role="img"
                  aria-label={fi ? '5 tähteä 5:stä' : '5 out of 5 stars'}
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="mt-1 text-sm text-slate-600">
                {fi
                  ? `${GOOGLE_REVIEW_COUNT} arvostelua Googlessa`
                  : `${GOOGLE_REVIEW_COUNT} reviews on Google`}
              </p>
            </div>

            <div className="grid w-full gap-4 sm:grid-cols-2">
              {reviews.map((review) => (
                <figure
                  key={review.author}
                  className="rounded-xl bg-white p-4 text-left shadow-sm ring-1 ring-slate-200/60"
                >
                  <div className="flex" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <blockquote className="mt-2 text-sm text-slate-700">“{review.text}”</blockquote>
                  <figcaption className="mt-2 text-xs font-medium text-slate-500">
                    {review.author} · Google
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
            >
              {fi ? 'Lue kaikki arvostelut' : 'Read all reviews'}
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href={GOOGLE_WRITE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-300 transition-colors hover:bg-slate-100"
            >
              {fi ? 'Jätä arvostelu' : 'Leave a review'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
