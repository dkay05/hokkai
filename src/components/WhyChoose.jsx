import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

function CounterNum({ target, suffix = '', prefix = '' }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const counted = useRef(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !counted.current) {
        counted.current = true
        const isDecimal = target % 1 !== 0
        const dur = 1800
        let start = null
        const step = (ts) => {
          if (!start) start = ts
          const p = Math.min((ts - start) / dur, 1)
          const ease = 1 - Math.pow(1 - p, 3)
          const cur = ease * target
          setVal(isDecimal ? parseFloat(cur.toFixed(1)) : Math.floor(cur))
          if (p < 1) requestAnimationFrame(step)
          else setVal(target)
        }
        requestAnimationFrame(step)
      }
    }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])

  const isDecimal = target % 1 !== 0
  const display = isDecimal ? val.toFixed(1) : val.toLocaleString()

  return <div ref={ref} style={{ fontFamily: "'Michroma',sans-serif", fontSize: '2rem', fontWeight: 700, color: 'var(--red)' }}>{prefix}{display}{suffix}</div>
}

export default function WhyChoose() {
  const { t } = useLanguage()
  const cards = [
    { kj: '流動', icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M12 2C6 8 4 12 4 15a8 8 0 0016 0c0-3-2-7-8-13z"/></svg>, bg: 'rgba(229,9,20,.15)', titleKey: 'whyChoose.liquidity.title', descKey: 'whyChoose.liquidity.description' },
    { kj: '速度', icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M13 2L4.5 13H12L11 22l8.5-11H12L13 2z"/></svg>, bg: 'rgba(229,9,20,.15)', titleKey: 'whyChoose.execution.title', descKey: 'whyChoose.execution.description' },
    { kj: '透明', icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>, bg: 'rgba(0,212,170,.15)', titleKey: 'whyChoose.pricing.title', descKey: 'whyChoose.pricing.description' },
    { kj: '市場', icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></svg>, bg: 'rgba(59,130,246,.15)', titleKey: 'whyChoose.multiAsset.title', descKey: 'whyChoose.multiAsset.description' },
    { kj: '技術', icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="14" rx="2"/><path d="M8 21h8M12 18v3"/></svg>, bg: 'rgba(168,85,247,.15)', titleKey: 'whyChoose.technology.title', descKey: 'whyChoose.technology.description' },
    { kj: 'サポート', icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72 12.8 12.8 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45 12.8 12.8 0 002.81.7A2 2 0 0122 14.92z"/></svg>, bg: 'rgba(229,9,20,.15)', titleKey: 'whyChoose.support.title', descKey: 'whyChoose.support.description' },
  ]

  return (
    <section className="sec why-sec" id="why">
      <div className="sec-in">
        <div className="tc fu">
          <div className="sbw"><div className="sbl"></div><span className="sbt">{t('whyChoose.title')}</span><div className="sbl"></div></div>
          <h2 className="sh">{t('whyChoose.headline')} <span className="r">{t('whyChoose.headlineHighlight')}</span></h2>
          <div className="sd c"></div>
          <p className="ss">{t('whyChoose.description')}</p>
        </div>
        <div className="g3">
          {cards.map((c, i) => (
            <div className={`card fu${i > 0 ? ` d${i}` : ''}`} key={c.titleKey}>
              <div className="card-kj">{c.kj}</div>
              <div className="c-icon" style={{ background: c.bg }}>{c.icon}</div>
              <h3>{t(c.titleKey)}</h3>
              <p>{t(c.descKey)}</p>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.5rem', margin: '3.5rem 0 0', padding: '2rem 3rem', background: 'rgba(229,9,20,.05)', border: '1px solid rgba(229,9,20,.12)', borderRadius: '16px' }}>
          <div style={{ textAlign: 'center' }}>
            <CounterNum target={50000} suffix="+" />
            <div style={{ fontSize: '.75rem', color: 'var(--g400)', marginTop: '.4rem' }}>{t('whyChoose.stats.activeTraders')}</div>
          </div>
          <div style={{ textAlign: 'center', borderLeft: '1px solid rgba(255,255,255,.06)' }}>
            <CounterNum target={2} suffix="B+" prefix="$" />
            <div style={{ fontSize: '.75rem', color: 'var(--g400)', marginTop: '.4rem' }}>{t('whyChoose.stats.monthlyVolume')}</div>
          </div>
          <div style={{ textAlign: 'center', borderLeft: '1px solid rgba(255,255,255,.06)' }}>
            <CounterNum target={60} suffix="+" />
            <div style={{ fontSize: '.75rem', color: 'var(--g400)', marginTop: '.4rem' }}>{t('whyChoose.stats.countries')}</div>
          </div>
          <div style={{ textAlign: 'center', borderLeft: '1px solid rgba(255,255,255,.06)' }}>
            <CounterNum target={4.8} suffix="★" />
            <div style={{ fontSize: '.75rem', color: 'var(--g400)', marginTop: '.4rem' }}>{t('whyChoose.stats.clientRating')}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
