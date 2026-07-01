"use client";

import { motion } from "framer-motion";

const LINE_POINTS = [22, 28, 24, 34, 31, 40, 38, 48, 52, 49, 61, 68, 64, 76, 84];

function toPath(points: number[], w: number, h: number, pad = 6) {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const stepX = (w - pad * 2) / (points.length - 1);
  const scaleY = (v: number) => h - pad - ((v - min) / (max - min || 1)) * (h - pad * 2);
  return points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${pad + i * stepX} ${scaleY(p)}`)
    .join(" ");
}

export function LineChart({ className }: { className?: string }) {
  const w = 460;
  const h = 150;
  const linePath = toPath(LINE_POINTS, w, h);
  const areaPath = `${linePath} L ${w - 6} ${h - 6} L 6 ${h - 6} Z`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className={className} preserveAspectRatio="none">
      <defs>
        <linearGradient id="lineFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-amber)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="var(--color-amber)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0, 1, 2, 3].map((i) => (
        <line
          key={i}
          x1="6"
          x2={w - 6}
          y1={12 + i * ((h - 24) / 3)}
          y2={12 + i * ((h - 24) / 3)}
          stroke="var(--color-line)"
          strokeWidth="1"
        />
      ))}
      <motion.path
        d={areaPath}
        fill="url(#lineFill)"
        stroke="none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
      <motion.path
        d={linePath}
        fill="none"
        stroke="var(--color-amber)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
  );
}

const BAR_DATA = [
  { label: "Support", value: 82 },
  { label: "Billing", value: 64 },
  { label: "Ops", value: 47 },
  { label: "Sales", value: 35 },
];

export function BarChart({ className }: { className?: string }) {
  return (
    <div className={className}>
      {BAR_DATA.map((b, i) => (
        <div key={b.label} className="flex items-center gap-3">
          <span className="w-14 shrink-0 text-[11.5px] text-muted-2">{b.label}</span>
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/[0.06]">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: i === 0 ? "var(--color-amber)" : "var(--color-violet)",
              }}
              initial={{ width: 0 }}
              whileInView={{ width: `${b.value}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
          <span className="w-8 shrink-0 text-right font-mono text-[11px] text-muted">{b.value}%</span>
        </div>
      ))}
    </div>
  );
}

const DONUT_DATA = [
  { label: "Auto-resolved", value: 68, color: "var(--color-amber)" },
  { label: "Human reviewed", value: 24, color: "var(--color-violet)" },
  { label: "Escalated", value: 8, color: "var(--color-red)" },
];

export function DonutChart() {
  const size = 120;
  const stroke = 16;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  let offset = 0;

  return (
    <div className="flex items-center gap-5">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--color-line)" strokeWidth={stroke} />
        {DONUT_DATA.map((d) => {
          const dash = (d.value / 100) * c;
          const el = (
            <circle
              key={d.label}
              cx={size / 2}
              cy={size / 2}
              r={r}
              fill="none"
              stroke={d.color}
              strokeWidth={stroke}
              strokeDasharray={`${dash} ${c - dash}`}
              strokeDashoffset={-offset}
              strokeLinecap="butt"
            />
          );
          offset += dash;
          return el;
        })}
      </svg>
      <div className="flex flex-col gap-2">
        {DONUT_DATA.map((d) => (
          <div key={d.label} className="flex items-center gap-2 text-[12px]">
            <span className="h-2 w-2 rounded-full" style={{ background: d.color }} />
            <span className="text-muted">{d.label}</span>
            <span className="font-mono text-paper/80">{d.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
