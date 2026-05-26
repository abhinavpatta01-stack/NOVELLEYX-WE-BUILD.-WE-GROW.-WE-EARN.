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
      <h3 style={{ color: '#FFD166', fontFamily: 'var(--font-heading)', fontSize: 'var(--h3)', fontWeight: 'var(--h3-weight)', marginBottom: '0.5rem' }}>
        {title}
      </h3>
      <p style={{ fontSize: 'var(--body)', color: '#A8A8A8', lineHeight: 1.7 }}>
        {desc}
      </p>
    </motion.div>
  )
}

const ProtocolStep = ({ step, title, time, desc, align }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === 'left' ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{
        display: 'flex',
        flexDirection: align === 'left' ? 'row' : 'row-reverse',
        alignItems: 'center',
        gap: '3rem',
        width: '100%',
        margin: '3rem 0',
        textAlign: align
      }}
      className="protocol-step"
    >
      <style>{`
        @media (max-width: 768px) {
          .protocol-step { flex-direction: column !important; gap: 1.5rem !important; text-align: center !important; }
        }
      `}</style>
      <div style={{ flex: 1 }}>
        <div style={{ color: 'rgba(198,161,91,0.4)', fontSize: '4rem', fontWeight: 800, lineHeight: 1, fontFamily: 'var(--font-heading)' }}>
          {step}
        </div>
      </div>
      <div style={{ flex: 2 }}>
        <div style={{
          display: 'inline-block',
          background: 'rgba(198,161,91,0.1)',
          border: '1px solid rgba(198,161,91,0.25)',
          color: '#D4AF37',
          fontSize: 'var(--caption)',
          fontWeight: 600,
          padding: '0.2rem 0.7rem',
          borderRadius: '100px',
          marginBottom: '1rem'
        }}>
          {time}
        </div>
        <h3 style={{ fontSize: 'var(--h3)', fontWeight: 'var(--h3-weight)', marginBottom: '1rem', color: '#fff', fontFamily: 'var(--font-heading)' }}>
          {title}
        </h3>
        <p style={{ fontSize: '0.95rem', color: '#A8A8A8', lineHeight: 1.6 }}>
          {desc}
        </p>
      </div>
    </motion.div>
  )
}

const About = () => {
  return (
    <section id="about" style={{ padding: 'var(--section-py) 0', background: '#000000', overflow: 'hidden' }}>
      <div style={{ width: 'min(1280px, 92%)', marginInline: 'auto' }}>
        
        {/* About Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <span style={{ 
            display: 'inline-block', fontSize: 'var(--caption)', fontWeight: 600, 
            letterSpacing: 'var(--caption-tracking)', textTransform: 'uppercase', color: '#D4AF37', 
            marginBottom: '1.2rem' 
          }}>
            The Novelleyx Advantage
          </span>
          <div style={{ width: '48px', height: '2px', background: '#D4AF37', margin: '1.2rem auto' }}></div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--h2)', fontWeight: 'var(--h2-weight)', marginBottom: 'var(--heading-subtext-gap)', color: '#fff' }}>
            ABOUT US
          </h2>
          <p style={{ fontSize: 'var(--body)', color: '#D6D6D6', maxWidth: '560px', margin: '0 auto' }}>
            We don't just build systems; we engineer absolute market dominance. Novelleyx is an elite creative studio pushing the boundaries of digital identity and performance.
          </p>
        </motion.div>

        {/* Advantage Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '8rem' }}>
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

        {/* Integrated 72-Hour Gauntlet */}
        <div id="gauntlet" style={{ position: 'relative' }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'center', marginBottom: '5rem' }}
          >
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--h2)', fontWeight: 'var(--h2-weight)', color: '#fff', marginBottom: 'var(--heading-subtext-gap)', textShadow: '0 0 40px rgba(198,161,91,0.2)' }}>
              THE 72-HOUR GAUNTLET
            </h2>
            <div style={{ color: '#D4AF37', letterSpacing: '0.4em', fontSize: '0.875rem', fontWeight: 'bold' }}>EXECUTION PROTOCOL</div>
          </motion.div>

          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(198,161,91,0.05) 0%, transparent 60%)',
            pointerEvents: 'none',
            zIndex: 0
          }}></div>

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto' }}>
            <ProtocolStep
              step="01"
              time="0-24H: Foundation Engineering"
              title="Identity Disassembly & Core Synthesis"
              desc="We extract your raw data—achievements, goals, and metrics—and rebuild it into a high-converting architectural framework. Brand messaging, positioning, and visual tokens are established to align with top-tier market standards."
              align="left"
            />
            <ProtocolStep
              step="02"
              time="24-48H: Algorithmic Alignment"
              title="SEO Matrix & Platform Native Structuring"
              desc="Your digital assets are infused with platform-specific semantic markers. We optimize LinkedIn profiles for ATS bypass, engineer YouTube thumbnails for CTR supremacy, and structure web elements for Google dominance."
              align="right"
            />
            <ProtocolStep
              step="03"
              time="48-72H: Global Launch"
              title="Deployment & Visibility Propagation"
              desc="The optimized systems go live. Automated outreach sequences fire, recruiter networks are pinged, and audience capturing protocols initiate. Your new elite identity is actively pushed to key decision-makers globally."
              align="left"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
