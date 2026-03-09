import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export default function LiveCharts() {
  const { t } = useLanguage()
  const [active, setActive] = useState('forex')

  const tabs = [
    { id: 'forex', label: t('liveCharts.tabs.forex'), src: 'https://www.tradingview.com/widgetembed/?frameElementId=tradingview_forex&symbol=FX%3AEURUSD&interval=60&hidesidetoolbar=0&hidetoptoolbar=0&symboledit=1&saveimage=0&toolbarbg=0c1018&studies=[]&theme=dark&style=1&timezone=Etc%2FUTC&withdateranges=1&showpopupbutton=0&locale=en' },
    { id: 'gold', label: t('liveCharts.tabs.gold'), src: 'https://www.tradingview.com/widgetembed/?frameElementId=tradingview_gold&symbol=TVC%3AGOLD&interval=60&hidesidetoolbar=0&hidetoptoolbar=0&symboledit=1&saveimage=0&toolbarbg=0c1018&studies=[]&theme=dark&style=1&timezone=Etc%2FUTC&withdateranges=1&locale=en' },
    { id: 'crypto', label: t('liveCharts.tabs.crypto'), src: 'https://www.tradingview.com/widgetembed/?frameElementId=tradingview_btc&symbol=BINANCE%3ABTCUSDT&interval=60&hidesidetoolbar=0&hidetoptoolbar=0&symboledit=1&saveimage=0&toolbarbg=0c1018&studies=[]&theme=dark&style=1&timezone=Etc%2FUTC&withdateranges=1&locale=en' },
    { id: 'indices', label: t('liveCharts.tabs.indices'), src: 'https://www.tradingview.com/widgetembed/?frameElementId=tradingview_dj&symbol=TVC%3ANDI&interval=60&hidesidetoolbar=0&hidetoptoolbar=0&symboledit=1&saveimage=0&toolbarbg=0c1018&studies=[]&theme=dark&style=1&timezone=Etc%2FUTC&withdateranges=1&locale=en' },
  ]

  return (
    <section className="tv-sec" id="livecharts">
      <div className="tv-inner">
        <div className="tc" style={{marginBottom:'1.5rem'}}>
          <div className="sbw"><div className="sbl"></div><span className="sbt">{t('liveCharts.title')}</span><div className="sbl"></div></div>
          <h2 className="sh">{t('liveCharts.headline')} <span className="r">{t('liveCharts.headlineHighlight')}</span></h2>
          <div className="sd c"></div>
          <p className="ss">{t('liveCharts.description')}</p>
        </div>
        <div className="tv-tabs">
          {tabs.map(t => (
            <button key={t.id} className={`tv-tab${active === t.id ? ' active' : ''}`} onClick={() => setActive(t.id)}>{t.label}</button>
          ))}
        </div>
        {tabs.map(t => (
          <div key={t.id} className="tv-chart-wrap" style={{display: active === t.id ? 'block' : 'none'}}>
            <iframe src={t.src} allowTransparency="true" frameBorder="0" scrolling="no" allowFullScreen title={t.label}></iframe>
          </div>
        ))}
      </div>
    </section>
  )
}
