import React from 'react'

const DottedSurface = ({ children }) => {
  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden', backgroundColor: '#050505' }}>
      {/* Background with Dotted Pattern */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, transparent 0%, #050505 80%), url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'2\' cy=\'2\' r=\'1\' fill=\'rgba(212,175,55,0.15)\'/%3E%3C/svg%3E")',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      ></div>

      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: '"Cinzel", serif',
        fontSize: '11vw',
        fontWeight: 800,
        color: 'rgba(255,255,255,0.015)',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        zIndex: 0,
        userSelect: 'none'
      }}>
        NOVELLEYX
      </div>
      
      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  )
}

export default DottedSurface
