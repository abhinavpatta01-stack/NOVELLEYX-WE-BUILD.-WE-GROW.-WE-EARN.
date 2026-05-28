import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShoppingBag, ArrowLeft, Zap, Key, Code, FileText, Globe, Cpu, Search, Layers } from 'lucide-react'
import Navbar from '../../components/home/Navbar'
import Footer from '../../components/home/Footer'
import Hills from '../../components/glsl/Hills'

const connectors = [
  { icon: <Code size={20} />, title: 'Web Scraper Engine', desc: 'Enterprise-grade scraping pipelines with rotating proxies, CAPTCHA bypass, and anti-detection measures. Extract structured data from any website at scale.', tag: 'Scraping' },
  { icon: <Cpu size={20} />, title: 'NLP Processing Pipeline', desc: 'Pre-trained and custom NLP models for sentiment analysis, entity extraction, text classification, and language translation across 50+ languages.', tag: 'AI/ML' },
  { icon: <Search size={20} />, title: 'Vision & OCR Module', desc: 'Image recognition, document OCR, and visual content analysis. Extract text from scanned documents, receipts, invoices, and handwritten notes.', tag: 'Computer Vision' },
  { icon: <Globe size={20} />, title: 'SMTP Rotation Hub', desc: 'Managed SMTP infrastructure with domain rotation, IP warming, SPF/DKIM/DMARC compliance. Send up to 50,000 cold emails per day with 99%+ deliverability.', tag: 'Email' },
  { icon: <FileText size={20} />, title: 'Document Processor', desc: 'Parse, transform, and generate documents in PDF, DOCX, XLSX, and HTML formats. Merge templates, extract data tables, and batch-process invoices.', tag: 'Documents' },
  { icon: <Key size={20} />, title: 'Custom API Builder', desc: 'Build and deploy custom REST APIs in minutes. Define endpoints, authentication, rate limits, and response schemas with a visual API designer.', tag: 'Developer' },
]

const stats = [
  { value: '400+', label: 'Connectors', desc: 'Pre-built integrations' },
  { value: '99.9%', label: 'Uptime', desc: 'API availability' },
  { value: '<50ms', label: 'Response', desc: 'Average API latency' },
  { value: '12', label: 'Regions', desc: 'Global edge deployment' },
]

const EcosystemMarketplace = () => {
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
                  <ShoppingBag size={24} color="#D4AF37" />
                </div>
                <span style={{ color: '#D4AF37', letterSpacing: '0.15em', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase' }}>Product</span>
              </div>
              <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: 800, color: '#fff', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                Ecosystem Marketplace
              </h1>
              <p style={{ color: '#A8A8A8', fontSize: '1.15rem', lineHeight: 1.7, maxWidth: '750px' }}>
                An API-native catalog of pre-built B2B automation connectors, document processors, scraping engines, and custom AI modules. Deploy any connector with a single API key — no complex integration work required.
              </p>
            </motion.div>

            {/* Animated Marketplace Grid */}
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
              style={{ marginTop: '3rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(212,175,55,0.2)', borderRadius: '20px', padding: '2.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
                {['Scraper API', 'NLP Engine', 'Vision OCR', 'SMTP Router', 'Doc Parser', 'Custom Build', 'WhatsApp', 'Slack Bot', 'CRM Sync'].map((name, i) => (
                  <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 + i * 0.08 }}
                    style={{ padding: '1.2rem', background: 'rgba(212,175,55,0.03)', border: '1px solid rgba(212,175,55,0.15)', borderRadius: '12px', textAlign: 'center', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '8px', right: '8px', width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 6px rgba(34,197,94,0.5)' }} />
                    <div style={{ color: '#D4AF37', fontSize: '0.85rem', fontWeight: 700 }}>{name}</div>
                    <div style={{ color: '#666', fontSize: '0.7rem', marginTop: '0.3rem' }}>v2.{i + 1}.0</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section style={{ padding: '4rem 2rem', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem' }}>
            {stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(212,175,55,0.03)', border: '1px solid rgba(212,175,55,0.12)', borderRadius: '14px' }}>
                <div style={{ color: '#D4AF37', fontSize: '1.8rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>{s.value}</div>
                <div style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 700, marginTop: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</div>
                <div style={{ color: '#666', fontSize: '0.75rem', marginTop: '0.2rem' }}>{s.desc}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Connectors */}
        <section style={{ padding: '6rem 2rem' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <span style={{ color: '#D4AF37', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' }}>Available Modules</span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--h2)', fontWeight: 700, color: '#fff', marginTop: '0.8rem', marginBottom: '3rem' }}>
                Featured Connectors
              </h2>
            </motion.div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {connectors.map((c, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  style={{ padding: '2rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', transition: 'border-color 0.3s' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(212,175,55,0.3)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <div style={{ color: '#D4AF37' }}>{c.icon}</div>
                    <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#D4AF37', background: 'rgba(212,175,55,0.08)', padding: '0.2rem 0.6rem', borderRadius: '100px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{c.tag}</span>
                  </div>
                  <h3 style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.8rem', fontFamily: 'var(--font-heading)' }}>{c.title}</h3>
                  <p style={{ color: '#A0A0A0', fontSize: '0.9rem', lineHeight: 1.7 }}>{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '5rem 2rem', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: 700, color: '#fff', marginBottom: '1.5rem' }}>
              Deploy Your First Connector Today
            </h2>
            <p style={{ color: '#888', marginBottom: '2.5rem', lineHeight: 1.7 }}>Get API access to our entire ecosystem with a single integration.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://wa.me/917075853225?text=Hello%20NovelleyX%2C%20I%27m%20interested%20in%20the%20Ecosystem%20Marketplace" target="_blank" rel="noopener noreferrer" className="cta-gold-glow" style={{ padding: '0.9rem 2rem', borderRadius: '8px', fontSize: '0.95rem', fontWeight: 700, textDecoration: 'none' }}>Get Started via WhatsApp</a>
              <a href="mailto:novelleyx@gmail.com?subject=Ecosystem%20Marketplace%20Inquiry" style={{ padding: '0.9rem 2rem', border: '1px solid rgba(212,175,55,0.4)', color: '#D4AF37', borderRadius: '8px', fontSize: '0.95rem', fontWeight: 700, textDecoration: 'none', transition: 'all 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(212,175,55,0.08)'} onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>Email Team</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default EcosystemMarketplace
