import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BarChart3, ArrowLeft, Zap, DollarSign, Users, TrendingUp, PieChart, Shield, Clock, Layers } from 'lucide-react'
import Navbar from '../../components/home/Navbar'
import Footer from '../../components/home/Footer'
import Hills from '../../components/glsl/Hills'

const features = [
  { icon: <DollarSign size={20} />, title: 'Automated Commission Splits', desc: 'Configure tiered payout rules per partner, affiliate, or team member. The dashboard auto-calculates splits in real-time based on MRR, deal size, and retention metrics.' },
  { icon: <TrendingUp size={20} />, title: 'Revenue Index Tracking', desc: 'Track recurring revenue streams across monthly, quarterly, and annual cycles. Visual trend lines highlight growth patterns, churn risk, and projected revenue runway.' },
  { icon: <Users size={20} />, title: 'Multi-Tenant Architecture', desc: 'Each client, partner, or team operates within their own isolated tenant. Role-based dashboards ensure data privacy while allowing cross-tenant aggregate views for admins.' },
  { icon: <PieChart size={20} />, title: 'Transaction Ledger', desc: 'Every financial event is logged with cryptographic timestamps. Filter by date, source, client, or category. Export as CSV, PDF, or push directly to accounting systems.' },
  { icon: <Shield size={20} />, title: 'Compliance & Audit Trails', desc: 'Built-in compliance modules for GST, tax withholding, and international payout regulations. Every transaction maintains a tamper-proof audit trail for legal verification.' },
  { icon: <Clock size={20} />, title: 'Real-Time Sync', desc: 'Webhook-driven architecture ensures dashboard data updates within milliseconds of a transaction. No batch processing delays — every metric is always current.' },
]

const specs = [
  { label: 'Latency', value: '<200ms', desc: 'Dashboard load time' },
  { label: 'Tenants', value: 'Unlimited', desc: 'Scalable isolation' },
  { label: 'Export', value: '6 Formats', desc: 'CSV, PDF, JSON, XML, XLSX, API' },
  { label: 'Uptime', value: '99.98%', desc: 'SLA guaranteed' },
]

const useCases = [
  { title: 'Agency Revenue Tracking', desc: 'Digital agencies managing multiple client accounts can track per-client revenue, team commissions, and project profitability in a single unified view.' },
  { title: 'Affiliate Program Management', desc: 'Monitor affiliate performance, calculate tiered commissions automatically, and generate payout reports for hundreds of partners simultaneously.' },
  { title: 'SaaS Subscription Analytics', desc: 'Track MRR, ARR, churn rate, and expansion revenue across subscription tiers. Identify upsell opportunities with predictive revenue modeling.' },
  { title: 'Freelancer Payout Automation', desc: 'Manage freelancer contracts, milestone payments, and hourly billing with automated invoice generation and payment scheduling.' },
]

