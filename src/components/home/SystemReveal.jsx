import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const SystemReveal = () => {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // Smooth cinematic tilts and scales
  const rotateX = useTransform(scrollYProgress, [0, 0.4], [20, 0])
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const translateY = useTransform(scrollYProgress, [0, 0.4], [100, 0])

  return (
    <section
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '150vh', // Provides scroll space
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '20vh',
        perspective: '1000px',
        zIndex: 20,
        backgroundColor: '#000000'
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontFamily: 'var(--font-brand)', fontSize: '3rem', color: '#fff' }}>
          THE LIVE ARCHITECT ENGINE
        </h2>
        <p style={{ color: '#888', fontFamily: 'var(--font-body)', marginTop: '1rem' }}>
          Unprecedented speed. Uncompromising luxury.
        </p>
      </div>

      <motion.div
        style={{
          width: '90%',
          maxWidth: '1200px',
          height: '70vh',
          borderRadius: '24px',
          background: 'linear-gradient(180deg, #111111 0%, #0a0a0a 100%)',
          border: '1px solid #333',
          boxShadow: '0px 20px 100px -20px rgba(212, 175, 55, 0.15)',
          overflow: 'hidden',
          rotateX,
          scale,
          opacity,
          y: translateY,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Mock UI Header */}
        <div style={{ height: '40px', borderBottom: '1px solid #222', display: 'flex', alignItems: 'center', padding: '0 20px', gap: '8px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
          <span style={{ marginLeft: '1rem', fontFamily: '"Space Mono", monospace', fontSize: '0.75rem', color: '#666' }}>
            root@novelleyx:~/engine/systems
          </span>
        </div>
        
        {/* Mock Content */}
        <div style={{ padding: '3rem', display: 'flex', gap: '2rem', height: 'calc(100% - 40px)' }}>
          <div style={{ flex: 1, borderRight: '1px solid #222', paddingRight: '2rem' }}>
            <h3 style={{ color: '#D4AF37', fontFamily: '"Space Mono", monospace', marginBottom: '2rem' }}>[ SYSTEM STATUS : ONLINE ]</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[1, 2, 3].map((i) => (
                <div key={i} style={{ padding: '1rem', background: '#1a1a1a', borderRadius: '8px', border: '1px solid #333' }}>
                  <div style={{ width: '60%', height: '8px', background: '#333', borderRadius: '4px', marginBottom: '8px' }} />
                  <div style={{ width: '80%', height: '8px', background: '#222', borderRadius: '4px' }} />
                </div>
              ))}
            </div>
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ width: '100%', height: '60%', background: 'radial-gradient(circle, rgba(212,175,55,0.1) 0%, rgba(0,0,0,0) 70%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <div style={{ width: '150px', height: '150px', border: '2px solid rgba(212,175,55,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 <div style={{ width: '100px', height: '100px', border: '1px dashed #D4AF37', borderRadius: '50%', animation: 'spin 10s linear infinite' }} />
               </div>
            </div>
          </div>
        </div>
      </motion.div>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  )
}

export default SystemReveal
