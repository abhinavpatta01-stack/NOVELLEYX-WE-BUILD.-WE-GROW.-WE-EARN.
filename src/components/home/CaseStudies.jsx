import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Layout, BarChart3, RefreshCw, GitBranch, ArrowRight, Zap, CheckCircle2 } from 'lucide-react'

const caseStudiesData = [
  {
    id: 'dashboards',
    title: 'FinTech CRM & Analytics Platform',
    category: 'Sample Dashboard Mockup',
    icon: <Layout size={22} color="#D4AF37" />,
    desc: 'An elite client portal and real-time operational dashboard built with modern Web APIs. Engineered for sub-second latency data synchronization, interactive visualization, and zero-friction client workflows.',
    metrics: [
      { label: 'Conversion Rate Lift', value: '+300%', sub: 'From 1.2% to 4.8%' },
      { label: 'Average Page Load Time', value: '< 1.1s', sub: 'Top 1% Global Speed' },
      { label: 'Client Inbound Volume', value: '+142%', sub: 'Within 30 Days' }
    ],
    stack: ['React 19', 'Framer Motion', 'Recharts API', 'Node.js', 'Vite Bundle'],
    visual: 'dashboard'
  },
  {
    id: 'social',
    title: 'Founder Authority Accelerator',
    category: 'Social Media Growth Systems',
    icon: <BarChart3 size={22} color="#D4AF37" />,
    desc: 'Systematic organic growth pipeline engineered for tech founders and venture capitalists. By decoding network graphs and platform algorithms, we turn stagnant profiles into industry authority hubs.',
    metrics: [
      { label: 'Organic Impressions Velocity', value: '+1,200%', sub: '4.2M Impressions' },
      { label: 'Qualified Inbound Leads', value: '184 Leads', sub: 'High-Ticket VCs/Clients' },
      { label: 'Ad Spend Allocation', value: '₹0 Spent', sub: 'Pure Algorithmic Authority' }
    ],
    stack: ['Semantic Copywriting', 'Video Hooks Engine', 'LinkedIn Graph SEO', 'Instagram Funnels'],
    visual: 'social'
  },
  {
    id: 'redesign',
    title: 'Apex Premium Real Estate Studio',
    category: 'Website Redesign System',
    icon: <RefreshCw size={22} color="#D4AF37" />,
    desc: 'Complete digital transformation from a clunky, template-based WordPress site to a bespoke high-status website system. Optimized for conversion rate optimization (CRO) and visual storytelling.',
    metrics: [
      { label: 'Core Web Vitals Score', value: '98/100', sub: 'Perfect Google Score' },
      { label: 'Bounce Rate Reduction', value: '-56%', sub: 'From 74% down to 32%' },
      { label: 'Avg. Session Duration', value: '4.2x', sub: 'Higher Visitor Engagement' }
    ],
    stack: ['React SSR', 'Vanilla CSS-in-JS', 'Vite Pipeline', 'Image Optimizer CDN'],
    visual: 'redesign'
  },
  {
    id: 'automation',
    title: 'Autonomous CRM Outreach Funnel',
    category: 'AI Operational Workflows',
    icon: <GitBranch size={22} color="#D4AF37" />,
    desc: 'Intelligent automation syncing customer touchpoints. Integrates custom qualifier agents with calendar booking triggers and team channels to eliminate manual operations.',
    metrics: [
      { label: 'Administrative Hours Saved', value: '32h / wk', sub: 'Per Sales Representative' },
      { label: 'Instant Lead Response Rate', value: '94%', sub: 'Under 10 Seconds' },
      { label: 'Total Calendar Bookings', value: '+150%', sub: 'Eliminating Drop-Offs' }
    ],
    stack: ['n8n Engine', 'OpenAI API v4', 'Calendly Integration', 'Slack Webhooks'],
    visual: 'automation'
  }
]

