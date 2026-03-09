import { useLanguage } from '../contexts/LanguageContext'

export default function StatsBar() {
  const { t } = useLanguage()
  return (
    <div className="stats-bar">
      <div className="stats-grid">
        <div className="stat fu"><div className="stat-v">99.9%</div><div className="stat-l">{t('statsBar.serverUptime')}</div></div>
        <div className="stat fu d1"><div className="stat-v">60+</div><div className="stat-l">{t('statsBar.tradingInstruments')}</div></div>
        <div className="stat fu d2"><div className="stat-v">24/5</div><div className="stat-l">{t('statsBar.customerSupport')}</div></div>
        <div className="stat fu d3"><div className="stat-v">0.0 pips</div><div className="stat-l">{t('statsBar.spreadsFrom')}</div></div>
      </div>
    </div>
  )
}
