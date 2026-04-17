import type { ReactNode } from "react";

interface FocusCardProps {
  eyebrow: string;
  title: string;
  description: string;
  visual: ReactNode;
}

export function FocusCard({ eyebrow, title, description, visual }: FocusCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-hairline bg-white p-7 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: "var(--gradient-glow)" }}
      />
      <div className="relative">
        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-700">
          {eyebrow}
        </div>
        <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-ink">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">{description}</p>
        <div className="mt-6 rounded-2xl border border-hairline bg-background p-4">
          {visual}
        </div>
      </div>
    </div>
  );
}
