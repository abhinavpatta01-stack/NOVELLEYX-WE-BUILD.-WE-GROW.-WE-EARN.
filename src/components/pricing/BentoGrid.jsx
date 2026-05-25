import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'

const PricingCard = ({ title, price, features, delay }) => {
  const divRef = useRef(null)
  const [isFocused, setIsFocused] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return

    const div = divRef.current
    const rect = div.getBoundingClientRect()

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleFocus = () => {
    setIsFocused(true)
    setOpacity(1)
  }

  const handleBlur = () => {
    setIsFocused(false)
    setOpacity(0)
  }

  const handleMouseEnter = () => {
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  return (
    <motion.div
      ref={divRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      style={{
        position: 'relative',
        backgroundColor: '#0a0a0a',
        border: '1px solid #222',
        borderRadius: '16px',
        padding: '3rem 2rem',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        transition: 'border-color 0.3s ease',
      }}
      className="pricing-card"
    >
      <style>{`
        .pricing-card:hover { border-color: #D4AF37 !important; }
      `}</style>
      <div
        style={{
          position: 'absolute',
          pointerEvents: 'none',
          inset: 0,
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(212,175,55,0.1), transparent 40%)`,
          transition: 'opacity 0.3s ease',
        }}
      />
      <div style={{ position: 'relative', zIndex: 10 }}>
        <h3 style={{ fontFamily: '"Space Mono", monospace', fontSize: '1.25rem', color: '#D4AF37', marginBottom: '1rem' }}>
          {title}
        </h3>
        <div style={{ fontFamily: '"Cinzel", serif', fontSize: '3rem', color: '#fff', marginBottom: '2rem' }}>
          {price}
        </div>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1, marginBottom: '3rem' }}>
          {features.map((feature, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#ccc', fontSize: '0.875rem' }}>
              <div style={{ width: '4px', height: '4px', background: '#D4AF37', borderRadius: '50%' }} />
              {feature}
            </li>
          ))}
        </ul>
        <button style={{
          width: '100%',
          padding: '1rem',
          background: 'transparent',
          border: '1px solid #D4AF37',
          color: '#D4AF37',
          fontFamily: '"Space Mono", monospace',
          textTransform: 'uppercase',
          cursor: 'pointer',
          borderRadius: '4px',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = '#D4AF37'; e.currentTarget.style.color = '#000' }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#D4AF37' }}>
          Initialize Sequence
        </button>
      </div>
    </motion.div>
  )
}

const BentoGrid = () => {
  const tiers = [
    {
      title: 'IDENTITY INFLOW',
      price: '$5K',
      features: [
        'Brand Identity Engineering',
        'High-Fidelity 3D Assets',
        'Custom WebGL Implementation',
        '24/7 Priority Support',
      ],
    },
    {
      title: 'VELOCITY ENGINE',
      price: '$12K',
      features: [
        'Everything in Identity Inflow',
        'Full React SPA Architecture',
        'Custom E-Commerce Integration',
        'Serverless Backend Deployment',
        'Advanced Analytics Dashboard',
      ],
    },
    {
      title: 'ENTERPRISE DOMINANCE',
      price: 'CUSTOM',
      features: [
        'Full Scale System Overhaul',
        'Dedicated Engineering Team',
        'AI Agent Integration',
        'Global CDN Distribution',
        'Bespoke Interactive Media',
      ],
    },
  ]

  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
      }}
    >
      {tiers.map((tier, index) => (
        <PricingCard key={tier.title} {...tier} delay={0.4 + index * 0.2} />
      ))}
    </div>
  )
}

export default BentoGrid
