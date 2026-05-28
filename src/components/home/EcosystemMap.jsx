import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cpu, Database, Network, ShieldCheck, Zap, BarChart2, Workflow } from 'lucide-react'

const nodesData = [
  {
    id: 'core',
    label: 'Novelleyx Core',
    x: 250,
    y: 160,
    icon: <Network size={22} color="#D4AF37" />,
    desc: 'The central intelligence orchestrating the low-latency message bus, API gateways, database clusters, and routing protocols.',
    features: ['Low-latency Event Bus', 'API Gateway Router', 'Centralized Encrypted Vault']
  },
  {
    id: 'agents',
    label: 'AI Automation Agents',
    x: 100,
    y: 70,
    icon: <Cpu size={18} color="#D4AF37" />,
    desc: 'Custom NLP qualifiers, conversational voice-to-text nodes, and intent mapping LLMs interacting directly with users.',
    features: ['RAG Vector Embeddings', 'Multi-agent Task Routing', 'NLP Intent Classification']
  },
  {
    id: 'crm',
    label: 'Active CRM Sync Engine',
    x: 400,
    y: 70,
    icon: <Database size={18} color="#D4AF37" />,
    desc: 'Automatic bi-directional state synchronization mapping variables directly to Salesforce, HubSpot, and internal databases.',
    features: ['Conflict Resolution Rules', 'Webhooks Queue System', 'Real-time Event Listeners']
  },
  {
    id: 'outbound',
    label: 'Outbound Enrichment Scrapers',
    x: 70,
    y: 250,
    icon: <Workflow size={18} color="#D4AF37" />,
    desc: 'Rotated domain clusters and verification pipelines that scrape target accounts, enrich profile data, and run outreach drips.',
    features: ['Rotated SMTP Domain Pools', 'Spam-safe Throttle Delays', 'SMTP Handshake Verification']
  },
  {
    id: 'payments',
    label: 'Stripe Billing Matrix',
    x: 430,
    y: 250,
    icon: <ShieldCheck size={18} color="#D4AF37" />,
    desc: 'Multi-tenant payment splits, subscription hooks, automated accounting payouts, and secure checkout frameworks.',
    features: ['Multi-party Commission Splits', 'Dunning Auto-notifications', 'PCI-Compliant Token Vault']
  },
  {
    id: 'dashboards',
    label: 'Analytical Console API',
    x: 250,
    y: 280,
    icon: <BarChart2 size={18} color="#D4AF37" />,
    desc: 'Analytical endpoints serving transaction summaries, response rate latency charts, and CRM pipeline reports to the client dashboard.',
    features: ['Sub-second KPI Aggregations', 'Live Websocket Feeds', 'Rest-API CSV Exports']
  }
]

const connections = [
  { from: 'core', to: 'agents' },
  { from: 'core', to: 'crm' },
  { from: 'core', to: 'outbound' },
  { from: 'core', to: 'payments' },
  { from: 'core', to: 'dashboards' },
  { from: 'agents', to: 'crm' },
  { from: 'outbound', to: 'agents' },
  { from: 'payments', to: 'dashboards' }
]

