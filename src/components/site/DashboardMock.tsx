import { ChurnGauge } from "@/components/charts/ChurnGauge";
import { LineChart } from "@/components/charts/LineChart";
import { ArrowUpRight, Users } from "lucide-react";

export function DashboardMock() {
  return (
    <div className="relative">
      {/* Glow */}
      <div
        className="absolute -inset-10 -z-10 bg-glow blur-2xl"
        aria-hidden
      />

      <div className="relative overflow-hidden rounded-3xl border border-hairline bg-white/80 p-5 shadow-lift backdrop-blur">
        {/* Window chrome */}
        <div className="flex items-center justify-between pb-4">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-muted" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted" />
          </div>
          <span className="rounded-full bg-muted px-2.5 py-0.5 text-[10px] font-medium text-ink-soft">
            eonix · churn
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-5">
          <div className="rounded-2xl border border-hairline bg-background p-4 sm:col-span-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                  Active customers
                </div>
                <div className="mt-1 font-display text-2xl font-semibold text-ink">
                  18,420
                </div>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-2 py-0.5 text-[11px] font-semibold text-brand-700">
                <ArrowUpRight className="h-3 w-3" />
                +4.2%
              </span>
            </div>
            <div className="mt-3">
              <LineChart caption="Last 12 weeks" />
            </div>
          </div>

          <div className="rounded-2xl border border-hairline bg-background p-4 sm:col-span-2">
            <ChurnGauge value={72} />
          </div>

          <div className="rounded-2xl border border-hairline bg-background p-4 sm:col-span-5">
            <div className="flex items-center justify-between">
              <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                At-risk segments
              </div>
              <Users className="h-3.5 w-3.5 text-ink-soft" />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[
                { label: "Low", value: 11420, tone: "muted" },
                { label: "Medium", value: 4680, tone: "soft" },
                { label: "High", value: 2320, tone: "brand" },
              ].map((s) => (
                <div
                  key={s.label}
                  className={`rounded-xl p-3 ${
                    s.tone === "brand"
                      ? "bg-gradient-brand text-white shadow-brand"
                      : s.tone === "soft"
                        ? "bg-brand-50 text-brand-700"
                        : "bg-muted text-ink"
                  }`}
                >
                  <div className="text-[10px] font-semibold uppercase tracking-[0.12em] opacity-80">
                    {s.label}
                  </div>
                  <div className="mt-0.5 font-display text-lg font-semibold">
                    {s.value.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating mini badge */}
      <div className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-hairline bg-white px-4 py-3 shadow-lift sm:block">
        <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
          Model
        </div>
        <div className="font-display text-sm font-semibold text-ink">XGBoost · v2.1</div>
        <div className="mt-1 flex items-center gap-1 text-[11px] text-brand-700">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-500" /> AUC 0.91
        </div>
      </div>
    </div>
  );
}
