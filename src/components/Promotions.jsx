import { useState } from 'react'
import Modal from './Modal'

export default function Promotions() {
  const [modal, setModal] = useState({ open: false, type: 'promo', promoTitle: '' })
  const openModal = (promoTitle) => setModal({ open: true, type: 'promo', promoTitle })
  const closeModal = () => setModal(m => ({ ...m, open: false }))
  const promos = [
    { icon: '🎁', badge: 'New Clients', title: 'Welcome Bonus', desc: 'Get a 50% deposit bonus on your first deposit up to $500. Trade more with extra margin on us.', tag: 'Limited Time', color: 'rgba(229,9,20,.15)', border: 'rgba(229,9,20,.25)' },
    { icon: '🤝', badge: 'Refer & Earn', title: 'Referral Program', desc: 'Earn $50 for every friend you refer who completes their first trade. No limits on referrals.', tag: 'Ongoing', color: 'rgba(0,212,170,.12)', border: 'rgba(0,212,170,.25)' },
    { icon: '🏆', badge: 'VIP Traders', title: 'Cashback Rewards', desc: 'Earn cashback on every trade you make. Higher volume = higher cashback rate up to $5/lot.', tag: 'Volume Based', color: 'rgba(201,168,76,.1)', border: 'rgba(201,168,76,.25)' },
    { icon: '📈', badge: 'All Accounts', title: 'Zero Commission Week', desc: 'Trade with zero commission on all ECN Raw accounts during our promotional period.', tag: 'Weekly', color: 'rgba(168,85,247,.1)', border: 'rgba(168,85,247,.25)' },
  ]

  return (
    <section className="sec promo-sec" id="promotions">
      <div className="sec-in">
        <div className="tc fu">
          <div className="sbw"><div className="sbl"></div><span className="sbt">Promotions</span><div className="sbl"></div></div>
          <h2 className="sh">EXCLUSIVE <span className="r">PROMOTIONS</span></h2>
          <div className="sd c"></div>
          <p className="ss">Take advantage of our exclusive promotions designed to boost your trading experience and rewards.</p>
        </div>

        <div className="promo-grid">
          {promos.map((p, i) => (
            <div key={p.title} className={`promo-card fu${i > 0 ? ` d${i}` : ''}${p.featured ? ' featured' : ''}`}>
              <div style={{position:'absolute',top:'1rem',right:'1rem',fontSize:'.65rem',background:'rgba(255,255,255,.08)',border:'1px solid rgba(255,255,255,.12)',borderRadius:'20px',padding:'.2rem .6rem',color:'var(--g300)',fontFamily:"'JetBrains Mono',monospace"}}>{p.tag}</div>
              <div style={{fontSize:'2.5rem',marginBottom:'.75rem'}}>{p.icon}</div>
              <div style={{fontSize:'.65rem',color:'var(--g400)',fontFamily:"'JetBrains Mono',monospace",letterSpacing:'.1em',marginBottom:'.4rem'}}>{p.badge}</div>
              <h3 style={{marginBottom:'.6rem'}}>{p.title}</h3>
              <p className="promo-card p">{p.desc}</p>
              <button onClick={() => openModal(p.title)} className="btn-red-sm" style={{cursor:'pointer',border:'none'}}>Claim Now →</button>
              <div className="promo-terms">T&amp;Cs apply.</div>
            </div>
          ))}
        </div>

        <div style={{marginTop:'2rem',background:'rgba(255,255,255,.02)',border:'1px solid rgba(255,255,255,.06)',borderRadius:'12px',padding:'1rem 1.5rem',fontSize:'.75rem',color:'var(--g500)',lineHeight:1.7}}>
          ⚠️ <strong style={{color:'var(--g400)'}}>Terms &amp; Conditions Apply.</strong> All promotions are subject to Hokkai Markets bonus terms and trading conditions. Please read the full terms before participating.
        </div>
      </div>
      <Modal isOpen={modal.open} onClose={closeModal} type={modal.type} promoTitle={modal.promoTitle} />
    </section>
  )
}
