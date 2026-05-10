import './App.css'
import { About } from './sections/About'
import { Contacts } from './sections/Contacts'
import { Expirience } from './sections/Expirience'
import { Footer } from './sections/Footer'
import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { Services } from './sections/Services'
import { Skills } from './sections/Skills'

function App() {
  return (
    <div className='overflow-hidden'>
      <Header />

      <Hero />

      <section id="about" data-section>
        <About />
      </section>

      <section id="services" data-section>
        <Services />
      </section>

      <section id="skills" data-section>
        <Skills />
      </section>

      <section id="expirience" data-section>
        <Expirience />
      </section>

      <section id="contacts" data-section>
        <Contacts />
      </section>

      <Footer />
    </div>
  )
}

export default App
