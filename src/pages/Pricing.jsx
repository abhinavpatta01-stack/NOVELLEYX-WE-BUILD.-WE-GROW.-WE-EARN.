import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/home/Navbar'
import Footer from '../components/home/Footer'
import BentoGrid from '../components/pricing/BentoGrid'
import Media from '../components/home/Media'
import DottedSurface from '../components/home/DottedSurface'
import Hills from '../components/glsl/Hills'

const PricingLoader = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#000',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ position: 'relative', width: '200px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            border: '2px solid transparent',
            borderTopColor: '#D4AF37',
            borderRightColor: 'rgba(212,175,55,0.3)',
          }}
        />
        <motion.div
          animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: '60px',
            height: '60px',
            background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)',
            filter: 'blur(10px)',
          }}
        />
        <div style={{ position: 'absolute', color: '#fff', fontFamily: 'var(--font-heading)', fontSize: '0.8rem', letterSpacing: '0.2em' }}>
          LOADING
        </div>
      </div>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{ color: '#888', marginTop: '2rem', fontSize: '0.9rem', letterSpacing: '0.1em' }}
      >
        ACCESSING PREMIUM SYSTEMS...
      </motion.p>
    </motion.div>
  )
}

const pricingTiers = [
  {
    phase: "Phase 01",
    name: "Starter Plan",
    target: "Baseline engineering for portfolio, resume, and algorithmic visibility.",
    price: "299",
    maxPrice: "499",
    period: "per month",
    features: [
      "Digital Portfolio Engine",
      "Professional Resume Polishing",
      "LinkedIn SEO Optimization",
      "Basic Analytics Dashboard",
      "24/7 Identity Support"
    ],
    popular: false
  },
  {
    phase: "Phase 02",
    name: "Growth Plan",
    target: "High-performers ready to aggressively capture major roles.",
    price: "999",
    maxPrice: "1,999",
    period: "per month",
    features: [
      "Custom ATS Keyword Integration",
      "Tailored Resume Engineering",
      "Interview-Ready Profile Setup",
      "Direct Recruiter Outreach Strategy",
      "Priority Algorithm Propagation"
    ],
    popular: true
  },
  {
    phase: "Phase 03",
    name: "Premium Plan",
    target: "Ultimate personal-brand architecture for absolute market dominance.",
    price: "18,000+",
    period: "per 3 months",
    features: [
      "Full Brand Architecture",
      "Managed LinkedIn Content Stream",
      "SEO Portfolio Ranking (Top 1%)",
      "Dedicated Enterprise Hosting",
      "Executive Presence Engineering"
    ],
    popular: false
  }
]

