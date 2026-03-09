import useScrollAnimation from '../hooks/useScrollAnimation'
import Platforms from '../components/Platforms'
import MT4MT5 from '../components/MT4MT5'
import MobileApp from '../components/MobileApp'
import CTA from '../components/CTA'
import { useLanguage } from '../contexts/LanguageContext'

export default function PlatformsPage() {
  const { t } = useLanguage()
  useScrollAnimation()
  return (
    <>
      <div className="page-hero" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/image/banner3.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', opacity: '0.2' }}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="page-hero-inner">
            <div className="page-breadcrumb">{t('platforms.main.breadcrumb')}</div>
            <h1 className="page-hero-title">{t('platforms.main.title')} <span className="r">{t('platforms.main.titleHighlight')}</span></h1>
            <p className="page-hero-sub">{t('platforms.main.subtitle')}</p>
          </div>
        </div>
      </div>
      <Platforms />
      <MT4MT5 />
      <MobileApp />
      <CTA />
    </>
  )
}
