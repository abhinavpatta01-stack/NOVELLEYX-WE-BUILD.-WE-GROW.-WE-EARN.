import React, { useEffect, useRef } from 'react'
import Hills from '../glsl/Hills'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { ArrowRight, Play, Cpu, Activity, BarChart2 } from 'lucide-react'

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
    }

    heroSection.addEventListener('mousemove', handleMouseMove)
    return () => heroSection.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const maskImage = useMotionTemplate`radial-gradient(400px at ${mouseX}px ${mouseY}px, white, transparent)`

  return (
    <section
      ref={heroRef}
      className="hero-section-container"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#0A0A0A',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '160px 0 var(--section-py) 0'
      }}
    >
      {/* Background WebGL Hills */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.75 }}>
        <Hills />
      </div>

      {/* Illuminated Spotlight Effect */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: 'radial-gradient(circle at center, rgba(212,175,55,0.12) 0%, transparent 80%)',
          WebkitMaskImage: maskImage,
          maskImage: maskImage,
          pointerEvents: 'none'
        }}
      />

      <div style={{
        position: 'relative',
        zIndex: 10,
        width: 'min(1280px, 92%)',
        marginInline: 'auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '4rem',
        alignItems: 'center'
      }} className="hero-grid">
        <style>{`
          @media (max-width: 768px) {
            .hero-grid {
              grid-template-columns: 1fr !important;
              text-align: center;
              gap: 3rem !important;
            }
            .hero-left-buttons {
              justify-content: center !important;
            }
          }
        `}</style>
        
        {/* Left Side: Headline Copy */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }} className="hero-left-col">
          <style>{`
            @media (max-width: 768px) {
              .hero-left-col {
                align-items: center !important;
                text-align: center !important;
              }
            }
          `}</style>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.5rem 1.2rem',
              border: '1px solid rgba(212,175,55,0.3)',
              borderRadius: '100px',
              fontSize: 'var(--caption)',
              fontWeight: 650,
              letterSpacing: 'var(--caption-tracking)',
              textTransform: 'uppercase',
              color: '#D4AF37',
              background: 'rgba(212,175,55,0.04)',
              boxShadow: '0 0 20px rgba(212,175,55,0.05) inset',
              marginBottom: '2rem'
            }}
          >
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#D4AF37', boxShadow: '0 0 10px #D4AF37' }}></div>
            Enterprise AI Systems
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: 'var(--h1-tracking)',
              color: '#fff',
              marginBottom: '1.8rem',
              textShadow: '0 10px 40px rgba(0,0,0,0.5)'
            }}
          >
            We Build AI Systems<br />
            <span className="text-gold-gradient" style={{ display: 'inline-block' }}>
              That Scale Businesses.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontSize: '1.1rem',
              color: '#A8A8A8',
              maxWidth: '540px',
              lineHeight: 1.7,
              marginBottom: '3rem',
              fontWeight: 500
            }}
          >
            Automation. SaaS. AI Workflows. Enterprise Growth Infrastructure. Built to unlock operational efficiency and scale transaction volume.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap', width: '100%' }}
            className="hero-left-buttons"
          >
            <a
              href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=NovelleyX+Strategy+Consultation&details=30-Minute+Discovery+%26+Strategy+Consultation+with+NovelleyX.+We+will+discuss+your+digital+identity%2C+platforms%2C+and+growth+strategy.&add=abhinav.patta01@gmail.com,novelleyx@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-gold-glow"
            >
              Book Strategy Call <ArrowRight size={15} />
            </a>
            <a
              href="#services"
              className="cta-dark-premium"
              onClick={(e) => {
                e.preventDefault()
                const el = document.getElementById('services')
                if (el) {
                  const y = el.getBoundingClientRect().top + window.scrollY - 100
                  window.scrollTo({ top: y, behavior: 'smooth' })
                }
              }}
            >
              View Solutions
            </a>
          </motion.div>
        </div>

        {/* Right Side: Animated Mock Dashboard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: '100%',
            position: 'relative',
            zIndex: 2
          }}
        >
          {/* Glassmorphism Outer Panel */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.85) 0%, rgba(10, 10, 10, 0.95) 100%)',
            border: '1px solid rgba(212, 175, 55, 0.25)',
            borderRadius: '16px',
            boxShadow: '0 25px 50px rgba(0,0,0,0.6), 0 0 30px rgba(212,175,55,0.05) inset',
            padding: '1.5rem',
            position: 'relative',
            overflow: 'hidden'
          }} className="glow-gold-pulse">
            
            {/* Header circles */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.8rem', marginBottom: '1.2rem' }}>
              <div style={{ display: 'flex', gap: '5px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f56' }} />
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffbd2e' }} />
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27c93f' }} />
              </div>
              <div style={{ fontSize: '0.65rem', color: '#555', letterSpacing: '0.1em', fontWeight: 600 }}>NVX-ACTIVE-MONITOR</div>
            </div>

            {/* Simulated Live Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.2rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', padding: '1rem', borderRadius: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#D4AF37', fontSize: '0.65rem', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em' }}>
                  <Cpu size={12} />
                  <span>AI Workflows</span>
                </div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginTop: '0.4rem' }}>99.98%</div>
                <span style={{ fontSize: '0.6rem', color: '#22c55e' }}>Uptime SLA Verified</span>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', padding: '1rem', borderRadius: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#fff', fontSize: '0.65rem', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em' }}>
                  <Activity size={12} />
                  <span>Revenue Scaled</span>
                </div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#D4AF37', marginTop: '0.4rem' }}>$148,420</div>
                <span style={{ fontSize: '0.6rem', color: '#22c55e' }}>Last 30 Days Growth</span>
              </div>
            </div>

            {/* Line chart graphic */}
            <div style={{ height: '140px', position: 'relative' }}>
              <svg viewBox="0 0 350 120" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                <path d="M 0 110 L 70 95 L 140 102 L 210 75 L 280 40 L 350 15 L 350 120 L 0 120 Z" fill="url(#heroGlow)" />
                <motion.path
                  d="M 0 110 L 70 95 L 140 102 L 210 75 L 280 40 L 350 15"
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="3.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                />
                <circle cx="210" cy="75" r="4.5" fill="#D4AF37" />
                <circle cx="280" cy="40" r="4.5" fill="#D4AF37" />
                <circle cx="350" cy="15" r="4.5" fill="#fff" stroke="#D4AF37" strokeWidth="2.5" />
                
                <defs>
                  <linearGradient id="heroGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(212,175,55,0.22)" />
                    <stop offset="100%" stopColor="rgba(212,175,55,0.0)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
          </div>
        </motion.div>
      </div>

    </section>
  )
}

export default HeroSection
