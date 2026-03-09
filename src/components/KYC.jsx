export default function KYC() {
  return (
    <section className="sec kyc-sec" id="kyc">
      <div className="sec-in">
        <div className="tc fu">
          <div className="sbw"><div className="sbl"></div><span className="sbt">KYC Process</span><div className="sbl"></div></div>
          <h2 className="sh">SIMPLE <span className="r">VERIFICATION</span> PROCESS</h2>
          <div className="sd c"></div>
          <p className="ss">Complete your identity verification in minutes. KYC protects you and ensures full regulatory compliance.</p>
        </div>
        <div className="kyc-steps">
          {[
            { n:'01', ico:'📝', title:'Register Account', desc:"Fill in basic personal details — name, email, country, and date of birth." },
            { n:'02', ico:'📸', title:'Upload Documents', desc:"Submit your government-issued ID and proof of address through our secure portal." },
            { n:'03', ico:'✅', title:'Verification Review', desc:"Our compliance team reviews your documents. Approval usually takes less than 1 hour." },
            { n:'04', ico:'🚀', title:'Start Trading', desc:"Once verified, deposit funds and start trading immediately across all instruments." },
          ].map((s, i) => (
            <div key={s.n} className={`kyc-step fu${i > 0 ? ` d${i}` : ''}`}>
              <div className="kyc-step-num">{s.n}</div>
              <div className="kyc-step-ico">{s.ico}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="kyc-docs">
          {[
            { ico:'🪪', title:'Government-Issued ID', desc:"Passport, National ID card, or Driver's License. Must be valid and clearly legible." },
            { ico:'📄', title:'Proof of Address', desc:"Bank statement, utility bill, or government letter. Must be dated within last 3 months." },
            { ico:'🤳', title:'Selfie Verification', desc:"A clear selfie holding your ID document. Ensures the account belongs to you." },
          ].map((d, i) => (
            <div key={d.title} className={`kyc-doc fu${i > 0 ? ` d${i}` : ''}`}>
              <div className="kyc-doc-ico">{d.ico}</div>
              <div>
                <h5>{d.title}</h5>
                <p>{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
