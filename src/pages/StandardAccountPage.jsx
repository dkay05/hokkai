import { useState } from 'react'
import Modal from '../components/Modal'
import CTA from '../components/CTA'
import useScrollAnimation from '../hooks/useScrollAnimation'

export default function StandardAccountPage() {
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
            <div className="page-breadcrumb">Home / Accounts / Standard</div>
            <h1 className="page-hero-title">STANDARD <span className="r">ACCOUNT</span></h1>
            <p className="page-hero-sub">Perfect for beginners — start trading with $100 minimum deposit, competitive spreads, and zero commission.</p>
          </div>
        </div>
      </div>

      <section className="sec acc-sec">
        <div className="sec-in">
          <div className="tc fu">
            <div className="sbw"><div className="sbl"></div><span className="sbt">Account Details</span><div className="sbl"></div></div>
            <h2 className="sh">STANDARD <span className="r">TRADING ACCOUNT</span></h2>
            <div className="sd c"></div>
            <p className="ss">Designed for new traders entering the financial markets with a simple, transparent pricing model.</p>
          </div>

          <div className="acc-grid">
            <div className="acc-card fu feat">
              <span className="acc-badge" style={{ background: 'rgba(59,130,246,.15)', color: '#60a5fa' }}>Beginner</span>
              <div className="acc-name">Standard</div>
              <div className="acc-dep" style={{ color: '#fff' }}>$100</div>
              <div className="acc-dep-l">Minimum Deposit</div>
              <div className="acc-sp">Spreads: <strong>From 1.5 pips</strong></div>
              <div className="acc-com">Commission: Zero commission</div>
              <p className="acc-desc">Designed for new traders entering the financial markets. Competitive spreads and a simple pricing model ideal for beginners and swing traders.</p>
              <ul className="acc-ul">
                <li><span className="acc-ck">✓</span> Competitive spreads</li>
                <li><span className="acc-ck">✓</span> Zero commission</li>
                <li><span className="acc-ck">✓</span> Full platform access</li>
                <li><span className="acc-ck">✓</span> 24/5 support</li>
              </ul>
              <button className="acc-btn pri" onClick={() => openModal('account')}>Open Standard</button>
            </div>
          </div>

          <div className="g3 fu" style={{ marginTop: '3rem' }}>
            {[
              { ico: '📚', title: 'Educational Resources', desc: 'Access free trading guides, video tutorials, and webinars designed for beginners.' },
              { ico: '💰', title: 'Low Risk Start', desc: 'Begin with just $100 and trade with micro lots to minimize risk while learning.' },
              { ico: '🎯', title: 'Simple Pricing', desc: 'No hidden fees or complex structures. Clear, transparent spreads and zero commission.' },
            ].map((f, i) => (
              <div key={f.title} className={`card fu${i > 0 ? ` d${i}` : ''}`}>
                <div style={{ fontSize: '2rem', marginBottom: '.75rem' }}>{f.ico}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Ready to start trading?</h3>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={() => openModal('account')} className="btn-red" style={{ cursor: 'pointer', border: 'none' }}>Open Standard Account →</button>
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
