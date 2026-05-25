import React, { useRef, useEffect, useState } from 'react'

const ParticleText = ({ text, fontSize = 100, color = '#ffffff' }) => {
  const canvasRef = useRef(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let particles = []
    
    // Fit canvas to parent container
    const resizeCanvas = () => {
      const parent = canvas.parentElement
      canvas.width = parent.clientWidth || window.innerWidth
      canvas.height = parent.clientHeight || 200
      initParticles()
    }

    const initParticles = () => {
      particles = []
      // Use offscreen canvas to get pixel data of the text
      const offCanvas = document.createElement('canvas')
      const offCtx = offCanvas.getContext('2d')
      offCanvas.width = canvas.width
      offCanvas.height = canvas.height
      
      offCtx.font = `bold ${fontSize}px "Poppins", sans-serif`
      offCtx.fillStyle = color
      offCtx.textAlign = 'center'
      offCtx.textBaseline = 'middle'
      offCtx.fillText(text, offCanvas.width / 2, offCanvas.height / 2)
      
      const imgData = offCtx.getImageData(0, 0, offCanvas.width, offCanvas.height).data
      
      // Sample pixels
      for (let y = 0; y < offCanvas.height; y += 4) {
        for (let x = 0; x < offCanvas.width; x += 4) {
          const index = (y * offCanvas.width + x) * 4
          const alpha = imgData[index + 3]
          if (alpha > 128) {
            particles.push({
              targetX: x,
              targetY: y,
              // Start randomly scattered
              x: Math.random() * canvas.width,
              y: Math.random() * canvas.height,
              vx: 0,
              vy: 0,
              radius: Math.random() * 1.5 + 0.5,
              color: `rgba(${imgData[index]}, ${imgData[index+1]}, ${imgData[index+2]}, ${alpha/255})`
            })
          }
        }
      }
    }

    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()

    let phase = 'in' // 'in' or 'out'
    let lastSwitchTime = Date.now()

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const now = Date.now()
      
      // 15 sec in, 25 sec out
      if (phase === 'in' && now - lastSwitchTime > 15000) {
        phase = 'out'
        lastSwitchTime = now
      } else if (phase === 'out' && now - lastSwitchTime > 25000) {
        phase = 'in'
        lastSwitchTime = now
      }

      particles.forEach(p => {
        if (phase === 'in') {
          // Move towards target
          const dx = p.targetX - p.x
          const dy = p.targetY - p.y
          p.x += dx * 0.05
          p.y += dy * 0.05
        } else {
          // Move outwards / float around
          p.x += (Math.random() - 0.5) * 2
          p.y += (Math.random() - 0.5) * 2
        }

        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [text, fontSize, color])

  return (
    <div style={{ width: '100%', height: '150px', position: 'relative' }}>
      <canvas 
        ref={canvasRef} 
        style={{ display: 'block', width: '100%', height: '100%' }}
      />
    </div>
  )
}

export default ParticleText
