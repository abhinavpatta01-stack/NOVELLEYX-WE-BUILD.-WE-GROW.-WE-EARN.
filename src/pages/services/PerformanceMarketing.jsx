import React, { useEffect } from 'react'
import Navbar from '../../components/home/Navbar'
import Footer from '../../components/home/Footer'
import { motion } from 'framer-motion'
import ParticleText from '../../components/home/ParticleText'

const PerformanceMarketing = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      <main style={{ flex: 1, padding: '150px 2rem 8rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', width: '100%', maxWidth: '900px' }}
        >
          <span style={{ color: '#D4AF37', letterSpacing: '0.2em', fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '1.5rem', display: 'inline-block' }}>
            SERVICE DOMAIN
          </span>
          <ParticleText text="PERFORMANCE MARKETING" fontSize={70} color="#ffffff" />
          <p style={{ color: '#A8A8A8', fontSize: '1.2rem', lineHeight: 1.6, marginTop: '2rem' }}>
            Data-driven paid acquisition systems. We manage high-converting ad campaigns across Google and Meta platforms to generate immediate, scalable ROI.
          </p>

          <div style={{ marginTop: '3rem', textAlign: 'left', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '2.5rem' }}>
            <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1.5rem', fontFamily: '"Poppins", sans-serif' }}>Detailed Capabilities</h3>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.2rem', listStyle: 'none', padding: 0 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#D6D6D6', fontSize: '1rem' }}><div style={{ color: '#D4AF37' }}>✦</div>Campaign Strategy</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#D6D6D6', fontSize: '1rem' }}><div style={{ color: '#D4AF37' }}>✦</div>Ad Creatives</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#D6D6D6', fontSize: '1rem' }}><div style={{ color: '#D4AF37' }}>✦</div>Conversion Tracking</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#D6D6D6', fontSize: '1rem' }}><div style={{ color: '#D4AF37' }}>✦</div>A/B Testing</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#D6D6D6', fontSize: '1rem' }}><div style={{ color: '#D4AF37' }}>✦</div>Audience Targeting</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#D6D6D6', fontSize: '1rem' }}><div style={{ color: '#D4AF37' }}>✦</div>ROI Optimization</li>
            </ul>
          </div>

          <div style={{ marginTop: '4rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="https://wa.me/917075853225?text=Hello%20NovelleyX%2C%20I%27m%20interested%20in%20Performance%20Marketing"
              target="_blank" 
              rel="noopener noreferrer"
              style={{ padding: '1rem 2rem', background: '#D4AF37', color: '#000', fontSize: '1rem', fontWeight: 700, borderRadius: '8px', textDecoration: 'none', transition: 'all 0.3s', flex: '1 1 200px', maxWidth: '300px' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              WhatsApp
            </a>
            <a 
              href="mailto:novelleyx@gmail.com?subject=Inquiry%20About%20Performance%20Marketing&body=Hello%20Novelleyx%20team%2C%0A%0AI%20am%20interested%20in%20your%20Performance%20Marketing%20services.%20Please%20let%20me%20know%20how%20we%20can%20proceed.%0A%0AThanks."
              style={{ padding: '1rem 2rem', background: 'transparent', border: '1px solid rgba(212,175,55,0.4)', color: '#D4AF37', fontSize: '1rem', fontWeight: 700, borderRadius: '8px', textDecoration: 'none', transition: 'all 0.3s', flex: '1 1 200px', maxWidth: '300px' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(212,175,55,0.1)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Email Strategy Team
            </a>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}

export default PerformanceMarketing
