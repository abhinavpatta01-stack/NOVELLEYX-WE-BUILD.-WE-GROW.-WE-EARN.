import React from 'react'
import { motion } from 'framer-motion'

const ArchitectEngine = () => {
  return (
    <section id="architect" style={{ padding: '8rem 2rem', backgroundColor: '#0a0a0a', position: 'relative' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            background: 'rgba(20, 20, 20, 0.8)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            borderRadius: '24px',
            padding: '4rem',
            textAlign: 'left'
          }}
        >
          <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <h2 style={{ fontFamily: '"Cinzel", serif', fontSize: '2.5rem', color: '#fff', marginBottom: '1rem' }}>
              ARCHITECT ENGINE
            </h2>
            <p style={{ color: '#888', fontSize: '1rem', lineHeight: 1.6 }}>
              Initiate the AI Audit protocol. Submit your digital assets below and our systems will begin the 72-Hour Gauntlet analysis.
            </p>
          </div>

          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ color: '#D4AF37', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Full Name / Brand Name</label>
                <input 
                  type="text" 
                  placeholder="Enter identity..."
                  style={{
                    background: 'rgba(0,0,0,0.5)',
                    border: '1px solid #333',
                    padding: '1rem',
                    borderRadius: '8px',
                    color: '#fff',
                    fontFamily: '"Space Mono", monospace',
                    fontSize: '0.875rem'
                  }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ color: '#D4AF37', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Primary Email</label>
                <input 
                  type="email" 
                  placeholder="admin@domain.com"
                  style={{
                    background: 'rgba(0,0,0,0.5)',
                    border: '1px solid #333',
                    padding: '1rem',
                    borderRadius: '8px',
                    color: '#fff',
                    fontFamily: '"Space Mono", monospace',
                    fontSize: '0.875rem'
                  }}
                />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ color: '#D4AF37', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Target Domain / Profile Link</label>
              <input 
                type="text" 
                placeholder="https://"
                style={{
                  background: 'rgba(0,0,0,0.5)',
                  border: '1px solid #333',
                  padding: '1rem',
                  borderRadius: '8px',
                  color: '#fff',
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '0.875rem'
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ color: '#D4AF37', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Target Service Area</label>
              <select 
                style={{
                  background: 'rgba(0,0,0,0.5)',
                  border: '1px solid #333',
                  padding: '1rem',
                  borderRadius: '8px',
                  color: '#fff',
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '0.875rem',
                  appearance: 'none'
                }}
              >
                <option value="brand">Brand Architecture</option>
                <option value="web">Website Systems</option>
                <option value="social">Social Media Growth</option>
                <option value="seo">SEO Optimization</option>
                <option value="automation">Automation Systems</option>
                <option value="ai">AI Integrations</option>
              </select>
            </div>

            <button
              type="submit"
              className="btn-submit"
              style={{
                marginTop: '1.5rem',
                padding: '1.2rem',
                background: 'linear-gradient(90deg, #D4AF37, #C5B358)',
                color: '#000',
                fontFamily: '"Cinzel", serif',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(212,175,55,0.2)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              INITIALIZE AUDIT
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default ArchitectEngine
