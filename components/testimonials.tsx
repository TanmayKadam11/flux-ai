"use client";

import { motion } from "framer-motion";
import { Container, SectionHeading } from "@/components/ui/container";

const TESTIMONIALS = [
  {
    quote:
      "We measured Flux against a six-month internal build. It shipped more reliable automation in three weeks, and our support team actually trusts the output.",
    name: "Priya Ramesh",
    role: "VP of Operations, Northwind",
    big: true,
  },
  {
    quote: "The approval checkpoints are what sold our compliance team. Nothing ships without a human until we say so.",
    name: "Daniel Cho",
    role: "Head of Support, Cabana Health",
  },
  {
    quote: "Our billing team went from a two-day refund backlog to same-hour resolution in the first month.",
    name: "Marisol Ibarra",
    role: "Finance Lead, Fernbridge",
  },
  {
    quote: "Watching the reasoning trace on every decision changed how we think about trusting automation at all.",
    name: "Owen Brandt",
    role: "COO, Redline Labs",
  },
  {
    quote: "Setup took an afternoon. Most vendors quoted us a quarter.",
    name: "Kendra Voss",
    role: "IT Director, Loop Freight",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-28 md:py-36">
      <Container>
        <SectionHeading
          kicker="Customers"
          title="Operations leaders don't adopt what they can't audit"
          description="Every quote below is from a team running Flux in production today."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col justify-between rounded-2xl border border-line bg-ink-2/60 p-7 ${
                t.big ? "md:col-span-2 lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <blockquote
                className={`text-balance leading-relaxed text-paper/90 ${
                  t.big ? "font-display text-[24px] italic md:text-[28px]" : "text-[15px]"
                }`}
              >
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3">
                <div className="h-9 w-9 shrink-0 rounded-full bg-gradient-to-br from-amber to-violet" aria-hidden />
                <div>
                  <p className="text-[13.5px] font-medium text-paper">{t.name}</p>
                  <p className="text-[12px] text-muted-2">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
