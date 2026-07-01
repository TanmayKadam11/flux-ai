"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    name: "Starter",
    description: "For small teams automating their first workflow.",
    monthly: 0,
    annual: 0,
    cta: "Start free",
    variant: "secondary" as const,
    features: ["1 active agent", "1,000 tasks / month", "Core integrations", "Community support"],
  },
  {
    name: "Scale",
    description: "For operations teams running agents in production.",
    monthly: 499,
    annual: 399,
    cta: "Start free trial",
    variant: "primary" as const,
    featured: true,
    features: [
      "Unlimited agents",
      "100,000 tasks / month",
      "All integrations",
      "Human approval checkpoints",
      "Priority support",
      "Audit log & SSO",
    ],
  },
  {
    name: "Enterprise",
    description: "For companies with custom security and scale needs.",
    monthly: null,
    annual: null,
    cta: "Talk to sales",
    variant: "secondary" as const,
    features: [
      "Unlimited everything",
      "Dedicated infrastructure",
      "Custom model routing",
      "SOC 2, HIPAA, GDPR",
      "Dedicated success manager",
      "99.99% uptime SLA",
    ],
  },
];

export function Pricing() {
  const [annual, setAnnual] = React.useState(true);

  return (
    <section id="pricing" className="border-y border-line py-28 md:py-36">
      <Container>
        <SectionHeading
          kicker="Pricing"
          title="Plans that scale from your first agent to your entire org"
          description="Every plan includes unlimited seats. You only pay for the work your agents complete."
        />

        <div className="mt-10 flex items-center justify-center gap-3">
          <span className={cn("text-[13.5px]", !annual ? "text-paper" : "text-muted")}>Monthly</span>
          <button
            onClick={() => setAnnual((v) => !v)}
            className="flex h-6 w-11 items-center rounded-full bg-white/10 p-0.5 transition-colors"
            aria-label="Toggle annual billing"
          >
            <motion.div
              className="h-5 w-5 rounded-full bg-amber"
              animate={{ x: annual ? 20 : 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          </button>
          <span className={cn("flex items-center gap-2 text-[13.5px]", annual ? "text-paper" : "text-muted")}>
            Annual
            <span className="rounded-full bg-green/10 px-2 py-0.5 text-[11px] font-medium text-green">Save 20%</span>
          </span>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "relative flex flex-col rounded-2xl border p-8",
                plan.featured
                  ? "border-amber/40 bg-gradient-to-b from-amber/[0.07] to-transparent"
                  : "border-line bg-ink-2/60"
              )}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-amber px-3 py-1 text-[11px] font-semibold text-ink">
                  Most popular
                </span>
              )}
              <h3 className="text-[16px] font-medium text-paper">{plan.name}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{plan.description}</p>

              <div className="mt-6 flex items-end gap-1">
                {plan.monthly === null ? (
                  <span className="font-display text-[36px] italic text-paper">Custom</span>
                ) : (
                  <>
                    <span className="font-mono text-[36px] text-paper">
                      ${annual ? plan.annual : plan.monthly}
                    </span>
                    <span className="mb-1.5 text-[13.5px] text-muted-2">/mo</span>
                  </>
                )}
              </div>

              <Button variant={plan.variant} size="md" className="mt-7 w-full">
                {plan.cta}
              </Button>

              <ul className="mt-8 flex flex-col gap-3 border-t border-line pt-7">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-[13.5px] text-paper/80">
                    <Check className="h-3.5 w-3.5 shrink-0 text-amber" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
