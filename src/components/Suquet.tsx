import { useLang } from '../lib/lang'
import { Eyebrow, Reveal } from './ui'

export function Suquet() {
  const { t } = useLang()
  const D = t.district
  return (
    <section id="district" className="bg-prune py-24 text-cream md:py-36">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-5">
            <Eyebrow tone="light">{D.eyebrow}</Eyebrow>
            <h2 className="text-[clamp(2.4rem,5.2vw,4.4rem)] leading-[1.02] text-cream">{D.title}</h2>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-rose/90">{D.text}</p>
          </Reveal>

          <ul className="md:col-span-7 md:pl-10">
            {D.distances.map((d, i) => (
              <li key={d.value} className="border-t border-cream/15 first:border-t-0 md:first:border-t">
                <Reveal delay={i * 110}>
                  <div className="flex items-baseline gap-6 py-7 md:py-9">
                    <span className="w-36 shrink-0 font-display text-[clamp(2.6rem,6vw,4.6rem)] leading-none text-ocre md:w-56">
                      {d.value}
                    </span>
                    <span className="text-lg leading-snug text-cream/90">{d.label}</span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
