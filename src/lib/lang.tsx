import { createContext, useContext, useEffect, useMemo, type ReactNode } from 'react'
import { HOTEL, LEGAL_SLUG, reserveHref, type Lang } from '../data/site-content'
import { fr, type Content } from '../data/i18n/fr'
import { en } from '../data/i18n/en'
import { es } from '../data/i18n/es'

const CONTENT: Record<Lang, Content> = { fr, en, es }

/** Langue et page déduites de l'URL : `/`, `/en/`, `/es/`, et la page légale de chaque langue. */
export function parseLocation(pathname: string): { lang: Lang; legal: boolean } {
  const m = pathname.match(/^\/(en|es)(?=\/|$)/)
  const lang = (m ? m[1] : 'fr') as Lang
  const rest = pathname.slice(m ? m[0].length : 0).replace(/\/+$/, '')
  return { lang, legal: rest === `/${LEGAL_SLUG[lang]}` }
}

export function pathFor(lang: Lang, legal = false): string {
  const prefix = lang === 'fr' ? '' : `/${lang}`
  return legal ? `${prefix}/${LEGAL_SLUG[lang]}` : `${prefix}/`
}

const Ctx = createContext<{ lang: Lang; t: Content }>({ lang: 'fr', t: fr })

function setMeta(selector: string, attr: string, value: string) {
  document.head.querySelector(selector)?.setAttribute(attr, value)
}

export function LangProvider({ lang, legal, children }: { lang: Lang; legal: boolean; children: ReactNode }) {
  const t = CONTENT[lang]
  useEffect(() => {
    document.documentElement.lang = t.htmlLang
    const url = `${HOTEL.url}${pathFor(lang, legal)}`
    document.title = legal ? `${t.legal.title} | ${HOTEL.name}` : t.meta.title
    setMeta('meta[name="description"]', 'content', t.meta.description)
    setMeta('meta[property="og:title"]', 'content', t.meta.title)
    setMeta('meta[property="og:description"]', 'content', t.meta.ogDescription)
    setMeta('meta[property="og:locale"]', 'content', t.ogLocale)
    setMeta('meta[property="og:url"]', 'content', url)
    setMeta('link[rel="canonical"]', 'href', url)
  }, [lang, legal, t])
  const value = useMemo(() => ({ lang, t }), [lang, t])
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export const useLang = () => useContext(Ctx)

export function useReserveHref(): string {
  const { t } = useLang()
  return reserveHref(t.reserve.subject, t.reserve.body)
}
