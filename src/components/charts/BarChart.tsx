interface BarItem {
  label: string;
  value: number; // 0..1
}

interface BarChartProps {
  data?: BarItem[];
  title?: string;
}

const DEFAULT: BarItem[] = [
  { label: "Tenure", value: 0.92 },
  { label: "Monthly charges", value: 0.78 },
  { label: "Contract type", value: 0.7 },
  { label: "Support tickets", value: 0.55 },
  { label: "Data usage", value: 0.42 },
  { label: "Payment method", value: 0.31 },
];

export function BarChart({ data = DEFAULT, title = "Feature importance" }: BarChartProps) {
  return (
    <div className="w-full">
      {title && (
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
            {title}
          </span>
          <span className="text-[10px] text-ink-soft/70">SHAP weight</span>
        </div>
      )}
      <ul className="space-y-2.5">
        {data.map((d, i) => (
          <li key={d.label} className="grid grid-cols-[110px_1fr_44px] items-center gap-3">
            <span className="truncate text-xs font-medium text-ink">{d.label}</span>
            <div className="h-2 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-gradient-brand"
                style={{
                  width: `${d.value * 100}%`,
                  transition: "width 1s ease-out",
                  transitionDelay: `${i * 80}ms`,
                }}
              />
            </div>
            <span className="text-right text-[11px] font-mono tabular-nums text-ink-soft">
              {d.value.toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
