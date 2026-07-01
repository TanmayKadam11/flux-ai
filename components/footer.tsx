import { Github, Linkedin, Twitter } from "lucide-react";
import { Container } from "@/components/ui/container";

const COLUMNS = [
  {
    title: "Product",
    links: ["Features", "Agent library", "Automation", "Pricing", "Changelog"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Blog", "Press"],
  },
  {
    title: "Resources",
    links: ["Documentation", "API reference", "Status", "Security"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "DPA", "Subprocessors"],
  },
];

export function Footer() {
  return (
    <footer className="pb-10 pt-20">
      <Container>
        <div className="grid grid-cols-2 gap-10 border-b border-line pb-14 md:grid-cols-6">
          <div className="col-span-2">
            <a href="#top" className="flex items-center gap-2.5">
              <svg width="24" height="24" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="26" height="26" rx="7" fill="var(--color-paper)" />
                <path d="M8 18V8H17.5" stroke="var(--color-ink)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 13H14.5" stroke="var(--color-ink)" strokeWidth="2.2" strokeLinecap="round" />
                <circle cx="18.5" cy="18" r="1.6" fill="var(--color-amber)" />
              </svg>
              <span className="font-display text-[19px] italic text-paper">Flux</span>
            </a>
            <p className="mt-5 max-w-[220px] text-[13.5px] leading-relaxed text-muted">
              The operating system for AI-native teams. Built by Scalio Studio.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-line-strong text-muted transition-colors hover:text-paper"
                  aria-label="Social link"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-[12.5px] font-medium text-paper">{col.title}</p>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[13.5px] text-muted transition-colors hover:text-paper">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-[12.5px] text-muted-2 sm:flex-row">
          <p>© 2026 Flux Labs, Inc. All rights reserved.</p>
          <p>Designed &amp; built by Scalio Studio</p>
        </div>
      </Container>
    </footer>
  );
}
