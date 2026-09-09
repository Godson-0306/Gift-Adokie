import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Expertise } from './components/Expertise'
import { Books } from './components/Books'
import { Presence } from './components/Presence'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Expertise />
        <Books />
        <Presence />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
