import { useState } from 'react'
import Modal from './Modal'
import { useLanguage } from '../contexts/LanguageContext'

export default function Markets() {
  const { t } = useLanguage()
  const [modal, setModal] = useState({ open: false, type: 'account' })
  const openModal = (type) => setModal({ open: true, type })
  const closeModal = () => setModal(m => ({ ...m, open: false }))
  return (
    <section className="sec mkt-sec" id="markets">
      <div className="sec-in">
        <div className="tc fu">
          <div className="sbw"><div className="sbl"></div><span className="sbt">{t('markets.title')}</span><div className="sbl"></div></div>
          <h2 className="sh"><span className="r">{t('markets.titleHighlight')}</span> {t('markets.subtitle')}</h2>
          <div className="sd c"></div>
          <p className="ss">{t('markets.description')}</p>
        </div>
        <div className="g3">
          <div className="card fu">
            <div className="card-kj">外為</div>
            <div className="mkt-head"><span className="mkt-ico"><svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M7 16V4m0 0L4 7m3-3l3 3M17 8v12m0 0l3-3m-3 3l-3-3"/></svg></span><h3>{t('markets.forex.title')}</h3></div>
            <p>{t('markets.forex.description')}</p>
          </div>
          <div className="card fu d1">
            <div className="card-kj">指数</div>
            <div className="mkt-head"><span className="mkt-ico"><svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><rect x="3" y="12" width="4" height="9"/><rect x="10" y="7" width="4" height="14"/><rect x="17" y="3" width="4" height="18"/></svg></span><h3>{t('markets.indices.title')}</h3></div>
            <p>{t('markets.indices.description')}</p>
          </div>
          <div className="card fu d2">
            <div className="card-kj">商品</div>
            <div className="mkt-head"><span className="mkt-ico"><svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="12" cy="8" r="6"/><path d="M8.6 15.5L7 22l5-3 5 3-1.6-6.5"/></svg></span><h3>{t('markets.commodities.title')}</h3></div>
            <p>{t('markets.commodities.description')}</p>
          </div>
          <div className="card fu d1">
            <div className="card-kj">株式</div>
            <div className="mkt-head"><span className="mkt-ico"><svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg></span><h3>{t('markets.stocks.title')}</h3></div>
            <p>{t('markets.stocks.description')}</p>
          </div>
          <div className="card fu d2">
            <div className="card-kj">暗号</div>
            <div className="mkt-head"><span className="mkt-ico"><svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M9.5 3H14a3 3 0 010 6H9.5m0-6v6m0 0H15a3 3 0 010 6H9.5m0-6v6m0 0H7M11 3V1m0 20v-2"/></svg></span><h3>{t('markets.crypto.title')}</h3></div>
            <p>{t('markets.crypto.description')}</p>
          </div>
          <div className="card cta-c fu d3">
            <div className="cta-kj">他</div>
            <p style={{fontSize:'.83rem',color:'var(--g400)',marginBottom:'1rem'}}>{t('markets.moreText')}</p>
            <button onClick={() => openModal('account')} className="btn-red-sm" style={{cursor:'pointer',border:'none'}}>{t('markets.exploreAllButton')} →</button>
          </div>
        </div>
      </div>
      <Modal isOpen={modal.open} onClose={closeModal} type={modal.type} />
    </section>
  )
}
