import React from 'react'
import { motion } from 'framer-motion'

const mediaTiers = [
  {
    phase: "Outsourced Media",
    name: "Basic Media",
    target: "Essential content creation and multi-platform distribution to establish your baseline presence.",
    price: "15,000",
    period: "per month",
    features: [
      "Content planning & scheduling",
      "Thumbnail design",
      "Caption & copy writing",
      "Basic analytics reporting"
    ],
    popular: false
  },
  {
    phase: "Outsourced Media",
    name: "Pro Algorithm",
    target: "Advanced algorithm-aligned execution, growth targeting, and platform-native SEO systems.",
    price: "35,000",
    period: "per month",
    features: [
      "Algorithm-optimized content",
      "YouTube & Instagram SEO",
      "Audience targeting strategy",
      "Growth analytics dashboard",
      "A/B thumbnail testing"
    ],
    popular: true
  },
  {
    phase: "Outsourced Media",
    name: "Premium Management",
    target: "Full-spectrum elite media operations — from ideation to global distribution and monetization.",
    price: "75,000",
    period: "per month",
    features: [
      "Full channel management",
      "Cinematic content production",
      "Monetization strategy",
      "Influencer collaboration system",
      "Weekly performance reviews",
      "Priority support"
    ],
    popular: false
  }
]

const Media = () => {
  return (
    <section id="media" style={{ padding: '4rem 2rem 8rem', position: 'relative', zIndex: 10 }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <span style={{ 
          display: 'inline-block', fontSize: '0.72rem', fontWeight: 600, 
          letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D4AF37', 
          marginBottom: '1rem',
          border: '1px solid rgba(212,175,55,0.3)',
          padding: '0.4rem 1rem',
          borderRadius: '100px',
          background: 'rgba(212,175,55,0.05)'
        }}>
          Channel Management Hub
        </span>
        <h2 style={{ fontFamily: '"Poppins", sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>
          Outsourced Media
        </h2>
        <p style={{ color: '#888', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.6 }}>
          Dedicated content systems, thumbnail engineering, and YouTube/Instagram SEO for exponential visibility.
        </p>
      </div>

      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '2rem',
        alignItems: 'center'
      }}>
        {mediaTiers.map((tier, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            style={{
              background: tier.popular ? 'linear-gradient(180deg, rgba(26,26,26,0.9) 0%, rgba(10,10,10,0.95) 100%)' : 'rgba(15,15,15,0.6)',
              border: tier.popular ? '1px solid #D4AF37' : '1px solid rgba(255,255,255,0.08)',
              borderRadius: '24px',
              padding: '3rem 2rem',
              position: 'relative',
              transform: tier.popular ? 'scale(1.05)' : 'scale(1)',
              boxShadow: tier.popular ? '0 20px 40px rgba(0,0,0,0.5), 0 0 40px rgba(212,175,55,0.1)' : 'none',
              zIndex: tier.popular ? 2 : 1
            }}
            className="modern-pricing-card"
          >
            <style>{`
              .modern-pricing-card:hover { transform: ${tier.popular ? 'scale(1.05) translateY(-5px)' : 'scale(1) translateY(-5px)'}; border-color: rgba(212,175,55,0.5); }
              @media (max-width: 1024px) {
                .modern-pricing-card { transform: scale(1) !important; }
              }
            `}</style>
            
            {tier.popular && (
              <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', background: '#D4AF37', color: '#000', padding: '0.4rem 1.2rem', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em' }}>
                MOST POPULAR
              </div>
            )}

            <div style={{ color: '#D4AF37', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '1rem', textTransform: 'uppercase' }}>
              {tier.phase}
            </div>
            <h3 style={{ fontSize: '2rem', fontWeight: 700, color: '#fff', fontFamily: '"Poppins", sans-serif', marginBottom: '0.5rem' }}>
              {tier.name}
            </h3>
            <p style={{ color: '#A8A8A8', fontSize: '0.9rem', lineHeight: 1.6, minHeight: '60px', marginBottom: '2rem' }}>
              {tier.target}
            </p>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff' }}>₹{tier.price}</span>
              <span style={{ color: '#888', fontSize: '0.9rem', marginLeft: '0.5rem' }}>{tier.period}</span>
            </div>

            <a
              href={`https://wa.me/917075853225?text=Hello Novelleyx, I'm interested in the ${tier.name} for Outsourced Media.`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'center',
                padding: '1rem',
                background: tier.popular ? '#D4AF37' : 'transparent',
                border: tier.popular ? 'none' : '1px solid rgba(255,255,255,0.1)',
                color: tier.popular ? '#000' : '#fff',
                fontWeight: 700,
                borderRadius: '12px',
                marginBottom: '2.5rem',
                transition: 'all 0.3s ease',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                if(!tier.popular) e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                else e.currentTarget.style.opacity = '0.9'
              }}
              onMouseLeave={(e) => {
                if(!tier.popular) e.currentTarget.style.background = 'transparent'
                else e.currentTarget.style.opacity = '1'
              }}
            >
              Get Started
            </a>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {tier.features.map((feature, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(212,175,55,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4AF37' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span style={{ color: '#D6D6D6', fontSize: '0.9rem' }}>{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Media
