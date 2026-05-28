import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BarChart3, Workflow, ShoppingBag, Trophy, ShieldCheck, ArrowRight } from 'lucide-react'

/* ──────────────────────────────────────────────
   Animated SVG Illustrations for each product
   ────────────────────────────────────────────── */

const EarningDashboardVisual = () => (
  <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    {/* Grid lines */}
    {[0, 1, 2, 3, 4].map(i => (
      <line key={`g${i}`} x1="30" y1={20 + i * 30} x2="260" y2={20 + i * 30}
        stroke="rgba(212,175,55,0.08)" strokeWidth="1" />
    ))}
    {/* Y-axis labels */}
    {['$50k', '$40k', '$30k', '$20k', '$10k'].map((label, i) => (
      <text key={`l${i}`} x="8" y={24 + i * 30} fill="rgba(212,175,55,0.35)" fontSize="7" fontFamily="Inter, sans-serif">{label}</text>
    ))}
    {/* Animated bars */}
    {[
      { x: 50, h: 90, delay: '0s' },
      { x: 90, h: 60, delay: '0.2s' },
      { x: 130, h: 105, delay: '0.4s' },
      { x: 170, h: 45, delay: '0.6s' },
      { x: 210, h: 80, delay: '0.8s' },
      { x: 240, h: 110, delay: '1.0s' },
    ].map((bar, i) => (
      <g key={`bar${i}`}>
        <rect x={bar.x} y={140 - bar.h} width="22" height={bar.h} rx="3"
          fill="url(#barGrad)" className="ps-bar-rise" style={{ animationDelay: bar.delay }}>
        </rect>
        {/* Pulsing data point */}
        <circle cx={bar.x + 11} cy={140 - bar.h - 4} r="3"
          fill="#D4AF37" className="ps-pulse-dot" style={{ animationDelay: bar.delay }} />
      </g>
    ))}
    {/* Trend line */}
    <polyline points="61,55 101,82 141,40 181,98 221,63 251,35"
      stroke="#D4AF37" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"
      className="ps-line-draw" strokeDasharray="300" strokeDashoffset="300" />
    <defs>
      <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.15" />
      </linearGradient>
    </defs>
  </svg>
)

