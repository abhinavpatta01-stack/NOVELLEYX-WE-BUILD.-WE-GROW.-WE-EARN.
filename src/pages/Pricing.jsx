import React, { useEffect } from 'react'
import Navbar from '../components/home/Navbar'
import Footer from '../components/home/Footer'
import StudentPricing from '../components/pricing/StudentPricing'
import BentoGrid from '../components/pricing/BentoGrid'
import { motion } from 'framer-motion'

const Pricing = () => {
  // Ensure we start at top when navigating here
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      {/* Hero section for pricing */}
      <section style={{ 
        paddingTop: '150px', 
        paddingBottom: '4rem', 
        textAlign: 'center', 
        background: 'radial-gradient(ellipse at top, rgba(212,175,55,0.1) 0%, #000 60%)' 
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={{ fontFamily: '"Cinzel", serif', fontSize: '3.5rem', color: '#fff', marginBottom: '1rem' }}>
            INVESTMENT & ROI
          </h1>
          <p style={{ color: '#888', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            Transparent pricing for elite digital systems. Choose the architecture that fits your current velocity.
          </p>
        </motion.div>
      </section>

      <StudentPricing />
      <BentoGrid />
      
      <Footer />
    </div>
  )
}

export default Pricing
