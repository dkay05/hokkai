import { useState } from 'react'
import Modal from './Modal'
import { useLanguage } from '../contexts/LanguageContext'

export default function About() {
  const { t } = useLanguage()
  const [modal, setModal] = useState({ open: false, type: 'account' })
  const openModal = (type) => setModal({ open: true, type })
  const closeModal = () => setModal(m => ({ ...m, open: false }))
  return (
    <section className="sec about-sec" id="about">
      <div className="sec-in">
        <div className="about-grid">
          <div className="about-txt fu">
            <div className="sbw" style={{justifyContent:'flex-start',marginBottom:'1rem'}}>
              <div className="sbl"></div><span className="sbt">{t('about.title')}</span><div className="sbl"></div>
            </div>
            <h2 className="sh" style={{textAlign:'left'}}>{t('about.headline')} <span className="r">{t('about.headlineHighlight')}</span></h2>
            <div className="sd" style={{margin:'1rem 0'}}></div>
            <p style={{color:'var(--g400)',fontSize:'.88rem',lineHeight:1.9,marginBottom:'1.2rem'}}>{t('about.paragraph1')}</p>
            <p style={{color:'var(--g400)',fontSize:'.88rem',lineHeight:1.9,marginBottom:'2rem'}}>{t('about.paragraph2')}</p>
            <div style={{display:'flex',gap:'1rem',flexWrap:'wrap'}}>
              <button onClick={() => openModal('account')} className="btn-red" style={{cursor:'pointer',border:'none'}}>{t('about.openLiveAccount')} →</button>
              <button onClick={() => openModal('demo')} className="btn-out" style={{cursor:'pointer',border:'none'}}>{t('about.tryDemo')}</button>
            </div>
          </div>

          <div className="fu d1" style={{display:'block'}}>
            <div style={{position:'relative',borderRadius:'12px',overflow:'hidden',border:'1px solid rgba(255,255,255,.08)'}}>
              <img 
                src="/image/banner1.png" 
                alt="Trading Chart" 
                style={{
                  width:'100%',
                  height:'auto',
                  display:'block',
                  borderRadius:'12px'
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={modal.open} onClose={closeModal} type={modal.type} />
    </section>
  )
}
