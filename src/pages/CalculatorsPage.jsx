import useScrollAnimation from '../hooks/useScrollAnimation'
import Calculators from '../components/Calculators'
import Tools from '../components/Tools'
import CTA from '../components/CTA'

export default function CalculatorsPage() {
  useScrollAnimation()
  return (
    <>
      <div className="page-hero" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/assets/banner%205.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', opacity: '0.2' }}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="page-hero-inner">
            <div className="page-breadcrumb">Home / Learn / Calculators</div>
            <h1 className="page-hero-title">TRADING <span className="r">CALCULATORS</span></h1>
            <p className="page-hero-sub">Professional tools to calculate pip values, position sizes, margins, and profit/loss.</p>
          </div>
        </div>
      </div>
      <Calculators />
      <Tools />
      <CTA />
    </>
  )
}
