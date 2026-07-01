"use client";

import { motion } from "framer-motion";
import { Boxes, GitBranch, Radar, ShieldCheck, Sparkles, Timer } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    icon: Boxes,
    title: "Agent building blocks",
    description:
      "Compose agents from reusable skills — reading, summarizing, deciding, writing — instead of prompting from a blank page.",
    span: "lg:col-span-2",
  },
  {
    icon: Radar,
    title: "Live oversight",
    description: "Watch every agent decision in real time, with a full trace of the reasoning behind it.",
    span: "",
  },
  {
    icon: GitBranch,
    title: "Branching logic",
    description: "Route work by confidence score, customer tier, or any field in your data model.",
    span: "",
  },
  {
    icon: ShieldCheck,
    title: "Human checkpoints",
    description:
      "Require sign-off on the actions that matter — refunds, deployments, contract terms — and let the rest run.",
    span: "lg:col-span-2",
  },
  {
    icon: Timer,
    title: "Sub-second latency",
    description: "Agents respond inside your existing tools, not a separate tab your team forgets to check.",
    span: "",
  },
  {
    icon: Sparkles,
    title: "Self-improving",
    description: "Every correction your team makes is fed back into the agent's next run, automatically.",
    span: "",
  },
];

export function Features() {
  return (
    <section id="features" className="py-28 md:py-36">
      <Container>
        <SectionHeading
          kicker="Platform"
          title="Everything an operations team needs to trust an agent with real work"
          description="Flux isn't a chatbot bolted onto your stack. It's infrastructure for agents that read, decide, and act — with the guardrails a real business requires."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-line bg-ink-2/60 p-7 transition-colors duration-300 hover:border-line-strong",
                f.span
              )}
            >
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
                style={{ background: "var(--color-amber)" }}
                aria-hidden
              />
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-line-strong bg-white/[0.03]">
                <f.icon className="h-[18px] w-[18px] text-amber" strokeWidth={1.75} />
              </div>
              <h3 className="text-[16.5px] font-medium text-paper">{f.title}</h3>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-muted">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
