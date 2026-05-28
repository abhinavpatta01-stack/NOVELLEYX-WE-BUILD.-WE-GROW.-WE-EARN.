import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cpu, MessageSquare, Database, UserCheck, Workflow, Bot, Zap, ArrowRight } from 'lucide-react'

const automationSystems = [
  {
    id: 'whatsapp',
    title: 'WhatsApp Automation Hub',
    icon: <MessageSquare size={22} color="#D4AF37" />,
    desc: 'Instant, automated conversational funnel that pre-qualifies incoming prospects and hooks directly into calendar bookings, eliminating manual delays.',
    pros: ['Sub-second latency auto-replies', 'NLP lead qualification rules', 'Direct WhatsApp-to-Calendly scheduling', 'Automatic voice note transcription'],
    diagramNodes: [
      { id: 'n-wa-1', label: 'Incoming WhatsApp', x: 65, y: 130, type: 'source' },
      { id: 'n-wa-2', label: 'AI Qualifier Agent', x: 240, y: 130, type: 'process' },
      { id: 'n-wa-3', label: 'CRM / Calendar', x: 415, y: 130, type: 'target' }
    ],
    diagramPaths: [
      { from: 'n-wa-1', to: 'n-wa-2', pulse: true },
      { from: 'n-wa-2', to: 'n-wa-3', pulse: true }
    ]
  },
  {
    id: 'chatbots',
    title: 'AI Chatbot Integration',
    icon: <Bot size={22} color="#D4AF37" />,
    desc: 'Bespoke customer support and consultation agents trained on custom knowledge bases. Resolves up to 80% of support queries autonomously with human-like accuracy.',
    pros: ['RAG vector databases for source truth', 'Automatic fallback to human staff', 'Semantic sentiment scoring', 'Multi-lingual capability support'],
    diagramNodes: [
      { id: 'n-cb-1', label: 'Web / App Query', x: 65, y: 80, type: 'source' },
      { id: 'n-cb-2', label: 'RAG Knowledge DB', x: 240, y: 80, type: 'process' },
      { id: 'n-cb-3', label: 'Chatbot Output', x: 240, y: 180, type: 'process' },
      { id: 'n-cb-4', label: 'Instant Resolution', x: 415, y: 130, type: 'target' }
    ],
    diagramPaths: [
      { from: 'n-cb-1', to: 'n-cb-2', pulse: true },
      { from: 'n-cb-2', to: 'n-cb-3', pulse: false },
      { from: 'n-cb-3', to: 'n-cb-4', pulse: true }
    ]
  },
  {
    id: 'crm',
    title: 'CRM Automation Pipeline',
    icon: <Database size={22} color="#D4AF37" />,
    desc: 'Connect all touchpoints to a central database. We sync lead variables, prioritize conversions based on scoring algorithms, and trigger notifications instantly.',
    pros: ['Zero-friction data syncing', 'Score-based prioritization algorithms', 'Instant Slack/Discord team pings', 'Automated email sequence drip loops'],
    diagramNodes: [
      { id: 'n-crm-1', label: 'Incoming Profile', x: 65, y: 130, type: 'source' },
      { id: 'n-crm-2', label: 'CRM Sync Engine', x: 240, y: 130, type: 'process' },
      { id: 'n-crm-3', label: 'Slack Alert', x: 415, y: 80, type: 'target' },
      { id: 'n-crm-4', label: 'Email Auto-Sequence', x: 415, y: 180, type: 'target' }
    ],
    diagramPaths: [
      { from: 'n-crm-1', to: 'n-crm-2', pulse: true },
      { from: 'n-crm-2', to: 'n-crm-3', pulse: true },
      { from: 'n-crm-2', to: 'n-crm-4', pulse: true }
    ]
  },
  {
    id: 'leadgen',
    title: 'AI Lead Generation Engine',
    icon: <UserCheck size={22} color="#D4AF37" />,
    desc: 'Autonomous scraper and enrichment pipelines that identify target companies, verify contact data, write highly personalized copy, and run outreach campaign loops.',
    pros: ['Verified contact data enrichment', 'Personalized dynamic copy AI', 'Spam-safe domain rotations', 'Automated LinkedIn hook triggers'],
    diagramNodes: [
      { id: 'n-lg-1', label: 'Data Enrichment', x: 65, y: 130, type: 'source' },
      { id: 'n-lg-2', label: 'Dynamic Mail Builder', x: 240, y: 130, type: 'process' },
      { id: 'n-lg-3', label: 'Rotated SMTP Hub', x: 415, y: 130, type: 'target' }
    ],
    diagramPaths: [
      { from: 'n-lg-1', to: 'n-lg-2', pulse: true },
      { from: 'n-lg-2', to: 'n-lg-3', pulse: true }
    ]
  }
]

