import { pathFor, useLang } from '../lib/lang'

export function Legal() {
  const { lang, t } = useLang()
  const L = t.legal
  return (
    <main className="mx-auto max-w-2xl px-4 py-20 md:py-28">
      <a href={pathFor(lang)} className="text-xs font-bold uppercase tracking-wider text-terre-deep hover:text-ink">
        {L.back}
      </a>
      <h1 className="mt-8 text-4xl">{L.title}</h1>

      <h2 className="mt-10 text-2xl">{L.publisherTitle}</h2>
      <p className="mt-3 leading-relaxed text-ink-soft">
        {L.publisher}
        <br />
        {L.company}
        <br />
        {L.siret}
        <br />
        {L.director}
        <br />
        {L.contact}
      </p>

      <h2 className="mt-10 text-2xl">{L.hostTitle}</h2>
      <p className="mt-3 leading-relaxed text-ink-soft">{L.host}</p>

      <h2 className="mt-10 text-2xl">{L.dataTitle}</h2>
      <p className="mt-3 leading-relaxed text-ink-soft">{L.data}</p>

      <h2 className="mt-10 text-2xl">{L.mediationTitle}</h2>
      <p className="mt-3 leading-relaxed text-ink-soft">{L.mediation}</p>
    </main>
  )
}
