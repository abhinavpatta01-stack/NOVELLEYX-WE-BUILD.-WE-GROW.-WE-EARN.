import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SparklesCore } from '../ui/SparklesCore'

const ArchitectEngine = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    role: '',
    goal: '',
    industry: '',
    experience: ''
  })
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [recommendation, setRecommendation] = useState(null)

  const handleSelect = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (step === 4) {
      setIsAnalyzing(true)
      setTimeout(() => {
        analyzeData()
      }, 3000)
    } else {
      setStep(prev => prev + 1)
    }
  }

  const analyzeData = () => {
    const { experience, goal } = formData
    let rec = { title: '', desc: '', phase: '', price: '', steps: [] }

    if (experience === '0-2 Years' || experience === 'Student/Grad') {
      rec = {
        title: 'Starter Plan',
        phase: 'Phase 01',
        desc: 'Baseline engineering for portfolio, resume, and algorithmic visibility.',
        price: '₹299/mo',
        steps: [
          'Optimize LinkedIn Profile & Foundation',
          'Engineer ATS-Friendly Resume Systems',
          'Build Primary Digital Portfolio'
        ]
      }
    } else if (experience === '2-5 Years' && goal !== 'Thought Leadership') {
      rec = {
        title: 'Growth Plan',
        phase: 'Phase 02',
        desc: 'High-performers ready to aggressively capture major roles and improve outreach.',
        price: '₹999/mo',
        steps: [
          'Deploy Direct Recruiter Outreach Strategy',
          'Implement Custom Keyword Architecture',
          'Secure Interview-Ready Profile Setup'
        ]
      }
    } else {
      rec = {
        title: 'Premium Plan + Growth Acceleration Engine',
        phase: 'Phase 03',
        desc: 'Ultimate personal-brand architecture for absolute market dominance.',
        price: '₹18,000/3mo',
        steps: [
          'Full Scale Identity Architecture',
          'Managed Premium Content Distribution',
          'Execute Top 1% SEO & Authority Dominance'
        ]
      }
    }
    
    setRecommendation(rec)
    setIsAnalyzing(false)
    setStep(5)
  }

  return (
    <>
      <section id="architect" style={{ padding: '4rem 2rem', position: 'relative', backgroundColor: '#000', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <SparklesCore
            id="architect-sparkles"
            background="transparent"
            minSize={0.6}
            maxSize={1.5}
            particleDensity={120}
            className="w-full h-full"
            particleColor="#D4AF37"
          />
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          
          {step < 5 && !isAnalyzing && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <span style={{ color: '#D4AF37', letterSpacing: '0.2em', fontSize: '0.8rem', fontWeight: 600 }}>NOVELLEYX AI AUDIT</span>
              <h2 style={{ fontFamily: '"Cinzel", serif', fontSize: '2.5rem', color: '#fff', margin: '1rem 0 3rem' }}>
                ARCHITECT ENGINE
              </h2>
            </motion.div>
          )}

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="audit-card">
                <h3>What is your current professional role?</h3>
                <div className="options-grid">
                  {['Student/Grad', 'Founder/CEO', 'Creator', 'Developer', 'Executive', 'Marketer', 'Designer', 'Agency Owner', 'Freelancer', 'Other'].map(opt => (
                    <button key={opt} className={formData.role === opt ? 'selected' : ''} onClick={() => handleSelect('role', opt)}>
                      {opt}
                    </button>
                  ))}
                </div>
                <button className="next-btn" disabled={!formData.role} onClick={handleNext}>Initialize Systems &rarr;</button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="audit-card">
                <h3>Primary Objective for this quarter?</h3>
                <div className="options-grid">
                  {['Job Acquisition', 'Lead Generation', 'Thought Leadership', 'Brand Refresh', 'Audience Growth', 'Product Launch', 'Networking', 'Other'].map(opt => (
                    <button key={opt} className={formData.goal === opt ? 'selected' : ''} onClick={() => handleSelect('goal', opt)}>
                      {opt}
                    </button>
                  ))}
                </div>
                <button className="next-btn" disabled={!formData.goal} onClick={handleNext}>Next Phase &rarr;</button>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="audit-card">
                <h3>Select your primary industry.</h3>
                <div className="options-grid">
                  {['Tech/Software', 'Finance', 'Web3/Crypto', 'Creative/Design', 'E-commerce', 'Real Estate', 'Healthcare', 'Education', 'Media', 'Other'].map(opt => (
                    <button key={opt} className={formData.industry === opt ? 'selected' : ''} onClick={() => handleSelect('industry', opt)}>
                      {opt}
                    </button>
                  ))}
                </div>
                <button className="next-btn" disabled={!formData.industry} onClick={handleNext}>Next Phase &rarr;</button>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="step4" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="audit-card">
                <h3>Years of industry experience?</h3>
                <div className="options-grid">
                  {['Student/Grad', '0-2 Years', '2-5 Years', '5-10 Years', '10-15 Years', '15+ Years'].map(opt => (
                    <button key={opt} className={formData.experience === opt ? 'selected' : ''} onClick={() => handleSelect('experience', opt)}>
                      {opt}
                    </button>
                  ))}
                </div>
                <button className="next-btn" disabled={!formData.experience} onClick={handleNext}>Run Algorithmic Audit &rarr;</button>
              </motion.div>
            )}

            {isAnalyzing && (
              <motion.div key="analyzing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="analyzing-state">
                <div className="spinner"></div>
                <h3>Processing Data Parameters...</h3>
                <p>Synthesizing exact architectural blueprint for {formData.role}.</p>
              </motion.div>
            )}

            {step === 5 && recommendation && (
              <motion.div key="result" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="result-card">
                <div style={{ color: '#D4AF37', fontSize: '0.8rem', letterSpacing: '0.15em', marginBottom: '1rem' }}>SYSTEM RECOMMENDATION</div>
                <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '1rem' }}>{recommendation.title}</h3>
                <p style={{ color: '#A8A8A8', marginBottom: '2rem' }}>{recommendation.desc}</p>
                
                <div style={{ textAlign: 'left', background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(212,175,55,0.2)', marginBottom: '3rem' }}>
                  <h4 style={{ color: '#fff', marginBottom: '1.5rem', fontSize: '1.2rem' }}>Your 3-Step Action Plan:</h4>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {recommendation.steps.map((step, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#D6D6D6' }}>
                        <div style={{ minWidth: '30px', height: '30px', borderRadius: '50%', background: 'rgba(212,175,55,0.1)', color: '#D4AF37', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                          {idx + 1}
                        </div>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href={`https://wa.me/917075853225?text=Hello NovelleyX, the AI audit recommended the ${recommendation.title} for me. Let's start.`} target="_blank" rel="noopener noreferrer" className="action-btn primary">
                    WhatsApp Us
                  </a>
                  <a href={`mailto:novelleyx@gmail.com?subject=AI Audit Result: ${recommendation.title}&body=Hello NovelleyX,%0A%0AThe AI audit recommended the ${recommendation.title} for me. I would like to proceed with the action plan.%0A%0AThanks.`} className="action-btn secondary" style={{ borderColor: 'rgba(212,175,55,0.4)', color: '#D4AF37' }}>
                    Email Team
                  </a>
                  <button className="action-btn secondary" onClick={() => setStep(1)} style={{ marginLeft: 'auto' }}>
                    Run New Audit
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <style>{`
            .audit-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); padding: 3rem; border-radius: 16px; width: 100%; max-width: 900px; margin: 0 auto; }
            .audit-card h3 { color: #fff; font-size: 1.5rem; margin-bottom: 2rem; }
            .options-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin-bottom: 3rem; }
            .options-grid button { padding: 1rem; background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.1); color: #fff; border-radius: 8px; cursor: pointer; transition: all 0.3s; }
            .options-grid button:hover { border-color: rgba(212,175,55,0.4); }
            .options-grid button.selected { background: rgba(212,175,55,0.1); border-color: #D4AF37; color: #D4AF37; }
            .next-btn { width: 100%; padding: 1rem; background: #D4AF37; color: #000; font-weight: bold; border: none; border-radius: 8px; cursor: pointer; }
            .next-btn:disabled { opacity: 0.5; cursor: not-allowed; }
            .analyzing-state { padding: 4rem; text-align: center; color: #fff; }
            .spinner { width: 50px; height: 50px; border: 3px solid rgba(212,175,55,0.3); border-top-color: #D4AF37; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 2rem; }
            @keyframes spin { to { transform: rotate(360deg); } }
            .result-card { background: linear-gradient(180deg, rgba(20,20,20,0.9) 0%, rgba(10,10,10,0.95) 100%); border: 1px solid #D4AF37; padding: 4rem; border-radius: 16px; width: 100%; max-width: 900px; margin: 0 auto; }
            .action-btn { padding: 1rem 2rem; border-radius: 8px; font-weight: bold; cursor: pointer; text-decoration: none; }
            .action-btn.primary { background: #D4AF37; color: #000; border: none; }
            .action-btn.secondary { background: transparent; color: #fff; border: 1px solid rgba(255,255,255,0.2); }
          `}</style>
        </div>
      </section>
    </>
  )
}

export default ArchitectEngine
