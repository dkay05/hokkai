import { useState } from 'react'
import Modal from './Modal'

export default function Steps() {
  const [modal, setModal] = useState({ open: false, type: 'register' })
  const openModal = (type) => setModal({ open: true, type })
  const closeModal = () => setModal(m => ({ ...m, open: false }))
  return (
    <section className="sec steps-sec" id="steps">
      <div className="sec-in">
        <div className="tc">
          <div className="sbw"><div className="sbl"></div><span className="sbt">Get Started</span><div className="sbl"></div></div>
          <h2 className="sh">START TRADING IN <span className="r">3 SIMPLE STEPS</span></h2>
          <div className="sd c"></div>
          <p className="ss">Open your account today and start trading global markets in minutes.</p>
        </div>
        <div className="steps-flow">
          <div className="step-box">
            <div className="step-num">01</div>
            <div className="step-ico">📝</div>
            <h3>Register Free</h3>
            <p>Fill in your details and create your free Hokkai Markets account in under 2 minutes.</p>
            <button 
              onClick={() => openModal('register')}
              className="step-btn"
              style={{ cursor: 'pointer' }}
            >
              Register Now →
            </button>
          </div>
          <div className="step-arrow">→</div>
          <div className="step-box">
            <div className="step-num">02</div>
            <div className="step-ico">💰</div>
            <h3>Fund Account</h3>
            <p>Deposit from just $20 using your preferred payment method. Zero deposit fees.</p>
            <a href="#deposits" className="step-btn">View Methods →</a>
          </div>
          <div className="step-arrow">→</div>
          <div className="step-box">
            <div className="step-num">03</div>
            <div className="step-ico">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
                <polyline points="16 7 22 7 22 13"/>
              </svg>
            </div>
            <h3>Start Trading</h3>
            <p>Access 60+ instruments across Forex, Gold, Crypto, Indices and more. Trade now!</p>
            <a href="#markets" className="step-btn">Explore Markets →</a>
          </div>
        </div>
      </div>
      
      <Modal isOpen={modal.open} onClose={closeModal} type={modal.type} />
    </section>
  )
}
