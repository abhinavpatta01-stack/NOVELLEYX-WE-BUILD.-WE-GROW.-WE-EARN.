import React from 'react'
import { motion } from 'framer-motion'

const AboutCard = ({ title, desc, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      style={{
        background: 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '10px',
        padding: '2rem',
        transition: 'transform 0.28s cubic-bezier(.4,0,.2,1), border-color 0.28s, box-shadow 0.28s'
      }}
      className="about-card"
    >
      <style>{`
        .about-card:hover { transform: translateY(-5px); border-color: rgba(198,161,91,0.4); box-shadow: 0 12px 40px rgba(0,0,0,0.45); }
      `}</style>
      <h3 style={{ color: '#FFD166', fontFamily: '"Poppins", sans-serif', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.5rem' }}>
        {title}
      </h3>
      <p style={{ fontSize: '0.88rem', color: '#A8A8A8', lineHeight: 1.6 }}>
        {desc}
      </p>
    </motion.div>
  )
}

const About = () => {
  return (
    <section id="about" style={{ padding: '100px 0', background: '#000000' }}>
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
            The Novelleyx Advantage
          </span>
          <div style={{ width: '48px', height: '2px', background: '#D4AF37', margin: '1.2rem auto' }}></div>
          <h2 style={{ fontFamily: '"Poppins", sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>
            ABOUT US
          </h2>
          <p style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', color: '#D6D6D6', maxWidth: '560px', margin: '0 auto' }}>
            We don't just build systems; we engineer absolute market dominance. Novelleyx is an elite creative studio pushing the boundaries of digital identity and performance.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          <AboutCard 
            title="The 72-Hour Execution Protocol"
            desc="Systematic rapid assembly and deployment of custom recruiter-ready profiles or automated storefronts."
            delay={0.1}
          />
          <AboutCard 
            title="Algorithm-Optimized Defenses"
            desc="Custom-engineered semantic content tailored to force applicant tracking filters (ATS) and search protocols to green-light the brand."
            delay={0.2}
          />
          <AboutCard 
            title="The Authority Halo Effect"
            desc="Implementation of premium executive visual layouts to instantly establish market positioning and maximize pricing power."
            delay={0.3}
          />
          <AboutCard 
            title="Continuous Identity Management"
            desc="Long-term maintenance and updates ensuring assets scale seamlessly ahead of shifting search and social media algorithms."
            delay={0.4}
          />
        </div>
      </div>
    </section>
  )
}

export default About
