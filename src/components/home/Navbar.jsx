import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll)

    // Handle hash on load or when location changes
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.substring(1)
        const el = document.getElementById(id)
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 100
          window.scrollTo({ top: y, behavior: 'smooth' })
        }
      }, 100)
    }

    return () => window.removeEventListener('scroll', handleScroll)
  }, [location])

  const navLinks = [
    { name: 'About', path: '/#about' },
    { name: 'Services', path: '/#services' },
    { name: 'AI Automation', path: '/#automation' },
    { name: 'Our Process', path: '/#workflow' },
    { name: 'Case Studies', path: '/#portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Architect Engine', path: '/#architect' },
    { name: 'Contact', path: '/#contact' }
  ]

  // Helper to handle hash links smoothly if on same page
  const handleHashLink = (path) => {
    setIsOpen(false)
    if (path.startsWith('/#')) {
      const id = path.substring(2)
      
      // If already on home page, scroll smoothly with offset
      if (location.pathname === '/') {
        const el = document.getElementById(id)
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 100; // offset for fixed navbar
          window.scrollTo({ top: y, behavior: 'smooth' })
        }
      } else {
        // We let Link navigate to /#id, but we could add a short timeout or just let useEffect handle hash scrolling if needed.
        // Actually, just standard Link behavior handles the navigation.
      }
    }
  }

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: isScrolled ? '1rem' : '1.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'calc(100% - 2rem)',
          maxWidth: '1280px',
          background: isScrolled ? 'rgba(10,10,10,0.96)' : 'rgba(10,10,10,0.8)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '80px',
          padding: isScrolled ? '0.5rem 1.5rem' : '0.8rem 1.8rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 900,
          transition: 'all 0.28s cubic-bezier(.4,0,.2,1)'
        }}
      >
        <Link to="/" style={{ fontFamily: 'var(--font-brand)', fontSize: '1.25rem', fontWeight: 800, letterSpacing: '0.15em', color: '#D4AF37', whiteSpace: 'nowrap', textDecoration: 'none' }} onClick={() => window.scrollTo(0, 0)}>
          NOVELLEYX
        </Link>

        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '1.8rem' }}>
          <style>{`
            @media (max-width: 1200px) { .desktop-nav { display: none !important; } }
          `}</style>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => handleHashLink(link.path)}
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.87rem', fontWeight: 500, color: '#A8A8A8', whiteSpace: 'nowrap', transition: 'color 0.28s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#D4AF37'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#A8A8A8'}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="desktop-nav">
          <Link
            to="/#architect"
            onClick={() => handleHashLink('/#architect')}
            className="cta-gold-glow"
            style={{
              padding: '0.5rem 1.25rem',
              borderRadius: '80px',
              fontSize: '0.8rem',
              fontWeight: 750,
              boxShadow: '0 0 10px rgba(212,175,55,0.2)'
            }}
          >
            Book Consultation
          </Link>
        </div>

        <button 
          className="mobile-nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '4px' }}
        >
          <style>{`
            .mobile-nav-toggle { display: none; }
            @media (max-width: 1200px) { .mobile-nav-toggle { display: flex; } }
          `}</style>
          <Menu size={24} />
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(10,10,10,0.97)',
              zIndex: 850,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2.5rem'
            }}
          >
            <button 
              onClick={() => setIsOpen(false)}
              style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', color: '#A8A8A8', cursor: 'pointer' }}
            >
              <X size={32} />
            </button>
            
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => handleHashLink(link.path)}
                style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', transition: 'color 0.28s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#D4AF37'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
