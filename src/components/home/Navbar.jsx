import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 50,
        padding: '1.5rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <div>
        <Link
          to="/"
          style={{
            fontFamily: '"Cinzel", serif',
            fontSize: '1.5rem',
            color: '#D4AF37',
            fontWeight: 800,
            letterSpacing: '0.1em',
          }}
        >
          NOVELLEYX
        </Link>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
        <a
          href="#systems"
          style={{
            fontFamily: '"Space Mono", monospace',
            fontSize: '0.875rem',
            color: '#fff',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#D4AF37')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
        >
          Systems
        </a>
        <a
          href="#media"
          style={{
            fontFamily: '"Space Mono", monospace',
            fontSize: '0.875rem',
            color: '#fff',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#D4AF37')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
        >
          Media
        </a>
        <Link to="/pricing" className="btn-magnetic">
          View Pricing
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
