import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic", "normal"],
  variable: "--font-instrument",
  display: "swap",
});

const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
  display: "swap",
});

const siteUrl = "https://flux.ai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Flux — The operating system for AI-native teams",
    template: "%s · Flux",
  },
  description:
    "Flux gives teams a single workspace to build, deploy, and supervise autonomous AI agents — connected to every tool you already use.",
  keywords: [
    "AI agents",
    "workflow automation",
    "AI SaaS",
    "enterprise AI platform",
    "AI operations",
  ],
  authors: [{ name: "Scalio Studio" }],
  openGraph: {
    title: "Flux — The operating system for AI-native teams",
    description:
      "Build, deploy, and supervise autonomous AI agents in one workspace connected to every tool you use.",
    url: siteUrl,
    siteName: "Flux",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flux — The operating system for AI-native teams",
    description:
      "Build, deploy, and supervise autonomous AI agents in one workspace connected to every tool you use.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrument.variable} ${jbmono.variable}`}>
      <body className="bg-ink text-paper antialiased">{children}</body>
    </html>
  );
}
