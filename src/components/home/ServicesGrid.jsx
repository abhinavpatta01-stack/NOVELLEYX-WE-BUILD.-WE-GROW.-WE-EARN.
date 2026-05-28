import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Bot, Cpu, Layers, TrendingUp, BarChart2, Laptop } from 'lucide-react'

const servicesData = [
  {
    icon: <Bot size={24} color="#D4AF37" />,
    title: "AI Automation",
    glowColor: "rgba(212,175,55,0.18)",
    desc: "We deploy custom NLP intent routers and autonomous workflow agents. Your operations process inbound opportunities and trigger sequences 24/7 without manual delays."
  },
  {
    icon: <Cpu size={24} color="#D4AF37" />,
    title: "SaaS Development",
    glowColor: "rgba(212,175,55,0.18)",
    desc: "Engineering scalable multi-tenant platforms using modern web stacks. We construct database architectures, user subscription metrics, and secure API gateways."
  },
  {
    icon: <Laptop size={24} color="#D4AF37" />,
    title: "Web Infrastructure",
    glowColor: "rgba(212,175,55,0.18)",
    desc: "Custom-built, high-status enterprise web platforms. Designed with single-point conversions, immersive layouts, and perfect Google Core Web Vitals parameters."
  },
  {
    icon: <TrendingUp size={24} color="#D4AF37" />,
    title: "Marketing Systems",
    glowColor: "rgba(212,175,55,0.18)",
    desc: "AI-driven outbound and inbound lead generation matrices. We connect Rotated SMTP loops, scraper enrichments, and client acquisition algorithms."
  },
  {
    icon: <BarChart2 size={24} color="#D4AF37" />,
    title: "Dashboard Engineering",
    glowColor: "rgba(212,175,55,0.18)",
    desc: "Centralized analytical dashboards displaying KPI parameters, conversion indices, and transactional data in real-time with sub-second latency."
  },
  {
    icon: <Layers size={24} color="#D4AF37" />,
    title: "Internal Tools",
    glowColor: "rgba(212,175,55,0.18)",
    desc: "Bespoke corporate management portals and software utility dashboards built to streamline administrative overhead and maximize workflow speed."
  }
]

const ServicesGrid = () => {
  const navigate = useNavigate()
  const scrollRef = useRef(null)

  const handleScroll = (dir) => {
    if (scrollRef.current) {
      const scrollAmount = 344
      scrollRef.current.scrollBy({ left: dir === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section id="services" style={{ padding: 'var(--section-py) 0', background: '#111111' }}>
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
              Solutions & Value
            </span>
            <div style={{ width: '40px', height: '1px', background: '#D4AF37', margin: '0 0 1.2rem 0' }}></div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--h2)', fontWeight: 'var(--h2-weight)', marginBottom: 'var(--heading-subtext-gap)', color: '#fff' }}>
              Premium Digital Systems
            </h2>
            <p style={{ fontSize: '1.02rem', color: '#A8A8A8', maxWidth: '560px' }}>
              Engineered with extreme precision for high-status organizations demanding absolute technical authority.
            </p>
          </motion.div>

          {/* Navigation Controls */}
          <div className="desktop-controls">
            <button onClick={() => handleScroll('left')} style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(212,175,55,0.2)', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              &larr;
            </button>
            <button onClick={() => handleScroll('right')} style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(212,175,55,0.2)', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              &rarr;
            </button>
          </div>
        </div>

        <style>{`
          .desktop-controls { display: none; gap: 1rem; }
          @media (min-width: 768px) { .desktop-controls { display: flex; } }
          .hide-scroll::-webkit-scrollbar { display: none; }
          .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
          .service-panel-card:hover { border-color: rgba(212,175,55,0.5) !important; transform: translateY(-5px); box-shadow: 0 15px 40px rgba(0,0,0,0.6), 0 0 20px rgba(212,175,55,0.04) inset; }
          @media (max-width: 768px) {
            .services-scroll-card {
              min-width: 280px !important;
              width: 280px !important;
              padding: 1.75rem !important;
            }
          }
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
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                minWidth: '320px',
                width: '320px',
                scrollSnapAlign: 'start',
                background: 'rgba(255,255,255,0.01)',
                border: '1px solid rgba(212,175,55,0.15)',
                borderRadius: '12px',
                padding: '2.5rem',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              className="service-panel-card services-scroll-card"
              onClick={() => {
                window.scrollTo(0, 0)
                const slug = service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
                navigate('/services/' + slug)
              }}
            >
              <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', borderRadius: '8px', background: 'rgba(212,175,55,0.05)', border: '1px solid rgba(212,175,55,0.25)' }}>
                {service.icon}
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: '#fff', marginBottom: '1rem' }}>
                {service.title}
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#A8A8A8', lineHeight: 1.7, flexGrow: 1 }}>
                {service.desc}
              </p>
              
              <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#D4AF37', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                View Details <ArrowRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid
