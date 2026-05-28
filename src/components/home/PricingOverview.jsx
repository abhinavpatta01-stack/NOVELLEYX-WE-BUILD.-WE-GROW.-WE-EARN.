import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { GraduationCap, Building2, Check, ArrowRight } from 'lucide-react'
import EmiModal from '../ui/EmiModal'

const studentTiers = [
  {
    phase: 'Phase 01',
    name: 'Starter Plan',
    target: 'Baseline engineering for portfolio, resume, and algorithmic visibility for freshers.',
    monthly: {
      price: '299 — 499',
      period: '/month',
      totalAmount: 4990
    },
    yearly: {
      price: '249 — 415',
      period: '/month',
      billedAnnually: '2,990 — 4,990',
      totalAmount: 4990
    },
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
    target: 'Aggressive role capture with recruiter outreach systems.',
    popular: true,
    monthly: {
      price: '999 — 1,999',
      period: '/month',
      totalAmount: 19990
    },
    yearly: {
      price: '832 — 1,665',
      period: '/month',
      billedAnnually: '9,990 — 19,990',
      totalAmount: 19990
    },
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
    target: 'Full personal-brand architecture for market dominance.',
    monthly: {
      price: '18,000+',
      period: '/3 months',
      totalAmount: 18000
    },
    yearly: {
      price: '4,990',
      period: '/month',
      billedAnnually: '59,900',
      totalAmount: 59900
    },
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
    target: 'For creators & solo founders getting started.',
    monthly: {
      price: '20,000',
      period: '/month',
      totalAmount: 20000
    },
    yearly: {
      price: '16,000',
      period: '/month',
      billedAnnually: '1,92,000',
      totalAmount: 192000
    },
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
    target: 'For growing scaleups & brands ready to dominate.',
    popular: true,
    monthly: {
      price: '60,000',
      period: '/month',
      totalAmount: 60000
    },
    yearly: {
      price: '48,000',
      period: '/month',
      billedAnnually: '5,76,000',
      totalAmount: 576000
    },
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
    target: 'For industry authorities — unlimited scale.',
    monthly: {
      price: '1,50,000',
      period: '/month',
      totalAmount: 150000
    },
    yearly: {
      price: '1,20,000',
      period: '/month',
      billedAnnually: '14,40,000',
      totalAmount: 1440000
    },
    features: [
      'Unlimited parallel dev pipelines',
      'Custom AI integrations & chatbots',
      'High-volume ad asset production',
      'Dedicated Slack communication hub',
      'On-demand strategic consulting'
    ]
  }
]

const TierCard = ({ tier, accent, accentBg, idx, billingCycle, onTriggerEmi }) => {
  const details = billingCycle === 'monthly' ? tier.monthly : tier.yearly;
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
        padding: '3rem 2rem 2rem',
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

      <div style={{ marginBottom: '1rem' }}>
        <span style={{ fontSize: '0.95rem', color: accent, fontWeight: 600 }}>₹</span>
        <span style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-heading)' }}>
          {details.price}
        </span>
        <span style={{ color: '#666', fontSize: '0.85rem', marginLeft: '0.3rem' }}>{details.period}</span>

        {billingCycle === 'yearly' && details.billedAnnually && (
          <div style={{ color: accent, fontSize: '0.75rem', marginTop: '0.2rem', fontWeight: 600 }}>
            Billed annually: ₹{details.billedAnnually}
          </div>
        )}
      </div>

      {/* EMI Badge */}
      <div style={{ marginBottom: '1.5rem', minHeight: '26px' }}>
        {billingCycle === 'yearly' ? (
          <button
            onClick={() => onTriggerEmi(tier.name, details.totalAmount)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#D4AF37',
              fontSize: '0.78rem',
              padding: 0,
              textDecoration: 'underline',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              fontWeight: 700
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#FFD166'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#D4AF37'}
          >
            EMI starts at ₹{Math.round(details.totalAmount / 12).toLocaleString('en-IN')}/mo
          </button>
        ) : (
          <div style={{ fontSize: '0.75rem', color: '#555' }}>Standard billing terms apply</div>
        )}
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
        href={`https://wa.me/917075853225?text=${encodeURIComponent(`Hello NovelleyX, I'm interested in the ${tier.name} (${billingCycle === 'monthly' ? 'Monthly' : 'Yearly'}) plan.`)}`}
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
  const [billingCycle, setBillingCycle] = useState('monthly')
  const [emiModalOpen, setEmiModalOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState({ name: '', amount: 0 })

  const handleTriggerEmi = (planName, totalAmount) => {
    setSelectedPlan({
      name: `${planName} (Yearly)`,
      amount: totalAmount
    })
    setEmiModalOpen(true)
  }

  const activeAccent = activeTab === 'students' ? '#22c55e' : '#D4AF37'

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

        {/* Tab & Billing Cycle Switchers Container */}
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem',
          marginBottom: '3.5rem'
        }}>
          {/* Target Track Tab Switcher */}
          <div style={{
            display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap'
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

          {/* Billing Cycle Switcher Toggle */}
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            padding: '0.3rem',
            borderRadius: '100px',
            display: 'flex',
            gap: '0.2rem',
            position: 'relative'
          }}>
            <button
              onClick={() => setBillingCycle('monthly')}
              style={{
                padding: '0.5rem 1.4rem',
                borderRadius: '100px',
                border: 'none',
                background: billingCycle === 'monthly' ? activeAccent : 'transparent',
                color: billingCycle === 'monthly' ? '#000' : '#888',
                fontWeight: 700,
                fontSize: '0.8rem',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              style={{
                padding: '0.5rem 1.4rem',
                borderRadius: '100px',
                border: 'none',
                background: billingCycle === 'yearly' ? activeAccent : 'transparent',
                color: billingCycle === 'yearly' ? '#000' : '#888',
                fontWeight: 700,
                fontSize: '0.8rem',
                cursor: 'pointer',
                transition: 'all 0.3s',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem'
              }}
            >
              Yearly
              <span style={{
                background: billingCycle === 'yearly' ? 'rgba(0,0,0,0.15)' : `${activeAccent}18`,
                color: billingCycle === 'yearly' ? '#000' : activeAccent,
                fontSize: '0.6rem',
                padding: '0.05rem 0.3rem',
                borderRadius: '4px',
                fontWeight: 700
              }}>
                Save 17%+
              </span>
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div
          key={`${activeTab}-${billingCycle}`}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}
        >
          {(activeTab === 'students' ? studentTiers : businessTiers).map((tier, idx) => (
            <TierCard
              key={tier.name}
              tier={tier}
              accent={activeAccent}
              accentBg={activeTab === 'students' ? 'rgba(34,197,94,0.06)' : 'rgba(212,175,55,0.06)'}
              idx={idx}
              billingCycle={billingCycle}
              onTriggerEmi={handleTriggerEmi}
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
          @media (max-width: 768px) {
            .pricing-overview-card {
              padding: 1.75rem 1.25rem !important;
            }
          }
        `}</style>
      </div>

      {/* Reusable EMI Modal on Home page */}
      <EmiModal
        isOpen={emiModalOpen}
        onClose={() => setEmiModalOpen(false)}
        planName={selectedPlan.name}
        totalAmount={selectedPlan.amount}
        accentColor={activeAccent}
      />
    </section>
  )
}

export default PricingOverview
