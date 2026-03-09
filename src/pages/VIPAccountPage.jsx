import { useState } from 'react'
import Modal from '../components/Modal'
import CTA from '../components/CTA'
import useScrollAnimation from '../hooks/useScrollAnimation'

export default function VIPAccountPage() {
  const [modal, setModal] = useState({ open: false, type: 'contact' })
  const openModal = (type) => setModal({ open: true, type })
  const closeModal = () => setModal(m => ({ ...m, open: false }))
  useScrollAnimation()

  return (
    <>
      <div className="page-hero" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/image/banner%204.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', opacity: '0.2' }}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="page-hero-inner">
            <div className="page-breadcrumb">Home / Accounts / VIP</div>
            <h1 className="page-hero-title">VIP <span className="r">ACCOUNT</span></h1>
            <p className="page-hero-sub">Institutional-level trading with personalized service, exclusive pricing, and custom solutions.</p>
          </div>
        </div>
      </div>

      <section className="sec acc-sec">
        <div className="sec-in">
          <div className="tc fu">
            <div className="sbw"><div className="sbl"></div><span className="sbt">Account Details</span><div className="sbl"></div></div>
            <h2 className="sh">VIP <span className="r">TRADING ACCOUNT</span></h2>
            <div className="sd c"></div>
            <p className="ss">Institutional-level account for high-volume traders with personalized trading experience.</p>
          </div>

          <div className="acc-grid">
            <div className="acc-card fu feat">
              <span className="acc-badge" style={{ background: 'rgba(201,168,76,.15)', color: '#c9a84c' }}>Exclusive</span>
              <div className="acc-name">VIP</div>
              <div className="acc-dep" style={{ color: '#fff' }}>Custom</div>
              <div className="acc-dep-l">Minimum Deposit</div>
              <div className="acc-sp">Spreads: <strong>Custom pricing</strong></div>
              <div className="acc-com">Commission: Negotiable</div>
              <p className="acc-desc">Institutional-level account for high-volume traders. Personalized trading experience with enhanced support and execution priority.</p>
              <ul className="acc-ul">
                <li><span className="acc-ck">✓</span> Personal manager</li>
                <li><span className="acc-ck">✓</span> Exclusive pricing</li>
                <li><span className="acc-ck">✓</span> Institutional liquidity</li>
                <li><span className="acc-ck">✓</span> Custom solutions</li>
              </ul>
              <button className="acc-btn pri" onClick={() => openModal('contact')}>Contact Us</button>
            </div>
          </div>

          <div className="g3 fu" style={{ marginTop: '3rem' }}>
            {[
              { ico: '👤', title: 'Personal Account Manager', desc: 'Dedicated VIP manager available 24/5 for personalized service and immediate assistance.' },
              { ico: '🏦', title: 'Institutional Liquidity', desc: 'Access to deep liquidity pools and exclusive pricing from top-tier financial institutions.' },
              { ico: '⚙️', title: 'Custom Solutions', desc: 'Tailored trading conditions, APIs, and solutions designed for your specific trading needs.' },
            ].map((f, i) => (
              <div key={f.title} className={`card fu${i > 0 ? ` d${i}` : ''}`}>
                <div style={{ fontSize: '2rem', marginBottom: '.75rem' }}>{f.ico}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Interested in VIP trading?</h3>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={() => openModal('contact')} className="btn-red" style={{ cursor: 'pointer', border: 'none' }}>Contact VIP Team →</button>
              <button onClick={() => openModal('demo')} className="btn-out" style={{ cursor: 'pointer', border: 'none' }}>▶ Try Free Demo</button>
            </div>
            <p style={{ fontSize: '.75rem', color: 'var(--g500)', marginTop: '1rem' }}>VIP accounts require consultation. Our team will contact you within 24 hours.</p>
          </div>
        </div>
      </section>

      <CTA />
      <Modal isOpen={modal.open} onClose={closeModal} type={modal.type} />
    </>
  )
}
