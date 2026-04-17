import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-2.5">
      <span className="relative inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg bg-gradient-brand shadow-brand">
        <span className="absolute inset-0 bg-glow opacity-60" aria-hidden />
        <svg
          viewBox="0 0 24 24"
          className="relative h-4 w-4 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M3 17l4-6 4 4 6-9 4 6" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[15px] font-semibold tracking-tight text-ink">
          Eonix Studio
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-ink-soft">
          ML Engineering
        </span>
      </span>
    </Link>
  );
}
