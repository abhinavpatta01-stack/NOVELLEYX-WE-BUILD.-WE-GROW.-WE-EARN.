import React, { useEffect } from 'react'
import Navbar from '../../components/home/Navbar'
import Footer from '../../components/home/Footer'
import { motion } from 'framer-motion'
import ParticleText from '../../components/home/ParticleText'
import Hills from '../../components/glsl/Hills'

const BrandArchitecture = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <Navbar />
      
      <main style={{ flex: 1, backgroundColor: '#050505', position: 'relative', zIndex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.6, pointerEvents: 'none', zIndex: 0 }}>
          <Hills color="#D4AF37" />
        </div>
        
        <div style={{ position: 'relative', zIndex: 1, padding: '150px 2rem 8rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', width: '100%', maxWidth: '900px' }}
          >
            <span style={{ color: '#D4AF37', letterSpacing: '0.2em', fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '1.5rem', display: 'inline-block' }}>
              SERVICE DOMAIN
            </span>
            <ParticleText text="BRAND ARCHITECTURE" fontSize={70} color="#ffffff" />
            <p style={{ color: '#A8A8A8', fontSize: '1.2rem', lineHeight: 1.6, marginTop: '2rem' }}>
              We construct strategic brand frameworks that secure elite market positioning. From visual identity to core messaging, we build the foundation required for lasting industry authority and trust.
            </p>

            <div style={{ marginTop: '3rem', textAlign: 'left', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '2.5rem', backdropFilter: 'blur(10px)' }}>
              <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1.5rem', fontFamily: '"Poppins", sans-serif' }}>Detailed Capabilities</h3>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.2rem', listStyle: 'none', padding: 0 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#D6D6D6', fontSize: '1rem' }}><div style={{ color: '#D4AF37' }}>✦</div>Brand Identity Design</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#D6D6D6', fontSize: '1rem' }}><div style={{ color: '#D4AF37' }}>✦</div>Positioning Systems</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#D6D6D6', fontSize: '1rem' }}><div style={{ color: '#D4AF37' }}>✦</div>Messaging Frameworks</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#D6D6D6', fontSize: '1rem' }}><div style={{ color: '#D4AF37' }}>✦</div>Visual Direction</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#D6D6D6', fontSize: '1rem' }}><div style={{ color: '#D4AF37' }}>✦</div>Brand Strategy</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#D6D6D6', fontSize: '1rem' }}><div style={{ color: '#D4AF37' }}>✦</div>Competitive Analysis</li>
              </ul>
            </div>

            <div style={{ marginTop: '4rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a 
                href="https://wa.me/917075853225?text=Hello%20NovelleyX%2C%20I%27m%20interested%20in%20Brand%20Architecture"
                target="_blank" 
                rel="noopener noreferrer"
                style={{ padding: '1rem 2rem', background: '#D4AF37', color: '#000', fontSize: '1rem', fontWeight: 700, borderRadius: '8px', textDecoration: 'none', transition: 'all 0.3s', flex: '1 1 200px', maxWidth: '300px' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                WhatsApp
              </a>
              <a 
                href="mailto:novelleyx@gmail.com?subject=Inquiry%20About%20Brand%20Architecture&body=Hello%20Novelleyx%20team%2C%0A%0AI%20am%20interested%20in%20your%20Brand%20Architecture%20services.%20Please%20let%20me%20know%20how%20we%20can%20proceed.%0A%0AThanks."
                style={{ padding: '1rem 2rem', background: 'transparent', border: '1px solid rgba(212,175,55,0.4)', color: '#D4AF37', fontSize: '1rem', fontWeight: 700, borderRadius: '8px', textDecoration: 'none', transition: 'all 0.3s', flex: '1 1 200px', maxWidth: '300px', backdropFilter: 'blur(5px)' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(212,175,55,0.1)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                Email Strategy Team
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default BrandArchitecture
