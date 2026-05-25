import React, { useEffect, useRef } from 'react'
import Hills from '../glsl/Hills'
import { motion } from 'framer-motion'

const HeroSection = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    const heroSection = heroRef.current
    if (!heroSection) return

    const handleMouseMove = (e) => {
      // Create flake element
      const flake = document.createElement('div')
      flake.classList.add('gold-flake')
      
      // Calculate position relative to hero section
      const rect = heroSection.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      flake.style.left = `${x}px`
      flake.style.top = `${y}px`
      
      // Randomize size between 2px and 6px
      const size = Math.random() * 4 + 2
      flake.style.width = `${size}px`
      flake.style.height = `${size}px`
      
      heroSection.appendChild(flake)
      
      // Remove flake after animation completes (5000ms)
      setTimeout(() => {
        flake.remove()
      }, 5000)
    }

    heroSection.addEventListener('mousemove', handleMouseMove)
    return () => heroSection.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      ref={heroRef}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        textAlign: 'center',
        padding: '120px 1.5rem 80px',
        backgroundImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(198,161,91,0.06) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(198,161,91,0.03) 0%, transparent 60%)'
      }}
    >
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.3 }}>
        <Hills />
      </div>

      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(180deg, transparent 60%, #000 100%)', pointerEvents: 'none' }}></div>

      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.4rem 1rem',
            border: '1px solid rgba(198,161,91,0.35)',
            borderRadius: '100px',
            fontSize: '0.72rem',
            fontWeight: 600,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#D4AF37',
            background: 'rgba(198,161,91,0.06)',
            marginBottom: '2.5rem'
          }}
        >
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#D4AF37' }}></div>
          Luxury Digital Studio
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontFamily: '"Poppins", sans-serif',
            fontSize: 'clamp(3rem, 7vw, 5.5rem)',
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: '#fff',
            marginBottom: '1.8rem'
          }}
        >
          WE BUILD.<br /><span style={{ color: '#D4AF37' }}>WE GROW.</span><br />WE EARN.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.22rem)',
            color: '#A8A8A8',
            maxWidth: '640px',
            lineHeight: 1.7,
            marginBottom: '3rem'
          }}
        >
          Premium digital systems engineered for modern brands, creators, and ambitious businesses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <a
            href="#architect"
            style={{
              padding: '0.72rem 1.6rem',
              borderRadius: '6px',
              fontSize: '0.9rem',
              fontWeight: 600,
              letterSpacing: '0.03em',
              background: '#D4AF37',
              color: '#000',
              transition: 'transform 0.28s, box-shadow 0.28s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(198,161,91,0.28)' }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
          >
            Start Your Project
          </a>
          <a
            href="#services"
            style={{
              padding: '0.72rem 1.6rem',
              borderRadius: '6px',
              fontSize: '0.9rem',
              fontWeight: 600,
              letterSpacing: '0.03em',
              background: 'transparent',
              color: '#D4AF37',
              border: '1.5px solid #D4AF37',
              transition: 'transform 0.28s, background 0.28s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.background = 'rgba(198,161,91,0.08)' }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'transparent' }}
          >
            Explore Services
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.4rem',
          color: '#A8A8A8',
          fontSize: '0.72rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          zIndex: 10
        }}
      >
        <div style={{
          width: '1px',
          height: '48px',
          background: 'linear-gradient(180deg, #D4AF37 0%, transparent 100%)',
          animation: 'scrollLine 2s ease-in-out infinite'
        }}></div>
        <span>Scroll</span>
      </motion.div>
    </section>
  )
}

export default HeroSection
