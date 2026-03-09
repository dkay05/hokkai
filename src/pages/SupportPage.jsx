import useScrollAnimation from '../hooks/useScrollAnimation'
import Contact from '../components/Contact'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import { useLanguage } from '../contexts/LanguageContext'

export default function SupportPage() {
  const { t } = useLanguage()
  useScrollAnimation()
  return (
    <>
      <div className="page-hero" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/image/banner8.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', opacity: '0.3' }}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="page-hero-inner">
            <div className="page-breadcrumb">{t('support.breadcrumb')}</div>
            <h1 className="page-hero-title">{t('support.title')} <span className="r">{t('support.titleHighlight')}</span></h1>
            <p className="page-hero-sub">{t('support.subtitle')}</p>
          </div>
        </div>
      </div>
      <Contact />
      <FAQ />
      <CTA />
    </>
  )
}
