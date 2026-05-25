const fs = require('fs');

const services = [
  {
    id: 'BrandArchitecture',
    slug: 'brand-architecture',
    title: 'Brand Architecture',
    desc: "We construct strategic brand frameworks that secure elite market positioning. From visual identity to core messaging, we build the foundation required for lasting industry authority and trust.",
    features: ['Brand Identity Design', 'Positioning Systems', 'Messaging Frameworks', 'Visual Direction', 'Brand Strategy', 'Competitive Analysis']
  },
  {
    id: 'WebsiteSystems',
    slug: 'website-systems',
    title: 'Website Systems',
    desc: "We engineer high-performance, SEO-optimized digital platforms. These aren't just websites; they are conversion engines designed with immersive UI and seamless functionality to turn visitors into clients.",
    features: ['Premium UI/UX', 'Mobile Optimization', 'SEO Architecture', 'Speed Optimization', 'Conversion Systems', 'Responsive Development']
  },
  {
    id: 'SocialMediaGrowth',
    slug: 'social-media-growth',
    title: 'Social Media Growth',
    desc: "We deploy curated growth engines to build premium audiences systematically. By decoding platform algorithms, we scale your influence and capture highly targeted demographics.",
    features: ['Instagram Growth', 'LinkedIn Authority', 'Content Scaling', 'Audience Positioning', 'Engagement Systems', 'Algorithm Optimization']
  },
  {
    id: 'SEOOptimization',
    slug: 'seo-optimization',
    title: 'SEO Optimization',
    desc: "Achieve authority-driven organic visibility through precision keyword engineering. We optimize your digital footprint so your brand ranks at the top when it matters most.",
    features: ['Technical SEO', 'Keyword Research', 'On-Page SEO', 'Portfolio SEO', 'Search Visibility', 'Ranking Optimization']
  },
  {
    id: 'ContentProduction',
    slug: 'content-production',
    title: 'Content Production',
    desc: "Deliver your message through cinematic storytelling and editorial content. We craft high-end visual narratives that elevate your brand's perception and captivate your audience.",
    features: ['Video Editing', 'Motion Graphics', 'Short-form Content', 'Thumbnail Systems', 'Creative Direction', 'Content Planning']
  },
  {
    id: 'AIIntegration',
    slug: 'ai-integration',
    title: 'AI Integration',
    desc: "We integrate intelligent automation and decision engines into your workflows. Leverage cutting-edge AI models to analyze data, streamline operations, and stay ahead of the curve.",
    features: ['AI Integrations', 'GPT Systems', 'Workflow Intelligence', 'AI Automation', 'Smart Assistants', 'Prompt Engineering']
  },
  {
    id: 'PersonalBranding',
    slug: 'personal-branding',
    title: 'Personal Branding',
    desc: "We craft compelling personal narratives for founders, creators, and emerging leaders. Transition from an unseen professional to a recognized industry voice.",
    features: ['Founder Branding', 'LinkedIn Identity', 'Public Positioning', 'Authority Building', 'Executive Presence', 'Content Direction']
  },
  {
    id: 'PerformanceMarketing',
    slug: 'performance-marketing',
    title: 'Performance Marketing',
    desc: "Data-driven paid acquisition systems. We manage high-converting ad campaigns across Google and Meta platforms to generate immediate, scalable ROI.",
    features: ['Campaign Strategy', 'Ad Creatives', 'Conversion Tracking', 'A/B Testing', 'Audience Targeting', 'ROI Optimization']
  },
  {
    id: 'Web3Blockchain',
    slug: 'web3-blockchain',
    title: 'Web3 & Blockchain',
    desc: "Navigate the decentralized frontier. We provide strategic consulting and aesthetic web architecture for emerging Web3, crypto, and blockchain projects.",
    features: ['Smart Contract UI', 'dApp Design', 'Crypto Branding', 'Tokenomics Visuals', 'Web3 Architecture', 'Community Platforms']
  },
  {
    id: 'UIUXEngineering',
    slug: 'ui-ux-engineering',
    title: 'UI/UX Engineering',
    desc: "Craft frictionless user journeys. We design intuitive, aesthetically superior interfaces that reduce bounce rates and maximize user retention for your software.",
    features: ['User Research', 'Wireframing', 'Prototyping', 'Interaction Design', 'Usability Testing', 'Design Systems']
  }
];

services.forEach(svc => {
  const emailSubject = encodeURIComponent("Inquiry About " + svc.title);
  const emailBody = encodeURIComponent("Hello Novelleyx team,\n\nI am interested in your " + svc.title + " services. Please let me know how we can proceed.\n\nThanks.");

  const code = `import React, { useEffect } from 'react'
import Navbar from '../../components/home/Navbar'
import Footer from '../../components/home/Footer'
import { motion } from 'framer-motion'
import ParticleText from '../../components/home/ParticleText'
import Hills from '../../components/glsl/Hills'

const ${svc.id} = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{ backgroundColor: '#050505', minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, opacity: 0.2 }}>
        <Hills color="#22c55e" />
      </div>
      <Navbar />
      
      <main style={{ flex: 1, position: 'relative', zIndex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

        
        <div style={{ position: 'relative', zIndex: 1, padding: '150px 2rem 8rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', width: '100%', maxWidth: '900px' }}
          >
            <span style={{ color: '#D4AF37', letterSpacing: '0.2em', fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '1.5rem', display: 'inline-block' }}>
              SERVICE DOMAIN
            </span>
            <ParticleText text="${svc.title.toUpperCase()}" fontSize={70} color="#ffffff" />
            <p style={{ color: '#A8A8A8', fontSize: '1.2rem', lineHeight: 1.6, marginTop: '2rem' }}>
              ${svc.desc}
            </p>

            <div style={{ marginTop: '3rem', textAlign: 'left', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '2.5rem', backdropFilter: 'blur(10px)' }}>
              <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1.5rem', fontFamily: '"Poppins", sans-serif' }}>Detailed Capabilities</h3>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.2rem', listStyle: 'none', padding: 0 }}>
  ${svc.features.map(f => `              <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#D6D6D6', fontSize: '1rem' }}><div style={{ color: '#D4AF37' }}>✦</div>${f}</li>`).join('\n')}
              </ul>
            </div>

            <div style={{ marginTop: '4rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a 
                href="https://wa.me/917075853225?text=Hello%20NovelleyX%2C%20I%27m%20interested%20in%20${encodeURIComponent(svc.title)}"
                target="_blank" 
                rel="noopener noreferrer"
                style={{ padding: '1rem 2rem', background: '#D4AF37', color: '#000', fontSize: '1rem', fontWeight: 700, borderRadius: '8px', textDecoration: 'none', transition: 'all 0.3s', flex: '1 1 200px', maxWidth: '300px' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                WhatsApp
              </a>
              <a 
                href="mailto:novelleyx@gmail.com?subject=${emailSubject}&body=${emailBody}"
                style={{ padding: '1rem 2rem', background: 'transparent', border: '1px solid rgba(212,175,55,0.4)', color: '#D4AF37', fontSize: '1rem', fontWeight: 700, borderRadius: '8px', textDecoration: 'none', transition: 'all 0.3s', flex: '1 1 200px', maxWidth: '300px', backdropFilter: 'blur(5px)' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(212,175,55,0.1)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                Email Strategy Team
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default ${svc.id}
`;

  fs.writeFileSync(`src/pages/services/${svc.id}.jsx`, code);
});
console.log('Services generated.');

