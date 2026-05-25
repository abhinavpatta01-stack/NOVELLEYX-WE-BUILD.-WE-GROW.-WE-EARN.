import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/home/Navbar'
import Footer from '../components/home/Footer'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Brand Architecture',
    desc: 'We construct strategic brand frameworks that secure elite market positioning. From visual identity to core messaging, we build the foundation required for lasting industry authority and trust.',
    features: ['Brand Identity Design', 'Positioning Systems', 'Messaging Frameworks', 'Visual Direction', 'Brand Strategy', 'Competitive Analysis']
  },
  {
    title: 'Website Systems',
    desc: "We engineer high-performance, SEO-optimized digital platforms. These aren't just websites; they are conversion engines designed with immersive UI and seamless functionality to turn visitors into clients.",
    features: ['Premium UI/UX', 'Mobile Optimization', 'SEO Architecture', 'Speed Optimization', 'Conversion Systems', 'Responsive Development']
  },
  {
    title: 'Social Media Growth',
    desc: 'We deploy curated growth engines to build premium audiences systematically. By decoding platform algorithms, we scale your influence and capture highly targeted demographics.',
    features: ['Instagram Growth', 'LinkedIn Authority', 'Content Scaling', 'Audience Positioning', 'Engagement Systems', 'Algorithm Optimization']
  },
  {
    title: 'SEO Optimization',
    desc: 'Achieve authority-driven organic visibility through precision keyword engineering. We optimize your digital footprint so your brand ranks at the top when it matters most.',
    features: ['Technical SEO', 'Keyword Research', 'On-Page SEO', 'Portfolio SEO', 'Search Visibility', 'Ranking Optimization']
  },
  {
    title: 'Content Production',
    desc: "Deliver your message through cinematic storytelling and editorial content. We craft high-end visual narratives that elevate your brand's perception and captivate your audience.",
    features: ['Video Editing', 'Motion Graphics', 'Short-form Content', 'Thumbnail Systems', 'Creative Direction', 'Content Planning']
  },
  {
    title: 'Media Management',
    desc: 'End-to-end asset orchestration and multi-platform channel management. We handle the distribution, scheduling, and analytics so your brand remains active and unavoidable.',
    features: ['Channel Management', 'Publishing Systems', 'Scheduling Pipelines', 'Analytics Tracking', 'Optimization Reports', 'Multi-platform Scaling']
  },
  {
    title: 'AI Systems',
    desc: 'We integrate intelligent automation and decision engines into your workflows. Leverage cutting-edge AI models to analyze data, streamline operations, and stay ahead of the curve.',
    features: ['AI Integrations', 'GPT Systems', 'Workflow Intelligence', 'AI Automation', 'Smart Assistants', 'Prompt Engineering']
  },
  {
    title: 'Automation Systems',
    desc: 'Eliminate manual friction with seamless process pipelines. We build custom outbound and operational systems that scale your output without scaling your workload.',
    features: ['Workflow Pipelines', 'CRM Automation', 'Outreach Systems', 'Business Automation', 'Lead Systems', 'Process Engineering']
  },
  {
    title: 'Portfolio Engineering',
    desc: 'We design showcase portfolios specifically engineered to convert opportunity into traction. Perfect for creators and developers looking to highlight their projects with a premium aesthetic.',
    features: ['Portfolio Design', 'Case Studies', 'Resume Systems', 'Developer Showcases', 'Project Positioning', 'Career Branding']
  },
  {
    title: 'Personal Branding',
    desc: 'We craft compelling personal narratives for founders, creators, and emerging leaders. Transition from an unseen professional to a recognized industry voice.',
    features: ['Founder Branding', 'LinkedIn Identity', 'Public Positioning', 'Authority Building', 'Executive Presence', 'Content Direction']
  }
]

const DetailedServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      {/* Hero section for Detailed Services */}
      <section style={{ 
        paddingTop: '160px', 
        paddingBottom: '4rem', 
        textAlign: 'center', 
        background: 'radial-gradient(ellipse at top, rgba(212,175,55,0.08) 0%, #000 70%)' 
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div style={{ color: '#D4AF37', letterSpacing: '0.2em', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '1rem' }}>
            Comprehensive Solutions
          </div>
          <h1 style={{ fontFamily: '"Poppins", sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>
            PREMIUM SERVICES
          </h1>
          <p style={{ color: '#888', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Explore our elite digital systems designed to engineer market dominance. Everything from AI integration to cinematic content production.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '4rem 2rem 8rem' }}>
        <div style={{ 
          maxWidth: '1280px', 
          margin: '0 auto', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '2.5rem' 
        }}>
          {services.map((svc, idx) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: (idx % 3) * 0.1 }}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '16px',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                transition: 'border-color 0.3s ease, transform 0.3s ease'
              }}
              className="detailed-service-card"
            >
              <style>{`
                .detailed-service-card:hover {
                  border-color: rgba(212,175,55,0.4) !important;
                  transform: translateY(-5px);
                  box-shadow: 0 15px 40px rgba(0,0,0,0.5);
                }
              `}</style>
              <div style={{ color: '#D4AF37', fontSize: '1.5rem', marginBottom: '1rem' }}>✦</div>
              <h3 style={{ fontFamily: '"Poppins", sans-serif', fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '1rem' }}>
                {svc.title}
              </h3>
              <p style={{ color: '#A8A8A8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                {svc.desc}
              </p>
              
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', flex: 1, marginBottom: '2.5rem' }}>
                {svc.features.map((feature, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#D6D6D6', fontSize: '0.85rem' }}>
                    <div style={{ color: '#D4AF37', fontSize: '0.6rem', marginTop: '4px' }}>✦</div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div style={{ display: 'flex', gap: '0.8rem', marginTop: 'auto' }}>
                <a
                  href={`https://wa.me/917075853225?text=Hello Novelleyx, I'm interested in ${svc.title}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    padding: '0.8rem',
                    background: '#D4AF37',
                    color: '#000',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    borderRadius: '8px',
                    transition: 'opacity 0.3s'
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  WhatsApp
                </a>
                <a
                  href={`mailto:novelleyx@gmail.com?subject=Inquiry%20About%20${svc.title}&body=Hello%20Novelleyx%20team,%0D%0A%0D%0AI%20am%20interested%20in%20your%20${svc.title}%20services.%20Please%20let%20me%20know%20how%20we%20can%20proceed.%0D%0A%0D%0AThanks.`}
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    padding: '0.8rem',
                    background: 'transparent',
                    border: '1px solid rgba(212,175,55,0.4)',
                    color: '#D4AF37',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    borderRadius: '8px',
                    transition: 'background 0.3s'
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(212,175,55,0.1)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  Email
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      <Footer />
    </div>
  )
}

export default DetailedServices
