import { useState } from 'react'

export default function Calculators() {
  const [tab, setTab] = useState('pip')
  const [pipLot, setPipLot] = useState(100000)
  const [mgLot, setMgLot] = useState(1)
  const [mgLev, setMgLev] = useState(500)
  const [psBal, setPsBal] = useState(10000)
  const [psRisk, setPsRisk] = useState(2)
  const [psSl, setPsSl] = useState(50)

  const pipVal = pipLot === 100000 ? 10 : pipLot === 10000 ? 1 : 0.1
  const margin = (100000 * mgLot / mgLev).toFixed(2)
  const riskAmt = (psBal * psRisk / 100)
  const lots = (riskAmt / (psSl * 10)).toFixed(2)

  return (
    <section className="sec calc-sec" id="calculators">
      <div className="sec-in">
        <div className="tc fu">
          <div className="sbw"><div className="sbl"></div><span className="sbt">Trading Tools</span><div className="sbl"></div></div>
          <h2 className="sh">TRADING <span className="r">CALCULATORS</span></h2>
          <div className="sd c"></div>
          <p className="ss">Plan your trades with precision using our free interactive calculators.</p>
        </div>

        <div className="calc-tabs">
          {[{id:'pip',label:'📊 Pip Calculator'},{id:'margin',label:'💰 Margin Calculator'},{id:'position',label:'📐 Position Size'}].map(t => (
            <button key={t.id} className={`calc-tab${tab===t.id?' active':''}`} onClick={() => setTab(t.id)}>{t.label}</button>
          ))}
        </div>

        {/* PIP PANEL */}
        <div className={`calc-panel${tab==='pip'?' active':''}`}>
          <div className="calc-form">
            <h3>🧮 Pip Value Calculator</h3>
            <div className="calc-field">
              <label>Currency Pair</label>
              <select><option>EUR/USD</option><option>GBP/USD</option><option>USD/JPY</option><option>AUD/USD</option></select>
            </div>
            <div className="calc-field">
              <label>Lot Size</label>
              <select value={pipLot} onChange={e => setPipLot(Number(e.target.value))}>
                <option value={100000}>Standard Lot (1.00)</option>
                <option value={10000}>Mini Lot (0.10)</option>
                <option value={1000}>Micro Lot (0.01)</option>
              </select>
            </div>
            <div className="calc-field">
              <label>Account Currency</label>
              <select><option>USD</option><option>EUR</option><option>GBP</option></select>
            </div>
            <button className="calc-btn" onClick={() => {}}>Calculate Pip Value →</button>
          </div>
          <div className="calc-result">
            <h3>📋 Results</h3>
            <div className="calc-out">
              <div className="calc-out-label">Pip Value</div>
              <div className="calc-out-val">${pipVal.toFixed(2)}</div>
              <div className="calc-out-unit">per pip / per standard lot</div>
            </div>
            <ul className="calc-breakdown">
              <li><span>Lot Size</span><span>{pipLot.toLocaleString()} units</span></li>
              <li><span>1 pip movement</span><span>0.0001</span></li>
              <li><span>Pip Value</span><span>${pipVal.toFixed(2)}</span></li>
              <li><span>100 pip move P&amp;L</span><span>${(pipVal * 100).toFixed(2)}</span></li>
            </ul>
          </div>
        </div>

        {/* MARGIN PANEL */}
        <div className={`calc-panel${tab==='margin'?' active':''}`}>
          <div className="calc-form">
            <h3>💰 Margin Calculator</h3>
            <div className="calc-field">
              <label>Currency Pair</label>
              <select><option>EUR/USD</option><option>GBP/USD</option><option>USD/JPY</option><option>XAU/USD</option></select>
            </div>
            <div className="calc-field">
              <label>Lot Size</label>
              <input type="number" value={mgLot} onChange={e => setMgLot(Number(e.target.value))} min="0.01" step="0.01" />
            </div>
            <div className="calc-field">
              <label>Leverage</label>
              <select value={mgLev} onChange={e => setMgLev(Number(e.target.value))}>
                <option value={500}>1:500</option><option value={200}>1:200</option>
                <option value={100}>1:100</option><option value={50}>1:50</option><option value={10}>1:10</option>
              </select>
            </div>
            <div className="calc-field">
              <label>Account Currency</label>
              <select><option>USD</option><option>EUR</option><option>GBP</option></select>
            </div>
            <button className="calc-btn" onClick={() => {}}>Calculate Margin →</button>
          </div>
          <div className="calc-result">
            <h3>📋 Results</h3>
            <div className="calc-out">
              <div className="calc-out-label">Required Margin</div>
              <div className="calc-out-val">${parseFloat(margin).toLocaleString('en',{minimumFractionDigits:2})}</div>
              <div className="calc-out-unit">to open this position</div>
            </div>
            <ul className="calc-breakdown">
              <li><span>Lot Size</span><span>{mgLot} lot(s)</span></li>
              <li><span>Leverage</span><span>1:{mgLev}</span></li>
              <li><span>Contract Size</span><span>100,000 units</span></li>
              <li><span>Required Margin</span><span>${parseFloat(margin).toLocaleString('en',{minimumFractionDigits:2})}</span></li>
            </ul>
          </div>
        </div>

        {/* POSITION SIZE PANEL */}
        <div className={`calc-panel${tab==='position'?' active':''}`}>
          <div className="calc-form">
            <h3>📐 Position Size Calculator</h3>
            <div className="calc-field">
              <label>Account Balance ($)</label>
              <input type="number" value={psBal} onChange={e => setPsBal(Number(e.target.value))} />
            </div>
            <div className="calc-field">
              <label>Risk Percentage (%)</label>
              <input type="number" value={psRisk} onChange={e => setPsRisk(Number(e.target.value))} min="0.1" max="10" step="0.1" />
            </div>
            <div className="calc-field">
              <label>Stop Loss (pips)</label>
              <input type="number" value={psSl} onChange={e => setPsSl(Number(e.target.value))} />
            </div>
            <button className="calc-btn" onClick={() => {}}>Calculate Position Size →</button>
          </div>
          <div className="calc-result">
            <h3>📋 Results</h3>
            <div className="calc-out">
              <div className="calc-out-label">Position Size</div>
              <div className="calc-out-val">{lots} lots</div>
              <div className="calc-out-unit">recommended position size</div>
            </div>
            <ul className="calc-breakdown">
              <li><span>Account Balance</span><span>${psBal.toLocaleString()}</span></li>
              <li><span>Risk Amount ({psRisk}%)</span><span>${riskAmt.toFixed(2)}</span></li>
              <li><span>Stop Loss</span><span>{psSl} pips</span></li>
              <li><span>Position Size</span><span>{lots} lots</span></li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}
