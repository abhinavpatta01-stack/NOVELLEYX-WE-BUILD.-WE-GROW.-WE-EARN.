import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { firstName, lastName, email, subject, message } = formData
    const bodyText = `Name: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`
    window.location.href = `mailto:novelleyx@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`
  }

  return (
    <section id="contact" style={{ padding: '4rem 2rem', background: '#050505', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            background: 'linear-gradient(135deg, rgba(20,20,20,0.8), rgba(10,10,10,0.95))',
            border: '1px solid rgba(212,175,55,0.2)',
            borderRadius: '24px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
          }}
        >
          {/* Contact Info (Left) */}
          <div style={{ 
            flex: '1 1 400px', 
            padding: '4rem', 
            background: 'linear-gradient(180deg, rgba(212,175,55,0.05) 0%, transparent 100%)',
            borderRight: '1px solid rgba(255,255,255,0.05)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <span style={{ color: '#D4AF37', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Let's Talk
            </span>
            <h2 style={{ fontFamily: '"Cinzel", serif', fontSize: '3rem', color: '#fff', marginBottom: '2rem' }}>
              Get in Touch
            </h2>
            <p style={{ color: '#A8A8A8', lineHeight: 1.6, marginBottom: '3rem', fontSize: '1rem' }}>
              Ready to architect your digital ecosystem? Reach out to our strategy team and let's build market dominance together.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(212,175,55,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4AF37' }}>
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ color: '#A8A8A8', fontSize: '0.85rem', marginBottom: '0.2rem' }}>Email Us</div>
                  <div style={{ color: '#fff', fontWeight: 600 }}>novelleyx@gmail.com</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(212,175,55,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4AF37' }}>
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ color: '#A8A8A8', fontSize: '0.85rem', marginBottom: '0.2rem' }}>WhatsApp / Call</div>
                  <div style={{ color: '#fff', fontWeight: 600 }}>+91 70758 53225</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(212,175,55,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4AF37' }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ color: '#A8A8A8', fontSize: '0.85rem', marginBottom: '0.2rem' }}>Headquarters</div>
                  <div style={{ color: '#fff', fontWeight: 600 }}>Global Remote</div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 'auto', paddingTop: '4rem', display: 'flex', gap: '1rem' }}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#A8A8A8', transition: 'all 0.3s', textDecoration: 'none' }} onMouseEnter={e => { e.currentTarget.style.background = '#D4AF37'; e.currentTarget.style.color = '#000' }} onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#A8A8A8' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#A8A8A8', transition: 'all 0.3s', textDecoration: 'none' }} onMouseEnter={e => { e.currentTarget.style.background = '#D4AF37'; e.currentTarget.style.color = '#000' }} onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#A8A8A8' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#A8A8A8', transition: 'all 0.3s', textDecoration: 'none' }} onMouseEnter={e => { e.currentTarget.style.background = '#D4AF37'; e.currentTarget.style.color = '#000' }} onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#A8A8A8' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
          </div>

          {/* Contact Form (Right) */}
          <div style={{ flex: '1 1 500px', padding: '4rem', display: 'flex', flexDirection: 'column' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', height: '100%' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ color: '#D6D6D6', fontSize: '0.8rem', fontWeight: 600 }}>First Name</label>
                  <input required name="firstName" value={formData.firstName} onChange={handleChange} type="text" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px', color: '#fff' }} onFocus={e => e.currentTarget.style.borderColor = '#D4AF37'} onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ color: '#D6D6D6', fontSize: '0.8rem', fontWeight: 600 }}>Last Name</label>
                  <input required name="lastName" value={formData.lastName} onChange={handleChange} type="text" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px', color: '#fff' }} onFocus={e => e.currentTarget.style.borderColor = '#D4AF37'} onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'} />
                </div>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ color: '#D6D6D6', fontSize: '0.8rem', fontWeight: 600 }}>Email Address</label>
                <input required name="email" value={formData.email} onChange={handleChange} type="email" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px', color: '#fff' }} onFocus={e => e.currentTarget.style.borderColor = '#D4AF37'} onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ color: '#D6D6D6', fontSize: '0.8rem', fontWeight: 600 }}>Subject</label>
                <input required name="subject" value={formData.subject} onChange={handleChange} type="text" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px', color: '#fff' }} onFocus={e => e.currentTarget.style.borderColor = '#D4AF37'} onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ color: '#D6D6D6', fontSize: '0.8rem', fontWeight: 600 }}>Message</label>
                <textarea required name="message" value={formData.message} onChange={handleChange} rows="5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px', color: '#fff', resize: 'vertical' }} onFocus={e => e.currentTarget.style.borderColor = '#D4AF37'} onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}></textarea>
              </div>

              <button 
                type="submit" 
                style={{ 
                  marginTop: 'auto', 
                  padding: '1.2rem', 
                  background: '#D4AF37', 
                  color: '#000', 
                  fontWeight: 700, 
                  fontSize: '1rem', 
                  border: 'none', 
                  borderRadius: '8px', 
                  cursor: 'pointer',
                  transition: 'background 0.3s'
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#FFD166'}
                onMouseLeave={e => e.currentTarget.style.background = '#D4AF37'}
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
