import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Sparkles, MonitorSmartphone, TrendingUp, Search, Video, Bot, BrainCircuit, LineChart, Globe, Palette } from 'lucide-react'

const servicesData = [
  {
    icon: <Sparkles size={24} color="#D4AF37" />,
    title: "Brand Architecture",
    desc: "We construct strategic brand frameworks that secure elite market positioning. From visual identity to core messaging, we build the foundation required for lasting industry authority and trust."
  },
  {
    icon: <MonitorSmartphone size={24} color="#D4AF37" />,
    title: "Website Systems",
    desc: "We engineer high-performance, SEO-optimized digital platforms. These aren't just websites; they are conversion engines designed with immersive UI and seamless functionality."
  },
  {
    icon: <TrendingUp size={24} color="#D4AF37" />,
    title: "Social Media Growth",
    desc: "We deploy curated growth engines to build premium audiences systematically. By decoding platform algorithms, we scale your influence and capture targeted demographics."
  },
  {
    icon: <Search size={24} color="#D4AF37" />,
    title: "SEO Optimization",
    desc: "Achieve authority-driven organic visibility through precision keyword engineering. We optimize your digital footprint so your brand ranks at the top when it matters most."
  },
  {
    icon: <Video size={24} color="#D4AF37" />,
    title: "Content Production",
    desc: "Deliver your message through cinematic storytelling and editorial content. We craft high-end visual narratives that elevate your brand's perception."
  },
  {
    icon: <Bot size={24} color="#D4AF37" />,
    title: "AI Integration",
    desc: "Deploy intelligent automation into your workflows. We integrate custom AI agents and chatbots to streamline operations and enhance client interactions 24/7."
  },
  {
    icon: <BrainCircuit size={24} color="#D4AF37" />,
    title: "Personal Branding",
    desc: "Executive presence engineering for founders and leaders. We build your individual authority halo to establish thought leadership and open elite networking channels."
  },
  {
    icon: <LineChart size={24} color="#D4AF37" />,
    title: "Performance Marketing",
    desc: "Data-driven paid acquisition systems. We manage high-converting ad campaigns across Google and Meta platforms to generate immediate, scalable ROI."
  },
  {
    icon: <Globe size={24} color="#D4AF37" />,
    title: "Web3 & Blockchain",
    desc: "Navigate the decentralized frontier. We provide strategic consulting and aesthetic web architecture for emerging Web3, crypto, and blockchain projects."
  },
  {
    icon: <Palette size={24} color="#D4AF37" />,
    title: "UI/UX Engineering",
    desc: "Craft frictionless user journeys. We design intuitive, aesthetically superior interfaces that reduce bounce rates and maximize user retention for your software."
  }
]

const ServicesGrid = () => {
  const navigate = useNavigate()
  const scrollRef = useRef(null)

  const handleScroll = (dir) => {
    if (scrollRef.current) {
      const scrollAmount = 344 // 320px width + 24px gap = 1 exactly item
      scrollRef.current.scrollBy({ left: dir === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section id="services" style={{ padding: 'var(--section-py) 0', background: '#0a0a0a' }}>
      <div style={{ width: 'min(1280px, 92%)', marginInline: 'auto' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'left' }}
          >
            <span style={{ 
              display: 'inline-block', fontSize: 'var(--caption)', fontWeight: 600, 
              letterSpacing: 'var(--caption-tracking)', textTransform: 'uppercase', color: '#D4AF37', 
              marginBottom: '1.2rem' 
            }}>
              What We Build
            </span>
            <div style={{ width: '48px', height: '2px', background: '#D4AF37', margin: '0 0 1.2rem 0' }}></div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--h2)', fontWeight: 'var(--h2-weight)', marginBottom: 'var(--heading-subtext-gap)', color: '#fff' }}>
              Premium Digital Systems
            </h2>
            <p style={{ fontSize: 'var(--body)', color: '#D6D6D6', maxWidth: '560px' }}>
              Designed for modern brands that demand authority, precision, and lasting presence.
            </p>
          </motion.div>

          {/* Navigation Controls */}
          <div className="desktop-controls">
            <button onClick={() => handleScroll('left')} style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              &larr;
            </button>
            <button onClick={() => handleScroll('right')} style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              &rarr;
            </button>
          </div>
        </div>

        <style>{`
          .desktop-controls { display: none; gap: 1rem; }
          @media (min-width: 768px) { .desktop-controls { display: flex; } }
          .hide-scroll::-webkit-scrollbar { display: none; }
          .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
          .service-panel-card:hover { border-color: rgba(212,175,55,0.4) !important; transform: translateY(-5px); box-shadow: 0 15px 40px rgba(0,0,0,0.5); }
        `}</style>

        {/* Scrolling Panel */}
        <div 
          ref={scrollRef}
          className="hide-scroll"
          style={{
            display: 'flex',
            gap: '1.5rem',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            paddingBottom: '2rem',
            marginLeft: '-1rem',
            paddingLeft: '1rem',
            marginRight: '-1rem',
            paddingRight: '1rem',
          }}
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                minWidth: '320px',
                width: '320px',
                scrollSnapAlign: 'start',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '12px',
                padding: '2.5rem',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease'
              }}
              className="service-panel-card"
              onClick={() => {
                window.scrollTo(0, 0)
                const slug = service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
                navigate('/services/' + slug)
              }}
            >
              <div style={{ marginBottom: '1.5rem' }}>{service.icon}</div>
              <h3 style={{ fontSize: 'var(--h3)', fontWeight: 'var(--h3-weight)', fontFamily: 'var(--font-heading)', color: '#fff', marginBottom: '1rem' }}>
                {service.title}
              </h3>
              <p style={{ fontSize: 'var(--body)', color: '#A8A8A8', lineHeight: 1.7, flexGrow: 1 }}>
                {service.desc}
              </p>
              
              <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#D4AF37', fontSize: '0.85rem', fontWeight: 600 }}>
                View Details <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid
