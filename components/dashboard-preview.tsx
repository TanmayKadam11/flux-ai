"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Bell,
  Bot,
  CreditCard,
  LayoutGrid,
  Plug,
  Settings,
  Sparkles,
  BarChart3,
} from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import {
  AnalyticsTab,
  AssistantTab,
  BillingTab,
  IntegrationsTab,
  SettingsTab,
  WorkspaceTab,
} from "@/components/dashboard/tabs";

const TABS = [
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "workspace", label: "Workspace", icon: LayoutGrid },
  { id: "assistant", label: "Copilot", icon: Sparkles },
  { id: "integrations", label: "Integrations", icon: Plug },
  { id: "billing", label: "Billing", icon: CreditCard },
  { id: "settings", label: "Settings", icon: Settings },
] as const;

type TabId = (typeof TABS)[number]["id"];

const NOTIFICATIONS = [
  { title: "Refund Agent needs approval", time: "2m ago", tone: "amber" },
  { title: "Linear integration connected", time: "1h ago", tone: "green" },
  { title: "Weekly report is ready", time: "3h ago", tone: "violet" },
];

function NotificationsMenu({ open }: { open: boolean }) {
  if (!open) return null;
  return (
    <div className="absolute right-0 top-11 z-20 w-72 overflow-hidden rounded-xl border border-line-strong bg-ink-2 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)]">
      <div className="border-b border-line px-4 py-3 text-[12.5px] font-medium text-paper">Notifications</div>
      <div className="divide-y divide-white/[0.06]">
        {NOTIFICATIONS.map((n) => (
          <div key={n.title} className="flex items-start gap-3 px-4 py-3">
            <span
              className={cn(
                "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full",
                n.tone === "amber" && "bg-amber",
                n.tone === "green" && "bg-green",
                n.tone === "violet" && "bg-violet"
              )}
            />
            <div>
              <p className="text-[12.5px] text-paper/90">{n.title}</p>
              <p className="text-[11px] text-muted-2">{n.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DashboardPreview() {
  const [tab, setTab] = React.useState<TabId>("analytics");
  const [notifOpen, setNotifOpen] = React.useState(false);

  return (
    <section className="py-28 md:py-36">
      <Container>
        <SectionHeading
          kicker="Product"
          title="One workspace. Every agent, every metric, every approval."
          description="This is the actual interface your team logs into every morning — not a marketing mockup."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 overflow-hidden rounded-2xl border border-line-strong bg-ink-2/80 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.8)]"
        >
          {/* window chrome */}
          <div className="flex items-center gap-3 border-b border-line bg-ink-3/60 px-4 py-3">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            </div>
            <div className="mx-auto hidden items-center gap-1.5 rounded-md bg-white/[0.04] px-3 py-1 text-[11.5px] text-muted-2 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-green" />
              app.flux.ai/workspace
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[220px_1fr]">
            {/* sidebar */}
            <div className="hidden flex-col justify-between border-r border-line p-4 md:flex">
              <div>
                <div className="mb-6 flex items-center gap-2 px-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-md bg-paper">
                    <Bot className="h-3.5 w-3.5 text-ink" />
                  </div>
                  <span className="text-[13px] font-medium text-paper">Northwind Ops</span>
                </div>
                <nav className="flex flex-col gap-0.5">
                  {TABS.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setTab(t.id)}
                      className={cn(
                        "flex items-center gap-2.5 rounded-lg px-3 py-2 text-left text-[13px] transition-colors",
                        tab === t.id
                          ? "bg-white/[0.07] text-paper"
                          : "text-muted hover:bg-white/[0.03] hover:text-paper"
                      )}
                    >
                      <t.icon className="h-[15px] w-[15px]" strokeWidth={1.75} />
                      {t.label}
                    </button>
                  ))}
                </nav>
              </div>
              <div className="flex items-center gap-2.5 rounded-lg border border-line-strong bg-white/[0.02] px-3 py-2.5">
                <div className="h-7 w-7 shrink-0 rounded-full bg-gradient-to-br from-amber to-violet" />
                <div className="min-w-0">
                  <p className="truncate text-[12px] text-paper/90">Jordan Reyes</p>
                  <p className="truncate text-[11px] text-muted-2">Ops Lead</p>
                </div>
              </div>
            </div>

            {/* main content */}
            <div className="flex min-h-[560px] flex-col">
              <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
                <div>
                  <p className="text-[14px] font-medium text-paper">
                    {TABS.find((t) => t.id === tab)?.label}
                  </p>
                </div>
                <div className="relative flex items-center gap-3">
                  <button
                    onClick={() => setNotifOpen((v) => !v)}
                    className="relative flex h-8 w-8 items-center justify-center rounded-lg text-muted hover:bg-white/[0.05] hover:text-paper"
                    aria-label="Notifications"
                  >
                    <Bell className="h-4 w-4" />
                    <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-amber" />
                  </button>
                  <NotificationsMenu open={notifOpen} />
                  <div className="h-7 w-7 rounded-full bg-gradient-to-br from-amber to-violet md:hidden" />
                </div>
              </div>

              {/* mobile tab switcher */}
              <div className="scroll-thin flex gap-1 overflow-x-auto border-b border-line px-3 py-2 md:hidden">
                {TABS.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTab(t.id)}
                    className={cn(
                      "shrink-0 rounded-full px-3 py-1.5 text-[12px]",
                      tab === t.id ? "bg-white/[0.08] text-paper" : "text-muted"
                    )}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              <div className="scroll-thin flex-1 overflow-y-auto p-5">
                {tab === "analytics" && <AnalyticsTab />}
                {tab === "workspace" && <WorkspaceTab />}
                {tab === "assistant" && <AssistantTab />}
                {tab === "integrations" && <IntegrationsTab />}
                {tab === "billing" && <BillingTab />}
                {tab === "settings" && <SettingsTab />}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
