import { useState } from 'react'
import Modal from './Modal'

export default function Deposits() {
  const [modal, setModal] = useState({ open: false, type: 'account' })
  const openModal = (type) => setModal({ open: true, type })
  const closeModal = () => setModal(m => ({ ...m, open: false }))
  const methods = [
    { icon: '🏦', name: 'Bank Wire Transfer', time: '1-3 business days', min: '$50', fee: 'Free' },
    { icon: '💳', name: 'Credit / Debit Card', time: 'Instant', min: '$10', fee: 'Free' },
    { icon: '₮', name: 'USDT / Crypto', time: 'Instant', min: '$10', fee: 'Free' },
    { icon: '⚡', name: 'Skrill', time: 'Instant', min: '$10', fee: 'Free' },
    { icon: '🔵', name: 'Neteller', time: 'Instant', min: '$10', fee: 'Free' },
    { icon: '🇮🇳', name: 'UPI / India', time: 'Instant', min: '₹500', fee: 'Free' },
  ]

  return (
    <section className="sec" id="deposits" style={{background:'var(--dark900)'}}>
      <div className="sec-in">
        <div className="tc fu">
          <div className="sbw"><div className="sbl"></div><span className="sbt">Deposits &amp; Withdrawals</span><div className="sbl"></div></div>
          <h2 className="sh">FAST &amp; SECURE <span className="r">DEPOSITS</span></h2>
          <div className="sd c"></div>
          <p className="ss">Fund your account instantly with multiple payment methods. All deposits are free with no hidden fees.</p>
        </div>

        <div className="pay-grid">
          {methods.map((m, i) => (
            <div className={`pay-card fu${i > 0 ? ` d${Math.min(i, 3)}` : ''}`} key={m.name}>
              <div className="pay-ico">{m.icon}</div>
              <div className="pay-name">{m.name}</div>
              <div className="pay-time">{m.time}</div>
              <div style={{fontSize:'.72rem',color:'var(--g400)'}}>Min: {m.min}</div>
              <div style={{fontSize:'.72rem',fontWeight:700,color:'var(--green)'}}>{m.fee}</div>
            </div>
          ))}
        </div>

        <div style={{marginTop:'2.5rem',background:'rgba(0,212,170,.05)',border:'1px solid rgba(0,212,170,.15)',borderRadius:'16px',padding:'1.5rem 2rem',display:'flex',alignItems:'center',gap:'1.5rem',flexWrap:'wrap'}}>
          <div style={{display:'flex',alignItems:'center',gap:'.6rem'}}>
            <svg width="22" height="22" fill="none" stroke="#00d4aa" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M12 2L3 7v6c0 5 4 9.5 9 11 5-1.5 9-6 9-11V7L12 2z"/></svg>
            <span style={{fontSize:'.85rem',color:'var(--g300)'}}>All deposits are <strong style={{color:'#00d4aa'}}>100% secure</strong> and processed with 256-bit SSL encryption.</span>
          </div>
          <div style={{marginLeft:'auto',flexShrink:0}}>
            <button onClick={() => openModal('account')} className="btn-red" style={{cursor:'pointer',border:'none'}}>Fund Account →</button>
          </div>
        </div>
      </div>
      <Modal isOpen={modal.open} onClose={closeModal} type={modal.type} />
    </section>
  )
}