const CaseStudies = () => {
  const [activeTab, setActiveTab] = useState('dashboards')
  const activeData = caseStudiesData.find(cs => cs.id === activeTab)

  return (
    <section id="portfolio" style={{ padding: 'var(--section-py) 0', background: '#000000', position: 'relative', overflow: 'hidden' }}>
      {/* Subtle top divider line */}
      <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.15), transparent)' }} />
      
      {/* Radial glow background */}
      <div style={{
        position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '1000px', height: '650px',
        background: 'radial-gradient(circle, rgba(212,175,55,0.03) 0%, transparent 60%)',
        pointerEvents: 'none', zIndex: 0
      }} />

      <div style={{ width: 'min(1280px, 92%)', marginInline: 'auto', position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{
            display: 'inline-block',
            fontSize: 'var(--caption)', fontWeight: 600,
            letterSpacing: 'var(--caption-tracking)', textTransform: 'uppercase',
            color: '#D4AF37', marginBottom: '1.2rem',
            border: '1px solid rgba(212,175,55,0.25)',
            padding: '0.4rem 1rem',
            borderRadius: '100px',
            background: 'rgba(212,175,55,0.04)'
          }}>
            Case Studies & Proof
          </span>
          <div style={{ width: '48px', height: '2px', background: '#D4AF37', margin: '0 auto 1.2rem' }} />
          <h2 style={{
            fontFamily: 'var(--font-heading)', fontSize: 'var(--h2)',
            fontWeight: 'var(--h2-weight)', color: '#fff',
            marginBottom: 'var(--heading-subtext-gap)'
          }}>
            Elite Systems In Action
          </h2>
          <p style={{ fontSize: 'var(--body)', color: '#888', maxWidth: '650px', margin: '0 auto', lineHeight: 1.7 }}>
            Explore live-tested and high-status digital assets we construct to scale conversions, maximize organic search traffic, and automate operations.
          </p>
        </div>

        {/* Outer Showcase Box */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
          
          {/* Tabs Selector Row */}
          <div className="portfolio-tabs-scroll" style={{
            display: 'flex', gap: '0.8rem', overflowX: 'auto', paddingBottom: '0.5rem',
            justifyContent: 'center', marginInline: 'auto', maxWidth: '100%', scrollbarWidth: 'none'
          }}>
            <style>{`
              .portfolio-tabs-scroll::-webkit-scrollbar { display: none; }
              .portfolio-tab-btn { transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
              .portfolio-tab-btn:hover { border-color: rgba(212,175,55,0.4) !important; color: #fff !important; }
              @media (max-width: 768px) {
                .portfolio-tabs-scroll { justify-content: flex-start; padding-left: 0.5rem; }
              }
            `}</style>
            {caseStudiesData.map(cs => (
              <button
                key={cs.id}
                onClick={() => setActiveTab(cs.id)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                  padding: '0.9rem 1.6rem', borderRadius: '100px',
                  background: activeTab === cs.id ? 'rgba(212,175,55,0.06)' : 'rgba(255,255,255,0.02)',
                  border: activeTab === cs.id ? '1px solid #D4AF37' : '1px solid rgba(255,255,255,0.06)',
                  color: activeTab === cs.id ? '#fff' : '#888',
                  fontFamily: 'var(--font-body)', fontSize: '0.9rem', fontWeight: 600,
                  cursor: 'pointer', whiteSpace: 'nowrap'
                }}
                className="portfolio-tab-btn"
              >
                {cs.icon}
                <span>{cs.category}</span>
              </button>
            ))}
          </div>

          {/* Interactive Core Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.5 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '3.5rem',
                alignItems: 'center',
                background: 'rgba(255,255,255,0.01)',
                border: '1px solid rgba(255,255,255,0.04)',
                borderRadius: '24px',
                padding: '3rem',
                boxShadow: '0 30px 70px rgba(0,0,0,0.6)'
              }}
              className="case-study-display-box"
            >
              <style>{`
                @media (max-width: 768px) {
                  .case-study-display-box { padding: 1.5rem !important; gap: 2rem !important; }
                }
              `}</style>
              
              {/* Left Side: Summary & Numerical Metrics */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div>
                  <span style={{ color: '#D4AF37', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                    {activeData.category}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--h3)', fontWeight: 'var(--h3-weight)', color: '#fff', marginBottom: '1rem' }}>
                    {activeData.title}
                  </h3>
                  <p style={{ color: '#A8A8A8', fontSize: '0.95rem', lineHeight: 1.7 }}>
                    {activeData.desc}
                  </p>
                </div>

                {/* Numerical Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1.25rem' }}>
                  {activeData.metrics.map((m, idx) => (
                    <div key={idx} style={{
                      padding: '1.2rem 1rem', background: 'rgba(255,255,255,0.02)',
                      borderLeft: '2px solid #D4AF37', borderTopRightRadius: '8px', borderBottomRightRadius: '8px'
                    }}>
                      <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-heading)', lineHeight: 1.1, marginBottom: '0.3rem' }}>
                        {m.value}
                      </div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.15rem' }}>
                        {m.label}
                      </div>
                      <div style={{ fontSize: '0.7rem', color: '#666' }}>
                        {m.sub}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div>
                  <h4 style={{ fontSize: '0.75rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
                    Integrated Technologies:
                  </h4>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {activeData.stack.map(st => (
                      <span key={st} style={{
                        fontSize: '0.75rem', color: '#ccc', background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.06)', padding: '0.3rem 0.8rem', borderRadius: '4px'
                      }}>
                        {st}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTA inside Showcase */}
                <div>
                  <a
                    href="https://wa.me/917075853225?text=Hello%20NovelleyX%2C%20I%20saw%20your%20Case%20Studies%20and%20want%20to%20implement%20similar%20systems%20for%20my%20brand."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-gold-glow"
                    style={{ padding: '0.75rem 1.8rem', fontSize: '0.85rem' }}
                  >
                    Build Similar System <ArrowRight size={14} />
                  </a>
                </div>
              </div>

              {/* Right Side: High-End Live Visual Sandbox */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                {activeData.visual === 'dashboard' && (
                  <div style={{
                    width: '100%', maxWidth: '460px', borderRadius: '16px', background: '#0a0a0a',
                    border: '1px solid rgba(212,175,55,0.2)', padding: '1.5rem',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.6)', position: 'relative', overflow: 'hidden'
                  }}>
                    {/* Header Row */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.75rem', marginBottom: '1.25rem' }}>
                      <div style={{ display: 'flex', gap: '4px' }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f56' }} />
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffbd2e' }} />
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27c93f' }} />
                      </div>
                      <div style={{ fontSize: '0.65rem', color: '#555', fontFamily: 'var(--font-heading)', letterSpacing: '0.05em' }}>NVX-ANALYTICS v1.0</div>
                    </div>

                    {/* Dashboard KPI Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem', marginBottom: '1.25rem' }}>
                      <div style={{ padding: '0.8rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '8px' }}>
                        <span style={{ fontSize: '0.65rem', color: '#666', textTransform: 'uppercase' }}>Monthly Recurring Rev</span>
                        <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginTop: '0.2rem' }}>₹4,12,850</div>
                        <span style={{ fontSize: '0.6rem', color: '#22c55e' }}>✦ +18.4% this month</span>
                      </div>
                      <div style={{ padding: '0.8rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '8px' }}>
                        <span style={{ fontSize: '0.65rem', color: '#666', textTransform: 'uppercase' }}>Conversion Index</span>
                        <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#D4AF37', marginTop: '0.2rem' }}>4.82%</div>
                        <span style={{ fontSize: '0.6rem', color: '#22c55e' }}>✦ +300% LTV lift</span>
                      </div>
                    </div>

                    {/* SVG Line Chart */}
                    <div style={{ height: '140px', position: 'relative', width: '100%' }}>
                      <svg viewBox="0 0 400 130" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                        <defs>
                          <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="rgba(212,175,55,0.3)" />
                            <stop offset="100%" stopColor="rgba(212,175,55,0.0)" />
                          </linearGradient>
                        </defs>
                        {/* Grid lines */}
                        <line x1="0" y1="20" x2="400" y2="20" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                        <line x1="0" y1="60" x2="400" y2="60" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                        <line x1="0" y1="100" x2="400" y2="100" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                        {/* Flow area */}
                        <path d="M 0 110 L 80 95 L 160 105 L 240 70 L 320 40 L 400 15 L 400 120 L 0 120 Z" fill="url(#chartGlow)" />
                        {/* Flow line */}
                        <motion.path
                          d="M 0 110 L 80 95 L 160 105 L 240 70 L 320 40 L 400 15"
                          fill="none"
                          stroke="#D4AF37"
                          strokeWidth="3.5"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.5, ease: 'easeInOut' }}
                        />
                        {/* Glowing points */}
                        <circle cx="240" cy="70" r="5" fill="#D4AF37" />
                        <circle cx="320" cy="40" r="5" fill="#D4AF37" />
                        <circle cx="400" cy="15" r="5" fill="#fff" stroke="#D4AF37" strokeWidth="2" />
                      </svg>
                      <div style={{ position: 'absolute', top: '10px', left: '10px', display: 'flex', gap: '1.2rem' }}>
                        <span style={{ fontSize: '0.6rem', color: '#444' }}>WK 1</span>
                        <span style={{ fontSize: '0.6rem', color: '#444' }}>WK 2</span>
                        <span style={{ fontSize: '0.6rem', color: '#444' }}>WK 3</span>
                        <span style={{ fontSize: '0.6rem', color: '#444' }}>WK 4</span>
                        <span style={{ fontSize: '0.6rem', color: '#D4AF37', fontWeight: 'bold' }}>LAUNCH</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeData.visual === 'social' && (
                  <div style={{
                    width: '100%', maxWidth: '460px', borderRadius: '16px', background: '#0a0a0a',
                    border: '1px solid rgba(212,175,55,0.2)', padding: '1.8rem',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.6)', display: 'flex', flexDirection: 'column', gap: '1.2rem'
                  }}>
                    {/* Founder Profile Mock */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{
                        width: '52px', height: '52px', borderRadius: '50%', background: 'linear-gradient(135deg, #D4AF37, #C5B358)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 'bold', fontSize: '1.25rem'
                      }}>
                        FX
                      </div>
                      <div>
                        <h5 style={{ color: '#fff', fontSize: '0.95rem', margin: 0, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                          Founder Profile <CheckCircle2 size={14} color="#D4AF37" />
                        </h5>
                        <span style={{ color: '#666', fontSize: '0.72rem' }}>LinkedIn Identity Index: Top 1% Rank</span>
                      </div>
                    </div>

                    {/* Social Growth Graph Bars */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#888', marginBottom: '0.2rem' }}>
                          <span>Before Strategy Integration</span>
                          <span>12.4K Impressions/mo</span>
                        </div>
                        <div style={{ width: '100%', height: '8px', background: '#1c1c1c', borderRadius: '100px', overflow: 'hidden' }}>
                          <div style={{ width: '12%', height: '100%', background: '#666', borderRadius: '100px' }} />
                        </div>
                      </div>
                      
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#fff', marginBottom: '0.2rem', fontWeight: 600 }}>
                          <span style={{ color: '#D4AF37' }}>After (Novelleyx Growth Engine)</span>
                          <span style={{ color: '#D4AF37' }}>4.2M Impressions/mo</span>
                        </div>
                        <div style={{ width: '100%', height: '8px', background: '#1c1c1c', borderRadius: '100px', overflow: 'hidden' }}>
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 1.2, ease: 'easeOut' }}
                            style={{ height: '100%', background: 'linear-gradient(90deg, #C5B358, #D4AF37)', borderRadius: '100px' }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Growth Indicators */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.8rem', textAlign: 'center', marginTop: '0.3rem' }}>
                      <div style={{ padding: '0.5rem', background: 'rgba(212,175,55,0.05)', borderRadius: '6px' }}>
                        <div style={{ fontSize: '0.6rem', color: '#888' }}>PROFILE VIEWS</div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#fff' }}>+412%</div>
                      </div>
                      <div style={{ padding: '0.5rem', background: 'rgba(212,175,55,0.05)', borderRadius: '6px' }}>
                        <div style={{ fontSize: '0.6rem', color: '#888' }}>INBOUND LEADS</div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#fff' }}>184 / mo</div>
                      </div>
                      <div style={{ padding: '0.5rem', background: 'rgba(212,175,55,0.05)', borderRadius: '6px' }}>
                        <div style={{ fontSize: '0.6rem', color: '#888' }}>CTR INDEX</div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#fff' }}>8.45%</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeData.visual === 'redesign' && (
                  <div style={{
                    width: '100%', maxWidth: '460px', borderRadius: '16px', background: '#0a0a0a',
                    border: '1px solid rgba(212,175,55,0.2)', padding: '1.5rem',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.6)', display: 'flex', flexDirection: 'column', gap: '1rem'
                  }}>
                    <span style={{ fontSize: '0.72rem', color: '#666', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Google PageSpeed Lighthouse Redesign Comparison
                    </span>

                    {/* Before Score Bar */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '0.8rem', background: 'rgba(255,95,86,0.03)', border: '1px solid rgba(255,95,86,0.15)', borderRadius: '10px' }}>
                      <div style={{
                        width: '42px', height: '42px', borderRadius: '50%', border: '3px solid #ff5f56',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff5f56', fontWeight: 'bold', fontSize: '0.85rem'
                      }}>
                        42
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '0.85rem', color: '#fff', fontWeight: 600 }}>Legacy WordPress Template</div>
                        <span style={{ fontSize: '0.72rem', color: '#888' }}>Load: 6.4s, high bounce, unoptimized assets</span>
                      </div>
                    </div>

                    {/* After Score Bar */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '0.8rem', background: 'rgba(39,201,63,0.03)', border: '1px solid rgba(39,201,63,0.15)', borderRadius: '10px' }}>
                      <motion.div
                        animate={{ scale: [1, 1.08, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        style={{
                          width: '42px', height: '42px', borderRadius: '50%', border: '3px solid #27c93f',
                          display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#27c93f', fontWeight: 'bold', fontSize: '0.85rem',
                          background: 'rgba(39,201,63,0.05)'
                        }}
                      >
                        98
                      </motion.div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '0.85rem', color: '#fff', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          Bespoke React Redesign <Zap size={13} color="#D4AF37" />
                        </div>
                        <span style={{ fontSize: '0.72rem', color: '#A8A8A8' }}>Load: 0.9s, fluid UX, SEO semantic tags</span>
                      </div>
                    </div>

                    {/* Visual Comparison Summary */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#666', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '0.8rem' }}>
                      <span>Interaction Cost: -78%</span>
                      <span>Total Assets Size: 840kb (was 6.2MB)</span>
                    </div>
                  </div>
                )}

                {activeData.visual === 'automation' && (
                  <div style={{
                    width: '100%', maxWidth: '460px', borderRadius: '16px', background: '#0a0a0a',
                    border: '1px solid rgba(212,175,55,0.2)', padding: '1.5rem',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.6)', position: 'relative', overflow: 'hidden'
                  }}>
                    {/* Pipeline flowchart mapping */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                      <span style={{ fontSize: '0.72rem', color: '#666', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                        Active Operational Outreach Loops
                      </span>

                      {/* Step 1 */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.6rem 0.8rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.04)' }}>
                        <div style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#D4AF37', background: 'rgba(212,175,55,0.1)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>01</div>
                        <div style={{ flex: 1, fontSize: '0.8rem', color: '#fff' }}>Leads arrive via Instagram / Webform</div>
                        <span style={{ fontSize: '0.65rem', color: '#666' }}>Webhooks Triggered</span>
                      </div>

                      {/* Connector Line */}
                      <div style={{ width: '2px', height: '15px', background: 'linear-gradient(180deg, #D4AF37, transparent)', marginLeft: '25px' }} />

                      {/* Step 2 */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.6rem 0.8rem', background: 'rgba(212,175,55,0.03)', borderRadius: '8px', border: '1px solid rgba(212,175,55,0.2)' }}>
                        <div style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#fff', background: '#D4AF37', padding: '0.2rem 0.5rem', borderRadius: '4px', color: '#000' }}>02</div>
                        <div style={{ flex: 1, fontSize: '0.8rem', color: '#fff', fontWeight: 600 }}>AI Lead Enrichment & Scoring Agent</div>
                        <span style={{ fontSize: '0.65rem', color: '#22c55e' }}>NLP Processing</span>
                      </div>

                      {/* Connector Line */}
                      <div style={{ width: '2px', height: '15px', background: 'linear-gradient(180deg, #D4AF37, transparent)', marginLeft: '25px' }} />

                      {/* Step 3 */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.6rem 0.8rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.04)' }}>
                        <div style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#D4AF37', background: 'rgba(212,175,55,0.1)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>03</div>
                        <div style={{ flex: 1, fontSize: '0.8rem', color: '#fff' }}>Slack Alert ping + Calendly Link dispatch</div>
                        <span style={{ fontSize: '0.65rem', color: '#888' }}>CRM Synced</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  )
}

export default CaseStudies
