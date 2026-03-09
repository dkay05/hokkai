import useScrollAnimation from '../hooks/useScrollAnimation'
import Education from '../components/Education'
import CTA from '../components/CTA'

export default function EducationPage() {
  useScrollAnimation()
  return (
    <>
      <div className="page-hero" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/image/banner%205.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', opacity: '0.2' }}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="page-hero-inner">
            <div className="page-breadcrumb">Home / Learn / Education</div>
            <h1 className="page-hero-title">TRADING <span className="r">EDUCATION</span></h1>
            <p className="page-hero-sub">Free trading courses, guides, and tutorials designed to help you become a better trader.</p>
          </div>
        </div>
      </div>
      <Education />
      <CTA />
    </>
  )
}
