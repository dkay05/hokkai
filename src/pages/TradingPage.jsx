import useScrollAnimation from '../hooks/useScrollAnimation'
import Markets from '../components/Markets'
import LiveCharts from '../components/LiveCharts'
import Spreads from '../components/Spreads'
import Conditions from '../components/Conditions'
import CTA from '../components/CTA'
import { useLanguage } from '../contexts/LanguageContext'

export default function TradingPage() {
  const { t } = useLanguage()
  useScrollAnimation()
  return (
    <>
      <div className="page-hero" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/image/banner%202.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', opacity: '0.3' }}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="page-hero-inner">
            <div className="page-breadcrumb">{t('trading.main.breadcrumb')}</div>
            <h1 className="page-hero-title">{t('trading.main.title')} <span className="r">{t('trading.main.titleHighlight')}</span></h1>
            <p className="page-hero-sub">{t('trading.main.subtitle')}</p>
          </div>
        </div>
      </div>
      <Markets />
      <LiveCharts />
      <Spreads />
      <Conditions />
      <CTA />
    </>
  )
}
