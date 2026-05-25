import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const stackData = [
  {
    step: "01",
    title: "Trajectory Audit",
    desc: "We analyze your current digital footprint, market positioning, and core objectives. This is where we define the exact vector to achieve market dominance.",
    color: "#0a0a0a"
  },
  {
    step: "02",
    title: "System Assembly",
    desc: "Our engineers and strategists construct your bespoke assets—ranging from cinematic websites to algorithmic content systems and executive branding.",
    color: "#0f0f0f"
  },
  {
    step: "03",
    title: "Algorithmic Deployment",
    desc: "Assets go live. We push your new identity through advanced SEO, targeted growth engines, and high-converting workflows to capture your audience.",
    color: "#141414"
  },
  {
    step: "04",
    title: "Optimization & Scaling",
    desc: "We monitor data, split-test assets, and continuously refine the system to ensure long-term ROI and compounding digital authority.",
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
          height: '300px',
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
        <div style={{ color: '#D4AF37', fontSize: '3rem', fontWeight: 800, fontFamily: '"Space Mono", monospace', opacity: 0.5, lineHeight: 1 }}>
          {data.step}
        </div>
        <div>
          <h3 style={{ fontSize: '1.8rem', fontWeight: 700, fontFamily: '"Poppins", sans-serif', color: '#fff', marginBottom: '1rem' }}>
            {data.title}
          </h3>
          <p style={{ fontSize: '1rem', color: '#A8A8A8', lineHeight: 1.7 }}>
            {data.desc}
          </p>
        </div>
      </motion.div>
    </div>
  )
}

const StackFeatureSection = () => {
  return (
    <section id="workflow" style={{ padding: '120px 2rem', background: '#000', position: 'relative' }}>
      <div style={{ width: 'min(1280px, 100%)', marginInline: 'auto' }}>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '8rem' }}
        >
          <span style={{ 
            display: 'inline-block', fontSize: '0.72rem', fontWeight: 600, 
            letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D4AF37', 
            marginBottom: '1.2rem' 
          }}>
            Workflow
          </span>
          <div style={{ width: '48px', height: '2px', background: '#D4AF37', margin: '0 auto 1.2rem auto' }}></div>
          <h2 style={{ fontFamily: '"Poppins", sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>
            Get Started With Us
          </h2>
          <p style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', color: '#D6D6D6', maxWidth: '560px', margin: '0 auto' }}>
            Four steps to absolute market dominance. Our process is engineered for speed, precision, and overwhelming results.
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
