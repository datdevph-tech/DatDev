import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyChoose from './components/WhyChoose'
import Process from './components/Process'
import CoreValues from './components/CoreValues'
import Projects from './components/Projects'
import Team from './components/Team'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChoose />
        <Process />
        <CoreValues />
        <Projects />
        <Team />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
