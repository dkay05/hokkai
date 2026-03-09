import { useState } from 'react'

const faqs = [
  { q: 'How do I open a trading account?', a: 'Opening an account takes less than 2 minutes. Click "Open Account", complete the registration form, verify your identity, and make your first deposit. You can start trading immediately.' },
  { q: 'What is the minimum deposit?', a: 'The minimum deposit for Standard accounts is $100. For ECN Raw accounts, the minimum is $500. Pro accounts require $5,000. VIP accounts have custom requirements.' },
  { q: 'What trading platforms are available?', a: 'We offer MetaTrader 4 (MT4), MetaTrader 5 (MT5), our proprietary WebTrader (browser-based), and a Mobile App for iOS and Android.' },
  { q: 'Are my funds safe with Hokkai Markets?', a: 'Yes. Hokkai Markets is regulated by the FSC. All client funds are held in segregated accounts with Tier-1 banking institutions. We also provide Negative Balance Protection.' },
  { q: 'What leverage is available?', a: 'Leverage options vary by account type and instrument. We offer flexible leverage up to 1:500 for forex pairs. Leverage for other instruments may differ.' },
  { q: 'How long do withdrawals take?', a: 'Withdrawal requests are processed within 24 hours. Credit/debit card withdrawals take 1-3 business days. Bank wire transfers take 2-5 business days depending on your bank.' },
  { q: 'Do you offer a demo account?', a: 'Yes! You can open a free demo account with virtual funds to practice trading without any risk. Demo accounts have the same features as live accounts.' },
  { q: 'Is scalping and EA trading allowed?', a: 'Yes. Scalping, hedging, and Expert Advisor (EA) automated trading are all permitted on ECN Raw and Pro accounts. All strategies are welcome.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="sec faq-sec" id="faq">
      <div className="sec-in">
        <div className="tc fu">
          <div className="sbw"><div className="sbl"></div><span className="sbt">FAQ</span><div className="sbl"></div></div>
          <h2 className="sh">FREQUENTLY ASKED <span className="r">QUESTIONS</span></h2>
          <div className="sd c"></div>
          <p className="ss">Everything you need to know about trading with Hokkai Markets.</p>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <div key={i} className={`faq-item${open === i ? ' open' : ''}`} onClick={() => setOpen(open === i ? null : i)}>
              <div className="faq-q">
                <span>{f.q}</span>
                <span className="faq-ar">▾</span>
              </div>
              <div className="faq-a">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
