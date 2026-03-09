import { useState } from 'react'
import Modal from './Modal'

export default function IB() {
  const [modal, setModal] = useState({ open: false, type: 'ib' })
  const openModal = (type) => setModal({ open: true, type })
  const closeModal = () => setModal(m => ({ ...m, open: false }))
  return (
    <section className="sec ib-sec" id="ib">
      <div className="sec-in">
        <div className="tc fu">
          <div className="sbw"><div className="sbl"></div><span className="sbt">Partner Program</span><div className="sbl"></div></div>
          <h2 className="sh">IB &amp; <span className="r">AFFILIATE PROGRAM</span></h2>
          <div className="sd c"></div>
          <p className="ss">Join our partner network and earn industry-leading commissions for every client you refer to Hokkai Markets.</p>
        </div>

        <div className="ib-hero fu">
          <div>
            <div className="ib-earn">$500 – $5,000</div>
            <div className="ib-earn-label">Estimated Monthly Earnings</div>
          </div>
          <div style={{maxWidth:'450px'}}>
            <h3 style={{fontSize:'1.1rem',fontWeight:800,marginBottom:'.5rem'}}>Earn With Every Trade Your Clients Make</h3>
            <p style={{fontSize:'.83rem',color:'var(--g400)',lineHeight:1.7}}>Our Introducing Broker program offers one of the highest rebate structures in the industry. Earn recurring commissions for the lifetime of your referred clients.</p>
          </div>
          <button onClick={() => openModal('ib')} className="btn-red" style={{cursor:'pointer',border:'none'}}>Become a Partner →</button>
        </div>

        <div className="ib-steps">
          {[
            {n:'01',title:'Register as IB',desc:'Fill in the simple registration form below. Approval takes less than 24 hours.'},
            {n:'02',title:'Share Your Link',desc:'Get your unique referral link and marketing materials. Share with your network, social media, or website.'},
            {n:'03',title:'Earn Commission',desc:'Earn rebates automatically for every lot your referred clients trade. Weekly or monthly payouts available.'},
          ].map((s,i) => (
            <div key={s.n} className={`ib-step fu${i>0?` d${i}`:''}`}>
              <div className="ib-step-num">{s.n}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="ib-tiers fu">
          {[
            {name:'Silver IB',val:'$3',unit:'per lot traded',vol:'0–50 lots/month',hot:false},
            {name:'🔥 Gold IB',val:'$5',unit:'per lot traded',vol:'50–200 lots/month',hot:true},
            {name:'Platinum IB',val:'$7',unit:'per lot traded',vol:'200+ lots/month',hot:false},
          ].map(t => (
            <div key={t.name} className={`ib-tier${t.hot?' hot':''}`}>
              <div className="ib-tier-name">{t.name}</div>
              <div className="ib-tier-val">{t.val}</div>
              <div className="ib-tier-unit">{t.unit}</div>
              <div className="ib-tier-vol">{t.vol}</div>
            </div>
          ))}
        </div>

        <div className="ib-form fu" id="ib-form">
          <h3>Apply to Become an IB Partner</h3>
          <p>Fill in your details and our partnership team will contact you within 24 hours.</p>
          <div className="form-grid">
            <div className="form-field"><label>Full Name</label><input type="text" placeholder="Your full name" /></div>
            <div className="form-field"><label>Email Address</label><input type="email" placeholder="your@email.com" /></div>
            <div className="form-field"><label>Country</label>
              <select><option>Select Country</option><option>India</option><option>UAE</option><option>Pakistan</option><option>Japan</option><option>UK</option><option>Other</option></select>
            </div>
            <div className="form-field"><label>Phone / WhatsApp</label><input type="text" placeholder="+1 234 567 8900" /></div>
            <div className="form-field"><label>Experience</label>
              <select><option>Select Experience</option><option>Beginner (&lt; 1 year)</option><option>Intermediate (1–3 years)</option><option>Expert (3+ years)</option></select>
            </div>
            <div className="form-field"><label>Expected Monthly Volume</label>
              <select><option>Select Volume</option><option>0–50 lots</option><option>50–200 lots</option><option>200+ lots</option></select>
            </div>
          </div>
          <button onClick={() => openModal('ib')} className="btn-red" style={{width:'100%',justifyContent:'center',padding:'.85rem',border:'none',cursor:'pointer',fontFamily:'Inter,sans-serif'}}>Submit IB Application →</button>
        </div>
      </div>
      <Modal isOpen={modal.open} onClose={closeModal} type={modal.type} />
    </section>
  )
}