const EcosystemMap = () => {
  const [hoveredNode, setHoveredNode] = useState(null)
  const [selectedNode, setSelectedNode] = useState(nodesData[0])

  const activeNode = hoveredNode || selectedNode

  return (
    <section id="ecosystem" style={{ padding: '8rem 2rem', background: '#0A0A0A', position: 'relative', borderTop: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
      {/* Background Dot Texture */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at center, transparent 30%, #0A0A0A 90%), url("data:image/svg+xml,%3Csvg width=\'30\' height=\'30\' viewBox=\'0 0 30 30\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'2\' cy=\'2\' r=\'1\' fill=\'rgba(212,175,55,0.06)\'/%3E%3C/svg%3E")',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        {/* Header */}
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
            Integrated Networks
          </span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--h2)', fontWeight: 'var(--h2-weight)', color: '#fff', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
            The Digital Ecosystem Map
          </h2>
          <p style={{ color: '#888', maxWidth: '600px', margin: '0 auto', fontSize: '1rem', lineHeight: 1.7 }}>
            Hover or click nodes below to inspect the interconnected protocols mapping our AI, SaaS, and database systems.
          </p>
        </div>

        {/* Core Layout Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }} className="eco-grid">
          <style>{`
            @media (max-width: 768px) {
              .eco-grid { grid-template-columns: 1fr !important; }
              .eco-map-svg { height: 320px !important; }
            }
          `}</style>
          
          {/* Interactive SVG Map Column */}
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div style={{
              width: '100%',
              maxWidth: '520px',
              height: '380px',
              background: 'rgba(10, 10, 10, 0.6)',
              border: '1px solid rgba(212,175,55,0.15)',
              borderRadius: '20px',
              padding: '1.5rem',
              boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
              position: 'relative'
            }} className="eco-map-svg glow-gold-pulse">
              
              <svg viewBox="0 0 500 340" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                <defs>
                  <linearGradient id="lineGlow" x1="0" y1="0" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="rgba(212,175,55,0.1)" />
                  </linearGradient>
                </defs>

                {/* Draw connections */}
                {connections.map((conn, idx) => {
                  const fromNode = nodesData.find(n => n.id === conn.from)
                  const toNode = nodesData.find(n => n.id === conn.to)
                  if (!fromNode || !toNode) return null

                  const isActive = activeNode && (activeNode.id === conn.from || activeNode.id === conn.to)

                  return (
                    <g key={idx}>
                      <line
                        x1={fromNode.x}
                        y1={fromNode.y}
                        x2={toNode.x}
                        y2={toNode.y}
                        stroke={isActive ? 'url(#lineGlow)' : 'rgba(255,255,255,0.05)'}
                        strokeWidth={isActive ? '2.5' : '1.5'}
                        style={{ transition: 'stroke 0.4s, stroke-width 0.4s' }}
                      />
                      {isActive && (
                        <motion.line
                          x1={fromNode.x}
                          y1={fromNode.y}
                          x2={toNode.x}
                          y2={toNode.y}
                          stroke="#D4AF37"
                          strokeWidth="2.5"
                          strokeDasharray="10 15"
                          animate={{ strokeDashoffset: [-50, 0] }}
                          transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
                        />
                      )}
                    </g>
                  )
                })}

                {/* Draw nodes */}
                {nodesData.map((node) => {
                  const isCore = node.id === 'core'
                  const isHovered = activeNode && activeNode.id === node.id

                  return (
                    <g 
                      key={node.id} 
                      style={{ cursor: 'pointer' }}
                      onMouseEnter={() => setHoveredNode(node)}
                      onMouseLeave={() => setHoveredNode(null)}
                      onClick={() => setSelectedNode(node)}
                    >
                      {/* Pulsing Outer Ring */}
                      {isHovered && (
                        <motion.circle
                          cx={node.x}
                          cy={node.y}
                          r={isCore ? 32 : 24}
                          fill="transparent"
                          stroke="#D4AF37"
                          strokeWidth="1.5"
                          initial={{ scale: 0.8, opacity: 0.8 }}
                          animate={{ scale: 1.3, opacity: 0 }}
                          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeOut' }}
                        />
                      )}

                      {/* Main Node Circle */}
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r={isCore ? 24 : 18}
                        fill={isHovered ? 'rgba(212,175,55,0.15)' : 'rgba(17,17,17,0.85)'}
                        stroke={isHovered ? '#D4AF37' : 'rgba(212,175,55,0.3)'}
                        strokeWidth={isHovered ? '2' : '1.2'}
                        style={{ transition: 'fill 0.3s, stroke 0.3s, stroke-width 0.3s' }}
                      />

                      {/* Icon Container (rendered in absolute layer or estimated location) */}
                      <g transform={`translate(${node.x - (isCore ? 11 : 9)}, ${node.y - (isCore ? 11 : 9)})`}>
                        {/* Adjust color based on hover */}
                        {node.icon}
                      </g>

                      {/* Node Label Text */}
                      <text
                        x={node.x}
                        y={node.y + (isCore ? 40 : 32)}
                        textAnchor="middle"
                        fill={isHovered ? '#fff' : '#A8A8A8'}
                        fontFamily="var(--font-body)"
                        fontSize={isCore ? '10' : '9'}
                        fontWeight={isCore ? '700' : '600'}
                        letterSpacing="0.04em"
                        style={{ transition: 'fill 0.3s', userSelect: 'none' }}
                      >
                        {node.label}
                      </text>
                    </g>
                  )
                })}
              </svg>
              
            </div>
          </div>

          {/* Details Column */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <AnimatePresence mode="wait">
              {activeNode && (
                <motion.div
                  key={activeNode.id || 'default'}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    background: 'rgba(255,255,255,0.01)',
                    border: '1px solid rgba(212,175,55,0.15)',
                    borderRadius: '16px',
                    padding: '2.5rem',
                    boxShadow: '0 15px 35px rgba(0,0,0,0.5)',
                    minHeight: '320px',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  {/* Node Title */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{
                      width: '40px', height: '40px', borderRadius: '8px',
                      background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.25)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      {activeNode.icon}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', fontFamily: 'var(--font-heading)', margin: 0 }}>
                        {activeNode.label}
                      </h3>
                      <span style={{ fontSize: '0.68rem', color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 650 }}>
                        {activeNode.id === 'core' ? 'Central Orchestrator' : 'Distributed System Node'}
                      </span>
                    </div>
                  </div>

                  {/* Node Description */}
                  <p style={{ color: '#A8A8A8', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '2rem', flex: 1 }}>
                    {activeNode.desc}
                  </p>

                  {/* Node Features */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    <div style={{ color: '#fff', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                      Active Integration Layer:
                    </div>
                    {activeNode.features && activeNode.features.map((feat, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: '#D6D6D6' }}>
                        <Zap size={13} color="#D4AF37" style={{ flexShrink: 0 }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  )
}

export default EcosystemMap
