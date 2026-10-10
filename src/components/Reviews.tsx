import { ArrowUpRight, Star } from 'lucide-react'
import { GOOGLE_REVIEWS_URL } from '../data/site-content'
import { useLang } from '../lib/lang'
import { Eyebrow, Reveal } from './ui'

/** Note et nombre d'avis relevés sur Google Maps. Aucun avis individuel n'est cité. */
export function Reviews() {
  const { t } = useLang()
  const R = t.reviews
  return (
    <section id="reviews" className="bg-rose py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-12 md:gap-8 md:px-8">
        <Reveal className="md:col-span-6">
          <Eyebrow>{R.eyebrow}</Eyebrow>
          <h2 className="text-[clamp(1.9rem,4vw,3.2rem)] leading-[1.08]">{R.title}</h2>
        </Reveal>
        <Reveal delay={100} className="md:col-span-6 md:pl-10">
          <p className="flex items-end gap-4">
            <span className="font-display text-[clamp(4rem,9vw,6.5rem)] leading-none text-prune">{R.score}</span>
            <span className="pb-2 text-xl text-ink-soft">{R.outOf}</span>
          </p>
          <p className="mt-3 flex items-center gap-2 text-lg font-bold">
            <Star size={20} strokeWidth={1.5} className="text-terre-deep" aria-hidden="true" />
            {R.count}
          </p>
          <p className="mt-2 text-sm text-ink-soft">{R.source}</p>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-terre-deep underline underline-offset-4 hover:text-ink"
          >
            {R.link}
            <ArrowUpRight size={16} strokeWidth={1.6} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
