const videos = [
  {
    url: 'https://www.youtube.com/watch?v=sTJ7AkHMFk4',
    tag: '🎓 Beginner',
    title: "What is Forex Trading? Complete Beginner's Guide",
    dur: '⏱ 12:45 min',
    thumb: (
      <svg viewBox="0 0 400 225" width="100%" style={{display:'block',background:'#060a12'}}>
        <rect width="400" height="225" fill="#060a12"/>
        <text x="20" y="40" fill="rgba(255,255,255,.06)" fontSize="48" fontFamily="Inter,sans-serif" fontWeight="900">FOREX</text>
        <text x="20" y="80" fill="rgba(229,9,20,.4)" fontSize="11" fontFamily="JetBrains Mono,monospace">EUR/USD  1.0854  +0.23%</text>
        <text x="20" y="96" fill="rgba(0,212,170,.4)" fontSize="11" fontFamily="JetBrains Mono,monospace">GBP/USD  1.2701  +0.15%</text>
        <text x="20" y="112" fill="rgba(229,9,20,.4)" fontSize="11" fontFamily="JetBrains Mono,monospace">USD/JPY  150.32  -0.08%</text>
        <polyline points="200,180 230,160 260,155 290,140 320,132 350,120 380,108" fill="none" stroke="#00d4aa" strokeWidth="2.5"/>
        <rect x="180" y="65" width="200" height="55" rx="6" fill="rgba(229,9,20,.12)" stroke="rgba(229,9,20,.3)" strokeWidth="1"/>
        <text x="196" y="88" fill="white" fontSize="13" fontFamily="Inter,sans-serif" fontWeight="700">What is Forex Trading?</text>
        <text x="196" y="106" fill="rgba(255,255,255,.5)" fontSize="9" fontFamily="Inter,sans-serif">Complete Beginner Guide</text>
      </svg>
    )
  },
  {
    url: 'https://www.youtube.com/watch?v=XoFQHkJ5I4E',
    tag: '📊 Intermediate',
    title: 'Candlestick Patterns — 12 Patterns Every Trader Must Know',
    dur: '⏱ 18:22 min',
    thumb: (
      <svg viewBox="0 0 400 225" width="100%" style={{display:'block',background:'#060a12'}}>
        <rect width="400" height="225" fill="#060a12"/>
        <text x="15" y="28" fill="rgba(255,255,255,.15)" fontSize="10" fontFamily="JetBrains Mono,monospace">CANDLESTICK PATTERNS</text>
        <line x1="50" y1="55" x2="50" y2="95" stroke="white" strokeWidth="1"/><rect x="44" y="73" width="12" height="2" fill="white"/>
        <text x="35" y="112" fill="rgba(255,255,255,.4)" fontSize="8" fontFamily="Inter,sans-serif">Doji</text>
        <line x1="100" y1="60" x2="100" y2="105" stroke="#00d4aa" strokeWidth="1"/><rect x="94" y="60" width="12" height="20" fill="#00d4aa" opacity="0.9"/>
        <text x="85" y="118" fill="rgba(0,212,170,.6)" fontSize="8" fontFamily="Inter,sans-serif">Hammer</text>
        <line x1="150" y1="50" x2="150" y2="90" stroke="#E50914" strokeWidth="1"/><rect x="144" y="55" width="12" height="28" fill="#E50914" opacity="0.9"/>
        <line x1="170" y1="45" x2="170" y2="95" stroke="#00d4aa" strokeWidth="1"/><rect x="163" y="48" width="14" height="36" fill="#00d4aa" opacity="0.9"/>
        <text x="143" y="110" fill="rgba(255,255,255,.4)" fontSize="8" fontFamily="Inter,sans-serif">Engulfing</text>
        <rect x="15" y="140" width="270" height="50" rx="6" fill="rgba(255,255,255,.03)" stroke="rgba(255,255,255,.08)" strokeWidth="1"/>
        <text x="25" y="161" fill="white" fontSize="13" fontFamily="Inter,sans-serif" fontWeight="700">Candlestick Patterns Mastery</text>
        <text x="25" y="178" fill="rgba(255,255,255,.4)" fontSize="9" fontFamily="Inter,sans-serif">12 patterns every trader must know</text>
      </svg>
    )
  },
  {
    url: 'https://www.youtube.com/watch?v=kfFMFpMFqtk',
    tag: '🛡️ Essential',
    title: 'Risk Management — How to Protect Your Capital Like a Pro',
    dur: '⏱ 15:10 min',
    thumb: (
      <svg viewBox="0 0 400 225" width="100%" style={{display:'block',background:'#060a12'}}>
        <rect width="400" height="225" fill="#060a12"/>
        <text x="15" y="28" fill="rgba(255,255,255,.15)" fontSize="10" fontFamily="JetBrains Mono,monospace">RISK MANAGEMENT</text>
        <line x1="20" y1="120" x2="380" y2="120" stroke="rgba(255,255,255,.1)" strokeWidth="1"/>
        <rect x="20" y="120" width="80" height="50" fill="rgba(229,9,20,.1)" stroke="rgba(229,9,20,.3)" strokeWidth="1"/>
        <text x="28" y="150" fill="#E50914" fontSize="8" fontFamily="JetBrains Mono,monospace">Stop Loss -1R</text>
        <rect x="100" y="50" width="260" height="70" fill="rgba(0,212,170,.08)" stroke="rgba(0,212,170,.3)" strokeWidth="1"/>
        <text x="200" y="80" fill="#00d4aa" fontSize="9" fontFamily="JetBrains Mono,monospace">Take Profit  +3R</text>
        <rect x="130" y="130" width="140" height="40" rx="6" fill="rgba(0,212,170,.1)" stroke="rgba(0,212,170,.3)" strokeWidth="1"/>
        <text x="155" y="148" fill="#00d4aa" fontSize="10" fontFamily="Inter,sans-serif" fontWeight="700">Risk : Reward = 1:3</text>
        <text x="155" y="163" fill="rgba(255,255,255,.4)" fontSize="8" fontFamily="Inter,sans-serif">2% risk per trade max</text>
      </svg>
    )
  },
  {
    url: 'https://www.youtube.com/watch?v=QCRq6r5BQWY',
    tag: '⚙️ Platform',
    title: 'MT4 Setup Guide — From Download to First Trade in 10 Minutes',
    dur: '⏱ 10:38 min',
    thumb: (
      <svg viewBox="0 0 400 225" width="100%" style={{display:'block',background:'#060a12'}}>
        <rect width="400" height="225" fill="#080d18"/>
        <rect x="0" y="0" width="400" height="22" fill="#0d1525"/>
        <text x="10" y="15" fill="rgba(255,255,255,.4)" fontSize="8" fontFamily="JetBrains Mono,monospace">MetaTrader 4 — EUR/USD,H1</text>
        <rect x="0" y="22" width="400" height="18" fill="#0c1420"/>
        <rect x="0" y="40" width="280" height="140" fill="#060a12"/>
        <line x1="40" y1="75" x2="40" y2="108" stroke="#E50914" strokeWidth="1"/><rect x="35" y="82" width="10" height="18" fill="#E50914"/>
        <line x1="60" y1="65" x2="60" y2="98" stroke="#00d4aa" strokeWidth="1"/><rect x="55" y="73" width="10" height="16" fill="#00d4aa"/>
        <line x1="80" y1="55" x2="80" y2="88" stroke="#00d4aa" strokeWidth="1"/><rect x="75" y="62" width="10" height="14" fill="#00d4aa"/>
        <rect x="280" y="40" width="120" height="140" fill="#0a0f1a"/>
        <text x="288" y="55" fill="rgba(255,255,255,.3)" fontSize="7" fontFamily="JetBrains Mono,monospace">Market Watch</text>
        <text x="288" y="70" fill="white" fontSize="7" fontFamily="JetBrains Mono,monospace">EURUSD</text>
        <text x="330" y="70" fill="#00d4aa" fontSize="7" fontFamily="JetBrains Mono,monospace">1.0854</text>
        <rect x="0" y="180" width="400" height="45" fill="#0c1420"/>
        <text x="10" y="213" fill="#00d4aa" fontSize="7" fontFamily="JetBrains Mono,monospace">Connected · EUR/USD · Bid: 1.08514 · Ask: 1.08516</text>
      </svg>
    )
  },
]

export default function Videos() {
  return (
    <section className="sec vid-sec" id="videos" style={{background:'linear-gradient(180deg,var(--dark800),var(--dark900))'}}>
      <div className="video-inner">
        <div className="tc" style={{marginBottom:'3rem'}}>
          <div className="sbw c"><div className="sbl"></div><span className="sbt">Education</span><div className="sbl"></div></div>
          <h2 className="sh">LEARN TO TRADE WITH <span className="r">VIDEO GUIDES</span></h2>
          <div className="sd c"></div>
          <p className="ss">Professional video tutorials for beginners and advanced traders — free for all Hokkai Markets clients.</p>
        </div>
        <div className="video-grid">
          {videos.map((v, i) => (
            <div className="video-card" key={i} onClick={() => window.open(v.url, '_blank')}>
              <div className="video-thumb">
                {v.thumb}
                <div className="video-play"><div className="video-play-btn">▶</div></div>
              </div>
              <div className="video-info">
                <div className="video-tag">{v.tag}</div>
                <div className="video-title">{v.title}</div>
                <div className="video-dur">{v.dur}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
