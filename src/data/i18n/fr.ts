import type { NavId } from '../site-content'

export interface Room {
  id: 'standard' | 'confort' | 'prestige' | 'suite'
  name: string
  from: number
  detail: string
  text: string
  alt: string
  surface?: string
}

export interface Content {
  htmlLang: string
  ogLocale: string
  meta: { title: string; description: string; ogDescription: string }
  ui: {
    skip: string
    menu: string
    openMenu: string
    closeMenu: string
    mainNav: string
    mobileNav: string
    book: string
    call: string
    backToTop: string
    language: string
    findUs: string
    phoneLabel: string
    emailLabel: string
    addressLabel: string
  }
  nav: Record<NavId, string>
  reserve: { subject: string; body: string }
  price: (n: number) => string
  hero: { eyebrow: string; title: string; lead: string; facts: { value: string; label: string }[]; alt: string }
  rooms: { eyebrow: string; title: string; lead: string; note: string; ask: string; items: Room[] }
  district: { eyebrow: string; title: string; text: string; distances: { value: string; label: string }[] }
  about: {
    eyebrow: string
    title: string
    quote: string
    signature: string
    slogan: string
    history: string
    amenities: { icon: 'wifi' | 'snow' | 'lock' | 'tv' | 'coffee' | 'bed'; label: string }[]
    goodToKnow: string
    practical: string[]
  }
  gallery: {
    eyebrow: string
    title: string
    alts: string[]
    enlarge: string
    enlarged: string
    close: string
    prev: string
    next: string
  }
  reviews: { eyebrow: string; title: string; score: string; outOf: string; count: string; source: string; link: string }
  contact: { eyebrow: string; title: string; text: string; mapTitle: string }
  footer: { kind: string; district: string; legal: string }
  legal: {
    title: string
    back: string
    publisherTitle: string
    publisher: string
    company: string
    siret: string
    director: string
    contact: string
    hostTitle: string
    host: string
    dataTitle: string
    data: string
    mediationTitle: string
    mediation: string
  }
}

const NB = ' '

