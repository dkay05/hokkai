import { useState } from 'react'
import Modal from './Modal'

export default function Portal() {
  const [modal, setModal] = useState({ open: false, type: 'login' })
  const openModal = (type) => setModal({ open: true, type })
  const closeModal = () => setModal(m => ({ ...m, open: false }))
  return (
    <section className="sec portal-sec" id="portal">
      <div className="sec-in">
        <div className="tc">
          <div className="sbw"><div className="sbl"></div><span className="sbt">Client Area</span><div className="sbl"></div></div>
          <h2 className="sh">CLIENT <span className="r">PORTAL</span></h2>
          <div className="sd c"></div>
          <p className="ss">Access your trading account, manage funds, and track your performance all in one place.</p>
        </div>

        <div className="portal-grid">
          <div className="portal-login fu">
            <h3>Login to Your Account</h3>
            <p>Access your dashboard, deposits, withdrawals, and live trading.</p>
            <div className="p-field"><label>Email Address</label><input type="email" placeholder="your@email.com" /></div>
            <div className="p-field"><label>Password</label><input type="password" placeholder="••••••••" /></div>
            <a href="#" className="p-forgot">Forgot password?</a>
            <button 
              onClick={() => openModal('login')}
              className="p-login-btn"
            >
              Login to Portal →
            </button>
            <div className="p-divider">or</div>
            <button 
              onClick={() => openModal('demo')}
              style={{ width: '100%', background: 'transparent', border: '1px solid rgba(229,9,20,.4)', color: 'var(--red)', padding: '.8rem', borderRadius: '9px', fontSize: '.85rem', fontWeight: 700, cursor: 'pointer', fontFamily: 'Inter,sans-serif' }}
            >
              Open Free Demo Account
            </button>
            <div className="p-reg">Don't have an account? <button onClick={() => openModal('register')} style={{ background: 'none', border: 'none', color: 'var(--red)', cursor: 'pointer', textDecoration: 'underline', padding: 0, font: 'inherit' }}>Register Free →</button></div>
          </div>

          <div className="portal-features fu d1">
            <div className="pf-item">
              <div className="pf-ico">
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><rect x="3" y="12" width="4" height="9"/><rect x="10" y="7" width="4" height="14"/><rect x="17" y="3" width="4" height="18"/></svg>
              </div>
              <div><div className="pf-title">Live Dashboard</div><div className="pf-desc">View account balance, equity, margin, open positions, and P&amp;L in real-time.</div></div>
            </div>
            <div className="pf-item">
              <div className="pf-ico">💳</div>
              <div><div className="pf-title">Instant Deposits &amp; Withdrawals</div><div className="pf-desc">Fund your account or withdraw profits with one click. Multiple payment methods available.</div></div>
            </div>
            <div className="pf-item">
              <div className="pf-ico">📋</div>
              <div><div className="pf-title">Trade History</div><div className="pf-desc">Full history of all your trades, including closed positions, swaps, commissions, and P&amp;L.</div></div>
            </div>
            <div className="pf-item">
              <div className="pf-ico">📁</div>
              <div><div className="pf-title">KYC Document Upload</div><div className="pf-desc">Upload your identity documents securely and get verified in under 1 hour.</div></div>
            </div>
            <div className="pf-item">
              <div className="pf-ico">👥</div>
              <div><div className="pf-title">Referral Tracking</div><div className="pf-desc">Track your referred clients, commissions earned, and IB performance in your portal.</div></div>
            </div>
          </div>
        </div>
      </div>
      
      <Modal isOpen={modal.open} onClose={closeModal} type={modal.type} />
    </section>
  )
}
