export function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 6l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ExternalIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M7 5h8v8M15 5 6 14M5 7v8h8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function StockHubVisual() {
  return (
    <div className="product-visual stockhub-visual" aria-hidden="true">
      <div className="visual-toolbar">
        <span />
        <span />
        <span />
        <b>planning / inventory</b>
      </div>
      <div className="visual-grid">
        <div className="buffer-chart">
          <div className="buffer-title">DDMRP buffer</div>
          <div className="buffer-stack">
            <span className="zone green" />
            <span className="zone yellow" />
            <span className="zone red" />
          </div>
          <div className="buffer-line one" />
          <div className="buffer-line two" />
        </div>
        <div className="signal-list">
          <div><span className="dot hot" />Replenishment</div>
          <div><span className="dot" />Demand signal</div>
          <div><span className="dot" />Projected coverage</div>
          <div><span className="dot" />Inventory value</div>
        </div>
        <div className="spark spark-a"><i /><i /><i /><i /><i /><i /><i /></div>
        <div className="spark spark-b"><i /><i /><i /><i /><i /><i /></div>
      </div>
    </div>
  )
}

export function DemandHubVisual() {
  return (
    <div className="product-visual demandhub-visual" aria-hidden="true">
      <div className="visual-toolbar">
        <span />
        <span />
        <span />
        <b>demand / collaboration</b>
      </div>
      <div className="org-map">
        <div className="org-node root">Brazil</div>
        <div className="org-line v1" />
        <div className="org-line h1" />
        <div className="org-node n1">Regional A</div>
        <div className="org-node n2">Regional B</div>
        <div className="org-line v2" />
        <div className="org-line v3" />
        <div className="org-node leaf l1">Node 01</div>
        <div className="org-node leaf l2">Node 02</div>
        <div className="org-node leaf l3">Node 03</div>
        <div className="forecast-strip"><span>Forecast</span><i /><i /><i /><i /><i /></div>
      </div>
    </div>
  )
}

export function MiniAnalytics({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="mini-analytics bars" aria-hidden="true">
        {[62, 84, 48, 72, 92, 68, 78].map((v, i) => <span key={i} style={{ height: `${v}%` }} />)}
        <i className="trend" />
      </div>
    )
  }
  if (index === 1) {
    return (
      <div className="mini-analytics rings" aria-hidden="true">
        <div className="ring r1"><b>OTIF</b></div>
        <div className="ring r2"><b>SLA</b></div>
        <div className="ring r3"><b>EOH</b></div>
      </div>
    )
  }
  return (
    <div className="mini-analytics line-chart" aria-hidden="true">
      <svg viewBox="0 0 260 120" preserveAspectRatio="none">
        <polyline points="0,90 35,78 70,88 105,52 140,60 175,35 210,42 260,18" fill="none" stroke="currentColor" strokeWidth="3" vectorEffect="non-scaling-stroke" />
        <polyline points="0,98 35,92 70,72 105,74 140,49 175,58 210,30 260,40" fill="none" stroke="currentColor" strokeWidth="1.3" opacity=".45" vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
  )
}
