"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Inbox, MessageSquareText, Workflow, Zap } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/container";

const STEPS = [
  {
    n: "01",
    icon: Inbox,
    title: "Trigger fires",
    description: "A new Zendesk ticket, Slack message, or webhook enters the workflow the moment it happens.",
  },
  {
    n: "02",
    icon: Workflow,
    title: "Agent reasons",
    description: "The agent reads context from every connected tool and decides which skill the task needs.",
  },
  {
    n: "03",
    icon: MessageSquareText,
    title: "Draft is proposed",
    description: "A reply, a refund, a ticket update — proposed with a confidence score and full reasoning trace.",
  },
  {
    n: "04",
    icon: CheckCircle2,
    title: "Checkpoint or ship",
    description: "High-confidence actions ship instantly. Everything else waits for a one-click human approval.",
  },
  {
    n: "05",
    icon: Zap,
    title: "System updates",
    description: "The result syncs back to source systems and the agent logs what it learned for next time.",
  },
];

export function AIWorkflow() {
  return (
    <section className="border-y border-line bg-ink-2/30 py-28 md:py-36">
      <Container>
        <SectionHeading
          kicker="How it works"
          title="From trigger to resolution, without a human touching every step"
          description="Five stages stand between an incoming task and a shipped result. You decide where the checkpoints go."
        />

        <div className="relative mt-20">
          <div
            className="absolute left-[27px] top-3 hidden h-[calc(100%-24px)] w-px bg-gradient-to-b from-line-strong via-line-strong to-transparent md:block"
            aria-hidden
          />
          <div className="flex flex-col gap-10 md:gap-14">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.55, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="relative grid grid-cols-[56px_1fr] items-start gap-6 md:grid-cols-[56px_200px_1fr] md:gap-10"
              >
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-line-strong bg-ink text-amber">
                  <step.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-1">
                  <span className="font-mono text-[13px] text-muted-2">{step.n}</span>
                  <h3 className="text-[18px] font-medium text-paper">{step.title}</h3>
                </div>
                <p className="max-w-md text-[15px] leading-relaxed text-muted">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
