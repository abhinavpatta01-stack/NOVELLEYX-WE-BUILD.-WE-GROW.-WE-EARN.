import React from 'react'
import { motion } from 'framer-motion'

const CreatorPartnership = () => {
  return (
    <section id="creator" style={{ padding: '60px 0', background: '#000000' }}>
      <div style={{ width: 'min(1280px, 92%)', marginInline: 'auto' }}>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <span style={{ 
            display: 'inline-block', fontSize: '0.72rem', fontWeight: 600, 
            letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D4AF37', 
            marginBottom: '1.2rem' 
          }}>
            Creator Partnerships
          </span>
          <div style={{ width: '48px', height: '2px', background: '#D4AF37', margin: '1.2rem auto' }}></div>
          <h2 style={{ fontFamily: '"Poppins", sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>
            Instagram Creator Partnership
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            maxWidth: '860px',
            marginInline: 'auto',
            background: 'linear-gradient(135deg, rgba(17,17,17,1) 0%, rgba(198,161,91,0.04) 100%)',
            border: '1px solid rgba(198,161,91,0.3)',
            borderRadius: '16px',
            padding: '3rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}
        >
          <div>
            <div style={{
              display: 'inline-block',
              background: 'rgba(198,161,91,0.12)',
              color: '#D4AF37',
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              padding: '0.3rem 0.9rem',
              borderRadius: '100px',
              marginBottom: '1rem'
            }}>
              Risk-Free Model
            </div>
            <div style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              color: '#D4AF37',
              lineHeight: 1,
              marginBottom: '0.5rem'
            }}>
              15% — 25%
            </div>
            <div style={{
              fontSize: '0.85rem',
              color: '#A8A8A8',
              marginBottom: '1.5rem'
            }}>
              Commission Per Sale
            </div>
            <p style={{ color: '#A8A8A8', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Designed for high-traffic social creators seeking absolute autonomy. We handle the storefront — you handle the audience.
            </p>
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              <a 
                href="https://wa.me/917075853225?text=Hello%20NovelleyX%2C%20I%27m%20interested%20in%20the%20Instagram%20Creator%20Partnership." 
                target="_blank" rel="noopener noreferrer"
                style={{ padding: '0.52rem 1.1rem', fontSize: '0.82rem', background: '#25D366', color: '#fff', fontWeight: 600, borderRadius: '6px', textDecoration: 'none' }}
              >
                💬 WhatsApp
              </a>
              <a 
                href="mailto:novelleyx@gmail.com?subject=Inquiry%20About%20Creator%20Partnership&body=Hello%20Novelleyx%20team%2C%0A%0AI%20am%20interested%20in%20the%20Instagram%20Creator%20Partnership.%20Please%20share%20the%20details%20and%20how%20we%20can%20proceed.%0A%0AThanks."
                target="_blank"
                rel="noopener noreferrer"
                style={{ padding: '0.52rem 1.1rem', fontSize: '0.82rem', background: '#1C1C1C', border: '1px solid rgba(198,161,91,0.3)', color: '#A8A8A8', fontWeight: 600, borderRadius: '6px', textDecoration: 'none' }}
              >
                ✉ Email
              </a>
            </div>
          </div>

          <div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                "Automated storefront setup — zero upfront investment",
                "High-conversion e-commerce builders (Shopify / Wix Studio)",
                "Sales copy and product page engineering",
                "Monthly commission payouts, transparent reporting",
                "Dedicated creator support and growth strategy"
              ].map((item, i) => (
                <li key={i} style={{ fontSize: '0.88rem', color: '#D6D6D6', padding: '0.5rem 0', display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <div style={{ color: '#D4AF37', fontSize: '0.6rem', marginTop: '4px' }}>✦</div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CreatorPartnership
