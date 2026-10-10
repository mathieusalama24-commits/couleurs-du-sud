import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { GALLERY_PHOTOS } from '../data/site-content'
import { useLang } from '../lib/lang'
import { Eyebrow, Reveal } from './ui'

export function Gallery() {
  const { t } = useLang()
  const G = t.gallery
  const dialog = useRef<HTMLDialogElement>(null)
  const [index, setIndex] = useState<number | null>(null)

  const open = (i: number) => {
    setIndex(i)
    dialog.current?.showModal()
  }
  const close = useCallback(() => {
    dialog.current?.close()
    setIndex(null)
  }, [])
  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length)),
    [],
  )

  useEffect(() => {
    if (index === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, step])

  const current = index === null ? null : GALLERY_PHOTOS[index]
  const currentAlt = index === null ? '' : G.alts[index]

  return (
    <section id="gallery" className="bg-paper py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <Eyebrow>{G.eyebrow}</Eyebrow>
          <h2 className="max-w-3xl text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.06]">{G.title}</h2>
        </Reveal>

        <ul className="mt-14 columns-2 gap-3 md:columns-3 md:gap-5">
          {GALLERY_PHOTOS.map((g, i) => (
            <li key={g.src} className="mb-3 break-inside-avoid md:mb-5">
              <button
                type="button"
                onClick={() => open(i)}
                aria-label={`${G.enlarge} : ${G.alts[i]}`}
                className="group block w-full overflow-hidden rounded-[1.25rem] ring-1 ring-ink/10"
              >
                <img
                  src={g.src}
                  width={g.width}
                  height={g.height}
                  alt={G.alts[i]}
                  loading="lazy"
                  decoding="async"
                  className="block h-auto w-full transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03]"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialog}
        onClose={() => setIndex(null)}
        onClick={(e) => e.target === dialog.current && close()}
        aria-label={G.enlarged}
        className="m-auto max-h-[92dvh] max-w-[min(92vw,1100px)] overflow-visible bg-transparent p-0 text-cream"
      >
        {current && (
          <div className="relative">
            <img
              src={current.src}
              alt={currentAlt}
              className="max-h-[80dvh] w-auto max-w-full rounded-[1.25rem] object-contain"
            />
            <p className="mt-4 text-center text-sm text-cream/85">{currentAlt}</p>
            <button
              type="button"
              onClick={close}
              aria-label={G.close}
              className="absolute -top-3 right-0 flex h-11 w-11 -translate-y-full items-center justify-center rounded-full bg-cream/15 hover:bg-cream/25"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label={G.prev}
              className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-ink/60 hover:bg-ink/80"
            >
              <ChevronLeft size={22} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label={G.next}
              className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-ink/60 hover:bg-ink/80"
            >
              <ChevronRight size={22} strokeWidth={1.5} />
            </button>
          </div>
        )}
      </dialog>
    </section>
  )
}
