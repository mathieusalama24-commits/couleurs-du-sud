import { useEffect, useRef, useState } from 'react'
import { Mail, MapPin, Menu, Phone, X } from 'lucide-react'
import { HOTEL, LANGS, LANG_NAMES, MAP, NAV_IDS } from '../data/site-content'
import { pathFor, useLang, useReserveHref } from '../lib/lang'
import { Button } from './ui'

function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string>('')
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter((e): e is HTMLElement => !!e)
    if (!els.length || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id)
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [ids])
  return active
}

export function LangSwitch({ className = '', label }: { className?: string; label?: string }) {
  const { lang, t } = useLang()
  return (
    <nav aria-label={label ?? t.ui.language} className={className}>
      <ul className="flex items-center gap-1">
        {LANGS.map((l) => (
          <li key={l}>
            <a
              href={pathFor(l)}
              hrefLang={l}
              lang={l}
              aria-label={LANG_NAMES[l]}
              aria-current={l === lang ? 'true' : undefined}
              className={`inline-flex h-11 min-w-11 items-center justify-center rounded-full px-2 text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${
                l === lang ? 'bg-ink text-cream' : 'text-ink hover:bg-ink/10'
              }`}
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function Header() {
  const { t } = useLang()
  const reserve = useReserveHref()
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  const sentinel = useRef<HTMLDivElement>(null)
  const button = useRef<HTMLButtonElement>(null)
  const panel = useRef<HTMLDivElement>(null)
  const wasOpen = useRef(false)
  const active = useActiveSection(NAV_IDS)

  useEffect(() => {
    const el = sentinel.current
    if (!el || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(([e]) => setSolid(!e.isIntersecting), { threshold: 0 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    if (open) {
      wasOpen.current = true
      requestAnimationFrame(() => panel.current?.querySelector<HTMLElement>('nav a')?.focus())
    } else if (wasOpen.current) {
      wasOpen.current = false
      button.current?.focus()
    }
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') return setOpen(false)
      if (e.key !== 'Tab') return
      const items = [button.current, ...Array.from(panel.current?.querySelectorAll<HTMLElement>('a[href]') ?? [])].filter(
        (el): el is HTMLElement => !!el,
      )
      const first = items[0]
      const last = items[items.length - 1]
      const cur = document.activeElement
      if (e.shiftKey && cur === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && cur === last) {
        e.preventDefault()
        first.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <div ref={sentinel} aria-hidden="true" className="absolute left-0 top-0 h-px w-px" />
      <header
        className={`sticky top-0 z-30 transition-[background-color,box-shadow] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          solid || open ? 'bg-cream/90 shadow-[0_1px_0_color-mix(in_oklab,var(--color-ink)_8%,transparent)] backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-8">
          <a href="#" className="leading-none" aria-label={`${HOTEL.name}, ${t.ui.backToTop}`}>
            <span className="block font-display text-xl tracking-tight">{HOTEL.name}</span>
            <span className="mt-1 block text-[0.7rem] font-bold uppercase tracking-widest text-ink-soft">
              {t.footer.kind} · {HOTEL.city}
            </span>
          </a>

          <div className="flex items-center gap-2 md:gap-3">
            <LangSwitch className="hidden md:block" />
            <a
              href={reserve}
              className="hidden rounded-full bg-terre px-5 py-3 text-xs font-bold uppercase tracking-wider text-cream transition-colors duration-300 hover:bg-terre-deep sm:inline-flex"
            >
              {t.ui.book}
            </a>
            <button
              ref={button}
              type="button"
              className="flex h-12 items-center gap-2.5 rounded-full px-3.5 ring-1 ring-ink/25 transition-colors duration-300 hover:bg-ink hover:text-cream"
              aria-expanded={open}
              aria-controls="site-menu"
              aria-label={open ? t.ui.closeMenu : t.ui.openMenu}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="hidden text-xs font-bold uppercase tracking-wider sm:inline">{t.ui.menu}</span>
              {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      <div
        id="site-menu"
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-label={t.ui.menu}
        inert={!open}
        className={`fixed inset-0 z-20 overflow-y-auto bg-cream transition-opacity duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="mx-auto grid min-h-full max-w-7xl gap-12 px-4 pb-16 pt-28 md:grid-cols-12 md:gap-8 md:px-8 md:pt-40">
          <nav aria-label={t.ui.mainNav} className="md:col-span-7">
            <ul>
              {NAV_IDS.map((id, i) => (
                <li key={id} className="border-b border-ink/15">
                  <a
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === id ? 'true' : undefined}
                    style={{ transitionDelay: open ? `${120 + i * 70}ms` : '0ms' }}
                    className={`block py-4 text-2xl font-bold uppercase tracking-wider transition-[opacity,transform,color] duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-terre md:py-5 md:text-4xl ${
                      active === id ? 'text-terre' : 'text-ink'
                    } ${open ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                  >
                    {t.nav[id]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div
            style={{ transitionDelay: open ? '480ms' : '0ms' }}
            className={`md:col-span-5 md:pl-8 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
              open ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <ul className="space-y-4 text-lg">
              <li>
                <a href={HOTEL.phoneHref} className="flex items-center gap-3 hover:text-terre">
                  <Phone size={20} strokeWidth={1.4} aria-hidden="true" />
                  <span className="sr-only">{t.ui.phoneLabel} : </span>
                  {HOTEL.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${HOTEL.email}`} className="flex items-center gap-3 break-all hover:text-terre">
                  <Mail size={20} strokeWidth={1.4} aria-hidden="true" />
                  <span className="sr-only">{t.ui.emailLabel} : </span>
                  {HOTEL.email}
                </a>
              </li>
              <li>
                <a href={MAP.link} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-terre">
                  <MapPin size={20} strokeWidth={1.4} aria-hidden="true" className="mt-1 shrink-0" />
                  <span>
                    <span className="sr-only">{t.ui.addressLabel} : </span>
                    {HOTEL.street}, {HOTEL.postalCode} {HOTEL.city}
                  </span>
                </a>
              </li>
            </ul>
            <div className="mt-8">
              <Button href={reserve}>{t.ui.book}</Button>
            </div>
            <div className="mt-10 border-t border-ink/15 pt-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-ink-soft">{t.ui.language}</p>
              <LangSwitch label={`${t.ui.menu} : ${t.ui.language}`} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
