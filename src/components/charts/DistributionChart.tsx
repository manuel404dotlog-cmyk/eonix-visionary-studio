const BARS = [4, 8, 14, 22, 32, 44, 58, 70, 62, 48, 34, 22, 14, 8, 5, 3];

export function DistributionChart({
  title = "Transaction risk distribution",
}: {
  title?: string;
}) {
  const max = Math.max(...BARS);
  const w = 320;
  const h = 160;
  const pad = 12;
  const bw = (w - pad * 2) / BARS.length - 3;

  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
          {title}
        </span>
        <span className="text-[10px] text-ink-soft/70">Risk score 0 → 1</span>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} className="h-auto w-full">
        <defs>
          <linearGradient id="distGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.78 0.16 55)" />
            <stop offset="100%" stopColor="oklch(0.6 0.21 35)" />
          </linearGradient>
        </defs>
        {BARS.map((v, i) => {
          const bh = (v / max) * (h - pad * 2);
          const x = pad + i * (bw + 3);
          const y = h - pad - bh;
          const isHigh = i >= 11;
          return (
            <rect
              key={i}
              x={x}
              y={y}
              width={bw}
              height={bh}
              rx="2"
              fill={isHigh ? "url(#distGrad)" : "oklch(0.88 0.02 70)"}
            />
          );
        })}
        <line
          x1={pad + 11 * (bw + 3) - 1.5}
          x2={pad + 11 * (bw + 3) - 1.5}
          y1={pad}
          y2={h - pad}
          stroke="oklch(0.66 0.2 45)"
          strokeDasharray="3 3"
          strokeWidth="1"
        />
      </svg>
      <div className="mt-1 flex justify-between text-[10px] text-ink-soft/70">
        <span>Low risk</span>
        <span className="text-brand-700">↑ Threshold</span>
        <span>High risk</span>
      </div>
    </div>
  );
}
