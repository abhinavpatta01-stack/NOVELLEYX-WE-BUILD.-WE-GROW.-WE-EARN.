import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer 
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#050505',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '6rem 2rem 0',
        overflow: 'hidden'
      }}
    >
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '800px', height: '400px', background: 'radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0 }}></div>

      <div style={{ maxWidth: '1440px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
          {/* Brand & About */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Link to="/" style={{ fontFamily: 'var(--font-brand)', fontSize: '1.75rem', fontWeight: 800, letterSpacing: '0.15em', color: '#D4AF37', textDecoration: 'none' }}>
              NOVELLEYX
            </Link>
            <p style={{ color: '#888', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '300px' }}>
              Architecting elite digital ecosystems. We build the infrastructure required for market dominance.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
              <a href="mailto:novelleyx@gmail.com?subject=Project%20Inquiry&body=Hello%20Novelleyx%20team%2C%0A%0AI%20am%20interested%20in%20discussing%20a%20project.%0A%0AThanks" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.75rem 1.5rem', background: 'transparent', border: '1px solid rgba(212,175,55,0.4)', color: '#D4AF37', fontWeight: 700, fontSize: '0.9rem', borderRadius: '8px', textDecoration: 'none', transition: 'all 0.3s ease' }} onMouseEnter={e => { e.currentTarget.style.background = 'rgba(212,175,55,0.1)'; e.currentTarget.style.transform = 'translateY(-2px)' }} onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)' }}>
                Email Us
              </a>
              <a href="https://wa.me/917075853225?text=Hello Novelleyx team, I am interested in discussing a project." target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.75rem 1.5rem', background: '#D4AF37', border: '1px solid #D4AF37', color: '#000', fontWeight: 700, fontSize: '0.9rem', borderRadius: '8px', textDecoration: 'none', transition: 'all 0.3s ease' }} onMouseEnter={e => { e.currentTarget.style.background = '#FFD166'; e.currentTarget.style.transform = 'translateY(-2px)' }} onMouseLeave={e => { e.currentTarget.style.background = '#D4AF37'; e.currentTarget.style.transform = 'translateY(0)' }}>
                WhatsApp Us
              </a>
            </div>
          </div>

          <div>
            <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem' }}>Navigation</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><Link to="/#about" style={{ color: '#A8A8A8', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#A8A8A8'}>About Us</Link></li>
              <li><Link to="/#services" style={{ color: '#A8A8A8', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#A8A8A8'}>Services</Link></li>
              <li><Link to="/pricing" style={{ color: '#A8A8A8', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#A8A8A8'}>Pricing</Link></li>
              <li><Link to="/#architect" style={{ color: '#A8A8A8', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#A8A8A8'}>AI Audit</Link></li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h4 style={{ color: '#D4AF37', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Connect</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none', padding: 0, margin: 0 }}>
              <li><a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#A8A8A8', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#A8A8A8'}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> Instagram</a></li>
              <li><a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#A8A8A8', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#A8A8A8'}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> LinkedIn</a></li>
              <li><a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#A8A8A8', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#A8A8A8'}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg> Twitter</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ color: '#D4AF37', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Legal</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none', padding: 0, margin: 0 }}>
              <li><a href="#" style={{ color: '#A8A8A8', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#A8A8A8'}>Privacy Policy</a></li>
              <li><a href="#" style={{ color: '#A8A8A8', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#A8A8A8'}>Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', width: '100%', overflow: 'hidden' }}>
          <h2 style={{
            fontFamily: 'var(--font-brand)',
            fontSize: 'clamp(4rem, 15vw, 16rem)',
            lineHeight: 0.8,
            fontWeight: 800,
            color: 'rgba(255,255,255,0.02)',
            margin: 0,
            whiteSpace: 'nowrap',
            background: 'linear-gradient(180deg, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.02) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            transform: 'translateY(25%)'
          }}>
            NOVELLEYX
          </h2>
        </div>
      </div>
    </footer>
  )
}

export default Footer
