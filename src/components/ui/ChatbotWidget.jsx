import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, MessageSquare, Send, X, Sparkles, SendToBack, Phone } from 'lucide-react'

const AUTOMATED_ANSWERS = {
  revenue: "To scale your enterprise revenue, we deploy high-conversion custom architectures (React/Vite) integrated with targeted SEO semantic indexing. This secures top 1% search positioning to capture active buyers. Would you like to schedule a strategy call to map your revenue model?",
  funnel: "We design native WhatsApp & email automation pipelines. They instantly triage incoming leads, qualify them using NLP, and sync them to your CRM (HubSpot/Salesforce) to automate bookings 24/7. This removes 90% of admin tasks. Should we integrate this for your company?",
  crm: "Our integration syncs all platform touchpoints into a centralized dashboard. Every conversation, form submission, and lead metric is captured with zero leakage, triggering automated outreach loops. This ensures no client lead is left untouched.",
  contact: "Excellent choice. Our primary channel is direct WhatsApp. You can connect with our strategy lead at +91 70758 53225, or click 'Book Strategy Consultation' to schedule a calendar briefing."
}

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 'msg-init',
      sender: 'bot',
      text: "Welcome to NovelleyX. I am your automated AI strategist. How can we optimize your digital revenue systems today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const handleSendMessage = (text) => {
    if (!text.trim()) return

    const userMsg = {
      id: `msg-${Date.now()}-user`,
      sender: 'user',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    setMessages(prev => [...prev, userMsg])
    setInputValue('')
    setIsTyping(true)

    // Simulate bot thinking
    setTimeout(() => {
      let replyText = "Thank you for your request. An enterprise strategist from NovelleyX will review your profile. To speed up execution, we recommend booking a Strategy Consultation or messaging us on WhatsApp (+91 70758 53225)."
      
      const lowerText = text.toLowerCase()
      if (lowerText.includes('revenue') || lowerText.includes('scale') || lowerText.includes('grow')) {
        replyText = AUTOMATED_ANSWERS.revenue
      } else if (lowerText.includes('funnel') || lowerText.includes('automate') || lowerText.includes('whatsapp')) {
        replyText = AUTOMATED_ANSWERS.funnel
      } else if (lowerText.includes('crm') || lowerText.includes('database') || lowerText.includes('sync')) {
        replyText = AUTOMATED_ANSWERS.crm
      } else if (lowerText.includes('consultation') || lowerText.includes('book') || lowerText.includes('call')) {
        replyText = AUTOMATED_ANSWERS.contact
      }

      const botMsg = {
        id: `msg-${Date.now()}-bot`,
        sender: 'bot',
        text: replyText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }

      setMessages(prev => [...prev, botMsg])
      setIsTyping(false)
    }, 1200)
  }

  const selectQuickOption = (key, label) => {
    // Add user message
    const userMsg = {
      id: `msg-${Date.now()}-user`,
      sender: 'user',
      text: label,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
    setMessages(prev => [...prev, userMsg])
    setIsTyping(true)

    setTimeout(() => {
      const botMsg = {
        id: `msg-${Date.now()}-bot`,
        sender: 'bot',
        text: AUTOMATED_ANSWERS[key],
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
      setMessages(prev => [...prev, botMsg])
      setIsTyping(false)
    }, 1000)
  }

  return (
    <>
      {/* Floating Trigger Button */}
      <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 9999 }}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #F3E5AB 0%, #D4AF37 50%, #C5B358 100%)',
            border: '1px solid rgba(255,255,255,0.3)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 10px 30px rgba(212,175,55,0.3), 0 0 15px rgba(212,175,55,0.2) inset',
            transition: 'transform 0.3s ease'
          }}
          className="glow-gold-pulse"
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08) translateY(-2px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          {isOpen ? <X size={24} color="#000" /> : <MessageSquare size={24} color="#000" />}
        </button>
      </div>

      {/* Chat Drawer Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              bottom: '6.5rem',
              right: '2rem',
              width: '380px',
              height: '520px',
              background: '#0a0a0a',
              border: '1px solid rgba(212,175,55,0.25)',
              borderRadius: '16px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 20px 50px rgba(0,0,0,0.7), 0 0 30px rgba(212,175,55,0.05) inset',
              overflow: 'hidden',
              zIndex: 9998
            }}
          >
            {/* Header */}
            <div style={{
              padding: '1.2rem 1.5rem',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              background: 'linear-gradient(90deg, rgba(212,175,55,0.06) 0%, transparent 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <div style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  background: 'rgba(212,175,55,0.1)',
                  border: '1px solid rgba(212,175,55,0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Bot size={18} color="#D4AF37" />
                </div>
                <div>
                  <div style={{ color: '#fff', fontSize: '0.88rem', fontWeight: 700, letterSpacing: '0.02em', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    NVX Strategist
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }}></span>
                  </div>
                  <div style={{ color: '#666', fontSize: '0.72rem', fontWeight: 500 }}>AUTOMATED DEMO</div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#666'}
              >
                <X size={18} />
              </button>
            </div>

            {/* Message Area */}
            <div style={{
              flex: 1,
              padding: '1.5rem',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.2rem',
              background: '#070707'
            }} className="hide-scroll">
              {messages.map((msg) => (
                <div 
                  key={msg.id}
                  style={{
                    alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                    maxWidth: '85%'
                  }}
                >
                  <div style={{
                    background: msg.sender === 'user' ? '#D4AF37' : 'rgba(255,255,255,0.02)',
                    border: msg.sender === 'user' ? 'none' : '1px solid rgba(255,255,255,0.04)',
                    color: msg.sender === 'user' ? '#000' : '#d6d6d6',
                    padding: '0.85rem 1.1rem',
                    borderRadius: msg.sender === 'user' ? '12px 12px 2px 12px' : '12px 12px 12px 2px',
                    fontSize: '0.88rem',
                    lineHeight: 1.6,
                    boxShadow: msg.sender === 'user' ? '0 5px 15px rgba(212,175,55,0.1)' : 'none'
                  }}>
                    {msg.text}
                  </div>
                  <div style={{ 
                    fontSize: '0.65rem', 
                    color: '#444', 
                    marginTop: '0.3rem', 
                    textAlign: msg.sender === 'user' ? 'right' : 'left',
                    fontWeight: 500
                  }}>
                    {msg.time}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div style={{ alignSelf: 'flex-start', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', padding: '0.8rem 1.2rem', borderRadius: '12px 12px 12px 2px', display: 'flex', gap: '4px', alignItems: 'center' }}>
                  <div style={{ width: '6px', height: '6px', background: '#D4AF37', borderRadius: '50%', animation: 'float 1s ease-in-out infinite' }}></div>
                  <div style={{ width: '6px', height: '6px', background: '#D4AF37', borderRadius: '50%', animation: 'float 1s ease-in-out infinite 0.2s' }}></div>
                  <div style={{ width: '6px', height: '6px', background: '#D4AF37', borderRadius: '50%', animation: 'float 1s ease-in-out infinite 0.4s' }}></div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Options Selector */}
            <div style={{
              padding: '0.8rem 1rem',
              borderTop: '1px solid rgba(255,255,255,0.05)',
              background: '#070707',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              justifyContent: 'center'
            }}>
              <button 
                onClick={() => selectQuickOption('revenue', 'Scale Revenue')}
                style={{ background: 'rgba(212,175,55,0.05)', border: '1px solid rgba(212,175,55,0.2)', color: '#D4AF37', padding: '0.35rem 0.75rem', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(212,175,55,0.1)'; e.currentTarget.style.borderColor = 'rgba(212,175,55,0.4)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(212,175,55,0.05)'; e.currentTarget.style.borderColor = 'rgba(212,175,55,0.2)' }}
              >
                Scale Revenue
              </button>
              <button 
                onClick={() => selectQuickOption('funnel', 'Automate Lead Funnel')}
                style={{ background: 'rgba(212,175,55,0.05)', border: '1px solid rgba(212,175,55,0.2)', color: '#D4AF37', padding: '0.35rem 0.75rem', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(212,175,55,0.1)'; e.currentTarget.style.borderColor = 'rgba(212,175,55,0.4)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(212,175,55,0.05)'; e.currentTarget.style.borderColor = 'rgba(212,175,55,0.2)' }}
              >
                Automate Funnel
              </button>
              <button 
                onClick={() => selectQuickOption('crm', 'Central Database / CRM')}
                style={{ background: 'rgba(212,175,55,0.05)', border: '1px solid rgba(212,175,55,0.2)', color: '#D4AF37', padding: '0.35rem 0.75rem', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(212,175,55,0.1)'; e.currentTarget.style.borderColor = 'rgba(212,175,55,0.4)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(212,175,55,0.05)'; e.currentTarget.style.borderColor = 'rgba(212,175,55,0.2)' }}
              >
                CRM Integration
              </button>
              
              <a 
                href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=NovelleyX+Strategy+Consultation&details=30-Minute+Discovery+%26+Strategy+Consultation+with+NovelleyX.+We+will+discuss+your+digital+identity%2C+platforms%2C+and+growth+strategy.&add=abhinav.patta01@gmail.com,novelleyx@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: 'linear-gradient(135deg, #F3E5AB 0%, #D4AF37 100%)', border: 'none', color: '#000', padding: '0.35rem 0.85rem', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '3px' }}
              >
                Book Strategy Consultation
              </a>
            </div>

            {/* Input Form */}
            <div style={{
              padding: '1.2rem',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              background: '#0a0a0a',
              display: 'flex',
              gap: '0.8rem'
            }}>
              <input
                type="text"
                placeholder="Ask strategist..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                style={{
                  flex: 1,
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '8px',
                  padding: '0.75rem 1rem',
                  color: '#fff',
                  fontSize: '0.88rem'
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = '#D4AF37'}
                onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
              />
              <button
                onClick={() => handleSendMessage(inputValue)}
                style={{
                  background: 'linear-gradient(135deg, #F3E5AB 0%, #D4AF37 100%)',
                  border: 'none',
                  borderRadius: '8px',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <Send size={16} color="#000" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatbotWidget
