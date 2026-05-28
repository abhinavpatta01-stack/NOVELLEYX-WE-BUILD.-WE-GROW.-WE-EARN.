import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: "Alexander R.",
    role: "CEO, TechFlow Enterprise AI",
    content: "NovelleyX completely re-engineered our client acquisition pipeline. Within 90 days, our inbound conversion rates surged by 142% and automated lead capture scaled to mid-seven figures. They don't just build websites; they deploy revenue engines.",
    metric: "142% Conversion Spike",
    image: "https://i.pravatar.cc/150?u=alexr"
  },
  {
    name: "Sarah Jenkins",
    role: "Founding Partner, Velo Digital",
    content: "The Architect Engine was incredibly precise. They dissected our market positioning and mapped a custom CRM and brand ecosystem that solidified our industry authority. Our booking rate doubled and administration workload fell by 60%.",
    metric: "2x Call Bookings / -60% Admin",
    image: "https://i.pravatar.cc/150?u=sarahj"
  },
  {
    name: "David Chen",
    role: "VP of Growth, Elevate Capital",
    content: "Their custom AI automation and SEO infrastructure are absolute world-class. The ROI on our digital campaigns grew threefold. NovelleyX is the premier choice for organizations that value operational efficiency and scalability.",
    metric: "3.2x Marketing ROI Achieved",
    image: "https://i.pravatar.cc/150?u=davidc"
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials" style={{ padding: '8rem 2rem', background: '#000000', position: 'relative', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      {/* Background radial soft light */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(212,175,55,0.03) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span style={{ 
            display: 'inline-block', fontSize: 'var(--caption)', fontWeight: 600, 
            letterSpacing: 'var(--caption-tracking)', textTransform: 'uppercase', color: '#D4AF37', 
            marginBottom: '1rem',
            border: '1px solid rgba(212,175,55,0.3)',
            padding: '0.4rem 1.2rem',
            borderRadius: '100px',
            background: 'rgba(212,175,55,0.03)'
          }}>
            Strategic Validation
          </span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--h2)', fontWeight: 'var(--h2-weight)', color: '#fff', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
            Trusted by Enterprise Leaders
          </h2>
          <p style={{ color: '#888', maxWidth: '600px', margin: '0 auto', fontSize: '1rem', lineHeight: 1.7 }}>
            Read how we have engineered scaling infrastructure and automated growth systems for high-performing brands globally.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: 'rgba(255,255,255,0.01)',
                border: '1px solid rgba(212,175,55,0.15)',
                borderRadius: '12px',
                padding: '3rem 2.5rem',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                transition: 'border-color 0.4s, box-shadow 0.4s, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              className="testimonial-card"
            >
              <style>{`
                .testimonial-card:hover {
                  border-color: rgba(212,175,55,0.5) !important;
                  box-shadow: 0 15px 35px rgba(0,0,0,0.6), 0 0 15px rgba(212,175,55,0.05) inset;
                  transform: translateY(-5px);
                }
              `}</style>
              
              {/* Luxury Gold Stars */}
              <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1.5rem' }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#D4AF37" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              <p style={{ color: '#A8A8A8', fontSize: '0.98rem', lineHeight: 1.8, marginBottom: '2.5rem', flex: 1, fontStyle: 'italic' }}>
                "{t.content}"
              </p>

              {/* Stat callout badge */}
              <div style={{
                alignSelf: 'flex-start',
                background: 'rgba(212,175,55,0.06)',
                border: '1px solid rgba(212,175,55,0.2)',
                borderRadius: '4px',
                padding: '0.25rem 0.6rem',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#D4AF37',
                letterSpacing: '0.05em',
                marginBottom: '2rem',
                textTransform: 'uppercase'
              }}>
                {t.metric}
              </div>

              <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '1.5rem' }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src={t.image} alt={t.name} style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '1px solid rgba(212,175,55,0.2)' }} />
                <div>
                  <h4 style={{ color: '#fff', margin: 0, fontSize: '0.98rem', fontWeight: 600 }}>{t.name}</h4>
                  <span style={{ color: '#666', fontSize: '0.8rem', fontWeight: 500 }}>{t.role}</span>
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
