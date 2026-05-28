import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Workflow, ArrowLeft, Zap, GitBranch, MessageSquare, Database, Bot, Settings, Cpu, Layers } from 'lucide-react'
import Navbar from '../../components/home/Navbar'
import Footer from '../../components/home/Footer'
import Hills from '../../components/glsl/Hills'

const features = [
  { icon: <GitBranch size={20} />, title: 'Visual Drag-and-Drop Builder', desc: 'Design complex automation flows with an intuitive node-based canvas. Connect triggers, conditions, AI processors, and output actions without writing a single line of code.' },
  { icon: <MessageSquare size={20} />, title: 'WhatsApp Qualifier Agents', desc: 'Pre-built WhatsApp nodes that auto-reply, triage leads by intent, verify identities, and route qualified prospects to your calendar — all in under 2 seconds.' },
  { icon: <Database size={20} />, title: 'CRM Sync Payloads', desc: 'Bi-directional sync with Salesforce, HubSpot, Zoho, and custom CRMs. Field mapping, deduplication, and conflict resolution handled automatically on every sync event.' },
  { icon: <Bot size={20} />, title: 'NLP Intent Mapping Nodes', desc: 'AI-powered nodes that classify incoming messages by intent using custom-trained NLP models. Route conversations based on sentiment, urgency, and topic detection.' },
  { icon: <Settings size={20} />, title: 'n8n Pipeline Integration', desc: 'Native integration with n8n workflow engine. Import existing n8n templates or export our workflows. Over 400+ pre-built connectors available out of the box.' },
  { icon: <Cpu size={20} />, title: 'Sub-Second Latency', desc: 'Edge-optimized execution engine ensures every workflow node processes in under 350ms. Real-time webhooks, no polling, no batch delays.' },
]

const workflowSteps = [
  { num: '01', title: 'Trigger Activation', desc: 'Workflows activate from webhooks, scheduled cron jobs, email receipts, WhatsApp messages, form submissions, or API calls.', color: '#22c55e' },
  { num: '02', title: 'AI Processing', desc: 'Messages pass through NLP classifiers, sentiment analyzers, and intent mappers. The AI determines the optimal routing path.', color: '#3b82f6' },
  { num: '03', title: 'Action Execution', desc: 'Based on AI classification, the workflow executes actions: CRM updates, email sequences, calendar bookings, Slack notifications, or custom API calls.', color: '#D4AF37' },
  { num: '04', title: 'Monitoring & Logging', desc: 'Every execution is logged with latency metrics, success rates, and error traces. Set up alerts for anomalies or failures.', color: '#a855f7' },
]

