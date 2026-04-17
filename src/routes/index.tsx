import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Linkedin,
  Mail,
  LineChart as LineIcon,
  ShieldAlert,
  Gauge,
  TrendingDown,
  Sparkles,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FadeIn } from "@/components/site/FadeIn";
import { SectionHeading } from "@/components/site/SectionHeading";
import { DashboardMock } from "@/components/site/DashboardMock";
import { FocusCard } from "@/components/site/FocusCard";
import { StatCard } from "@/components/site/StatCard";
import { ContactForm } from "@/components/site/ContactForm";
import { ChurnGauge } from "@/components/charts/ChurnGauge";
import { BarChart } from "@/components/charts/BarChart";
import { LineChart } from "@/components/charts/LineChart";
import { ScatterChart } from "@/components/charts/ScatterChart";
import { Button } from "@/components/ui/button";

const LINKEDIN_URL = "https://www.linkedin.com/in/emmanuel-valour-peters-a9a6b6361";
const EMAIL = "hello@eonixstudio.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eonix Studio — ML Engineer Portfolio · Emmanuel" },
      {
        name: "description",
        content:
          "Eonix Studio — Emmanuel, machine learning engineer building predictive systems for customer churn and fraud detection in telecom, SaaS and finance.",
      },
      { property: "og:title", content: "Eonix Studio — ML Engineering for Real Business Problems" },
      {
        property: "og:description",
        content:
          "Predictive ML systems for customer churn and fraud detection. Built with Python, Scikit-learn and XGBoost.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[520px] w-[900px] -translate-x-1/2 bg-glow blur-3xl"
          aria-hidden
        />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-16 sm:px-8 md:pt-24 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:pb-28">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-700">
              <Sparkles className="h-3 w-3" />
              Eonix Studio
            </div>
            <h1 className="mt-5 text-balance font-display text-[44px] font-semibold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[68px]">
              Predictive ML for{" "}
              <span className="text-gradient-brand">real-world business</span>{" "}
              systems.
            </h1>
            <p className="mt-5 text-base text-ink-soft sm:text-lg">
              <span className="font-medium text-ink">Emmanuel</span> — Machine Learning Engineer
            </p>
            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-ink-soft sm:text-[17px]">
              Building predictive systems for real-world business problems. Specializing in
              customer churn prediction, fraud detection, feature engineering, and scalable
              ML systems using Python, Scikit-learn and XGBoost.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                asChild
                className="h-12 rounded-full bg-gradient-brand px-6 text-sm font-semibold text-white shadow-brand hover:opacity-95"
              >
                <Link to="/case-study">
                  View Case Study
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-full border-hairline bg-white px-6 text-sm font-semibold text-ink hover:bg-muted"
              >
                <a href="#contact">Contact</a>
              </Button>

              <div className="ml-1 flex items-center gap-1">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-white text-ink-soft transition-colors hover:text-brand-700"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  aria-label="Email"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-white text-ink-soft transition-colors hover:text-brand-700"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-ink-soft">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" /> Python
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" /> Scikit-learn
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" /> XGBoost
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" /> Feature Engineering
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={120} className="lg:pl-6">
            <DashboardMock />
          </FadeIn>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
        <FadeIn>
          <SectionHeading
            eyebrow="Focus Areas"
            title="Two specialties. Real business outcomes."
            description="Predictive systems built around the metrics that actually move revenue — retention and risk."
          />
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <FadeIn delay={80}>
            <FocusCard
              eyebrow="Telecom · SaaS"
              title="Customer Churn Prediction"
              description="Predicting customer retention risk using behavioral and usage data — surfacing the segments worth saving before they leave."
              visual={
                <div className="grid grid-cols-[1fr_auto] items-center gap-4">
                  <LineChart title="Active customers" caption="Last 12 weeks" />
                  <div className="flex flex-col items-center">
                    <ChurnGauge value={68} label="Risk index" />
                  </div>
                </div>
              }
            />
          </FadeIn>
          <FadeIn delay={160}>
            <FocusCard
              eyebrow="Finance · Payments"
              title="Fraud Detection Systems"
              description="Detecting anomalies in financial and transactional data using ML models — real-time scoring with an explainable risk threshold."
              visual={<ScatterChart title="Transaction anomalies" />}
            />
          </FadeIn>
        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="overflow-hidden rounded-[28px] border border-hairline bg-gradient-brand-soft p-6 sm:p-10 md:p-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <FadeIn>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-700 backdrop-blur">
                  Featured Project
                </div>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-[44px]">
                  Telecom Churn Prediction System
                </h2>
                <p className="mt-4 text-pretty text-base text-ink-soft sm:text-[17px]">
                  Telecom operators lose recurring revenue to silent churn. This system identifies
                  at-risk customers from usage patterns, billing behavior and engagement signals —
                  giving retention teams a prioritized list of who to save.
                </p>
                <p className="mt-3 text-pretty text-sm text-ink-soft">
                  An ensemble model combines feature-engineered behavioral signals with confidence
                  scoring, so business teams act only on high-conviction predictions.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  <StatCard icon={Gauge} label="Churn Risk Model" value="0.91 AUC" hint="ROC" />
                  <StatCard
                    icon={TrendingDown}
                    label="Retention Prediction"
                    value="−23%"
                    hint="Churn"
                  />
                  <StatCard
                    icon={LineIcon}
                    label="Confidence Score"
                    value="94%"
                    hint="Top decile"
                  />
                </div>

                <div className="mt-7">
                  <Button
                    asChild
                    className="h-11 rounded-full bg-ink px-5 text-sm font-semibold text-white hover:bg-ink/90"
                  >
                    <Link to="/case-study">
                      Read full case study
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </FadeIn>

              <FadeIn delay={120}>
                <div className="rounded-3xl border border-white/60 bg-white/85 p-5 shadow-lift backdrop-blur">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-hairline bg-background p-4 sm:col-span-2">
                      <ChurnGauge value={78} label="Predicted churn probability" />
                    </div>
                    <div className="rounded-2xl border border-hairline bg-background p-4">
                      <BarChart />
                    </div>
                    <div className="rounded-2xl border border-hairline bg-background p-4">
                      <LineChart />
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <FadeIn>
            <SectionHeading
              eyebrow="About"
              title="Engineering data into business decisions."
            />
          </FadeIn>
          <FadeIn delay={100}>
            <div className="rounded-3xl border border-hairline bg-white p-8 shadow-card">
              <p className="text-pretty text-base leading-relaxed text-ink sm:text-lg">
                Emmanuel is an ML engineer focused on applying machine learning to real
                business systems. He builds predictive models for{" "}
                <span className="font-medium text-brand-700">customer churn</span> and{" "}
                <span className="font-medium text-brand-700">fraud detection</span>,
                transforming raw data into actionable business insights.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4 border-t border-hairline pt-6">
                <div>
                  <div className="font-display text-2xl font-semibold text-ink">5+</div>
                  <div className="mt-1 text-xs text-ink-soft">Production models</div>
                </div>
                <div>
                  <div className="font-display text-2xl font-semibold text-ink">2</div>
                  <div className="mt-1 text-xs text-ink-soft">Industry verticals</div>
                </div>
                <div>
                  <div className="font-display text-2xl font-semibold text-ink">0.91</div>
                  <div className="mt-1 text-xs text-ink-soft">Avg. model AUC</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-20">
        <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <FadeIn>
              <SectionHeading
                eyebrow="Contact"
                title="Let's build intelligent systems from data."
                description="Open to ML engineering collaborations in telecom, SaaS and finance — from initial discovery to production-grade deployment."
              />
              <div className="mt-8 space-y-3">
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center justify-between rounded-2xl border border-hairline bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-card"
                >
                  <span className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                      <Mail className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                        Email
                      </span>
                      <span className="block text-sm font-medium text-ink">{EMAIL}</span>
                    </span>
                  </span>
                  <ArrowRight className="h-4 w-4 text-ink-soft" />
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-hairline bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-card"
                >
                  <span className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                      <Linkedin className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                        LinkedIn
                      </span>
                      <span className="block text-sm font-medium text-ink">Emmanuel Peters</span>
                    </span>
                  </span>
                  <ArrowRight className="h-4 w-4 text-ink-soft" />
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={120}>
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Suppress unused warning if ShieldAlert imported but not directly used elsewhere
void ShieldAlert;
