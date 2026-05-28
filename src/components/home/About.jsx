import React from 'react'
import { motion } from 'framer-motion'

const AboutCard = ({ title, desc, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: 'rgba(255,255,255,0.01)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(212,175,55,0.15)',
        borderRadius: '12px',
        padding: '3rem 2.5rem',
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s, box-shadow 0.4s'
      }}
      className="about-card"
    >
      <style>{`
        .about-card:hover { 
          transform: translateY(-6px); 
          border-color: rgba(212,175,55,0.5); 
          box-shadow: 0 20px 40px rgba(0,0,0,0.6), 0 0 20px rgba(212,175,55,0.05) inset; 
        }
      `}</style>
      <h3 style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontSize: 'var(--h3)', fontWeight: 'var(--h3-weight)', marginBottom: '1rem', letterSpacing: '-0.01em' }}>
        {title}
      </h3>
      <div style={{ width: '30px', height: '1px', background: '#D4AF37', marginBottom: '1.2rem' }}></div>
      <p style={{ fontSize: '0.92rem', color: '#A8A8A8', lineHeight: 1.75 }}>
        {desc}
      </p>
    </motion.div>
  )
}

const ProtocolStep = ({ step, title, time, desc, align }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        display: 'flex',
        flexDirection: align === 'left' ? 'row' : 'row-reverse',
        alignItems: 'flex-start',
        gap: '4rem',
        width: '100%',
        margin: '5rem 0',
        textAlign: align
      }}
      className="protocol-step"
    >
      <style>{`
        @media (max-width: 768px) {
          .protocol-step { flex-direction: column !important; gap: 1.5rem !important; text-align: center !important; margin: 3rem 0 !important; }
        }
      `}</style>
      <div style={{ flex: 1, display: 'flex', justifyContent: align === 'left' ? 'flex-start' : 'flex-end' }}>
        <div style={{ 
          color: 'rgba(212,175,55,0.08)', 
          fontSize: '7rem', 
          fontWeight: 800, 
          lineHeight: 0.8, 
          fontFamily: 'var(--font-heading)',
          background: 'linear-gradient(180deg, rgba(212,175,55,0.15) 0%, transparent 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          userSelect: 'none'
        }}>
          {step}
        </div>
      </div>
      <div style={{ flex: 2, paddingTop: '0.5rem' }}>
        <div style={{
          display: 'inline-block',
          background: 'rgba(212,175,55,0.08)',
          border: '1px solid rgba(212,175,55,0.3)',
          color: '#D4AF37',
          fontSize: '0.75rem',
          fontWeight: 700,
          padding: '0.3rem 0.9rem',
          borderRadius: '4px',
          marginBottom: '1.2rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase'
        }}>
          {time}
        </div>
        <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '1.2rem', color: '#fff', fontFamily: 'var(--font-heading)' }}>
          {title}
        </h3>
        <p style={{ fontSize: '0.95rem', color: '#A8A8A8', lineHeight: 1.8 }}>
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
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <span style={{ 
            display: 'inline-block', fontSize: 'var(--caption)', fontWeight: 600, 
            letterSpacing: 'var(--caption-tracking)', textTransform: 'uppercase', color: '#D4AF37', 
            marginBottom: '1.2rem' 
          }}>
            Strategic Architecture
          </span>
          <div style={{ width: '40px', height: '1px', background: '#D4AF37', margin: '1.2rem auto' }}></div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--h2)', fontWeight: 'var(--h2-weight)', marginBottom: 'var(--heading-subtext-gap)', color: '#fff' }}>
            OPERATIONAL SYSTEMS & REVENUE LEVERAGE
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#888', maxWidth: '650px', margin: '0 auto', lineHeight: 1.8 }}>
            We engineer high-yield client acquisition loops, automated workflows, and luxury digital architectures. NovelleyX scales your enterprise's conversion efficiency and market positioning.
          </p>
        </motion.div>

        {/* Advantage Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.8rem', marginBottom: '10rem' }}>
          <AboutCard 
            title="The 72-Hour Deployment System"
            desc="Proprietary rapid-execution cycles to configure and deploy high-converting landing pages, automated pipelines, and authority assets."
            delay={0.1}
          />
          <AboutCard 
            title="Algorithmic Market Capture"
            desc="SEO systems and automated semantic engines built to secure organic search domination and generate high-intent inbound client loops."
            delay={0.2}
          />
          <AboutCard 
            title="Capital Pricing Power"
            desc="Architecting premium, high-whitespace layouts that elevate customer perception, eliminate competition, and maximize transaction value."
            delay={0.3}
          />
          <AboutCard 
            title="Revenue Engine Optimization"
            desc="Continuous database integration, CRM automation, and live sequence tracking to keep operational systems scaled and friction-free."
            delay={0.4}
          />
        </div>

        {/* Integrated 72-Hour Gauntlet */}
        <div id="gauntlet" style={{ position: 'relative' }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', marginBottom: '6rem' }}
          >
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--h2)', fontWeight: 'var(--h2-weight)', color: '#fff', marginBottom: 'var(--heading-subtext-gap)' }}>
              THE 72-HOUR GAUNTLET
            </h2>
            <div style={{ color: '#D4AF37', letterSpacing: '0.4em', fontSize: '0.8rem', fontWeight: 800 }}>EXECUTION PIPELINE</div>
          </motion.div>

          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 60%)',
            pointerEvents: 'none',
            zIndex: 0
          }}></div>

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto' }}>
            <ProtocolStep
              step="01"
              time="0 - 24 Hours: Synthesis"
              title="Infrastructure Audit & Synthesis"
              desc="We dissect your current operational funnel and map a high-yield conversion framework. Corporate brand positioning, core revenue metrics, and custom design standards are established immediately to align with elite expectations."
              align="left"
            />
            <ProtocolStep
              step="02"
              time="24 - 48 Hours: Engineering"
              title="Semantic SEO & Workflow Integration"
              desc="We construct the underlying code and API matrix. From custom databases and CRM syncing to semantic indexing protocols, your brand is structured for search superiority and zero administrative leakage."
              align="right"
            />
            <ProtocolStep
              step="03"
              time="48 - 72 Hours: Launch"
              title="Outbound Ignition & Flow Propagation"
              desc="The fully automated systems go live. Scraping filters initiate, marketing funnels coordinate, and your automated WhatsApp/email loops start processing inbound prospects. Real-time metrics begin syncing directly to your system."
              align="left"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
