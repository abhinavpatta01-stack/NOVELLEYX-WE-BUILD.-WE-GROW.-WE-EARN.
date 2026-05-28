import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, Activity, Database, RefreshCw, Layers, ShieldCheck, Play } from 'lucide-react'

const SYSTEM_LOGS = [
  "SYSTEM: Initialize NVX-Engine v2.6.4...",
  "SECURE: SSL Handshake validated at edge gateway.",
  "DATABASE: Connected to Vector DB (12,408 embeddings loaded).",
  "API: WhatsApp webhook listener registered (Status: 200).",
  "MONITOR: System uptime verified at 99.982%.",
  "CRM: HubSpot API credentials verified.",
  "SCRAPER: Scheduled lead parsing run initiated.",
  "SCRAPER: Parsed 42 new industry profiles.",
  "AI_AGENT: Intent scoring model initialized.",
  "AI_AGENT: Processing inbound profile (ID: 9482)...",
  "AI_AGENT: Enrichment complete. Intent rating: 94% (High).",
  "CRM: Contact record created for Alexander R.",
  "WHATSAPP: Lead auto-triage dispatch completed.",
  "SYSTEM: Ready for next sequence."
]

const SystemReveal = () => {
  const [activeTab, setActiveTab] = useState('funnel')
  const [logs, setLogs] = useState([SYSTEM_LOGS[0], SYSTEM_LOGS[1], SYSTEM_LOGS[2], SYSTEM_LOGS[3]])
  const [logIndex, setLogIndex] = useState(4)
  const [simulationActive, setSimulationActive] = useState(true)
  const logsEndRef = useRef(null)

  // Append logs periodically to simulate a live active engine
  useEffect(() => {
    if (!simulationActive) return

    const interval = setInterval(() => {
      setLogs(prev => {
        const nextLogs = [...prev, SYSTEM_LOGS[logIndex]]
        if (nextLogs.length > 8) nextLogs.shift() // keep last 8 logs
        return nextLogs
      })
      setLogIndex(prev => (prev + 1) % SYSTEM_LOGS.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [logIndex, simulationActive])

  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [logs])

  return (
    <section
      id="system"
      style={{
        position: 'relative',
        width: '100%',
        padding: '8rem 2rem',
        backgroundColor: '#000000',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        overflow: 'hidden',
        zIndex: 20
      }}
    >
      {/* Spotlight blur glows */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '900px', height: '500px',
        background: 'radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
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
            Live Infrastructure Reveal
          </span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--h2)', fontWeight: 'var(--h2-weight)', color: '#fff', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
            The Active Architecture
          </h2>
          <p style={{ color: '#888', maxWidth: '600px', margin: '0 auto', fontSize: '1rem', lineHeight: 1.7 }}>
            Experience the live operational model powering our client systems. Toggle components to view simulated data pipelines.
          </p>
        </div>

        {/* Console Container */}
        <div style={{
          width: '100%',
          borderRadius: '16px',
          background: 'linear-gradient(180deg, #0f0f0f 0%, #050505 100%)',
          border: '1px solid rgba(212,175,55,0.25)',
          boxShadow: '0px 25px 80px rgba(0, 0, 0, 0.8), 0 0 40px rgba(212, 175, 55, 0.03) inset',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }} className="glow-gold-pulse">
          
          {/* Mock UI Header */}
          <div style={{ 
            height: '46px', 
            borderBottom: '1px solid rgba(255,255,255,0.06)', 
            display: 'flex', 
            alignItems: 'center', 
            padding: '0 1.5rem', 
            justifyContent: 'space-between',
            background: 'rgba(255,255,255,0.02)'
          }}>
            <div style={{ display: 'flex', gap: '6px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }} />
              <span style={{ marginLeft: '1rem', fontFamily: 'monospace', fontSize: '0.75rem', color: '#666' }}>
                nvx-engine-shell:~ guest$
              </span>
            </div>
            
            {/* System Status Indicators */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <button 
                onClick={() => setSimulationActive(!simulationActive)}
                style={{
                  background: 'transparent', border: 'none', color: simulationActive ? '#22c55e' : '#ff5f56',
                  fontSize: '0.72rem', display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', fontWeight: 700
                }}
              >
                <Activity size={12} className={simulationActive ? 'glow-gold-pulse' : ''} />
                {simulationActive ? "ENGINE RUNNING" : "ENGINE PAUSED"}
              </button>
            </div>
          </div>

          {/* Interactive Shell Body */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', minHeight: '380px' }}>
            
            {/* Left Console Panel: Live Terminal Logs */}
            <div style={{ 
              padding: '2rem', 
              borderRight: '1px solid rgba(255,255,255,0.06)',
              background: '#070707',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#D4AF37', marginBottom: '1.5rem' }}>
                <Terminal size={16} />
                <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'var(--font-heading)' }}>
                  System Logger Shell
                </span>
              </div>

              {/* Logs output */}
              <div style={{ flex: 1, fontFamily: 'monospace', fontSize: '0.82rem', color: '#A8A8A8', display: 'flex', flexDirection: 'column', gap: '0.75rem', overflowY: 'auto' }} className="hide-scroll">
                {logs.map((log, idx) => (
                  <div key={idx} style={{
                    color: log.includes('SYSTEM:') ? '#D4AF37' : log.includes('AI_AGENT:') ? '#fff' : log.includes('SECURE:') ? '#22c55e' : '#A8A8A8',
                    borderLeft: log.includes('AI_AGENT:') ? '2px solid #D4AF37' : 'none',
                    paddingLeft: log.includes('AI_AGENT:') ? '0.5rem' : 0
                  }}>
                    &gt; {log}
                  </div>
                ))}
                <div ref={logsEndRef} />
              </div>
            </div>

            {/* Right Panel: Interactive Flow Simulator */}
            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              {/* Selector Tabs */}
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {['funnel', 'logic', 'sync'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      flex: 1,
                      padding: '0.6rem 0.4rem',
                      borderRadius: '6px',
                      background: activeTab === tab ? 'rgba(212,175,55,0.08)' : 'rgba(255,255,255,0.02)',
                      border: activeTab === tab ? '1px solid #D4AF37' : '1px solid rgba(255,255,255,0.05)',
                      color: activeTab === tab ? '#fff' : '#666',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      transition: 'all 0.3s'
                    }}
                  >
                    {tab === 'funnel' ? "Acquisition" : tab === 'logic' ? "AI Agent" : "Sync Engine"}
                  </button>
                ))}
              </div>

              {/* Dynamic Diagram Area */}
              <div style={{ 
                flex: 1, 
                background: 'rgba(0,0,0,0.4)', 
                border: '1px solid rgba(255,255,255,0.04)', 
                borderRadius: '8px',
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                minHeight: '220px'
              }}>
                <AnimatePresence mode="wait">
                  {activeTab === 'funnel' ? (
                    <motion.div key="funnel" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ width: '100%', textAlign: 'center' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginBottom: '1.5rem' }}>
                        <div>
                          <div style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 800 }}>12,840</div>
                          <span style={{ fontSize: '0.65rem', color: '#666', textTransform: 'uppercase' }}>Impressions</span>
                        </div>
                        <div style={{ color: '#D4AF37' }}>&rarr;</div>
                        <div>
                          <div style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 800 }}>2,140</div>
                          <span style={{ fontSize: '0.65rem', color: '#666', textTransform: 'uppercase' }}>Qualified Hits</span>
                        </div>
                        <div style={{ color: '#D4AF37' }}>&rarr;</div>
                        <div>
                          <div style={{ color: '#22c55e', fontSize: '1.25rem', fontWeight: 800 }}>184</div>
                          <span style={{ fontSize: '0.65rem', color: '#22c55e', textTransform: 'uppercase' }}>Booked Calls</span>
                        </div>
                      </div>
                      
                      {/* Simulated conversion loading bar */}
                      <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', overflow: 'hidden' }}>
                        <motion.div 
                          animate={{ width: ['0%', '78%', '78%', '0%'] }} 
                          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                          style={{ height: '100%', background: '#D4AF37', borderRadius: '100px' }}
                        />
                      </div>
                      <div style={{ fontSize: '0.72rem', color: '#888', marginTop: '1rem', fontStyle: 'italic' }}>
                        Conversion rate optimized at 8.6% yield
                      </div>
                    </motion.div>
                  ) : activeTab === 'logic' ? (
                    <motion.div key="logic" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ width: '100%', textAlign: 'center' }}>
                      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
                        <div style={{ padding: '0.5rem 0.8rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '6px', fontSize: '0.75rem', color: '#888' }}>
                          Inbound Query
                        </div>
                        <span style={{ color: '#D4AF37' }}>&rarr;</span>
                        <div style={{ padding: '0.5rem 0.8rem', background: 'rgba(212,175,55,0.08)', border: '1px solid #D4AF37', borderRadius: '6px', fontSize: '0.75rem', color: '#fff', fontWeight: 600 }}>
                          NLP Intent Agent
                        </div>
                        <span style={{ color: '#D4AF37' }}>&rarr;</span>
                        <div style={{ padding: '0.5rem 0.8rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '6px', fontSize: '0.75rem', color: '#888' }}>
                          Vector Output
                        </div>
                      </div>
                      
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', justifyContent: 'center', color: '#22c55e', fontSize: '0.78rem', marginTop: '1.2rem', fontWeight: 700 }}>
                        <ShieldCheck size={14} />
                        <span>AGENT LOGIC VERIFIED: RAG CONTEXT LOADED</span>
                      </div>
                    </motion.div>
                  ) : activeTab === 'sync' ? (
                    <motion.div key="sync" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ width: '100%', textAlign: 'center' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginBottom: '1.5rem' }}>
                        <div>
                          <Database size={24} color="#D4AF37" style={{ marginBottom: '0.4rem' }} />
                          <div style={{ fontSize: '0.72rem', color: '#fff', fontWeight: 600 }}>Vector DB</div>
                        </div>
                        <div style={{ animation: 'spin 4s linear infinite', color: '#D4AF37' }}>
                          <RefreshCw size={20} />
                        </div>
                        <div>
                          <Layers size={24} color="#D4AF37" style={{ marginBottom: '0.4rem' }} />
                          <div style={{ fontSize: '0.72rem', color: '#fff', fontWeight: 600 }}>HubSpot / CRM</div>
                        </div>
                      </div>
                      <div style={{ fontSize: '0.72rem', color: '#888' }}>
                        Bidirectional syncing active. Low latency payload processing.
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default SystemReveal
