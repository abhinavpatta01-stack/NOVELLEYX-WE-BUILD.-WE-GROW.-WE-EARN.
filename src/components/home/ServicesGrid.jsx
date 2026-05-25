import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'

const ServiceCard = ({ title, desc, features, delay }) => {
  const divRef = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e) => {
    if (!divRef.current) return
    const rect = divRef.current.getBoundingClientRect()
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <motion.div
      ref={divRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      style={{
        position: 'relative',
        backgroundColor: '#0a0a0a',
        border: '1px solid #222',
        borderRadius: '16px',
        padding: '2.5rem',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
      className="svc-card"
    >
      <style>{`
        .svc-card:hover { border-color: #D4AF37 !important; transform: translateY(-5px); }
      `}</style>
      <div
        style={{
          position: 'absolute',
          pointerEvents: 'none',
          inset: 0,
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(212,175,55,0.08), transparent 40%)`,
          transition: 'opacity 0.3s ease',
        }}
      />
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ color: '#D4AF37', fontSize: '1.5rem', marginBottom: '1rem' }}>✦</div>
        <h3 style={{ fontFamily: '"Cinzel", serif', fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>
          {title}
        </h3>
        <p style={{ color: '#888', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '2rem' }}>
          {desc}
        </p>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1, marginBottom: '2rem' }}>
          {features.map((feature, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#ccc', fontSize: '0.875rem' }}>
              <div style={{ color: '#D4AF37', fontSize: '0.75rem' }}>+</div>
              {feature}
            </li>
          ))}
        </ul>
        <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
          <a
            href={`https://wa.me/917075853225?text=Hello Novelleyx, I'm interested in ${title}.`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              textAlign: 'center',
              padding: '0.75rem',
              border: '1px solid #D4AF37',
              color: '#D4AF37',
              fontFamily: '"Space Mono", monospace',
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              borderRadius: '4px',
              transition: 'all 0.3s ease',
              background: 'transparent'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#D4AF37'; e.currentTarget.style.color = '#000' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#D4AF37' }}
          >
            WhatsApp
          </a>
          <a
            href={`mailto:novelleyx@gmail.com?subject=Inquiry About ${title}`}
            style={{
              flex: 1,
              textAlign: 'center',
              padding: '0.75rem',
              border: '1px solid #333',
              color: '#888',
              fontFamily: '"Space Mono", monospace',
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              borderRadius: '4px',
              transition: 'all 0.3s ease',
              background: 'transparent'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#222'; e.currentTarget.style.color = '#D4AF37'; e.currentTarget.style.borderColor = '#D4AF37' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#888'; e.currentTarget.style.borderColor = '#333' }}
          >
            Email
          </a>
        </div>
      </div>
    </motion.div>
  )
}

const ServicesGrid = () => {
  const services = [
    {
      title: 'Brand Architecture',
      desc: 'We construct strategic brand frameworks that secure elite market positioning. From visual identity to core messaging, we build the foundation required for lasting industry authority and trust.',
      features: ['Brand Identity Design', 'Positioning Systems', 'Messaging Frameworks', 'Visual Direction', 'Brand Strategy', 'Competitive Analysis']
    },
    {
      title: 'Website Systems',
      desc: "We engineer high-performance, SEO-optimized digital platforms. These aren't just websites; they are conversion engines designed with immersive UI and seamless functionality to turn visitors into clients.",
      features: ['Premium UI/UX', 'Mobile Optimization', 'SEO Architecture', 'Speed Optimization', 'Conversion Systems', 'Responsive Development']
    },
    {
      title: 'Social Media Growth',
      desc: 'We deploy curated growth engines to build premium audiences systematically. By decoding platform algorithms, we scale your influence and capture highly targeted demographics.',
      features: ['Instagram Growth', 'LinkedIn Authority', 'Content Scaling', 'Audience Positioning', 'Engagement Systems', 'Algorithm Optimization']
    },
    {
      title: 'SEO Optimization',
      desc: 'Achieve authority-driven organic visibility through precision keyword engineering. We optimize your digital footprint so your brand ranks at the top when it matters most.',
      features: ['Technical SEO', 'Keyword Research', 'On-Page SEO', 'Portfolio SEO', 'Search Visibility', 'Ranking Optimization']
    },
    {
      title: 'Content Production',
      desc: "Deliver your message through cinematic storytelling and editorial content. We craft high-end visual narratives that elevate your brand's perception and captivate your audience.",
      features: ['Video Editing', 'Motion Graphics', 'Short-form Content', 'Thumbnail Systems', 'Creative Direction', 'Content Planning']
    },
    {
      title: 'Media Management',
      desc: 'End-to-end asset orchestration and multi-platform channel management. We handle the distribution, scheduling, and analytics so your brand remains active and unavoidable.',
      features: ['Channel Management', 'Publishing Systems', 'Scheduling Pipelines', 'Analytics Tracking', 'Optimization Reports', 'Multi-platform Scaling']
    },
    {
      title: 'AI Systems',
      desc: 'We integrate intelligent automation and decision engines into your workflows. Leverage cutting-edge AI models to analyze data, streamline operations, and stay ahead of the curve.',
      features: ['AI Integrations', 'GPT Systems', 'Workflow Intelligence', 'AI Automation', 'Smart Assistants', 'Prompt Engineering']
    },
    {
      title: 'Automation Systems',
      desc: 'Eliminate manual friction with seamless process pipelines. We build custom outbound and operational systems that scale your output without scaling your workload.',
      features: ['Workflow Pipelines', 'CRM Automation', 'Outreach Systems', 'Business Automation', 'Lead Systems', 'Process Engineering']
    },
    {
      title: 'Portfolio Engineering',
      desc: 'We design showcase portfolios specifically engineered to convert opportunity into traction. Perfect for creators and developers looking to highlight their projects with a premium aesthetic.',
      features: ['Portfolio Design', 'Case Studies', 'Resume Systems', 'Developer Showcases', 'Project Positioning', 'Career Branding']
    },
    {
      title: 'Personal Branding',
      desc: 'We craft compelling personal narratives for founders, creators, and emerging leaders. Transition from an unseen professional to a recognized industry voice.',
      features: ['Founder Branding', 'LinkedIn Identity', 'Public Positioning', 'Authority Building', 'Executive Presence', 'Content Direction']
    }
  ]

  return (
    <section id="services" style={{ padding: '8rem 2rem', backgroundColor: '#000000', position: 'relative' }}>
      <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
        <h2 style={{ fontFamily: '"Cinzel", serif', fontSize: '3rem', color: '#fff' }}>
          WHAT WE BUILD
        </h2>
        <p style={{ color: '#D4AF37', fontFamily: '"Space Mono", monospace', marginTop: '1rem', letterSpacing: '0.2em' }}>
          PREMIUM DIGITAL SYSTEMS
        </p>
      </div>

      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
        }}
      >
        {services.map((svc, index) => (
          <ServiceCard key={svc.title} {...svc} delay={0.1 * (index % 3)} />
        ))}
      </div>
    </section>
  )
}

export default ServicesGrid
