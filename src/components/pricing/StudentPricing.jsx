import React from 'react'
import { motion } from 'framer-motion'

const StudentPricingCard = ({ phase, name, price, period, target, features, popular, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      style={{
        background: popular ? 'linear-gradient(135deg, rgba(20,20,20,0.8) 0%, rgba(212,175,55,0.05) 100%)' : 'rgba(20, 20, 20, 0.5)',
        backdropFilter: 'blur(12px)',
        border: popular ? '1px solid #D4AF37' : '1px solid rgba(212, 175, 55, 0.14)',
        borderRadius: '16px',
        padding: '2.5rem',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      }}
      className="student-price-card"
    >
      <style>{`
        .student-price-card:hover { transform: translateY(-5px); box-shadow: 0 16px 40px rgba(0,0,0,0.4); border-color: rgba(212, 175, 55, 0.4); }
      `}</style>

      {popular && (
        <div style={{ position: 'absolute', top: '-1px', left: '50%', transform: 'translateX(-50%)', background: '#D4AF37', color: '#000', padding: '0.25rem 1rem', borderRadius: '0 0 8px 8px', fontSize: '0.68rem', fontWeight: 'bold', letterSpacing: '0.1em' }}>
          POPULAR SELECTION
        </div>
      )}

      <div style={{ fontSize: '0.68rem', fontWeight: 'bold', letterSpacing: '0.16em', color: '#D4AF37', marginBottom: '0.5rem', textTransform: 'uppercase', marginTop: popular ? '1rem' : '0' }}>
        {phase}
      </div>
      <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#fff' }}>
        {name}
      </h3>
      <p style={{ color: '#888', fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '1.5rem', minHeight: '40px' }}>
        {target}
      </p>

      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#D4AF37' }}>₹{price}</div>
        <div style={{ fontSize: '0.8rem', color: '#666' }}>{period}</div>
      </div>

      <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', marginBottom: '1.5rem' }}></div>

      <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1, marginBottom: '2rem' }}>
        {features.map((feature, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#ccc', fontSize: '0.85rem' }}>
            <div style={{ color: '#D4AF37', fontSize: '0.6rem', marginTop: '4px' }}>✦</div>
            {feature}
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <a 
          href={`https://wa.me/917075853225?text=Hello NovelleyX, I'm interested in the ${name}.`} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ flex: 1, textAlign: 'center', padding: '0.75rem', background: '#25D366', color: '#fff', fontSize: '0.8rem', fontWeight: 'bold', borderRadius: '6px' }}
        >
          WhatsApp
        </a>
        <a 
          href={`mailto:novelleyx@gmail.com?subject=Inquiry About ${name}`}
          style={{ flex: 1, textAlign: 'center', padding: '0.75rem', background: 'transparent', border: '1px solid rgba(212,175,55,0.3)', color: '#ccc', fontSize: '0.8rem', fontWeight: 'bold', borderRadius: '6px' }}
        >
          Email
        </a>
      </div>
    </motion.div>
  )
}

const StudentPricing = () => {
  return (
    <section style={{ padding: '8rem 2rem', backgroundColor: '#0a0a0a' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <span style={{ color: '#D4AF37', letterSpacing: '0.2em', fontSize: '0.875rem', fontWeight: 'bold' }}>STUDENTS & GRADUATES</span>
        <h2 style={{ fontFamily: '"Cinzel", serif', fontSize: '2.5rem', color: '#fff', marginTop: '1rem', marginBottom: '1rem' }}>
          RECURRING CAREER ARCHITECTURE
        </h2>
        <p style={{ color: '#888', maxWidth: '600px', margin: '0 auto', fontSize: '1rem', lineHeight: 1.6 }}>
          <strong>Exclusively for students and recent graduates.</strong> Choose the tier that matches your ambition. Every plan is engineered for measurable impact.
        </p>
      </div>

      <div style={{ 
        maxWidth: '1100px', 
        margin: '0 auto', 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '2rem' 
      }}>
        <StudentPricingCard
          phase="Phase 01"
          name="Starter Plan"
          target="Baseline engineering for portfolio, resume, and algorithmic visibility."
          price="299 — 499"
          period="per month"
          features={[
            "Digital Portfolio Engine",
            "Professional Resume Polishing",
            "LinkedIn SEO Optimization",
            "Basic Analytics Dashboard",
            "24/7 Identity Support"
          ]}
          delay={0.1}
        />
        <StudentPricingCard
          phase="Phase 02"
          name="Growth Plan"
          target="High-performers ready to aggressively capture major roles and improve outreach."
          price="999 — 1,999"
          period="per month"
          popular={true}
          features={[
            "Custom ATS Keyword Integration",
            "Tailored Resume Engineering",
            "Interview-Ready Profile Setup",
            "Direct Recruiter Outreach Strategy",
            "Priority Algorithm Propagation"
          ]}
          delay={0.3}
        />
        <StudentPricingCard
          phase="Phase 03"
          name="Premium Plan"
          target="Ultimate personal-brand architecture for absolute market dominance."
          price="18,000+"
          period="per 3 months"
          features={[
            "Full Brand Architecture",
            "Managed LinkedIn Content Stream",
            "SEO Portfolio Ranking (Top 1%)",
            "Dedicated Enterprise Hosting",
            "Executive Presence Engineering"
          ]}
          delay={0.5}
        />
      </div>
    </section>
  )
}

export default StudentPricing
