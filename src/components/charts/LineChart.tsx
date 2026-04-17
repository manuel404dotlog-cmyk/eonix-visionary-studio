interface LineChartProps {
  data?: number[];
  title?: string;
  caption?: string;
}

const DEFAULT = [12, 18, 16, 24, 22, 30, 28, 38, 36, 44, 52, 60];

export function LineChart({
  data = DEFAULT,
  title = "Customer activity",
  caption = "Last 12 weeks",
}: LineChartProps) {
  const w = 320;
  const h = 120;
  const pad = 8;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const step = (w - pad * 2) / (data.length - 1);

  const points = data.map((v, i) => {
    const x = pad + i * step;
    const y = h - pad - ((v - min) / range) * (h - pad * 2);
    return [x, y] as const;
  });

  const path = points
    .map(([x, y], i) => (i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`))
    .join(" ");
  const area = `${path} L ${points[points.length - 1][0]} ${h - pad} L ${points[0][0]} ${h - pad} Z`;

  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
          {title}
        </span>
        <span className="text-[10px] text-ink-soft/70">{caption}</span>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} className="h-auto w-full">
        <defs>
          <linearGradient id="lineFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.72 0.18 50)" stopOpacity="0.28" />
            <stop offset="100%" stopColor="oklch(0.72 0.18 50)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0.25, 0.5, 0.75].map((g) => (
          <line
            key={g}
            x1={pad}
            x2={w - pad}
            y1={pad + g * (h - pad * 2)}
            y2={pad + g * (h - pad * 2)}
            stroke="oklch(0.93 0.008 80)"
            strokeDasharray="3 4"
          />
        ))}
        <path d={area} fill="url(#lineFill)" />
        <path
          d={path}
          fill="none"
          stroke="oklch(0.66 0.2 45)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {points.map(([x, y], i) =>
          i === points.length - 1 ? (
            <g key={i}>
              <circle cx={x} cy={y} r="6" fill="oklch(0.66 0.2 45 / 0.18)" />
              <circle cx={x} cy={y} r="3" fill="oklch(0.66 0.2 45)" />
            </g>
          ) : null,
        )}
      </svg>
    </div>
  );
}
