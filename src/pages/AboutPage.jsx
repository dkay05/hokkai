import useScrollAnimation from '../hooks/useScrollAnimation'
import About from '../components/About'
import WhyChoose from '../components/WhyChoose'
import Regulation from '../components/Regulation'
import Awards from '../components/Awards'
import CTA from '../components/CTA'
import { useLanguage } from '../contexts/LanguageContext'

export default function AboutPage() {
  const { t } = useLanguage()
  useScrollAnimation()
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="page-breadcrumb">{t('aboutPage.breadcrumb')}</div>
          <h1 className="page-hero-title">{t('aboutPage.title')} <span className="r">{t('aboutPage.titleHighlight')}</span></h1>
          <p className="page-hero-sub">{t('aboutPage.subtitle')}</p>
        </div>
      </div>
      <About />
      <WhyChoose />
      <Regulation />
      <Awards />
      <CTA />
    </>
  )
}
