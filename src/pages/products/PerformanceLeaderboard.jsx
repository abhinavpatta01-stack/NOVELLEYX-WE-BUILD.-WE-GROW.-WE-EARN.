import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Trophy, ArrowLeft, Zap, Target, Users, BarChart3, Award, TrendingUp, Star, Layers } from 'lucide-react'
import Navbar from '../../components/home/Navbar'
import Footer from '../../components/home/Footer'
import Hills from '../../components/glsl/Hills'

const features = [
  { icon: <BarChart3 size={20} />, title: 'Real-Time CTR Analytics', desc: 'Track click-through rates across outreach campaigns, landing pages, and email sequences. Compare team and individual performance with live percentage updates.' },
  { icon: <Target size={20} />, title: 'Conversion Tracking', desc: 'Monitor every stage of your sales pipeline from lead to close. The leaderboard ranks team members by actual conversions, not just activity volume.' },
  { icon: <Award size={20} />, title: 'Gamified Team KPIs', desc: 'Turn performance metrics into a competitive game. Badges, streaks, level-ups, and weekly awards keep teams motivated and engaged with their targets.' },
  { icon: <TrendingUp size={20} />, title: 'Sales Yield Forecasting', desc: 'AI-powered forecasting models predict monthly and quarterly revenue based on current pipeline velocity, historical close rates, and seasonal patterns.' },
  { icon: <Users size={20} />, title: 'Team & Individual Views', desc: 'Switch between team aggregate views and individual deep-dives. Managers see team rankings; reps see their personal stats, goals, and improvement areas.' },
  { icon: <Star size={20} />, title: 'Custom Scoring Rules', desc: 'Define your own scoring algorithms. Weight different actions (calls, emails, meetings, closes) differently based on your business priorities and sales methodology.' },
]

const leaderboardData = [
  { rank: 1, name: 'Alpha Division', score: '98.4%', deals: 47, revenue: '$284K', trend: '+12%' },
  { rank: 2, name: 'Sigma Unit', score: '91.2%', deals: 38, revenue: '$221K', trend: '+8%' },
  { rank: 3, name: 'Delta Operations', score: '84.7%', deals: 31, revenue: '$178K', trend: '+5%' },
  { rank: 4, name: 'Echo Squad', score: '76.1%', deals: 24, revenue: '$142K', trend: '+3%' },
  { rank: 5, name: 'Omega Team', score: '69.3%', deals: 19, revenue: '$98K', trend: '+1%' },
]

const PerformanceLeaderboard = () => {
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
                  <Trophy size={24} color="#D4AF37" />
                </div>
                <span style={{ color: '#D4AF37', letterSpacing: '0.15em', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase' }}>Product</span>
              </div>
              <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: 800, color: '#fff', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                Performance Leaderboard
              </h1>
              <p style={{ color: '#A8A8A8', fontSize: '1.15rem', lineHeight: 1.7, maxWidth: '750px' }}>
                Real-time leaderboard analytics that compile outreach CTRs, closed conversions, and team sales yields into competitive, gamified rankings. Drive performance with transparency, recognition, and data-driven competition.
              </p>
            </motion.div>

            {/* Live Leaderboard Preview */}
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
              style={{ marginTop: '3rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(212,175,55,0.2)', borderRadius: '20px', overflow: 'hidden' }}>
              {/* Header */}
              <div style={{ padding: '1.2rem 2rem', background: 'rgba(212,175,55,0.04)', borderBottom: '1px solid rgba(212,175,55,0.1)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Trophy size={16} color="#D4AF37" />
                <span style={{ color: '#D4AF37', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Live Rankings — Q4 2025</span>
              </div>
              {/* Table Header */}
              <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr 80px 80px 90px 70px', padding: '0.8rem 2rem', borderBottom: '1px solid rgba(255,255,255,0.04)', gap: '0.5rem' }}>
                {['Rank', 'Team', 'Score', 'Deals', 'Revenue', 'Trend'].map((h, i) => (
                  <span key={i} style={{ color: '#666', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{h}</span>
                ))}
              </div>
              {/* Rows */}
              {leaderboardData.map((row, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.12 }}
                  style={{ display: 'grid', gridTemplateColumns: '60px 1fr 80px 80px 90px 70px', padding: '1rem 2rem', borderBottom: '1px solid rgba(255,255,255,0.03)', alignItems: 'center', gap: '0.5rem', background: i === 0 ? 'rgba(212,175,55,0.03)' : 'transparent' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span style={{ color: i === 0 ? '#D4AF37' : '#888', fontWeight: 800, fontSize: '0.95rem' }}>#{row.rank}</span>
                    {i === 0 && <span style={{ fontSize: '1rem' }}>🏆</span>}
                  </div>
                  <span style={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem' }}>{row.name}</span>
                  <span style={{ color: '#D4AF37', fontWeight: 700, fontSize: '0.88rem' }}>{row.score}</span>
                  <span style={{ color: '#ccc', fontSize: '0.85rem' }}>{row.deals}</span>
                  <span style={{ color: '#fff', fontWeight: 600, fontSize: '0.85rem' }}>{row.revenue}</span>
                  <span style={{ color: '#22c55e', fontWeight: 600, fontSize: '0.8rem' }}>{row.trend}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section style={{ padding: '6rem 2rem', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <span style={{ color: '#D4AF37', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' }}>Capabilities</span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--h2)', fontWeight: 700, color: '#fff', marginTop: '0.8rem', marginBottom: '3rem' }}>
                Built for Performance-Driven Teams
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
        <section style={{ padding: '5rem 2rem', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: 700, color: '#fff', marginBottom: '1.5rem' }}>
              Gamify Your Team's Performance
            </h2>
            <p style={{ color: '#888', marginBottom: '2.5rem', lineHeight: 1.7 }}>Deploy leaderboards that motivate your team and drive measurable results.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://wa.me/917075853225?text=Hello%20NovelleyX%2C%20I%27m%20interested%20in%20Performance%20Leaderboard" target="_blank" rel="noopener noreferrer" className="cta-gold-glow" style={{ padding: '0.9rem 2rem', borderRadius: '8px', fontSize: '0.95rem', fontWeight: 700, textDecoration: 'none' }}>Get Started via WhatsApp</a>
              <a href="mailto:novelleyx@gmail.com?subject=Performance%20Leaderboard%20Inquiry" style={{ padding: '0.9rem 2rem', border: '1px solid rgba(212,175,55,0.4)', color: '#D4AF37', borderRadius: '8px', fontSize: '0.95rem', fontWeight: 700, textDecoration: 'none', transition: 'all 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(212,175,55,0.08)'} onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>Email Team</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default PerformanceLeaderboard
