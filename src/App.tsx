import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import EventTypes from './components/EventTypes'
import Features from './components/Features'
import WhyChooseUs from './components/WhyChooseUs'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import CtaBanner from './components/CtaBanner'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-ink-900">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <EventTypes />
        <Features />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
