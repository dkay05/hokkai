import { useState, useCallback } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import Ticker from '../components/Ticker'
import Hero from '../components/Hero'
import StatsBar from '../components/StatsBar'
import About from '../components/About'
import WhyChoose from '../components/WhyChoose'
import Markets from '../components/Markets'
import LiveCharts from '../components/LiveCharts'
import Platforms from '../components/Platforms'
import Accounts from '../components/Accounts'
import Conditions from '../components/Conditions'
import Tools from '../components/Tools'
import Education from '../components/Education'
import Videos from '../components/Videos'
import MobileApp from '../components/MobileApp'
import Regulation from '../components/Regulation'
import MT4MT5 from '../components/MT4MT5'
import Islamic from '../components/Islamic'
import Deposits from '../components/Deposits'
import Spreads from '../components/Spreads'
import Analysis from '../components/Analysis'
import IB from '../components/IB'
import Promotions from '../components/Promotions'
import KYC from '../components/KYC'
import Steps from '../components/Steps'
import Awards from '../components/Awards'
import Calculators from '../components/Calculators'
import Portal from '../components/Portal'
import Glossary from '../components/Glossary'
import Contact from '../components/Contact'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'

export default function HomePage() {
  const [prices, setPrices] = useState(null)
  const handlePriceUpdate = useCallback((p) => setPrices(p), [])
  useScrollAnimation()

  return (
    <>
      <Ticker onPriceUpdate={handlePriceUpdate} />
      <Hero prices={prices} />
      <StatsBar />
      <About />
      <WhyChoose />
      <Markets />
      <LiveCharts />
      <Platforms />
      <Accounts />
      <Conditions />
      <Tools />
      <Education />
      <Videos />
      <MobileApp />
      <Regulation />
      <MT4MT5 />
      <Islamic />
      <Deposits />
      <Spreads />
      <Analysis />
      <IB />
      <Promotions />
      <KYC />
      <Steps />
      <Awards />
      <Calculators />
      <Portal />
      <Glossary />
      <Contact />
      <FAQ />
      <CTA />
    </>
  )
}
