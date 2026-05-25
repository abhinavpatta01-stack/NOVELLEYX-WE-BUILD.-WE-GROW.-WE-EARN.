import React from 'react'
import Navbar from '../components/home/Navbar'
import HeroSection from '../components/home/HeroSection'
import About from '../components/home/About'
import ServicesGrid from '../components/home/ServicesGrid'
import IdentityStrip from '../components/home/IdentityStrip'
import Media from '../components/home/Media'
import CreatorPartnership from '../components/home/CreatorPartnership'
import StackFeatureSection from '../components/home/StackFeatureSection'
import ArchitectEngine from '../components/home/ArchitectEngine'
import ContactSection from '../components/home/ContactSection'
import Footer from '../components/home/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <ServicesGrid />
      <IdentityStrip />
      {/* Note: Pricing is on its own route /#/pricing */}
      <CreatorPartnership />
      <StackFeatureSection />
      <ArchitectEngine />
      <ContactSection />
      <Footer />
    </>
  )
}

export default Home
