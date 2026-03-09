import { useState } from 'react'
import Modal from './Modal'
import { useLanguage } from '../contexts/LanguageContext'

export default function Hero({ prices }) {
  const { t } = useLanguage()
  const [modal, setModal] = useState({ open: false, type: 'account' })
  const chips = [
    { sym: 'EUR/USD', pid: 'hc1p', did: 'hc1d' },
    { sym: 'XAU/USD', pid: 'hc2p', did: 'hc2d' },
    { sym: 'BTC/USD', pid: 'hc3p', did: 'hc3d' },
    { sym: 'US30',    pid: 'hc4p', did: 'hc4d' },
  ]

  const openModal = (type) => setModal({ open: true, type })
  const closeModal = () => setModal(m => ({ ...m, open: false }))

  function fmt(sym) {
    if (!prices || !prices[sym]) return ''
    const p = prices[sym]
    if (p.dp === 0) return p.p.toLocaleString('en-US')
    return p.p.toFixed(p.dp)
  }
  function pct(sym) {
    if (!prices || !prices[sym]) return ''
    const p = prices[sym]
    const v = ((p.p - p.base) / p.base * 100)
    const up = v >= 0
    return { up, txt: (up ? '▲+' : '▼') + Math.abs(v).toFixed(2) + '%' }
  }

  return (
    <section className="hero" id="hero">
      <div style={{position:'absolute',inset:0,overflow:'hidden'}}>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          style={{
            position:'absolute',
            top:'50%',
            left:'50%',
            width:'100%',
            height:'100%',
            objectFit:'cover',
            transform:'translate(-50%, -50%)',
            zIndex:'-1'
          }}
        >
          <source src="/video/videohome.mp4" type="video/mp4" />
        </video>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(to bottom,rgba(5,7,10,.5) 0%,rgba(5,7,10,.35) 40%,rgba(5,7,10,.92) 100%)'}}></div>
        <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse 65% 45% at 50% 55%,rgba(229,9,20,.1) 0%,transparent 70%)'}}></div>
        <div style={{position:'absolute',inset:0,background:'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,.03) 3px,rgba(0,0,0,.03) 4px)',pointerEvents:'none'}}></div>
      </div>

      <div className="hero-content">
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'1.8rem'}}>
          <div style={{display:'inline-flex',alignItems:'center',gap:'.8rem',background:'rgba(5,7,10,.75)',border:'1px solid rgba(229,9,20,.4)',borderRadius:'50px',padding:'.55rem 1.4rem .55rem .9rem',backdropFilter:'blur(12px)',boxShadow:'0 0 24px rgba(229,9,20,.15)'}}>
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
              <rect width="38" height="38" rx="10" fill="#E50914"/>
              <path d="M9 9H13.5V17.5H24.5V9H29V29H24.5V20.5H13.5V29H9V9Z" fill="white"/>
              <rect x="9" y="33" width="20" height="2.5" rx="1.25" fill="rgba(255,255,255,0.3)"/>
            </svg>
            <div style={{lineHeight:1.1}}>
              <div style={{fontFamily:'Michroma,sans-serif',fontSize:'1rem',letterSpacing:'.15em',color:'#fff'}}>HOKKAI</div>
              <div style={{fontSize:'.48rem',letterSpacing:'.28em',color:'rgba(229,9,20,.95)',fontFamily:'JetBrains Mono,monospace',textTransform:'uppercase'}}>MARKETS</div>
            </div>
            <div style={{width:'1px',height:'30px',background:'rgba(255,255,255,.15)',margin:'0 .2rem'}}></div>
            <div style={{display:'flex',alignItems:'center',gap:'.4rem'}}>
              <span style={{width:'8px',height:'8px',borderRadius:'50%',background:'#00d4aa',boxShadow:'0 0 8px rgba(0,212,170,.9)',animation:'blink 1.5s infinite',flexShrink:0,display:'inline-block'}}></span>
              <span style={{fontSize:'.62rem',color:'#00d4aa',fontFamily:'JetBrains Mono,monospace',letterSpacing:'.1em',fontWeight:600}}>LIVE TRADING</span>
            </div>
          </div>
        </div>

        <div className="h-badge">
          <span className="h-badge-dot"></span>
          Live Markets — 24/5 Trading
          <span className="h-badge-sep">|</span>
          60+ Instruments
        </div>
        <h1 className="hw">{t('hero.title')}</h1>
        <h1 className="hr">{t('hero.titleHighlight')}</h1>
        <p className="h-sub">{t('hero.subtitle')}</p>
        <div className="h-btns">
          <button onClick={() => openModal('account')} className="btn-p" style={{ cursor:'pointer' }}>{t('hero.openAccount')} →</button>
          <button onClick={() => openModal('demo')} className="btn-s" style={{ cursor:'pointer' }}>▶ {t('hero.tryDemo')}</button>
        </div>
        <div className="h-chips">
          {chips.map(c => {
            const p = pct(c.sym)
            return (
              <div className="chip" key={c.sym}>
                <span className="chip-s">{c.sym}</span>
                <span className="chip-p">{fmt(c.sym)}</span>
                {p && <span className={p.up ? 'chip-u' : 'chip-d'}>{p.txt}</span>}
              </div>
            )
          })}
        </div>
      </div>
      
      <Modal isOpen={modal.open} onClose={closeModal} type={modal.type} />
    </section>
  )
}
