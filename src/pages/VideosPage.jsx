import useScrollAnimation from '../hooks/useScrollAnimation'
import Videos from '../components/Videos'
import CTA from '../components/CTA'

export default function VideosPage() {
  useScrollAnimation()
  return (
    <>
      <div className="page-hero" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/image/banner%205.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', opacity: '0.2' }}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="page-hero-inner">
            <div className="page-breadcrumb">Home / Learn / Videos</div>
            <h1 className="page-hero-title">TRADING <span className="r">VIDEOS</span></h1>
            <p className="page-hero-sub">Watch expert traders analyze markets, share strategies, and explain trading concepts.</p>
          </div>
        </div>
      </div>
      <Videos />
      <CTA />
    </>
  )
}
