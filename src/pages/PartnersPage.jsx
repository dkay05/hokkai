import useScrollAnimation from '../hooks/useScrollAnimation'
import IB from '../components/IB'
import CTA from '../components/CTA'
import { useLanguage } from '../contexts/LanguageContext'

export default function PartnersPage() {
  const { t } = useLanguage()
  useScrollAnimation()
  return (
    <>
      <div className="page-hero" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/image/banner%206.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', opacity: '0.25' }}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="page-hero-inner">
            <div className="page-breadcrumb">{t('partners.breadcrumb')}</div>
            <h1 className="page-hero-title">{t('partners.title')} <span className="r">{t('partners.titleHighlight')}</span></h1>
            <p className="page-hero-sub">{t('partners.subtitle')}</p>
          </div>
        </div>
      </div>
      <IB />
      <CTA />
    </>
  )
}