const AIWorkflowsVisual = () => (
  <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    {/* Connector paths */}
    <path d="M60,45 C100,45 100,80 140,80" stroke="rgba(212,175,55,0.3)" strokeWidth="2" strokeDasharray="4 4"
      className="ps-path-pulse" />
    <path d="M60,115 C100,115 100,80 140,80" stroke="rgba(212,175,55,0.3)" strokeWidth="2" strokeDasharray="4 4"
      className="ps-path-pulse" style={{ animationDelay: '0.5s' }} />
    <path d="M170,80 C200,80 200,50 230,50" stroke="rgba(212,175,55,0.3)" strokeWidth="2" strokeDasharray="4 4"
      className="ps-path-pulse" style={{ animationDelay: '1s' }} />
    <path d="M170,80 C200,80 200,115 230,115" stroke="rgba(212,175,55,0.3)" strokeWidth="2" strokeDasharray="4 4"
      className="ps-path-pulse" style={{ animationDelay: '1.5s' }} />

    {/* Moving dots along paths */}
    <circle r="3" fill="#D4AF37" className="ps-pulse-dot">
      <animateMotion dur="3s" repeatCount="indefinite" path="M60,45 C100,45 100,80 140,80" />
    </circle>
    <circle r="3" fill="#D4AF37" className="ps-pulse-dot">
      <animateMotion dur="3s" repeatCount="indefinite" begin="1s" path="M60,115 C100,115 100,80 140,80" />
    </circle>
    <circle r="3" fill="#D4AF37" className="ps-pulse-dot">
      <animateMotion dur="3s" repeatCount="indefinite" begin="0.5s" path="M170,80 C200,80 200,50 230,50" />
    </circle>
    <circle r="3" fill="#D4AF37" className="ps-pulse-dot">
      <animateMotion dur="3s" repeatCount="indefinite" begin="1.5s" path="M170,80 C200,80 200,115 230,115" />
    </circle>

    {/* Nodes */}
    {[
      { cx: 45, cy: 45, label: 'Trigger' },
      { cx: 45, cy: 115, label: 'Input' },
    ].map((n, i) => (
      <g key={`nl${i}`}>
        <rect x={n.cx - 28} y={n.cy - 16} width="56" height="32" rx="6"
          fill="rgba(212,175,55,0.08)" stroke="rgba(212,175,55,0.4)" strokeWidth="1"
          className="ps-node-glow" style={{ animationDelay: `${i * 0.3}s` }} />
        <text x={n.cx} y={n.cy + 4} textAnchor="middle" fill="#D4AF37" fontSize="8" fontFamily="Inter, sans-serif" fontWeight="600">{n.label}</text>
      </g>
    ))}
    {/* Center node - larger */}
    <g>
      <rect x="117" y="62" width="56" height="36" rx="8"
        fill="rgba(212,175,55,0.12)" stroke="#D4AF37" strokeWidth="1.5"
        className="ps-node-glow" />
      <text x="145" y="78" textAnchor="middle" fill="#D4AF37" fontSize="7" fontFamily="Inter, sans-serif" fontWeight="700">AI Agent</text>
      <text x="145" y="90" textAnchor="middle" fill="rgba(212,175,55,0.6)" fontSize="6" fontFamily="Inter, sans-serif">n8n core</text>
    </g>
    {/* Output nodes */}
    {[
      { cx: 245, cy: 50, label: 'CRM' },
      { cx: 245, cy: 115, label: 'WhatsApp' },
    ].map((n, i) => (
      <g key={`nr${i}`}>
        <rect x={n.cx - 28} y={n.cy - 16} width="56" height="32" rx="6"
          fill="rgba(212,175,55,0.08)" stroke="rgba(212,175,55,0.4)" strokeWidth="1"
          className="ps-node-glow" style={{ animationDelay: `${(i + 3) * 0.3}s` }} />
        <text x={n.cx} y={n.cy + 4} textAnchor="middle" fill="#D4AF37" fontSize="8" fontFamily="Inter, sans-serif" fontWeight="600">{n.label}</text>
      </g>
    ))}
  </svg>
)

const MarketplaceVisual = () => (
  <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    {/* API tiles grid - 3x2 */}
    {[
      { x: 20, y: 15, label: 'Scraper', sub: 'API', delay: '0s' },
      { x: 108, y: 15, label: 'NLP', sub: 'Engine', delay: '0.15s' },
      { x: 196, y: 15, label: 'Vision', sub: 'OCR', delay: '0.3s' },
      { x: 20, y: 88, label: 'SMTP', sub: 'Router', delay: '0.45s' },
      { x: 108, y: 88, label: 'Docs', sub: 'Parser', delay: '0.6s' },
      { x: 196, y: 88, label: 'Custom', sub: 'Build', delay: '0.75s' },
    ].map((tile, i) => (
      <g key={`tile${i}`} className="ps-tile-slide" style={{ animationDelay: tile.delay }}>
        <rect x={tile.x} y={tile.y} width="76" height="62" rx="8"
          fill="rgba(212,175,55,0.04)" stroke="rgba(212,175,55,0.2)" strokeWidth="1" />
        {/* Status indicator */}
        <circle cx={tile.x + 64} cy={tile.y + 12} r="4"
          fill="rgba(76,175,80,0.8)" className="ps-pulse-dot" style={{ animationDelay: `${i * 0.4}s` }} />
        <text x={tile.x + 38} y={tile.y + 32} textAnchor="middle" fill="#D4AF37" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="700">{tile.label}</text>
        <text x={tile.x + 38} y={tile.y + 46} textAnchor="middle" fill="rgba(212,175,55,0.5)" fontSize="7" fontFamily="Inter, sans-serif">{tile.sub}</text>
      </g>
    ))}
    {/* Connection lines between tiles */}
    <line x1="96" y1="46" x2="108" y2="46" stroke="rgba(212,175,55,0.2)" strokeWidth="1" strokeDasharray="3 2" className="ps-path-pulse" />
    <line x1="184" y1="46" x2="196" y2="46" stroke="rgba(212,175,55,0.2)" strokeWidth="1" strokeDasharray="3 2" className="ps-path-pulse" style={{ animationDelay: '0.5s' }} />
    <line x1="96" y1="119" x2="108" y2="119" stroke="rgba(212,175,55,0.2)" strokeWidth="1" strokeDasharray="3 2" className="ps-path-pulse" style={{ animationDelay: '1s' }} />
    <line x1="184" y1="119" x2="196" y2="119" stroke="rgba(212,175,55,0.2)" strokeWidth="1" strokeDasharray="3 2" className="ps-path-pulse" style={{ animationDelay: '1.5s' }} />
  </svg>
)

