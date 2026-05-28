import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'

const CtaBanner = () => {
  return (
    <section id="cta" style={{
      padding: 'var(--section-py) 2rem',
      background: '#050505',
      backgroundImage: 'radial-gradient(rgba(212, 175, 55, 0.07) 1px, transparent 1px)',
      backgroundSize: '24px 24px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background glow effects */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at 30% 50%, rgba(212,175,55,0.12) 0%, transparent 60%)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at 70% 50%, rgba(255,209,102,0.08) 0%, transparent 60%)',
        pointerEvents: 'none'
      }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="cta-banner-box"
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
          background: 'linear-gradient(135deg, rgba(20,20,20,0.7) 0%, rgba(10,10,10,0.9) 100%)',
          border: '1px solid rgba(212,175,55,0.25)',
          borderRadius: '24px',
          boxShadow: '0 25px 70px rgba(0,0,0,0.6)'
        }}
      >
        <style>{`
          .cta-banner-box {
            padding: 4rem 3rem !important;
          }
          @media (max-width: 768px) {
            .cta-banner-box {
              padding: 2.5rem 1.25rem !important;
            }
          }
        `}</style>
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
          display: 'flex', gap: '1.2rem',
          justifyContent: 'center', flexWrap: 'wrap'
        }}>
          <a
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=NovelleyX+Strategy+Consultation&details=30-Minute+Discovery+%26+Strategy+Consultation+with+NovelleyX.+We+will+discuss+your+digital+identity%2C+platforms%2C+and+growth+strategy.&add=abhinav.patta01@gmail.com,novelleyx@gmail.com"
            className="cta-gold-glow"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule Strategy Call <ArrowRight size={15} />
          </a>

          <a
            href="#portfolio"
            className="cta-dark-premium"
            onClick={(e) => {
              e.preventDefault()
              const el = document.getElementById('portfolio')
              if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 100
                window.scrollTo({ top: y, behavior: 'smooth' })
              }
            }}
          >
            Build Your Brand
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default CtaBanner
