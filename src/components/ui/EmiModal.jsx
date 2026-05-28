import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CreditCard, Check, Sparkles } from 'lucide-react'

const EmiModal = ({ isOpen, onClose, planName, totalAmount, accentColor = '#D4AF37' }) => {
  if (!isOpen) return null

  // Ensure amount is parsed as a number for calculator
  const numericAmount = typeof totalAmount === 'string' 
    ? parseInt(totalAmount.replace(/[^0-9]/g, ''), 10) 
    : totalAmount

  const tenures = [3, 6, 9, 12]

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val)
  }

  const handleSelectTenure = (months, monthlyEmi) => {
    const text = `Hello NovelleyX, I'm interested in the ${planName} Yearly plan with a ${months}-month No-Cost EMI schedule (${formatCurrency(monthlyEmi)}/mo). Please guide me on the checkout procedure.`
    const waUrl = `https://wa.me/917075853225?text=${encodeURIComponent(text)}`
    window.open(waUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <AnimatePresence>
      <div 
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 10000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem'
        }}
      >
        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.85)',
            backdropFilter: 'blur(10px)'
          }}
        />

        {/* Content Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          style={{
            background: 'linear-gradient(135deg, rgba(25,25,25,0.95) 0%, rgba(10,10,10,0.98) 100%)',
            border: `1px solid ${accentColor}`,
            borderRadius: '24px',
            width: '100%',
            maxWidth: '540px',
            padding: '2.5rem',
            boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 30px ${accentColor}22`,
            position: 'relative',
            zIndex: 10001,
            color: '#fff',
            overflow: 'hidden'
          }}
        >
          {/* Subtle design gradient */}
          <div style={{
            position: 'absolute', top: '-10%', right: '-10%',
            width: '200px', height: '200px',
            background: `radial-gradient(circle, ${accentColor}15 0%, transparent 70%)`,
            pointerEvents: 'none'
          }} />

          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: accentColor, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                <Sparkles size={12} /> Flexible Payment Options
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 800, lineHeight: 1.2 }}>
                EMI Payment Schedule
              </h3>
              <p style={{ color: '#A8A8A8', fontSize: '0.85rem', marginTop: '0.3rem' }}>
                For {planName} &mdash; Total: <span style={{ color: '#fff', fontWeight: 600 }}>{formatCurrency(numericAmount)}</span>
              </p>
            </div>
            <button 
              onClick={onClose}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#A8A8A8',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#A8A8A8'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
            >
              <X size={18} />
            </button>
          </div>

          <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', marginBottom: '1.5rem' }} />

          {/* Message about affordability */}
          <div style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.05)',
            borderRadius: '12px',
            padding: '1rem',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.8rem'
          }}>
            <CreditCard size={20} color={accentColor} style={{ flexShrink: 0 }} />
            <span style={{ fontSize: '0.8rem', color: '#D6D6D6', lineHeight: 1.4 }}>
              Split your annual plan into smaller monthly installments using a major credit card. **No-Cost EMI (0% Interest)** is available.
            </span>
          </div>

          {/* Tenures List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
            {tenures.map((months) => {
              const monthlyEmi = Math.round(numericAmount / months)
              return (
                <div 
                  key={months}
                  onClick={() => handleSelectTenure(months, monthlyEmi)}
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '14px',
                    padding: '1.2rem 1.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  className="emi-option-row"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = accentColor
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                    e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                  }}
                >
                  <div>
                    <span style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>{months} Months Plan</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.2rem' }}>
                      <span style={{ fontSize: '0.72rem', color: accentColor, fontWeight: 600, background: `${accentColor}18`, padding: '0.1rem 0.4rem', borderRadius: '4px' }}>
                        0% Interest
                      </span>
                      <span style={{ fontSize: '0.72rem', color: '#888' }}>No-Cost EMI</span>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-heading)' }}>
                      {formatCurrency(monthlyEmi)}<span style={{ fontSize: '0.8rem', color: '#888', fontWeight: 400 }}>/mo</span>
                    </div>
                    <span style={{ fontSize: '0.72rem', color: '#888', textDecoration: 'underline' }}>Choose Plan</span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Footer Info */}
          <div style={{ textAlign: 'center', fontSize: '0.75rem', color: '#666' }}>
            Repayments are managed directly via your banking portal post-checkout. Terms & Conditions apply.
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default EmiModal
