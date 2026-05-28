import React from 'react'
import Navbar from '../components/home/Navbar'
import HeroSection from '../components/home/HeroSection'
import TrustStrip from '../components/home/TrustStrip'
import IdentityStrip from '../components/home/IdentityStrip'
import About from '../components/home/About'
import ServicesGrid from '../components/home/ServicesGrid'
import ProductsSection from '../components/home/ProductsSection'
import EcosystemMap from '../components/home/EcosystemMap'
import AiAutomationSection from '../components/home/AiAutomationSection'
import SystemReveal from '../components/home/SystemReveal'
import StackFeatureSection from '../components/home/StackFeatureSection'
import WhyChooseUs from '../components/home/WhyChooseUs'
import ArchitectEngine from '../components/home/ArchitectEngine'
import CreatorPartnership from '../components/home/CreatorPartnership'
import Portfolio from '../components/home/Portfolio'
import PricingOverview from '../components/home/PricingOverview'
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
        <IdentityStrip />
        <About />
        <ServicesGrid />
        <ProductsSection />
        <EcosystemMap />
        <AiAutomationSection />
        <SystemReveal />
        <StackFeatureSection />
        <WhyChooseUs />
        <ArchitectEngine />
        <CreatorPartnership />
        <Portfolio />
        <PricingOverview />
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
