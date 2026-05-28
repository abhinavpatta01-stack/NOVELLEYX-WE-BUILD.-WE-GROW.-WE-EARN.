import React, { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import DetailedServices from './pages/DetailedServices'

// Service sub-pages
import BrandArchitecture from './pages/services/BrandArchitecture'
import WebsiteSystems from './pages/services/WebsiteSystems'
import SocialMediaGrowth from './pages/services/SocialMediaGrowth'
import SEOOptimization from './pages/services/SEOOptimization'
import ContentProduction from './pages/services/ContentProduction'
import AIIntegration from './pages/services/AIIntegration'
import PersonalBranding from './pages/services/PersonalBranding'
import PerformanceMarketing from './pages/services/PerformanceMarketing'
import Web3Blockchain from './pages/services/Web3Blockchain'
import UIUXEngineering from './pages/services/UIUXEngineering'

// Product sub-pages
import EarningDashboard from './pages/products/EarningDashboard'
import AIWorkflowsCanvas from './pages/products/AIWorkflowsCanvas'
import EcosystemMarketplace from './pages/products/EcosystemMarketplace'
import PerformanceLeaderboard from './pages/products/PerformanceLeaderboard'
import InternalConsole from './pages/products/InternalConsole'

import Loader from './components/home/Loader'
import MouseGlowFollower from './components/ui/MouseGlowFollower'

function App() {
  useEffect(() => {
    // Robust clipboard copy fallback helper
    const copyText = (text) => {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        return navigator.clipboard.writeText(text)
      } else {
        const textarea = document.createElement('textarea')
        textarea.value = text
        textarea.style.position = 'fixed'
        document.body.appendChild(textarea)
        textarea.focus()
        textarea.select()
        try {
          document.execCommand('copy')
          document.body.removeChild(textarea)
          return Promise.resolve()
        } catch (err) {
          document.body.removeChild(textarea)
          return Promise.reject(err)
        }
      }
    }

    // Custom luxury Toast notification system
    const showToast = (message) => {
      let container = document.getElementById('novelleyx-toast-container')
      if (!container) {
        container = document.createElement('div')
        container.id = 'novelleyx-toast-container'
        container.style.cssText = `
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 99999;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          pointer-events: none;
        `
        document.body.appendChild(container)
      }

      const toast = document.createElement('div')
      toast.style.cssText = `
        background: linear-gradient(135deg, rgba(20,20,20,0.95) 0%, rgba(10,10,10,0.98) 100%);
        border: 1px solid rgba(212,175,55,0.4);
        box-shadow: 0 10px 30px rgba(0,0,0,0.5), 0 0 20px rgba(212,175,55,0.1) inset;
        color: #fff;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        font-family: 'Inter', sans-serif;
        font-size: 0.9rem;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        pointer-events: auto;
        transform: translateY(20px);
        opacity: 0;
        transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
      `
      
      const icon = document.createElement('span')
      icon.innerHTML = '✦'
      icon.style.color = '#D4AF37'
      icon.style.fontSize = '1.1rem'
      toast.appendChild(icon)

      const textNode = document.createElement('span')
      textNode.innerText = message
      toast.appendChild(textNode)

      toast.className = 'novelleyx-toast'
      container.appendChild(toast)

      requestAnimationFrame(() => {
        toast.style.transform = 'translateY(0)'
        toast.style.opacity = '1'
      })

      setTimeout(() => {
        toast.style.transform = 'translateY(-20px)'
        toast.style.opacity = '0'
        setTimeout(() => {
          toast.remove()
        }, 400)
      }, 4000)
    }

    // Attach programmatic helper globally
    window.novelleyxMailCompose = (mailtoUrl, email = 'novelleyx@gmail.com') => {
      copyText(email)
        .then(() => {
          showToast(`Email copied: ${email}. Opening Gmail...`)
        })
        .catch(() => {
          showToast(`Opening Gmail for ${email}...`)
        })

      // Extract subject and body params if present in mailto URL
      let subject = ''
      let body = ''
      
      const subjectMatch = mailtoUrl.match(/[?&]subject=([^&]*)/)
      const bodyMatch = mailtoUrl.match(/[?&]body=([^&]*)/)
      
      if (subjectMatch) {
        try {
          subject = decodeURIComponent(subjectMatch[1])
        } catch (e) {
          subject = subjectMatch[1]
        }
      }
      if (bodyMatch) {
        try {
          body = decodeURIComponent(bodyMatch[1])
        } catch (e) {
          body = bodyMatch[1]
        }
      }

      // Construct web-based Gmail Compose URL
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

      // Open Gmail web client in a new tab
      window.open(gmailUrl, '_blank')
    }

    // Global mailto link click interceptor
    const handleMailtoClick = (e) => {
      const link = e.target.closest('a')
      if (link && link.href && link.href.startsWith('mailto:')) {
        e.preventDefault() // Intercept and handle programmatically
        const mailtoUrl = link.href
        const emailMatch = mailtoUrl.match(/mailto:([^?]+)/)
        const email = emailMatch ? decodeURIComponent(emailMatch[1]) : 'novelleyx@gmail.com'
        
        window.novelleyxMailCompose(mailtoUrl, email)
      }
    }

    document.addEventListener('click', handleMailtoClick)
    return () => document.removeEventListener('click', handleMailtoClick)
  }, [])

  return (
    <>
      <Loader />
      <MouseGlowFollower />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/services" element={<DetailedServices />} />
        
        {/* 10 Individual Service Routes */}
        <Route path="/services/brand-architecture" element={<BrandArchitecture />} />
        <Route path="/services/website-systems" element={<WebsiteSystems />} />
        <Route path="/services/social-media-growth" element={<SocialMediaGrowth />} />
        <Route path="/services/seo-optimization" element={<SEOOptimization />} />
        <Route path="/services/content-production" element={<ContentProduction />} />
        <Route path="/services/ai-integration" element={<AIIntegration />} />
        <Route path="/services/personal-branding" element={<PersonalBranding />} />
        <Route path="/services/performance-marketing" element={<PerformanceMarketing />} />
        <Route path="/services/web3-blockchain" element={<Web3Blockchain />} />
        <Route path="/services/ui-ux-engineering" element={<UIUXEngineering />} />
        
        {/* 5 Individual Product Routes */}
        <Route path="/products/earning-dashboard" element={<EarningDashboard />} />
        <Route path="/products/ai-workflows-canvas" element={<AIWorkflowsCanvas />} />
        <Route path="/products/ecosystem-marketplace" element={<EcosystemMarketplace />} />
        <Route path="/products/performance-leaderboard" element={<PerformanceLeaderboard />} />
        <Route path="/products/internal-console" element={<InternalConsole />} />
        
        {/* Wildcard Catch-All Redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App
