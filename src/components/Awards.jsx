export default function Awards() {
  return (
    <section className="sec awards-sec" id="awards">
      <div className="sec-in">
        <div className="tc">
          <div className="sbw"><div className="sbl"></div><span className="sbt">Recognition</span><div className="sbl"></div></div>
          <h2 className="sh">AWARDS &amp; <span className="r">RECOGNITION</span></h2>
          <div className="sd c"></div>
          <p className="ss">Trusted and recognized by leading industry organizations worldwide.</p>
        </div>

        <div className="tp-box">
          <div>
            <div className="tp-stars">★★★★★</div>
            <div style={{fontSize:'.65rem',color:'var(--g400)',fontFamily:"'JetBrains Mono',monospace",marginTop:'.2rem'}}>TRUSTPILOT</div>
          </div>
          <div>
            <div className="tp-score">4.8 / 5</div>
            <div className="tp-label">Excellent Rating</div>
            <div className="tp-count">Based on 1,200+ verified reviews</div>
          </div>
          <div style={{marginLeft:'auto',textAlign:'right'}}>
            <div style={{fontSize:'.75rem',fontWeight:700,color:'var(--g300)',marginBottom:'.3rem'}}>What traders say:</div>
            <div style={{fontSize:'.78rem',color:'var(--g400)',fontStyle:'italic',maxWidth:'320px'}}>"Best execution speed I've experienced. Spreads are consistently tight even during news."</div>
            <div style={{fontSize:'.68rem',color:'var(--g500)',marginTop:'.3rem'}}>— Verified Trustpilot Review</div>
          </div>
        </div>

        <div className="awards-grid">
          <div className="award-card">
            <div className="award-ico"><svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M12 2L3 7v6c0 5 4 9.5 9 11 5-1.5 9-6 9-11V7L12 2z"/></svg></div>
            <div className="award-name">FSC Regulated</div>
            <div className="award-org">Financial Services Commission</div>
            <div className="award-year">License Applied 2024</div>
          </div>
          <div className="award-card">
            <div className="award-ico"><svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="11" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></svg></div>
            <div className="award-name">256-bit SSL</div>
            <div className="award-org">Bank-Grade Encryption</div>
            <div className="award-year">Always Active</div>
          </div>
          <div className="award-card">
            <div className="award-ico">💰</div>
            <div className="award-name">Segregated Funds</div>
            <div className="award-org">Tier-1 Banking Partners</div>
            <div className="award-year">100% Protected</div>
          </div>
          <div className="award-card">
            <div className="award-ico"><svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M13 2L4.5 13H12L11 22l8.5-11H12L13 2z"/></svg></div>
            <div className="award-name">Ultra-Fast Execution</div>
            <div className="award-org">Sub-Millisecond Speed</div>
            <div className="award-year">99.9% Uptime SLA</div>
          </div>
        </div>

        <div className="press-strip">
          {['Bloomberg','Reuters','Forbes','Investing.com','Financial Services Commission','FX Street'].map((p, i, arr) => (
            <span key={p}>
              <span className="press-logo">{p}</span>
              {i < arr.length - 1 && <span style={{color:'rgba(255,255,255,.1)'}}> | </span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
