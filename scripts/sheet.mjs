import sharp from 'sharp'
import fs from 'node:fs'
const dir = 'matiere-source'
const files = fs.readdirSync(dir).filter(f => /\.(jpe?g)$/i.test(f)).sort()
const info = []
for (const f of files) { const m = await sharp(`${dir}/${f}`).metadata(); info.push({ f, w: m.width, h: m.height }) }
const big = info.filter(i => Math.max(i.w, i.h) >= 700)
console.log(big.map(i => `${i.f} ${i.w}x${i.h}`).join('\n'))
console.log('--- petits :', info.filter(i => Math.max(i.w, i.h) < 700).map(i => `${i.f} ${i.w}x${i.h}`).join(' | '))
const T = 260, cols = 6
const rows = Math.ceil(big.length / cols)
const comps = []
for (let i = 0; i < big.length; i++) {
  const buf = await sharp(`${dir}/${big[i].f}`).resize(T, T, { fit: 'cover' }).toBuffer()
  comps.push({ input: buf, left: (i % cols) * T, top: Math.floor(i / cols) * T })
}
await sharp({ create: { width: cols * T, height: rows * T, channels: 3, background: '#222' } }).composite(comps).jpeg({ quality: 80 }).toFile('sheet/planche.jpg')
fs.writeFileSync('sheet/index.txt', big.map((b, i) => `${i}\t${b.f}`).join('\n'))
