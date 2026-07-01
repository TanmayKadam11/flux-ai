"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Terminal } from "lucide-react";
import { Container, Kicker } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const CONSOLE_STEPS: { label: string; detail: string; status: "done" | "running" }[] = [
  { label: "Reading ticket #4021", detail: "Zendesk · billing category", status: "done" },
  { label: "Cross-checking invoice", detail: "Stripe · customer #88213", status: "done" },
  { label: "Drafting refund proposal", detail: "$128.40 · policy match: 94%", status: "done" },
  { label: "Awaiting human approval", detail: "Routed to #billing-review", status: "running" },
];

function useTypewriter(active: boolean) {
  const [visibleSteps, setVisibleSteps] = React.useState(0);

  React.useEffect(() => {
    if (!active) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setVisibleSteps(CONSOLE_STEPS.length);
      return;
    }
    setVisibleSteps(0);
    const timers: ReturnType<typeof setTimeout>[] = [];
    CONSOLE_STEPS.forEach((_, i) => {
      timers.push(
        setTimeout(() => setVisibleSteps(i + 1), 500 + i * 700)
      );
    });
    return () => timers.forEach(clearTimeout);
  }, [active]);

  return visibleSteps;
}

function AgentConsole() {
  const [inView, setInView] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  const visibleSteps = useTypewriter(inView);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative w-full max-w-[420px] rounded-2xl border border-line-strong bg-ink-2/90 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl"
    >
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <div className="flex items-center gap-2">
          <Terminal className="h-3.5 w-3.5 text-amber" />
          <span className="text-[12px] font-medium text-paper/80">Refund Agent</span>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-green/10 px-2 py-0.5 text-[10.5px] font-medium text-green">
          <span className="h-1.5 w-1.5 rounded-full bg-green" />
          Active
        </span>
      </div>
      <div className="flex flex-col gap-3.5 p-4 font-mono">
        {CONSOLE_STEPS.map((step, i) => {
          const shown = i < visibleSteps;
          const isCurrent = i === visibleSteps - 1;
          return (
            <div
              key={step.label}
              className="flex items-start gap-3 transition-opacity duration-500"
              style={{ opacity: shown ? 1 : 0.18 }}
            >
              <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center">
                {shown && !(isCurrent && step.status === "running") ? (
                  <div className="h-1.5 w-1.5 rounded-full bg-green" />
                ) : shown && isCurrent ? (
                  <div className="h-1.5 w-1.5 rounded-full bg-amber animate-pulse" />
                ) : (
                  <div className="h-1.5 w-1.5 rounded-full bg-white/15" />
                )}
              </div>
              <div className="min-w-0">
                <p className="truncate text-[12.5px] text-paper/90">{step.label}</p>
                <p className="truncate text-[11px] text-muted-2">{step.detail}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t border-line px-4 py-3">
        <div className="flex items-center gap-2 text-[11px] text-muted-2">
          <span className="font-mono">$</span>
          <span className="font-mono">awaiting approval</span>
          <span className="h-3 w-[6px] animate-blink bg-amber/70" />
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-40 md:pb-32 md:pt-48">
      <div className="bg-grid mask-fade-b absolute inset-0 -z-10 opacity-60" aria-hidden />
      <div
        className="absolute left-1/2 top-[-160px] -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-25 blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--color-amber) 0%, transparent 70%)" }}
        aria-hidden
      />

      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Kicker className="mb-7">Now supporting multi-agent workflows</Kicker>

            <h1 className="max-w-xl text-balance text-[44px] font-normal leading-[1.06] tracking-[-0.02em] text-paper sm:text-[56px] md:text-[64px]">
              Give your team an <em className="font-display italic text-amber">AI workforce</em> that actually ships work.
            </h1>

            <p className="mt-7 max-w-md text-balance text-[17px] leading-relaxed text-muted md:text-[18px]">
              Flux turns your playbooks into autonomous agents that read tickets, reconcile invoices, and route decisions — connected to the 40+ tools your team already runs on.
            </p>

            <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <Button size="lg">
                Start building free
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="secondary">
                <Play className="h-3.5 w-3.5 fill-current" />
                Watch product tour
              </Button>
            </div>

            <div className="mt-11 flex items-center gap-6 text-[13px] text-muted-2">
              <span>No credit card required</span>
              <span className="h-1 w-1 rounded-full bg-muted-2/40" />
              <span>SOC 2 Type II</span>
              <span className="h-1 w-1 rounded-full bg-muted-2/40" />
              <span>Deploy in an afternoon</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="animate-float">
              <AgentConsole />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
