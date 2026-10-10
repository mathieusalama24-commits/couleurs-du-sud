// Données communes à toutes les langues. Les textes sont dans src/data/i18n/{fr,en,es}.ts.
// Chaque fait vient de `donnees-verifiees.md`. Rien ici ne doit être ajouté sans source :
// pas d'avis, pas de note, pas de classement, pas de date de rénovation.

export type Lang = 'fr' | 'en' | 'es'
export const LANGS: readonly Lang[] = ['fr', 'en', 'es']

export const HOTEL = {
  name: 'Couleurs du Sud',
  city: 'Cannes',
  street: '5 rue Jean Dollfus',
  postalCode: '06400',
  phone: '04 93 39 70 74',
  phoneHref: 'tel:+33493397074',
  email: 'hotelscouleurssuds@gmail.com',
  instagram: 'https://www.instagram.com/hotelscouleurssuds/',
  facebook: 'https://www.facebook.com/couleurssuds',
  url: 'https://couleurs-du-sud.netlify.app',
} as const

// Lien du bouton « Réserver ». À remplacer par le lien de réservation de l'hôtel
// quand il l'aura donné. Tant que c'est null, le bouton ouvre un e-mail pré-rempli.
export const BOOKING_URL: string | null = null

export const MAP = {
  src: 'https://www.openstreetmap.org/export/embed.html?bbox=7.0040%2C43.5475%2C7.0120%2C43.5520&layer=mapnik&marker=43.549729%2C7.0080217',
  link: 'https://www.openstreetmap.org/?mlat=43.549729&mlon=7.0080217#map=18/43.549729/7.0080217',
}

export const GOOGLE_REVIEWS_URL =
  'https://www.google.com/maps/search/?api=1&query=Boutique+H%C3%B4tel+Couleurs+du+Sud+Cannes'

export type Photo = { src: string; width: number; height: number }

export const HERO_PHOTO: Photo = { src: '/img/hero.webp', width: 1000, height: 1250 }

// Photos des catégories, rangées d'après l'ordre de la page « chambres » de leur site.
export const ROOM_PHOTOS: Record<string, Photo> = {
  standard: { src: '/img/standard.webp', width: 900, height: 1125 },
  confort: { src: '/img/confort.webp', width: 900, height: 1125 },
  prestige: { src: '/img/prestige.webp', width: 900, height: 1125 },
  suite: { src: '/img/suite.webp', width: 900, height: 1125 },
}

// Même ordre que `gallery.alts` dans chaque fichier de langue.
export const GALLERY_PHOTOS: Photo[] = [
  { src: '/img/g-01.webp', width: 900, height: 900 },
  { src: '/img/g-09.webp', width: 960, height: 720 },
  { src: '/img/g-02.webp', width: 900, height: 900 },
  { src: '/img/g-03.webp', width: 900, height: 900 },
  { src: '/img/g-06.webp', width: 1100, height: 822 },
  { src: '/img/g-04.webp', width: 900, height: 900 },
  { src: '/img/g-10.webp', width: 960, height: 720 },
  { src: '/img/g-05.webp', width: 900, height: 733 },
  { src: '/img/g-07.webp', width: 1100, height: 733 },
  { src: '/img/g-08.webp', width: 900, height: 900 },
  { src: '/img/g-11.webp', width: 900, height: 900 },
  { src: '/img/g-12.webp', width: 900, height: 900 },
]

export const NAV_IDS = ['rooms', 'district', 'hotel', 'gallery', 'contact'] as const
export type NavId = (typeof NAV_IDS)[number]

export const LEGAL_SLUG: Record<Lang, string> = {
  fr: 'mentions-legales',
  en: 'legal-notice',
  es: 'aviso-legal',
}

export const LANG_NAMES: Record<Lang, string> = { fr: 'Français', en: 'English', es: 'Español' }

export function reserveHref(subject: string, body: string): string {
  return BOOKING_URL ?? `mailto:${HOTEL.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
