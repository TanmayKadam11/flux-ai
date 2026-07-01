import * as React from "react";
import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1180px] px-6 md:px-8", className)}>
      {children}
    </div>
  );
}

export function Kicker({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-line-strong bg-white/[0.03] px-3 py-1 text-[12px] font-medium uppercase tracking-[0.14em] text-muted",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-amber" aria-hidden />
      {children}
    </div>
  );
}

export function SectionHeading({
  kicker,
  title,
  description,
  align = "center",
  className,
}: {
  kicker?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {kicker && <Kicker>{kicker}</Kicker>}
      <h2 className="max-w-2xl text-balance font-display text-[34px] font-normal leading-[1.15] text-paper md:text-[44px]">
        {title}
      </h2>
      {description && (
        <p className={cn("max-w-xl text-balance text-[16px] leading-relaxed text-muted md:text-[17px]")}>
          {description}
        </p>
      )}
    </div>
  );
}
