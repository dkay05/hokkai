import { useState } from 'react'
import Modal from './Modal'
import { useLanguage } from '../contexts/LanguageContext'

export default function Conditions() {
  const { t } = useLanguage()
  const [modal, setModal] = useState({ open: false, type: 'account' })
  const openModal = (type) => setModal({ open: true, type })
  const closeModal = () => setModal(m => ({ ...m, open: false }))
  return (
    <section className="sec cond-sec" id="pricing">
      <div className="sec-in">
        <div className="tc fu">
          <div className="sbw"><div className="sbl"></div><span className="sbt">{t('conditions.title')}</span><div className="sbl"></div></div>
          <h2 className="sh">{t('conditions.headline')} <span className="r">{t('conditions.headlineHighlight')}</span></h2>
          <div className="sd c"></div>
          <p className="ss">{t('conditions.description')}</p>
        </div>
        <div className="g4">
          <div className="card fu">
            <div className="c-icon" style={{background:'rgba(229,9,20,.15)'}}><svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M4.9 4.9a10 10 0 0114.2 0M7.8 7.8a6 6 0 018.4 0"/><circle cx="12" cy="12" r="2" fill="currentColor"/><line x1="12" y1="14" x2="12" y2="21"/></svg></div>
            <h3>{t('conditions.ndd.title')}</h3>
            <p>{t('conditions.ndd.description')}</p>
          </div>
          <div className="card fu d1">
            <div className="c-icon" style={{background:'rgba(229,9,20,.15)'}}><svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><line x1="12" y1="2" x2="12" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg></div>
            <h3>{t('conditions.spreads.title')}</h3>
            <p>{t('conditions.spreads.description')}</p>
          </div>
          <div className="card fu d2">
            <div className="c-icon" style={{background:'rgba(59,130,246,.15)'}}>⚙️</div>
            <h3>{t('conditions.leverage.title')}</h3>
            <p>{t('conditions.leverage.description')}</p>
          </div>
          <div className="card fu d3">
            <div className="c-icon" style={{background:'rgba(0,212,170,.15)'}}><svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M12 2L3 7v6c0 5 4 9.5 9 11 5-1.5 9-6 9-11V7L12 2z"/></svg></div>
            <h3>{t('conditions.riskManagement.title')}</h3>
            <p>{t('conditions.riskManagement.description')}</p>
          </div>
        </div>
        <div className="risk-box fu">
          <div className="risk-title">{t('conditions.riskTools.title')}</div>
          <div className="risk-tools">
            <div className="risk-tool"><span className="rdot"></span>{t('conditions.riskTools.stopLoss')}</div>
            <div className="risk-tool"><span className="rdot"></span>{t('conditions.riskTools.trailingStop')}</div>
            <div className="risk-tool"><span className="rdot"></span>{t('conditions.riskTools.negativeBalance')}</div>
            <div className="risk-tool"><span className="rdot"></span>{t('conditions.riskTools.marginCall')}</div>
          </div>
          <div className="risk-btn"><button onClick={() => openModal('account')} className="btn-red-sm" style={{cursor:'pointer',border:'none'}}>{t('conditions.riskTools.button')} →</button></div>
        </div>
      </div>
      <Modal isOpen={modal.open} onClose={closeModal} type={modal.type} />
    </section>
  )
}
