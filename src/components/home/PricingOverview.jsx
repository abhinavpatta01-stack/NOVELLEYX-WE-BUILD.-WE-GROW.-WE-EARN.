import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { GraduationCap, Building2, Check, ArrowRight } from 'lucide-react'

const studentTiers = [
  {
    phase: 'Phase 01',
    name: 'Starter Plan',
    price: '299 — 499',
    period: '/month',
    target: 'Portfolio, resume, and algorithmic visibility for freshers.',
    features: [
      'Digital Portfolio Engine',
      'Professional Resume Polishing',
      'LinkedIn SEO Optimization',
      'Basic Analytics Dashboard',
      '24/7 Identity Support'
    ]
  },
  {
    phase: 'Phase 02',
    name: 'Growth Plan',
    price: '999 — 1,999',
    period: '/month',
    target: 'Aggressive role capture with recruiter outreach systems.',
    popular: true,
    features: [
      'Custom ATS Keyword Integration',
      'Tailored Resume Engineering',
      'Interview-Ready Profile Setup',
      'Direct Recruiter Outreach Strategy',
      'Priority Algorithm Propagation'
    ]
  },
  {
    phase: 'Phase 03',
    name: 'Premium Plan',
    price: '18,000+',
    period: '/3 months',
    target: 'Full personal-brand architecture for market dominance.',
    features: [
      'Full Brand Architecture',
      'Managed LinkedIn Content Stream',
      'SEO Portfolio Ranking (Top 1%)',
      'Dedicated Enterprise Hosting',
      'Executive Presence Engineering'
    ]
  }
]

const businessTiers = [
  {
    name: 'Identity Inflow',
    price: '20,000',
    period: '/month',
    target: 'For creators & solo founders getting started.',
    features: [
      '1 Active task request at a time',
      '48-Hour rapid turnaround delivery',
      'Landing pages & UI mockups',
      'Social media promotional assets',
      'Unlimited standard revisions'
    ]
  },
  {
    name: 'Velocity Engine',
    price: '60,000',
    period: '/month',
    target: 'For growing scaleups & brands ready to dominate.',
    popular: true,
    features: [
      '2 Active development queues',
      'Bespoke Webflow / React systems',
      'Monthly technical SEO sweeps',
      '24-Hour emergency priority support',
      'CRM & marketing integrations'
    ]
  },
  {
    name: 'Enterprise Dominance',
    price: '1,50,000',
    period: '/month',
    target: 'For industry authorities — unlimited scale.',
    features: [
      'Unlimited parallel dev pipelines',
      'Custom AI integrations & chatbots',
      'High-volume ad asset production',
      'Dedicated Slack communication hub',
      'On-demand strategic consulting'
    ]
  }
]

const TierCard = ({ tier, accent, accentBg, idx }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: idx * 0.12 }}
      style={{
        background: tier.popular
          ? `linear-gradient(180deg, ${accentBg} 0%, rgba(10,10,10,0.95) 100%)`
          : 'rgba(255,255,255,0.02)',
        border: tier.popular ? `1px solid ${accent}` : '1px solid rgba(255,255,255,0.06)',
        borderRadius: '20px',
        padding: '2.5rem 2rem',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease'
      }}
      className="pricing-overview-card"
    >
      {tier.popular && (
        <div style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)',
          background: accent, color: '#000', padding: '0.3rem 1rem',
          borderRadius: '100px', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em'
        }}>
          MOST POPULAR
        </div>
      )}

      {tier.phase && (
        <div style={{
          fontSize: 'var(--caption)', fontWeight: 600,
          letterSpacing: 'var(--caption-tracking)', color: accent,
          textTransform: 'uppercase', marginBottom: '0.5rem',
          marginTop: tier.popular ? '0.5rem' : 0
        }}>
          {tier.phase}
        </div>
      )}

      <h3 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: 'var(--h3)', fontWeight: 'var(--h3-weight)',
        color: '#fff', marginBottom: '0.5rem'
      }}>
        {tier.name}
      </h3>

      <p style={{
        fontSize: '0.88rem', color: '#888', lineHeight: 1.5,
        marginBottom: '1.5rem', minHeight: '40px'
      }}>
        {tier.target}
      </p>

      <div style={{ marginBottom: '1.5rem' }}>
        <span style={{ fontSize: '0.95rem', color: accent, fontWeight: 600 }}>₹</span>
        <span style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-heading)' }}>
          {tier.price}
        </span>
        <span style={{ color: '#666', fontSize: '0.85rem', marginLeft: '0.3rem' }}>{tier.period}</span>
      </div>

      <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '1.5rem' }} />

      <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', flex: 1, marginBottom: '1.5rem' }}>
        {tier.features.map((f, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', color: '#ccc', fontSize: '0.88rem' }}>
            <Check size={15} color={accent} style={{ flexShrink: 0 }} />
            {f}
          </li>
        ))}
      </ul>

      <a
        href={`https://wa.me/917075853225?text=${encodeURIComponent(`Hello NovelleyX, I'm interested in the ${tier.name}.`)}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'block', textAlign: 'center', padding: '0.85rem',
          background: tier.popular ? accent : 'transparent',
          border: tier.popular ? 'none' : `1px solid rgba(255,255,255,0.1)`,
          color: tier.popular ? '#000' : '#fff',
          fontWeight: 700, fontSize: '0.88rem', borderRadius: '10px',
          transition: 'all 0.3s ease', cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          if (!tier.popular) { e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }
          else { e.currentTarget.style.opacity = '0.9' }
        }}
        onMouseLeave={(e) => {
          if (!tier.popular) { e.currentTarget.style.background = 'transparent' }
          else { e.currentTarget.style.opacity = '1' }
        }}
      >
        Get Started
      </a>
    </motion.div>
  )
}

