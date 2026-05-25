import React from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const MediaCard = ({ name, price, desc, features, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: '12px',
        padding: '2.2rem',
        display: 'flex',
        flexDirection: 'column',
        transition: 'border-color 0.28s, transform 0.28s'
      }}
      className="media-card"
    >
      <style>{`
        .media-card:hover { border-color: #D4AF37 !important; transform: translateY(-5px); }
      `}</style>
      <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem', fontFamily: '"Poppins", sans-serif', color: '#fff' }}>
        {name}
      </h3>
      <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#D4AF37', marginBottom: '1.5rem' }}>
        ₹{price} <span style={{ fontSize: '0.9rem', fontWeight: 'normal', color: '#A8A8A8' }}>/ month</span>
      </div>
      <p style={{ fontSize: '0.85rem', color: '#A8A8A8', lineHeight: 1.6, marginBottom: '1.5rem', minHeight: '60px' }}>
        {desc}
      </p>
      
      <ul style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
        {features.map((feature, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: '#D6D6D6' }}>
            <div style={{ color: '#D4AF37', fontSize: '0.6rem', marginTop: '4px' }}>✦</div>
            {feature}
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', gap: '0.6rem' }}>
        <a 
          href={`https://wa.me/917075853225?text=Hello Novelleyx, I'm interested in the ${name} package.`}
          target="_blank" rel="noopener noreferrer"
          style={{ flex: 1, padding: '0.6rem', background: '#D4AF37', color: '#000', fontSize: '0.85rem', fontWeight: 600, textAlign: 'center', borderRadius: '6px' }}
        >
          WhatsApp
        </a>
        <a 
          href={`mailto:novelleyx@gmail.com?subject=Inquiry About ${name}`}
          style={{ flex: 1, padding: '0.6rem', background: 'transparent', border: '1px solid #D4AF37', color: '#D4AF37', fontSize: '0.85rem', fontWeight: 600, textAlign: 'center', borderRadius: '6px' }}
        >
          Email
        </a>
      </div>
    </motion.div>
  )
}

const Media = () => {
  return (
    <section id="media" style={{ padding: '100px 0', background: '#000000' }}>
      <div style={{ width: 'min(1280px, 92%)', marginInline: 'auto' }}>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <span style={{ 
            display: 'inline-block', fontSize: '0.72rem', fontWeight: 600, 
            letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D4AF37', 
            marginBottom: '1.2rem' 
          }}>
            Channel Management Hub
          </span>
          <div style={{ width: '48px', height: '2px', background: '#D4AF37', margin: '1.2rem auto' }}></div>
          <h2 style={{ fontFamily: '"Poppins", sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>
            Outsourced Media
          </h2>
          <p style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', color: '#D6D6D6', maxWidth: '560px', margin: '0 auto' }}>
            Dedicated content systems, thumbnail engineering, and YouTube/Instagram SEO for exponential visibility.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>
          <MediaCard 
            name="Basic Media"
            price="15,000"
            desc="Essential content creation and multi-platform distribution to establish your baseline presence."
            features={[
              "Content planning & scheduling",
              "Thumbnail design",
              "Caption & copy writing",
              "Basic analytics reporting"
            ]}
            delay={0.1}
          />
          <MediaCard 
            name="Pro Algorithm"
            price="35,000"
            desc="Advanced algorithm-aligned execution, growth targeting, and platform-native SEO systems."
            features={[
              "Algorithm-optimized content",
              "YouTube & Instagram SEO",
              "Audience targeting strategy",
              "Growth analytics dashboard",
              "A/B thumbnail testing"
            ]}
            delay={0.2}
          />
          <MediaCard 
            name="Premium Management"
            price="75,000"
            desc="Full-spectrum elite media operations — from ideation to global distribution and monetization."
            features={[
              "Full channel management",
              "Cinematic content production",
              "Monetization strategy",
              "Influencer collaboration system",
              "Weekly performance reviews",
              "Priority support"
            ]}
            delay={0.3}
          />
        </div>
      </div>
    </section>
  )
}

export default Media
