import useScrollAnimation from '../hooks/useScrollAnimation'
import LiveCharts from '../components/LiveCharts'
import Tools from '../components/Tools'
import CTA from '../components/CTA'
import { useLanguage } from '../contexts/LanguageContext'

export default function LiveChartsPage() {
  const { t } = useLanguage()
  useScrollAnimation()
  return (
    <>
      <div className="page-hero" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/assets/banner%202.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', opacity: '0.3' }}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="page-hero-inner">
            <div className="page-breadcrumb">{t('trading.liveCharts.breadcrumb')}</div>
            <h1 className="page-hero-title">{t('trading.liveCharts.title')} <span className="r">{t('trading.liveCharts.titleHighlight')}</span></h1>
            <p className="page-hero-sub">{t('trading.liveCharts.subtitle')}</p>
          </div>
        </div>
      </div>
      <LiveCharts />
      <Tools />
      <CTA />
    </>
  )
}
