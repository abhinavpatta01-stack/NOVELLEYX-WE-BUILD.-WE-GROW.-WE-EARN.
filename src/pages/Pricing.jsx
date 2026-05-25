import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import BentoGrid from '../components/pricing/BentoGrid'
import Navbar from '../components/home/Navbar'

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000000', color: '#fff', position: 'relative' }}>
      <Navbar />
      
      <div style={{ paddingTop: '15vh', paddingBottom: '10vh', textAlign: 'center' }}>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: '"Cinzel", serif',
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            letterSpacing: '0.05em',
            color: '#fff',
            textShadow: '0 0 30px rgba(212, 175, 55, 0.2)',
          }}
        >
          CHOOSE YOUR VELOCITY.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: '"Space Mono", monospace',
            color: '#888',
            marginTop: '1rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            fontSize: '0.875rem'
          }}
        >
          Deploy the NOVELLEYX architecture for your brand.
        </motion.p>
      </div>

      <BentoGrid />
      
      <div style={{ padding: '4rem', textAlign: 'center' }}>
        <Link to="/" style={{ fontFamily: '"Space Mono", monospace', color: '#D4AF37', borderBottom: '1px solid #D4AF37', paddingBottom: '2px' }}>
          ← Return to Terminal
        </Link>
      </div>
    </div>
  )
}

export default Pricing
