import { useState, useEffect, useRef } from 'react'

const initialPrices = {
  'EUR/USD': { p: 1.08540, base: 1.08540, dp: 5, min: 1.05, max: 1.12 },
  'GBP/USD': { p: 1.27010, base: 1.27010, dp: 5, min: 1.22, max: 1.32 },
  'USD/JPY': { p: 149.820, base: 149.820, dp: 3, min: 145, max: 155 },
  'XAU/USD': { p: 2034.50, base: 2034.50, dp: 2, min: 1900, max: 2100 },
  'BTC/USD': { p: 43215, base: 43215, dp: 0, min: 38000, max: 50000 },
  'ETH/USD': { p: 2284, base: 2284, dp: 2, min: 1800, max: 3000 },
  'US30':    { p: 38654, base: 38654, dp: 0, min: 36000, max: 41000 },
  'NAS100':  { p: 17842, base: 17842, dp: 0, min: 16000, max: 19500 },
  'USOIL':   { p: 78.42, base: 78.42, dp: 2, min: 70, max: 90 },
  'USD/CAD': { p: 1.3601, base: 1.3601, dp: 5, min: 1.32, max: 1.40 },
}

function fmt(val, dp) {
  if (dp === 0) return val.toLocaleString('en-US')
  return val.toFixed(dp)
}

export default function Ticker({ onPriceUpdate }) {
  const [prices, setPrices] = useState(() =>
    Object.fromEntries(Object.entries(initialPrices).map(([k, v]) => [k, { ...v }]))
  )

  useEffect(() => {
    const iv = setInterval(() => {
      setPrices(prev => {
        const next = { ...prev }
        Object.keys(next).forEach(sym => {
          const p = { ...next[sym] }
          const change = (Math.random() - 0.499) * p.base * 0.0008
          p.p = Math.max(p.min, Math.min(p.max, p.p + change))
          next[sym] = p
        })
        if (onPriceUpdate) onPriceUpdate(next)
        return next
      })
    }, 1800)
    return () => clearInterval(iv)
  }, [onPriceUpdate])

  const items = Object.entries(prices).map(([sym, p]) => {
    const pct = ((p.p - p.base) / p.base * 100)
    const up = pct >= 0
    return { sym, price: fmt(p.p, p.dp), pct: Math.abs(pct).toFixed(2), up }
  })

  const allItems = [...items, ...items, ...items]

  return (
    <div className="ticker-bar">
      <div className="ticker-live">
        <div className="dot-g"></div>
        <span style={{ fontSize: '.65rem', color: 'var(--green)', fontFamily: "'JetBrains Mono',monospace", letterSpacing: '.1em', marginLeft: '.3rem' }}>LIVE</span>
      </div>
      <div className="ticker-wrap">
        <div className="ticker-track" id="tickerTrack">
          {allItems.map((item, i) => (
            <div className="ti" key={i}>
              <span className="ti-sym">{item.sym}</span>
              <span className="ti-sep">|</span>
              <span className="ti-price">{item.price}</span>
              <span className={item.up ? 'ti-up' : 'ti-dn'}>
                <span className={item.up ? 'dot-g' : 'dot-r'}></span>
                {item.up ? '▲+' : '▼-'}{item.pct}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
