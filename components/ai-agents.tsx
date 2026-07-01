"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Headset, LineChart as LineChartIcon, Receipt, ShoppingBag } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const AGENTS = [
  {
    id: "refund",
    icon: Receipt,
    name: "Refund Agent",
    tagline: "Resolves billing disputes end to end",
    description:
      "Reads the dispute, checks it against your refund policy and order history, then drafts a resolution — approved automatically under your threshold, or routed for review above it.",
    stats: [
      { label: "Tickets / month", value: "12,402" },
      { label: "Avg. handle time", value: "38s" },
      { label: "Accuracy", value: "96.4%" },
    ],
    skills: ["Policy lookup", "Stripe refunds", "Escalation routing"],
  },
  {
    id: "triage",
    icon: Headset,
    name: "Triage Agent",
    tagline: "Sorts and routes every inbound ticket",
    description:
      "Classifies incoming support tickets by urgency and category, attaches relevant context from past conversations, and assigns them to the right queue in under a second.",
    stats: [
      { label: "Tickets / month", value: "38,120" },
      { label: "Avg. handle time", value: "4s" },
      { label: "Accuracy", value: "91.2%" },
    ],
    skills: ["Sentiment scoring", "Auto-tagging", "Queue routing"],
  },
  {
    id: "outreach",
    icon: ShoppingBag,
    name: "Outreach Agent",
    tagline: "Drives renewals before they lapse",
    description:
      "Watches renewal dates across your CRM, drafts personalized outreach sequences based on usage data, and hands off warm conversations to your account team.",
    stats: [
      { label: "Accounts / month", value: "6,904" },
      { label: "Reply rate", value: "34%" },
      { label: "Accuracy", value: "88.7%" },
    ],
    skills: ["Usage analysis", "Sequence drafting", "CRM sync"],
  },
  {
    id: "reporting",
    icon: LineChartIcon,
    name: "Insights Agent",
    tagline: "Turns raw data into a Monday-morning brief",
    description:
      "Pulls metrics from every connected tool overnight, flags anomalies against historical baselines, and writes a plain-language summary waiting in your inbox by 8am.",
    stats: [
      { label: "Reports / month", value: "4" },
      { label: "Data sources", value: "12" },
      { label: "Accuracy", value: "99.1%" },
    ],
    skills: ["Anomaly detection", "Cross-tool sync", "Narrative summaries"],
  },
];

export function AIAgents() {
  const [active, setActive] = React.useState(AGENTS[0].id);
  const agent = AGENTS.find((a) => a.id === active) ?? AGENTS[0];

  return (
    <section id="agents" className="border-y border-line py-28 md:py-36">
      <Container>
        <SectionHeading
          kicker="Agent library"
          title="Pre-built agents for the work every operations team repeats"
          description="Start from a template tuned on thousands of real workflows, then adjust the policy in plain language."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-[280px_1fr]">
          <div className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
            {AGENTS.map((a) => (
              <button
                key={a.id}
                onClick={() => setActive(a.id)}
                className={cn(
                  "flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3.5 text-left transition-all duration-300 lg:shrink",
                  active === a.id
                    ? "border-line-strong bg-white/[0.05]"
                    : "border-transparent hover:bg-white/[0.02]"
                )}
              >
                <div
                  className={cn(
                    "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border",
                    active === a.id ? "border-amber/30 bg-amber/10 text-amber" : "border-line-strong text-muted"
                  )}
                >
                  <a.icon className="h-4 w-4" strokeWidth={1.75} />
                </div>
                <div className="min-w-0">
                  <p className={cn("truncate text-[13.5px]", active === a.id ? "text-paper" : "text-muted")}>
                    {a.name}
                  </p>
                  <p className="hidden truncate text-[11.5px] text-muted-2 lg:block">{a.tagline}</p>
                </div>
              </button>
            ))}
          </div>

          <motion.div
            key={agent.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-line bg-ink-2/60 p-8 md:p-10"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-amber/30 bg-amber/10 text-amber">
              <agent.icon className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <h3 className="mt-6 text-[22px] font-medium text-paper">{agent.name}</h3>
            <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-muted">{agent.description}</p>

            <div className="mt-8 flex flex-wrap gap-2">
              {agent.skills.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-line-strong bg-white/[0.03] px-3 py-1 text-[12px] text-muted"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-line pt-6">
              {agent.stats.map((s) => (
                <div key={s.label}>
                  <p className="font-mono text-[19px] text-paper">{s.value}</p>
                  <p className="mt-1 text-[11.5px] text-muted-2">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
