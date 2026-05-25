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
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Identity', path: '/#identity' },
    { name: 'About', path: '/#about' },
    { name: 'Services', path: '/#services' },
    { name: '72-Hour Gauntlet', path: '/#gauntlet' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Media', path: '/#media' },
    { name: 'Architect Engine', path: '/#architect' },
    { name: 'Contact', path: '/#contact' }
  ]

  // Helper to handle hash links smoothly if on same page
  const handleHashLink = (path) => {
    setIsOpen(false)
    if (path.startsWith('/#') && location.pathname === '/') {
      const id = path.substring(2)
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
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
        <Link to="/" style={{ fontSize: '1.1rem', fontWeight: 700, letterSpacing: '0.12em', color: '#D4AF37', whiteSpace: 'nowrap' }} onClick={() => window.scrollTo(0, 0)}>
          NOVELLEYX
        </Link>

        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '1.8rem' }}>
          <style>{`
            @media (max-width: 1150px) { .desktop-nav { display: none !important; } }
          `}</style>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => handleHashLink(link.path)}
              style={{ fontSize: '0.87rem', fontWeight: 500, color: '#A8A8A8', whiteSpace: 'nowrap', transition: 'color 0.28s' }}
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
            style={{
              padding: '0.58rem 1.2rem',
              borderRadius: '6px',
              fontSize: '0.84rem',
              fontWeight: 600,
              letterSpacing: '0.03em',
              background: '#D4AF37',
              color: '#000',
              transition: 'transform 0.28s, box-shadow 0.28s',
              display: 'inline-flex',
              alignItems: 'center'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(198,161,91,0.28)' }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
          >
            Start Project
          </Link>
        </div>

        <button 
          className="mobile-nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '4px' }}
        >
          <style>{`
            .mobile-nav-toggle { display: none; }
            @media (max-width: 1150px) { .mobile-nav-toggle { display: flex; } }
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
