"use client";

import {
  ArrowDownRight,
  ArrowUpRight,
  Bot,
  Building2,
  CreditCard,
  FileText,
  GitBranch,
  LifeBuoy,
  MessageCircle,
  Play,
  Send,
  Sparkles,
  Pause,
} from "lucide-react";
import { BarChart, DonutChart, LineChart } from "@/components/dashboard/charts";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------- */
/* Analytics                                                              */
/* -------------------------------------------------------------------- */

const KPIS = [
  { label: "Tasks automated", value: "128,402", delta: "+18.2%", up: true },
  { label: "Avg. resolution time", value: "4m 12s", delta: "-32%", up: true },
  { label: "Agent accuracy", value: "96.4%", delta: "+2.1%", up: true },
  { label: "Cost saved / mo", value: "$84,210", delta: "+24%", up: true },
];

export function AnalyticsTab() {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {KPIS.map((k) => (
          <div key={k.label} className="rounded-xl border border-line bg-ink-2/60 p-4">
            <p className="text-[11.5px] text-muted-2">{k.label}</p>
            <p className="mt-1.5 font-mono text-[19px] text-paper">{k.value}</p>
            <span
              className={cn(
                "mt-1.5 inline-flex items-center gap-0.5 text-[11px] font-medium",
                k.up ? "text-green" : "text-red"
              )}
            >
              {k.up ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
              {k.delta}
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-xl border border-line bg-ink-2/60 p-5">
          <div className="mb-1 flex items-center justify-between">
            <p className="text-[13px] font-medium text-paper">Tasks automated</p>
            <span className="text-[11px] text-muted-2">Last 12 weeks</span>
          </div>
          <LineChart className="mt-3 h-[130px] w-full" />
        </div>
        <div className="rounded-xl border border-line bg-ink-2/60 p-5">
          <p className="mb-4 text-[13px] font-medium text-paper">Resolution outcomes</p>
          <DonutChart />
        </div>
      </div>

      <div className="rounded-xl border border-line bg-ink-2/60 p-5">
        <p className="mb-4 text-[13px] font-medium text-paper">Volume by team</p>
        <BarChart className="flex flex-col gap-3" />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------- */
/* AI Assistant                                                          */
/* -------------------------------------------------------------------- */

export function AssistantTab() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-line bg-ink-2/60">
      <div className="flex items-center gap-2.5 border-b border-line px-5 py-3.5">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber/15">
          <Sparkles className="h-3.5 w-3.5 text-amber" />
        </div>
        <div>
          <p className="text-[13px] font-medium text-paper">Flux Copilot</p>
          <p className="text-[11px] text-muted-2">Answers grounded in your workspace data</p>
        </div>
      </div>

      <div className="scroll-thin flex flex-1 flex-col gap-4 overflow-y-auto px-5 py-5">
        <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/[0.05] px-4 py-3 text-[13.5px] leading-relaxed text-paper/90">
          Which agent is closing the most billing tickets this week, and how confident is it?
        </div>
        <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-amber/10 px-4 py-3 text-[13.5px] leading-relaxed text-paper/90">
          <span className="font-medium text-amber">Refund Agent</span> closed 341 billing tickets this
          week at 96% average confidence — up from 88% last week after you approved its handling of
          partial refunds. Want me to raise its auto-approval threshold?
        </div>
        <div className="flex flex-wrap gap-2 pt-1">
          {["Raise threshold to 90%", "Show reasoning trace", "Compare to last month"].map((s) => (
            <button
              key={s}
              className="rounded-full border border-line-strong px-3 py-1.5 text-[11.5px] text-muted transition-colors hover:border-amber/40 hover:text-paper"
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 border-t border-line p-3">
        <div className="flex flex-1 items-center rounded-lg border border-line-strong bg-white/[0.03] px-3.5 py-2.5 text-[13px] text-muted-2">
          Ask Copilot anything about your workspace…
        </div>
        <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-paper text-ink">
          <Send className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------- */
/* Workspace                                                             */
/* -------------------------------------------------------------------- */

const WORKFLOWS = [
  { name: "Refund approvals", trigger: "Stripe · disputed charge", status: "Active", success: "96%" },
  { name: "Ticket triage", trigger: "Zendesk · new ticket", status: "Active", success: "91%" },
  { name: "Renewal outreach", trigger: "HubSpot · 30d to renewal", status: "Paused", success: "84%" },
  { name: "Invoice reconciliation", trigger: "QuickBooks · nightly", status: "Active", success: "99%" },
];

const AGENTS = [
  { name: "Refund Agent", role: "Billing operations", tasks: "12,402" },
  { name: "Triage Agent", role: "Support routing", tasks: "38,120" },
  { name: "Outreach Agent", role: "Lifecycle marketing", tasks: "6,904" },
];

export function WorkspaceTab() {
  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-xl border border-line bg-ink-2/60">
        <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
          <p className="text-[13px] font-medium text-paper">Active workflows</p>
          <span className="text-[11px] text-muted-2">{WORKFLOWS.length} total</span>
        </div>
        <div className="divide-y divide-white/[0.06]">
          {WORKFLOWS.map((w) => (
            <div key={w.name} className="flex items-center justify-between gap-4 px-5 py-3.5">
              <div className="min-w-0">
                <p className="truncate text-[13.5px] text-paper/90">{w.name}</p>
                <p className="truncate text-[11.5px] text-muted-2">{w.trigger}</p>
              </div>
              <div className="flex shrink-0 items-center gap-4">
                <span className="hidden font-mono text-[12px] text-muted sm:inline">{w.success}</span>
                <span
                  className={cn(
                    "flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium",
                    w.status === "Active" ? "bg-green/10 text-green" : "bg-white/[0.06] text-muted"
                  )}
                >
                  {w.status === "Active" ? <Play className="h-2.5 w-2.5 fill-current" /> : <Pause className="h-2.5 w-2.5 fill-current" />}
                  {w.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-line bg-ink-2/60">
        <div className="border-b border-line px-5 py-3.5">
          <p className="text-[13px] font-medium text-paper">Deployed agents</p>
        </div>
        <div className="divide-y divide-white/[0.06]">
          {AGENTS.map((a) => (
            <div key={a.name} className="flex items-center gap-3.5 px-5 py-3.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet/15">
                <Bot className="h-4 w-4 text-violet-soft" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[13.5px] text-paper/90">{a.name}</p>
                <p className="truncate text-[11.5px] text-muted-2">{a.role}</p>
              </div>
              <span className="font-mono text-[12px] text-muted">{a.tasks} tasks</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------- */
/* Settings                                                              */
/* -------------------------------------------------------------------- */

function Toggle({ defaultOn = false }: { defaultOn?: boolean }) {
  return (
    <div
      className={cn(
        "flex h-5 w-9 items-center rounded-full p-0.5 transition-colors",
        defaultOn ? "justify-end bg-amber" : "justify-start bg-white/10"
      )}
    >
      <div className="h-4 w-4 rounded-full bg-ink shadow-sm" />
    </div>
  );
}

export function SettingsTab() {
  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-xl border border-line bg-ink-2/60 p-5">
        <p className="mb-4 text-[13px] font-medium text-paper">Workspace</p>
        <div className="flex flex-col gap-3.5">
          <label className="flex flex-col gap-1.5">
            <span className="text-[11.5px] text-muted-2">Workspace name</span>
            <div className="rounded-lg border border-line-strong bg-white/[0.03] px-3.5 py-2.5 text-[13.5px] text-paper/90">
              Northwind Operations
            </div>
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-[11.5px] text-muted-2">Default timezone</span>
            <div className="rounded-lg border border-line-strong bg-white/[0.03] px-3.5 py-2.5 text-[13.5px] text-paper/90">
              (GMT-05:00) Eastern Time
            </div>
          </label>
        </div>
      </div>

      <div className="rounded-xl border border-line bg-ink-2/60 p-5">
        <p className="mb-4 text-[13px] font-medium text-paper">Preferences</p>
        <div className="flex flex-col divide-y divide-white/[0.06]">
          {[
            { label: "Two-factor authentication", desc: "Require a code at every sign-in", on: true },
            { label: "Weekly digest email", desc: "Summary of agent activity every Monday", on: true },
            { label: "Auto-approve low-risk actions", desc: "Skip checkpoints under 5% risk score", on: false },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between gap-4 py-3.5 first:pt-0 last:pb-0">
              <div>
                <p className="text-[13.5px] text-paper/90">{item.label}</p>
                <p className="text-[11.5px] text-muted-2">{item.desc}</p>
              </div>
              <Toggle defaultOn={item.on} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------- */
/* Billing                                                               */
/* -------------------------------------------------------------------- */

const INVOICES = [
  { id: "INV-2216", date: "Jun 1, 2026", amount: "$499.00", status: "Paid" },
  { id: "INV-2184", date: "May 1, 2026", amount: "$499.00", status: "Paid" },
  { id: "INV-2151", date: "Apr 1, 2026", amount: "$499.00", status: "Paid" },
];

export function BillingTab() {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-xl border border-line bg-ink-2/60 p-5">
          <div className="flex items-center justify-between">
            <p className="text-[13px] font-medium text-paper">Scale plan</p>
            <span className="rounded-full bg-amber/10 px-2.5 py-1 text-[11px] font-medium text-amber">Active</span>
          </div>
          <p className="mt-3 font-mono text-[24px] text-paper">
            $499<span className="text-[13px] text-muted-2">/mo</span>
          </p>
          <p className="mt-3 text-[11.5px] text-muted-2">Tasks used this cycle</p>
          <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/[0.06]">
            <div className="h-full w-[84%] rounded-full bg-amber" />
          </div>
          <p className="mt-1.5 font-mono text-[11px] text-muted">84,210 / 100,000</p>
        </div>

        <div className="rounded-xl border border-line bg-ink-2/60 p-5">
          <p className="text-[13px] font-medium text-paper">Payment method</p>
          <div className="mt-4 flex items-center gap-3 rounded-lg border border-line-strong bg-white/[0.03] px-4 py-3.5">
            <CreditCard className="h-4 w-4 text-muted" />
            <div>
              <p className="text-[13px] text-paper/90">Visa •••• 4242</p>
              <p className="text-[11px] text-muted-2">Expires 08/28</p>
            </div>
          </div>
          <button className="mt-3 text-[12px] font-medium text-amber">Update payment method</button>
        </div>
      </div>

      <div className="rounded-xl border border-line bg-ink-2/60">
        <div className="border-b border-line px-5 py-3.5">
          <p className="text-[13px] font-medium text-paper">Invoice history</p>
        </div>
        <div className="divide-y divide-white/[0.06]">
          {INVOICES.map((inv) => (
            <div key={inv.id} className="flex items-center justify-between px-5 py-3.5">
              <div className="flex items-center gap-3">
                <FileText className="h-3.5 w-3.5 text-muted-2" />
                <span className="font-mono text-[12.5px] text-paper/90">{inv.id}</span>
                <span className="text-[12px] text-muted-2">{inv.date}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-mono text-[12.5px] text-muted">{inv.amount}</span>
                <span className="rounded-full bg-green/10 px-2 py-0.5 text-[10.5px] font-medium text-green">
                  {inv.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------- */
/* Integrations                                                          */
/* -------------------------------------------------------------------- */

const INTEGRATIONS = [
  { name: "Slack", desc: "Notifications & approvals", icon: MessageCircle, connected: true },
  { name: "Zendesk", desc: "Ticket triage", icon: LifeBuoy, connected: true },
  { name: "Stripe", desc: "Billing & refunds", icon: CreditCard, connected: true },
  { name: "Linear", desc: "Engineering tasks", icon: GitBranch, connected: true },
  { name: "HubSpot", desc: "Lifecycle marketing", icon: Building2, connected: false },
  { name: "Notion", desc: "Knowledge base", icon: FileText, connected: false },
];

export function IntegrationsTab() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {INTEGRATIONS.map((i) => (
        <div key={i.name} className="flex items-center gap-3.5 rounded-xl border border-line bg-ink-2/60 p-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line-strong bg-white/[0.03]">
            <i.icon className="h-[18px] w-[18px] text-muted" strokeWidth={1.75} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[13.5px] text-paper/90">{i.name}</p>
            <p className="truncate text-[11.5px] text-muted-2">{i.desc}</p>
          </div>
          {i.connected ? (
            <span className="shrink-0 rounded-full bg-green/10 px-2.5 py-1 text-[11px] font-medium text-green">
              Connected
            </span>
          ) : (
            <button className="shrink-0 rounded-full border border-line-strong px-2.5 py-1 text-[11px] font-medium text-muted hover:text-paper">
              Connect
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
