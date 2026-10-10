import { HERO_PHOTO, HOTEL } from '../data/site-content'
import { useLang, useReserveHref } from '../lib/lang'
import { Bezel, Button, Eyebrow, Rise } from './ui'

export function Hero() {
  const { t } = useLang()
  const reserve = useReserveHref()
  return (
    <section className="relative -mt-[4.5rem] overflow-hidden bg-cream pb-20 pt-32 md:pb-28 md:pt-40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-12 md:gap-8 md:px-8">
        <div className="md:col-span-7 md:pr-8">
          <Rise>
            <Eyebrow>{t.hero.eyebrow}</Eyebrow>
          </Rise>
          <Rise delay={80}>
            <h1 className="text-[clamp(2.4rem,5.6vw,5rem)] leading-[1.04]">{t.hero.title}</h1>
          </Rise>
          <Rise delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">{t.hero.lead}</p>
          </Rise>
          <Rise delay={240}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href={reserve}>{t.ui.book}</Button>
              <Button href={HOTEL.phoneHref} variant="ghost">
                {HOTEL.phone}
              </Button>
            </div>
          </Rise>
          <Rise delay={320}>
            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-4 border-t border-ink/15 pt-6">
              {t.hero.facts.map((f) => (
                <div key={f.label}>
                  <dt className="sr-only">{f.label}</dt>
                  <dd>
                    <span className="block font-display text-3xl text-terre">{f.value}</span>
                    <span className="mt-1 block text-xs font-bold uppercase leading-snug tracking-wider text-ink-soft">
                      {f.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </Rise>
        </div>

        <Rise delay={120} className="md:col-span-5">
          <Bezel>
            <img
              src={HERO_PHOTO.src}
              width={HERO_PHOTO.width}
              height={HERO_PHOTO.height}
              alt={t.hero.alt}
              fetchPriority="high"
              className="block h-auto w-full"
            />
          </Bezel>
        </Rise>
      </div>
    </section>
  )
}
