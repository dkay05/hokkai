import { useState } from 'react'

const eduData = [
  { title: 'Beginner Guides', content: 'Learn the fundamentals of forex trading from scratch. Covers: What is Forex, How currency pairs work, Understanding pips and lots, Opening your first trade, Managing emotions in trading.', lessons: ['What is Forex Trading?', 'Currency Pairs Explained', 'Pips, Lots & Leverage', 'Reading a Trading Platform', 'Your First Trade Step-by-Step', 'Basic Risk Management'] },
  { title: 'Forex Basics', content: 'Deep dive into forex mechanics — market sessions, economic indicators, central bank policies, and how they move currency prices.', lessons: ['Market Sessions: London, NY, Tokyo', 'Economic Indicators Impact', 'Central Bank Policies', 'Support & Resistance Levels', 'Trend Lines & Channels', 'Introduction to Candlesticks'] },
  { title: 'Advanced Trading Strategies', content: 'Professional trading strategies used by institutional traders. Includes breakout trading, swing trading, scalping, and algorithmic strategies.', lessons: ['Breakout Trading Strategies', 'Swing Trading with Fibs', 'Scalping Techniques', 'News Trading Tactics', 'Multi-Timeframe Analysis', 'Building a Trading System'] },
  { title: 'Video Tutorials', content: 'Step-by-step video walkthroughs covering platform setup, trade execution, chart reading, and strategy implementation.', lessons: ['MT4 Platform Full Tour', 'How to Place Orders', 'Setting Stop Loss & Take Profit', 'Using Technical Indicators', 'Chart Pattern Recognition', 'Live Trade Walkthroughs'] },
  { title: 'Weekly Live Webinars', content: 'Join our expert traders every week for live market analysis, Q&A sessions, and real-time trade discussions.', lessons: ['Monday: Week Ahead Outlook', 'Tuesday: EUR/USD Deep Dive', 'Wednesday: Gold & Commodities', 'Thursday: US Session Strategies', 'Friday: Week Review & Setups', 'Saturday: Beginner Q&A Session'] },
  { title: 'E-books & Trading Manuals', content: 'Download our comprehensive e-books and trading manuals covering everything from basic forex concepts to advanced algorithmic trading.', lessons: ['Forex Starter Guide (Free)', 'Complete Technical Analysis Manual', 'Risk Management Playbook', 'Candlestick Pattern Encyclopedia', 'Advanced EA Programming Guide', 'Psychology of Trading'] },
]

const icons = [
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>,
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>,
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.899L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/></svg>,
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
]

export default function Education() {
  const [modal, setModal] = useState(null)
  const delays = ['', 'd1', 'd2', '', 'd1', 'd2']

  return (
    <section className="sec edu-sec" id="education" style={{ background: 'linear-gradient(180deg,#07090e,var(--dark900))' }}>
      <div className="sec-in">
        <div className="tc fu">
          <div className="sbw c"><div className="sbl"></div><span className="sbt">Education Center</span><div className="sbl"></div></div>
          <h2 className="sh"><span className="r">EDUCATION CENTER</span></h2>
          <div className="sd c"></div>
          <p className="ss">We believe educated traders perform better. Our learning center supports continuous growth at every level.</p>
        </div>

        <div className="edu-banner fu" style={{ background: 'linear-gradient(90deg,rgba(229,9,20,.1),rgba(12,16,24,.95))', border: '1px solid rgba(229,9,20,.2)', borderRadius: '16px', padding: '1.5rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '2rem 0', position: 'relative', overflow: 'hidden' }}>
          <div className="edu-kj">学</div>
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '.38rem' }}>Start Your Learning Journey</h3>
            <p style={{ fontSize: '.8rem', color: 'var(--g400)', maxWidth: '380px' }}>Whether you are starting your journey or refining advanced strategies, our education hub supports continuous growth.</p>
          </div>
          <div style={{ display: 'flex', gap: '.7rem', flexShrink: 0 }}>
            <a href="#videos" className="btn-red-sm">Watch Videos →</a>
            <a href="#portal" className="btn-out">Try Demo</a>
          </div>
        </div>

        <div className="edu-grid">
          {eduData.map((d, i) => (
            <div
              key={d.title}
              className={`edu-card fu${delays[i] ? ` ${delays[i]}` : ''}`}
              onClick={() => setModal(i)}
              style={{ cursor: 'pointer', transition: 'all .3s' }}
            >
              <span className="edu-ico" style={{ color: 'var(--red)' }}>{icons[i]}</span>
              <div>
                <h4>{d.title}</h4>
                <p>6 Lessons available</p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '.3rem', marginTop: '.5rem', fontSize: '.7rem', color: 'var(--red)', fontWeight: 600 }}>
                  <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  6 Lessons →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modal !== null && (
        <div style={{ display: 'flex', position: 'fixed', inset: 0, zIndex: 9995, alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          <div onClick={() => setModal(null)} style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,.8)', backdropFilter: 'blur(6px)' }}></div>
          <div style={{ position: 'relative', background: '#0c1018', border: '1px solid rgba(229,9,20,.3)', borderRadius: '20px', width: '100%', maxWidth: '560px', maxHeight: '90vh', overflowY: 'auto', padding: '2rem', zIndex: 1 }}>
            <button onClick={() => setModal(null)} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(255,255,255,.08)', border: 'none', color: 'var(--g400)', width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem', background: 'rgba(229,9,20,.12)', border: '1px solid rgba(229,9,20,.2)', borderRadius: '6px', padding: '.25rem .65rem', fontSize: '.62rem', color: 'var(--red)', fontFamily: 'JetBrains Mono,monospace', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '.1em' }}>Education</div>
            <h2 style={{ fontFamily: 'Michroma,sans-serif', fontSize: '1.5rem', marginBottom: '.75rem', textTransform: 'uppercase' }}>{eduData[modal].title}</h2>
            <p style={{ color: 'var(--g400)', fontSize: '.85rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>{eduData[modal].content}</p>
            <h4 style={{ fontSize: '.7rem', textTransform: 'uppercase', letterSpacing: '.12em', color: 'var(--g400)', fontFamily: 'JetBrains Mono,monospace', marginBottom: '.75rem' }}>Course Lessons</h4>
            <div>
              {eduData[modal].lessons.map(l => (
                <div key={l} style={{ display: 'flex', alignItems: 'center', gap: '.6rem', padding: '.55rem 0', borderBottom: '1px solid rgba(255,255,255,.05)', fontSize: '.82rem', color: 'var(--g300)' }}>
                  <svg width="14" height="14" fill="none" stroke="#E50914" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                  {l}
                </div>
              ))}
            </div>
            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '.75rem' }}>
              <a href="#portal" onClick={() => setModal(null)} className="btn-red" style={{ textDecoration: 'none' }}>Start Learning →</a>
              <button onClick={() => setModal(null)} className="btn-out" style={{ cursor: 'pointer', fontFamily: 'Inter,sans-serif' }}>Close</button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
