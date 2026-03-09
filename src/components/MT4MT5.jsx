import { useState } from 'react'

export default function MT4MT5() {
  const [tab, setTab] = useState('mt4')

  const checkIcon = <svg width="16" height="16" fill="none" stroke="var(--red)" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>

  return (
    <section className="sec" id="mt4mt5" style={{background:'linear-gradient(180deg,var(--dark800),var(--dark900))'}}>
      <div className="sec-in">
        <div className="tc fu">
          <div className="sbw c"><div className="sbl"></div><span className="sbt">MetaTrader</span><div className="sbl"></div></div>
          <h2 className="sh">MT4 &amp; MT5 <span className="r">PLATFORMS</span></h2>
          <div className="sd c"></div>
          <p className="ss">Industry-standard MetaTrader platforms — the world's most popular trading software used by millions of traders globally.</p>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',background:'rgba(255,255,255,.03)',border:'1px solid rgba(255,255,255,.07)',borderRadius:'14px',overflow:'hidden',margin:'2rem 0'}}>
          {[{id:'mt4',label:'MetaTrader 4 (MT4)'},{id:'mt5',label:'MetaTrader 5 (MT5)'},{id:'wt',label:'WebTrader'}].map((t,i) => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{padding:'1rem 1.5rem',background:tab===t.id?'var(--red)':'transparent',color:tab===t.id?'#fff':'var(--g400)',border:'none',cursor:'pointer',fontWeight:tab===t.id?700:600,fontSize:'.88rem',display:'flex',alignItems:'center',justifyContent:'center',gap:'.6rem',fontFamily:'Inter,sans-serif',borderLeft:i>0?'1px solid rgba(255,255,255,.07)':'none',transition:'all .2s'}}>
              {t.id==='wt'
                ? <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                : <svg width="22" height="22" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill={tab===t.id?"rgba(255,255,255,.18)":"rgba(255,255,255,.06)"}/><text x="2" y="22" fill={tab===t.id?"white":"currentColor"} fontSize="14" fontFamily="Impact,sans-serif">{t.id.toUpperCase()}</text></svg>}
              {t.label}
            </button>
          ))}
        </div>

        {/* MT4 Panel */}
        {tab === 'mt4' && (
          <div style={{display:'grid',gridTemplateColumns:'1fr 1.1fr',gap:'3.5rem',alignItems:'start'}}>
            <div>
              <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.65rem',letterSpacing:'.12em',color:'var(--red)',marginBottom:'.75rem'}}>METATRADER 4</div>
              <h3 style={{fontSize:'1.6rem',fontWeight:800,marginBottom:'.75rem',lineHeight:1.2}}>The World's #1 Trading Platform</h3>
              <p style={{fontSize:'.88rem',color:'var(--g400)',lineHeight:1.85,marginBottom:'1.75rem'}}>MT4 is the industry standard for forex trading. With powerful charting tools, automated trading via Expert Advisors, and a massive global community, MT4 remains the top choice for traders worldwide.</p>
              <div style={{display:'flex',flexDirection:'column',gap:0,marginBottom:'2rem'}}>
                {['30+ built-in technical indicators','Automated trading with Expert Advisors (EAs)','9 timeframes from M1 to Monthly','One-click trading execution','Strategy Tester for backtesting EAs','Mobile app for iOS & Android'].map(f=>(
                  <div key={f} style={{display:'flex',alignItems:'center',gap:'.75rem',padding:'.65rem 0',borderBottom:'1px solid rgba(255,255,255,.05)'}}>{checkIcon}<span style={{fontSize:'.85rem',color:'var(--g300)'}}>{f}</span></div>
                ))}
              </div>
              <div style={{display:'flex',gap:'.65rem',flexWrap:'wrap'}}>
                {['iOS','Android','Windows','macOS'].map(p=>(
                  <a key={p} href="#" style={{display:'flex',alignItems:'center',gap:'.5rem',background:'rgba(255,255,255,.05)',border:'1px solid rgba(255,255,255,.1)',borderRadius:'9px',padding:'.6rem 1.1rem',textDecoration:'none',fontSize:'.8rem',color:'var(--g300)',transition:'border-color .2s'}}>{p}</a>
                ))}
              </div>
            </div>
            <div className="fu d1" style={{background:'#080d18',border:'1px solid rgba(255,255,255,.08)',borderRadius:'16px',overflow:'hidden'}}>
              <svg viewBox="0 0 560 370" width="100%" style={{display:'block'}}>
                <rect width="560" height="370" fill="#070c16"/>
                <rect x="0" y="0" width="560" height="22" fill="#0d1525"/>
                <text x="8" y="15" fill="rgba(255,255,255,.4)" fontSize="7.5" fontFamily="Inter,sans-serif">File  View  Insert  Charts  Tools  Window  Help</text>
                <rect x="0" y="40" width="96" height="280" fill="#090e1a"/>
                <text x="5" y="53" fill="rgba(255,255,255,.25)" fontSize="6.5" fontFamily="Inter,sans-serif">Market Watch</text>
                <text x="4" y="70" fill="rgba(255,255,255,.6)" fontSize="6" fontFamily="JetBrains Mono,monospace">EURUSD</text><text x="56" y="70" fill="#00d4aa" fontSize="6" fontFamily="JetBrains Mono,monospace">1.0851</text>
                <text x="4" y="82" fill="rgba(255,255,255,.6)" fontSize="6" fontFamily="JetBrains Mono,monospace">GBPUSD</text><text x="56" y="82" fill="#E50914" fontSize="6" fontFamily="JetBrains Mono,monospace">1.2701</text>
                <text x="4" y="94" fill="rgba(255,255,255,.6)" fontSize="6" fontFamily="JetBrains Mono,monospace">XAUUSD</text><text x="56" y="94" fill="#00d4aa" fontSize="6" fontFamily="JetBrains Mono,monospace">2038.4</text>
                <rect x="96" y="40" width="464" height="230" fill="#060a12"/>
                <rect x="96" y="40" width="464" height="16" fill="#0c1420"/>
                <text x="103" y="51" fill="rgba(255,255,255,.45)" fontSize="7" fontFamily="JetBrains Mono,monospace">EURUSD,H1  Bid: 1.08514  Ask: 1.08516  Spread: 0.2</text>
                <line x1="96" y1="90" x2="560" y2="90" stroke="rgba(255,255,255,.04)" strokeWidth="1"/>
                <line x1="96" y1="140" x2="560" y2="140" stroke="rgba(255,255,255,.04)" strokeWidth="1"/>
                <line x1="96" y1="190" x2="560" y2="190" stroke="rgba(255,255,255,.04)" strokeWidth="1"/>
                <line x1="115" y1="168" x2="115" y2="232" stroke="#E50914" strokeWidth=".8"/><rect x="110" y="176" width="10" height="42" fill="#E50914"/>
                <line x1="135" y1="152" x2="135" y2="210" stroke="#00d4aa" strokeWidth=".8"/><rect x="130" y="160" width="10" height="32" fill="#00d4aa"/>
                <line x1="155" y1="142" x2="155" y2="198" stroke="#00d4aa" strokeWidth=".8"/><rect x="150" y="150" width="10" height="28" fill="#00d4aa"/>
                <line x1="195" y1="130" x2="195" y2="185" stroke="#00d4aa" strokeWidth=".8"/><rect x="190" y="138" width="10" height="26" fill="#00d4aa"/>
                <line x1="255" y1="108" x2="255" y2="160" stroke="#00d4aa" strokeWidth=".8"/><rect x="250" y="116" width="10" height="22" fill="#00d4aa"/>
                <line x1="375" y1="75" x2="375" y2="120" stroke="#00d4aa" strokeWidth=".8"/><rect x="370" y="83" width="10" height="18" fill="#00d4aa"/>
                <line x1="435" y1="65" x2="435" y2="108" stroke="#00d4aa" strokeWidth=".8"/><rect x="430" y="73" width="10" height="16" fill="#00d4aa"/>
                <polyline points="110,218 130,202 150,192 210,163 270,143 330,127 390,112 450,100 510,91" fill="none" stroke="#9b59b6" strokeWidth="1.4" opacity=".8"/>
                <line x1="96" y1="186" x2="526" y2="186" stroke="rgba(229,9,20,.25)" strokeWidth=".8" strokeDasharray="4,4"/>
                <rect x="526" y="180" width="34" height="13" rx="2" fill="#E50914"/>
                <text x="528" y="190" fill="white" fontSize="6.5" fontFamily="JetBrains Mono,monospace">1.0851</text>
                <rect x="96" y="270" width="464" height="50" fill="#090e1a"/>
                <text x="103" y="299" fill="#00d4aa" fontSize="6" fontFamily="JetBrains Mono,monospace">12847351  EURUSD  Buy  0.50  1.08420  +$47.00</text>
                <rect x="0" y="320" width="560" height="20" fill="#0a0f1a"/>
                <circle cx="12" cy="330" r="4" fill="#00d4aa"/>
                <text x="20" y="334" fill="rgba(255,255,255,.35)" fontSize="6.5" fontFamily="JetBrains Mono,monospace">Connected to Hokkai-Live  |  Ping: 12ms  |  Balance: $10,420.00</text>
              </svg>
            </div>
          </div>
        )}

        {/* MT5 Panel */}
        {tab === 'mt5' && (
          <div style={{display:'grid',gridTemplateColumns:'1fr 1.1fr',gap:'3.5rem',alignItems:'start'}}>
            <div>
              <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.65rem',letterSpacing:'.12em',color:'var(--red)',marginBottom:'.75rem'}}>METATRADER 5</div>
              <h3 style={{fontSize:'1.6rem',fontWeight:800,marginBottom:'.75rem',lineHeight:1.2}}>The Next-Generation Trading Platform</h3>
              <p style={{fontSize:'.88rem',color:'var(--g400)',lineHeight:1.85,marginBottom:'1.75rem'}}>MT5 is the latest evolution of MetaTrader — featuring multi-asset trading, 21 timeframes, enhanced backtesting, and support for stocks, futures, and options.</p>
              <div style={{display:'flex',flexDirection:'column',gap:0,marginBottom:'2rem'}}>
                {['21 timeframes from M1 to Monthly','82 built-in technical indicators','Multi-asset: Forex, Stocks, Futures, Options','Depth of Market (DOM)','MQL5 algo trading with cloud strategy testing','Built-in economic calendar'].map(f=>(
                  <div key={f} style={{display:'flex',alignItems:'center',gap:'.75rem',padding:'.65rem 0',borderBottom:'1px solid rgba(255,255,255,.05)'}}>{checkIcon}<span style={{fontSize:'.85rem',color:'var(--g300)'}}>{f}</span></div>
                ))}
              </div>
              <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'.75rem',marginTop:'1.75rem'}}>
                {[{n:'21',l:'Timeframes'},{n:'82',l:'Indicators'},{n:'6',l:'Asset Classes'}].map(s=>(
                  <div key={s.l} style={{background:'rgba(229,9,20,.06)',border:'1px solid rgba(229,9,20,.15)',borderRadius:'10px',padding:'1rem',textAlign:'center'}}>
                    <div style={{fontFamily:"'Michroma',sans-serif",fontSize:'1.5rem',color:'var(--red)',fontWeight:700}}>{s.n}</div>
                    <div style={{fontSize:'.68rem',color:'var(--g400)',marginTop:'.25rem'}}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="fu d1" style={{background:'#080d18',border:'1px solid rgba(255,255,255,.08)',borderRadius:'16px',overflow:'hidden'}}>
              <div style={{padding:'1rem 1.25rem',background:'#0d1525',borderBottom:'1px solid rgba(255,255,255,.06)',display:'flex',alignItems:'center',gap:'.5rem'}}>
                <svg width="18" height="18" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#E50914" opacity=".9"/><text x="2" y="22" fill="white" fontSize="14" fontFamily="Impact,sans-serif">MT5</text></svg>
                <span style={{fontSize:'.82rem',fontWeight:700,color:'white'}}>MetaTrader 5</span>
                <span style={{marginLeft:'auto',fontSize:'.65rem',color:'#00d4aa',fontFamily:"'JetBrains Mono',monospace"}}>● Available Now</span>
              </div>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1px',background:'rgba(255,255,255,.04)'}}>
                {[['Order Types','Market, Limit, Stop, Stop-Limit'],['Execution','Instant & Market'],['Hedging','✓ Supported'],['Netting','✓ Supported'],['EA Trading','MQL5 Full'],['DOM','✓ Built-in']].map(([k,v])=>(
                  <div key={k} style={{background:'#080d18',padding:'1.25rem',borderTop:'1px solid rgba(255,255,255,.04)'}}>
                    <div style={{fontSize:'.65rem',color:'var(--g400)',fontFamily:"'JetBrains Mono',monospace",textTransform:'uppercase',marginBottom:'.35rem'}}>{k}</div>
                    <div style={{fontSize:'.88rem',fontWeight:600,color:v.includes('✓')?'#00d4aa':'inherit'}}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* WebTrader Panel */}
        {tab === 'wt' && (
          <div style={{display:'grid',gridTemplateColumns:'1fr 1.1fr',gap:'3.5rem',alignItems:'start'}}>
            <div>
              <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.65rem',letterSpacing:'.12em',color:'var(--red)',marginBottom:'.75rem'}}>HOKKAI WEBTRADER</div>
              <h3 style={{fontSize:'1.6rem',fontWeight:800,marginBottom:'.75rem',lineHeight:1.2}}>Trade Instantly — No Download Required</h3>
              <p style={{fontSize:'.88rem',color:'var(--g400)',lineHeight:1.85,marginBottom:'1.75rem'}}>Access the full power of professional trading directly in your browser. Optimized for speed and performance, the Hokkai WebTrader works seamlessly on Chrome, Safari, Firefox, and Edge.</p>
              <div style={{display:'flex',flexDirection:'column',gap:0,marginBottom:'2rem'}}>
                {['Instant access — no software installation','100+ technical indicators','Multi-chart view up to 9 charts','One-click order execution','Full account management & deposit/withdraw'].map(f=>(
                  <div key={f} style={{display:'flex',alignItems:'center',gap:'.75rem',padding:'.65rem 0',borderBottom:'1px solid rgba(255,255,255,.05)'}}>{checkIcon}<span style={{fontSize:'.85rem',color:'var(--g300)'}}>{f}</span></div>
                ))}
              </div>
              <a href="#portal" className="btn-red" style={{textDecoration:'none',display:'inline-flex'}}>Launch WebTrader →</a>
            </div>
            <div className="fu d1" style={{background:'#060a12',border:'1px solid rgba(255,255,255,.08)',borderRadius:'16px',overflow:'hidden'}}>
              <div style={{padding:'.55rem 1rem',background:'#0d1420',display:'flex',alignItems:'center',gap:'.4rem'}}>
                <div style={{width:'8px',height:'8px',borderRadius:'50%',background:'#E50914',opacity:.75}}></div>
                <div style={{width:'8px',height:'8px',borderRadius:'50%',background:'#f39c12',opacity:.75}}></div>
                <div style={{width:'8px',height:'8px',borderRadius:'50%',background:'#00d4aa',opacity:.75}}></div>
                <div style={{flex:1,background:'rgba(255,255,255,.06)',borderRadius:'4px',padding:'.22rem .65rem',fontSize:'.65rem',fontFamily:"'JetBrains Mono',monospace",color:'rgba(255,255,255,.3)',marginLeft:'.5rem'}}>🔒 hokkaimarkets.com/webtrader</div>
              </div>
              <svg viewBox="0 0 500 280" width="100%" style={{display:'block'}}>
                <rect width="500" height="280" fill="#060a12"/>
                <rect x="0" y="0" width="85" height="280" fill="#090e1a"/>
                <text x="6" y="18" fill="rgba(255,255,255,.2)" fontSize="6" fontFamily="JetBrains Mono,monospace">WATCHLIST</text>
                <text x="4" y="44" fill="#00d4aa" fontSize="6.5" fontFamily="JetBrains Mono,monospace">1.0851</text>
                <text x="4" y="66" fill="#00d4aa" fontSize="6.5" fontFamily="JetBrains Mono,monospace">2,038.4</text>
                <text x="4" y="88" fill="#E50914" fontSize="6.5" fontFamily="JetBrains Mono,monospace">67,842</text>
                <rect x="85" y="0" width="415" height="200" fill="#060a12"/>
                <rect x="85" y="0" width="415" height="18" fill="#0c1420"/>
                <text x="92" y="12" fill="rgba(255,255,255,.4)" fontSize="6.5" fontFamily="JetBrains Mono,monospace">EUR/USD  H1  ●  1.08514  ▲+0.23%</text>
                <line x1="104" y1="60" x2="104" y2="115" stroke="#E50914" strokeWidth=".7"/><rect x="100" y="68" width="8" height="30" fill="#E50914"/>
                <line x1="120" y1="48" x2="120" y2="100" stroke="#00d4aa" strokeWidth=".7"/><rect x="116" y="55" width="8" height="25" fill="#00d4aa"/>
                <line x1="136" y1="40" x2="136" y2="92" stroke="#00d4aa" strokeWidth=".7"/><rect x="132" y="47" width="8" height="23" fill="#00d4aa"/>
                <line x1="232" y1="18" x2="232" y2="62" stroke="#00d4aa" strokeWidth=".7"/><rect x="228" y="25" width="8" height="18" fill="#00d4aa"/>
                <line x1="312" y1="8" x2="312" y2="48" stroke="#00d4aa" strokeWidth=".7"/><rect x="308" y="15" width="8" height="16" fill="#00d4aa"/>
                <line x1="408" y1="1" x2="408" y2="37" stroke="#00d4aa" strokeWidth=".7"/><rect x="404" y="8" width="8" height="12" fill="#00d4aa"/>
                <rect x="85" y="200" width="415" height="80" fill="#090e1a"/>
                <text x="92" y="218" fill="rgba(255,255,255,.3)" fontSize="6" fontFamily="JetBrains Mono,monospace">ORDER PANEL</text>
                <rect x="96" y="225" width="80" height="28" rx="6" fill="#E50914"/>
                <text x="120" y="243" fill="white" fontSize="10" fontFamily="Inter,sans-serif" fontWeight="700">BUY</text>
                <rect x="186" y="225" width="80" height="28" rx="6" fill="rgba(0,212,170,.12)" stroke="rgba(0,212,170,.3)" strokeWidth="1"/>
                <text x="207" y="243" fill="#00d4aa" fontSize="10" fontFamily="Inter,sans-serif" fontWeight="700">SELL</text>
              </svg>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
