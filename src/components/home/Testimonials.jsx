import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: "Alex R.",
    role: "Founder, TechFlow AI",
    content: "NovelleyX completely engineered our digital identity. Within 3 months, our inbound leads skyrocketed. They don't just build websites; they build conversion machines.",
    image: "https://i.pravatar.cc/150?u=alexr"
  },
  {
    name: "Sarah Jenkins",
    role: "Creator & Strategist",
    content: "The Architect Engine was incredibly accurate. They mapped out my personal brand strategy and executed it flawlessly. I went from invisible to an industry authority.",
    image: "https://i.pravatar.cc/150?u=sarahj"
  },
  {
    name: "David Chen",
    role: "Marketing Director, Elevate",
    content: "Their UI/UX engineering and performance marketing systems are world-class. The ROI on our campaigns doubled after their strategic intervention.",
    image: "https://i.pravatar.cc/150?u=davidc"
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials" style={{ padding: '6rem 2rem', background: '#050505', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ 
            display: 'inline-block', fontSize: '0.72rem', fontWeight: 600, 
            letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D4AF37', 
            marginBottom: '1rem',
            border: '1px solid rgba(212,175,55,0.3)',
            padding: '0.4rem 1rem',
            borderRadius: '100px',
            background: 'rgba(212,175,55,0.05)'
          }}>
            Client Success
          </span>
          <h2 style={{ fontFamily: '"Cinzel", serif', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', marginBottom: '1rem' }}>
            Trusted by the Elite
          </h2>
          <p style={{ color: '#888', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Our systems have scaled brands, creators, and enterprises globally.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '16px',
                padding: '2.5rem',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ color: '#D4AF37', fontSize: '2rem', fontFamily: 'serif', lineHeight: 1, marginBottom: '1rem' }}>"</div>
              <p style={{ color: '#A8A8A8', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem', flex: 1 }}>
                {t.content}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src={t.image} alt={t.name} style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} />
                <div>
                  <h4 style={{ color: '#fff', margin: 0, fontSize: '0.95rem' }}>{t.name}</h4>
                  <span style={{ color: '#666', fontSize: '0.8rem' }}>{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
