import { ROOM_PHOTOS } from '../data/site-content'
import { useLang, useReserveHref } from '../lib/lang'
import { Bezel, Eyebrow, Reveal } from './ui'

export function Rooms() {
  const { t } = useLang()
  const reserve = useReserveHref()
  const R = t.rooms
  return (
    <section id="rooms" className="bg-paper py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-7">
            <Eyebrow>{R.eyebrow}</Eyebrow>
            <h2 className="text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.06]">{R.title}</h2>
          </Reveal>
          <Reveal delay={100} className="md:col-span-5">
            <p className="text-lg leading-relaxed text-ink-soft">{R.lead}</p>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-6 md:grid-cols-12 md:gap-7">
          {R.items.map((room, i) => {
            const photo = ROOM_PHOTOS[room.id]
            return (
              <li key={room.id} className="md:col-span-6">
                <Reveal delay={(i % 2) * 90}>
                  <article className="h-full">
                    <Bezel>
                      <div className="relative">
                        <img
                          src={photo.src}
                          width={photo.width}
                          height={photo.height}
                          alt={room.alt}
                          loading="lazy"
                          decoding="async"
                          className="aspect-[4/3] w-full object-cover"
                        />
                        <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-prune">
                          {t.price(room.from)}
                        </span>
                        {room.surface && (
                          <span className="absolute right-4 top-4 rounded-full bg-prune/85 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-cream">
                            {room.surface}
                          </span>
                        )}
                      </div>
                    </Bezel>
                    <div className="px-2 pt-6">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                        <h3 className="text-3xl">{room.name}</h3>
                        <p className="text-xs font-bold uppercase tracking-wider text-terre-deep">{room.detail}</p>
                      </div>
                      <p className="mt-3 max-w-prose leading-relaxed text-ink-soft">{room.text}</p>
                    </div>
                  </article>
                </Reveal>
              </li>
            )
          })}
        </ul>

        <Reveal>
          <p className="mt-14 max-w-3xl border-t border-ink/15 pt-6 text-sm leading-relaxed text-ink-soft">
            {R.note}{' '}
            <a href={reserve} className="font-bold text-terre-deep underline underline-offset-4 hover:text-ink">
              {R.ask}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
