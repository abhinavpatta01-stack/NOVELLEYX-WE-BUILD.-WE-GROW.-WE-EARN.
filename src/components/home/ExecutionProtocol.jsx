import React from 'react'
import { motion } from 'framer-motion'

const ExecutionProtocol = () => {
  const nodes = [
    { id: 1, title: '00-24H: Infrastructure Build', angle: -90, radius: 150 },
    { id: 2, title: '24-48H: Identity Inflow', angle: 30, radius: 250 },
    { id: 3, title: '48-72H: Global Launch', angle: 150, radius: 350 },
  ]

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        background: 'radial-gradient(circle at center, #0a0a0a 0%, #000000 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '4rem 2rem',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '6rem', zIndex: 10 }}>
        <h2 style={{ fontFamily: '"Cinzel", serif', fontSize: '3rem', color: '#fff' }}>
          THE 72-HOUR GAUNTLET
        </h2>
        <p style={{ color: '#D4AF37', fontFamily: '"Space Mono", monospace', marginTop: '1rem', letterSpacing: '0.2em' }}>
          EXECUTION PROTOCOL
        </p>
      </div>

      <div style={{ position: 'relative', width: '800px', height: '800px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Glowing orbital rings */}
        {[150, 250, 350].map((radius, i) => (
          <motion.div
            key={`ring-${i}`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: i * 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'absolute',
              width: `${radius * 2}px`,
              height: `${radius * 2}px`,
              borderRadius: '50%',
              border: '1px solid rgba(212, 175, 55, 0.1)',
              boxShadow: 'inset 0 0 20px rgba(212, 175, 55, 0.05), 0 0 20px rgba(212, 175, 55, 0.05)',
            }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((node, i) => {
          const rad = (node.angle * Math.PI) / 180
          const x = Math.cos(rad) * node.radius
          const y = Math.sin(rad) * node.radius

          return (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 + i * 0.5, type: 'spring', stiffness: 100, damping: 20 }}
              style={{
                position: 'absolute',
                transform: `translate(${x}px, ${y}px)`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 0px rgba(212, 175, 55, 0.2)',
                    '0 0 30px rgba(212, 175, 55, 0.6)',
                    '0 0 0px rgba(212, 175, 55, 0.2)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
                style={{
                  width: '24px',
                  height: '24px',
                  background: '#D4AF37',
                  borderRadius: '50%',
                  border: '4px solid #000',
                  zIndex: 2,
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  marginTop: '1rem',
                  whiteSpace: 'nowrap',
                  background: 'rgba(10, 10, 10, 0.8)',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '4px',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  backdropFilter: 'blur(4px)',
                }}
              >
                <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '0.875rem', color: '#fff' }}>
                  {node.title}
                </span>
              </div>
            </motion.div>
          )
        })}

        {/* Center core */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: 'spring' }}
          style={{
            width: '60px',
            height: '60px',
            background: 'linear-gradient(135deg, #D4AF37, #C5B358)',
            borderRadius: '50%',
            boxShadow: '0 0 50px rgba(212, 175, 55, 0.5)',
            zIndex: 1,
          }}
        />
      </div>
    </section>
  )
}

export default ExecutionProtocol
