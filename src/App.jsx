import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

import Splash from './components/Splash'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Chat from './components/Chat'
import FloatingButtons from './components/FloatingButtons'
import CookieBanner from './components/CookieBanner'
import BackToTop from './components/BackToTop'
import { LanguageProvider } from './contexts/LanguageContext'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import TradingPage from './pages/TradingPage'
import ForexPage from './pages/ForexPage'
import GoldMetalsPage from './pages/GoldMetalsPage'
import CryptoPage from './pages/CryptoPage'
import IndicesPage from './pages/IndicesPage'
import SpreadsPage from './pages/SpreadsPage'
import LiveChartsPage from './pages/LiveChartsPage'
import PlatformsPage from './pages/PlatformsPage'
import MT4Page from './pages/MT4Page'
import MT5Page from './pages/MT5Page'
import MobileAppPage from './pages/MobileAppPage'
import AccountsPage from './pages/AccountsPage'
import StandardAccountPage from './pages/StandardAccountPage'
import ECNRawAccountPage from './pages/ECNRawAccountPage'
import ProAccountPage from './pages/ProAccountPage'
import VIPAccountPage from './pages/VIPAccountPage'
import IslamicPage from './pages/IslamicPage'
import DepositsPage from './pages/DepositsPage'
import LearnPage from './pages/LearnPage'
import EducationPage from './pages/EducationPage'
import VideosPage from './pages/VideosPage'
import CalculatorsPage from './pages/CalculatorsPage'
import AnalysisPage from './pages/AnalysisPage'
import PromotionsPage from './pages/PromotionsPage'
import PartnersPage from './pages/PartnersPage'
import SupportPage from './pages/SupportPage'
import RiskDisclosurePage from './pages/RiskDisclosurePage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsPage from './pages/TermsPage'
import AMLPage from './pages/AMLPage'
import KYCPolicyPage from './pages/KYCPolicyPage'
import CookiePolicyPage from './pages/CookiePolicyPage'
import RefundPolicyPage from './pages/RefundPolicyPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AppInner() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('hk_theme') || 'dark' } catch { return 'dark' }
  })
  const [chatOpen, setChatOpen] = useState(false)

  const toggleTheme = () => {
    setTheme(t => {
      const next = t === 'dark' ? 'light' : 'dark'
      document.body.classList.toggle('light-mode', next === 'light')
      try { localStorage.setItem('hk_theme', next) } catch {}
      return next
    })
  }

  return (
    <div className={theme === 'light' ? 'light-mode' : ''}>
      <ScrollToTop />
      <Splash />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/trading" element={<TradingPage />} />
        <Route path="/trading/forex" element={<ForexPage />} />
        <Route path="/trading/gold-metals" element={<GoldMetalsPage />} />
        <Route path="/trading/crypto" element={<CryptoPage />} />
        <Route path="/trading/indices" element={<IndicesPage />} />
        <Route path="/trading/spreads" element={<SpreadsPage />} />
        <Route path="/trading/live-charts" element={<LiveChartsPage />} />
        <Route path="/platforms" element={<PlatformsPage />} />
        <Route path="/platforms/mt4" element={<MT4Page />} />
        <Route path="/platforms/mt5" element={<MT5Page />} />
        <Route path="/platforms/mobile-app" element={<MobileAppPage />} />
        <Route path="/accounts" element={<AccountsPage />} />
        <Route path="/accounts/standard" element={<StandardAccountPage />} />
        <Route path="/accounts/ecn-raw" element={<ECNRawAccountPage />} />
        <Route path="/accounts/pro" element={<ProAccountPage />} />
        <Route path="/accounts/vip" element={<VIPAccountPage />} />
        <Route path="/accounts/islamic" element={<IslamicPage />} />
        <Route path="/accounts/deposits" element={<DepositsPage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/learn/education" element={<EducationPage />} />
        <Route path="/learn/videos" element={<VideosPage />} />
        <Route path="/learn/calculators" element={<CalculatorsPage />} />
        <Route path="/learn/analysis" element={<AnalysisPage />} />
        <Route path="/promotions" element={<PromotionsPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/legal/risk-disclosure" element={<RiskDisclosurePage />} />
        <Route path="/legal/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/legal/terms" element={<TermsPage />} />
        <Route path="/legal/aml-policy" element={<AMLPage />} />
        <Route path="/legal/kyc-policy" element={<KYCPolicyPage />} />
        <Route path="/legal/cookie-policy" element={<CookiePolicyPage />} />
        <Route path="/legal/refund-policy" element={<RefundPolicyPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
      <Chat open={chatOpen} setOpen={setChatOpen} />
      <FloatingButtons onChatOpen={() => setChatOpen(true)} />
      <CookieBanner />
      <BackToTop />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AppInner />
      </LanguageProvider>
    </BrowserRouter>
  )
}

export default App
