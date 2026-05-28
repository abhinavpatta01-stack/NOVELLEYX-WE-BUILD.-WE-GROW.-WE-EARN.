import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, Bot, Database, UserCheck, Workflow, Zap, Terminal, Activity } from 'lucide-react'

const automationSystems = [
  {
    id: 'whatsapp',
    title: 'WhatsApp Automation Hub',
    icon: <MessageSquare size={22} color="#D4AF37" />,
    desc: 'Instant, automated conversational funnel that pre-qualifies incoming prospects and hooks directly into calendar bookings, eliminating manual delays.',
    pros: ['Sub-second latency auto-replies', 'NLP lead qualification rules', 'Direct WhatsApp-to-Calendly scheduling', 'Automatic voice note transcription'],
    diagramNodes: [
      { id: 'n-wa-1', label: 'Incoming WhatsApp', x: 65, y: 110, type: 'source' },
      { id: 'n-wa-2', label: 'AI Qualifier Agent', x: 240, y: 110, type: 'process' },
      { id: 'n-wa-3', label: 'CRM / Calendar', x: 415, y: 110, type: 'target' }
    ],
    diagramPaths: [
      { from: 'n-wa-1', to: 'n-wa-2', pulse: true },
      { from: 'n-wa-2', to: 'n-wa-3', pulse: true }
    ],
    metrics: [
      { value: "12,840", label: "Impressions", sub: "Acquisitions" },
      { value: "2,140", label: "Leads", sub: "AI Qualified" },
      { value: "184", label: "Booked Calls", sub: "Meetings Sync" }
    ],
    efficiency: "Lead response time optimized to <1.2 seconds",
    systemLogs: [
      "SOURCE: Incoming WhatsApp payload received",
      "AI_AGENT: Triage agent parsing message intent...",
      "AI_AGENT: Intent classified: Booking Inquiry",
      "SECURE: Verification handshake parameters validated",
      "DATABASE: Checking CRM duplicate contact records",
      "SYSTEM: Checking calendar availability slots",
      "SECURE: WhatsApp auto-response dispatched (Status: 200)",
      "SYSTEM: Calendar booking webhook registered successfully",
      "MONITOR: Lead pipeline execution complete"
    ]
  },
  {
    id: 'chatbots',
    title: 'AI Chatbot Integration',
    icon: <Bot size={22} color="#D4AF37" />,
    desc: 'Bespoke customer support and consultation agents trained on custom knowledge bases. Resolves up to 80% of support queries autonomously with human-like accuracy.',
    pros: ['RAG vector databases for source truth', 'Automatic fallback to human staff', 'Semantic sentiment scoring', 'Multi-lingual capability support'],
    diagramNodes: [
      { id: 'n-cb-1', label: 'Web / App Query', x: 65, y: 65, type: 'source' },
      { id: 'n-cb-2', label: 'RAG Knowledge DB', x: 240, y: 65, type: 'process' },
      { id: 'n-cb-3', label: 'Chatbot Output', x: 240, y: 155, type: 'process' },
      { id: 'n-cb-4', label: 'Instant Resolution', x: 415, y: 110, type: 'target' }
    ],
    diagramPaths: [
      { from: 'n-cb-1', to: 'n-cb-2', pulse: true },
      { from: 'n-cb-2', to: 'n-cb-3', pulse: false },
      { from: 'n-cb-3', to: 'n-cb-4', pulse: true }
    ],
    metrics: [
      { value: "9,450", label: "Chats", sub: "Total Sessions" },
      { value: "7,890", label: "Auto-Answers", sub: "RAG Resolved" },
      { value: "115", label: "Handoffs", sub: "Live Escalated" }
    ],
    efficiency: "Autonomous query resolution rate verified at 83.4%",
    systemLogs: [
      "SOURCE: Chat socket session initialized",
      "SYSTEM: Loading knowledge base embedding models...",
      "DATABASE: Search queries executed in Pinecone vector DB",
      "AI_AGENT: Semantic context retrieved. Building response...",
      "AI_AGENT: Support response generated (Confidence: 94.8%)",
      "SECURE: Content profanity and safety filters validated",
      "SYSTEM: Response packet dispatched to client browser",
      "MONITOR: Session marked resolved autonomously",
      "SYSTEM: Memory state vector updated in chat thread"
    ]
  },
  {
    id: 'crm',
    title: 'CRM Automation Pipeline',
    icon: <Database size={22} color="#D4AF37" />,
    desc: 'Connect all touchpoints to a central database. We sync lead variables, prioritize conversions based on scoring algorithms, and trigger notifications instantly.',
    pros: ['Zero-friction data syncing', 'Score-based prioritization algorithms', 'Instant Slack/Discord team pings', 'Automated email sequence drip loops'],
    diagramNodes: [
      { id: 'n-crm-1', label: 'Incoming Profile', x: 65, y: 110, type: 'source' },
      { id: 'n-crm-2', label: 'CRM Sync Engine', x: 240, y: 110, type: 'process' },
      { id: 'n-crm-3', label: 'Slack Alert', x: 415, y: 65, type: 'target' },
      { id: 'n-crm-4', label: 'Email Auto-Drip', x: 415, y: 155, type: 'target' }
    ],
    diagramPaths: [
      { from: 'n-crm-1', to: 'n-crm-2', pulse: true },
      { from: 'n-crm-2', to: 'n-crm-3', pulse: true },
      { from: 'n-crm-2', to: 'n-crm-4', pulse: true }
    ],
    metrics: [
      { value: "42,180", label: "Sync Events", sub: "Processed" },
      { value: "38,450", label: "Updates", sub: "Field Syncs" },
      { value: "0.00%", label: "Conflict Rate", sub: "Zero Error" }
    ],
    efficiency: "Database field synchronization latency <350ms",
    systemLogs: [
      "SOURCE: CRM Webhook trigger activated",
      "SYSTEM: Loading sync queue pipeline",
      "DATABASE: Matching lead email record in Salesforce",
      "SYSTEM: Calculating B2B lead score index...",
      "DATABASE: Contact fields updated (Score: 88, Priority: High)",
      "SECURE: Dispatching Slack notification webhook",
      "SYSTEM: Pushed to automated email drip queue",
      "MONITOR: Pipeline synchronization completed",
      "SECURE: Audit trail transaction logged"
    ]
  },
  {
    id: 'leadgen',
    title: 'AI Lead Generation Engine',
    icon: <UserCheck size={22} color="#D4AF37" />,
    desc: 'Autonomous scraper and enrichment pipelines that identify target companies, verify contact data, write highly personalized copy, and run outreach campaign loops.',
    pros: ['Verified contact data enrichment', 'Personalized dynamic copy AI', 'Spam-safe domain rotations', 'Automated LinkedIn hook triggers'],
    diagramNodes: [
      { id: 'n-lg-1', label: 'Data Enrichment', x: 65, y: 110, type: 'source' },
      { id: 'n-lg-2', label: 'Dynamic Mail AI', x: 240, y: 110, type: 'process' },
      { id: 'n-lg-3', label: 'Rotated SMTP Hub', x: 415, y: 110, type: 'target' }
    ],
    diagramPaths: [
      { from: 'n-lg-1', to: 'n-lg-2', pulse: true },
      { from: 'n-lg-2', to: 'n-lg-3', pulse: true }
    ],
    metrics: [
      { value: "84,500", label: "Profiles", sub: "Scraped" },
      { value: "31,200", label: "Enriched Mails", sub: "Verified" },
      { value: "12,400", label: "Outreach Mails", sub: "Dispatched" }
    ],
    efficiency: "Email deliverability index optimized to 99.2%",
    systemLogs: [
      "SYSTEM: Outbound scraping batch initialized",
      "SOURCE: Extracting LinkedIn company directories",
      "DATABASE: Verification handshake checks on emails",
      "AI_AGENT: Personalizing copy blocks using GPT models",
      "SYSTEM: Allocating email dispatch to rotated SMTP pools",
      "SECURE: SPF, DKIM, DMARC validation passed",
      "SYSTEM: Sent outreach mail via pool address (Status: Sent)",
      "MONITOR: Dynamic tracking pixel active",
      "DATABASE: Syncing positive replies queue"
    ]
  }
]

