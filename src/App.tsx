import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Rooms } from './components/Rooms'
import { Suquet } from './components/Suquet'
import { About } from './components/About'
import { Reviews } from './components/Reviews'
import { Gallery } from './components/Gallery'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { MobileBar } from './components/MobileBar'
import { Legal } from './components/Legal'
import { LangProvider, parseLocation, useLang } from './lib/lang'

function Site() {
  const { t } = useLang()
  return (
    <div className="grain">
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
      >
        {t.ui.skip}
      </a>
      <Header />
      <main id="contenu">
        <Hero />
        <Rooms />
        <Suquet />
        <About />
        <Reviews />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
    </div>
  )
}

export default function App() {
  const { lang, legal } = parseLocation(window.location.pathname)
  return <LangProvider lang={lang} legal={legal}>{legal ? <Legal /> : <Site />}</LangProvider>
}
