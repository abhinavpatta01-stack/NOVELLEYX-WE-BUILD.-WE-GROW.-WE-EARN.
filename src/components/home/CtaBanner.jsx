import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'

const CtaBanner = () => {
  return (
    <section id="cta" style={{
      padding: 'var(--section-py) 2rem',
      background: '#000',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background glow effects */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 30% 50%, rgba(212,175,55,0.08) 0%, transparent 60%)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 70% 50%, rgba(255,209,102,0.05) 0%, transparent 60%)',
        pointerEvents: 'none'
      }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
          padding: '4rem 3rem',
          background: 'linear-gradient(135deg, rgba(20,20,20,0.6) 0%, rgba(10,10,10,0.8) 100%)',
          border: '1px solid rgba(212,175,55,0.2)',
          borderRadius: '24px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.4)'
        }}
      >
        {/* Decorative top line */}
        <div style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: '120px', height: '2px',
          background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)'
        }} />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.4rem 1rem', borderRadius: '100px',
            border: '1px solid rgba(212,175,55,0.3)',
            background: 'rgba(212,175,55,0.05)',
            color: '#D4AF37',
            fontSize: 'var(--caption)', fontWeight: 600,
            letterSpacing: 'var(--caption-tracking)',
            textTransform: 'uppercase',
            marginBottom: '2rem'
          }}>
            <Phone size={14} />
            Free Strategy Call
          </div>
        </motion.div>

        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'var(--h2)',
          fontWeight: 'var(--h2-weight)',
          color: '#fff',
          marginBottom: 'var(--heading-subtext-gap)',
          lineHeight: 1.15
        }}>
          Ready to Dominate{' '}
          <span style={{
            background: 'linear-gradient(135deg, #FFD166 0%, #D4AF37 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Your Market?
          </span>
        </h2>

        <p style={{
          fontSize: 'var(--body)', color: '#A8A8A8',
          maxWidth: '520px', margin: '0 auto 2.5rem',
          lineHeight: 1.7
        }}>
          Book a free 30-minute strategy call — no commitment, no pitch. Just clarity on how we can engineer your brand's digital dominance.
        </p>

        <div style={{
          display: 'flex', gap: '1rem',
          justifyContent: 'center', flexWrap: 'wrap'
        }}>
          <a
            href="https://wa.me/917075853225?text=Hello%20NovelleyX%2C%20I%27d%20like%20to%20book%20a%20free%20strategy%20call."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.9rem 2rem', borderRadius: '10px',
              background: 'linear-gradient(135deg, #F3E5AB 0%, #D4AF37 100%)',
              color: '#000', fontWeight: 700, fontSize: '0.95rem',
              letterSpacing: '0.02em',
              boxShadow: '0 0 30px rgba(212,175,55,0.3)',
              transition: 'all 0.3s cubic-bezier(.4,0,.2,1)',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)'; e.currentTarget.style.boxShadow = '0 10px 40px rgba(212,175,55,0.5)' }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(212,175,55,0.3)' }}
          >
            Book Free Call <ArrowRight size={16} />
          </a>

          <a
            href="#services"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.9rem 2rem', borderRadius: '10px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#fff', fontWeight: 600, fontSize: '0.95rem',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s cubic-bezier(.4,0,.2,1)',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.background = 'rgba(212,175,55,0.08)'; e.currentTarget.style.borderColor = 'rgba(212,175,55,0.4)' }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
          >
            View Our Services
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default CtaBanner
