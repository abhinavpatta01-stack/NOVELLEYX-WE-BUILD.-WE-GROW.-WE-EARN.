import React, { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const HillsMesh = ({ color }) => {
  const meshRef = useRef()

  const shaderArgs = useMemo(
    () => ({
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color(color || '#D4AF37') },
      },
      vertexShader: `
        uniform float uTime;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec3 pos = position;
          
          // Basic noise/undulation
          float elevation = sin(pos.x * 2.0 + uTime * 0.5) * 0.2
                          + cos(pos.y * 2.0 + uTime * 0.3) * 0.2;
                          
          pos.z += elevation;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        varying vec2 vUv;
        void main() {
          // Fade out towards edges
          float dist = distance(vUv, vec2(0.5));
          float alpha = smoothstep(0.5, 0.2, dist);
          gl_FragColor = vec4(uColor, alpha);
        }
      `,
      transparent: true,
      wireframe: true,
    }),
    []
  )

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.material.uniforms.uColor.value = new THREE.Color(color || '#D4AF37')
    }
  }, [color])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.material.uniforms.uTime.value = state.clock.elapsedTime
    }
  })

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -0.5, 0]}>
      <planeGeometry args={[10, 10, 64, 64]} />
      <shaderMaterial args={[shaderArgs]} />
    </mesh>
  )
}

const Hills = ({ color }) => {
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