const AIWorkflowsCanvas = () => {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div style={{ backgroundColor: '#050505', minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, opacity: 0.45 }}>
        <Hills color="#D4AF37" />
      </div>
      <Navbar />

      <main style={{ flex: 1, position: 'relative', zIndex: 1, overflow: 'hidden' }}>

        {/* Hero */}
        <section style={{ padding: '160px 2rem 5rem' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <Link to="/#products" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#D4AF37', fontSize: '0.85rem', fontWeight: 600, marginBottom: '2rem', textDecoration: 'none' }}>
                <ArrowLeft size={16} /> Back to Products
              </Link>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Workflow size={24} color="#D4AF37" />
                </div>
                <span style={{ color: '#D4AF37', letterSpacing: '0.15em', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase' }}>Product</span>
              </div>
              <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: 800, color: '#fff', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                AI Workflows Canvas
              </h1>
              <p style={{ color: '#A8A8A8', fontSize: '1.15rem', lineHeight: 1.7, maxWidth: '750px' }}>
                A visual workflow builder that maps business triggers to intelligent automation pipelines. Connect WhatsApp qualifier agents, CRM sync payloads, NLP classifiers, and 400+ integrations — all from an intuitive drag-and-drop canvas with sub-second execution latency.
              </p>
            </motion.div>

            {/* Animated Workflow Visual */}
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
              style={{ marginTop: '3rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(212,175,55,0.2)', borderRadius: '20px', padding: '2rem', overflow: 'hidden' }}>
              <svg viewBox="0 0 600 200" fill="none" style={{ width: '100%' }}>
                {/* Paths */}
                {[
                  { d: 'M80,60 C150,60 150,100 220,100', delay: '0s' },
                  { d: 'M80,140 C150,140 150,100 220,100', delay: '0.5s' },
                  { d: 'M310,100 C380,100 380,55 450,55', delay: '1s' },
                  { d: 'M310,100 C380,100 380,145 450,145', delay: '1.2s' },
                ].map((p, i) => (
                  <g key={i}>
                    <path d={p.d} stroke="rgba(212,175,55,0.15)" strokeWidth="2" strokeDasharray="6 4" />
                    <circle r="4" fill="#D4AF37">
                      <animateMotion path={p.d} dur="3s" begin={p.delay} repeatCount="indefinite" />
                    </circle>
                  </g>
                ))}
                {/* Nodes */}
                {[
                  { x: 30, y: 42, w: 90, h: 36, label: 'WhatsApp', sub: 'Trigger', c: '#22c55e' },
                  { x: 30, y: 122, w: 90, h: 36, label: 'Email', sub: 'Webhook', c: '#3b82f6' },
                  { x: 200, y: 75, w: 110, h: 50, label: 'AI Processor', sub: 'NLP + Intent', c: '#D4AF37' },
                  { x: 430, y: 35, w: 100, h: 40, label: 'CRM Sync', sub: 'Salesforce', c: '#a855f7' },
                  { x: 430, y: 125, w: 100, h: 40, label: 'Calendar', sub: 'Booking', c: '#f59e0b' },
                ].map((n, i) => (
                  <g key={i}>
                    <rect x={n.x} y={n.y} width={n.w} height={n.h} rx="8" fill="rgba(255,255,255,0.03)" stroke={n.c} strokeWidth="1.5" />
                    <text x={n.x + n.w / 2} y={n.y + n.h / 2 - 4} textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700" fontFamily="Inter, sans-serif">{n.label}</text>
                    <text x={n.x + n.w / 2} y={n.y + n.h / 2 + 10} textAnchor="middle" fill={n.c} fontSize="7" fontFamily="Inter, sans-serif">{n.sub}</text>
                  </g>
                ))}
              </svg>
            </motion.div>
          </div>
        </section>

        {/* How It Works — Pipeline Steps */}
        <section style={{ padding: '6rem 2rem', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <span style={{ color: '#D4AF37', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' }}>Pipeline Flow</span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--h2)', fontWeight: 700, color: '#fff', marginTop: '0.8rem', marginBottom: '3rem' }}>
                How Workflows Execute
              </h2>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
              {workflowSteps.map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  style={{ padding: '2rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', borderLeft: `3px solid ${step.color}` }}>
                  <div style={{ color: step.color, fontSize: '1.6rem', fontWeight: 800, fontFamily: 'var(--font-heading)', marginBottom: '0.8rem' }}>{step.num}</div>
                  <h3 style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.8rem', fontFamily: 'var(--font-heading)' }}>{step.title}</h3>
                  <p style={{ color: '#A0A0A0', fontSize: '0.88rem', lineHeight: 1.7 }}>{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section style={{ padding: '6rem 2rem', background: 'rgba(212,175,55,0.01)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <span style={{ color: '#D4AF37', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' }}>Capabilities</span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--h2)', fontWeight: 700, color: '#fff', marginTop: '0.8rem', marginBottom: '3rem' }}>
                What the Canvas Can Do
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

        {/* CTA */}
        <section style={{ padding: '5rem 2rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: 700, color: '#fff', marginBottom: '1.5rem' }}>
              Automate Your Business Operations
            </h2>
            <p style={{ color: '#888', marginBottom: '2.5rem', lineHeight: 1.7 }}>Deploy custom AI workflows tailored to your exact business needs.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://wa.me/917075853225?text=Hello%20NovelleyX%2C%20I%27m%20interested%20in%20AI%20Workflows%20Canvas" target="_blank" rel="noopener noreferrer" className="cta-gold-glow" style={{ padding: '0.9rem 2rem', borderRadius: '8px', fontSize: '0.95rem', fontWeight: 700, textDecoration: 'none' }}>Get Started via WhatsApp</a>
              <a href="mailto:novelleyx@gmail.com?subject=AI%20Workflows%20Canvas%20Inquiry" style={{ padding: '0.9rem 2rem', border: '1px solid rgba(212,175,55,0.4)', color: '#D4AF37', borderRadius: '8px', fontSize: '0.95rem', fontWeight: 700, textDecoration: 'none', transition: 'all 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(212,175,55,0.08)'} onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>Email Team</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default AIWorkflowsCanvas