const LeaderboardVisual = () => (
  <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    {/* Ranking bars */}
    {[
      { y: 12, w: 220, rank: '#1', name: 'Alpha Team', score: '98.4%', delay: '0s', opacity: 1 },
      { y: 48, w: 185, rank: '#2', name: 'Sigma Unit', score: '91.2%', delay: '0.2s', opacity: 0.8 },
      { y: 84, w: 150, rank: '#3', name: 'Delta Ops', score: '84.7%', delay: '0.4s', opacity: 0.6 },
      { y: 120, w: 110, rank: '#4', name: 'Echo Div', score: '76.1%', delay: '0.6s', opacity: 0.45 },
    ].map((bar, i) => (
      <g key={`lb${i}`} className="ps-rank-bar" style={{ animationDelay: bar.delay }}>
        {/* Position badge */}
        <rect x="15" y={bar.y} width="28" height="28" rx="6"
          fill={i === 0 ? 'rgba(212,175,55,0.2)' : 'rgba(212,175,55,0.06)'}
          stroke={i === 0 ? '#D4AF37' : 'rgba(212,175,55,0.2)'} strokeWidth="1" />
        <text x="29" y={bar.y + 18} textAnchor="middle" fill="#D4AF37" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="800">{bar.rank}</text>
        {/* Bar */}
        <rect x="52" y={bar.y + 2} width={bar.w} height="24" rx="4"
          fill={`rgba(212,175,55,${bar.opacity * 0.12})`} stroke={`rgba(212,175,55,${bar.opacity * 0.4})`} strokeWidth="1"
          className="ps-bar-grow" style={{ animationDelay: bar.delay }} />
        {/* Inner fill animation */}
        <rect x="52" y={bar.y + 2} width="0" height="24" rx="4"
          fill={`rgba(212,175,55,${bar.opacity * 0.15})`}
          className="ps-bar-fill" style={{ animationDelay: bar.delay, '--target-width': `${bar.w}px` }} />
        {/* Name */}
        <text x="62" y={bar.y + 18} fill="rgba(255,255,255,0.9)" fontSize="8" fontFamily="Inter, sans-serif" fontWeight="600">{bar.name}</text>
        {/* Score counter */}
        <text x={52 + bar.w - 8} y={bar.y + 18} textAnchor="end" fill="#D4AF37" fontSize="8" fontFamily="Inter, sans-serif" fontWeight="700"
          className="ps-counter">{bar.score}</text>
        {/* Trophy for #1 */}
        {i === 0 && (
          <g className="ps-pulse-dot">
            <text x="265" y={bar.y + 20} fill="#D4AF37" fontSize="14">🏆</text>
          </g>
        )}
      </g>
    ))}
  </svg>
)

