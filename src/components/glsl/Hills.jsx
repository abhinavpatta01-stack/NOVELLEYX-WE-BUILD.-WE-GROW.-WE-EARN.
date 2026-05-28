import React, { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Standard WebGL availability detector
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

const HillsMesh = ({ color }) => {
  const meshRef = useRef()

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor: { value: new THREE.Color(color || '#D4AF37') },
    }),
    []
  )

  const vertexShader = `
    uniform float uTime;
    varying vec2 vUv;
    void main() {
      vUv = uv;
      vec3 pos = position;
      
      // Hyper complex multi-frequency wave undulation (digital terrain)
      float elevation = sin(pos.x * 2.5 + uTime * 0.6) * 0.22
                      + cos(pos.y * 2.0 + uTime * 0.4) * 0.15
                      + sin((pos.x + pos.y) * 1.5 + uTime * 0.3) * 0.08;
                      
      pos.z += elevation;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `

  const fragmentShader = `
    uniform vec3 uColor;
    varying vec2 vUv;
    void main() {
      // Fade out towards edges of the plane
      float dist = distance(vUv, vec2(0.5));
      float alpha = smoothstep(0.5, 0.15, dist);
      
      // Center-highlight glow (brighter in the center to look glowing/hyper)
      vec3 finalColor = mix(uColor * 1.5, uColor, dist * 2.0);
      
      gl_FragColor = vec4(finalColor, alpha);
    }
  `

  useEffect(() => {
    if (meshRef.current && meshRef.current.material) {
      meshRef.current.material.uniforms.uColor.value.set(color || '#D4AF37')
    }
  }, [color])

  useFrame((state) => {
    if (meshRef.current && meshRef.current.material) {
      meshRef.current.material.uniforms.uTime.value = state.clock.elapsedTime
    }
  })

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2.3, 0, 0]} position={[0, -0.6, 0]}>
      <planeGeometry args={[10, 10, 80, 80]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent={true}
        wireframe={true}
      />
    </mesh>
  )
}

// Stunning SVG / CSS animated luxury hills fallback with cyber dotted lines
const HillsFallback = ({ color }) => {
  const themeColor = color || '#D4AF37'

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: '#000',
        overflow: 'hidden',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      {/* Dynamic Radial Glow matches the theme color (slightly brighter) */}
      <div
        style={{
          position: 'absolute',
          top: '35%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          height: '100%',
          background: `radial-gradient(circle, ${themeColor}22 0%, transparent 65%)`,
          filter: 'blur(90px)',
          opacity: 1.0,
        }}
      />

      {/* Luxury Cyber Grid Pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          backgroundPosition: 'center center',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 40%, transparent 100%)',
          opacity: 0.8,
        }}
      />

      {/* Layered Animated Wave Lines with Cyber Dasharrays */}
      <svg
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '75%',
          opacity: 0.65,
        }}
      >
        <defs>
          <linearGradient id="wave-gradient-1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={themeColor} stopOpacity="0.3" />
            <stop offset="100%" stopColor={themeColor} stopOpacity="0.0" />
          </linearGradient>
          <linearGradient id="wave-gradient-2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={themeColor} stopOpacity="0.2" />
            <stop offset="100%" stopColor={themeColor} stopOpacity="0.0" />
          </linearGradient>
          <linearGradient id="wave-gradient-3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={themeColor} stopOpacity="0.1" />
            <stop offset="100%" stopColor={themeColor} stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* Layer 3 (Deep Background Wave - Fine Dashes) */}
        <path
          d="M0,320 C320,260 480,380 800,300 C1120,220 1280,340 1440,280 L1440,600 L0,600 Z"
          fill="url(#wave-gradient-3)"
          stroke={`${themeColor}33`}
          strokeWidth="1.5"
          strokeDasharray="4 4"
          className="fallback-wave fallback-wave-back"
        />

        {/* Layer 2 (Middle Wave - Medium Dashes) */}
        <path
          d="M0,380 C240,440 480,320 720,380 C960,440 1200,340 1440,400 L1440,600 L0,600 Z"
          fill="url(#wave-gradient-2)"
          stroke={`${themeColor}55`}
          strokeWidth="1.8"
          strokeDasharray="8 6"
          className="fallback-wave fallback-wave-mid"
        />

        {/* Layer 1 (Front Wave - Long Dashes/Glow) */}
        <path
          d="M0,460 C360,380 720,500 1080,420 C1260,380 1350,440 1440,420 L1440,600 L0,600 Z"
          fill="url(#wave-gradient-1)"
          stroke={`${themeColor}88`}
          strokeWidth="2.2"
          strokeDasharray="16 8"
          className="fallback-wave fallback-wave-front"
        />
      </svg>

      <style>{`
        @keyframes waveMoveBack {
          0% { transform: translateY(0) scaleY(1); }
          50% { transform: translateY(-16px) scaleY(1.06) skewX(1deg); }
          100% { transform: translateY(0) scaleY(1); }
        }
        @keyframes waveMoveMid {
          0% { transform: translateY(0) scaleY(1); }
          50% { transform: translateY(12px) scaleY(0.94) skewX(-1.5deg); }
          100% { transform: translateY(0) scaleY(1); }
        }
        @keyframes waveMoveFront {
          0% { transform: translateY(0) scaleY(1); }
          50% { transform: translateY(-10px) scaleY(1.03) skewX(0.5deg); }
          100% { transform: translateY(0) scaleY(1); }
        }
        .fallback-wave-back {
          animation: waveMoveBack 16s ease-in-out infinite;
          transform-origin: bottom center;
        }
        .fallback-wave-mid {
          animation: waveMoveMid 13s ease-in-out infinite;
          transform-origin: bottom center;
        }
        .fallback-wave-front {
          animation: waveMoveFront 10s ease-in-out infinite;
          transform-origin: bottom center;
        }
      `}</style>
    </div>
  )
}

const Hills = ({ color }) => {
  const [webGlAvailable, setWebGlAvailable] = useState(true)

  useEffect(() => {
    setWebGlAvailable(isWebGLAvailable())
  }, [])

  if (!webGlAvailable) {
    return <HillsFallback color={color} />
  }

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <Canvas camera={{ position: [0, 0, 2], fov: 75 }}>
        <HillsMesh color={color} />
      </Canvas>
    </div>
  )
}

export default Hills
