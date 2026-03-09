import useScrollAnimation from '../hooks/useScrollAnimation'
import MobileApp from '../components/MobileApp'
import CTA from '../components/CTA'

export default function MobileAppPage() {
  useScrollAnimation()
  return (
    <>
      <div className="page-hero" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/image/banner3.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', opacity: '0.2' }}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="page-hero-inner">
            <div className="page-breadcrumb">Home / Platforms / Mobile App</div>
            <h1 className="page-hero-title">MOBILE <span className="r">TRADING</span></h1>
            <p className="page-hero-sub">Trade on the go with our powerful mobile app. Full platform functionality in your pocket.</p>
          </div>
        </div>
      </div>
      <MobileApp />
      <CTA />
    </>
  )
}
