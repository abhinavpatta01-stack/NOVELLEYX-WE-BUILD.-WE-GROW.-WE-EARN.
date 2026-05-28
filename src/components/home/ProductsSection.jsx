import React from 'react'
import { motion } from 'framer-motion'
import { BarChart3, Workflow, ShoppingBag, Trophy, ShieldCheck, ArrowRight } from 'lucide-react'

const products = [
  {
    icon: <BarChart3 size={24} color="#D4AF37" />,
    title: "Earning Dashboard",
    desc: "A luxury multi-tenant client console detailing payout splits, transactional logs, and recurring revenue indexes in real-time.",
    kpi: "Feature: Automated Commission Splits"
  },
  {
    icon: <Workflow size={24} color="#D4AF37" />,
    title: "AI Workflows Canvas",
    desc: "Visual workflow builder mapping triggers to n8n pipelines, WhatsApp qualifier agents, and CRM sync payloads with sub-second latency.",
    kpi: "Feature: NLP Intent Mapping Nodes"
  },
  {
    icon: <ShoppingBag size={24} color="#D4AF37" />,
    title: "Ecosystem Marketplace",
    desc: "An API-native catalog showcasing pre-built B2B automation connectors, document processors, and custom scraper databases.",
    kpi: "Feature: Direct API Key Deployment"
  },
  {
    icon: <Trophy size={24} color="#D4AF37" />,
    title: "Performance Leaderboard",
    desc: "Real-time leaderboard analytics compiling outreach CTRs, closed conversions, and team sales yields in active lists.",
    kpi: "Feature: Gamified Team KPIs"
  },
  {
    icon: <ShieldCheck size={24} color="#D4AF37" />,
    title: "Internal Systems Console",
    desc: "A secure corporate backend gateway providing database access, scraper parameters, and SMTP rotated domain configurations.",
    kpi: "Feature: Role-based SDK access"
  }
]

const ProductsSection = () => {
  return (
    <section id="products" style={{ padding: '8rem 2rem', background: '#0A0A0A', position: 'relative', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      {/* Background soft glow */}
      <div style={{
        position: 'absolute', top: '40%', right: '10%', width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(212,175,55,0.02) 0%, transparent 80%)',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span style={{ 
            display: 'inline-block', fontSize: 'var(--caption)', fontWeight: 600, 
            letterSpacing: 'var(--caption-tracking)', textTransform: 'uppercase', color: '#D4AF37', 
            marginBottom: '1rem',
            border: '1px solid rgba(212,175,55,0.3)',
            padding: '0.4rem 1.2rem',
            borderRadius: '100px',
            background: 'rgba(212,175,55,0.03)'
          }}>
            Our Products
          </span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--h2)', fontWeight: 'var(--h2-weight)', color: '#fff', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
            The AI & Automation Ecosystem
          </h2>
          <p style={{ color: '#888', maxWidth: '600px', margin: '0 auto', fontSize: '1rem', lineHeight: 1.7 }}>
            Explore our ready-to-deploy software products. Built with low-latency components and structured for enterprise scale.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: 'rgba(255,255,255,0.01)',
                border: '1px solid rgba(212,175,55,0.15)',
                borderRadius: '12px',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                transition: 'border-color 0.4s, box-shadow 0.4s, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              className="product-card"
            >
              <style>{`
                .product-card:hover {
                  border-color: rgba(212,175,55,0.45) !important;
                  box-shadow: 0 20px 45px rgba(0,0,0,0.6), 0 0 20px rgba(212,175,55,0.03) inset;
                  transform: translateY(-5px);
                }
              `}</style>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ 
                  width: '44px', height: '44px', borderRadius: '8px', 
                  background: 'rgba(212,175,55,0.06)', border: '1px solid rgba(212,175,55,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  {product.icon}
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', margin: 0, fontFamily: 'var(--font-heading)' }}>
                  {product.title}
                </h3>
              </div>

              <p style={{ color: '#A8A8A8', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '2rem', flex: 1 }}>
                {product.desc}
              </p>

              <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '1.5rem' }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', color: '#D4AF37', fontWeight: 700, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
                  {product.kpi}
                </span>
                <span style={{ color: '#D4AF37', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ArrowRight size={16} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ProductsSection
