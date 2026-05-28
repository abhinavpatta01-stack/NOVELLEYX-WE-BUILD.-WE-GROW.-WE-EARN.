import React from 'react'

const logos = [
  { name: 'AETHER AI', icon: (
    <svg width="120" height="30" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="5" y="20" fill="rgba(212,175,55,0.4)" fontFamily="var(--font-brand)" fontSize="12" fontWeight="700" letterSpacing="0.3em">AETHER AI</text>
      <circle cx="108" cy="15" r="4" fill="rgba(212,175,55,0.4)"/>
    </svg>
  )},
  { name: 'APEX CAPITAL', icon: (
    <svg width="130" height="30" viewBox="0 0 130 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 22L20 8L30 22H10Z" stroke="rgba(212,175,55,0.4)" strokeWidth="1.5" fill="none"/>
      <text x="38" y="20" fill="rgba(212,175,55,0.4)" fontFamily="var(--font-brand)" fontSize="11" fontWeight="700" letterSpacing="0.25em">APEX CAP</text>
    </svg>
  )},
  { name: 'VELO CORE', icon: (
    <svg width="120" height="30" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="8" width="14" height="14" rx="2" stroke="rgba(212,175,55,0.4)" strokeWidth="1.5" fill="none"/>
      <text x="32" y="20" fill="rgba(212,175,55,0.4)" fontFamily="var(--font-brand)" fontSize="11" fontWeight="700" letterSpacing="0.25em">VELO.CORE</text>
    </svg>
  )},
  { name: 'OMNI AUTO', icon: (
    <svg width="130" height="30" viewBox="0 0 130 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="15" r="7" stroke="rgba(212,175,55,0.4)" strokeWidth="1.5" fill="none"/>
      <text x="35" y="20" fill="rgba(212,175,55,0.4)" fontFamily="var(--font-brand)" fontSize="11" fontWeight="700" letterSpacing="0.25em">OMNI AUTO</text>
    </svg>
  )},
  { name: 'NOVA TECH', icon: (
    <svg width="120" height="30" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="10" y="20" fill="rgba(212,175,55,0.4)" fontFamily="var(--font-brand)" fontSize="11" fontWeight="700" letterSpacing="0.3em">NOVA.HOLDINGS</text>
    </svg>
  )},
  { name: 'ORACLE SYS', icon: (
    <svg width="130" height="30" viewBox="0 0 130 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="10,22 17,8 24,22" stroke="rgba(212,175,55,0.4)" strokeWidth="1.5" fill="none"/>
      <polygon points="17,22 24,8 31,22" stroke="rgba(212,175,55,0.4)" strokeWidth="1.5" fill="none"/>
      <text x="38" y="20" fill="rgba(212,175,55,0.4)" fontFamily="var(--font-brand)" fontSize="10" fontWeight="700" letterSpacing="0.2em">ORACLE SYS</text>
    </svg>
  )}
]

const TrustStrip = () => {
  return (
    <section 
      style={{
        borderTop: '1px solid rgba(255,255,255,0.04)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
        background: '#030303',
        padding: '2.5rem 0',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '150px', background: 'linear-gradient(90deg, #000 0%, transparent 100%)', zIndex: 11, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '150px', background: 'linear-gradient(270deg, #000 0%, transparent 100%)', zIndex: 11, pointerEvents: 'none' }} />

      <div 
        style={{
          display: 'flex',
          width: 'max-content',
          animation: 'scrollLeftToRight 25s linear infinite'
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'nowrap', alignItems: 'center', gap: '6rem', paddingRight: '6rem' }}>
          {logos.map((logo, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', opacity: 0.85 }}>
              {logo.icon}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'nowrap', alignItems: 'center', gap: '6rem', paddingRight: '6rem' }}>
          {logos.map((logo, idx) => (
            <div key={`dup-${idx}`} style={{ display: 'flex', alignItems: 'center', opacity: 0.85 }}>
              {logo.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustStrip
