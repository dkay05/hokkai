import { useState } from 'react'
import Modal from '../components/Modal'
import Spreads from '../components/Spreads'
import LiveCharts from '../components/LiveCharts'
import CTA from '../components/CTA'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { useLanguage } from '../contexts/LanguageContext'

export default function GoldMetalsPage() {
  const { t } = useLanguage()
  const [modal, setModal] = useState({ open: false, type: 'account' })
  const openModal = (type) => setModal({ open: true, type })
  const closeModal = () => setModal(m => ({ ...m, open: false }))
  useScrollAnimation()

  const instruments = [
    { sym: 'XAU/USD', name: 'Gold / US Dollar', spread: '0.20', leverage: '1:100', hours: '23/5', change: '+1.24%', up: true },
    { sym: 'XAG/USD', name: 'Silver', spread: '0.03', leverage: '1:100', hours: '23/5', change: '-0.45%', up: false },
    { sym: 'XPT/USD', name: 'Platinum', spread: '2.50', leverage: '1:50', hours: '23/5', change: '+0.78%', up: true },
    { sym: 'XPD/USD', name: 'Palladium', spread: '5.00', leverage: '1:50', hours: '23/5', change: '+2.10%', up: true },
    { sym: 'COPPER', name: 'Copper', spread: '0.005', leverage: '1:50', hours: '23/5', change: '-0.32%', up: false },
    { sym: 'BRENT', name: 'Brent Crude Oil', spread: '0.03', leverage: '1:100', hours: '23/5', change: '+0.55%', up: true },
    { sym: 'USOIL', name: 'WTI Crude Oil', spread: '0.03', leverage: '1:100', hours: '23/5', change: '+0.42%', up: true },
    { sym: 'NATGAS', name: 'Natural Gas', spread: '0.006', leverage: '1:50', hours: '23/5', change: '-1.20%', up: false },
  ]

  return (
    <>
      <div className="page-hero" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/assets/banner%202.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', opacity: '0.3' }}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="page-hero-inner">
            <div className="page-breadcrumb">{t('trading.goldMetals.breadcrumb')}</div>
            <h1 className="page-hero-title">{t('trading.goldMetals.title')} <span className="r">{t('trading.goldMetals.titleHighlight')}</span></h1>
            <p className="page-hero-sub">{t('trading.goldMetals.subtitle')}</p>
          </div>
        </div>
      </div>

      <section className="sec" style={{ background: 'var(--dark900)' }}>
        <div className="sec-in">
          <div className="tc fu">
            <div className="sbw"><div className="sbl"></div><span className="sbt">Instruments</span><div className="sbl"></div></div>
            <h2 className="sh">AVAILABLE <span className="r">METALS & ENERGY</span></h2>
            <div className="sd c"></div>
            <p className="ss">Access gold, silver, platinum, crude oil and more — all from a single account with tight spreads.</p>
          </div>

          <div style={{ overflowX: 'auto', marginTop: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.88rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,.08)' }}>
                  {['Symbol', 'Instrument', 'Spread From', 'Max Leverage', 'Trading Hours', 'Change'].map(h => (
                    <th key={h} style={{ padding: '.8rem 1rem', textAlign: 'left', color: 'rgba(255,255,255,.45)', fontFamily: "'JetBrains Mono',monospace", fontSize: '.7rem', letterSpacing: '.1em', fontWeight: 600 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {instruments.map((ins, i) => (
                  <tr key={ins.sym} className="fu" style={{ borderBottom: '1px solid rgba(255,255,255,.04)', transition: 'background .2s' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,.03)'}
                    onMouseLeave={e => e.currentTarget.style.background = ''}>
                    <td style={{ padding: '.9rem 1rem', fontFamily: "'JetBrains Mono',monospace", fontWeight: 700, color: '#fff', fontSize: '.85rem' }}>{ins.sym}</td>
                    <td style={{ padding: '.9rem 1rem', color: 'var(--g400)' }}>{ins.name}</td>
                    <td style={{ padding: '.9rem 1rem', color: 'var(--g300)' }}>{ins.spread}</td>
                    <td style={{ padding: '.9rem 1rem', color: 'var(--g300)' }}>{ins.leverage}</td>
                    <td style={{ padding: '.9rem 1rem', color: 'var(--g400)' }}>{ins.hours}</td>
                    <td style={{ padding: '.9rem 1rem', fontWeight: 700, color: ins.up ? '#00d4aa' : '#E50914' }}>{ins.change}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <button onClick={() => openModal('account')} className="btn-red" style={{ cursor: 'pointer', border: 'none' }}>Trade Metals Now →</button>
            <button onClick={() => openModal('demo')} className="btn-out" style={{ cursor: 'pointer', border: 'none' }}>▶ Try Free Demo</button>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: 'var(--dark800)' }}>
        <div className="sec-in">
          <div className="g3 fu">
            {[
              { ico: '🏆', title: 'Gold Trading Leader', desc: 'Access XAU/USD with spreads from 0.20 pips, deep liquidity, and execution under 10ms. Ideal for swing traders and hedgers.' },
              { ico: '⚡', title: 'Instant Execution', desc: 'All metals orders are executed via our NDD bridge with no requotes, no dealing desk intervention, and full STP routing.' },
              { ico: '📊', title: 'Advanced Charts', desc: 'Trade metals with full TradingView integration — 50+ indicators, multi-timeframe analysis, and drawing tools.' },
            ].map((f, i) => (
              <div key={f.title} className={`card fu${i > 0 ? ` d${i}` : ''}`}>
                <div style={{ fontSize: '2rem', marginBottom: '.75rem' }}>{f.ico}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Spreads />
      <LiveCharts />
      <CTA />
      <Modal isOpen={modal.open} onClose={closeModal} type={modal.type} />
    </>
  )
}
