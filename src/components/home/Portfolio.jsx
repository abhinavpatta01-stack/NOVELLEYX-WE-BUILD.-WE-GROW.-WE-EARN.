import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Zap, TrendingUp, Layers } from 'lucide-react'

const projects = [
  {
    category: "Industrial Brand Strategy",
    title: "Nandini Enterprises",
    desc: "We engineered a complete B2B brand transformation for a major industrial player. By constructing conversion-focused digital assets and establishing high-whitespace authority layouts, we systematically maximized their market digital trust index.",
    outcome: "+320% Inbound / Premium Trust",
    icon: <TrendingUp size={20} color="#D4AF37" />,
    stats: ["Premium industrial branding", "Conversion-focused assets", "Decoupled from generic templates"]
  },
  {
    category: "AI Operational Automation",
    title: "Aether Automation Engine",
    desc: "We deployed custom WhatsApp NLP routing and CRM auto-sync workflows for a major scaling developer agency. Eliminated manual appointment triage and secured 142% conversion spikes.",
    outcome: "+142% Lead Conversion",
    icon: <Zap size={20} color="#D4AF37" />,
    stats: ["Sub-second NLP response", "Direct Calendar Sync", "Zero Manual Overhead"]
  },
  {
    category: "Premium Web Architecture",
    title: "Apex Wealth Portal",
    desc: "A luxury, high-whitespace investor relation system and conversion pipeline built on high-performance React. Designed to command trust, resulting in doubled inbound strategy calls within 60 days.",
    outcome: "2.4x Strategy Calls Booked",
    icon: <Layers size={20} color="#D4AF37" />,
    stats: ["99th percentile PageSpeed", "Premium interactive charts", "Structured lead funnel"]
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio" style={{ padding: '8rem 2rem', background: '#111111', position: 'relative', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      {/* Background soft glow */}
      <div style={{
        position: 'absolute', bottom: '0%', left: '10%', width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(212,175,55,0.02) 0%, transparent 75%)',
        pointerEvents: 'none'
      }} />

      <div style={{ width: 'min(1280px, 92%)', marginInline: 'auto', position: 'relative', zIndex: 1 }}>
        
        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '5rem' }}>
          <span style={{ 
            display: 'inline-block', fontSize: 'var(--caption)', fontWeight: 600, 
            letterSpacing: 'var(--caption-tracking)', textTransform: 'uppercase', color: '#D4AF37', 
            marginBottom: '1rem'
          }}>
            Case Studies & Proof
          </span>
          <div style={{ width: '40px', height: '1px', background: '#D4AF37', margin: '1rem auto' }}></div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--h2)', fontWeight: 'var(--h2-weight)', color: '#fff', marginBottom: '1.5rem' }}>
            System Deployments & Outcomes
          </h2>
          <p style={{ color: '#888', maxWidth: '600px', fontSize: '1rem', lineHeight: 1.7 }}>
            A curated showcase of scaling engines, high-conversion architectures, and digital systems built for market leaders.
          </p>
        </div>

        {/* Projects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem' }}>
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: 'rgba(255,255,255,0.01)',
                border: '1px solid rgba(212,175,55,0.15)',
                borderRadius: '12px',
                padding: '3rem 2.5rem',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color 0.4s, box-shadow 0.4s, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              className="portfolio-case-card"
            >
              <style>{`
                .portfolio-case-card:hover {
                  border-color: rgba(212,175,55,0.45) !important;
                  box-shadow: 0 20px 45px rgba(0,0,0,0.6), 0 0 20px rgba(212,175,55,0.03) inset;
                  transform: translateY(-6px);
                }
              `}</style>

              {/* Top Row Category & Link */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.8rem' }}>
                <span style={{ fontSize: '0.72rem', color: '#D4AF37', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {project.category}
                </span>
                <div style={{ color: '#D4AF37', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ArrowUpRight size={18} />
                </div>
              </div>

              {/* Title */}
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
                {project.title}
              </h3>

              {/* Description */}
              <p style={{ color: '#A8A8A8', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '2rem', flex: 1 }}>
                {project.desc}
              </p>

              {/* Bullets List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2.5rem' }}>
                {project.stats.map((stat, sIdx) => (
                  <div key={sIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: '#888' }}>
                    <div style={{ width: '4px', height: '4px', background: '#D4AF37', borderRadius: '50%' }}></div>
                    <span>{stat}</span>
                  </div>
                ))}
              </div>

              {/* Outcome Badge */}
              <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '1.5rem' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <div style={{ background: 'rgba(212,175,55,0.06)', border: '1px solid rgba(212,175,55,0.2)', padding: '0.4rem', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {project.icon}
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#666', textTransform: 'uppercase', fontWeight: 600 }}>Validated Outcome</div>
                  <div style={{ fontSize: '0.95rem', color: '#fff', fontWeight: 700 }}>{project.outcome}</div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Portfolio