export const fr: Content = {
  htmlLang: 'fr',
  ogLocale: 'fr_FR',
  meta: {
    title: 'Couleurs du Sud, boutique hôtel au Suquet à Cannes',
    description:
      'Boutique hôtel de 7 chambres dans le Suquet, à Cannes, à 50 mètres des plages. Réservation directe par e-mail ou par téléphone.',
    ogDescription: '7 chambres dans une ancienne auberge du Suquet, à 50 mètres des plages.',
  },
  ui: {
    skip: 'Aller au contenu',
    menu: 'Menu',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    mainNav: 'Navigation principale',
    mobileNav: 'Menu',
    book: 'Réserver',
    call: 'Appeler',
    backToTop: 'retour en haut',
    language: 'Langue',
    findUs: 'Nous trouver',
    phoneLabel: 'Téléphone',
    emailLabel: 'E-mail',
    addressLabel: 'Adresse',
  },
  nav: { rooms: 'Chambres', district: 'Le Suquet', hotel: 'L’hôtel', gallery: 'Galerie', contact: 'Contact' },
  reserve: {
    subject: 'Demande de réservation',
    body: `Bonjour,\n\nJe souhaite réserver une chambre.\nDate d’arrivée${NB}:\nDate de départ${NB}:\nNombre de personnes${NB}:\n\nMerci.`,
  },
  price: (n) => `Dès ${n}${NB}€`,
  hero: {
    eyebrow: 'Boutique hôtel · Le Suquet · Cannes',
    title: 'Un petit hôtel au cœur du vieux Cannes.',
    lead: 'Sept chambres dans une ancienne auberge du Suquet, à 50 mètres des plages et à 800 mètres du Palais des Festivals.',
    facts: [
      { value: '7', label: 'chambres' },
      { value: `50${NB}m`, label: 'des plages' },
      { value: `800${NB}m`, label: 'du Palais des Festivals' },
    ],
    alt: 'Chambre aux murs jaunes, lit double sous une applique et armoire peinte',
  },
  rooms: {
    eyebrow: 'Les chambres',
    title: 'Quatre façons de dormir au Suquet.',
    lead: 'Toutes les chambres sont climatisées, insonorisées et non-fumeurs, avec coffre-fort, télévision écran plat et salle de bain refaite.',
    note: `Tarifs TTC, hors taxe de séjour de 1,88${NB}€ par jour et par personne. Les tarifs ne s’appliquent pas pendant les congrès, séminaires et manifestations.`,
    ask: 'Demander la disponibilité',
    items: [
      {
        id: 'standard',
        name: 'Standard',
        from: 99,
        detail: '1 ou 2 personnes',
        text: `Une chambre d’environ 11${NB}m², petite mais idéale pour un court séjour ou un pied-à-terre bien placé.`,
        alt: 'Chambre claire au lit fleuri, porte-fenêtre et volets ouverts',
        surface: `11${NB}m²`,
      },
      {
        id: 'confort',
        name: 'Confort',
        from: 119,
        detail: '1 à 2 personnes, lit bébé possible',
        text: `Un peu plus d’espace, un petit bureau ou un dressing. Elle peut se faire en deux lits simples ou en lit double (Confort Twin dès 129${NB}€).`,
        alt: 'Chambre aux murs ocre, lit double rouge devant une fenêtre ouverte',
      },
      {
        id: 'prestige',
        name: 'Prestige',
        from: 169,
        detail: 'Lit double, 3e couchage possible',
        text: 'Un lit double, un lit simple en option pour trois, et une grande salle de bain qui fait la différence.',
        alt: 'Chambre aux murs roses, lit double en patchwork et fauteuil prune',
      },
      {
        id: 'suite',
        name: 'Suite',
        from: 169,
        detail: '2 chambres, jusqu’à 4 personnes',
        text: 'Deux chambres séparées qui partagent la même salle de bain. Pensée pour les familles et les amis qui voyagent ensemble.',
        alt: 'Chambre claire de la suite, deux lits sous une fenêtre à rideaux gris',
      },
    ],
  },
  district: {
    eyebrow: 'Le quartier',
    title: 'Le Suquet, à pied.',
    text: 'L’hôtel est dans la vieille ville de Cannes, le Suquet, avec ses restaurants et ses ambiances de marché provençal. On y circule à pied, en navette électrique ou à vélo électrique : pas besoin de voiture.',
    distances: [
      { value: `50${NB}m`, label: 'des plages privées et publiques' },
      { value: `300${NB}m`, label: 'du port et des commerces du centre-ville' },
      { value: `800${NB}m`, label: 'du Palais des Festivals' },
    ],
  },
  about: {
    eyebrow: 'L’hôtel',
    title: 'Comme chez des amis, avec les services d’un hôtel.',
    quote: 'Notre envie est que vous vous sentiez comme chez des amis, tout en conservant les services d’un hôtel et l’intimité que vous désirez.',
    signature: 'David, Couleurs du Sud',
    slogan: 'Only for positive people',
    history:
      'Couleurs du Sud est un hôtel de tourisme 3 étoiles, typiquement français, de 7 chambres, installé dans une ancienne auberge. Il est devenu boutique hôtel en 2013. L’accueil se fait en français, anglais, italien et espagnol, avec des conseils personnalisés pour découvrir la région.',
    amenities: [
      { icon: 'wifi', label: 'Wi-Fi gratuit dans tout l’hôtel' },
      { icon: 'snow', label: 'Chambres climatisées et insonorisées' },
      { icon: 'lock', label: 'Coffre-fort dans chaque chambre' },
      { icon: 'tv', label: 'TV écran plat, grand écran dans le salon' },
      { icon: 'coffee', label: `Petit-déjeuner français, 14${NB}€ (10${NB}€ pour les enfants)` },
      { icon: 'bed', label: 'Lit bébé sur demande' },
    ],
    goodToKnow: 'Bon à savoir',
    practical: [
      `Petit-déjeuner servi en chambre${NB}: 18${NB}€`,
      `Parking sur réservation${NB}: 18${NB}€ par jour, moto 12${NB}€`,
      `Animaux acceptés${NB}: 10${NB}€ par jour`,
      `Transfert privé depuis l’aéroport${NB}: 110${NB}€ (jour), 130${NB}€ (nuit)`,
      'L’hôtel n’est pas adapté aux personnes à mobilité réduite ; l’équipe fera son possible pour vous aider.',
    ],
  },
  gallery: {
    eyebrow: 'Galerie',
    title: 'Les chambres, telles qu’elles sont.',
    alts: [
      'Chambre aux murs orangés, lit double couvert d’un patchwork',
      'Réception de l’hôtel, comptoir en bois et miroirs ronds',
      'Chambre à deux lits, fauteuil jaune devant la fenêtre',
      'Chambre au lit fuchsia et fenêtre ouverte sur la rue',
      'Chambre à deux lits, couvre-lits bleus à motifs',
      'Vue depuis le balcon : immeubles blancs aux volets bleus',
      'Salon de l’hôtel, canapé en cuir et télévision',
      'Chambre aux murs jaunes, lit double et armoire',
      'Deux lits aux têtes de lit en coussins, murs orange',
      'Coin bureau d’une chambre aux murs roses',
      'Salle de bain en mosaïque et briques de verre',
      'Salle de bain de la suite, douche et lavabo sur pied',
    ],
    enlarge: 'Agrandir la photo',
    enlarged: 'Photo agrandie',
    close: 'Fermer',
    prev: 'Photo précédente',
    next: 'Photo suivante',
  },
  reviews: {
    eyebrow: 'Avis',
    title: 'Ce que notent les voyageurs.',
    score: '4,3',
    outOf: 'sur 5',
    count: '50 avis Google',
    source: 'Note relevée sur Google Maps le 10 octobre 2026.',
    link: 'Lire les avis sur Google Maps',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Écrire ou appeler directement.',
    text: 'Pour réserver, le plus simple est de passer par l’hôtel : par e-mail ou par téléphone.',
    mapTitle: 'Plan d’accès : Couleurs du Sud, 5 rue Jean Dollfus, Cannes',
  },
  footer: { kind: 'Boutique hôtel', district: 'Le Suquet', legal: 'Mentions légales' },
  legal: {
    title: 'Mentions légales',
    back: '← Retour au site',
    publisherTitle: 'Éditeur du site',
    publisher: 'Boutique hôtel Couleurs du Sud, 5 rue Jean Dollfus, 06400 Cannes.',
    company: 'Raison sociale : [À COMPLÉTER : raison sociale et forme juridique]',
    siret: 'SIRET : [À COMPLÉTER : SIRET]',
    director: 'Responsable de la publication : [À COMPLÉTER : responsable de la publication]',
    contact: 'Téléphone : 04 93 39 70 74 · E-mail : hotelscouleurssuds@gmail.com',
    hostTitle: 'Hébergement',
    host: 'Netlify, Inc., 512 2nd Street, Suite 200, San Francisco, CA 94107, États-Unis',
    dataTitle: 'Données personnelles',
    data: 'Ce site ne comporte aucun formulaire et ne dépose aucun cookie de suivi. Si vous écrivez à l’hôtel par e-mail ou par téléphone, vos informations ne servent qu’à répondre à votre demande.',
    mediationTitle: 'Médiation',
    mediation:
      'En cas de litige non résolu avec l’hôtel dans un délai d’un mois, le client peut saisir le médiateur du tourisme et du voyage : www.mtv.travel.',
  },
}
