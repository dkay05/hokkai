import { Link } from 'react-router-dom'

export default function FloatingButtons({ onChatOpen }) {
  return (
    <div className="float-btns">
      <a
        className="float-wa"
        href="https://wa.me/+1234567890?text=Hello%20Hokkai%20Markets%2C%20I%20need%20help"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="float-wa-ico">
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <rect x="5" y="2" width="14" height="20" rx="2"/>
            <circle cx="12" cy="17" r="1" fill="currentColor"/>
          </svg>
        </span>
        <span className="float-label">WhatsApp</span>
      </a>
      <Link to="/trading/live-charts" className="float-chat">
        <span className="float-pulse"></span>
        <span className="float-label">Live Chart</span>
      </Link>
    </div>
  )
}
