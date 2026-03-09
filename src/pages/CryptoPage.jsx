import { useState } from 'react'
import Modal from '../components/Modal'
import LiveCharts from '../components/LiveCharts'
import CTA from '../components/CTA'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { useLanguage } from '../contexts/LanguageContext'

export default function CryptoPage() {
  const { t } = useLanguage()
  const [modal, setModal] = useState({ open: false, type: 'account' })
  const openModal = (type) => setModal({ open: true, type })
  const closeModal = () => setModal(m => ({ ...m, open: false }))
  useScrollAnimation()

  const cryptos = [
    { sym: 'BTC/USD', name: 'Bitcoin', spread: '$15', leverage: '1:10', vol: '$28B', change: '+3.42%', up: true },
    { sym: 'ETH/USD', name: 'Ethereum', spread: '$2', leverage: '1:10', vol: '$12B', change: '+2.15%', up: true },
    { sym: 'XRP/USD', name: 'Ripple', spread: '$0.003', leverage: '1:5', vol: '$3B', change: '-1.02%', up: false },
    { sym: 'LTC/USD', name: 'Litecoin', spread: '$0.10', leverage: '1:5', vol: '$800M', change: '+0.88%', up: true },
    { sym: 'SOL/USD', name: 'Solana', spread: '$0.08', leverage: '1:5', vol: '$2.1B', change: '+5.33%', up: true },
    { sym: 'ADA/USD', name: 'Cardano', spread: '$0.002', leverage: '1:5', vol: '$600M', change: '-0.65%', up: false },
    { sym: 'DOT/USD', name: 'Polkadot', spread: '$0.02', leverage: '1:5', vol: '$400M', change: '+1.20%', up: true },
    { sym: 'LINK/USD', name: 'Chainlink', spread: '$0.03', leverage: '1:5', vol: '$350M', change: '+2.80%', up: true },
  ]

  return (
    <>
      <div className="page-hero" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/assets/banner%202.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', opacity: '0.3' }}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="page-hero-inner">
            <div className="page-breadcrumb">{t('trading.crypto.breadcrumb')}</div>
            <h1 className="page-hero-title">{t('trading.crypto.title')}<span className="r">{t('trading.crypto.titleHighlight')}</span></h1>
            <p className="page-hero-sub">{t('trading.crypto.subtitle')}</p>
          </div>
        </div>
      </div>

      <section className="sec" style={{ background: 'var(--dark900)' }}>
        <div className="sec-in">
          <div className="tc fu">
            <div className="sbw"><div className="sbl"></div><span className="sbt">{t('cryptoPage.marketsTitle')}</span><div className="sbl"></div></div>
            <h2 className="sh">{t('cryptoPage.marketsHeadline')} <span className="r">{t('cryptoPage.marketsHeadlineHighlight')}</span></h2>
            <div className="sd c"></div>
            <p className="ss">{t('cryptoPage.marketsDescription')}</p>
          </div>

          <div style={{ overflowX: 'auto', marginTop: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.88rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,.08)' }}>
                  {[t('cryptoPage.tableHeaders.symbol'), t('cryptoPage.tableHeaders.asset'), t('cryptoPage.tableHeaders.spreadFrom'), t('cryptoPage.tableHeaders.maxLeverage'), t('cryptoPage.tableHeaders.volume24h'), t('cryptoPage.tableHeaders.change24h')].map(h => (
                    <th key={h} style={{ padding: '.8rem 1rem', textAlign: 'left', color: 'rgba(255,255,255,.45)', fontFamily: "'JetBrains Mono',monospace", fontSize: '.7rem', letterSpacing: '.1em', fontWeight: 600 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {cryptos.map((c, i) => (
                  <tr key={c.sym} className="fu" style={{ borderBottom: '1px solid rgba(255,255,255,.04)', transition: 'background .2s' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,.03)'}
                    onMouseLeave={e => e.currentTarget.style.background = ''}>
                    <td style={{ padding: '.9rem 1rem', fontFamily: "'JetBrains Mono',monospace", fontWeight: 700, color: '#fff', fontSize: '.85rem' }}>{c.sym}</td>
                    <td style={{ padding: '.9rem 1rem', color: 'var(--g400)' }}>{c.name}</td>
                    <td style={{ padding: '.9rem 1rem', color: 'var(--g300)' }}>{c.spread}</td>
                    <td style={{ padding: '.9rem 1rem', color: 'var(--g300)' }}>{c.leverage}</td>
                    <td style={{ padding: '.9rem 1rem', color: 'var(--g400)' }}>{c.vol}</td>
                    <td style={{ padding: '.9rem 1rem', fontWeight: 700, color: c.up ? '#00d4aa' : '#E50914' }}>{c.change}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <button onClick={() => openModal('account')} className="btn-red" style={{ cursor: 'pointer', border: 'none' }}>{t('cryptoPage.tradeNow')}</button>
            <button onClick={() => openModal('demo')} className="btn-out" style={{ cursor: 'pointer', border: 'none' }}>{t('cryptoPage.tryDemo')}</button>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: 'var(--dark800)' }}>
        <div className="sec-in">
          <div className="g3 fu">
            {[
              { ico: '🔐', titleKey: 'cryptoPage.features.secureTrading.title', descKey: 'cryptoPage.features.secureTrading.description' },
              { ico: '🕐', titleKey: 'cryptoPage.features.markets247.title', descKey: 'cryptoPage.features.markets247.description' },
              { ico: '📉', titleKey: 'cryptoPage.features.longShort.title', descKey: 'cryptoPage.features.longShort.description' },
            ].map((f, i) => (
              <div key={f.titleKey} className={`card fu${i > 0 ? ` d${i}` : ''}`}>
                <div style={{ fontSize: '2rem', marginBottom: '.75rem' }}>{f.ico}</div>
                <h3>{t(f.titleKey)}</h3>
                <p>{t(f.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LiveCharts />
      <CTA />
      <Modal isOpen={modal.open} onClose={closeModal} type={modal.type} />
    </>
  )
}
