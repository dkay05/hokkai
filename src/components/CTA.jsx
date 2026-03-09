import { useState } from 'react'
import Modal from './Modal'
import { useLanguage } from '../contexts/LanguageContext'

export default function CTA() {
  const { t } = useLanguage()
  const [modal, setModal] = useState({ open: false, type: 'account' })
  const openModal = (type) => setModal({ open: true, type })
  const closeModal = () => setModal(m => ({ ...m, open: false }))
  return (
    <section className="cta-sec" id="contact">
      <div className="cta-glow"></div>
      <div className="cta-la"></div>
      <div className="cta-ra"></div>
      <div style={{position:'relative',zIndex:2,maxWidth:'680px',margin:'0 auto',textAlign:'center'}}>
        <div className="cta-badge">
          <span style={{width:'6px',height:'6px',borderRadius:'50%',background:'var(--red)',boxShadow:'0 0 6px rgba(229,9,20,.9)',animation:'blink 1.5s infinite',flexShrink:0,display:'inline-block'}}></span>
          {' '}{t('cta.badge')}
        </div>
        <h2 className="cta-h fu">{t('cta.headline')}</h2>
        <p className="cta-sub fu">{t('cta.subtitle')}</p>
        <div className="cta-btns fu">
          <button onClick={() => openModal('account')} className="btn-red" style={{cursor:'pointer',border:'none'}}>{t('cta.openLiveAccount')} →</button>
          <button onClick={() => openModal('demo')} className="btn-out" style={{cursor:'pointer',border:'none'}}>▶ {t('cta.tryDemo')}</button>
        </div>
        <div className="cta-jp"><div className="cta-jl"></div><span className="cta-jt">北海マーケット</span><div className="cta-jl"></div></div>
      </div>
      <Modal isOpen={modal.open} onClose={closeModal} type={modal.type} />
    </section>
  )
}
