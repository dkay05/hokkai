import useScrollAnimation from '../hooks/useScrollAnimation'
import MT4MT5 from '../components/MT4MT5'
import CTA from '../components/CTA'

export default function MT5Page() {
  useScrollAnimation()
  return (
    <>
      <div className="page-hero" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/assets/banner3.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', opacity: '0.2' }}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="page-hero-inner">
            <div className="page-breadcrumb">Home / Platforms / MetaTrader 5</div>
            <h1 className="page-hero-title">METATRADER <span className="r">5</span></h1>
            <p className="page-hero-sub">Next-generation trading platform with more timeframes, indicators, and improved performance.</p>
          </div>
        </div>
      </div>
      <MT4MT5 />
      <CTA />
    </>
  )
}
