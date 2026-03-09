import { useState } from 'react'
import Modal from '../components/Modal'
import CTA from '../components/CTA'
import useScrollAnimation from '../hooks/useScrollAnimation'

export default function ECNRawAccountPage() {
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
            <div className="page-breadcrumb">Home / Accounts / ECN Raw</div>
            <h1 className="page-hero-title">ECN <span className="r">RAW</span></h1>
            <p className="page-hero-sub">Raw spreads from 0.0 pips with fixed low commission — built for scalpers and serious traders.</p>
          </div>
        </div>
      </div>

      <section className="sec acc-sec">
        <div className="sec-in">
          <div className="tc fu">
            <div className="sbw"><div className="sbl"></div><span className="sbt">Account Details</span><div className="sbl"></div></div>
            <h2 className="sh">ECN <span className="r">RAW ACCOUNT</span></h2>
            <div className="sd c"></div>
            <p className="ss">Connect directly to liquidity providers with institutional pricing and zero markups.</p>
          </div>

          <div className="acc-grid">
            <div className="acc-card fu feat">
              <div className="acc-pop">POPULAR</div>
              <span className="acc-badge" style={{ background: 'rgba(255,255,255,.15)', color: '#fff' }}>Popular</span>
              <div className="acc-name">ECN Raw</div>
              <div className="acc-dep" style={{ color: '#fff' }}>$500</div>
              <div className="acc-dep-l">Minimum Deposit</div>
              <div className="acc-sp">Spreads: <strong>From 0.0 pips</strong></div>
              <div className="acc-com">Commission: Fixed low commission</div>
              <p className="acc-desc">Built for traders who demand tight spreads and institutional pricing. Connects directly to liquidity providers with minimal markups.</p>
              <ul className="acc-ul">
                <li><span className="acc-ck">✓</span> Raw spreads from 0.0</li>
                <li><span className="acc-ck">✓</span> Ultra-low commission</li>
                <li><span className="acc-ck">✓</span> Scalping allowed</li>
                <li><span className="acc-ck">✓</span> Priority execution</li>
              </ul>
              <button className="acc-btn pri" onClick={() => openModal('account')}>Open ECN Raw</button>
            </div>
          </div>

          <div className="g3 fu" style={{ marginTop: '3rem' }}>
            {[
              { ico: '⚡', title: 'Lightning Fast Execution', desc: 'Sub-10ms execution with direct market access and no dealing desk intervention.' },
              { ico: '📉', title: 'Scalper Friendly', desc: 'No restrictions on trading styles. Scalp, day trade, or swing trade with zero conflicts of interest.' },
              { ico: '🏛️', title: 'Institutional Liquidity', desc: 'Access Tier-1 banks and liquidity providers with deep order books and tight pricing.' },
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
              <button onClick={() => openModal('account')} className="btn-red" style={{ cursor: 'pointer', border: 'none' }}>Open ECN Raw →</button>
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
