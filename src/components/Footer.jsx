import { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from './Modal'
import { useLanguage } from '../contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const [modal, setModal] = useState({ open: false, type: 'account' })
  const openModal = (type) => setModal({ open: true, type })
  const closeModal = () => setModal(m => ({ ...m, open: false }))
  return (
    <>
      <footer>
      <div className="foot-tl"></div>
      <div className="foot-main">
        <div className="foot-brand">
          <div style={{display:'flex',flexDirection:'column',lineHeight:1,gap:'2px',marginBottom:'.8rem'}}>
            <span style={{fontWeight:900,fontSize:'1.3rem',letterSpacing:'.03em'}}>HOKKAI</span>
            <span style={{fontSize:'.5rem',letterSpacing:'.3em',color:'var(--g400)',textTransform:'uppercase',display:'flex',alignItems:'center',gap:'.28rem',marginTop:'2px'}}>
              <span style={{width:'15px',height:'1px',background:'var(--red)'}}></span>MARKETS<span style={{width:'15px',height:'1px',background:'var(--red)'}}></span>
            </span>
          </div>
          <p style={{fontSize:'.82rem',color:'var(--g400)',lineHeight:1.7,maxWidth:'260px',margin:'.5rem 0 1rem'}}>{t('footer.brand.description')}</p>
          <div style={{display:'flex',flexDirection:'column',gap:'.5rem',marginBottom:'1rem'}}>
            <span style={{display:'flex',alignItems:'center',gap:'.5rem',fontSize:'.78rem',color:'var(--g400)'}}><span style={{color:'var(--red)'}}>✉</span> {t('footer.brand.email')}</span>
            <span style={{display:'flex',alignItems:'center',gap:'.5rem',fontSize:'.78rem',color:'var(--g400)'}}><span style={{color:'var(--red)'}}>💬</span>{t('footer.brand.liveChat')}</span>
          </div>
          <div style={{display:'flex',gap:'.45rem',flexWrap:'wrap'}}>
            {[{t:'Instagram',l:'📸'},{t:'Twitter/X',l:'𝕏'},{t:'YouTube',l:'▶'},{t:'Telegram',l:'✈️'},{t:'LinkedIn',l:'in'},{t:'Facebook',l:'f'}].map(s => (
              <a key={s.t} href="#" title={s.t} style={{width:'34px',height:'34px',borderRadius:'50%',background:'rgba(255,255,255,.05)',border:'1px solid rgba(255,255,255,.09)',display:'inline-flex',alignItems:'center',justifyContent:'center',fontSize:'.85rem',textDecoration:'none',color:'#fff'}}>{s.l}</a>
            ))}
          </div>
        </div>

        <div className="foot-col">
          <h4>{t('footer.quickLinks.title')}</h4>
          <ul>
            <li><Link to="/">{t('footer.quickLinks.home')}</Link></li>
            <li><Link to="/about">{t('footer.quickLinks.about')}</Link></li>
            <li><Link to="/support">{t('footer.quickLinks.contact')}</Link></li>
            <li><button onClick={() => openModal('account')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, font: 'inherit', textAlign: 'left', width: '100%' }}>{t('footer.quickLinks.openAccount')}</button></li>
            <li><button onClick={() => openModal('demo')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, font: 'inherit', textAlign: 'left', width: '100%' }}>{t('footer.quickLinks.demoAccount')}</button></li>
            <li><Link to="/promotions">{t('footer.quickLinks.promotions')}</Link></li>
          </ul>
        </div>

        <div className="foot-col">
          <h4>{t('footer.markets.title')}</h4>
          <ul>
            <li><Link to="/trading/forex">{t('footer.markets.forex')}</Link></li>
            <li><Link to="/trading/indices">{t('footer.markets.indices')}</Link></li>
            <li><Link to="/trading/gold-metals">{t('footer.markets.commodities')}</Link></li>
            <li><Link to="/trading/crypto">{t('footer.markets.crypto')}</Link></li>
            <li><Link to="/trading/spreads">{t('footer.markets.spreads')}</Link></li>
            <li><Link to="/trading/live-charts">{t('footer.markets.liveCharts')}</Link></li>
          </ul>
        </div>

        <div className="foot-col">
          <h4>{t('footer.platforms.title')}</h4>
          <ul>
            <li><Link to="/platforms/mt4">{t('footer.platforms.mt4')}</Link></li>
            <li><Link to="/platforms/mt5">{t('footer.platforms.mt5')}</Link></li>
            <li><Link to="/platforms/mt5">{t('footer.platforms.webTrader')}</Link></li>
            <li><Link to="/platforms/mobile-app">{t('footer.platforms.mobileApp')}</Link></li>
            <li><Link to="/accounts/islamic">{t('footer.platforms.islamicAccount')}</Link></li>
            <li><Link to="/accounts/deposits">{t('footer.platforms.deposits')}</Link></li>
          </ul>
        </div>

        <div className="foot-col">
          <h4>{t('footer.legal.title')}</h4>
          <ul>
            <li><Link to="/legal/risk-disclosure">{t('footer.legal.riskDisclosure')}</Link></li>
            <li><Link to="/legal/privacy-policy">{t('footer.legal.privacyPolicy')}</Link></li>
            <li><Link to="/legal/terms">{t('footer.legal.terms')}</Link></li>
            <li><Link to="/legal/aml-policy">{t('footer.legal.amlPolicy')}</Link></li>
            <li><Link to="/legal/kyc-policy">{t('footer.legal.kycPolicy')}</Link></li>
            <li><Link to="/legal/cookie-policy">{t('footer.legal.cookiePolicy')}</Link></li>
            <li><Link to="/legal/refund-policy">{t('footer.legal.refundPolicy')}</Link></li>
          </ul>
        </div>
      </div>

      <div className="foot-risk-wrap">
        <div className="foot-risk">
          <span className="risk-ico">⚠</span>
          <div>
            <div className="risk-tit">{t('footer.riskWarning.title')}</div>
            <div className="risk-txt">{t('footer.riskWarning.text')}</div>
          </div>
        </div>
      </div>

      <div className="foot-bot">
        <span className="f-copy">{t('footer.bottom.copyright')}</span>
        <div className="f-status">
          <div className="fsi">
            <span className="sg"><svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="11" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></svg></span>
            <span className="sg">{t('footer.bottom.sslSecured')}</span>
          </div>
          <div className="fsi"><span className="sdot"></span><span className="sg">{t('footer.bottom.systemsOperational')}</span></div>
        </div>
      </div>

      <div className="risk-footer">
        <p><strong>⚠ {t('footer.riskWarning.title')}:</strong> {t('footer.riskWarning.footerText')}</p>
      </div>
    </footer>
    
    <Modal isOpen={modal.open} onClose={closeModal} type={modal.type} />
    </>
  )
}