const ConsoleVisual = () => (
  <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    {/* Terminal window frame */}
    <rect x="10" y="5" width="260" height="150" rx="8" fill="rgba(0,0,0,0.6)" stroke="rgba(212,175,55,0.2)" strokeWidth="1" />
    {/* Title bar */}
    <rect x="10" y="5" width="260" height="22" rx="8" fill="rgba(212,175,55,0.06)" />
    <rect x="10" y="19" width="260" height="8" fill="rgba(212,175,55,0.06)" />
    {/* Window buttons */}
    <circle cx="24" cy="16" r="3.5" fill="#FF5F57" />
    <circle cx="36" cy="16" r="3.5" fill="#FFBD2E" />
    <circle cx="48" cy="16" r="3.5" fill="#28CA41" />
    <text x="140" y="19" textAnchor="middle" fill="rgba(212,175,55,0.5)" fontSize="7" fontFamily="monospace">novelleyx-console</text>
    {/* Terminal lines with typing animation */}
    {[
      { y: 42, text: '$ nx-cli auth --token ****', color: '#4CAF50', delay: '0s' },
      { y: 56, text: '✓ Authenticated as admin@nx', color: 'rgba(212,175,55,0.7)', delay: '0.8s' },
      { y: 70, text: '$ nx-cli db:migrate --latest', color: '#4CAF50', delay: '1.6s' },
      { y: 84, text: '→ Running 4 pending migrations...', color: 'rgba(255,255,255,0.5)', delay: '2.4s' },
      { y: 98, text: '✓ Schema sync complete [42ms]', color: 'rgba(212,175,55,0.7)', delay: '3.2s' },
      { y: 112, text: '$ nx-cli smtp:rotate --domain=3', color: '#4CAF50', delay: '4.0s' },
      { y: 126, text: '→ Domains rotated. DKIM valid.', color: 'rgba(255,255,255,0.5)', delay: '4.8s' },
    ].map((line, i) => (
      <text key={`cl${i}`} x="20" y={line.y} fill={line.color} fontSize="7.5" fontFamily="'Courier New', monospace"
        className="ps-type-line" style={{ animationDelay: line.delay }}>
        {line.text}
      </text>
    ))}
    {/* Blinking cursor */}
    <rect x="20" y="136" width="6" height="10" fill="#D4AF37" className="ps-blink-cursor" />
  </svg>
)

/* ──────────────────────────────────────────────
   Product Data
   ────────────────────────────────────────────── */

const products = [
  {
    icon: <BarChart3 size={18} color="#D4AF37" />,
    visual: <EarningDashboardVisual />,
    title: "Earning Dashboard",
    slug: "/products/earning-dashboard",
    desc: "A luxury multi-tenant client console detailing payout splits, transactional logs, and recurring revenue indexes in real-time.",
    kpi: "Feature: Automated Commission Splits"
  },
  {
    icon: <Workflow size={18} color="#D4AF37" />,
    visual: <AIWorkflowsVisual />,
    title: "AI Workflows Canvas",
    slug: "/products/ai-workflows-canvas",
    desc: "Visual workflow builder mapping triggers to n8n pipelines, WhatsApp qualifier agents, and CRM sync payloads with sub-second latency.",
    kpi: "Feature: NLP Intent Mapping Nodes"
  },
  {
    icon: <ShoppingBag size={18} color="#D4AF37" />,
    visual: <MarketplaceVisual />,
    title: "Ecosystem Marketplace",
    slug: "/products/ecosystem-marketplace",
    desc: "An API-native catalog showcasing pre-built B2B automation connectors, document processors, and custom scraper databases.",
    kpi: "Feature: Direct API Key Deployment"
  },
  {
    icon: <Trophy size={18} color="#D4AF37" />,
    visual: <LeaderboardVisual />,
    title: "Performance Leaderboard",
    slug: "/products/performance-leaderboard",
    desc: "Real-time leaderboard analytics compiling outreach CTRs, closed conversions, and team sales yields in active lists.",
    kpi: "Feature: Gamified Team KPIs"
  },
  {
    icon: <ShieldCheck size={18} color="#D4AF37" />,
    visual: <ConsoleVisual />,
    title: "Internal Systems Console",
    slug: "/products/internal-console",
    desc: "A secure corporate backend gateway providing database access, scraper parameters, and SMTP rotated domain configurations.",
    kpi: "Feature: Role-based SDK access"
  }
]

/* ──────────────────────────────────────────────
   Component
   ────────────────────────────────────────────── */

