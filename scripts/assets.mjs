import sharp from 'sharp'
import fs from 'node:fs'
const src = 'matiere-source/', out = 'public/img/'
// [nom de sortie, fichier source, largeur, hauteur, position du recadrage]
const jobs = [
  ['hero', 'Photo_2021__2_Suite_GrandLit.jpg', 1000, 1250, 'attention'],
  ['standard', 'Photo_2021__7_LIT.jpg', 900, 1125, 'attention'],
  ['confort', 'Photo_2021__3_CONFORT_LIT.jpg', 900, 1125, 'attention'],
  ['prestige', 'Photo_2021__8_PRESTIGE_LIT.jpg', 900, 1125, 'attention'],
  ['suite', 'Photo_2021__2_Suite_DeuxLits.jpg', 900, 1125, 'attention'],
  ['g-01', 'Photo_2021__4_LIT.jpg', 900, 900, 'attention'],
  ['g-02', 'Photo_2021__5_DEUXLITS.jpg', 900, 900, 'attention'],
  ['g-03', 'Photo_2021__6_LIT.jpg', 900, 900, 'attention'],
  ['g-04', 'Photo_2021__8_PRESTIGE_BALCON.jpg', 900, 900, 'attention'],
  ['g-05', 'images__c5-09.jpg', 900, 733, 'attention'],
  ['g-06', 'Chambres__IMG_0841.JPG', 1100, 822, 'attention'],
  ['g-07', 'images__C003.JPG', 1100, 733, 'attention'],
  ['g-08', 'Photo_2021__8_PRESTIGE_BUREAU.jpg', 900, 900, 'attention'],
  ['g-09', 'b92j5MMcDTQ.jpg', 960, 720, 'attention'],
  ['g-10', 'yUg5fGnAFEU.jpg', 960, 720, 'attention'],
  ['g-11', 'Photo_2021__8_PRESTIGE_SDB.jpg', 900, 900, 'attention'],
  ['g-12', 'Photo_2021__2_Suite_SDB.jpg', 900, 900, 'attention'],
]
for (const [name, file, w, h, pos] of jobs) {
  const info = await sharp(src + file).rotate().resize(w, h, { fit: 'cover', position: pos, withoutEnlargement: false }).webp({ quality: 74, effort: 5 }).toFile(`${out}${name}.webp`)
  console.log(name.padEnd(9), `${w}x${h}`, Math.round(info.size / 1024) + ' Ko')
}
