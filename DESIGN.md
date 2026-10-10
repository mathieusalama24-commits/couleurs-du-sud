# DESIGN.md : Boutique Hôtel Couleurs du Sud

**Direction en une phrase** : une maison d'hôtes de charme dans le vieux Cannes, chaleureuse et sans emphase, où les murs colorés des chambres donnent la palette.
**Références** : mise en page éditoriale à la Lazare Paris (grands titres serif, sections franches), adaptée au chaleureux ; archétype « Editorial Luxury » de `soft-skill` (crème, serif, grain léger, boîtiers imbriqués).

## Couleurs (variables dans `src/index.css`)
| Rôle | Nom | Code | Origine |
|---|---|---|---|
| Fond principal | crème | `#FBF5EA` | papier chaud |
| Fond alterné | paper | `#F3E8D6` | |
| Texte | ink | `#2B1D19` | brun très foncé |
| Texte secondaire | ink-soft | `#5A463F` | |
| Accent | terre | `#B4472A` | couvre-lit orange de la chambre Confort |
| Accent survol | terre-deep | `#93361D` | |
| Fond sombre | prune | `#3B1B2A` | murs mauves de la chambre Prestige |
| Teinte claire sur sombre | rose | `#ECD3C9` | |
| Chiffres sur sombre | ocre | `#C9923A` | murs ocre |

Aucune couleur en dur dans les composants. Pas de dégradé.

## Typographie
- Titres : **Fraunces** (variable, serif), `clamp()`, graisse 420, auto-hébergée via fontsource.
- Texte : **Figtree** (variable, sans-serif).
- Surétiquettes : `text-xs font-bold uppercase tracking-widest`, dans une pastille.
- Liens de navigation : MAJUSCULES, `tracking-wider`, `font-bold`.

## Formes
- Un seul rayon de coque : `2rem` (noyau `calc(2rem - 0.375rem)`), boutons en pilule.
- Boîtier imbriqué (`Bezel`) pour toutes les photos de chambres.
- Espacement vertical des sections : `py-24` (mobile), `py-36` (desktop).
- Icônes : Lucide, trait `1.3` à `1.5`, un seul jeu.

## Mouvement
- Apparition au défilement (opacité + translation, 900 ms, `cubic-bezier(0.32,0.72,0,1)`), via IntersectionObserver.
- Survol des boutons : flèche qui se décale en diagonale, appui `scale(0.98)`.
- Menu mobile : liens en cascade.
- `prefers-reduced-motion` : tout est désactivé.
- Interdits : parallaxe, rebonds, curseur animé, animation de `top/left/width/height`.

## Ton des textes
- « vous », phrases courtes, aucune formule creuse, pas de tiret long.
- Chaque fait vient de `donnees-verifiees.md`. Pas d'avis, pas de note, pas de classement, pas de date de rénovation tant que non confirmés.
- Aucune mention « maquette » ou « à valider » visible sur le site.

## Structure
Hero (photo réelle + H1 + Réserver) → Chambres (4) → **Le Suquet** (section signature, distances) → L'hôtel → Galerie → Contact → Pied de page. Section « Avis » absente jusqu'à vérification des avis Google.
Alternance : crème, paper, prune, crème, paper, prune, ink.

## Photos
Seules les photos de l'hôtel (chambres, réception, salon) sont utilisées. Les images de la ville présentes sur l'ancien site sont écartées : droits inconnus.
