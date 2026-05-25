import React from 'react'

const IdentityStrip = () => {
  return (
    <section 
      id="identity" 
      style={{
        borderTop: '1px solid rgba(255,255,255,0.04)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
        background: '#000000',
        padding: '2rem 0',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div 
        style={{
          display: 'flex',
          width: 'max-content',
          animation: 'scrollLeftToRight 30s linear infinite'
        }}
        onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'running'} // Keeps it running on hover like original
      >
        <div style={{ display: 'flex', flexWrap: 'nowrap', justifyContent: 'center', gap: '3.5rem', paddingRight: '3.5rem' }}>
          <div className="identity-item">Premium Career Architecture</div>
          <div className="identity-item">72‑Hour Rapid Deployment</div>
          <div className="identity-item">AI‑Powered Identity Systems</div>
          <div className="identity-item">LinkedIn Algorithm Domination</div>
          <div className="identity-item">Executive Presence Engineering</div>
          <div className="identity-item">Emerging Luxury Studio</div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'nowrap', justifyContent: 'center', gap: '3.5rem', paddingRight: '3.5rem' }}>
          <div className="identity-item">Premium Career Architecture</div>
          <div className="identity-item">72‑Hour Rapid Deployment</div>
          <div className="identity-item">AI‑Powered Identity Systems</div>
          <div className="identity-item">LinkedIn Algorithm Domination</div>
          <div className="identity-item">Executive Presence Engineering</div>
          <div className="identity-item">Emerging Luxury Studio</div>
        </div>
      </div>

      <style>{`
        .identity-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.8rem 1.2rem;
          font-size: 0.85rem;
          color: #A8A8A8;
          font-weight: 500;
          letter-spacing: 0.04em;
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
        }
        .identity-item::before {
          content: '';
          width: 5px; height: 5px;
          background: #FFD166;
          border-radius: 50%;
          flex-shrink: 0;
        }
      `}</style>
    </section>
  )
}

export default IdentityStrip
