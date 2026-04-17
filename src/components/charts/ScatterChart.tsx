interface Point {
  x: number;
  y: number;
  anomaly?: boolean;
}

const DEFAULT: Point[] = (() => {
  const pts: Point[] = [];
  // Cluster
  for (let i = 0; i < 60; i++) {
    pts.push({
      x: 0.3 + Math.random() * 0.4,
      y: 0.3 + Math.random() * 0.4,
    });
  }
  // Anomalies
  const anomalies = [
    { x: 0.08, y: 0.85 },
    { x: 0.92, y: 0.12 },
    { x: 0.88, y: 0.78 },
    { x: 0.12, y: 0.18 },
    { x: 0.95, y: 0.5 },
    { x: 0.05, y: 0.55 },
  ];
  anomalies.forEach((p) => pts.push({ ...p, anomaly: true }));
  return pts;
})();

export function ScatterChart({ title = "Anomaly detection" }: { title?: string }) {
  const w = 320;
  const h = 200;
  const pad = 16;

  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
          {title}
        </span>
        <div className="flex items-center gap-3 text-[10px] text-ink-soft">
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-ink-soft/60" /> Normal
          </span>
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-600" /> Anomaly
          </span>
        </div>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} className="h-auto w-full">
        <rect
          x={pad}
          y={pad}
          width={w - pad * 2}
          height={h - pad * 2}
          rx="8"
          fill="oklch(0.97 0.008 80)"
        />
        {[0.25, 0.5, 0.75].map((g) => (
          <g key={g}>
            <line
              x1={pad}
              x2={w - pad}
              y1={pad + g * (h - pad * 2)}
              y2={pad + g * (h - pad * 2)}
              stroke="oklch(0.93 0.008 80)"
            />
            <line
              y1={pad}
              y2={h - pad}
              x1={pad + g * (w - pad * 2)}
              x2={pad + g * (w - pad * 2)}
              stroke="oklch(0.93 0.008 80)"
            />
          </g>
        ))}
        {DEFAULT.map((p, i) => {
          const cx = pad + p.x * (w - pad * 2);
          const cy = h - pad - p.y * (h - pad * 2);
          return p.anomaly ? (
            <g key={i}>
              <circle cx={cx} cy={cy} r="8" fill="oklch(0.66 0.2 45 / 0.18)" />
              <circle cx={cx} cy={cy} r="3.5" fill="oklch(0.66 0.2 45)" />
            </g>
          ) : (
            <circle key={i} cx={cx} cy={cy} r="2.5" fill="oklch(0.55 0.02 70 / 0.55)" />
          );
        })}
      </svg>
    </div>
  );
}
