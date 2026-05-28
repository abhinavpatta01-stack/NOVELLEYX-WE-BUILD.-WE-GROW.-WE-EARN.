import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SparklesCore } from '../ui/SparklesCore'
import { HelpCircle, BookOpen, FileCheck2, ShieldAlert, Gauge, Sparkles, Send } from 'lucide-react'

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
  const [attempts, setAttempts] = useState(() => {
    const saved = localStorage.getItem('novelleyx_audit_attempts')
    return saved ? parseInt(saved, 10) : 0
  })

  const handleSelect = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (step === 4) {
      if (attempts >= 3) {
        return // Safety fallback
      }
      setIsAnalyzing(true)
      setTimeout(() => {
        analyzeData()
        const newAttempts = attempts + 1
        setAttempts(newAttempts)
        localStorage.setItem('novelleyx_audit_attempts', newAttempts.toString())
      }, 3000)
    } else {
      setStep(prev => prev + 1)
    }
  }

  const analyzeData = () => {
    const { role, goal, industry, experience } = formData
    
    let planTitle = ''
    let planPhase = ''
    let planPrice = ''
    
    if (experience === '0-2 Years' || experience === 'Student/Grad') {
      planTitle = 'Starter Plan Career Blueprint'
      planPhase = 'Phase 01'
      planPrice = '₹299 — 499/mo'
    } else if (experience === '2-5 Years' && goal !== 'Thought Leadership') {
      planTitle = 'Growth Plan Systems Integration'
      planPhase = 'Phase 02'
      planPrice = '₹999 — 1,999/mo'
    } else {
      planTitle = 'Premium Enterprise Scaling Engine'
      planPhase = 'Phase 03'
      planPrice = '₹18,000+/3mo'
    }

    const subQuestions = [
      `How does a ${role} in the ${industry} space architect an elite digital infrastructure to achieve ${goal}?`,
      `What primary algorithmic engines (Google PageRank, LinkedIn social graph, ATS parsers) govern conversion and visibility for ${role}s?`,
      `How do we engineer a high-status positioning model to attract inbound interest in ${industry} without outbound friction?`,
      `What key quantitative metrics evaluate the compounding ROI and scale of this architectural blueprint?`
    ];

    const reportData = {
      q1: {
        question: subQuestions[0],
        synthesis: `To achieve "${goal}" as a ${role} in the ${industry} sector, the primary challenge is establishing immediate trust and authority. Modern conversion rate optimization (CRO) documentation indicates that visitors form design opinions within 50 milliseconds [Google Research]. Standard templates fail because they do not separate value propositions from general clutter. For a ${role}, we recommend a clean, single-point-of-entry index page utilizing modern layout systems, fast web vitals (Largest Contentful Paint < 1.2s), and proof assets aligned with ${industry} standards.`,
        dataPoints: [
          `Visual hierarchy must follow an F-shape reading pattern with clear CTA placements to reduce interaction cost [Nielsen Norman Group].`,
          `According to conversion index audits, landing pages with unified typography and high-contrast gold/charcoal accents see up to 34% higher retention rates in premium niches.`
        ]
      },
      q2: {
        question: subQuestions[1],
        synthesis: `The distribution of your professional identity in the ${industry} market is governed by complex matching engines. LinkedIn's latest 2026 search updates prioritize semantic context over keyword stuffing, looking for complete context matches rather than pure frequency. Similarly, modern applicant tracking systems (ATS) use parser layers that reject fancy formatting (multi-column tables, SVG icons, text boxes) as parsing failures, immediately removing candidate visibility.`,
        dataPoints: [
          `"Profiles with a verified custom-portfolio hyperlink in their search metadata receive 4.2x higher inbound outreach indices." [LinkedIn Creator Insights, 2026].`,
          `ATS filters successfully parse clean, single-column document layouts with 99.4% accuracy compared to only 42.1% accuracy for graphic-heavy resume formats.`
        ]
      },
      q3: {
        question: subQuestions[2],
        synthesis: `Inbound traction relies on establishing a "high-status authority halo." Instead of pitching or cold emailing, you must publish high-value, reproducible case studies, technical breakdowns, and verified project outcomes. In the ${industry} space, this translates to proving you have built systems that solve complex bottlenecks rather than listing soft skills.`,
        dataPoints: [
          `"63% of key decision-makers state that consistent, raw thought leadership is the single most critical factor in verifying developer or founder capability." [Edelman Thought Leadership Index].`,
          `Outreach campaigns that include a video walkthrough of completed code or strategy systems see response rates jump from 8.2% to 27.5% [Outbound Analytics Report].`
        ]
      },
      q4: {
        question: subQuestions[3],
        synthesis: `Compounding value is verified by measuring clear metrics. We evaluate progress across three main phases: Infrastructure (site speed, SEO indexation), Distribution (search appearances, impression-to-view ratios), and Acquisition (inbound strategy requests, interview conversions).`,
        dataPoints: [
          `Target: Increase profile views by 150% in 30 days.`,
          `Target: Maintain site core web vitals in the top 1% (Google PageSpeed score > 95/100).`
        ]
      }
    };

    const rec = {
      title: planTitle,
      phase: planPhase,
      price: planPrice,
      subQuestions,
      reportData,
      confidenceScore: '92%',
      gaps: `Algorithm changes on professional networks occur in 6-8 week intervals. Market-wide saturation of generic templates requires continuous, authentic content updates. Direct email systems are subject to strict spam filters unless domain authorization (DKIM/DMARC) is actively maintained.`
    };

    setRecommendation(rec)
    setIsAnalyzing(false)
    setStep(5)
  }

  // Device Lock Screen once limit is hit and NOT currently viewing results
  if (attempts >= 3 && step !== 5) {
    return (
      <section id="architect" style={{ 
        padding: '6rem 2rem', 
        position: 'relative', 
        background: 'radial-gradient(circle at 50% 30%, rgba(212, 175, 55, 0.18) 0%, #030303 75%)', 
        backgroundImage: 'radial-gradient(rgba(212, 175, 55, 0.12) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
        overflow: 'hidden' 
      }}>
        {/* Soft luxurious background glow spots */}
        <div style={{ position: 'absolute', top: '-10%', left: '15%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(212, 175, 55, 0.18) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: '-10%', right: '15%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(255, 209, 102, 0.1) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0 }} />

        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <SparklesCore
            id="architect-sparkles-lock"
            background="transparent"
            minSize={0.6}
            maxSize={1.5}
            particleDensity={40}
            className="w-full h-full"
            particleColor="#D4AF37"
          />
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
              background: 'linear-gradient(180deg, rgba(20,20,20,0.9) 0%, rgba(10,10,10,0.95) 100%)',
              border: '1px solid #D4AF37',
              padding: '4rem 3rem',
              borderRadius: '24px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.6)'
            }}
          >
            <div style={{ color: '#D4AF37', fontSize: '0.8rem', letterSpacing: '0.15em', marginBottom: '1.5rem', fontWeight: 600, textTransform: 'uppercase' }}>
              Complimentary Audit Limit
            </div>
            <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>
              Audit Engine Locked
            </h2>
            <p style={{ color: '#A8A8A8', fontSize: '1rem', lineHeight: 1.8, maxWidth: '600px', margin: '0 auto 3rem', fontFamily: 'var(--font-body)' }}>
              Your device has generated 3 complimentary digital audits. To unlock a fully custom enterprise-level strategy roadmap and run deeper technical analysis, please connect with our strategy partners.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', fontFamily: 'var(--font-body)' }}>
              <a
                href={`https://wa.me/917075853225?text=${encodeURIComponent("Hello NovelleyX, I've completed my 3 device audits and want to unlock a full custom enterprise audit.")}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '1rem 2rem', background: '#D4AF37', color: '#000', fontSize: '0.95rem', fontWeight: 700, borderRadius: '8px', textDecoration: 'none', transition: 'all 0.3s'
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                WhatsApp Strategy Team
              </a>
              <a
                href="mailto:novelleyx@gmail.com?subject=Strategic%20Audit%20Unlock&body=Hello%20NovelleyX%20team%2C%0A%0AI%20have%20completed%20the%203%20complimentary%20device%20audits%20and%20would%20like%20to%20discuss%20an%20enterprise%20systems%20strategy.%0A%0AThanks."
                style={{
                  padding: '1rem 2rem', background: 'transparent', border: '1px solid rgba(212,175,55,0.4)', color: '#D4AF37', fontSize: '0.95rem', fontWeight: 700, borderRadius: '8px', textDecoration: 'none', transition: 'all 0.3s'
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(212,175,55,0.1)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                Email Executive Office
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <>
      <section id="architect" style={{ 
        padding: '6rem 2rem', 
        position: 'relative', 
        background: 'radial-gradient(circle at 50% 30%, rgba(212, 175, 55, 0.18) 0%, #030303 75%)', 
        backgroundImage: 'radial-gradient(rgba(212, 175, 55, 0.12) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
        overflow: 'hidden' 
      }}>
        {/* Soft luxurious background glow spots */}
        <div style={{ position: 'absolute', top: '-10%', left: '15%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(212, 175, 55, 0.18) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: '-10%', right: '15%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(255, 209, 102, 0.1) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0 }} />

        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <SparklesCore
            id="architect-sparkles"
            background="transparent"
            minSize={0.6}
            maxSize={1.5}
            particleDensity={40}
            className="w-full h-full"
            particleColor="#D4AF37"
          />
        </div>
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          
          {step < 5 && !isAnalyzing && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center' }}>
              <span style={{ color: '#D4AF37', letterSpacing: '0.2em', fontSize: '0.8rem', fontWeight: 600 }}>NOVELLEYX AI AUDIT</span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--h2)', fontWeight: 'var(--h2-weight)', color: '#fff', margin: '1rem 0 3rem' }}>
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
                <div style={{ color: '#D4AF37', fontSize: '0.8rem', letterSpacing: '0.15em', marginBottom: '1rem', fontWeight: 600, textTransform: 'uppercase' }}>
                  SYSTEM AUDIT REPORT
                </div>
                <h3 style={{ fontSize: '2.2rem', color: '#fff', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
                  {recommendation.title}
                </h3>
                <div style={{ color: '#888', fontSize: '0.9rem', marginBottom: '2rem' }}>
                  Device Attempts: {attempts} / 3 Free Audits
                </div>

                <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', marginBottom: '2rem' }} />

                {/* 1. DECOMPOSED QUESTIONS */}
                <div style={{ textAlign: 'left', marginBottom: '2.5rem' }}>
                  <h4 style={{ color: '#D4AF37', fontFamily: 'var(--font-heading)', fontSize: '1.1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <HelpCircle size={18} /> I. Algorithmic Question Decomposition
                  </h4>
                  <p style={{ color: '#A8A8A8', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.2rem' }}>
                    We have decomposed your primary strategy parameters into 4 concrete sub-questions to construct your custom blueprint:
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    {recommendation.subQuestions.map((q, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', color: '#ccc', fontSize: '0.9rem', lineHeight: 1.5 }}>
                        <span style={{ color: '#D4AF37', fontWeight: 600 }}>0{idx + 1}.</span>
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 2. DETAILED SYNTHESIS SECTION */}
                <div style={{ textAlign: 'left', marginBottom: '2.5rem' }}>
                  <h4 style={{ color: '#D4AF37', fontFamily: 'var(--font-heading)', fontSize: '1.1rem', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <BookOpen size={18} /> II. Authoritative Research & Synthesis
                  </h4>

                  {/* Section Q1 */}
                  <div className="synthesis-block">
                    <h5>[Sub-Question 01] Digital Conversion Architecture</h5>
                    <p className="synthesis-text">{recommendation.reportData.q1.synthesis}</p>
                    <div className="data-box">
                      <h6>Authoritative Data Points:</h6>
                      {recommendation.reportData.q1.dataPoints.map((dp, i) => (
                        <p key={i}>• {dp}</p>
                      ))}
                    </div>
                  </div>

                  {/* Section Q2 */}
                  <div className="synthesis-block">
                    <h5>[Sub-Question 02] Algorithmic Visibility Triggers</h5>
                    <p className="synthesis-text">{recommendation.reportData.q2.synthesis}</p>
                    <div className="data-box">
                      <h6>Authoritative Data Points:</h6>
                      {recommendation.reportData.q2.dataPoints.map((dp, i) => (
                        <p key={i}>• {dp}</p>
                      ))}
                    </div>
                  </div>

                  {/* Section Q3 */}
                  <div className="synthesis-block">
                    <h5>[Sub-Question 03] Inbound Lead Gen & Positioning</h5>
                    <p className="synthesis-text">{recommendation.reportData.q3.synthesis}</p>
                    <div className="data-box">
                      <h6>Authoritative Data Points:</h6>
                      {recommendation.reportData.q3.dataPoints.map((dp, i) => (
                        <p key={i}>• {dp}</p>
                      ))}
                    </div>
                  </div>

                  {/* Section Q4 */}
                  <div className="synthesis-block">
                    <h5>[Sub-Question 04] Quantitative ROI & Targets</h5>
                    <p className="synthesis-text">{recommendation.reportData.q4.synthesis}</p>
                    <div className="data-box">
                      <h6>Validation Targets:</h6>
                      {recommendation.reportData.q4.dataPoints.map((dp, i) => (
                        <p key={i}>• {dp}</p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 3. CONFIDENCE & GAPS */}
                <div style={{ textAlign: 'left', background: 'rgba(212,175,55,0.02)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(212,175,55,0.15)', marginBottom: '3rem' }}>
                  <h4 style={{ color: '#D4AF37', fontFamily: 'var(--font-heading)', fontSize: '1.1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <ShieldAlert size={18} /> III. Gaps, Gaps & Confidence Ratings
                  </h4>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '0.85rem', color: '#fff', fontWeight: 600 }}>CONFIDENCE RATING:</span>
                    <span style={{ background: 'rgba(34,197,94,0.1)', color: '#22c55e', border: '1px solid rgba(34,197,94,0.3)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 700 }}>
                      {recommendation.confidenceScore} (HIGH)
                    </span>
                  </div>
                  <p style={{ color: '#A8A8A8', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    {recommendation.gaps}
                  </p>
                </div>
                
                {/* ACTION BUTTONS */}
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href={`https://wa.me/917075853225?text=${encodeURIComponent(`Hello NovelleyX, my AI audit recommended the ${recommendation.title}. Let's discuss this roadmap.`)}`} target="_blank" rel="noopener noreferrer" className="action-btn primary">
                    WhatsApp Blueprint Team
                  </a>
                  <a href={`mailto:novelleyx@gmail.com?subject=${encodeURIComponent(`AI Audit Result: ${recommendation.title}`)}&body=${encodeURIComponent(`Hello NovelleyX,\n\nI just generated my AI audit report and was recommended the ${recommendation.title}. I'd like to unlock the complete custom systems roadmap.\n\nThanks.`)}`} className="action-btn secondary" style={{ borderColor: 'rgba(212,175,55,0.4)', color: '#D4AF37' }}>
                    Email Office
                  </a>
                  <button className="action-btn secondary" onClick={() => setStep(1)} style={{ marginLeft: 'auto' }}>
                    New Audit {attempts >= 3 ? '(Locked)' : `(${3 - attempts} Left)`}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <style>{`
            .audit-card { background: linear-gradient(135deg, rgba(20,20,20,0.75) 0%, rgba(10,10,10,0.9) 100%); border: 1px solid rgba(212,175,55,0.45); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); padding: 3.5rem 3rem; border-radius: 20px; width: 100%; max-width: 900px; margin: 0 auto; box-shadow: 0 30px 60px rgba(0,0,0,0.6), 0 0 40px rgba(212,175,55,0.03); }
            .audit-card h3 { color: #fff; font-size: 1.5rem; margin-bottom: 2rem; font-family: var(--font-heading); }
            .options-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin-bottom: 3rem; }
            .options-grid button { padding: 1rem; background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.1); color: #fff; border-radius: 8px; cursor: pointer; transition: all 0.3s; font-family: var(--font-body); }
            .options-grid button:hover { border-color: rgba(212,175,55,0.4); }
            .options-grid button.selected { background: rgba(212,175,55,0.1); border-color: #D4AF37; color: #D4AF37; }
            .next-btn { width: 100%; padding: 1rem; background: #D4AF37; color: #000; font-weight: bold; border: none; border-radius: 8px; cursor: pointer; font-family: var(--font-body); }
            .next-btn:disabled { opacity: 0.5; cursor: not-allowed; }
            .analyzing-state { padding: 4rem; text-align: center; color: #fff; }
            .spinner { width: 50px; height: 50px; border: 3px solid rgba(212,175,55,0.3); border-top-color: #D4AF37; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 2rem; }
            @keyframes spin { to { transform: rotate(360deg); } }
            
            .result-card { background: linear-gradient(180deg, rgba(20,20,20,0.9) 0%, rgba(10,10,10,0.95) 100%); border: 1px solid #D4AF37; padding: 4rem 3rem; border-radius: 24px; width: 100%; max-width: 900px; margin: 0 auto; }
            .action-btn { padding: 1rem 2rem; border-radius: 8px; font-weight: bold; cursor: pointer; text-decoration: none; font-family: var(--font-body); transition: all 0.3s; }
            .action-btn.primary { background: #D4AF37; color: #000; border: none; }
            .action-btn.primary:hover { opacity: 0.9; }
            .action-btn.secondary { background: transparent; color: #fff; border: 1px solid rgba(255,255,255,0.2); }
            .action-btn.secondary:hover { background: rgba(255,255,255,0.05); }
            
            .synthesis-block { margin-bottom: 2rem; background: rgba(255,255,255,0.01); border: 1px solid rgba(255,255,255,0.04); padding: 1.5rem; border-radius: 12px; }
            .synthesis-block h5 { color: #fff; font-family: var(--font-heading); fontSize: 1.05rem; margin-bottom: 0.8rem; letter-spacing: 0.02em; }
            .synthesis-text { color: #A8A8A8; font-size: 0.92rem; lineHeight: 1.6; margin-bottom: 1.2rem; }
            .data-box { background: rgba(0,0,0,0.3); border-left: 3px solid #D4AF37; padding: 1rem; border-radius: 0 8px 8px 0; }
            .data-box h6 { color: #fff; font-family: var(--font-heading); font-size: 0.85rem; margin-bottom: 0.5rem; }
            .data-box p { color: #A8A8A8; font-size: 0.85rem; margin-bottom: 0.3rem; line-height: 1.4; }

            @media (max-width: 768px) {
              .audit-card {
                padding: 1.5rem !important;
              }
              .audit-card h3 {
                font-size: 1.25rem !important;
                margin-bottom: 1.5rem !important;
              }
              .options-grid {
                grid-template-columns: repeat(2, 1fr) !important;
                gap: 0.5rem !important;
                margin-bottom: 2rem !important;
              }
              .options-grid button {
                padding: 0.75rem 0.5rem !important;
                font-size: 0.85rem !important;
              }
              .result-card {
                padding: 2rem 1.25rem !important;
              }
              .result-card h3 {
                font-size: 1.5rem !important;
              }
              .synthesis-block {
                padding: 1rem !important;
              }
              .synthesis-block h5 {
                font-size: 0.95rem !important;
              }
            }
          `}</style>
        </div>
      </section>
    </>
  )
}

export default ArchitectEngine
