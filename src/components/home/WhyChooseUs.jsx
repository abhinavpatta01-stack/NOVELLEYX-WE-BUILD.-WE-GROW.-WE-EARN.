import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Zap, BarChart3, TrendingUp } from 'lucide-react'

const metrics = [
  { value: "$48M+", label: "Revenue Scaled for Clients" },
  { value: "140+", label: "Automated Systems Deployed" },
  { value: "99.98%", label: "API & Process Uptime" },
  { value: "3.2x", label: "Average Marketing ROI" }
]

const valueProps = [
  {
    icon: <BarChart3 size={24} color="#D4AF37" />,
    title: "Capital & Yield Optimization",
    desc: "Every line of code and automated sequence we configure is calculated to reduce customer acquisition costs (CAC) and elevate lifetime value (LTV). We target pure financial yield, not vanity page views."
  },
  {
    icon: <Zap size={24} color="#D4AF37" />,
    title: "Enterprise-Grade Infrastructure",
    desc: "We build using robust, low-latency frameworks, RAG knowledge models, and error-resilient CRM syncing. Your system is engineered to function continuously at scale, removing administrative friction."
  },
  {
    icon: <ShieldCheck size={24} color="#D4AF37" />,
    title: "Absolute Positioning & Authority",
    desc: "We position our clients at the absolute pinnacle of their industries. By combining executive-level copywriting with premium layouts, we ensure your digital assets command pricing authority."
  }
]

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" style={{ padding: '8rem 2rem', background: '#050505', position: 'relative', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      {/* Soft Gold Spotlight glow */}
      <div style={{
        position: 'absolute', top: '10%', right: '5%', width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(212,175,55,0.02) 0%, transparent 80%)',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        {/* Quantitative Metrics Row */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
          gap: '2.5rem', 
          marginBottom: '8rem',
          textAlign: 'center'
        }}>
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: 'rgba(255,255,255,0.01)',
                border: '1px solid rgba(212,175,55,0.1)',
                padding: '2.5rem 1.5rem',
                borderRadius: '8px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.4)'
              }}
            >
              <h3 className="text-gold-gradient" style={{ fontSize: '3rem', fontWeight: 800, margin: 0, letterSpacing: '-0.02em', fontFamily: 'var(--font-heading)' }}>
                {metric.value}
              </h3>
              <div style={{ height: '1px', width: '30px', background: 'rgba(212,175,55,0.3)', margin: '1rem auto' }}></div>
              <p style={{ color: '#A8A8A8', fontSize: '0.88rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', margin: 0 }}>
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us Split Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'start' }}>
          
          {/* Left Column: Heading Statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span style={{ 
              display: 'inline-block', fontSize: 'var(--caption)', fontWeight: 600, 
              letterSpacing: 'var(--caption-tracking)', textTransform: 'uppercase', color: '#D4AF37', 
              marginBottom: '1rem'
            }}>
              Operational Philosophy
            </span>
            <div style={{ width: '40px', height: '1px', background: '#D4AF37', margin: '1rem 0' }}></div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--h2)', fontWeight: 'var(--h2-weight)', color: '#fff', marginBottom: '2rem', lineHeight: 1.15 }}>
              Engineered for Enterprise Outcomes
            </h2>
            <p style={{ color: '#888', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              Unlike generic digital studios that build cosmetic websites, NovelleyX builds high-yield software and automation ecosystems designed strictly to scale revenue and multiply enterprise value.
            </p>
            <p style={{ color: '#888', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '3rem' }}>
              We eliminate administrative friction, capture high-intent buyers organically, and automate client processing. We provide absolute capital efficiency.
            </p>
            <a href="#contact" className="cta-gold-glow">
              Explore Our System
            </a>
          </motion.div>

          {/* Right Column: Value Propositions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {valueProps.map((prop, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  alignItems: 'flex-start'
                }}
              >
                <div style={{ 
                  background: 'rgba(212,175,55,0.06)',
                  border: '1px solid rgba(212,175,55,0.2)',
                  borderRadius: '8px',
                  padding: '0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {prop.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '0.6rem', fontFamily: 'var(--font-heading)' }}>
                    {prop.title}
                  </h3>
                  <p style={{ color: '#A8A8A8', fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>
                    {prop.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}

export default WhyChooseUs
