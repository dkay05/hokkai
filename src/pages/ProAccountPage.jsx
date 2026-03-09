import { useState } from 'react'
import Modal from '../components/Modal'
import CTA from '../components/CTA'
import useScrollAnimation from '../hooks/useScrollAnimation'

export default function ProAccountPage() {
  const [modal, setModal] = useState({ open: false, type: 'account' })
  const openModal = (type) => setModal({ open: true, type })
  const closeModal = () => setModal(m => ({ ...m, open: false }))
  useScrollAnimation()

  return (
    <>
      <div className="page-hero" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/assets/banner%204.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', opacity: '0.2' }}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="page-hero-inner">
            <div className="page-breadcrumb">Home / Accounts / Pro</div>
            <h1 className="page-hero-title">PRO <span className="r">ACCOUNT</span></h1>
            <p className="page-hero-sub">Enhanced trading conditions with ultra-tight spreads, reduced commission, and priority execution.</p>
          </div>
        </div>
      </div>

      <section className="sec acc-sec">
        <div className="sec-in">
          <div className="tc fu">
            <div className="sbw"><div className="sbl"></div><span className="sbt">Account Details</span><div className="sbl"></div></div>
            <h2 className="sh">PRO <span className="r">TRADING ACCOUNT</span></h2>
            <div className="sd c"></div>
            <p className="ss">Tailored for experienced traders seeking enhanced trading conditions and premium support.</p>
          </div>

          <div className="acc-grid">
            <div className="acc-card fu feat">
              <span className="acc-badge" style={{ background: 'rgba(168,85,247,.15)', color: '#c084fc' }}>Advanced</span>
              <div className="acc-name">Pro</div>
              <div className="acc-dep" style={{ color: '#fff' }}>$5,000</div>
              <div className="acc-dep-l">Minimum Deposit</div>
              <div className="acc-sp">Spreads: <strong>Ultra-tight</strong></div>
              <div className="acc-com">Commission: Reduced</div>
              <p className="acc-desc">Tailored for experienced traders seeking enhanced trading conditions. Includes advanced analytics tools and premium support access.</p>
              <ul className="acc-ul">
                <li><span className="acc-ck">✓</span> Tightest spreads</li>
                <li><span className="acc-ck">✓</span> Priority execution</li>
                <li><span className="acc-ck">✓</span> Advanced analytics</li>
                <li><span className="acc-ck">✓</span> Dedicated support</li>
              </ul>
              <button className="acc-btn pri" onClick={() => openModal('account')}>Open Pro</button>
            </div>
          </div>

          <div className="g3 fu" style={{ marginTop: '3rem' }}>
            {[
              { ico: '📊', title: 'Advanced Analytics', desc: 'Access professional-grade charting, market depth, and trading analytics tools.' },
              { ico: '🚀', title: 'Priority Support', desc: 'Dedicated account manager with 24/5 priority support and faster response times.' },
              { ico: '💎', title: 'Premium Features', desc: 'Exclusive access to market insights, research reports, and early feature releases.' },
            ].map((f, i) => (
              <div key={f.title} className={`card fu${i > 0 ? ` d${i}` : ''}`}>
                <div style={{ fontSize: '2rem', marginBottom: '.75rem' }}>{f.ico}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Ready for professional trading?</h3>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={() => openModal('account')} className="btn-red" style={{ cursor: 'pointer', border: 'none' }}>Open Pro Account →</button>
              <button onClick={() => openModal('demo')} className="btn-out" style={{ cursor: 'pointer', border: 'none' }}>▶ Try Free Demo</button>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Modal isOpen={modal.open} onClose={closeModal} type={modal.type} />
    </>
  )
}