const PricingOverview = () => {
  const [activeTab, setActiveTab] = useState('students')

  return (
    <section id="pricing-overview" style={{ padding: 'var(--section-py) 0', background: '#050505', position: 'relative' }}>
      {/* Subtle glow */}
      <div style={{
        position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)',
        width: '800px', height: '600px',
        background: activeTab === 'students'
          ? 'radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 60%)'
          : 'radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 60%)',
        pointerEvents: 'none', transition: 'background 0.5s ease'
      }} />

      <div style={{ width: 'min(1280px, 92%)', marginInline: 'auto', position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <span style={{
            display: 'inline-block',
            fontSize: 'var(--caption)', fontWeight: 600,
            letterSpacing: 'var(--caption-tracking)', textTransform: 'uppercase',
            color: '#D4AF37', marginBottom: '1.2rem'
          }}>
            Investment & ROI
          </span>
          <div style={{ width: '48px', height: '2px', background: '#D4AF37', margin: '0 auto 1.2rem' }} />
          <h2 style={{
            fontFamily: 'var(--font-heading)', fontSize: 'var(--h2)',
            fontWeight: 'var(--h2-weight)', color: '#fff',
            marginBottom: 'var(--heading-subtext-gap)'
          }}>
            Transparent Pricing
          </h2>
          <p style={{ fontSize: 'var(--body)', color: '#888', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            Two pricing tracks — affordable plans built for students, and enterprise-grade systems for businesses ready to scale.
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <div style={{
          display: 'flex', justifyContent: 'center', gap: '0.5rem',
          marginBottom: '3.5rem'
        }}>
          <button
            onClick={() => setActiveTab('students')}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.6rem',
              padding: '0.8rem 1.8rem', borderRadius: '100px',
              border: activeTab === 'students' ? '1px solid #22c55e' : '1px solid rgba(255,255,255,0.1)',
              background: activeTab === 'students' ? 'rgba(34,197,94,0.1)' : 'transparent',
              color: activeTab === 'students' ? '#22c55e' : '#888',
              fontFamily: 'var(--font-body)', fontSize: '0.9rem', fontWeight: 600,
              cursor: 'pointer', transition: 'all 0.3s ease'
            }}
          >
            <GraduationCap size={18} />
            Students & Graduates
          </button>
          <button
            onClick={() => setActiveTab('business')}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.6rem',
              padding: '0.8rem 1.8rem', borderRadius: '100px',
              border: activeTab === 'business' ? '1px solid #D4AF37' : '1px solid rgba(255,255,255,0.1)',
              background: activeTab === 'business' ? 'rgba(212,175,55,0.1)' : 'transparent',
              color: activeTab === 'business' ? '#D4AF37' : '#888',
              fontFamily: 'var(--font-body)', fontSize: '0.9rem', fontWeight: 600,
              cursor: 'pointer', transition: 'all 0.3s ease'
            }}
          >
            <Building2 size={18} />
            Businesses & Startups
          </button>
        </div>

        {/* Cards */}
        <div
          key={activeTab}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}
        >
          {(activeTab === 'students' ? studentTiers : businessTiers).map((tier, idx) => (
            <TierCard
              key={tier.name}
              tier={tier}
              accent={activeTab === 'students' ? '#22c55e' : '#D4AF37'}
              accentBg={activeTab === 'students' ? 'rgba(34,197,94,0.06)' : 'rgba(212,175,55,0.06)'}
              idx={idx}
            />
          ))}
        </div>

        {/* View Full Pricing Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center' }}
        >
          <Link
            to="/pricing"
            onClick={() => window.scrollTo(0, 0)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              color: '#D4AF37', fontSize: '0.95rem', fontWeight: 600,
              padding: '0.7rem 1.5rem', borderRadius: '8px',
              border: '1px solid rgba(212,175,55,0.3)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(212,175,55,0.08)'; e.currentTarget.style.borderColor = 'rgba(212,175,55,0.6)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(212,175,55,0.3)' }}
          >
            View Full Pricing & Plans <ArrowRight size={16} />
          </Link>
        </motion.div>

        <style>{`
          .pricing-overview-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.5);
            border-color: rgba(212,175,55,0.4) !important;
          }
        `}</style>
      </div>
    </section>
  )
}

export default PricingOverview
