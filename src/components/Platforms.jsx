import { useState } from 'react'
import Modal from './Modal'
import { useLanguage } from '../contexts/LanguageContext'

export default function Platforms() {
  const { t } = useLanguage()
  const [modal, setModal] = useState({ open: false, type: 'account' })
  const openModal = (type) => setModal({ open: true, type })
  const closeModal = () => setModal(m => ({ ...m, open: false }))
  const features = [
    '100+ Technical Indicators', 'Multi-Chart Layout', 'One-Click Trading',
    'Automated Trading Support', 'Economic Calendar Integration', 'Risk Management Tools',
  ]
  return (
    <section className="sec" id="platforms" style={{background:'var(--dark900)'}}>
      <div className="sec-in">
        <div className="tc fu">
          <div className="sbw"><div className="sbl"></div><span className="sbt">{t('platformsSection.title')}</span><div className="sbl"></div></div>
          <h2 className="sh">{t('platformsSection.headline')} <span className="r">{t('platformsSection.headlineHighlight')}</span></h2>
          <div className="sd c"></div>
          <p className="ss">{t('platformsSection.description')}</p>
        </div>
        <div className="g3" style={{marginBottom:'2rem'}}>
          {/* WebTrader */}
          <div className="card fu" style={{padding:0,overflow:'hidden'}}>
            <div style={{height:'160px',background:'#080d18',position:'relative',overflow:'hidden'}}>
              <svg viewBox="0 0 400 160" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
                <rect width="400" height="160" fill="#080d18"/>
                <rect x="0" y="0" width="400" height="28" fill="#0d1525"/>
                <circle cx="14" cy="14" r="5" fill="#E50914" opacity="0.7"/>
                <circle cx="28" cy="14" r="5" fill="#f39c12" opacity="0.7"/>
                <circle cx="42" cy="14" r="5" fill="#00d4aa" opacity="0.7"/>
                <rect x="60" y="8" width="280" height="12" rx="4" fill="rgba(255,255,255,.07)"/>
                <text x="68" y="18" fill="rgba(255,255,255,.3)" fontSize="7" fontFamily="JetBrains Mono,monospace">hokkaimarkets.com/trade</text>
                <rect x="0" y="28" width="400" height="132" fill="#060a12"/>
                <line x1="0" y1="60" x2="400" y2="60" stroke="rgba(255,255,255,.04)" strokeWidth="1"/>
                <line x1="0" y1="95" x2="400" y2="95" stroke="rgba(255,255,255,.04)" strokeWidth="1"/>
                <polyline points="30,100 60,88 90,75 120,70 150,65 180,60 210,55 240,50 270,48 300,45" fill="none" stroke="#9b59b6" strokeWidth="1.5" opacity="0.8"/>
                <line x1="40" y1="75" x2="40" y2="108" stroke="#E50914" strokeWidth="1"/><rect x="35" y="80" width="10" height="22" fill="#E50914"/>
                <line x1="60" y1="65" x2="60" y2="98" stroke="#00d4aa" strokeWidth="1"/><rect x="55" y="70" width="10" height="20" fill="#00d4aa"/>
                <line x1="80" y1="58" x2="80" y2="90" stroke="#00d4aa" strokeWidth="1"/><rect x="75" y="63" width="10" height="18" fill="#00d4aa"/>
                <line x1="100" y1="72" x2="100" y2="105" stroke="#E50914" strokeWidth="1"/><rect x="95" y="78" width="10" height="20" fill="#E50914"/>
                <line x1="120" y1="55" x2="120" y2="88" stroke="#00d4aa" strokeWidth="1"/><rect x="115" y="60" width="10" height="18" fill="#00d4aa"/>
                <rect x="300" y="35" width="90" height="32" rx="4" fill="rgba(229,9,20,.1)" stroke="rgba(229,9,20,.3)" strokeWidth="1"/>
                <text x="310" y="47" fill="rgba(255,255,255,.5)" fontSize="7" fontFamily="JetBrains Mono,monospace">EUR/USD</text>
                <text x="310" y="60" fill="#E50914" fontSize="10" fontFamily="JetBrains Mono,monospace" fontWeight="700">1.08514</text>
              </svg>
            </div>
            <div style={{padding:'1.5rem'}}>
              <div style={{display:'flex',alignItems:'center',gap:'.6rem',marginBottom:'.75rem'}}>
                <div style={{width:'36px',height:'36px',background:'rgba(229,9,20,.12)',borderRadius:'8px',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                  <svg width="18" height="18" fill="none" stroke="#E50914" strokeWidth="1.8" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                </div>
                <span className="ptag tag-b">Browser-Based</span>
              </div>
              <h3 style={{marginBottom:'.45rem'}}>Hokkai WebTrader</h3>
              <p style={{fontSize:'.82rem',color:'var(--g400)',lineHeight:1.7}}>Instant access from any browser. No downloads. Full charting, one-click orders, and real-time data.</p>
              <div style={{display:'flex',gap:'.5rem',marginTop:'1rem',flexWrap:'wrap'}}>
                <span style={{fontSize:'.7rem',background:'rgba(229,9,20,.08)',border:'1px solid rgba(229,9,20,.2)',borderRadius:'4px',padding:'.2rem .5rem',color:'var(--g300)'}}>100+ Indicators</span>
                <span style={{fontSize:'.7rem',background:'rgba(229,9,20,.08)',border:'1px solid rgba(229,9,20,.2)',borderRadius:'4px',padding:'.2rem .5rem',color:'var(--g300)'}}>Multi-Chart</span>
                <span style={{fontSize:'.7rem',background:'rgba(229,9,20,.08)',border:'1px solid rgba(229,9,20,.2)',borderRadius:'4px',padding:'.2rem .5rem',color:'var(--g300)'}}>One-Click Trading</span>
              </div>
            </div>
          </div>

          {/* Mobile App */}
          <div className="card fu d1" style={{padding:0,overflow:'hidden'}}>
            <div style={{height:'160px',background:'#080d18',position:'relative',overflow:'hidden'}}>
              <svg viewBox="0 0 400 160" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
                <rect width="400" height="160" fill="#080d18"/>
                <rect x="150" y="8" width="100" height="148" rx="14" fill="#0d1525" stroke="rgba(229,9,20,.3)" strokeWidth="1.5"/>
                <rect x="158" y="20" width="84" height="122" rx="4" fill="#060a12"/>
                <rect x="158" y="20" width="84" height="20" fill="#0d1525" rx="4"/>
                <text x="178" y="34" fill="rgba(255,255,255,.7)" fontSize="7" fontFamily="JetBrains Mono,monospace">HOKKAI</text>
                <polyline points="162,95 172,88 182,82 192,85 202,76 212,70 222,68 232,65" fill="none" stroke="#00d4aa" strokeWidth="1.5"/>
                <text x="165" y="57" fill="rgba(255,255,255,.4)" fontSize="6" fontFamily="JetBrains Mono,monospace">EUR/USD</text>
                <text x="165" y="69" fill="#00d4aa" fontSize="10" fontFamily="JetBrains Mono,monospace" fontWeight="700">1.0851</text>
              </svg>
            </div>
            <div style={{padding:'1.5rem'}}>
              <div style={{display:'flex',alignItems:'center',gap:'.6rem',marginBottom:'.75rem'}}>
                <div style={{width:'36px',height:'36px',background:'rgba(0,212,170,.1)',borderRadius:'8px',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                  <svg width="18" height="18" fill="none" stroke="#00d4aa" strokeWidth="1.8" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="17" r="1" fill="#00d4aa"/></svg>
                </div>
                <span className="ptag" style={{background:'rgba(0,212,170,.15)',color:'#00d4aa'}}>iOS &amp; Android</span>
              </div>
              <h3 style={{marginBottom:'.45rem'}}>Mobile Trading App</h3>
              <p style={{fontSize:'.82rem',color:'var(--g400)',lineHeight:1.7}}>Trade on the go with full account management, price alerts, real-time data, and intuitive navigation.</p>
              <div style={{display:'flex',gap:'.5rem',marginTop:'1rem',flexWrap:'wrap'}}>
                <span style={{fontSize:'.7rem',background:'rgba(0,212,170,.08)',border:'1px solid rgba(0,212,170,.2)',borderRadius:'4px',padding:'.2rem .5rem',color:'var(--g300)'}}>Face ID</span>
                <span style={{fontSize:'.7rem',background:'rgba(0,212,170,.08)',border:'1px solid rgba(0,212,170,.2)',borderRadius:'4px',padding:'.2rem .5rem',color:'var(--g300)'}}>Push Alerts</span>
                <span style={{fontSize:'.7rem',background:'rgba(0,212,170,.08)',border:'1px solid rgba(0,212,170,.2)',borderRadius:'4px',padding:'.2rem .5rem',color:'var(--g300)'}}>Instant Deposit</span>
              </div>
            </div>
          </div>

          {/* Desktop Terminal */}
          <div className="card fu d2" style={{padding:0,overflow:'hidden'}}>
            <div style={{height:'160px',background:'#080d18',position:'relative',overflow:'hidden'}}>
              <svg viewBox="0 0 400 160" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
                <rect width="400" height="160" fill="#080d18"/>
                <rect x="0" y="0" width="85" height="160" fill="#0a0f1a"/>
                <text x="8" y="16" fill="rgba(255,255,255,.3)" fontSize="6" fontFamily="JetBrains Mono,monospace">ORDER BOOK</text>
                <text x="8" y="29" fill="#E50914" fontSize="6" fontFamily="JetBrains Mono,monospace">1.0856  2,400</text>
                <text x="8" y="39" fill="#E50914" fontSize="6" fontFamily="JetBrains Mono,monospace">1.0855  1,800</text>
                <text x="8" y="72" fill="#00d4aa" fontSize="6" fontFamily="JetBrains Mono,monospace">1.0853    900</text>
                <text x="8" y="82" fill="#00d4aa" fontSize="6" fontFamily="JetBrains Mono,monospace">1.0852  2,100</text>
                <rect x="86" y="0" width="220" height="140" fill="#060a12"/>
                <text x="94" y="14" fill="rgba(255,255,255,.3)" fontSize="6" fontFamily="JetBrains Mono,monospace">EUR/USD  H1  ● 1.08514</text>
                <line x1="100" y1="55" x2="100" y2="85" stroke="#E50914" strokeWidth="1"/><rect x="96" y="60" width="8" height="18" fill="#E50914"/>
                <line x1="116" y1="45" x2="116" y2="72" stroke="#00d4aa" strokeWidth="1"/><rect x="112" y="50" width="8" height="14" fill="#00d4aa"/>
                <line x1="132" y1="40" x2="132" y2="68" stroke="#00d4aa" strokeWidth="1"/><rect x="128" y="44" width="8" height="14" fill="#00d4aa"/>
                <rect x="306" y="0" width="94" height="160" fill="#0a0f1a"/>
                <text x="314" y="14" fill="rgba(255,255,255,.3)" fontSize="6" fontFamily="JetBrains Mono,monospace">WATCHLIST</text>
                <text x="314" y="28" fill="white" fontSize="7" fontFamily="JetBrains Mono,monospace">EUR/USD</text>
                <text x="358" y="28" fill="#00d4aa" fontSize="7" fontFamily="JetBrains Mono,monospace">+0.23%</text>
                <text x="314" y="40" fill="white" fontSize="7" fontFamily="JetBrains Mono,monospace">XAU/USD</text>
                <text x="358" y="40" fill="#E50914" fontSize="7" fontFamily="JetBrains Mono,monospace">-0.11%</text>
              </svg>
            </div>
            <div style={{padding:'1.5rem'}}>
              <div style={{display:'flex',alignItems:'center',gap:'.6rem',marginBottom:'.75rem'}}>
                <div style={{width:'36px',height:'36px',background:'rgba(168,85,247,.1)',borderRadius:'8px',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                  <svg width="18" height="18" fill="none" stroke="#a855f7" strokeWidth="1.8" viewBox="0 0 24 24"><rect x="2" y="2" width="9" height="9"/><rect x="13" y="2" width="9" height="9"/><rect x="2" y="13" width="9" height="9"/><rect x="13" y="13" width="9" height="9"/></svg>
                </div>
                <span className="ptag" style={{background:'rgba(168,85,247,.15)',color:'#a855f7'}}>Professional Grade</span>
              </div>
              <h3 style={{marginBottom:'.45rem'}}>Desktop Terminal</h3>
              <p style={{fontSize:'.82rem',color:'var(--g400)',lineHeight:1.7}}>Multi-panel professional interface with order book, watchlist, and advanced algorithmic trading support.</p>
              <div style={{display:'flex',gap:'.5rem',marginTop:'1rem',flexWrap:'wrap'}}>
                <span style={{fontSize:'.7rem',background:'rgba(168,85,247,.08)',border:'1px solid rgba(168,85,247,.2)',borderRadius:'4px',padding:'.2rem .5rem',color:'var(--g300)'}}>Order Book</span>
                <span style={{fontSize:'.7rem',background:'rgba(168,85,247,.08)',border:'1px solid rgba(168,85,247,.2)',borderRadius:'4px',padding:'.2rem .5rem',color:'var(--g300)'}}>Algo Trading</span>
                <span style={{fontSize:'.7rem',background:'rgba(168,85,247,.08)',border:'1px solid rgba(168,85,247,.2)',borderRadius:'4px',padding:'.2rem .5rem',color:'var(--g300)'}}>API Access</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{background:'rgba(255,255,255,.02)',border:'1px solid rgba(255,255,255,.06)',borderRadius:'16px',padding:'2rem'}}>
          <div className="tc" style={{marginBottom:'1.5rem'}}><h4 style={{fontFamily:"'Michroma',sans-serif",fontSize:'.7rem',letterSpacing:'.15em',color:'var(--g400)'}}>PLATFORM FEATURES</h4></div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'.75rem'}}>
            {features.map(f => (
              <div key={f} style={{display:'flex',alignItems:'center',gap:'.6rem',background:'rgba(229,9,20,.04)',border:'1px solid rgba(229,9,20,.1)',borderRadius:'8px',padding:'.75rem 1rem'}}>
                <svg width="16" height="16" fill="none" stroke="#E50914" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                <span style={{fontSize:'.8rem',color:'var(--g300)'}}>{f}</span>
              </div>
            ))}
          </div>
          <div className="tc" style={{marginTop:'1.5rem'}}>
            <button onClick={() => openModal('account')} className="btn-red" style={{marginRight:'.75rem',cursor:'pointer',border:'none'}}>{t('platformsSection.explorePlatform')} →</button>
            <button onClick={() => openModal('demo')} className="btn-out" style={{cursor:'pointer',border:'none'}}>{t('platformsSection.tryDemo')}</button>
          </div>
        </div>
      </div>
      <Modal isOpen={modal.open} onClose={closeModal} type={modal.type} />
    </section>
  )
}
