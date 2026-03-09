export default function MobileApp() {
  return (
    <section className="sec" id="mobileapp" style={{background:'var(--dark900)',overflow:'hidden',position:'relative'}}>
      <div style={{position:'absolute',top:'-100px',right:'-100px',width:'500px',height:'500px',background:'radial-gradient(circle,rgba(229,9,20,.06),transparent 65%)',pointerEvents:'none'}}></div>
      <div style={{position:'absolute',bottom:'-100px',left:'-100px',width:'400px',height:'400px',background:'radial-gradient(circle,rgba(0,212,170,.04),transparent 65%)',pointerEvents:'none'}}></div>
      <div className="sec-in" style={{position:'relative',zIndex:1}}>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'5rem',alignItems:'center'}}>
          <div className="fu">
            <div className="sbw" style={{justifyContent:'flex-start',marginBottom:'1rem'}}><div className="sbl"></div><span className="sbt">Mobile Trading</span><div className="sbl"></div></div>
            <h2 className="sh" style={{textAlign:'left',fontSize:'clamp(1.8rem,3.5vw,2.8rem)'}}>TRADE ON THE <span className="r">GO</span></h2>
            <div style={{width:'60px',height:'3px',background:'var(--red)',margin:'1rem 0 1.5rem'}}></div>
            <p style={{color:'var(--g400)',fontSize:'.9rem',lineHeight:1.9,marginBottom:'2rem'}}>Take your trading anywhere with the Hokkai Markets mobile app. Full platform functionality in the palm of your hand — real-time charts, one-click trading, instant deposits, and live price alerts.</p>
            <div style={{display:'flex',flexDirection:'column',gap:0,marginBottom:'2rem'}}>
              {['Real-time charts with 50+ technical indicators','One-tap trade execution with market & limit orders','Face ID & Fingerprint biometric login','Push notifications — price alerts & breaking news','Instant deposit & same-day withdrawal'].map(f => (
                <div key={f} style={{display:'flex',alignItems:'center',gap:'.75rem',padding:'.75rem 0',borderBottom:'1px solid rgba(255,255,255,.05)'}}>
                  <div style={{width:'24px',height:'24px',borderRadius:'50%',background:'rgba(0,212,170,.1)',border:'1px solid rgba(0,212,170,.3)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                    <svg width="12" height="12" fill="none" stroke="#00d4aa" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <span style={{fontSize:'.85rem',color:'var(--g300)'}}>{f}</span>
                </div>
              ))}
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:'.75rem'}}>
              {[
                { label: 'DOWNLOAD ON THE', name: 'App Store (iOS)', icon: <svg viewBox="0 0 24 24" width="32" height="32" fill="white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg> },
                { label: 'GET IT ON', name: 'Google Play (Android)', icon: <svg viewBox="0 0 24 24" width="32" height="32"><path fill="#EA4335" d="M13.13 10.12l1.76-1.76L5.54 2.27C5.19 2.09 4.8 2 4.42 2L13.13 10.12z"/><path fill="#FBBC04" d="M20.9 10.38l-2.4-1.35-2.13 2.13 2.13 2.13 2.43-1.37a1.42 1.42 0 000-2.54z"/><path fill="#4285F4" d="M4.42 22c.38 0 .77-.09 1.12-.27L14.9 13.9l-1.77-1.77L4.42 22z"/><path fill="#34A853" d="M13.13 11.88L4.42 2.73 2.27 3.74C1.71 4 1.29 4.63 1.29 5.27v13.46c0 .64.42 1.27.98 1.53l2.15 1.01 8.71-9.39z"/></svg> },
              ].map(btn => (
                <a key={btn.name} href="#" style={{display:'flex',alignItems:'center',gap:'1rem',background:'rgba(255,255,255,.04)',border:'1px solid rgba(255,255,255,.1)',borderRadius:'12px',padding:'1rem 1.25rem',textDecoration:'none',transition:'all .2s'}}>
                  <div style={{width:'40px',height:'40px',flexShrink:0,display:'flex',alignItems:'center',justifyContent:'center'}}>{btn.icon}</div>
                  <div>
                    <div style={{fontSize:'.65rem',color:'var(--g400)',letterSpacing:'.06em',fontFamily:"'JetBrains Mono',monospace"}}>{btn.label}</div>
                    <div style={{fontSize:'.95rem',fontWeight:600,color:'white'}}>{btn.name}</div>
                  </div>
                  <svg style={{marginLeft:'auto'}} width="16" height="16" fill="none" stroke="rgba(255,255,255,.3)" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              ))}
            </div>
          </div>

          <div className="fu d1" style={{display:'flex',justifyContent:'center',alignItems:'center',position:'relative'}}>
            <div style={{position:'absolute',width:'280px',height:'280px',background:'radial-gradient(circle,rgba(229,9,20,.2),transparent 70%)',borderRadius:'50%',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}}></div>
            <svg viewBox="0 0 280 540" width="240" style={{position:'relative',zIndex:2,filter:'drop-shadow(0 30px 60px rgba(0,0,0,.7))'}}>
              <rect x="8" y="0" width="264" height="540" rx="36" fill="#0a0e18" stroke="rgba(255,255,255,.15)" strokeWidth="1.5"/>
              <rect x="14" y="6" width="252" height="528" rx="32" fill="#050810"/>
              <rect x="0" y="120" width="6" height="40" rx="3" fill="#1a1f2e"/>
              <rect x="0" y="170" width="6" height="60" rx="3" fill="#1a1f2e"/>
              <rect x="274" y="140" width="6" height="55" rx="3" fill="#1a1f2e"/>
              <rect x="100" y="10" width="80" height="24" rx="12" fill="#0a0e18"/>
              <circle cx="140" cy="22" r="5" fill="#1a2030"/>
              <text x="22" y="46" fill="rgba(255,255,255,.5)" fontSize="9" fontFamily="Inter,sans-serif">9:41</text>
              <text x="210" y="46" fill="rgba(255,255,255,.5)" fontSize="9" fontFamily="Inter,sans-serif">100%</text>
              <rect x="14" y="50" width="252" height="44" fill="#0d1420"/>
              <text x="26" y="68" fill="white" fontSize="10" fontFamily="Inter,sans-serif" fontWeight="700">Hokkai Markets</text>
              <rect x="186" y="58" width="60" height="18" rx="9" fill="#E50914"/>
              <text x="196" y="71" fill="white" fontSize="8" fontFamily="Inter,sans-serif" fontWeight="600">+ Deposit</text>
              <rect x="14" y="94" width="252" height="80" fill="#0a0f1a"/>
              <text x="26" y="112" fill="rgba(255,255,255,.4)" fontSize="8" fontFamily="JetBrains Mono,monospace">TOTAL PORTFOLIO</text>
              <text x="26" y="136" fill="white" fontSize="22" fontFamily="Inter,sans-serif" fontWeight="800">$24,850.32</text>
              <text x="26" y="154" fill="#00d4aa" fontSize="10" fontFamily="JetBrains Mono,monospace">+$312.45  (+1.27%) today</text>
              <rect x="14" y="174" width="252" height="120" fill="#060a12"/>
              <text x="26" y="192" fill="rgba(255,255,255,.4)" fontSize="8" fontFamily="JetBrains Mono,monospace">EUR/USD  H1</text>
              <text x="180" y="192" fill="#00d4aa" fontSize="8" fontFamily="JetBrains Mono,monospace">1.08514  +0.23%</text>
              <line x1="35" y1="215" x2="35" y2="268" stroke="#E50914" strokeWidth="1"/><rect x="30" y="220" width="10" height="30" fill="#E50914"/>
              <line x1="55" y1="205" x2="55" y2="255" stroke="#00d4aa" strokeWidth="1"/><rect x="50" y="210" width="10" height="28" fill="#00d4aa"/>
              <line x1="75" y1="200" x2="75" y2="248" stroke="#00d4aa" strokeWidth="1"/><rect x="70" y="205" width="10" height="26" fill="#00d4aa"/>
              <line x1="95" y1="210" x2="95" y2="258" stroke="#E50914" strokeWidth="1"/><rect x="90" y="215" width="10" height="28" fill="#E50914"/>
              <line x1="115" y1="196" x2="115" y2="242" stroke="#00d4aa" strokeWidth="1"/><rect x="110" y="200" width="10" height="24" fill="#00d4aa"/>
              <rect x="14" y="294" width="252" height="68" fill="#0d1420"/>
              <text x="26" y="312" fill="rgba(255,255,255,.4)" fontSize="8" fontFamily="JetBrains Mono,monospace">QUICK TRADE</text>
              <rect x="26" y="320" width="95" height="30" rx="8" fill="#E50914"/>
              <text x="50" y="339" fill="white" fontSize="11" fontFamily="Inter,sans-serif" fontWeight="700">BUY</text>
              <rect x="145" y="320" width="95" height="30" rx="8" fill="rgba(0,212,170,.15)" stroke="rgba(0,212,170,.4)" strokeWidth="1"/>
              <text x="167" y="339" fill="#00d4aa" fontSize="11" fontFamily="Inter,sans-serif" fontWeight="700">SELL</text>
              <rect x="14" y="362" width="252" height="110" fill="#060a12"/>
              <text x="26" y="380" fill="rgba(255,255,255,.4)" fontSize="8" fontFamily="JetBrains Mono,monospace">MY WATCHLIST</text>
              <text x="26" y="398" fill="white" fontSize="9" fontFamily="Inter,sans-serif">EUR/USD</text>
              <text x="180" y="398" fill="#00d4aa" fontSize="9" fontFamily="JetBrains Mono,monospace">1.08514  +0.23%</text>
              <text x="26" y="416" fill="white" fontSize="9" fontFamily="Inter,sans-serif">XAU/USD</text>
              <text x="180" y="416" fill="#E50914" fontSize="9" fontFamily="JetBrains Mono,monospace">2038.4   -0.11%</text>
              <text x="26" y="434" fill="white" fontSize="9" fontFamily="Inter,sans-serif">BTC/USD</text>
              <text x="174" y="434" fill="#00d4aa" fontSize="9" fontFamily="JetBrains Mono,monospace">67,842   +1.42%</text>
              <rect x="14" y="472" width="252" height="54" fill="#0d1420"/>
            </svg>
            <div className="fu d2" style={{position:'absolute',top:'40px',left:'-20px',background:'#0d1420',border:'1px solid rgba(0,212,170,.3)',borderRadius:'10px',padding:'.6rem .9rem',minWidth:'150px',boxShadow:'0 8px 24px rgba(0,0,0,.5)',zIndex:3}}>
              <div style={{fontSize:'.65rem',color:'rgba(0,212,170,.7)',fontFamily:"'JetBrains Mono',monospace",marginBottom:'.2rem'}}>PRICE ALERT</div>
              <div style={{fontSize:'.8rem',fontWeight:600}}>EUR/USD hit 1.0850</div>
              <div style={{fontSize:'.65rem',color:'var(--g400)',marginTop:'.1rem'}}>2 mins ago</div>
            </div>
            <div className="fu d3" style={{position:'absolute',bottom:'80px',right:'-25px',background:'#0d1420',border:'1px solid rgba(229,9,20,.3)',borderRadius:'10px',padding:'.6rem .9rem',minWidth:'140px',boxShadow:'0 8px 24px rgba(0,0,0,.5)',zIndex:3}}>
              <div style={{fontSize:'.65rem',color:'rgba(229,9,20,.7)',fontFamily:"'JetBrains Mono',monospace",marginBottom:'.2rem'}}>ORDER FILLED</div>
              <div style={{fontSize:'.8rem',fontWeight:600}}>BUY 0.5 XAU/USD</div>
              <div style={{fontSize:'.65rem',color:'#00d4aa',marginTop:'.1rem'}}>+$142.50 profit</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
