import React from 'react'
import { motion } from 'framer-motion'
import { PhoneCall, FileText, Code2, Rocket } from 'lucide-react'

const stackData = [
  {
    step: "01",
    icon: <PhoneCall size={28} color="#D4AF37" />,
    title: "Discovery Call",
    desc: "Book a free 30-minute strategy call. We learn about your brand, goals, challenges, and where you want to be. No pitch — just clarity.",
    color: "#0a0a0a"
  },
  {
    step: "02",
    icon: <FileText size={28} color="#D4AF37" />,
    title: "Strategy & Proposal",
    desc: "Within 48 hours, you receive a custom roadmap with scope, timeline, deliverables, and investment. Transparent — no hidden costs, no surprises.",
    color: "#0f0f0f"
  },
  {
    step: "03",
    icon: <Code2 size={28} color="#D4AF37" />,
    title: "Build & Execute",
    desc: "Our engineers and strategists build your digital systems. You review milestones at every stage with full visibility into progress and revisions.",
    color: "#141414"
  },
  {
    step: "04",
    icon: <Rocket size={28} color="#D4AF37" />,
    title: "Launch & Optimize",
    desc: "We deploy, monitor performance metrics, and iterate. Ongoing support ensures your systems keep delivering compounding ROI month after month.",
    color: "#1a1a1a"
  }
]

const StackCard = ({ data, index, total }) => {
  return (
    <div
      style={{
        position: 'sticky',
        top: `calc(50vh - 150px + ${index * 20}px)`,
        paddingTop: `${index * 20}px`,
        marginBottom: index === total - 1 ? '0' : '40vh',
        zIndex: index,
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        style={{
          width: '100%',
          maxWidth: '800px',
          minHeight: '280px',
          background: data.color,
          border: '1px solid rgba(212,175,55,0.15)',
          borderRadius: '24px',
          boxShadow: '0 -10px 40px rgba(0,0,0,0.5)',
          padding: '3rem',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '2rem',
          transformOrigin: 'top center'
        }}
        className="stack-card"
      >
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem',
          minWidth: '60px'
        }}>
          <div style={{
            width: '56px', height: '56px', borderRadius: '14px',
            background: 'rgba(212,175,55,0.08)',
            border: '1px solid rgba(212,175,55,0.15)',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            {data.icon}
          </div>
          <div style={{
            color: 'rgba(212,175,55,0.4)', fontSize: '1.5rem',
            fontWeight: 800, fontFamily: 'var(--font-heading)', lineHeight: 1
          }}>
            {data.step}
          </div>
        </div>
        <div>
          <h3 style={{
            fontSize: 'var(--h3)', fontWeight: 'var(--h3-weight)',
            fontFamily: 'var(--font-heading)', color: '#fff', marginBottom: '1rem'
          }}>
            {data.title}
          </h3>
          <p style={{ fontSize: 'var(--body)', color: '#A8A8A8', lineHeight: 1.7 }}>
            {data.desc}
          </p>
        </div>
      </motion.div>
    </div>
  )
}

const StackFeatureSection = () => {
  return (
    <section id="workflow" style={{ padding: 'var(--section-py) 2rem', background: '#000', position: 'relative' }}>
      <div style={{ width: 'min(1280px, 100%)', marginInline: 'auto' }}>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '8rem' }}
        >
          <span style={{ 
            display: 'inline-block', fontSize: 'var(--caption)', fontWeight: 600, 
            letterSpacing: 'var(--caption-tracking)', textTransform: 'uppercase', color: '#D4AF37', 
            marginBottom: '1.2rem' 
          }}>
            Our Process
          </span>
          <div style={{ width: '48px', height: '2px', background: '#D4AF37', margin: '0 auto 1.2rem auto' }}></div>
          <h2 style={{
            fontFamily: 'var(--font-heading)', fontSize: 'var(--h2)',
            fontWeight: 'var(--h2-weight)', marginBottom: 'var(--heading-subtext-gap)', color: '#fff'
          }}>
            How We Work With You
          </h2>
          <p style={{ fontSize: 'var(--body)', color: '#D6D6D6', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
            Four clear steps from first call to live results. No guesswork — just a proven system engineered for speed, transparency, and ROI.
          </p>
        </motion.div>

        <div style={{ position: 'relative' }}>
          {stackData.map((data, idx) => (
            <StackCard key={idx} data={data} index={idx} total={stackData.length} />
          ))}
        </div>
        
      </div>
    </section>
  )
}

export default StackFeatureSection
