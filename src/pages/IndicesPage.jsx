import { useState } from 'react'
import Modal from '../components/Modal'
import LiveCharts from '../components/LiveCharts'
import Spreads from '../components/Spreads'
import CTA from '../components/CTA'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { useLanguage } from '../contexts/LanguageContext'

export default function IndicesPage() {
  const { t } = useLanguage()
  const [modal, setModal] = useState({ open: false, type: 'account' })
  const openModal = (type) => setModal({ open: true, type })
  const closeModal = () => setModal(m => ({ ...m, open: false }))
  useScrollAnimation()

  const indices = [
    { sym: 'US30', name: 'Dow Jones Industrial Average', region: '🇺🇸 USA', spread: '2.0', leverage: '1:200', hours: '23/5', change: '+0.85%', up: true },
    { sym: 'SPX500', name: 'S&P 500 Index', region: '🇺🇸 USA', spread: '0.5', leverage: '1:200', hours: '23/5', change: '+1.02%', up: true },
    { sym: 'NAS100', name: 'Nasdaq 100', region: '🇺🇸 USA', spread: '1.0', leverage: '1:200', hours: '23/5', change: '+1.55%', up: true },
    { sym: 'UK100', name: 'FTSE 100', region: '🇬🇧 UK', spread: '1.0', leverage: '1:100', hours: 'Exchange', change: '-0.22%', up: false },
    { sym: 'GER40', name: 'DAX 40', region: '🇩🇪 Germany', spread: '1.5', leverage: '1:100', hours: 'Exchange', change: '+0.63%', up: true },
    { sym: 'FRA40', name: 'CAC 40', region: '🇫🇷 France', spread: '1.5', leverage: '1:100', hours: 'Exchange', change: '-0.18%', up: false },
    { sym: 'JPN225', name: 'Nikkei 225', region: '🇯🇵 Japan', spread: '6.0', leverage: '1:100', hours: 'Exchange', change: '+1.34%', up: true },
    { sym: 'AUS200', name: 'ASX 200', region: '🇦🇺 Australia', spread: '2.0', leverage: '1:100', hours: 'Exchange', change: '+0.47%', up: true },
    { sym: 'HK50', name: 'Hang Seng Index', region: '🇭🇰 Hong Kong', spread: '8.0', leverage: '1:100', hours: 'Exchange', change: '-0.90%', up: false },
  ]

  return (
    <>
      <div className="page-hero" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/assets/banner%202.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', opacity: '0.3' }}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="page-hero-inner">
            <div className="page-breadcrumb">{t('trading.indices.breadcrumb')}</div>
            <h1 className="page-hero-title">{t('trading.indices.title')} <span className="r">{t('trading.indices.titleHighlight')}</span></h1>
            <p className="page-hero-sub">{t('trading.indices.subtitle')}</p>
          </div>
        </div>
      </div>

      <section className="sec" style={{ background: 'var(--dark900)' }}>
        <div className="sec-in">
          <div className="tc fu">
            <div className="sbw"><div className="sbl"></div><span className="sbt">Index Markets</span><div className="sbl"></div></div>
            <h2 className="sh">AVAILABLE <span className="r">INDICES</span></h2>
            <div className="sd c"></div>
            <p className="ss">Trade entire economies with a single position. Access US, European, and Asian indices with competitive spreads and high liquidity.</p>
          </div>

          <div style={{ overflowX: 'auto', marginTop: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.88rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,.08)' }}>
                  {['Symbol', 'Index Name', 'Region', 'Spread From', 'Max Leverage', 'Hours', 'Change'].map(h => (
                    <th key={h} style={{ padding: '.8rem 1rem', textAlign: 'left', color: 'rgba(255,255,255,.45)', fontFamily: "'JetBrains Mono',monospace", fontSize: '.7rem', letterSpacing: '.1em', fontWeight: 600 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {indices.map((idx, i) => (
                  <tr key={idx.sym} className="fu" style={{ borderBottom: '1px solid rgba(255,255,255,.04)', transition: 'background .2s' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,.03)'}
                    onMouseLeave={e => e.currentTarget.style.background = ''}>
                    <td style={{ padding: '.9rem 1rem', fontFamily: "'JetBrains Mono',monospace", fontWeight: 700, color: '#fff', fontSize: '.85rem' }}>{idx.sym}</td>
                    <td style={{ padding: '.9rem 1rem', color: 'var(--g400)' }}>{idx.name}</td>
                    <td style={{ padding: '.9rem 1rem', color: 'var(--g300)', fontSize: '.82rem' }}>{idx.region}</td>
                    <td style={{ padding: '.9rem 1rem', color: 'var(--g300)' }}>{idx.spread}</td>
                    <td style={{ padding: '.9rem 1rem', color: 'var(--g300)' }}>{idx.leverage}</td>
                    <td style={{ padding: '.9rem 1rem', color: 'var(--g400)', fontSize: '.8rem' }}>{idx.hours}</td>
                    <td style={{ padding: '.9rem 1rem', fontWeight: 700, color: idx.up ? '#00d4aa' : '#E50914' }}>{idx.change}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <button onClick={() => openModal('account')} className="btn-red" style={{ cursor: 'pointer', border: 'none' }}>Trade Indices Now →</button>
            <button onClick={() => openModal('demo')} className="btn-out" style={{ cursor: 'pointer', border: 'none' }}>▶ Try Free Demo</button>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: 'var(--dark800)' }}>
        <div className="sec-in">
          <div className="g3 fu">
            {[
              { ico: '🌍', title: 'Global Exposure', desc: 'One account. Access US tech stocks via Nasdaq, European blue-chips via DAX and FTSE, and Asian markets via Nikkei and Hang Seng.' },
              { ico: '⚡', title: 'Up to 1:200 Leverage', desc: 'Trade major US indices like SPX500 and NAS100 with up to 1:200 leverage and tight spreads during peak liquidity hours.' },
              { ico: '🕐', title: 'Extended Hours', desc: 'Trade US indices nearly 23 hours a day, 5 days a week. Never miss a market move with our extended trading hours.' },
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
