import useScrollAnimation from '../hooks/useScrollAnimation'
import Education from '../components/Education'
import Videos from '../components/Videos'
import Calculators from '../components/Calculators'
import Analysis from '../components/Analysis'
import Glossary from '../components/Glossary'
import CTA from '../components/CTA'
import { useLanguage } from '../contexts/LanguageContext'

export default function LearnPage() {
  const { t } = useLanguage()
  useScrollAnimation()
  return (
    <>
      <div className="page-hero" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/assets/banner%205.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', opacity: '0.2' }}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="page-hero-inner">
            <div className="page-breadcrumb">{t('learn.main.breadcrumb')}</div>
            <h1 className="page-hero-title">{t('learn.main.title')} <span className="r">{t('learn.main.titleHighlight')}</span></h1>
            <p className="page-hero-sub">{t('learn.main.subtitle')}</p>
          </div>
        </div>
      </div>
      <Education />
      <Videos />
      <Calculators />
      <Analysis />
      <Glossary />
      <CTA />
    </>
  )
}
