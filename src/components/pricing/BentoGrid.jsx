import React from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const PricingCard = ({ title, target, price, period, features, featured, delay, isBento = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      style={{
        background: featured ? 'rgba(212, 175, 55, 0.03)' : 'rgba(20, 20, 20, 0.5)',
        backdropFilter: 'blur(12px)',
        border: featured ? '1px solid rgba(212, 175, 55, 0.5)' : '1px solid rgba(51, 51, 51, 0.5)',
        borderRadius: '24px',
        padding: '3rem',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        gridColumn: isBento ? 'span 2' : 'auto'
      }}
      className="price-card"
    >
      <style>{`
        .price-card:hover { border-color: #D4AF37 !important; transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0,0,0,0.5); }
      `}</style>
      
      {featured && (
        <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: '#D4AF37', color: '#000', padding: '0.25rem 1rem', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '0.1em' }}>
          MOST POPULAR SYSTEM
        </div>
      )}

      <h3 style={{ fontFamily: '"Cinzel", serif', fontSize: '1.8rem', color: featured ? '#D4AF37' : '#fff', marginBottom: '0.5rem' }}>
        {title}
      </h3>
      <p style={{ color: '#888', fontSize: '0.875rem', marginBottom: '1.5rem', fontFamily: '"Space Mono", monospace' }}>
        {target}
      </p>

      <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
        <span style={{ fontSize: '1.5rem', color: '#D4AF37', fontWeight: 'bold' }}>₹</span>
        <span style={{ fontSize: '3.5rem', color: '#fff', fontWeight: 'bold', lineHeight: 1 }}>{price}</span>
        <span style={{ color: '#666', fontSize: '1rem' }}>{period}</span>
      </div>

      <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1, marginBottom: '2.5rem' }}>
        {features.map((feature, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', color: '#ccc', fontSize: '0.9rem', lineHeight: 1.5 }}>
            <Check size={18} color="#D4AF37" style={{ flexShrink: 0, marginTop: '2px' }} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <a 
          href={`https://wa.me/917075853225?text=${encodeURIComponent(`Hello Novelleyx, I'm interested in the ${title} subscription.`)}`} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ flex: 1, textAlign: 'center', padding: '1rem', background: featured ? '#D4AF37' : 'transparent', border: featured ? 'none' : '1px solid #D4AF37', color: featured ? '#000' : '#D4AF37', fontWeight: 'bold', borderRadius: '8px', textTransform: 'uppercase', fontSize: '0.875rem', textDecoration: 'none' }}
        >
          WhatsApp
        </a>
        <a 
          href={`mailto:novelleyx@gmail.com?subject=${encodeURIComponent(`Inquiry About ${title} Subscription`)}&body=${encodeURIComponent(`Hello Novelleyx team,\n\nI am interested in the ${title} subscription. Please share the details and how we can proceed.\n\nThanks.`)}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ flex: 1, textAlign: 'center', padding: '1rem', background: 'transparent', border: '1px solid #333', color: '#888', fontWeight: 'bold', borderRadius: '8px', textTransform: 'uppercase', fontSize: '0.875rem', textDecoration: 'none' }}
        >
          Email
        </a>
      </div>
    </motion.div>
  )
}

const BentoGrid = () => {
  return (
    <section style={{ padding: '8rem 2rem', backgroundColor: '#000' }}>
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <span style={{ color: '#D4AF37', letterSpacing: '0.2em', fontSize: '0.875rem', fontWeight: 'bold' }}>STARTUPS & RUNNING COMPANIES</span>
        <h2 style={{ fontFamily: '"Cinzel", serif', fontSize: '3rem', color: '#fff', marginTop: '1rem', marginBottom: '1rem' }}>
          CHOOSE YOUR VELOCITY
        </h2>
        <p style={{ color: '#888', maxWidth: '600px', margin: '0 auto', fontSize: '1rem', lineHeight: 1.6 }}>
          Predictable, flat-rate monthly subscriptions and one-time engineering systems for aggressive scaling and immediate market impact. Pause or cancel anytime.
        </p>
      </div>

      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '2rem' 
      }}>
        <PricingCard
          title="IDENTITY INFLOW"
          target="For Creators & Solo Founders"
          price="20,000"
          period="/mo"
          features={[
            "1 Active task request execution at a time",
            "48-Hour rapid turnaround delivery",
            "Static UI mockups & landing variations",
            "Social media promotional assets",
            "Unlimited standard asset revisions"
          ]}
          delay={0.1}
        />
        
        <PricingCard
          title="VELOCITY ENGINE"
          target="For Growing Scaleups & Brands"
          price="60,000"
          period="/mo"
          featured={true}
          features={[
            "2 Active development queues simultaneously",
            "Bespoke Webflow / React system architectures",
            "Monthly technical SEO automation sweeps",
            "24-Hour emergency priority support",
            "Seamless CRM & marketing integrations"
          ]}
          delay={0.3}
        />

        <PricingCard
          title="ENTERPRISE DOMINANCE"
          target="For Industry Authorities"
          price="1,50,000"
          period="/mo"
          features={[
            "Unlimited parallel development pipelines",
            "Custom AI integrations & advanced chatbot logic",
            "High-volume ad asset production engine",
            "Dedicated custom Slack communication hub",
            "On-demand strategic consulting modules"
          ]}
          delay={0.5}
        />
      </div>
    </section>
  )
}

export default BentoGrid
