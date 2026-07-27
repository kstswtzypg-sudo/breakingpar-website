import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import EventTypes from '../components/EventTypes'
import ServiceArea from '../components/ServiceArea'
import Features from '../components/Features'
import WhyChooseUs from '../components/WhyChooseUs'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import CtaBanner from '../components/CtaBanner'
import Contact from '../components/Contact'

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location])

  return (
    <>
      <Hero />
      <HowItWorks />
      <EventTypes />
      <ServiceArea />
      <Features />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <CtaBanner />
      <Contact />
    </>
  )
}
