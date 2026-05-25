import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let current = 0
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 15) + 5
      if (current >= 100) {
        current = 100
        clearInterval(interval)
        setTimeout(() => {
          setIsVisible(false)
        }, 500)
      }
      setProgress(current)
    }, 150)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: '#050505',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#D4AF37'
          }}
        >
          <div style={{ position: 'relative', width: '200px', height: '2px', background: 'rgba(212,175,55,0.2)', overflow: 'hidden', borderRadius: '2px' }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.2 }}
              style={{ position: 'absolute', top: 0, left: 0, height: '100%', background: '#D4AF37' }}
            />
          </div>
          
          <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontFamily: '"Cinzel", serif', fontSize: '2rem', fontWeight: 700, letterSpacing: '0.1em' }}>
              NOVELLEYX
            </span>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', marginTop: '0.5rem', color: '#A8A8A8' }}>
              {progress}% INITIALIZED
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader
