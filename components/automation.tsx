"use client";

import { motion } from "framer-motion";
import { Check, Filter, MousePointerClick, Webhook, Zap } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/container";

const NODES = [
  { icon: Webhook, label: "New ticket", sub: "Zendesk trigger", x: 0, y: 0, color: "amber" },
  { icon: Filter, label: "Category = Billing", sub: "Condition", x: 1, y: 0, color: "violet" },
  { icon: Zap, label: "Run Refund Agent", sub: "Action", x: 2, y: -1, color: "amber" },
  { icon: Check, label: "Confidence > 90%", sub: "Condition", x: 2, y: 1, color: "violet" },
];

const BULLETS = [
  {
    icon: MousePointerClick,
    title: "No-code builder",
    description: "Drag triggers, conditions, and actions onto a canvas — no engineering ticket required.",
  },
  {
    icon: Filter,
    title: "Granular conditions",
    description: "Branch on any field: customer tier, order value, sentiment score, time of day.",
  },
  {
    icon: Zap,
    title: "Instant activation",
    description: "Publish a change and every new event picks it up within seconds — no redeploy.",
  },
];

export function Automation() {
  return (
    <section id="automation" className="py-28 md:py-36">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              kicker="Automation"
              align="left"
              title="Build the logic yourself, without writing a line of code"
              description="Every workflow in Flux is a visual graph your ops team can read, edit, and trust — not a black box of prompts."
              className="items-start text-left"
            />

            <div className="mt-10 flex flex-col gap-6">
              {BULLETS.map((b) => (
                <div key={b.title} className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line-strong bg-white/[0.03] text-amber">
                    <b.icon className="h-4 w-4" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-medium text-paper">{b.title}</h3>
                    <p className="mt-1 text-[14px] leading-relaxed text-muted">{b.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-grid relative min-h-[420px] overflow-hidden rounded-2xl border border-line-strong bg-ink-2/60 p-10"
          >
            <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden>
              <line x1="18%" y1="50%" x2="47%" y2="50%" stroke="var(--color-line-strong)" strokeWidth="1.5" />
              <line x1="65%" y1="50%" x2="85%" y2="22%" stroke="var(--color-line-strong)" strokeWidth="1.5" />
              <line x1="65%" y1="50%" x2="85%" y2="78%" stroke="var(--color-line-strong)" strokeWidth="1.5" />
            </svg>

            <div className="relative flex h-full min-h-[360px] items-center">
              <NodeCard node={NODES[0]} className="absolute left-0 top-1/2 -translate-y-1/2" />
              <NodeCard node={NODES[1]} className="absolute left-[38%] top-1/2 -translate-y-1/2" />
              <NodeCard node={NODES[2]} className="absolute left-[68%] top-[14%]" />
              <NodeCard node={NODES[3]} className="absolute left-[68%] top-[64%]" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function NodeCard({
  node,
  className,
}: {
  node: (typeof NODES)[number];
  className?: string;
}) {
  return (
    <div
      className={`w-[168px] rounded-xl border border-line-strong bg-ink-3 p-3.5 shadow-[0_12px_30px_-10px_rgba(0,0,0,0.6)] ${className}`}
    >
      <div
        className={`mb-2.5 flex h-7 w-7 items-center justify-center rounded-md ${
          node.color === "amber" ? "bg-amber/15 text-amber" : "bg-violet/15 text-violet-soft"
        }`}
      >
        <node.icon className="h-3.5 w-3.5" strokeWidth={1.75} />
      </div>
      <p className="text-[12.5px] leading-tight text-paper/90">{node.label}</p>
      <p className="mt-0.5 text-[10.5px] text-muted-2">{node.sub}</p>
    </div>
  );
}
