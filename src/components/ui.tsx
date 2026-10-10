import { useEffect, useRef, type ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'

/** Apparition douce quand l'élément entre dans la fenêtre (IntersectionObserver, pas d'écouteur de scroll). */
export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-in')
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-in')
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ ['--d' as string]: `${delay}ms` }}>
      {children}
    </div>
  )
}

/** Entrée du premier écran : translation seule, le contenu reste visible dès le premier rendu (LCP). */
export function Rise({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <div className={`rise ${className}`} style={{ ['--d' as string]: `${delay}ms` }}>
      {children}
    </div>
  )
}

/** Surétiquette en majuscules au-dessus des titres de section. */
export function Eyebrow({ children, tone = 'dark' }: { children: ReactNode; tone?: 'dark' | 'light' }) {
  return (
    <p
      className={`mb-5 inline-flex rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest ${
        tone === 'dark' ? 'bg-terre/10 text-terre-deep' : 'bg-cream/10 text-rose'
      }`}
    >
      {children}
    </p>
  )
}

/** Boîtier imbriqué : coque fine + noyau, pour les photos. */
export function Bezel({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-[2rem] bg-ink/5 p-1.5 ring-1 ring-ink/10 ${className}`}>
      <div className="overflow-hidden rounded-[calc(2rem-0.375rem)] shadow-[inset_0_1px_1px_color-mix(in_oklab,var(--color-cream)_35%,transparent)]">
        {children}
      </div>
    </div>
  )
}

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: 'solid' | 'ghost' | 'light'
  external?: boolean
  className?: string
}

/** Bouton pilule avec flèche dans son propre rond. */
export function Button({ href, children, variant = 'solid', external, className = '' }: ButtonProps) {
  const base =
    'group inline-flex items-center gap-3 rounded-full py-2.5 pl-6 pr-2.5 text-sm font-bold tracking-wide transition-[transform,background-color,color] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]'
  const tone = {
    solid: 'bg-terre text-cream hover:bg-terre-deep',
    ghost: 'bg-transparent text-ink ring-1 ring-ink/25 hover:bg-ink hover:text-cream',
    light: 'bg-cream text-prune hover:bg-rose',
  }[variant]
  const dot = variant === 'solid' ? 'bg-cream/15' : variant === 'light' ? 'bg-prune/10' : 'bg-ink/10 group-hover:bg-cream/15'
  return (
    <a
      href={href}
      className={`${base} ${tone} ${className}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-px group-hover:translate-x-0.5 group-hover:scale-105 ${dot}`}
      >
        <ArrowUpRight size={17} strokeWidth={1.5} aria-hidden="true" />
      </span>
    </a>
  )
}
