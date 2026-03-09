import { useState } from 'react'
import Modal from './Modal'

export default function Islamic() {
  const [modal, setModal] = useState({ open: false, type: 'account' })
  const openModal = (type) => setModal({ open: true, type })
  const closeModal = () => setModal(m => ({ ...m, open: false }))
  return (
    <section className="sec islamic-sec" id="islamic">
      <div className="sec-in">
        <div className="tc fu">
          <div className="sbw"><div className="sbl"></div><span className="sbt">Islamic Account</span><div className="sbl"></div></div>
          <h2 className="sh">SWAP-FREE <span className="r">ISLAMIC ACCOUNT</span></h2>
          <div className="sd c"></div>
          <p className="ss">Trade in full compliance with Islamic finance principles. No overnight swap fees, no interest — Halal trading for Muslim traders.</p>
        </div>
        <div className="islamic-card fu">
          <div>
            <div className="isl-badge">☪️ Halal Compliant — Swap-Free</div>
            <div className="isl-title">Islamic<br/>Trading Account</div>
            <p className="isl-sub">Hokkai Markets offers a fully Shariah-compliant swap-free account. No interest, no overnight fees — trade forex, gold, indices, and crypto in full compliance with Islamic law.</p>
            <ul className="isl-features">
              <li><span className="isl-ck">✓</span> Zero overnight swap fees</li>
              <li><span className="isl-ck">✓</span> No interest charges (Riba-free)</li>
              <li><span className="isl-ck">✓</span> Shariah board certified</li>
              <li><span className="isl-ck">✓</span> All instruments available</li>
              <li><span className="isl-ck">✓</span> Same execution speed &amp; spreads</li>
              <li><span className="isl-ck">✓</span> Min deposit: $100</li>
            </ul>
            <button onClick={() => openModal('account')} className="btn-red" style={{cursor:'pointer',border:'none'}}>Open Islamic Account →</button>
          </div>
          <div className="isl-right">
            <div className="isl-stat"><div className="isl-stat-v">$100</div><div className="isl-stat-l">Minimum Deposit</div></div>
            <div className="isl-stat"><div className="isl-stat-v">0%</div><div className="isl-stat-l">Swap / Interest Fee</div></div>
            <div className="isl-stat"><div className="isl-stat-v">60+</div><div className="isl-stat-l">Available Instruments</div></div>
            <div className="isl-stat"><div className="isl-stat-v">1:500</div><div className="isl-stat-l">Max Leverage</div></div>
          </div>
        </div>
      </div>
      <Modal isOpen={modal.open} onClose={closeModal} type={modal.type} />
    </section>
  )
}