const ProductsSection = () => {
  return (
    <section id="products" style={{
      padding: '8rem 2rem',
      background: 'var(--bg-base, #0A0A0A)',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid rgba(255,255,255,0.05)'
    }}>

      {/* ── CSS Keyframes (rendered ONCE, outside .map) ── */}
      <style>{`
        /* Bar rising animation */
        @keyframes psBarRise {
          0% { transform: scaleY(0); transform-origin: bottom; opacity: 0; }
          60% { transform: scaleY(1.05); opacity: 1; }
          100% { transform: scaleY(1); transform-origin: bottom; opacity: 1; }
        }
        .ps-bar-rise {
          transform: scaleY(0);
          transform-origin: bottom;
          animation: psBarRise 1.2s ease-out forwards;
        }

        /* Pulsing data dot */
        @keyframes psPulse {
          0%, 100% { opacity: 0.5; r: 3; }
          50% { opacity: 1; r: 5; }
        }
        .ps-pulse-dot {
          animation: psPulse 2s ease-in-out infinite;
        }

        /* SVG line draw */
        @keyframes psLineDraw {
          to { stroke-dashoffset: 0; }
        }
        .ps-line-draw {
          animation: psLineDraw 2.5s ease-out 0.5s forwards;
        }

        /* Path pulsing opacity */
        @keyframes psPathPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .ps-path-pulse {
          animation: psPathPulse 2.5s ease-in-out infinite;
        }

        /* Node glow */
        @keyframes psNodeGlow {
          0%, 100% { filter: drop-shadow(0 0 2px rgba(212,175,55,0.1)); }
          50% { filter: drop-shadow(0 0 8px rgba(212,175,55,0.35)); }
        }
        .ps-node-glow {
          animation: psNodeGlow 3s ease-in-out infinite;
        }

        /* Tile slide in */
        @keyframes psTileSlide {
          0% { opacity: 0; transform: translateY(15px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .ps-tile-slide {
          opacity: 0;
          animation: psTileSlide 0.8s ease-out forwards;
        }

        /* Ranking bar grow */
        @keyframes psBarGrow {
          0% { opacity: 0; transform: scaleX(0); transform-origin: left; }
          100% { opacity: 1; transform: scaleX(1); transform-origin: left; }
        }
        .ps-bar-grow {
          transform: scaleX(0);
          transform-origin: left;
          animation: psBarGrow 1s ease-out forwards;
        }

        /* Bar fill sweep */
        @keyframes psBarFill {
          0% { width: 0; }
          100% { width: var(--target-width, 100px); }
        }
        .ps-bar-fill {
          animation: psBarFill 1.5s ease-out 0.3s forwards;
        }

        /* Rank bar entrance */
        @keyframes psRankBar {
          0% { opacity: 0; transform: translateX(-20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .ps-rank-bar {
          opacity: 0;
          animation: psRankBar 0.7s ease-out forwards;
        }

        /* Terminal typing */
        @keyframes psTypeLine {
          0% { opacity: 0; transform: translateX(-8px); }
          30% { opacity: 0; }
          100% { opacity: 1; transform: translateX(0); }
        }
        .ps-type-line {
          opacity: 0;
          animation: psTypeLine 0.6s ease-out forwards;
        }

        /* Blinking cursor */
        @keyframes psBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .ps-blink-cursor {
          animation: psBlink 1s step-end infinite;
        }

        /* Card hover */
        .ps-product-card {
          transition: border-color 0.4s ease, box-shadow 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        .ps-product-card:hover {
          border-color: rgba(212,175,55,0.5) !important;
          box-shadow: 0 20px 50px rgba(0,0,0,0.7), 0 0 30px rgba(212,175,55,0.08), 0 0 60px rgba(212,175,55,0.04) !important;
          transform: translateY(-5px) !important;
        }
        .ps-product-card:hover .ps-visual-container {
          border-bottom-color: rgba(212,175,55,0.25) !important;
          background: rgba(212,175,55,0.04) !important;
        }
      `}</style>

      {/* Background ambient glow */}
      <div style={{
        position: 'absolute', top: '30%', right: '5%', width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(212,175,55,0.03) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '5%', width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(212,175,55,0.02) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <span style={{
            display: 'inline-block',
            fontSize: 'var(--caption, 0.8rem)',
            fontWeight: 600,
            letterSpacing: 'var(--caption-tracking, 0.14em)',
            textTransform: 'uppercase',
            color: '#D4AF37',
            marginBottom: '1rem',
            border: '1px solid rgba(212,175,55,0.3)',
            padding: '0.4rem 1.2rem',
            borderRadius: '100px',
            background: 'rgba(212,175,55,0.03)'
          }}>
            Our Products
          </span>
          <h2 style={{
            fontFamily: 'var(--font-heading, Poppins, sans-serif)',
            fontSize: 'var(--h2, 2.5rem)',
            fontWeight: 'var(--h2-weight, 700)',
            color: '#fff',
            marginTop: '1.5rem',
            marginBottom: '1.5rem'
          }}>
            The AI & Automation Ecosystem
          </h2>
          <p style={{
            color: '#888',
            maxWidth: '620px',
            margin: '0 auto',
            fontSize: '1rem',
            lineHeight: 1.7,
            fontFamily: 'var(--font-body, Inter, sans-serif)'
          }}>
            Explore our ready-to-deploy software products. Built with low-latency components and structured for enterprise scale.
          </p>
        </motion.div>

        {/* ── Product Grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              className="ps-product-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: 'rgba(255,255,255,0.015)',
                border: '1px solid rgba(212,175,55,0.15)',
                borderRadius: '14px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer'
              }}
            >
              {/* ── Animated Visual Area ── */}
              <div
                className="ps-visual-container"
                style={{
                  height: '180px',
                  padding: '16px',
                  background: 'rgba(212,175,55,0.02)',
                  borderBottom: '1px solid rgba(212,175,55,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.4s ease, border-color 0.4s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Subtle scanline overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(212,175,55,0.015) 2px, rgba(212,175,55,0.015) 4px)',
                  pointerEvents: 'none',
                  zIndex: 1
                }} />
                <div style={{ width: '100%', height: '100%', position: 'relative', zIndex: 2 }}>
                  {product.visual}
                </div>
              </div>

              {/* ── Card Content ── */}
              <div style={{ padding: '1.75rem 2rem 2rem' }}>
                {/* Title row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(212,175,55,0.06)',
                    border: '1px solid rgba(212,175,55,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {product.icon}
                  </div>
                  <h3 style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#fff',
                    margin: 0,
                    fontFamily: 'var(--font-heading, Poppins, sans-serif)'
                  }}>
                    {product.title}
                  </h3>
                </div>

                {/* Description */}
                <p style={{
                  color: '#A8A8A8',
                  fontSize: '0.9rem',
                  lineHeight: 1.7,
                  marginBottom: '1.5rem',
                  fontFamily: 'var(--font-body, Inter, sans-serif)'
                }}>
                  {product.desc}
                </p>

                {/* Divider */}
                <div style={{
                  height: '1px',
                  background: 'linear-gradient(90deg, rgba(212,175,55,0.15), rgba(212,175,55,0.05), transparent)',
                  marginBottom: '1.25rem'
                }} />

                {/* Feature tag + arrow */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{
                    fontSize: '0.72rem',
                    color: '#D4AF37',
                    fontWeight: 700,
                    letterSpacing: '0.02em',
                    textTransform: 'uppercase',
                    fontFamily: 'var(--font-body, Inter, sans-serif)'
                  }}>
                    {product.kpi}
                  </span>
                  <Link to={product.slug} style={{
                    color: '#D4AF37',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: 'rgba(212,175,55,0.06)',
                    border: '1px solid rgba(212,175,55,0.15)',
                    transition: 'background 0.3s, border-color 0.3s, transform 0.3s',
                    textDecoration: 'none'
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(212,175,55,0.15)'; e.currentTarget.style.transform = 'scale(1.15)' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(212,175,55,0.06)'; e.currentTarget.style.transform = 'scale(1)' }}
                  >
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
