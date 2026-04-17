const CELLS = [
  { label: "True Negative", value: 1842, kind: "good" as const },
  { label: "False Positive", value: 96, kind: "bad" as const },
  { label: "False Negative", value: 74, kind: "bad" as const },
  { label: "True Positive", value: 488, kind: "good" as const },
];

export function ConfusionMatrix() {
  return (
    <div className="w-full">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
          Confusion matrix
        </span>
        <span className="text-[10px] text-ink-soft/70">Test set · 2,500 customers</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {CELLS.map((c) => (
          <div
            key={c.label}
            className={`rounded-xl border p-4 ${
              c.kind === "good"
                ? "border-brand-200 bg-brand-50"
                : "border-hairline bg-muted"
            }`}
          >
            <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-ink-soft">
              {c.label}
            </div>
            <div
              className={`mt-1 font-display text-2xl font-semibold ${
                c.kind === "good" ? "text-brand-700" : "text-ink"
              }`}
            >
              {c.value.toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
