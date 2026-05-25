import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ScrambleText = ({ text }) => {
  const [displayText, setDisplayText] = useState(text)
  const chars = '!<>-_\\\\/[]{}—=+*^?#'
  
  const scramble = () => {
    let iteration = 0
    let interval = setInterval(() => {
      setDisplayText(
        text.split('')
          .map((letter, index) => {
            if (index < iteration) {
              return text[index]
            }
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join('')
      )
      
      if (iteration >= text.length) {
        clearInterval(interval)
      }
      
      iteration += 1 / 3
    }, 30)
  }

  return (
    <a
      href="#"
      onMouseEnter={scramble}
      style={{
        fontFamily: '"Space Mono", monospace',
        fontSize: '1rem',
        color: '#888',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        transition: 'color 0.3s ease',
      }}
      onMouseOver={(e) => (e.currentTarget.style.color = '#fff')}
      onMouseOut={(e) => (e.currentTarget.style.color = '#888')}
    >
      {displayText}
    </a>
  )
}

const Footer = () => {
  return (
    <div
      style={{
        position: 'relative',
        height: '80vh',
        clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)',
      }}
    >
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '80vh',
          backgroundColor: '#050505',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '4rem 2rem',
          zIndex: -1,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <ScrambleText text="Instagram" />
            <ScrambleText text="LinkedIn" />
            <ScrambleText text="Email" />
          </div>
          <Link
            to="/pricing"
            style={{
              fontFamily: '"Cinzel", serif',
              fontSize: '1.5rem',
              color: '#D4AF37',
              textShadow: '0 0 20px rgba(212, 175, 55, 0.5)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            Explore Subscription Systems <span style={{ fontFamily: 'Inter' }}>→</span>
          </Link>
        </div>

        <h1
          style={{
            fontFamily: '"Cinzel", serif',
            fontSize: '15vw',
            lineHeight: 0.8,
            color: '#fff',
            textAlign: 'center',
            opacity: 0.1,
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          NOVELLEYX
        </h1>
      </div>
    </div>
  )
}

export default Footer
