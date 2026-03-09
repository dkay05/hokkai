import useScrollAnimation from '../hooks/useScrollAnimation'
import Deposits from '../components/Deposits'
import KYC from '../components/KYC'
import CTA from '../components/CTA'

export default function DepositsPage() {
  useScrollAnimation()
  return (
    <>
      <div className="page-hero" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/assets/banner%204.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', opacity: '0.2' }}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="page-hero-inner">
            <div className="page-breadcrumb">Home / Accounts / Deposits</div>
            <h1 className="page-hero-title">DEPOSITS <span className="r">& WITHDRAWALS</span></h1>
            <p className="page-hero-sub">Fast, secure, and convenient payment methods. Fund your account instantly and withdraw profits quickly.</p>
          </div>
        </div>
      </div>
      <Deposits />
      <KYC />
      <CTA />
    </>
  )
}
