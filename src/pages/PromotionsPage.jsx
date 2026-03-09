import useScrollAnimation from '../hooks/useScrollAnimation'
import Promotions from '../components/Promotions'
import CTA from '../components/CTA'
import { useLanguage } from '../contexts/LanguageContext'

export default function PromotionsPage() {
  const { t } = useLanguage()
  useScrollAnimation()
  return (
    <>
      <div className="page-hero" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/image/banner7.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', opacity: '0.3' }}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="page-hero-inner">
            <div className="page-breadcrumb">{t('promotions.breadcrumb')}</div>
            <h1 className="page-hero-title">{t('promotions.title')} <span className="r">{t('promotions.titleHighlight')}</span></h1>
            <p className="page-hero-sub">{t('promotions.subtitle')}</p>
          </div>
        </div>
      </div>
      <Promotions />
      <CTA />
    </>
  )
}
