import { Phone } from 'lucide-react'
import { HOTEL } from '../data/site-content'
import { useLang, useReserveHref } from '../lib/lang'

/** Barre collante en bas sur mobile : appeler ou réserver en un geste. */
export function MobileBar() {
  const { t } = useLang()
  const reserve = useReserveHref()
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-ink/10 bg-cream/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        <a
          href={HOTEL.phoneHref}
          className="flex items-center justify-center gap-2 rounded-full py-3 text-sm font-bold ring-1 ring-ink/25 active:scale-[0.98]"
        >
          <Phone size={17} strokeWidth={1.5} aria-hidden="true" />
          {t.ui.call}
        </a>
        <a
          href={reserve}
          className="flex items-center justify-center rounded-full bg-terre py-3 text-sm font-bold text-cream active:scale-[0.98]"
        >
          {t.ui.book}
        </a>
      </div>
    </div>
  )
}
