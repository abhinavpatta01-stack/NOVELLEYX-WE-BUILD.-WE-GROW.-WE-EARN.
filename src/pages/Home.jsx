import React from 'react'
import Loader from '../components/home/Loader'
import Navbar from '../components/home/Navbar'
import HeroSection from '../components/home/HeroSection'
import SystemReveal from '../components/home/SystemReveal'
import ServicesGrid from '../components/home/ServicesGrid'
import ExecutionProtocol from '../components/home/ExecutionProtocol'
import ArchitectEngine from '../components/home/ArchitectEngine'
import Footer from '../components/home/Footer'

const Home = () => {
  return (
    <>
      <Loader />
      <Navbar />
      <HeroSection />
      <SystemReveal />
      <ServicesGrid />
      <ExecutionProtocol />
      <ArchitectEngine />
      <Footer />
    </>
  )
}

export default Home
