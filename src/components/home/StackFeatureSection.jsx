import React from 'react'
import { motion } from 'framer-motion'
import { LineChart, Cpu, Layers, Zap, Check } from 'lucide-react'

const processPhases = [
  {
    phase: "Phase 01",
    timeframe: "Days 1 - 2",
    title: "System Audit & Strategy Briefing",
    desc: "We perform an in-depth analysis of your operational pipelines, lead generation metrics, and administrative bottlenecks. A custom-tailored execution blueprint is formulated, detailing ROI targets, timeline milestones, and proposed integrations.",
    icon: <LineChart size={24} color="#D4AF37" />,
    deliverables: [
      "Custom Architecture Roadmap",
      "Overhead Bottleneck Report",
      "Calculated ROI Targets & Pricing Scope"
    ],
    milestone: "KPI: Blueprint Sign-off"
  },
  {
    phase: "Phase 02",
    timeframe: "Days 2 - 4",
    title: "Core Pipeline & Database Engineering",
    desc: "Our senior architects build the custom code infrastructure. We deploy WhatsApp conversational NLP routing, configure CRM data mappings, and establish low-latency API links to completely eliminate manual admin tasks.",
    icon: <Cpu size={24} color="#D4AF37" />,
    deliverables: [
      "WhatsApp Auto-triage Pipeline",
      "Database & CRM Mappings (Salesforce/HubSpot)",
      "Automated Slack/Discord Team Alerts"
    ],
    milestone: "KPI: API Test Passed (99% success)"
  },
  {
    phase: "Phase 03",
    timeframe: "Days 4 - 6",
    title: "Conversion Engine & Semantic SEO",
    desc: "We design and engineer high-performance React/Vite systems. We embed platform-native semantic SEO structures to secure organic rank supremacy, maximizing buyer engagement and establishing your pricing power.",
    icon: <Layers size={24} color="#D4AF37" />,
    deliverables: [
      "High-Performance Custom Web App",
      "SEO Semantic Indexing & Metadata Mapping",
      "Executive Visual Identity Overlays"
    ],
    milestone: "KPI: 98/100 Core Web Vitals score"
  },
  {
    phase: "Phase 04",
    timeframe: "Day 7",
    title: "Global Ignition & Scaled Optimization",
    desc: "Your automated growth systems are fired up. Marketing routes activate, automated campaigns initiate, and lead capture systems synchronize. We monitor operations continuously to preserve 99.98% uptime.",
    icon: <Zap size={24} color="#D4AF37" />,
    deliverables: [
      "Live Operational Loop Launch",
      "A/B Lead Optimization Configs",
      "Uptime Monitor (99.98% SLA)"
    ],
    milestone: "KPI: First Automated Lead Logged"
  }
]

