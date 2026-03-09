import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Modal from './Modal'
import { useLanguage } from '../contexts/LanguageContext'

export default function Navbar({ theme, toggleTheme }) {
  const { currentLanguage, changeLanguage, t, languages } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobOpen, setMobOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [modal, setModal] = useState({ open: false, type: 'account' })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const close = (e) => {
      if (!e.target.closest('#langSw')) setLangOpen(false)
    }
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [])

  const closeMob = () => setMobOpen(false)

  const openModal = (type) => { setModal({ open: true, type }); setMobOpen(false) }
  const closeModal = () => setModal(m => ({ ...m, open: false }))

  
  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
        <a href="#hero" className="nav-logo-wrap">
          <svg width="32" height="32" viewBox="0 0 38 38" fill="none">
            <rect width="38" height="38" rx="9" fill="#E50914"/>
            <path d="M9 9H13.5V17.5H24.5V9H29V29H24.5V20.5H13.5V29H9V9Z" fill="white"/>
            <rect x="9" y="33" width="20" height="2.5" rx="1.25" fill="rgba(255,255,255,0.3)"/>
          </svg>
          <div className="nav-logo">
            <span className="nav-logo-top">HOKKAI</span>
            <span className="nav-logo-bot">MARKETS</span>
          </div>
        </a>

        <ul className="nav-links" id="navLinks">
          <li><Link to="/">{t('nav.home')}</Link></li>
          <li className="nav-drop">
            <Link to="/trading">{t('nav.trading')} <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg></Link>
            <div className="drop-menu">
              <Link className="drop-item" to="/trading/forex">{t('nav.forexPairs')}</Link>
              <Link className="drop-item" to="/trading/gold-metals">{t('nav.goldMetals')}</Link>
              <Link className="drop-item" to="/trading/crypto">{t('nav.crypto')}</Link>
              <Link className="drop-item" to="/trading/indices">{t('nav.indices')}</Link>
              <Link className="drop-item" to="/trading/spreads">{t('nav.spreadsFees')}</Link>
              <Link className="drop-item" to="/trading/live-charts">{t('nav.liveCharts')}</Link>
            </div>
          </li>
          <li className="nav-drop">
            <Link to="/platforms">{t('nav.platforms')} <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg></Link>
            <div className="drop-menu">
              <Link className="drop-item" to="/platforms/mt4">{t('nav.mt4')}</Link>
              <Link className="drop-item" to="/platforms/mt5">{t('nav.mt5')}</Link>
              <Link className="drop-item" to="/platforms/mt5">{t('nav.webTrader')}</Link>
              <Link className="drop-item" to="/platforms/mobile-app">{t('nav.mobileApp')}</Link>
            </div>
          </li>
          <li className="nav-drop">
            <Link to="/accounts">{t('nav.accounts')} <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg></Link>
            <div className="drop-menu">
              <Link className="drop-item" to="/accounts/standard">{t('nav.standard')}</Link>
              <Link className="drop-item" to="/accounts/ecn-raw">{t('nav.ecnRaw')}</Link>
              <Link className="drop-item" to="/accounts/pro">{t('nav.pro')}</Link>
              <Link className="drop-item" to="/accounts/vip">{t('nav.vip')}</Link>
              <Link className="drop-item" to="/accounts/islamic">{t('nav.islamic')}</Link>
              <Link className="drop-item" to="/accounts/deposits">{t('nav.deposits')}</Link>
            </div>
          </li>
          <li className="nav-drop">
            <Link to="/learn">{t('nav.learn')} <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg></Link>
            <div className="drop-menu">
              <Link className="drop-item" to="/learn/education">{t('nav.education')}</Link>
              <Link className="drop-item" to="/learn/videos">{t('nav.videos')}</Link>
              <Link className="drop-item" to="/learn/calculators">{t('nav.calculators')}</Link>
              <Link className="drop-item" to="/learn/analysis">{t('nav.analysis')}</Link>
            </div>
          </li>
          <li><Link to="/promotions">{t('nav.promotions')}</Link></li>
          <li><Link to="/partners">{t('nav.partners')}</Link></li>
          <li><Link to="/support">{t('nav.support')}</Link></li>
        </ul>

        <div className="nav-right">
          <button 
            onClick={() => openModal('account')}
            className="nav-cta"
            style={{ cursor: 'pointer' }}
          >
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            {t('nav.openAccount')}
          </button>

          <div className="lang-sw" id="langSw" style={{position:'relative'}}>
            <button className="lang-sw-btn" onClick={(e) => { e.stopPropagation(); setLangOpen(o => !o) }}>
              <span>{languages[currentLanguage]?.flag || '🌐'}</span>
              <span>{currentLanguage.toUpperCase()}</span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            {langOpen && (
              <div className="lang-dropdown" style={{display:'block'}}>
                {Object.entries(languages).map(([code, lang]) => (
                  <div key={code} className={`lang-opt${currentLanguage === code ? ' active' : ''}`}
                    onClick={() => { changeLanguage(code); setLangOpen(false) }}>
                    {lang.flag} {lang.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          <button className="theme-toggle-btn" onClick={toggleTheme} title="Toggle theme">
            <span className="theme-icon-dark" style={{display: theme === 'light' ? 'none' : 'flex'}}>
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
            </span>
            <span className="theme-icon-light" style={{display: theme === 'light' ? 'flex' : 'none'}}>
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/></svg>
            </span>
            <span className="theme-label" style={{fontSize:0}}>{theme === 'light' ? 'Light' : 'Dark'}</span>
          </button>

          <button className={`hamburger${mobOpen ? ' open' : ''}`} onClick={() => setMobOpen(o => !o)} aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <div className={`mob-nav${mobOpen ? ' open' : ''}`} id="mobNav">
        <Link to="/" onClick={closeMob}>🏠 Home</Link>
        <Link to="/trading" onClick={closeMob}>💱 Trading</Link>
        <Link to="/trading/forex" onClick={closeMob}>💱 Forex Pairs</Link>
        <Link to="/trading/gold-metals" onClick={closeMob}>🥇 Gold & Metals</Link>
        <Link to="/trading/crypto" onClick={closeMob}>₿ Crypto</Link>
        <Link to="/trading/indices" onClick={closeMob}>📈 Indices</Link>
        <Link to="/trading/live-charts" onClick={closeMob}>📊 Live Charts</Link>
        <Link to="/platforms" onClick={closeMob}>💻 Platforms</Link>
        <Link to="/platforms/mt4" onClick={closeMob}>⚙️ MT4 / MT5</Link>
        <Link to="/platforms/mobile-app" onClick={closeMob}>📱 Mobile App</Link>
        <Link to="/accounts" onClick={closeMob}>👤 Accounts</Link>
        <Link to="/accounts/standard" onClick={closeMob}>� Standard</Link>
        <Link to="/accounts/ecn-raw" onClick={closeMob}>⚡ ECN Raw</Link>
        <Link to="/accounts/pro" onClick={closeMob}>� Pro</Link>
        <Link to="/accounts/vip" onClick={closeMob}>👑 VIP</Link>
        <Link to="/accounts/islamic" onClick={closeMob}>☪️ Islamic Account</Link>
        <Link to="/accounts/deposits" onClick={closeMob}>💳 Deposits</Link>
        <Link to="/trading/spreads" onClick={closeMob}>📈 Spreads</Link>
        <Link to="/learn/education" onClick={closeMob}>🎓 Education</Link>
        <Link to="/learn/videos" onClick={closeMob}>🎬 Videos</Link>
        <Link to="/learn/calculators" onClick={closeMob}>🧮 Calculators</Link>
        <Link to="/learn" onClick={closeMob}>📖 Glossary</Link>
        <Link to="/learn/analysis" onClick={closeMob}>📰 Analysis</Link>
        <Link to="/promotions" onClick={closeMob}>🎁 Promotions</Link>
        <Link to="/partners" onClick={closeMob}>🤝 Partners</Link>
        <Link to="/support" onClick={closeMob}>📞 Support</Link>
        <Link to="/support" onClick={closeMob}>❓ FAQ</Link>
        <a href="#" onClick={(e) => { e.preventDefault(); openModal('account') }} className="mob-nav-cta">👤 Open Live Account →</a>
      </div>
      
      <Modal isOpen={modal.open} onClose={closeModal} type={modal.type} />
    </>
  )
}
