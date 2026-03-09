import { useState } from 'react'

export default function CookieBanner() {
  const [hidden, setHidden] = useState(() => {
    try { return !!localStorage.getItem('hk_cookie') } catch { return false }
  })

  const accept = () => {
    try { localStorage.setItem('hk_cookie', '1') } catch {}
    setHidden(true)
  }

  if (hidden) return null

  return (
    <div className="cookie-banner" id="cookieBanner">
      <div className="cookie-text">
        🍪 We use cookies to enhance your browsing experience and analyze site traffic. By clicking "Accept", you agree to our{' '}
        <a href="#">Cookie Policy</a> and <a href="#">Privacy Policy</a>.
      </div>
      <div className="cookie-btns">
        <button className="cookie-decline" onClick={accept}>Decline</button>
        <button className="cookie-accept" onClick={accept}>Accept All Cookies</button>
      </div>
    </div>
  )
}
