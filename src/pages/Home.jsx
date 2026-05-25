import React from 'react'
import Loader from '../components/home/Loader'
import Navbar from '../components/home/Navbar'
import HeroSection from '../components/home/HeroSection'
import About from '../components/home/About'
import ServicesGrid from '../components/home/ServicesGrid'
import IdentityStrip from '../components/home/IdentityStrip'
import ExecutionProtocol from '../components/home/ExecutionProtocol'
import Media from '../components/home/Media'
import CreatorPartnership from '../components/home/CreatorPartnership'
import ArchitectEngine from '../components/home/ArchitectEngine'
import Footer from '../components/home/Footer'

const Home = () => {
  return (
    <>
      <Loader />
      <Navbar />
      <HeroSection />
      <About />
      <ServicesGrid />
      <IdentityStrip />
      <ExecutionProtocol />
      {/* Note: Pricing is on its own route /#/pricing */}
      <Media />
      <CreatorPartnership />
      <ArchitectEngine />
      <Footer />
    </>
  )
}

export default Home
