import { useState } from 'react'
import Modal from './Modal'
import { useLanguage } from '../contexts/LanguageContext'

export default function Accounts() {
  const { t } = useLanguage()
  const [modal, setModal] = useState({ open: false, type: 'account' })
  const openModal = (type) => setModal({ open: true, type })
  const closeModal = () => setModal(m => ({ ...m, open: false }))
  const accounts = [
    {
      badge: 'Beginner', badgeStyle: { background: 'rgba(59,130,246,.15)', color: '#60a5fa' },
      name: 'Standard', dep: '$100', depLabel: 'Minimum Deposit',
      spread: 'From 1.5 pips', commission: 'Zero commission',
      desc: 'Designed for new traders entering the financial markets. Competitive spreads and a simple pricing model ideal for beginners and swing traders.',
      features: ['Competitive spreads', 'Zero commission', 'Full platform access', '24/5 support'],
      btnClass: 'sec', btnLabel: 'Open Standard', featured: false,
    },
    {
      badge: 'Popular', badgeStyle: { background: 'rgba(255,255,255,.15)', color: '#fff' },
      name: 'ECN Raw', dep: '$500', depLabel: 'Minimum Deposit',
      spread: 'From 0.0 pips', commission: 'Fixed low commission',
      desc: 'Built for traders who demand tight spreads and institutional pricing. Connects directly to liquidity providers with minimal markups.',
      features: ['Raw spreads from 0.0', 'Ultra-low commission', 'Scalping allowed', 'Priority execution'],
      btnClass: 'pri', btnLabel: 'Open ECN Raw', featured: true, popular: true,
    },
    {
      badge: 'Advanced', badgeStyle: { background: 'rgba(168,85,247,.15)', color: '#c084fc' },
      name: 'Pro', dep: '$5,000', depLabel: 'Minimum Deposit',
      spread: 'Ultra-tight', commission: 'Reduced',
      desc: 'Tailored for experienced traders seeking enhanced trading conditions. Includes advanced analytics tools and premium support access.',
      features: ['Tightest spreads', 'Priority execution', 'Advanced analytics', 'Dedicated support'],
      btnClass: 'sec', btnLabel: 'Open Pro', featured: false,
    },
    {
      badge: 'Exclusive', badgeStyle: { background: 'rgba(201,168,76,.15)', color: '#c9a84c' },
      name: 'VIP', dep: 'Custom', depLabel: 'Minimum Deposit',
      spread: 'Custom pricing', commission: 'Negotiable',
      desc: 'Institutional-level account for high-volume traders. Personalized trading experience with enhanced support and execution priority.',
      features: ['Personal manager', 'Exclusive pricing', 'Institutional liquidity', 'Custom solutions'],
      btnClass: 'sec', btnLabel: 'Contact Us', featured: false, contactBtn: true,
    },
  ]

  return (
    <section className="sec acc-sec" id="accounts">
      <div className="sec-in">
        <div className="tc fu">
          <div className="sbw"><div className="sbl"></div><span className="sbt">{t('accountsSection.title')}</span><div className="sbl"></div></div>
          <h2 className="sh"><span className="r">{t('accountsSection.headline')}</span></h2>
          <div className="sd c"></div>
          <p className="ss">{t('accountsSection.description')}</p>
        </div>
        <div className="acc-grid">
          {accounts.map((acc, i) => (
            <div className={`acc-card fu${i > 0 ? ` d${i}` : ''}${acc.featured ? ' feat' : ''}`} key={acc.name}>
              {acc.popular && <div className="acc-pop">POPULAR</div>}
              <span className="acc-badge" style={acc.badgeStyle}>{acc.badge}</span>
              <div className="acc-name">{acc.name}</div>
              <div className="acc-dep" style={acc.featured ? { color: '#fff' } : {}}>{acc.dep}</div>
              <div className="acc-dep-l">{acc.depLabel}</div>
              <div className="acc-sp">Spreads: <strong>{acc.spread}</strong></div>
              <div className="acc-com">Commission: {acc.commission}</div>
              <p className="acc-desc">{acc.desc}</p>
              <ul className="acc-ul">
                {acc.features.map(f => (
                  <li key={f}><span className="acc-ck">✓</span> {f}</li>
                ))}
              </ul>
              <button
                className={`acc-btn ${acc.btnClass}`}
                onClick={() => openModal(acc.contactBtn ? 'contact' : 'account')}
              >{acc.btnLabel}</button>
            </div>
          ))}
        </div>
        <div className="acc-cmp fu"><a href="#" className="btn-cmp">{t('accountsSection.compareAll')} →</a></div>
      </div>
      <Modal isOpen={modal.open} onClose={closeModal} type={modal.type} />
    </section>
  )
}
