interface ChurnGaugeProps {
  value?: number; // 0..100
  label?: string;
}

export function ChurnGauge({ value = 72, label = "Churn risk" }: ChurnGaugeProps) {
  const pct = Math.max(0, Math.min(100, value));
  const r = 70;
  const c = Math.PI * r; // semicircle
  const offset = c - (pct / 100) * c;

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center">
      <svg viewBox="0 0 200 120" className="w-full max-w-[260px]">
        <defs>
          <linearGradient id="gaugeGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="oklch(0.85 0.1 70)" />
            <stop offset="60%" stopColor="oklch(0.72 0.18 50)" />
            <stop offset="100%" stopColor="oklch(0.6 0.21 35)" />
          </linearGradient>
        </defs>
        <path
          d="M 30 100 A 70 70 0 0 1 170 100"
          fill="none"
          stroke="oklch(0.93 0.008 80)"
          strokeWidth="14"
          strokeLinecap="round"
        />
        <path
          d="M 30 100 A 70 70 0 0 1 170 100"
          fill="none"
          stroke="url(#gaugeGrad)"
          strokeWidth="14"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 1.2s ease-out" }}
        />
        <text
          x="100"
          y="92"
          textAnchor="middle"
          className="fill-ink"
          style={{ fontSize: 28, fontWeight: 700, fontFamily: "var(--font-display)" }}
        >
          {pct}%
        </text>
      </svg>
      <div className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-ink-soft">
        {label}
      </div>
    </div>
  );
}
