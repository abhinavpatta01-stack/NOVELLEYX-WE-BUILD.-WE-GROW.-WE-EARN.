import React, { useState, useEffect, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { Sparkles as DreiSparkles } from '@react-three/drei'

// WebGL availability check
const isWebGLAvailable = () => {
  if (typeof window === 'undefined') return false

  // Allow forcing fallback via URL query parameter '?nowebgl=1' for testing
  const params = new URLSearchParams(window.location.search)
  if (params.get('nowebgl') === '1') {
    return false
  }

  try {
    const canvas = document.createElement('canvas')
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    )
  } catch (e) {
    return false
  }
}

const SparklesFallback = ({ count = 50, color = '#FFFFFF', minSize = 0.6, maxSize = 1.5 }) => {
  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const size = Math.random() * (maxSize - minSize) + minSize
      const left = Math.random() * 100
      const top = Math.random() * 100
      const duration = Math.random() * 8 + 4
      const delay = Math.random() * -12
      // Random drift width
      const drift = Math.random() * 30 - 15
      
      return {
        id: i,
        style: {
          position: 'absolute',
          left: `${left}%`,
          top: `${top}%`,
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: color,
          borderRadius: '50%',
          opacity: Math.random() * 0.6 + 0.2,
          boxShadow: `0 0 ${size * 2.5}px ${color}`,
          animation: `sparkleFloat-${i} ${duration}s linear infinite`,
          animationDelay: `${delay}s`,
        },
        drift
      }
    })
  }, [count, color, minSize, maxSize])

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {particles.map(p => (
        <React.Fragment key={p.id}>
          <div style={p.style} />
          <style>{`
            @keyframes sparkleFloat-${p.id} {
              0% {
                transform: translateY(0) translateX(0);
                opacity: 0;
              }
              10% {
                opacity: 1;
              }
              90% {
                opacity: 1;
              }
              100% {
                transform: translateY(-90px) translateX(${p.drift}px);
                opacity: 0;
              }
            }
          `}</style>
        </React.Fragment>
      ))}
    </div>
  )
}

export const SparklesCore = ({ 
  id, 
  background, 
  minSize, 
  maxSize, 
  particleDensity, 
  className, 
  particleColor 
}) => {
  const [webGlAvailable, setWebGlAvailable] = useState(true)

  useEffect(() => {
    setWebGlAvailable(isWebGLAvailable())
  }, [])

  if (!webGlAvailable) {
    const count = particleDensity || 50
    return (
      <div className={className} style={{ width: '100%', height: '100%', background: background || 'transparent', position: 'relative' }}>
        <SparklesFallback count={count} color={particleColor} minSize={minSize} maxSize={maxSize} />
      </div>
    )
  }

  return (
    <div className={className} style={{ width: '100%', height: '100%', background: background || 'transparent', position: 'relative' }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      >
        <DreiSparkles 
          count={particleDensity || 100} 
          scale={20} 
          size={maxSize || 2} 
          speed={0.4} 
          opacity={1} 
          color={particleColor || "#FFFFFF"}
          noise={1}
        />
      </Canvas>
    </div>
  )
}
