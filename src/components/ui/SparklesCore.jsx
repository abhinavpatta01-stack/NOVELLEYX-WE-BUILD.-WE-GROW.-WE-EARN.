import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Sparkles as DreiSparkles } from '@react-three/drei'

export const SparklesCore = ({ 
  id, 
  background, 
  minSize, 
  maxSize, 
  particleDensity, 
  className, 
  particleColor 
}) => {
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
