import React from 'react'
import Hills from '../glsl/Hills'
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <Hills />
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: '"Space Mono", monospace',
            fontSize: '0.75rem',
            letterSpacing: '0.4em',
            color: '#D4AF37',
            textTransform: 'uppercase',
          }}
        >
          LUXURY DIGITAL STUDIO
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 2.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: '"Cinzel", serif',
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            lineHeight: 1.1,
            color: '#ffffff',
            textShadow: '0 0 40px rgba(212, 175, 55, 0.3)',
            maxWidth: '1200px',
          }}
        >
          WE BUILD. WE GROW. WE EARN.
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.0, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginTop: '2rem' }}
        >
          <button className="btn-magnetic" style={{ padding: '1rem 3rem', fontSize: '1rem' }}>
            Initialize Project
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
