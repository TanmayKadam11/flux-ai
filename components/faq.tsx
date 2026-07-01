"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "How is Flux different from a chatbot wrapper on top of an LLM?",
    a: "Flux agents don't just generate text — they take actions inside your real tools, with permissions, audit logs, and approval checkpoints built in. The model is one part of a larger system designed for accountable, production automation.",
  },
  {
    q: "What happens if an agent makes a mistake?",
    a: "Every action includes a full reasoning trace, and you set the confidence threshold that requires human approval before anything ships. Below that threshold, nothing an agent proposes goes live without a person clicking approve.",
  },
  {
    q: "Do we need engineers to build a workflow?",
    a: "No. The visual builder is designed for operations and support teams. Most customers launch their first agent without opening a single line of code — engineering involvement is optional, not required.",
  },
  {
    q: "Which tools does Flux integrate with?",
    a: "Flux ships native integrations for Slack, Zendesk, Stripe, Linear, HubSpot, Salesforce, Notion, and 30+ others, plus a general webhook and API layer for anything custom.",
  },
  {
    q: "Is our data used to train models for other customers?",
    a: "Never. Your workspace data is isolated, encrypted at rest and in transit, and excluded from any model training by default — enforced contractually for every plan, including Starter.",
  },
  {
    q: "What does onboarding actually look like?",
    a: "Most teams deploy their first agent the same day they sign up, using a template tuned on similar workflows. Scale and Enterprise plans include a dedicated onboarding session with our solutions team.",
  },
];

function FaqItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div className="border-b border-line py-5">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-6 text-left"
        aria-expanded={open}
      >
        <span className="text-[16px] font-medium text-paper">{q}</span>
        <Plus
          className={cn(
            "h-4 w-4 shrink-0 text-muted transition-transform duration-300",
            open && "rotate-45 text-amber"
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pt-3.5 text-[14.5px] leading-relaxed text-muted">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <section className="py-28 md:py-36">
      <Container className="max-w-[820px]">
        <SectionHeading kicker="FAQ" title="Questions operations leaders ask before rolling out" />
        <div className="mt-14">
          {FAQS.map((f, i) => (
            <FaqItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
          ))}
        </div>
      </Container>
    </section>
  );
}
