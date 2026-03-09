import useScrollAnimation from '../hooks/useScrollAnimation'
import Islamic from '../components/Islamic'
import Accounts from '../components/Accounts'
import CTA from '../components/CTA'

export default function IslamicPage() {
  useScrollAnimation()
  return (
    <>
      <div className="page-hero" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/assets/banner%204.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', opacity: '0.2' }}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="page-hero-inner">
            <div className="page-breadcrumb">Home / Accounts / Islamic</div>
            <h1 className="page-hero-title">ISLAMIC <span className="r">ACCOUNT</span></h1>
            <p className="page-hero-sub">Swap-free trading compliant with Sharia law. No rollover fees on positions held overnight.</p>
          </div>
        </div>
      </div>
      <Islamic />
      <Accounts />
      <CTA />
    </>
  )
}
