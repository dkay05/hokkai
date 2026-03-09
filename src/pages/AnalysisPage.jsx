import useScrollAnimation from '../hooks/useScrollAnimation'
import Analysis from '../components/Analysis'
import CTA from '../components/CTA'

export default function AnalysisPage() {
  useScrollAnimation()
  return (
    <>
      <div className="page-hero" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/assets/banner%205.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', opacity: '0.2' }}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="page-hero-inner">
            <div className="page-breadcrumb">Home / Learn / Analysis</div>
            <h1 className="page-hero-title">MARKET <span className="r">ANALYSIS</span></h1>
            <p className="page-hero-sub">Expert market analysis, trading signals, and economic calendar for informed trading decisions.</p>
          </div>
        </div>
      </div>
      <Analysis />
      <CTA />
    </>
  )
}