const StackFeatureSection = () => {
  return (
    <section id="workflow" style={{ padding: '8rem 2rem', background: '#000000', position: 'relative', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      {/* Background spotlights */}
      <div style={{
        position: 'absolute', top: '30%', left: '5%', width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(212,175,55,0.03) 0%, transparent 75%)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '20%', right: '5%', width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(212,175,55,0.02) 0%, transparent 75%)',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div className="process-split-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '5rem', alignItems: 'start' }}>
          
          {/* Left Column: Pinned Header Info */}
          <div className="process-sticky-col" style={{ position: 'sticky', top: '150px' }}>
            <span style={{ 
              display: 'inline-block', fontSize: 'var(--caption)', fontWeight: 600, 
              letterSpacing: 'var(--caption-tracking)', textTransform: 'uppercase', color: '#D4AF37', 
              marginBottom: '1rem'
            }}>
              Our Protocol
            </span>
            <div style={{ width: '40px', height: '1px', background: '#D4AF37', margin: '1rem 0' }}></div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--h2)', fontWeight: 'var(--h2-weight)', color: '#fff', marginBottom: '2rem', lineHeight: 1.15 }}>
              The Execution System
            </h2>
            <p style={{ color: '#888', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem', maxWidth: '480px' }}>
              Four key phases engineered to systematically translate your business operations into a high-yielding, automated revenue asset.
            </p>
            <p style={{ color: '#888', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '3rem', maxWidth: '480px' }}>
              We manage the entire system engineering life-cycle with absolute transparency, speed, and focus on ROI.
            </p>
            <a href="#contact" className="cta-gold-glow">
              Schedule strategy call
            </a>
          </div>

          {/* Right Column: Premium Vertical Timeline */}
          <div style={{ position: 'relative', paddingLeft: '2.5rem' }}>
            
            {/* Core Vertical Timeline Connector Line */}
            <div style={{
              position: 'absolute',
              left: '9px',
              top: '20px',
              bottom: '20px',
              width: '2px',
              background: 'linear-gradient(180deg, #D4AF37 0%, rgba(212,175,55,0.2) 80%, transparent 100%)',
              zIndex: 0
            }} />

            {/* Timeline Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
              {processPhases.map((phase, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  {/* Timeline Node Point */}
                  <div style={{
                    position: 'absolute',
                    left: '-49px',
                    top: '20px',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: '#000',
                    border: '3px solid #D4AF37',
                    boxShadow: '0 0 10px rgba(212,175,55,0.5)',
                    zIndex: 2
                  }} />

                  {/* Card wrapper */}
                  <div 
                    style={{
                      background: 'rgba(255,255,255,0.01)',
                      border: '1px solid rgba(212,175,55,0.15)',
                      borderRadius: '12px',
                      padding: '2.5rem',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                      transition: 'border-color 0.4s, box-shadow 0.4s, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    className="timeline-phase-card"
                  >
                    <style>{`
                      .timeline-phase-card:hover {
                        border-color: rgba(212,175,55,0.45) !important;
                        box-shadow: 0 15px 35px rgba(0,0,0,0.6), 0 0 15px rgba(212,175,55,0.03) inset;
                        transform: translateY(-4px);
                      }
                    `}</style>

                    {/* Top Row Info */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem', flexWrap: 'wrap', gap: '0.8rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                        <div style={{
                          background: 'rgba(212,175,55,0.06)',
                          border: '1px solid rgba(212,175,55,0.25)',
                          borderRadius: '8px',
                          width: '40px',
                          height: '40px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          {phase.icon}
                        </div>
                        <span style={{ fontSize: 'var(--caption)', fontWeight: 700, color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          {phase.phase}
                        </span>
                      </div>
                      <span style={{ fontSize: '0.8rem', color: '#666', fontWeight: 600, letterSpacing: '0.02em' }}>
                        {phase.timeframe}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
                      {phase.title}
                    </h3>

                    {/* Description */}
                    <p style={{ color: '#A8A8A8', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '1.8rem' }}>
                      {phase.desc}
                    </p>

                    {/* Deliverables header */}
                    <div style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.03em', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
                      Key Deliverables:
                    </div>

                    {/* Deliverables Bullet List */}
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
                      {phase.deliverables.map((del, dIdx) => (
                        <li key={dIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.88rem', color: '#888' }}>
                          <Check size={14} color="#D4AF37" style={{ flexShrink: 0 }} />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Divider */}
                    <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '1.2rem' }} />

                    {/* KPI Metric Badge */}
                    <div style={{
                      display: 'inline-flex',
                      background: 'rgba(212,175,55,0.05)',
                      border: '1px solid rgba(212,175,55,0.15)',
                      borderRadius: '4px',
                      padding: '0.3rem 0.6rem',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      color: '#D4AF37',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase'
                    }}>
                      {phase.milestone}
                    </div>

                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .process-split-container {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
          .process-sticky-col {
            position: relative !important;
            top: auto !important;
            text-align: center !important;
          }
          .process-sticky-col div {
            margin: 1rem auto !important;
          }
        }
      `}</style>
    </section>
  )
}

export default StackFeatureSection
