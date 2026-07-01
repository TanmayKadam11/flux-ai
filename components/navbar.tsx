"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Product", href: "#features" },
  { label: "Agents", href: "#agents" },
  { label: "Automation", href: "#automation" },
  { label: "Pricing", href: "#pricing" },
  { label: "Customers", href: "#testimonials" },
];

function Logo() {
  return (
    <a href="#top" className="group flex items-center gap-2.5" aria-label="Flux home">
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="26" height="26" rx="7" fill="var(--color-paper)" />
        <path
          d="M8 18V8H17.5"
          stroke="var(--color-ink)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M8 13H14.5" stroke="var(--color-ink)" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="18.5" cy="18" r="1.6" fill="var(--color-amber)" />
      </svg>
      <span className="font-display text-[19px] italic tracking-tight text-paper">Flux</span>
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header id="top" className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "transition-all duration-500 ease-out",
          scrolled ? "mt-3" : "mt-0"
        )}
      >
        <Container>
          <div
            className={cn(
              "flex h-16 items-center justify-between rounded-2xl border px-4 transition-all duration-500 ease-out md:px-5",
              scrolled
                ? "border-line-strong bg-ink-2/80 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)] backdrop-blur-xl"
                : "border-transparent bg-transparent"
            )}
          >
            <div className="flex items-center gap-9">
              <Logo />
              <nav className="hidden items-center gap-7 lg:flex">
                {LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-[13.5px] font-medium text-muted transition-colors hover:text-paper"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <a
                href="#contact"
                className="px-3 text-[13.5px] font-medium text-muted transition-colors hover:text-paper"
              >
                Sign in
              </a>
              <Button size="sm" className="pr-3.5">
                Start free
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </div>

            <button
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-paper md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </Container>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mx-4 mt-2 rounded-2xl border border-line-strong bg-ink-2/95 p-4 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col gap-1">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-paper/90 hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 flex flex-col gap-2 border-t border-line pt-3">
                <a href="#contact" className="px-3 py-2 text-[15px] text-muted">
                  Sign in
                </a>
                <Button size="md" className="w-full">
                  Start free
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
