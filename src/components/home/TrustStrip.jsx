import React from 'react'

const partners = [
  { name: 'OPENAI', icon: (
    <svg width="120" height="30" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="15" cy="15" r="7" stroke="rgba(212,175,55,0.4)" strokeWidth="1.5" />
      <path d="M15 8V22M8 15H22" stroke="rgba(212,175,55,0.4)" strokeWidth="1" />
      <text x="32" y="19" fill="rgba(212,175,55,0.4)" fontFamily="var(--font-brand)" fontSize="11" fontWeight="700" letterSpacing="0.2em">OPENAI</text>
    </svg>
  )},
  { name: 'VERCEL', icon: (
    <svg width="120" height="30" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="15,8 24,22 6,22" fill="rgba(212,175,55,0.4)" />
      <text x="36" y="19" fill="rgba(212,175,55,0.4)" fontFamily="var(--font-brand)" fontSize="11" fontWeight="700" letterSpacing="0.2em">VERCEL</text>
    </svg>
  )},
  { name: 'FIREBASE', icon: (
    <svg width="130" height="30" viewBox="0 0 130 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="15,6 25,24 5,24" stroke="rgba(212,175,55,0.4)" strokeWidth="1.5" fill="none" />
      <text x="36" y="19" fill="rgba(212,175,55,0.4)" fontFamily="var(--font-brand)" fontSize="11" fontWeight="700" letterSpacing="0.15em">FIREBASE</text>
    </svg>
  )},
  { name: 'STRIPE', icon: (
    <svg width="120" height="30" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="5" y="19" fill="rgba(212,175,55,0.4)" fontFamily="var(--font-brand)" fontSize="12" fontWeight="800" letterSpacing="0.25em">STRIPE</text>
      <circle cx="95" cy="15" r="4" fill="rgba(212,175,55,0.4)" />
    </svg>
  )},
  { name: 'N8N', icon: (
    <svg width="100" height="30" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="8" width="14" height="14" rx="3" stroke="rgba(212,175,55,0.4)" strokeWidth="1.5" fill="none" />
      <text x="32" y="19" fill="rgba(212,175,55,0.4)" fontFamily="var(--font-brand)" fontSize="11" fontWeight="700" letterSpacing="0.25em">N8N</text>
    </svg>
  )},
  { name: 'REACT', icon: (
    <svg width="120" height="30" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="16" cy="15" rx="8" ry="3" stroke="rgba(212,175,55,0.4)" strokeWidth="1" transform="rotate(30 16 15)" />
      <ellipse cx="16" cy="15" rx="8" ry="3" stroke="rgba(212,175,55,0.4)" strokeWidth="1" transform="rotate(90 16 15)" />
      <ellipse cx="16" cy="15" rx="8" ry="3" stroke="rgba(212,175,55,0.4)" strokeWidth="1" transform="rotate(150 16 15)" />
      <text x="32" y="19" fill="rgba(212,175,55,0.4)" fontFamily="var(--font-brand)" fontSize="11" fontWeight="700" letterSpacing="0.2em">REACT</text>
    </svg>
  )},
  { name: 'NEXTJS', icon: (
    <svg width="120" height="30" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="5" y="19" fill="rgba(212,175,55,0.4)" fontFamily="var(--font-brand)" fontSize="12" fontWeight="700" letterSpacing="0.2em">NEXT.JS</text>
    </svg>
  )}
]

const TrustStrip = () => {
  return (
    <section 
      style={{
        borderTop: '1px solid rgba(255,255,255,0.04)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
        background: '#070707',
        padding: '1.2rem 0',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '150px', background: 'linear-gradient(90deg, #0A0A0A 0%, transparent 100%)', zIndex: 11, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '150px', background: 'linear-gradient(270deg, #0A0A0A 0%, transparent 100%)', zIndex: 11, pointerEvents: 'none' }} />

      <div 
        style={{
          display: 'flex',
          width: 'max-content',
          animation: 'scrollLeftToRight 28s linear infinite'
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'nowrap', alignItems: 'center', gap: '6.5rem', paddingRight: '6.5rem' }}>
          {partners.map((p, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', opacity: 0.85, transform: 'scale(0.85)' }}>
              {p.icon}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'nowrap', alignItems: 'center', gap: '6.5rem', paddingRight: '6.5rem' }}>
          {partners.map((p, idx) => (
            <div key={`dup-${idx}`} style={{ display: 'flex', alignItems: 'center', opacity: 0.85, transform: 'scale(0.85)' }}>
              {p.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustStrip
