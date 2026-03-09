import { useEffect, useState } from 'react'

export default function Splash() {
  const [pct, setPct] = useState(0)
  const [gone, setGone] = useState(false)
  const msgs = ['LOADING MARKETS...', 'CONNECTING FEEDS...', 'PREPARING CHARTS...', 'WELCOME!']
  const msgIdx = Math.min(Math.floor(pct / 26), msgs.length - 1)

  useEffect(() => {
    let current = 0
    const iv = setInterval(() => {
      current += Math.random() * 7 + 4
      if (current > 100) current = 100
      setPct(current)
      if (current >= 100) {
        clearInterval(iv)
        setTimeout(() => setGone(true), 350)
      }
    }, 70)
    return () => clearInterval(iv)
  }, [])

  if (gone) return null

  return (
    <div className="splash" id="splashEl">
      <div className="splash-logo">
        <svg width="52" height="52" viewBox="0 0 38 38" fill="none">
          <rect width="38" height="38" rx="9" fill="#E50914"/>
          <path d="M9 9H13.5V17.5H24.5V9H29V29H24.5V20.5H13.5V29H9V9Z" fill="white"/>
          <rect x="9" y="33" width="20" height="2.5" rx="1.25" fill="rgba(255,255,255,0.3)"/>
        </svg>
        <div>
          <div style={{fontFamily:"'Michroma',sans-serif",fontSize:'1.3rem',letterSpacing:'.18em',color:'#fff',lineHeight:1}}>HOKKAI</div>
          <div style={{fontSize:'.5rem',letterSpacing:'.3em',color:'rgba(229,9,20,.95)',fontFamily:"'JetBrains Mono',monospace",marginTop:'.15rem'}}>MARKETS</div>
        </div>
      </div>
      <div className="splash-bar">
        <div className="splash-fill" style={{width: pct + '%'}}></div>
      </div>
      <div className="splash-msg">{msgs[msgIdx]}</div>
    </div>
  )
}
