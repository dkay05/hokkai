import { useState } from 'react'

const terms = [
  { term: 'Pip', tag: 'Basic', def: 'The smallest price move in a currency pair. For most pairs, 1 pip = 0.0001. E.g. EUR/USD moves from 1.0850 to 1.0851 = 1 pip.' },
  { term: 'Lot Size', tag: 'Basic', def: 'The volume of a trade. Standard lot = 100,000 units. Mini lot = 10,000. Micro lot = 1,000 units.' },
  { term: 'Leverage', tag: 'Basic', def: 'Borrowed capital that amplifies your buying power. 1:500 leverage means $1 controls $500 in the market. Increases both profits and losses.' },
  { term: 'Margin', tag: 'Basic', def: 'The deposit required to open a leveraged position. With 1:500 leverage on a $100,000 lot, margin = $200.' },
  { term: 'Spread', tag: 'Cost', def: 'The difference between the Buy (Ask) and Sell (Bid) price. This is the broker\'s primary fee. Lower spread = lower trading cost.' },
  { term: 'Swap / Rollover', tag: 'Cost', def: 'Interest charged or earned when holding a position overnight. Depends on the interest rate differential between currencies.' },
  { term: 'Stop Loss', tag: 'Risk', def: 'An order to automatically close a trade at a specified price to limit your loss. Essential for risk management.' },
  { term: 'Take Profit', tag: 'Risk', def: 'An order to automatically close a trade at a target profit level. Locks in gains without manual monitoring.' },
  { term: 'CFD', tag: 'Instrument', def: 'Contract for Difference. You trade the price movement of an asset without owning it. Used for stocks, indices, commodities.' },
  { term: 'Liquidity', tag: 'Market', def: 'How easily an asset can be bought or sold. High liquidity = tight spreads and fast execution. Forex is the most liquid market.' },
  { term: 'Bull Market', tag: 'Market', def: 'A market trending upward. "Bullish" traders expect prices to rise. Opposite of a Bear Market.' },
  { term: 'Bear Market', tag: 'Market', def: 'A market trending downward. "Bearish" traders expect prices to fall. Common in risk-off environments.' },
  { term: 'ECN Broker', tag: 'Broker', def: 'Electronic Communication Network. Routes orders directly to liquidity providers for raw spreads and transparent pricing.' },
  { term: 'Slippage', tag: 'Execution', def: 'When a trade executes at a different price than expected. Usually happens during high volatility or news events.' },
  { term: 'Hedging', tag: 'Strategy', def: 'Opening a position to offset risk of another position. Used to protect against adverse price movements.' },
  { term: 'Drawdown', tag: 'Risk', def: 'The peak-to-trough decline in account value. A measure of risk and strategy performance. Lower drawdown = better risk control.' },
]

export default function Glossary() {
  const [query, setQuery] = useState('')

  const filtered = terms.filter(t =>
    t.term.toLowerCase().includes(query.toLowerCase()) ||
    t.def.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <section className="sec glossary-sec" id="glossary">
      <div className="sec-in">
        <div className="tc">
          <div className="sbw"><div className="sbl"></div><span className="sbt">Glossary</span><div className="sbl"></div></div>
          <h2 className="sh">FOREX <span className="r">GLOSSARY</span></h2>
          <div className="sd c"></div>
          <p className="ss">New to trading? Learn the essential terms every trader needs to know.</p>
        </div>
        <div className="glossary-search">
          <input
            type="text"
            placeholder="🔍  Search a term... e.g. Pip, Leverage, Margin"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
        <div className="glossary-grid" id="glossGrid">
          {filtered.map(t => (
            <div className="glos-item" key={t.term}>
              <div className="glos-term">{t.term} <span className="glos-tag">{t.tag}</span></div>
              <div className="glos-def">{t.def}</div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div style={{ gridColumn: '1/-1', textAlign: 'center', color: 'var(--g400)', padding: '2rem', fontSize: '.88rem' }}>
              No terms found for "{query}". Try a different search.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
