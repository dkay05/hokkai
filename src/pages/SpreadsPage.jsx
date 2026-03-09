import useScrollAnimation from '../hooks/useScrollAnimation'
import Spreads from '../components/Spreads'
import Conditions from '../components/Conditions'
import CTA from '../components/CTA'
import { useLanguage } from '../contexts/LanguageContext'

export default function SpreadsPage() {
  const { t } = useLanguage()
  useScrollAnimation()
  return (
    <>
      <div className="page-hero" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/assets/banner%202.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', opacity: '0.3' }}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="page-hero-inner">
            <div className="page-breadcrumb">{t('trading.spreads.breadcrumb')}</div>
            <h1 className="page-hero-title">{t('trading.spreads.title')} <span className="r">{t('trading.spreads.titleHighlight')}</span></h1>
            <p className="page-hero-sub">{t('trading.spreads.subtitle')}</p>
          </div>
        </div>
      </div>
      <Spreads />
      <Conditions />
      <CTA />
    </>
  )
}