const AiAutomationSection = () => {
  const [activeSystem, setActiveSystem] = useState('whatsapp')
  const activeData = automationSystems.find(s => s.id === activeSystem)

  return (
    <section id="automation" style={{ padding: 'var(--section-py) 0', background: '#050505', position: 'relative', overflow: 'hidden' }}>
      {/* Glow Effect */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '1000px', height: '600px',
        background: 'radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 60%)',
        pointerEvents: 'none', zIndex: 0
      }} />

      <div style={{ width: 'min(1280px, 92%)', marginInline: 'auto', position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <span style={{
            display: 'inline-block',
            fontSize: 'var(--caption)', fontWeight: 600,
            letterSpacing: 'var(--caption-tracking)', textTransform: 'uppercase',
            color: '#D4AF37', marginBottom: '1.2rem'
          }}>
            Premium Systems Architecture
          </span>
          <div style={{ width: '48px', height: '2px', background: '#D4AF37', margin: '0 auto 1.2rem' }} />
          <h2 style={{
            fontFamily: 'var(--font-heading)', fontSize: 'var(--h2)',
            fontWeight: 'var(--h2-weight)', color: '#fff',
            marginBottom: 'var(--heading-subtext-gap)'
          }}>
            AI Automation Infrastructure
          </h2>
          <p style={{ fontSize: 'var(--body)', color: '#888', maxWidth: '650px', margin: '0 auto', lineHeight: 1.7 }}>
            We engineer autonomous operational workflows that multiply output, remove administrative friction, and scale lead flows.
          </p>
        </div>

        {/* Dynamic Interactive Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
          
          {/* Left Column: Selector and Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* System Select Tabs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {automationSystems.map(sys => (
                <button
                  key={sys.id}
                  onClick={() => setActiveSystem(sys.id)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '1rem',
                    padding: '1.2rem 1.5rem', borderRadius: '14px',
                    background: activeSystem === sys.id ? 'rgba(212,175,55,0.06)' : 'rgba(255,255,255,0.02)',
                    border: activeSystem === sys.id ? '1px solid #D4AF37' : '1px solid rgba(255,255,255,0.06)',
                    color: activeSystem === sys.id ? '#fff' : '#888',
                    fontFamily: 'var(--font-body)', fontSize: '0.95rem', fontWeight: 600,
                    cursor: 'pointer', textAlign: 'left', transition: 'all 0.3s ease'
                  }}
                  className="automation-tab-btn"
                >
                  <div style={{
                    width: '38px', height: '38px', borderRadius: '10px',
                    background: activeSystem === sys.id ? 'rgba(212,175,55,0.1)' : 'rgba(255,255,255,0.02)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: activeSystem === sys.id ? '1px solid rgba(212,175,55,0.2)' : '1px solid transparent',
                    transition: 'all 0.3s'
                  }}>
                    {sys.icon}
                  </div>
                  <span>{sys.title}</span>
                </button>
              ))}
            </div>

            {/* System Details Box */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSystem}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                style={{
                  background: 'rgba(255,255,255,0.01)',
                  border: '1px solid rgba(255,255,255,0.04)',
                  padding: '2.5rem', borderRadius: '20px'
                }}
              >
                <h3 style={{
                  fontFamily: 'var(--font-heading)', fontSize: 'var(--h3)',
                  fontWeight: 'var(--h3-weight)', color: '#fff', marginBottom: '1rem'
                }}>
                  {activeData.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#A8A8A8', lineHeight: 1.7, marginBottom: '1.8rem' }}>
                  {activeData.desc}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  {activeData.pros.map((pro, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#D6D6D6', fontSize: '0.88rem' }}>
                      <Zap size={14} color="#D4AF37" style={{ flexShrink: 0 }} />
                      <span>{pro}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: AI Workflow Diagram */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{
              width: '100%', maxWidth: '520px', height: '360px',
              background: 'linear-gradient(180deg, #0d0d0d 0%, #080808 100%)',
              border: '1px solid rgba(212,175,55,0.15)', borderRadius: '24px',
              boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
              position: 'relative', overflow: 'hidden', padding: '1.5rem'
            }}>
              {/* Diagram Title Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
                <Workflow size={16} color="#D4AF37" />
                <span style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'var(--font-heading)' }}>
                  Interactive AI Workflow Diagram
                </span>
                <div style={{ marginLeft: 'auto', display: 'flex', gap: '4px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f56' }} />
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffbd2e' }} />
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27c93f' }} />
                </div>
              </div>

              {/* SVG Canvas for Diagram */}
              <div style={{ position: 'relative', width: '100%', height: 'calc(100% - 45px)' }}>
                <svg translate="no" className="notranslate" viewBox="0 0 480 260" style={{ width: '100%', height: '100%' }}>
                  <defs>
                    <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(212,175,55,0.1)" />
                      <stop offset="50%" stopColor="#D4AF37" />
                      <stop offset="100%" stopColor="rgba(212,175,55,0.1)" />
                    </linearGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="6" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Draw Connections */}
                  <AnimatePresence>
                    {activeData.diagramPaths.map((p, idx) => {
                      const fromNode = activeData.diagramNodes.find(n => n.id === p.from);
                      const toNode = activeData.diagramNodes.find(n => n.id === p.to);
                      if (!fromNode || !toNode) return null;

                      // Control point for smooth curved cubic lines
                      const dx = Math.abs(toNode.x - fromNode.x) * 0.5;
                      const dPath = `M ${fromNode.x} ${fromNode.y} C ${fromNode.x + dx} ${fromNode.y}, ${toNode.x - dx} ${toNode.y}, ${toNode.x} ${toNode.y}`;

                      return (
                        <g key={`${activeSystem}-path-${idx}`}>
                          {/* Background static line */}
                          <path
                            d={dPath}
                            fill="none"
                            stroke="rgba(255,255,255,0.06)"
                            strokeWidth="2"
                          />
                          {/* Animated glowing path */}
                          <motion.path
                            d={dPath}
                            fill="none"
                            stroke="rgba(212,175,55,0.4)"
                            strokeWidth="2"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.8, delay: idx * 0.2 }}
                          />
                          {/* Animated flow pulse dot */}
                          {p.pulse && (
                            <motion.circle
                              r="4"
                              fill="#D4AF37"
                              style={{ filter: 'url(#glow)' }}
                              initial={{ offsetDistance: "0%" }}
                              animate={{ offsetDistance: "100%" }}
                              transition={{
                                duration: 2.2,
                                repeat: Infinity,
                                ease: "linear",
                                delay: idx * 0.4
                              }}
                            >
                              <animateMotion path={dPath} dur="2.5s" repeatCount="indefinite" />
                            </motion.circle>
                          )}
                        </g>
                      );
                    })}
                  </AnimatePresence>

                  {/* Draw Nodes */}
                  <AnimatePresence>
                    {activeData.diagramNodes.map((node) => (
                      <g
                        key={`${activeSystem}-node-${node.id}`}
                        transform={`translate(${node.x}, ${node.y})`}
                      >
                        <motion.g
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                        >
                          <circle
                            r="6"
                            fill={node.type === 'source' ? '#333' : node.type === 'target' ? '#D4AF37' : '#1a1a1a'}
                            stroke={node.type === 'target' ? '#fff' : '#D4AF37'}
                            strokeWidth="2"
                            style={{ filter: node.type === 'target' ? 'url(#glow)' : 'none' }}
                          />
                          <rect
                            x="-65"
                            y="15"
                            width="130"
                            height="28"
                            rx="6"
                            fill="rgba(10,10,10,0.95)"
                            stroke="rgba(212,175,55,0.15)"
                            strokeWidth="1"
                          />
                          <text
                            y="32"
                            fill="#ffffff"
                            fontSize="8.5"
                            fontWeight="700"
                            textAnchor="middle"
                            fontFamily="var(--font-body)"
                            letterSpacing="0.05em"
                          >
                            {node.label}
                          </text>
                        </motion.g>
                      </g>
                    ))}
                  </AnimatePresence>
                </svg>
              </div>

              {/* Watermark brand tag */}
              <div style={{ position: 'absolute', bottom: '1.2rem', left: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem', pointerEvents: 'none' }}>
                <span style={{ fontSize: '0.65rem', color: '#555', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  System Core: NVX-Engine v2.6
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .automation-tab-btn:hover {
          border-color: rgba(212,175,55,0.5) !important;
          color: #fff !important;
        }
      `}</style>
    </section>
  )
}

export default AiAutomationSection