const Pricing = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0)
    }
    // 5 second artificial loader
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isLoading && window.location.hash) {
      setTimeout(() => {
        const id = window.location.hash.substring(1)
        const el = document.getElementById(id)
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 100
          window.scrollTo({ top: y, behavior: 'smooth' })
        }
      }, 150)
    }
  }, [isLoading])

  return (
    <div style={{ backgroundColor: '#050505', minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, opacity: 0.2 }}>
        <Hills color="#22c55e" />
      </div>
      <AnimatePresence>
        {isLoading && <PricingLoader />}
      </AnimatePresence>

      <Navbar />
      
      {!isLoading && (
        <>
          <main style={{ position: 'relative', zIndex: 1, minHeight: '100vh', overflow: 'hidden' }}>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column' }}
            >
              {/* Hero section for pricing */}
              <section style={{ 
                paddingTop: '160px', 
                paddingBottom: '4rem', 
                textAlign: 'center', 
                position: 'relative'
              }}>
                <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '400px', background: 'radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none', zIndex: 0 }}></div>
                
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <span style={{ 
                    display: 'inline-block', fontSize: '0.72rem', fontWeight: 600, 
                    letterSpacing: '0.18em', textTransform: 'uppercase', color: '#22c55e', 
                    marginBottom: '1rem',
                    border: '1px solid rgba(34,197,94,0.3)',
                    padding: '0.4rem 1rem',
                    borderRadius: '100px',
                    background: 'rgba(34,197,94,0.05)'
                  }}>
                    Investment & ROI
                  </span>
                  <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>
                    Transparent Pricing
                  </h1>
                  <p style={{ color: '#888', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.6 }}>
                    Choose the architecture that fits your current velocity. Designed exclusively for students, graduates, and high-performers.
                  </p>
                </div>
              </section>

              {/* Pricing Table (Modern Layout) */}
              <section style={{ padding: '0 2rem 3rem', position: 'relative', zIndex: 10 }}>
                <div style={{ 
                  maxWidth: '1200px', 
                  margin: '0 auto', 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
                  gap: '2rem',
                  alignItems: 'center'
                }}>
                  {pricingTiers.map((tier, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      style={{
                        background: tier.popular ? 'linear-gradient(180deg, rgba(20,40,20,0.9) 0%, rgba(10,20,10,0.95) 100%)' : 'rgba(15,15,15,0.7)',
                        border: tier.popular ? '1px solid #22c55e' : '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '24px',
                        padding: '3rem 2rem',
                        position: 'relative',
                        transform: tier.popular ? 'scale(1.05)' : 'scale(1)',
                        boxShadow: tier.popular ? '0 20px 40px rgba(0,0,0,0.5), 0 0 40px rgba(34,197,94,0.15)' : 'none',
                        zIndex: tier.popular ? 2 : 1
                      }}
                      className="modern-pricing-card"
                    >
                      <style>{`
                        .modern-pricing-card:hover { transform: ${tier.popular ? 'scale(1.05) translateY(-5px)' : 'scale(1) translateY(-5px)'}; border-color: rgba(34,197,94,0.5); }
                        @media (max-width: 1024px) {
                          .modern-pricing-card { transform: scale(1) !important; }
                        }
                      `}</style>
                      
                      {tier.popular && (
                        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', background: '#22c55e', color: '#000', padding: '0.4rem 1.2rem', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em' }}>
                          MOST POPULAR
                        </div>
                      )}

                      <div style={{ color: '#22c55e', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '1rem', textTransform: 'uppercase' }}>
                        {tier.phase}
                      </div>
                      <h3 style={{ fontSize: '2rem', fontWeight: 700, color: '#fff', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>
                        {tier.name}
                      </h3>
                      <p style={{ color: '#A8A8A8', fontSize: '0.9rem', lineHeight: 1.6, minHeight: '60px', marginBottom: '2rem' }}>
                        {tier.target}
                      </p>

                      <div style={{ marginBottom: '2.5rem' }}>
                        <span style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff' }}>₹{tier.price}</span>
                        {tier.maxPrice && <span style={{ fontSize: '1.5rem', color: '#888' }}> - {tier.maxPrice}</span>}
                        <span style={{ color: '#888', fontSize: '0.9rem', marginLeft: '0.5rem' }}>{tier.period}</span>
                      </div>

                      <a
                        href={`https://wa.me/917075853225?text=Hello Novelleyx, I'm interested in the ${tier.name}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'block',
                          width: '100%',
                          textAlign: 'center',
                          padding: '1rem',
                          background: tier.popular ? '#22c55e' : 'transparent',
                          border: tier.popular ? 'none' : '1px solid rgba(255,255,255,0.1)',
                          color: tier.popular ? '#000' : '#fff',
                          fontWeight: 700,
                          borderRadius: '12px',
                          marginBottom: '2.5rem',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          if(!tier.popular) e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                          else e.currentTarget.style.opacity = '0.9'
                        }}
                        onMouseLeave={(e) => {
                          if(!tier.popular) e.currentTarget.style.background = 'transparent'
                          else e.currentTarget.style.opacity = '1'
                        }}
                      >
                        Get Started
                      </a>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {tier.features.map((feature, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#22c55e' }}>
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </div>
                            <span style={{ color: '#D6D6D6', fontSize: '0.9rem' }}>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              <BentoGrid />
              <Media />
            </motion.div>
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}

export default Pricing
