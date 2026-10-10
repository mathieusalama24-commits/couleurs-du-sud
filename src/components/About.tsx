import { Armchair, BedDouble, Coffee, Lock, Snowflake, Tv, Wifi, type LucideIcon } from 'lucide-react'
import { useLang } from '../lib/lang'
import { Eyebrow, Reveal } from './ui'

const ICONS: Record<string, LucideIcon> = {
  wifi: Wifi,
  snow: Snowflake,
  lock: Lock,
  tv: Tv,
  coffee: Coffee,
  bed: BedDouble,
}

export function About() {
  const { t } = useLang()
  const A = t.about
  return (
    <section id="hotel" className="bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-14 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-6">
            <Eyebrow>{A.eyebrow}</Eyebrow>
            <h2 className="text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.06]">{A.title}</h2>
            <figure className="mt-10 border-l-2 border-terre pl-6">
              <blockquote className="font-display text-[clamp(1.25rem,2vw,1.6rem)] leading-snug text-ink">
                « {A.quote} »
              </blockquote>
              <figcaption className="mt-4 text-xs font-bold uppercase tracking-widest text-ink-soft">
                {A.signature}
              </figcaption>
            </figure>
            <p className="mt-10 max-w-xl leading-relaxed text-ink-soft">{A.history}</p>
            <p className="mt-8 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-terre-deep">
              <Armchair size={18} strokeWidth={1.4} aria-hidden="true" />
              {A.slogan}
            </p>
          </Reveal>

          <div className="md:col-span-6 md:pl-10">
            <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {A.amenities.map((a, i) => {
                const Icon = ICONS[a.icon]
                return (
                  <li key={a.label}>
                    <Reveal delay={(i % 2) * 80}>
                      <div className="flex gap-4 border-t border-ink/15 pt-5">
                        <Icon size={22} strokeWidth={1.3} className="mt-0.5 shrink-0 text-terre" aria-hidden="true" />
                        <span className="leading-snug">{a.label}</span>
                      </div>
                    </Reveal>
                  </li>
                )
              })}
            </ul>

            <Reveal>
              <div className="mt-12 rounded-[2rem] bg-ink/5 p-1.5 ring-1 ring-ink/10">
                <div className="rounded-[calc(2rem-0.375rem)] bg-paper p-7">
                  <h3 className="text-2xl">{A.goodToKnow}</h3>
                  <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ink-soft">
                    {A.practical.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-terre" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
