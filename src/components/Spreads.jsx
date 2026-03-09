import { useLanguage } from '../contexts/LanguageContext'

export default function Spreads() {
  const { t } = useLanguage()
  const rows = [
    { sym: 'EUR/USD', std: '1.5', ecn: '0.0', comm: '$3.5/lot', cat: 'Forex' },
    { sym: 'GBP/USD', std: '1.8', ecn: '0.0', comm: '$3.5/lot', cat: 'Forex' },
    { sym: 'USD/JPY', std: '1.5', ecn: '0.0', comm: '$3.5/lot', cat: 'Forex' },
    { sym: 'AUD/USD', std: '1.6', ecn: '0.1', comm: '$3.5/lot', cat: 'Forex' },
    { sym: 'USD/CAD', std: '2.0', ecn: '0.2', comm: '$3.5/lot', cat: 'Forex' },
    { sym: 'XAU/USD', std: '0.30', ecn: '0.10', comm: '$4/lot', cat: 'Metals' },
    { sym: 'XAG/USD', std: '0.03', ecn: '0.02', comm: '$4/lot', cat: 'Metals' },
    { sym: 'BTC/USD', std: '40', ecn: '25', comm: '$5/lot', cat: 'Crypto' },
    { sym: 'ETH/USD', std: '3.0', ecn: '2.0', comm: '$5/lot', cat: 'Crypto' },
    { sym: 'US30', std: '3.0', ecn: '1.5', comm: '$5/lot', cat: 'Indices' },
    { sym: 'NAS100', std: '2.0', ecn: '1.0', comm: '$5/lot', cat: 'Indices' },
    { sym: 'OIL/USD', std: '0.05', ecn: '0.03', comm: '$4/lot', cat: 'Commodities' },
  ]

  return (
    <section className="sec spreads-sec" id="spreads">
      <div className="sec-in">
        <div className="tc fu">
          <div className="sbw"><div className="sbl"></div><span className="sbt">{t('spreads.title')}</span><div className="sbl"></div></div>
          <h2 className="sh">{t('spreads.headline')} <span className="r">{t('spreads.headlineHighlight')}</span></h2>
          <div className="sd c"></div>
          <p className="ss">{t('spreads.description')}</p>
        </div>

        <div>
          <table className="spreads-table">
            <thead>
              <tr>
                <th>{t('spreads.table.instrument')}</th>
                <th>{t('spreads.table.category')}</th>
                <th>{t('spreads.table.standardSpread')}</th>
                <th style={{color:'var(--red)'}}>{t('spreads.table.ecnRawSpread')}</th>
                <th>{t('spreads.table.ecnCommission')}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(r => (
                <tr key={r.sym}>
                  <td className="pair">{r.sym}</td>
                  <td><span style={{fontSize:'.7rem',background:'rgba(229,9,20,.08)',border:'1px solid rgba(229,9,20,.15)',borderRadius:'4px',padding:'.15rem .45rem'}}>{r.cat}</span></td>
                  <td>{r.std} pips</td>
                  <td className="low">{r.ecn} pips</td>
                  <td>{r.comm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="spread-note">{t('spreads.note')}</div>
      </div>
    </section>
  )
}
