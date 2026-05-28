import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShieldCheck, ArrowLeft, Zap, Database, Lock, Terminal, Globe, Settings, Key, Layers } from 'lucide-react'
import Navbar from '../../components/home/Navbar'
import Footer from '../../components/home/Footer'
import Hills from '../../components/glsl/Hills'

const features = [
  { icon: <Database size={20} />, title: 'Database Gateway', desc: 'Secure read/write access to production and staging databases with query logging, rate limiting, and automatic backup triggers. Supports PostgreSQL, MongoDB, MySQL, and Redis.' },
  { icon: <Lock size={20} />, title: 'Role-Based SDK Access', desc: 'Define granular permission tiers for team members. Admin, Developer, Analyst, and Viewer roles each get precisely scoped SDK tokens with automatic expiration and rotation.' },
  { icon: <Terminal size={20} />, title: 'CLI Management Tools', desc: 'Full command-line toolkit for database migrations, SMTP configurations, scraper parameter tuning, and deployment management. Scriptable, cron-compatible, and SSH-ready.' },
  { icon: <Globe size={20} />, title: 'SMTP Domain Configuration', desc: 'Manage rotated sending domains, warm-up schedules, SPF/DKIM/DMARC records, and bounce handling from a single interface. Monitor deliverability scores in real-time.' },
  { icon: <Settings size={20} />, title: 'Scraper Parameter Control', desc: 'Configure proxy rotation, request throttling, user-agent cycling, and CAPTCHA bypass parameters for each scraping pipeline. A/B test extraction rules and selectors.' },
  { icon: <Key size={20} />, title: 'API Key Management', desc: 'Generate, rotate, and revoke API keys with per-key rate limits, IP whitelisting, and usage analytics. Monitor key usage patterns and detect anomalies automatically.' },
]

const consoleLogs = [
  { cmd: '$ nx-cli auth --token ****', color: '#22c55e' },
  { cmd: '✓ Authenticated as admin@novelleyx', color: '#D4AF37' },
  { cmd: '$ nx-cli db:status --env=production', color: '#22c55e' },
  { cmd: '→ PostgreSQL: Online | 142 active connections', color: 'rgba(255,255,255,0.6)' },
  { cmd: '→ MongoDB: Online | 3.2TB storage used', color: 'rgba(255,255,255,0.6)' },
  { cmd: '→ Redis: Online | 99.97% cache hit ratio', color: 'rgba(255,255,255,0.6)' },
  { cmd: '$ nx-cli smtp:rotate --domain-count=5', color: '#22c55e' },
  { cmd: '✓ 5 domains rotated. DKIM valid. SPF passing.', color: '#D4AF37' },
  { cmd: '$ nx-cli scraper:config --pipeline=linkedin', color: '#22c55e' },
  { cmd: '→ Proxy pool: 1,240 active | Throttle: 2.5s', color: 'rgba(255,255,255,0.6)' },
  { cmd: '→ User-agents: 380 rotated | CAPTCHA: bypass-v3', color: 'rgba(255,255,255,0.6)' },
  { cmd: '✓ Pipeline configuration updated successfully.', color: '#D4AF37' },
]

const securityFeatures = [
  { title: 'End-to-End Encryption', desc: 'All data in transit encrypted with TLS 1.3. Data at rest encrypted with AES-256. Zero-knowledge architecture for sensitive credentials.' },
  { title: 'SOC 2 Compliance Ready', desc: 'Built-in controls for access management, change tracking, and incident response. Audit logs exportable for compliance reviews.' },
  { title: 'IP Whitelisting', desc: 'Restrict console access to approved IP ranges. Automatic lockout after failed authentication attempts with admin notification.' },
  { title: 'Session Management', desc: 'Configurable session timeouts, concurrent session limits, and forced re-authentication for sensitive operations.' },
]

