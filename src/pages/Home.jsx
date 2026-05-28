import React from 'react'
import Navbar from '../components/home/Navbar'
import HeroSection from '../components/home/HeroSection'
import TrustStrip from '../components/home/TrustStrip'
import About from '../components/home/About'
import ServicesGrid from '../components/home/ServicesGrid'
import WhyChooseUs from '../components/home/WhyChooseUs'
import IdentityStrip from '../components/home/IdentityStrip'
import AiAutomationSection from '../components/home/AiAutomationSection'
import StackFeatureSection from '../components/home/StackFeatureSection'
import CaseStudies from '../components/home/CaseStudies'
import Portfolio from '../components/home/Portfolio'
import PricingOverview from '../components/home/PricingOverview'
import CreatorPartnership from '../components/home/CreatorPartnership'
import ArchitectEngine from '../components/home/ArchitectEngine'
import Testimonials from '../components/home/Testimonials'
import CtaBanner from '../components/home/CtaBanner'
import ContactSection from '../components/home/ContactSection'
import Footer from '../components/home/Footer'
import ChatbotWidget from '../components/ui/ChatbotWidget'

const Home = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#000' }}>
      <Navbar />
      <main style={{ flex: 1, position: 'relative', zIndex: 1, backgroundColor: '#000' }}>
        <HeroSection />
        <TrustStrip />
        <About />
        <ServicesGrid />
        <WhyChooseUs />
        <IdentityStrip />
        <AiAutomationSection />
        <StackFeatureSection />
        <Portfolio />
        <PricingOverview />
        <CreatorPartnership />
        <ArchitectEngine />
        <Testimonials />
        <CtaBanner />
        <ContactSection />
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  )
}

export default Home
