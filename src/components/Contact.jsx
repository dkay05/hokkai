import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handle = e => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  const channels = [
    { icon: '💬', title: 'Live Chat', sub: 'Instant response — average reply in under 60 seconds', badge: '● Online', badgeClass: 'cm-online', href: '#' },
    { icon: '📱', title: 'WhatsApp Support', sub: '+1 (234) 567-8900 — For India, UAE, Pakistan clients', badge: 'Fast', badgeClass: 'cm-fast', href: 'https://wa.me/+1234567890' },
    { icon: '📧', title: 'Email Support', sub: 'support@hokkaimarkets.com — Reply within 1 hour', badge: '1hr', badgeClass: 'cm-fast', href: 'mailto:support@hokkaimarkets.com' },
    { icon: '📞', title: 'Phone Support', sub: '+1 (234) 567-8900 — Mon–Fri, 9AM–6PM UTC', badge: 'Business hrs', badgeClass: '', href: 'tel:+1234567890' },
    { icon: '✈️', title: 'Telegram Community', sub: '@HokkaiMarkets — Daily signals, news & support', badge: '● Active', badgeClass: 'cm-online', href: '#' },
    { icon: '❓', title: 'FAQ & Help Center', sub: 'Browse 50+ answers to common questions', badge: 'Instant', badgeClass: 'cm-fast', href: '#faq' },
  ]

  return (
    <section className="sec contact-sec" id="support">
      <div className="sec-in">
        <div className="tc">
          <div className="sbw"><div className="sbl"></div><span className="sbt">Support</span><div className="sbl"></div></div>
          <h2 className="sh">24/5 CUSTOMER <span className="r">SUPPORT</span></h2>
          <div className="sd c"></div>
          <p className="ss">Our multilingual support team is here to help you in English, Hindi, Arabic, and Japanese.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-methods fu">
            {channels.map(c => (
              <a key={c.title} className="cm-item" href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                <div className="cm-ico">{c.icon}</div>
                <div>
                  <div className="cm-title">{c.title}</div>
                  <div className="cm-sub">{c.sub}</div>
                </div>
                <span className={`cm-badge ${c.badgeClass}`} style={!c.badgeClass ? { background: 'rgba(148,163,184,.1)', color: 'var(--g400)' } : {}}>{c.badge}</span>
              </a>
            ))}
          </div>

          <div className="fu d1">
            <div className="contact-form-box">
              {sent ? (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                  <h3 style={{ marginBottom: '.5rem' }}>Message Sent!</h3>
                  <p>Our support team will respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handle}>
                  <h3>Send Us a Message</h3>
                  <p>Fill in the form and our team will get back to you within 1 hour.</p>
                  <div className="cf-field"><label>Full Name</label><input type="text" placeholder="Your full name" required /></div>
                  <div className="cf-field"><label>Email</label><input type="email" placeholder="your@email.com" required /></div>
                  <div className="cf-field">
                    <label>Subject</label>
                    <select defaultValue="">
                      <option value="" disabled>Select a topic</option>
                      <option>Account Opening</option>
                      <option>Deposits &amp; Withdrawals</option>
                      <option>Technical Support</option>
                      <option>Trading Conditions</option>
                      <option>Verification / KYC</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="cf-field"><label>Message</label><textarea placeholder="Describe your question or issue..." rows={4} required /></div>
                  <button type="submit" className="btn-p" style={{ width: '100%', border: 'none', cursor: 'pointer', fontFamily: 'Inter,sans-serif' }}>Send Message →</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
