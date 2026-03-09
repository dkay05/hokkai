import useScrollAnimation from '../hooks/useScrollAnimation'
import MT4MT5 from '../components/MT4MT5'
import CTA from '../components/CTA'
import { useLanguage } from '../contexts/LanguageContext'

export default function MT4Page() {
  const { t } = useLanguage()
  useScrollAnimation()
  return (
    <>
      <div className="page-hero" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/assets/banner3.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', opacity: '0.2' }}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="page-hero-inner">
            <div className="page-breadcrumb">{t('platforms.mt4.breadcrumb')}</div>
            <h1 className="page-hero-title">{t('platforms.mt4.title')} <span className="r">{t('platforms.mt4.titleHighlight')}</span></h1>
            <p className="page-hero-sub">{t('platforms.mt4.subtitle')}</p>
          </div>
        </div>
      </div>
      <MT4MT5 />
      <CTA />
    </>
  )
}
