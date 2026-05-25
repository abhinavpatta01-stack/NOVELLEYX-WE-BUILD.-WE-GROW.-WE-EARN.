import { Routes, Route } from 'react-router-dom'
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
import Loader from './components/home/Loader'

function App() {
  return (
    <>
      <Loader />
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
    </Routes>
    </>
  )
}

export default App
