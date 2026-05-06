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
      <About />
      <Services />
      <Skills />
      <Expirience />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
