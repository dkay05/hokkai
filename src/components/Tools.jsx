import { useState } from 'react'
import Modal from './Modal'

export default function Tools() {
  const [modal, setModal] = useState({ open: false, type: 'account' })
  const openModal = (type) => setModal({ open: true, type })
  const closeModal = () => setModal(m => ({ ...m, open: false }))
  const tools = [
    { icon: '📰', title: 'Daily Market Analysis', desc: 'Expert daily insights on global markets', delay: '' },
    { icon: '📋', title: 'Technical & Fundamental Reports', desc: 'In-depth research reports', delay: 'd1' },
    { icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M4.9 4.9a10 10 0 0114.2 0M7.8 7.8a6 6 0 018.4 0"/><circle cx="12" cy="12" r="2" fill="currentColor"/><line x1="12" y1="14" x2="12" y2="21"/></svg>, title: 'Trading Signals', desc: 'Real-time actionable trade signals', delay: 'd2' },
    { icon: '🤖', title: 'AI-Powered Market Insights', desc: 'Machine learning driven analysis', delay: 'd3' },
    { icon: '📅', title: 'Economic Calendar', desc: 'Track key market-moving events', delay: 'd1' },
    { icon: '🧮', title: 'Risk & Position Size Calculator', desc: 'Manage risk with precision', delay: 'd2' },
    { icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>, title: 'VPS Hosting', desc: 'Ultra-low latency for algo trading', delay: 'd3' },
  ]

  return (
    <section className="sec tools-sec" id="tools">
      <div className="sec-in">
        <div className="tc fu">
          <div className="sbw"><div className="sbl"></div><span className="sbt">Tools &amp; Research</span><div className="sbl"></div></div>
          <h2 className="sh">PROFESSIONAL <span className="r">TOOLS &amp; RESEARCH</span></h2>
          <div className="sd c"></div>
          <p className="ss">Hokkai Markets provides professional research and analytical tools to support informed trading decisions.</p>
        </div>
        <div className="g4">
          {tools.map((t, i) => (
            <div className={`tool-card fu${t.delay ? ` ${t.delay}` : ''}`} key={t.title}>
              <div className="ti2">{t.icon}</div>
              <h4>{t.title}</h4>
              <p>{t.desc}</p>
            </div>
          ))}
          <div className="tool-card tool-cta fu d4">
            <div className="tkj">研究</div>
            <p>Explore all research tools</p>
            <button onClick={() => openModal('account')} className="btn-red-sm" style={{fontSize:'.73rem',padding:'.38rem .85rem',marginTop:'.5rem',cursor:'pointer',border:'none'}}>View All Tools →</button>
          </div>
        </div>
      </div>
      <Modal isOpen={modal.open} onClose={closeModal} type={modal.type} />
    </section>
  )
}
