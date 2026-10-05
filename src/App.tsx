import './App.css'
import { About } from './sections/About'
import { Contacts } from './sections/Contacts'
import { Experience } from './sections/Experience'
import { Footer } from './sections/Footer'
import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { ResumeLinks } from './sections/ResumeLinks'
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

      <section id="experience" data-section>
        <Experience />
      </section>

      <section id="projects" data-section>
        <Projects />
      </section>

      <section id="resume" data-section>
        <ResumeLinks />
      </section>

      <section id="contacts" data-section>
        <Contacts />
      </section>

      <Footer />
    </div>
  )
}

export default App