const InternalConsole = () => {
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
                  <ShieldCheck size={24} color="#D4AF37" />
                </div>
                <span style={{ color: '#D4AF37', letterSpacing: '0.15em', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase' }}>Product</span>
              </div>
              <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: 800, color: '#fff', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                Internal Systems Console
              </h1>
              <p style={{ color: '#A8A8A8', fontSize: '1.15rem', lineHeight: 1.7, maxWidth: '750px' }}>
                A secure corporate backend gateway providing full database access, scraper parameter tuning, SMTP domain management, and role-based SDK configurations. The command center for your entire NovelleyX infrastructure.
              </p>
            </motion.div>

            {/* Terminal Preview */}
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
              style={{ marginTop: '3rem', background: '#0a0a0a', border: '1px solid rgba(212,175,55,0.2)', borderRadius: '16px', overflow: 'hidden' }}>
              {/* Terminal Title Bar */}
              <div style={{ padding: '0.8rem 1.2rem', background: 'rgba(212,175,55,0.04)', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FF5F57' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FFBD2E' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#28CA41' }} />
                </div>
                <span style={{ color: 'rgba(212,175,55,0.5)', fontSize: '0.75rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>novelleyx-console — admin@nx-prod</span>
              </div>
              {/* Terminal Body */}
              <div style={{ padding: '1.5rem', fontFamily: "'Courier New', monospace", fontSize: '0.82rem', lineHeight: 1.9 }}>
                {consoleLogs.map((log, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.15 }}
                    style={{ color: log.color }}>
                    {log.cmd}
                  </motion.div>
                ))}
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}
                  style={{ color: '#D4AF37', display: 'inline-block' }}>
                  $ <span style={{ animation: 'psBlink 1s step-end infinite', display: 'inline-block', width: '8px', height: '14px', background: '#D4AF37', verticalAlign: 'middle' }} />
                </motion.span>
              </div>
            </motion.div>
          </div>
        </section>

        <style>{`@keyframes psBlink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }`}</style>

        {/* Features */}
        <section style={{ padding: '6rem 2rem', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <span style={{ color: '#D4AF37', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' }}>Console Modules</span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--h2)', fontWeight: 700, color: '#fff', marginTop: '0.8rem', marginBottom: '3rem' }}>
                Complete Backend Control
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

        {/* Security */}
        <section style={{ padding: '6rem 2rem', background: 'rgba(212,175,55,0.01)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <span style={{ color: '#D4AF37', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' }}>Security</span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--h2)', fontWeight: 700, color: '#fff', marginTop: '0.8rem', marginBottom: '3rem' }}>
                Enterprise-Grade Security
              </h2>
            </motion.div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {securityFeatures.map((sf, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  style={{ padding: '2rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(212,175,55,0.1)', borderRadius: '14px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(212,175,55,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    <Lock size={16} color="#D4AF37" />
                  </div>
                  <h3 style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, marginBottom: '0.8rem', fontFamily: 'var(--font-heading)' }}>{sf.title}</h3>
                  <p style={{ color: '#A0A0A0', fontSize: '0.88rem', lineHeight: 1.7 }}>{sf.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '5rem 2rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: 700, color: '#fff', marginBottom: '1.5rem' }}>
              Take Control of Your Infrastructure
            </h2>
            <p style={{ color: '#888', marginBottom: '2.5rem', lineHeight: 1.7 }}>Get secure access to the command center that powers your operations.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://wa.me/917075853225?text=Hello%20NovelleyX%2C%20I%27m%20interested%20in%20the%20Internal%20Systems%20Console" target="_blank" rel="noopener noreferrer" className="cta-gold-glow" style={{ padding: '0.9rem 2rem', borderRadius: '8px', fontSize: '0.95rem', fontWeight: 700, textDecoration: 'none' }}>Get Started via WhatsApp</a>
              <a href="mailto:novelleyx@gmail.com?subject=Internal%20Console%20Inquiry" style={{ padding: '0.9rem 2rem', border: '1px solid rgba(212,175,55,0.4)', color: '#D4AF37', borderRadius: '8px', fontSize: '0.95rem', fontWeight: 700, textDecoration: 'none', transition: 'all 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(212,175,55,0.08)'} onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>Email Team</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default InternalConsole
