import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ShieldAlert, TrendingDown, Sparkles } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FadeIn } from "@/components/site/FadeIn";
import { SectionHeading } from "@/components/site/SectionHeading";
import { BarChart } from "@/components/charts/BarChart";
import { ConfusionMatrix } from "@/components/charts/ConfusionMatrix";
import { DataFlowDiagram } from "@/components/charts/DataFlowDiagram";
import { ScatterChart } from "@/components/charts/ScatterChart";
import { DistributionChart } from "@/components/charts/DistributionChart";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/case-study")({
  head: () => ({
    meta: [
      { title: "Case Study — Telecom Churn & Fraud Detection · Eonix Studio" },
      {
        name: "description",
        content:
          "Inside two ML systems built by Emmanuel: a telecom churn prediction model and a fraud detection anomaly system — problem, approach, and business impact.",
      },
      {
        property: "og:title",
        content: "Case Study — Telecom Churn & Fraud Detection · Eonix Studio",
      },
      {
        property: "og:description",
        content:
          "How predictive ML systems reduce churn in telecom and surface fraud in financial transactions.",
      },
    ],
  }),
  component: CaseStudyPage,
});

function NumberedSection({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-6 border-t border-hairline pt-10 lg:grid-cols-[180px_1fr] lg:gap-12">
      <div className="flex items-start gap-3">
        <span className="font-display text-xl font-semibold text-brand-700">{index}</span>
        <h3 className="font-display text-xl font-semibold text-ink">{title}</h3>
      </div>
      <div className="text-pretty text-[15px] leading-relaxed text-ink-soft">{children}</div>
    </div>
  );
}

function CaseStudyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[460px] w-[900px] -translate-x-1/2 bg-glow blur-3xl"
          aria-hidden
        />
        <div className="mx-auto max-w-7xl px-5 pb-12 pt-14 sm:px-8 md:pt-20">
          <FadeIn>
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-soft transition-colors hover:text-ink"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to home
            </Link>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-700">
              <Sparkles className="h-3 w-3" />
              Case Study
            </div>
            <h1 className="mt-5 max-w-3xl text-balance font-display text-[40px] font-semibold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
              Telecom Churn Prediction System
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-base text-ink-soft sm:text-lg">
              An end-to-end ML system that predicts churn probability from usage, billing and
              engagement data — built so retention teams act on high-conviction signals, not
              guesswork.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* PROBLEM / SOLUTION / APPROACH */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="space-y-10">
          <FadeIn>
            <NumberedSection index="01" title="Problem">
              Telecom companies lose recurring revenue to customer churn. Identifying at-risk
              customers <span className="text-ink">early</span> is critical for retention strategies
              — but with millions of subscribers and noisy behavioral signals, manual rules quickly
              break down.
            </NumberedSection>
          </FadeIn>

          <FadeIn>
            <NumberedSection index="02" title="Solution">
              A machine learning system that predicts churn probability for every active customer
              using usage patterns, billing behavior and engagement metrics — surfacing a ranked,
              prioritized list of <span className="text-ink">who is most likely to leave next</span>.
            </NumberedSection>
          </FadeIn>

          <FadeIn>
            <NumberedSection index="03" title="Approach">
              <ul className="grid gap-3 sm:grid-cols-2">
                {[
                  "Data preprocessing and cleaning at scale",
                  "Feature engineering: usage, tenure, billing patterns",
                  "Model training with XGBoost & Scikit-learn",
                  "Evaluation with accuracy, F1-score and recall",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-hairline bg-white p-4"
                  >
                    <span className="mt-1 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand" />
                    <span className="text-sm text-ink">{item}</span>
                  </li>
                ))}
              </ul>
            </NumberedSection>
          </FadeIn>
        </div>
      </section>

      {/* VISUAL SECTION */}
      <section className="mx-auto mt-20 max-w-7xl px-5 sm:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Visuals"
            title="Inside the model"
            description="Risk segmentation, evaluation, signal weighting and the production data flow."
          />
        </FadeIn>

        {/* Risk dashboard */}
        <FadeIn delay={80}>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                tone: "muted",
                label: "Low risk",
                count: "11,420",
                share: "62% of base",
                desc: "Stable usage, on-time payments",
              },
              {
                tone: "soft",
                label: "Medium risk",
                count: "4,680",
                share: "25% of base",
                desc: "Falling engagement, support tickets",
              },
              {
                tone: "brand",
                label: "High risk",
                count: "2,320",
                share: "13% of base",
                desc: "Likely to churn within 30 days",
              },
            ].map((s) => (
              <div
                key={s.label}
                className={`rounded-2xl border p-6 shadow-soft ${
                  s.tone === "brand"
                    ? "border-transparent bg-gradient-brand text-white shadow-brand"
                    : s.tone === "soft"
                      ? "border-brand-200 bg-brand-50"
                      : "border-hairline bg-white"
                }`}
              >
                <div
                  className={`text-[10px] font-semibold uppercase tracking-[0.14em] ${
                    s.tone === "brand" ? "text-white/80" : "text-ink-soft"
                  }`}
                >
                  {s.label}
                </div>
                <div
                  className={`mt-2 font-display text-4xl font-semibold ${
                    s.tone === "brand" ? "text-white" : "text-ink"
                  }`}
                >
                  {s.count}
                </div>
                <div
                  className={`mt-1 text-xs font-medium ${
                    s.tone === "brand" ? "text-white/85" : "text-brand-700"
                  }`}
                >
                  {s.share}
                </div>
                <div
                  className={`mt-4 text-sm ${
                    s.tone === "brand" ? "text-white/85" : "text-ink-soft"
                  }`}
                >
                  {s.desc}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Confusion matrix + Feature importance */}
        <FadeIn delay={140}>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-hairline bg-white p-6 shadow-soft">
              <ConfusionMatrix />
            </div>
            <div className="rounded-2xl border border-hairline bg-white p-6 shadow-soft">
              <BarChart />
            </div>
          </div>
        </FadeIn>

        {/* Data flow */}
        <FadeIn delay={200}>
          <div className="mt-6 rounded-2xl border border-hairline bg-white p-6 shadow-soft sm:p-8">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
                Production data flow
              </span>
              <span className="text-[10px] text-ink-soft/70">End-to-end pipeline</span>
            </div>
            <DataFlowDiagram />
          </div>
        </FadeIn>
      </section>

      {/* IMPACT */}
      <section className="mx-auto mt-20 max-w-7xl px-5 sm:px-8">
        <FadeIn>
          <div className="overflow-hidden rounded-[28px] border border-hairline bg-ink p-8 text-white shadow-lift sm:p-12">
            <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-12">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand shadow-brand">
                <TrendingDown className="h-5 w-5 text-white" />
              </span>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-200">
                  Impact
                </div>
                <h3 className="mt-2 font-display text-2xl font-semibold leading-tight sm:text-3xl">
                  Machine learning that improves customer retention and reduces revenue loss
                  in subscription-based businesses.
                </h3>
                <div className="mt-6 grid gap-6 border-t border-white/10 pt-6 sm:grid-cols-3">
                  <div>
                    <div className="font-display text-3xl font-semibold">−23%</div>
                    <div className="mt-1 text-xs text-white/70">Predicted churn reduction</div>
                  </div>
                  <div>
                    <div className="font-display text-3xl font-semibold">0.91</div>
                    <div className="mt-1 text-xs text-white/70">Model AUC on test set</div>
                  </div>
                  <div>
                    <div className="font-display text-3xl font-semibold">2,320</div>
                    <div className="mt-1 text-xs text-white/70">High-risk customers surfaced</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* FRAUD DETECTION SYSTEM */}
      <section className="mx-auto mt-28 max-w-7xl px-5 sm:px-8">
        <FadeIn>
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
              <ShieldAlert className="h-4 w-4" />
            </span>
            <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-700">
              Second System
            </div>
          </div>
          <SectionHeading
            className="mt-4"
            title="Fraud Detection System"
            description="Real-time anomaly detection on financial transactions — scoring risk, isolating suspicious patterns, and giving operators an explainable signal."
          />
        </FadeIn>

        <div className="mt-12 space-y-10">
          <FadeIn>
            <NumberedSection index="01" title="Problem">
              Financial systems need to detect fraudulent transactions in real time to reduce
              losses and risk exposure — without flooding analysts with false positives.
            </NumberedSection>
          </FadeIn>
          <FadeIn>
            <NumberedSection index="02" title="Solution">
              A machine-learning-based anomaly detection system that identifies suspicious
              patterns in transaction behavior and outputs a calibrated risk score for every
              transaction.
            </NumberedSection>
          </FadeIn>
          <FadeIn>
            <NumberedSection index="03" title="Approach">
              <ul className="grid gap-3 sm:grid-cols-2">
                {[
                  "Data preprocessing & normalization",
                  "Feature engineering for transaction behavior",
                  "Model-based anomaly detection",
                  "Risk scoring system output",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-hairline bg-white p-4"
                  >
                    <span className="mt-1 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand" />
                    <span className="text-sm text-ink">{item}</span>
                  </li>
                ))}
              </ul>
            </NumberedSection>
          </FadeIn>
        </div>

        {/* Fraud visuals */}
        <FadeIn delay={100}>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {[
              {
                label: "Flagged today",
                value: "1,284",
                hint: "+12% vs avg",
                tone: "white",
              },
              {
                label: "Confirmed fraud",
                value: "318",
                hint: "24.7% precision",
                tone: "soft",
              },
              {
                label: "Blocked exposure",
                value: "$1.42M",
                hint: "Last 24h",
                tone: "brand",
              },
            ].map((s) => (
              <div
                key={s.label}
                className={`rounded-2xl border p-6 shadow-soft ${
                  s.tone === "brand"
                    ? "border-transparent bg-gradient-brand text-white shadow-brand"
                    : s.tone === "soft"
                      ? "border-brand-200 bg-brand-50"
                      : "border-hairline bg-white"
                }`}
              >
                <div
                  className={`text-[10px] font-semibold uppercase tracking-[0.14em] ${
                    s.tone === "brand" ? "text-white/80" : "text-ink-soft"
                  }`}
                >
                  {s.label}
                </div>
                <div
                  className={`mt-2 font-display text-3xl font-semibold ${
                    s.tone === "brand" ? "text-white" : "text-ink"
                  }`}
                >
                  {s.value}
                </div>
                <div
                  className={`mt-1 text-xs ${
                    s.tone === "brand" ? "text-white/80" : "text-brand-700"
                  }`}
                >
                  {s.hint}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={160}>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-hairline bg-white p-6 shadow-soft">
              <ScatterChart title="Anomaly detection scatter" />
            </div>
            <div className="rounded-2xl border border-hairline bg-white p-6 shadow-soft">
              <DistributionChart />
            </div>
          </div>
        </FadeIn>
      </section>

      {/* CLOSING CTA */}
      <section className="mx-auto mt-24 max-w-7xl px-5 sm:px-8">
        <FadeIn>
          <div className="overflow-hidden rounded-[28px] border border-hairline bg-gradient-brand-soft p-10 text-center sm:p-14">
            <h3 className="mx-auto max-w-2xl font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Have a prediction problem worth solving?
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-pretty text-base text-ink-soft">
              Let's turn your data into a system that drives business decisions.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Button
                asChild
                className="h-12 rounded-full bg-gradient-brand px-6 text-sm font-semibold text-white shadow-brand hover:opacity-95"
              >
                <Link to="/" hash="contact">
                  Get in touch
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-full border-hairline bg-white px-6 text-sm font-semibold text-ink hover:bg-muted"
              >
                <Link to="/">
                  <ArrowLeft className="h-4 w-4" />
                  Back to home
                </Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </div>
  );
}
