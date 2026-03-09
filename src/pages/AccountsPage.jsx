import useScrollAnimation from '../hooks/useScrollAnimation'
import Accounts from '../components/Accounts'
import Islamic from '../components/Islamic'
import Deposits from '../components/Deposits'
import KYC from '../components/KYC'
import Steps from '../components/Steps'
import CTA from '../components/CTA'
import { useLanguage } from '../contexts/LanguageContext'

export default function AccountsPage() {
  const { t } = useLanguage()
  useScrollAnimation()
  return (
    <>
      <div className="page-hero" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/image/banner%204.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', opacity: '0.2' }}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="page-hero-inner">
            <div className="page-breadcrumb">{t('accounts.main.breadcrumb')}</div>
            <h1 className="page-hero-title">{t('accounts.main.title')} <span className="r">{t('accounts.main.titleHighlight')}</span></h1>
            <p className="page-hero-sub">{t('accounts.main.subtitle')}</p>
          </div>
        </div>
      </div>
      <Accounts />
      <Islamic />
      <Deposits />
      <KYC />
      <Steps />
      <CTA />
    </>
  )
}
