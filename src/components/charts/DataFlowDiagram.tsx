import { Database, Wand2, Brain, Target, Briefcase } from "lucide-react";

const STEPS = [
  { icon: Database, label: "Data" },
  { icon: Wand2, label: "Feature Engineering" },
  { icon: Brain, label: "Model" },
  { icon: Target, label: "Prediction" },
  { icon: Briefcase, label: "Business Action" },
];

export function DataFlowDiagram() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex min-w-[640px] items-center justify-between gap-2">
        {STEPS.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="flex flex-1 items-center">
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-hairline bg-white shadow-soft">
                  <Icon className="h-5 w-5 text-brand-600" />
                  <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-brand text-[10px] font-semibold text-white shadow-brand">
                    {i + 1}
                  </span>
                </div>
                <span className="text-[11px] font-medium text-ink">{s.label}</span>
              </div>
              {i < STEPS.length - 1 && (
                <div className="mx-2 flex-1">
                  <div className="h-px bg-gradient-to-r from-brand-200 via-brand-400 to-brand-200" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
