import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const MouseGlowFollower = () => {
  const [glowColor, setGlowColor] = useState('rgba(212, 175, 55, 0.07)') // default faint gold glow

  const mouseX = useMotionValue(-500)
  const mouseY = useMotionValue(-500)

  // Spring physics for a highly responsive, premium cursor lag feel
  const springConfig = { damping: 30, stiffness: 220, mass: 0.6 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Offset position to center the 400px glow circle on the cursor
      mouseX.set(e.clientX - 200)
      mouseY.set(e.clientY - 200)

      // Bubble up the DOM tree from the hovered target to check for a customized data-glow-color
      let el = e.target
      let foundGlow = false
      
      while (el && el !== document.body && el.parentNode) {
        if (el.getAttribute && el.getAttribute('data-glow-color')) {
          setGlowColor(el.getAttribute('data-glow-color'))
          foundGlow = true
          break
        }
        el = el.parentNode
      }

      if (!foundGlow) {
        // Reset to default premium faint gold
        setGlowColor('rgba(212, 175, 55, 0.07)')
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <motion.div
      style={{
        position: 'fixed',
        left: x,
        top: y,
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: `radial-gradient(circle, ${glowColor} 0%, rgba(0,0,0,0) 70%)`,
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'screen',
        willChange: 'transform',
        transition: 'background 0.4s ease-out'
      }}
    />
  )
}

export default MouseGlowFollower
