import { Mail, MapPin, Phone } from 'lucide-react'
import { HOTEL, MAP } from '../data/site-content'
import { useLang, useReserveHref } from '../lib/lang'
import { Button, Eyebrow, Reveal } from './ui'

export function Contact() {
  const { t } = useLang()
  const reserve = useReserveHref()
  const C = t.contact
  return (
    <section id="contact" className="bg-prune py-24 text-cream md:py-36">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-6">
            <Eyebrow tone="light">{C.eyebrow}</Eyebrow>
            <h2 className="text-[clamp(2.2rem,4.8vw,4rem)] leading-[1.04] text-cream">{C.title}</h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-rose/90">{C.text}</p>

            <ul className="mt-10 space-y-5">
              <li>
                <a href={HOTEL.phoneHref} className="group flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 transition-colors group-hover:bg-cream/20">
                    <Phone size={20} strokeWidth={1.4} aria-hidden="true" />
                  </span>
                  <span className="text-xl underline-offset-4 group-hover:underline">{HOTEL.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${HOTEL.email}`} className="group flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cream/10 transition-colors group-hover:bg-cream/20">
                    <Mail size={20} strokeWidth={1.4} aria-hidden="true" />
                  </span>
                  <span className="break-all text-xl underline-offset-4 group-hover:underline">{HOTEL.email}</span>
                </a>
              </li>
              <li>
                <a href={MAP.link} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cream/10 transition-colors group-hover:bg-cream/20">
                    <MapPin size={20} strokeWidth={1.4} aria-hidden="true" />
                  </span>
                  <address className="text-xl not-italic underline-offset-4 group-hover:underline">
                    {HOTEL.street}
                    <br />
                    {HOTEL.postalCode} {HOTEL.city}
                  </address>
                </a>
              </li>
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button href={reserve} variant="light">
                {t.ui.book}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120} className="md:col-span-6">
            <div className="rounded-[2rem] bg-cream/10 p-1.5 ring-1 ring-cream/15">
              <div className="overflow-hidden rounded-[calc(2rem-0.375rem)]">
                <iframe
                  title={C.mapTitle}
                  src={MAP.src}
                  loading="lazy"
                  className="block aspect-[4/3] w-full border-0 md:aspect-auto md:h-[26rem]"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
