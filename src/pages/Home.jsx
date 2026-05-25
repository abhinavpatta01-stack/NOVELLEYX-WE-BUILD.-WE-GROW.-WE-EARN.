import React from 'react'
import Loader from '../components/home/Loader'
import Navbar from '../components/home/Navbar'
import HeroSection from '../components/home/HeroSection'
import SystemReveal from '../components/home/SystemReveal'
import ExecutionProtocol from '../components/home/ExecutionProtocol'
import Footer from '../components/home/Footer'

const Home = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Loader />
      <Navbar />
      <HeroSection />
      <SystemReveal />
      <ExecutionProtocol />
      <Footer />
    </div>
  )
}

export default Home
