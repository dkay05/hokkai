import { useState, useRef, useEffect } from 'react'

const responses = {
  'Open Account': 'Great choice! 🎉 Opening an account takes less than 2 minutes. <a href="#portal" style="color:var(--red)">Open Account →</a>',
  'Deposit Funds': 'We accept Bank Wire, Credit Card, Skrill, Neteller, USDT & UPI. All deposits are <strong>fee-free</strong>! <a href="#deposits" style="color:var(--red)">View methods →</a>',
  'MT4 Download': 'Download MT4 for Windows, Mac, iOS & Android from our platforms page. <a href="#mt4mt5" style="color:var(--red)">Download MT4 →</a>',
  'Spreads Info': 'Our spreads start from <strong>0.0 pips</strong> on ECN Raw accounts. <a href="#spreads" style="color:var(--red)">View spreads table →</a>',
}

export default function Chat({ open = false, setOpen = () => {} }) {
  const [msgs, setMsgs] = useState([{ type: 'bot', text: 'Hi! 👋 Welcome to Hokkai Markets. How can I help you today?', html: false }])
  const [input, setInput] = useState('')
  const bodyRef = useRef(null)

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight
  }, [msgs])

  const addMsg = (text, type, html = false) => setMsgs(p => [...p, { type, text, html }])

  const quickReply = (topic) => {
    addMsg(topic, 'user')
    setTimeout(() => addMsg(responses[topic] || 'Thank you! A support agent will be with you shortly. 🙏', 'bot', true), 600)
  }

  const send = () => {
    const msg = input.trim()
    if (!msg) return
    addMsg(msg, 'user')
    setInput('')
    setTimeout(() => addMsg('Thanks for your message! 🙏 Our support team will respond shortly. For instant help: <a href="https://wa.me/+1234567890" style="color:var(--red)" target="_blank">Chat on WhatsApp →</a>', 'bot', true), 800)
  }

  return (
    <>
      {/* Chat bubble */}
      <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 9990 }}>
        <button onClick={() => setOpen(o => !o)}
          style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--red)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 24px rgba(229,9,20,.5)', color: '#fff', fontSize: '1.4rem', transition: 'all .3s' }}>
          {open ? '✕' : '💬'}
        </button>
        {!open && (
          <div style={{ position: 'absolute', top: '-8px', right: '-4px', width: '18px', height: '18px', background: '#00d4aa', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.6rem', fontWeight: 700, color: '#000' }}>1</div>
        )}
      </div>

      {/* Chat popup */}
      {open && (
        <div id="chatPopup" style={{ position: 'fixed', bottom: '6rem', right: '2rem', width: '320px', background: '#0c1018', border: '1px solid rgba(229,9,20,.3)', borderRadius: '16px', boxShadow: '0 20px 60px rgba(0,0,0,.7)', zIndex: 9991, overflow: 'hidden' }}>
          {/* Header */}
          <div style={{ background: 'linear-gradient(135deg,#E50914,#b00710)', padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '.75rem' }}>
            <div style={{ width: '36px', height: '36px', background: 'rgba(255,255,255,.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>🤖</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '.9rem' }}>Hokkai Support</div>
              <div style={{ fontSize: '.7rem', opacity: .8, display: 'flex', alignItems: 'center', gap: '.3rem' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00d4aa', display: 'inline-block' }}></span> Online now
              </div>
            </div>
          </div>

          {/* Body */}
          <div ref={bodyRef} id="chatBody" style={{ height: '240px', overflowY: 'auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
            {msgs.map((m, i) => (
              <div key={i} className={`chat-msg ${m.type}`}
                style={{ alignSelf: m.type === 'user' ? 'flex-end' : 'flex-start', background: m.type === 'user' ? 'var(--red)' : 'rgba(255,255,255,.07)', color: '#fff', padding: '.6rem .9rem', borderRadius: m.type === 'user' ? '12px 12px 4px 12px' : '12px 12px 12px 4px', fontSize: '.82rem', maxWidth: '85%', lineHeight: 1.5 }}>
                {m.html ? <span dangerouslySetInnerHTML={{ __html: m.text }} /> : m.text}
              </div>
            ))}
          </div>

          {/* Quick replies */}
          <div style={{ padding: '.5rem .75rem', display: 'flex', gap: '.4rem', flexWrap: 'wrap', borderTop: '1px solid rgba(255,255,255,.06)' }}>
            {Object.keys(responses).map(t => (
              <button key={t} onClick={() => quickReply(t)}
                style={{ fontSize: '.68rem', background: 'rgba(229,9,20,.12)', border: '1px solid rgba(229,9,20,.25)', borderRadius: '20px', padding: '.25rem .65rem', color: 'var(--g300)', cursor: 'pointer', fontFamily: 'Inter,sans-serif' }}>
                {t}
              </button>
            ))}
          </div>

          {/* Input */}
          <div style={{ padding: '.75rem', display: 'flex', gap: '.5rem', borderTop: '1px solid rgba(255,255,255,.06)' }}>
            <input id="chatInput" value={input} onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              placeholder="Type a message..."
              style={{ flex: 1, background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.1)', borderRadius: '8px', padding: '.55rem .85rem', color: '#fff', fontSize: '.82rem', outline: 'none', fontFamily: 'Inter,sans-serif' }} />
            <button onClick={send}
              style={{ width: '36px', height: '36px', background: 'var(--red)', border: 'none', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0 }}>
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
