import useScrollAnimation from '../hooks/useScrollAnimation'
import Markets from '../components/Markets'
import Spreads from '../components/Spreads'
import LiveCharts from '../components/LiveCharts'
import CTA from '../components/CTA'
import { useLanguage } from '../contexts/LanguageContext'

export default function ForexPage() {
  const { t } = useLanguage()
  useScrollAnimation()
  return (
    <>
      <div className="page-hero" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/image/banner%202.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', opacity: '0.3' }}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="page-hero-inner">
            <div className="page-breadcrumb">{t('trading.forex.breadcrumb')}</div>
            <h1 className="page-hero-title">{t('trading.forex.title')} <span className="r">{t('trading.forex.titleHighlight')}</span></h1>
            <p className="page-hero-sub">{t('trading.forex.subtitle')}</p>
          </div>
        </div>
      </div>
      <Markets />
      <Spreads />
      <LiveCharts />
      <CTA />
    </>
  )
}