const AiAutomationSection = () => {
  const [activeSystem, setActiveSystem] = useState('whatsapp')
  const activeData = automationSystems.find(s => s.id === activeSystem) || automationSystems[0]

  const [logs, setLogs] = useState([])
  const [logIndex, setLogIndex] = useState(4)
  const logsContainerRef = useRef(null)

  // System status simulation logic
  useEffect(() => {
    const systemLogs = activeData.systemLogs
    // Initialize with first 4 logs
    setLogs(systemLogs.slice(0, 4))
    setLogIndex(4)

    const interval = setInterval(() => {
      setLogs(prev => {
        const nextLogs = [...prev, systemLogs[logIndex]]
        if (nextLogs.length > 5) nextLogs.shift() // keep last 5 logs for styling space
        return nextLogs
      })
      setLogIndex(prev => (prev + 1) % systemLogs.length)
    }, 3200)

    return () => clearInterval(interval)
  }, [activeSystem, activeData])

  // Scroll to bottom of terminal shell when logs update
  useEffect(() => {
    const el = logsContainerRef.current
    if (el) {
      el.scrollTop = el.scrollHeight
    }
  }, [logs])

  return (
    <section id="automation" style={{ padding: 'var(--section-py) 0', background: '#050505', position: 'relative', overflow: 'hidden' }}>
      {/* Target anchor for system reveal scrolling */}
      <div id="system" style={{ position: 'absolute', top: 0 }} />

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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'flex-start' }}>
          
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

          {/* Right Column: Integrated AI Systems Console */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <div style={{
              width: '100%', maxWidth: '640px',
              background: 'linear-gradient(180deg, #0d0d0d 0%, #080808 100%)',
              border: '1px solid rgba(212,175,55,0.25)', borderRadius: '24px',
              boxShadow: '0 25px 55px rgba(0,0,0,0.6), 0 0 30px rgba(212,175,55,0.05) inset',
              position: 'relative', overflow: 'hidden', padding: '1.5rem 1.8rem'
            }} className="glow-gold-pulse">
              
              {/* Console Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1rem', marginBottom: '1rem' }}>
                <Workflow size={16} color="#D4AF37" />
                <span style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'var(--font-heading)' }}>
                  SYSTEM CONSOLE // ACTIVE MONITOR
                </span>
                <div style={{ marginLeft: 'auto', display: 'flex', gap: '5px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f56' }} />
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffbd2e' }} />
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27c93f' }} />
                </div>
              </div>

              {/* Upper Section: SVG Interactive Workflow Diagram */}
              <div style={{ position: 'relative', width: '100%', height: '190px' }}>
                <svg viewBox="0 0 480 180" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                  <defs>
                    <linearGradient id="flowGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(212,175,55,0.1)" />
                      <stop offset="50%" stopColor="#D4AF37" />
                      <stop offset="100%" stopColor="rgba(212,175,55,0.1)" />
                    </linearGradient>
                    <filter id="svgGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="5" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Connection Paths */}
                  {activeData.diagramPaths.map((p, idx) => {
                    const fromNode = activeData.diagramNodes.find(n => n.id === p.from)
                    const toNode = activeData.diagramNodes.find(n => n.id === p.to)
                    if (!fromNode || !toNode) return null

                    const dx = Math.abs(toNode.x - fromNode.x) * 0.5
                    const dPath = `M ${fromNode.x} ${fromNode.y} C ${fromNode.x + dx} ${fromNode.y}, ${toNode.x - dx} ${toNode.y}, ${toNode.x} ${toNode.y}`

                    return (
                      <g key={`${activeSystem}-path-${idx}`}>
                        <path
                          d={dPath}
                          fill="none"
                          stroke="rgba(255,255,255,0.06)"
                          strokeWidth="2"
                        />
                        <motion.path
                          d={dPath}
                          fill="none"
                          stroke="rgba(212,175,55,0.4)"
                          strokeWidth="2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.8, delay: idx * 0.2 }}
                        />
                        {p.pulse && (
                          <motion.circle
                            r="4.5"
                            fill="#D4AF37"
                            style={{ filter: 'url(#svgGlow)' }}
                          >
                            <animateMotion path={dPath} dur="2.8s" repeatCount="indefinite" />
                          </motion.circle>
                        )}
                      </g>
                    )
                  })}

                  {/* Interactive Nodes: Using AnimatePresence mode="wait" to prevent position absolute layout collapsing */}
                  <AnimatePresence mode="wait">
                    {activeData.diagramNodes.map((node) => (
                      <motion.g
                        key={`${activeSystem}-node-${node.id}`}
                        transform={`translate(${node.x}, ${node.y})`}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                      >
                        <circle
                          r="6"
                          fill={node.type === 'source' ? '#333' : node.type === 'target' ? '#D4AF37' : '#1a1a1a'}
                          stroke={node.type === 'target' ? '#fff' : '#D4AF37'}
                          strokeWidth="2"
                          style={{ filter: node.type === 'target' ? 'url(#svgGlow)' : 'none' }}
                        />
                        <rect
                          x="-65"
                          y="15"
                          width="130"
                          height="28"
                          rx="6"
                          fill="rgba(10,10,10,0.98)"
                          stroke="rgba(212,175,55,0.2)"
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
                    ))}
                  </AnimatePresence>
                </svg>
              </div>

              {/* Separator */}
              <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', margin: '1.2rem 0' }} />

              {/* Lower Section: Split console logger & Real-time Metrics */}
              <div className="console-lower-grid">
                
                {/* Live Console Logger Shell */}
                <div style={{ display: 'flex', flexDirection: 'column', minHeight: '180px', background: '#060606', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '14px', padding: '1.2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#D4AF37', marginBottom: '0.8rem' }}>
                    <Terminal size={14} />
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'var(--font-heading)' }}>
                      System Logger Shell
                    </span>
                  </div>
                  <div ref={logsContainerRef} style={{ flex: 1, fontFamily: 'monospace', fontSize: '0.75rem', color: '#888', display: 'flex', flexDirection: 'column', gap: '0.5rem', overflowY: 'auto', maxHeight: '110px' }} className="hide-scroll">
                    {logs.map((log, idx) => (
                      <div key={idx} style={{
                        color: log.includes('SOURCE:') ? '#D4AF37' : log.includes('AI_AGENT:') ? '#fff' : log.includes('SECURE:') ? '#22c55e' : '#A8A8A8'
                      }}>
                        &gt; {log}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Real-time Performance Metrics */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '180px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#fff', marginBottom: '0.8rem' }}>
                    <Activity size={14} color="#D4AF37" />
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'var(--font-heading)' }}>
                      Simulated Metrics
                    </span>
                  </div>
                  
                  {/* Stats Grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', marginBottom: '0.8rem' }}>
                    {activeData.metrics.map((m, idx) => (
                      <div key={idx} style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '10px', padding: '0.6rem 0.4rem', textAlign: 'center' }}>
                        <div style={{ color: '#D4AF37', fontSize: '1.05rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
                          {m.value}
                        </div>
                        <div style={{ color: '#fff', fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', marginTop: '0.2rem' }}>
                          {m.label}
                        </div>
                        <div style={{ color: '#555', fontSize: '0.5rem', fontWeight: 500, marginTop: '0.1rem' }}>
                          {m.sub}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Efficiency Badge */}
                  <div style={{
                    background: 'rgba(212,175,55,0.04)',
                    border: '1px solid rgba(212,175,55,0.2)',
                    padding: '0.5rem 0.8rem',
                    borderRadius: '8px',
                    fontSize: '0.7rem',
                    color: '#D4AF37',
                    fontWeight: 650,
                    textAlign: 'center',
                    fontFamily: 'var(--font-body)',
                    letterSpacing: '0.02em'
                  }}>
                    {activeData.efficiency}
                  </div>
                </div>

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
        .console-lower-grid {
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          gap: 1.2rem;
        }
        @media (max-width: 640px) {
          .console-lower-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  )
}

export default AiAutomationSection
