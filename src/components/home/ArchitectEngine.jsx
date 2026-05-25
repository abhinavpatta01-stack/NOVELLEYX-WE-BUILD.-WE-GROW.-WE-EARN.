import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ArchitectEngine = () => {
  const [role, setRole] = useState('')
  const [goal, setGoal] = useState('')
  const [industry, setIndustry] = useState('')
  const [experience, setExperience] = useState('')
  const [result, setResult] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!role || !goal || !industry || !experience) return

    const recommendations = {
      'Student / Fresher (0–1 yr)': 'Phase 01 Starter Plan',
      'Junior (1–3 yrs)': 'Phase 02 Growth Plan',
      'Mid-level (3–6 yrs)': 'Phase 02 Growth Plan',
      'Senior (6–10 yrs)': 'Phase 03 Premium Plan',
      'Executive (10+ yrs)': 'Phase 03 Premium Plan',
      'Founder / Entrepreneur': 'Phase 03 Premium Plan + Growth Acceleration Engine'
    }
    const rec = recommendations[experience] || 'Phase 02 Growth Plan'

    setResult({ role, goal, industry, experience, rec })
  }

  return (
    <section id="architect" style={{ padding: '8rem 2rem', background: 'linear-gradient(135deg, #0A0A0A, #111111)' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <span style={{ 
            display: 'inline-block', fontSize: '0.72rem', fontWeight: 600, 
            letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D4AF37', 
            marginBottom: '1.2rem' 
          }}>
            Powered by NovelleyX AI
          </span>
          <div style={{ width: '48px', height: '2px', background: '#D4AF37', margin: '1.2rem auto' }}></div>
          <h2 style={{ fontFamily: '"Poppins", sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>
            Live Architect Engine
          </h2>
          <p style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', color: '#D6D6D6', maxWidth: '560px', margin: '0 auto' }}>
            Answer four questions. Receive your personalised trajectory audit instantly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            borderRadius: '16px',
            padding: '3rem',
            textAlign: 'left'
          }}
        >
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ color: '#D6D6D6', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>Current Professional Role</label>
                <input 
                  type="text" 
                  value={role}
                  onChange={e => setRole(e.target.value)}
                  placeholder="e.g. Final-year Engineering Student"
                  required
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    padding: '0.8rem 1rem',
                    borderRadius: '8px',
                    color: '#fff',
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '0.92rem'
                  }}
                  onFocus={e => { e.currentTarget.style.borderColor = '#D4AF37'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(198,161,91,0.12)' }}
                  onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.boxShadow = 'none' }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ color: '#D6D6D6', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>Primary Career Goal</label>
                <input 
                  type="text" 
                  value={goal}
                  onChange={e => setGoal(e.target.value)}
                  placeholder="e.g. Land a product role at a top startup"
                  required
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    padding: '0.8rem 1rem',
                    borderRadius: '8px',
                    color: '#fff',
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '0.92rem'
                  }}
                  onFocus={e => { e.currentTarget.style.borderColor = '#D4AF37'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(198,161,91,0.12)' }}
                  onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.boxShadow = 'none' }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ color: '#D6D6D6', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>Industry Focus</label>
                <select 
                  value={industry}
                  onChange={e => setIndustry(e.target.value)}
                  required
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    padding: '0.8rem 1rem',
                    borderRadius: '8px',
                    color: '#fff',
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '0.92rem'
                  }}
                  onFocus={e => { e.currentTarget.style.borderColor = '#D4AF37'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(198,161,91,0.12)' }}
                  onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.boxShadow = 'none' }}
                >
                  <option value="" disabled>Select your industry</option>
                  <option value="Technology & SaaS">Technology & SaaS</option>
                  <option value="Finance & FinTech">Finance & FinTech</option>
                  <option value="Design & Creative">Design & Creative</option>
                  <option value="Marketing & Growth">Marketing & Growth</option>
                  <option value="Healthcare & BioTech">Healthcare & BioTech</option>
                  <option value="E-commerce & Retail">E-commerce & Retail</option>
                  <option value="Consulting & Strategy">Consulting & Strategy</option>
                  <option value="Content & Media">Content & Media</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ color: '#D6D6D6', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>Experience Level</label>
                <select 
                  value={experience}
                  onChange={e => setExperience(e.target.value)}
                  required
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    padding: '0.8rem 1rem',
                    borderRadius: '8px',
                    color: '#fff',
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '0.92rem'
                  }}
                  onFocus={e => { e.currentTarget.style.borderColor = '#D4AF37'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(198,161,91,0.12)' }}
                  onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.boxShadow = 'none' }}
                >
                  <option value="" disabled>Select your level</option>
                  <option value="Student / Fresher (0–1 yr)">Student / Fresher (0–1 yr)</option>
                  <option value="Junior (1–3 yrs)">Junior (1–3 yrs)</option>
                  <option value="Mid-level (3–6 yrs)">Mid-level (3–6 yrs)</option>
                  <option value="Senior (6–10 yrs)">Senior (6–10 yrs)</option>
                  <option value="Executive (10+ yrs)">Executive (10+ yrs)</option>
                  <option value="Founder / Entrepreneur">Founder / Entrepreneur</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              style={{
                marginTop: '1rem',
                padding: '0.9rem',
                background: 'linear-gradient(90deg, #F3E5AB, #D4AF37)',
                color: '#000',
                fontFamily: '"Inter", sans-serif',
                fontWeight: 700,
                fontSize: '1rem',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(212,175,55,0.28)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              Run Trajectory Audit ✨
            </button>

            <AnimatePresence>
              {result && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  style={{
                    marginTop: '2rem',
                    background: '#151515',
                    border: '1px solid rgba(198,161,91,0.3)',
                    borderRadius: '10px',
                    padding: '1.5rem',
                    overflow: 'hidden'
                  }}
                >
                  <h4 style={{ color: '#D4AF37', marginBottom: '1rem', fontSize: '1.1rem' }}>📊 Your Trajectory Audit</h4>
                  <p style={{ color: '#A8A8A8', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                    Based on your profile as a <strong style={{ color: '#fff' }}>{result.role}</strong> targeting <strong style={{ color: '#fff' }}>{result.goal}</strong> in the <strong style={{ color: '#fff' }}>{result.industry}</strong> sector ({result.experience}), our systems recommend the <strong style={{ color: '#D4AF37' }}>{result.rec}</strong>. Your trajectory aligns with the 72-Hour Gauntlet deployment — we can have your digital identity engineered, deployed, and propagated across Google, LinkedIn, and recruiter networks within 3 days.
                  </p>
                  <p style={{ color: '#A8A8A8', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '0.5rem' }}>
                    <strong style={{ color: '#fff' }}>Here are 3 steps to achieve your goals:</strong>
                  </p>
                  <ol style={{ color: '#A8A8A8', fontSize: '0.9rem', lineHeight: 1.7, paddingLeft: '1.2rem', marginBottom: '1rem' }}>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong style={{ color: '#fff' }}>Foundation Engineering:</strong> We will reconstruct your visual identity and messaging to match the authority of your target roles in the {result.industry} space.
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong style={{ color: '#fff' }}>Algorithmic Alignment:</strong> We will deploy ATS-optimized content across your resume and LinkedIn to ensure you bypass filters and rank at the top.
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong style={{ color: '#fff' }}>Aggressive Outreach:</strong> Finally, we will build a scalable pipeline connecting you directly with recruiters and founders aligned with your goal to {result.goal}.
                    </li>
                  </ol>
                  <p style={{ color: '#D4AF37', fontSize: '0.9rem', fontWeight: 600 }}>
                    Reach out via WhatsApp or Email to begin.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default ArchitectEngine