const EarningDashboard = () => {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div style={{ backgroundColor: '#050505', minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, opacity: 0.45 }}>
        <Hills color="#D4AF37" />
      </div>
      <Navbar />

      <main style={{ flex: 1, position: 'relative', zIndex: 1, overflow: 'hidden' }}>

        {/* Hero Section */}
        <section style={{ padding: '160px 2rem 5rem', position: 'relative' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <Link to="/#products" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#D4AF37', fontSize: '0.85rem', fontWeight: 600, marginBottom: '2rem', textDecoration: 'none' }}>
                <ArrowLeft size={16} /> Back to Products
              </Link>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <BarChart3 size={24} color="#D4AF37" />
                </div>
                <span style={{ color: '#D4AF37', letterSpacing: '0.15em', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase' }}>Product</span>
              </div>

              <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: 800, color: '#fff', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                Earning Dashboard
              </h1>
              <p style={{ color: '#A8A8A8', fontSize: '1.15rem', lineHeight: 1.7, maxWidth: '750px' }}>
                A luxury multi-tenant client console that provides complete financial visibility — from automated commission splits and transactional ledgers to real-time recurring revenue indexes. Built for agencies, SaaS companies, and enterprise teams who need absolute clarity on every dollar flowing through their business.
              </p>
            </motion.div>

            {/* Animated Dashboard Visual */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ marginTop: '3rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(212,175,55,0.2)', borderRadius: '20px', padding: '2rem', overflow: 'hidden' }}
            >
              <svg viewBox="0 0 600 220" fill="none" style={{ width: '100%' }}>
                {/* Grid */}
                {[0,1,2,3,4].map(i => (
                  <line key={i} x1="40" y1={30 + i * 40} x2="580" y2={30 + i * 40} stroke="rgba(212,175,55,0.06)" strokeWidth="1" />
                ))}
                {/* Y labels */}
                {['$100k','$75k','$50k','$25k','$0'].map((l,i) => (
                  <text key={i} x="5" y={35 + i * 40} fill="rgba(212,175,55,0.3)" fontSize="9" fontFamily="Inter, sans-serif">{l}</text>
                ))}
                {/* Bars */}
                {[
                  { x: 80, h: 130 }, { x: 130, h: 85 }, { x: 180, h: 145 }, { x: 230, h: 60 },
                  { x: 280, h: 110 }, { x: 330, h: 155 }, { x: 380, h: 90 }, { x: 430, h: 120 },
                  { x: 480, h: 75 }, { x: 530, h: 140 },
                ].map((b, i) => (
                  <g key={i}>
                    <rect x={b.x} y={190 - b.h} width="28" height={b.h} rx="4" fill="url(#pgBarGrad)" opacity="0.9">
                      <animate attributeName="height" from="0" to={b.h} dur="1.2s" begin={`${i * 0.1}s`} fill="freeze" />
                      <animate attributeName="y" from="190" to={190 - b.h} dur="1.2s" begin={`${i * 0.1}s`} fill="freeze" />
                    </rect>
                    <circle cx={b.x + 14} cy={190 - b.h - 6} r="3.5" fill="#D4AF37">
                      <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
                    </circle>
                  </g>
                ))}
                {/* Trend line */}
                <polyline points="94,64 144,108 194,50 244,133 294,83 344,40 394,103 444,73 494,118 544,55"
                  stroke="#D4AF37" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"
                  strokeDasharray="500" strokeDashoffset="500">
                  <animate attributeName="stroke-dashoffset" to="0" dur="2.5s" begin="0.5s" fill="freeze" />
                </polyline>
                <defs>
                  <linearGradient id="pgBarGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.08" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </div>
        </section>

        {/* Technical Specs Strip */}
        <section style={{ padding: '4rem 2rem', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem' }}>
            {specs.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(212,175,55,0.03)', border: '1px solid rgba(212,175,55,0.12)', borderRadius: '14px' }}>
                <div style={{ color: '#D4AF37', fontSize: '1.8rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>{s.value}</div>
                <div style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 700, marginTop: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</div>
                <div style={{ color: '#666', fontSize: '0.75rem', marginTop: '0.2rem' }}>{s.desc}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Features Grid */}
        <section style={{ padding: '6rem 2rem' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <span style={{ color: '#D4AF37', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' }}>Core Capabilities</span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--h2)', fontWeight: 700, color: '#fff', marginTop: '0.8rem', marginBottom: '3rem' }}>
                What Powers the Dashboard
              </h2>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {features.map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  style={{ padding: '2rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', transition: 'border-color 0.3s' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(212,175,55,0.3)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}>
                  <div style={{ color: '#D4AF37', marginBottom: '1rem' }}>{f.icon}</div>
                  <h3 style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.8rem', fontFamily: 'var(--font-heading)' }}>{f.title}</h3>
                  <p style={{ color: '#A0A0A0', fontSize: '0.9rem', lineHeight: 1.7 }}>{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section style={{ padding: '6rem 2rem', background: 'rgba(212,175,55,0.01)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <span style={{ color: '#D4AF37', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' }}>Applications</span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--h2)', fontWeight: 700, color: '#fff', marginTop: '0.8rem', marginBottom: '3rem' }}>
                Who This Is Built For
              </h2>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {useCases.map((uc, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  style={{ padding: '2rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(212,175,55,0.1)', borderRadius: '14px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(212,175,55,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    <Layers size={16} color="#D4AF37" />
                  </div>
                  <h3 style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, marginBottom: '0.8rem', fontFamily: 'var(--font-heading)' }}>{uc.title}</h3>
                  <p style={{ color: '#A0A0A0', fontSize: '0.88rem', lineHeight: 1.7 }}>{uc.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '5rem 2rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: 700, color: '#fff', marginBottom: '1.5rem' }}>
              Ready to Deploy Your Dashboard?
            </h2>
            <p style={{ color: '#888', marginBottom: '2.5rem', lineHeight: 1.7 }}>
              Get a fully configured Earning Dashboard for your business in under 7 days.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://wa.me/917075853225?text=Hello%20NovelleyX%2C%20I%27m%20interested%20in%20the%20Earning%20Dashboard%20product"
                target="_blank" rel="noopener noreferrer" className="cta-gold-glow"
                style={{ padding: '0.9rem 2rem', borderRadius: '8px', fontSize: '0.95rem', fontWeight: 700, textDecoration: 'none' }}>
                Get Started via WhatsApp
              </a>
              <a href="mailto:novelleyx@gmail.com?subject=Earning%20Dashboard%20Inquiry"
                style={{ padding: '0.9rem 2rem', border: '1px solid rgba(212,175,55,0.4)', color: '#D4AF37', borderRadius: '8px', fontSize: '0.95rem', fontWeight: 700, textDecoration: 'none', transition: 'all 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(212,175,55,0.08)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                Email Team
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default EarningDashboard
