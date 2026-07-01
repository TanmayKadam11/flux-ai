"use client";

import * as React from "react";
import { ArrowRight, Mail, MapPin, MessageCircle } from "lucide-react";
import { Container, Kicker } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const CHANNELS = [
  { icon: Mail, label: "Email", value: "hello@flux.ai" },
  { icon: MessageCircle, label: "Live chat", value: "Mon–Fri, 6am–6pm PT" },
  { icon: MapPin, label: "Headquarters", value: "San Francisco, CA" },
];

export function Contact() {
  const [submitted, setSubmitted] = React.useState(false);

  return (
    <section id="contact" className="border-y border-line py-28 md:py-36">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Kicker className="mb-6">Talk to sales</Kicker>
            <h2 className="max-w-md text-balance font-display text-[36px] font-normal leading-[1.15] text-paper md:text-[44px]">
              Let's find the first workflow worth automating
            </h2>
            <p className="mt-5 max-w-sm text-balance text-[16px] leading-relaxed text-muted">
              Tell us what your team spends the most repetitive hours on. We'll show you what it looks like as a Flux agent within a day.
            </p>

            <div className="mt-11 flex flex-col gap-5">
              {CHANNELS.map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line-strong bg-white/[0.03] text-amber">
                    <c.icon className="h-4 w-4" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-[11.5px] text-muted-2">{c.label}</p>
                    <p className="text-[14.5px] text-paper/90">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-ink-2/60 p-8 md:p-10">
            {submitted ? (
              <div className="flex h-full min-h-[320px] flex-col items-center justify-center text-center">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-amber/10">
                  <ArrowRight className="h-5 w-5 text-amber" />
                </div>
                <h3 className="text-[18px] font-medium text-paper">Message sent</h3>
                <p className="mt-2 max-w-xs text-[14px] text-muted">
                  Someone from our solutions team will reply within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="flex flex-col gap-5"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="First name" id="firstName" placeholder="Jordan" />
                  <Field label="Last name" id="lastName" placeholder="Reyes" />
                </div>
                <Field label="Work email" id="email" type="email" placeholder="jordan@company.com" />
                <Field label="Company" id="company" placeholder="Northwind" />
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[12.5px] font-medium text-muted">
                    What would you like to automate?
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="e.g. billing refunds, ticket triage, renewal outreach…"
                    className="resize-none rounded-lg border border-line-strong bg-white/[0.03] px-4 py-3 text-[14px] text-paper placeholder:text-muted-2 focus:border-amber/50"
                  />
                </div>
                <Button type="submit" size="lg" className="mt-2 w-full sm:w-fit">
                  Send message
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[12.5px] font-medium text-muted">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        placeholder={placeholder}
        className="rounded-lg border border-line-strong bg-white/[0.03] px-4 py-3 text-[14px] text-paper placeholder:text-muted-2 focus:border-amber/50"
      />
    </div>
  );
}
