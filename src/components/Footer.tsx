import { HOTEL } from '../data/site-content'
import { pathFor, useLang } from '../lib/lang'

export function Footer() {
  const { lang, t } = useLang()
  const link = 'inline-flex min-h-11 items-center hover:text-cream'
  return (
    <footer className="bg-ink pb-28 pt-14 text-cream/80 md:pb-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="font-display text-2xl text-cream">{HOTEL.name}</p>
          <p className="mt-1 text-xs font-bold uppercase tracking-widest">
            {t.footer.kind} · {t.footer.district} · {HOTEL.city}
          </p>
          <p className="mt-4 text-sm">
            {HOTEL.street}, {HOTEL.postalCode} {HOTEL.city}
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-1 text-xs font-bold uppercase tracking-wider">
          <li>
            <a href={HOTEL.instagram} target="_blank" rel="noopener noreferrer" className={link}>
              Instagram
            </a>
          </li>
          <li>
            <a href={HOTEL.facebook} target="_blank" rel="noopener noreferrer" className={link}>
              Facebook
            </a>
          </li>
          <li>
            <a href={pathFor(lang, true)} className={link}>
              {t.footer.legal}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
