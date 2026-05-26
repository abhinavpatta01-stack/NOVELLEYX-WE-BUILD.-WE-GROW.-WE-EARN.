import React, { useEffect, useRef } from 'react'
import Hills from '../glsl/Hills'
import ParticleText from './ParticleText'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'

const HeroSection = () => {
  const heroRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const heroSection = heroRef.current
    if (!heroSection) return

    const handleMouseMove = (e) => {
      const rect = heroSection.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
      
      // Original Gold Flake Effect
      const flake = document.createElement('div')
      flake.classList.add('gold-flake')
      flake.style.left = `${e.clientX - rect.left}px`
      flake.style.top = `${e.clientY - rect.top}px`
      
      const size = Math.random() * 4 + 2
      flake.style.width = `${size}px`
      flake.style.height = `${size}px`
      
      heroSection.appendChild(flake)
      setTimeout(() => flake.remove(), 5000)
    }

    heroSection.addEventListener('mousemove', handleMouseMove)
    return () => heroSection.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const maskImage = useMotionTemplate`radial-gradient(400px at ${mouseX}px ${mouseY}px, white, transparent)`

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
        padding: '140px 1.5rem var(--section-py)',
      }}
    >
      {/* Background Orbs & WebGL */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.8 }}>
        <Hills />
      </div>

      {/* Illuminated Spotlight Effect */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: 'radial-gradient(circle at center, rgba(212,175,55,0.15) 0%, transparent 80%)',
          WebkitMaskImage: maskImage,
          maskImage: maskImage,
          pointerEvents: 'none'
        }}
      />

      {/* Glow Orbs */}
      <div style={{ position: 'absolute', top: '20%', left: '20%', width: '300px', height: '300px', background: '#D4AF37', filter: 'blur(150px)', opacity: 0.1, zIndex: 0, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '20%', right: '20%', width: '400px', height: '400px', background: '#FFD166', filter: 'blur(180px)', opacity: 0.1, zIndex: 0, pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.5rem 1.2rem',
            border: '1px solid rgba(198,161,91,0.3)',
            borderRadius: '100px',
            fontSize: 'var(--caption)',
            fontWeight: 600,
            letterSpacing: 'var(--caption-tracking)',
            textTransform: 'uppercase',
            color: '#D4AF37',
            background: 'linear-gradient(180deg, rgba(198,161,91,0.08) 0%, rgba(198,161,91,0.02) 100%)',
            boxShadow: '0 0 20px rgba(198,161,91,0.1) inset',
            marginBottom: '2.5rem'
          }}
        >
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#D4AF37', boxShadow: '0 0 10px #D4AF37' }}></div>
          Luxury Digital Studio
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'var(--h1)',
            fontWeight: 'var(--h1-weight)',
            lineHeight: 1.05,
            letterSpacing: 'var(--h1-tracking)',
            color: '#fff',
            marginBottom: '1.8rem',
            textShadow: '0 10px 40px rgba(0,0,0,0.5)'
          }}
        >
          WE BUILD.<br />
          <span style={{ 
            background: 'linear-gradient(135deg, #FFD166 0%, #D4AF37 100%)', 
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block'
          }}>
            WE GROW.
          </span><br />
          WE EARN.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          style={{
            fontSize: 'var(--body)',
            color: '#A8A8A8',
            maxWidth: '680px',
            lineHeight: 1.7,
            marginBottom: '3rem'
          }}
        >
          Premium digital systems engineered for modern brands, creators, and ambitious businesses. We forge market dominance through code and content.
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
              padding: '0.8rem 2rem',
              borderRadius: '8px',
              fontSize: '0.95rem',
              fontWeight: 600,
              letterSpacing: '0.03em',
              background: 'linear-gradient(135deg, #F3E5AB 0%, #D4AF37 100%)',
              color: '#000',
              transition: 'transform 0.3s cubic-bezier(.4,0,.2,1), box-shadow 0.3s',
              cursor: 'pointer',
              boxShadow: '0 0 30px rgba(212,175,55,0.3)'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)'; e.currentTarget.style.boxShadow = '0 10px 40px rgba(212,175,55,0.5)' }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(212,175,55,0.3)' }}
          >
            Start Your Project
          </a>
          <a
            href="#services"
            style={{
              padding: '0.8rem 2rem',
              borderRadius: '8px',
              fontSize: '0.95rem',
              fontWeight: 600,
              letterSpacing: '0.03em',
              background: 'rgba(255,255,255,0.03)',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.1)',
              transition: 'transform 0.3s cubic-bezier(.4,0,.2,1), background 0.3s, border-color 0.3s',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.background = 'rgba(212,175,55,0.08)'; e.currentTarget.style.borderColor = 'rgba(212,175,55,0.4)' }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
          >
            Explore Services
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
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
          height: '60px',
          background: 'linear-gradient(180deg, #D4AF37 0%, transparent 100%)',
          animation: 'scrollLine 2s cubic-bezier(.4,0,.2,1) infinite'
        }}></div>
      </motion.div>
    </section>
  )
}

export default HeroSection
