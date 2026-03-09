import { useState } from 'react'
import Modal from './Modal'

export default function Analysis() {
  const [modal, setModal] = useState({ open: false, type: 'register' })
  const openModal = (type) => setModal({ open: true, type })
  const closeModal = () => setModal(m => ({ ...m, open: false }))
  const articles = [
    {
      cat: 'FOREX', catColor: '#3498db',
      title: 'EUR/USD Bulls Eye 1.0950 As ECB Rate Decision Looms',
      desc: 'The euro gained momentum against the dollar as markets await the European Central Bank\'s rate decision. Key resistance at 1.0920 was broken with strong bullish momentum...',
      time: 'Today • 08:30 UTC',
      chartColor: '#00d4aa',
    },
    {
      cat: 'GOLD', catColor: '#c9a84c',
      title: 'Gold Consolidates Near $2,040 — Breakout or Pullback?',
      desc: 'XAU/USD is trading in a tight range between $2,020 and $2,055. A breakout above the $2,050 resistance could trigger a move toward all-time highs near $2,150...',
      time: 'Today • 06:15 UTC',
      chartColor: '#c9a84c',
    },
    {
      cat: 'CRYPTO', catColor: '#9b59b6',
      title: 'Bitcoin Holds Above $43K Support — Next Target $48K',
      desc: 'BTC/USD maintains its bullish structure above the key $43,000 support level. Institutional buying continues as ETF inflows remain positive for the third consecutive week...',
      time: 'Yesterday • 14:00 UTC',
      chartColor: '#9b59b6',
    },
  ]

  const signals = [
    { pair: 'EUR/USD', dir: 'BUY', entry: '1.0830', sl: '1.0790', tp: '1.0910', status: 'Active', up: true },
    { pair: 'XAU/USD', dir: 'SELL', entry: '2,048', sl: '2,065', tp: '2,015', status: 'Pending', up: false },
    { pair: 'GBP/JPY', dir: 'BUY', entry: '191.20', sl: '190.50', tp: '192.80', status: 'Active', up: true },
    { pair: 'US30', dir: 'BUY', entry: '38,420', sl: '38,100', tp: '39,000', status: 'TP Hit ✓', up: true },
  ]

  return (
    <section className="sec analysis-sec" id="analysis">
      <div className="sec-in">
        <div className="tc fu">
          <div className="sbw c"><div className="sbl"></div><span className="sbt">Market Analysis</span><div className="sbl"></div></div>
          <h2 className="sh">DAILY <span className="r">MARKET ANALYSIS</span></h2>
          <div className="sd c"></div>
          <p className="ss">Expert insights, technical analysis, and trading signals updated daily to help you make informed trading decisions.</p>
        </div>

        <div className="analysis-grid">
          {/* Articles */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {articles.map((a, i) => (
              <div key={i} className="fu" style={{ background: '#0c1018', border: '1px solid rgba(255,255,255,.07)', borderRadius: '14px', overflow: 'hidden', transition: 'all .3s', cursor: 'pointer' }}
                onMouseOver={e => { e.currentTarget.style.borderColor = 'rgba(229,9,20,.25)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseOut={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.07)'; e.currentTarget.style.transform = '' }}>
                {/* Mini chart bar */}
                <div style={{ height: '6px', background: `linear-gradient(90deg, ${a.chartColor}33, ${a.chartColor}88, ${a.chartColor}33)` }}></div>
                <div style={{ padding: '1.2rem 1.4rem 1.4rem' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', background: `${a.catColor}20`, border: `1px solid ${a.catColor}33`, borderRadius: '5px', padding: '.18rem .6rem', marginBottom: '.75rem' }}>
                    <span style={{ fontSize: '.62rem', fontWeight: 700, color: a.catColor, letterSpacing: '.1em', fontFamily: "'JetBrains Mono',monospace" }}>{a.cat}</span>
                  </div>
                  <h4 style={{ fontSize: '.95rem', fontWeight: 700, lineHeight: 1.4, marginBottom: '.6rem', color: '#fff' }}>{a.title}</h4>
                  <p style={{ fontSize: '.8rem', color: 'var(--g400)', lineHeight: 1.7, marginBottom: '.9rem' }}>{a.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '.68rem', color: 'var(--g500)', fontFamily: "'JetBrains Mono',monospace" }}>{a.time}</span>
                    <a href="#" style={{ fontSize: '.72rem', color: 'var(--red)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '.3rem', textDecoration: 'none' }}>
                      Read Analysis <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Signals Sidebar */}
          <div className="fu d1" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', position: 'sticky', top: '80px' }}>
            <div style={{ background: '#0c1018', border: '1px solid rgba(255,255,255,.08)', borderRadius: '14px', overflow: 'hidden' }}>
              <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid rgba(255,255,255,.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h4 style={{ fontSize: '.82rem', fontWeight: 700 }}>📡 Live Signals</h4>
                <span style={{ fontSize: '.62rem', color: '#00d4aa', fontFamily: "'JetBrains Mono',monospace", display: 'flex', alignItems: 'center', gap: '.35rem' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00d4aa', display: 'inline-block' }}></span>
                  Updated live
                </span>
              </div>
              <div style={{ padding: '.5rem' }}>
                {signals.map(s => (
                  <div key={s.pair} style={{ padding: '.75rem .85rem', borderRadius: '8px', marginBottom: '.35rem', background: 'rgba(255,255,255,.02)', border: '1px solid rgba(255,255,255,.04)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '.35rem' }}>
                      <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.8rem', fontWeight: 700 }}>{s.pair}</span>
                      <span style={{ fontSize: '.65rem', fontWeight: 700, padding: '.15rem .5rem', borderRadius: '4px', background: s.up ? 'rgba(0,212,170,.12)' : 'rgba(229,9,20,.12)', color: s.up ? '#00d4aa' : '#E50914', border: `1px solid ${s.up ? 'rgba(0,212,170,.25)' : 'rgba(229,9,20,.25)'}` }}>{s.dir}</span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '.3rem', fontSize: '.65rem', fontFamily: "'JetBrains Mono',monospace" }}>
                      <div><span style={{ color: 'var(--g500)' }}>Entry</span><br /><span style={{ color: 'var(--g300)' }}>{s.entry}</span></div>
                      <div><span style={{ color: 'var(--g500)' }}>SL</span><br /><span style={{ color: '#E50914' }}>{s.sl}</span></div>
                      <div><span style={{ color: 'var(--g500)' }}>TP</span><br /><span style={{ color: '#00d4aa' }}>{s.tp}</span></div>
                    </div>
                    <div style={{ marginTop: '.4rem', fontSize: '.6rem', color: s.status.includes('✓') ? '#00d4aa' : 'var(--g400)', fontFamily: "'JetBrains Mono',monospace" }}>● {s.status}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: 'linear-gradient(135deg,rgba(229,9,20,.12),rgba(12,16,24,.9))', border: '1px solid rgba(229,9,20,.2)', borderRadius: '14px', padding: '1.25rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '.5rem' }}>📊</div>
              <h4 style={{ marginBottom: '.4rem', fontSize: '.9rem' }}>Premium Signals</h4>
              <p style={{ fontSize: '.75rem', color: 'var(--g400)', lineHeight: 1.6, marginBottom: '1rem' }}>Get daily signals with entry, SL, TP and analysis straight to your inbox.</p>
              <button onClick={() => openModal('register')} className="btn-red-sm" style={{ display:'block', textAlign:'center', cursor:'pointer', border:'none', width:'100%' }}>Subscribe Free →</button>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={modal.open} onClose={closeModal} type={modal.type} />
    </section>
  )
}
