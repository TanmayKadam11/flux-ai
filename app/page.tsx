import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TrustedBy } from "@/components/trusted-by";
import { Features } from "@/components/features";
import { AIWorkflow } from "@/components/ai-workflow";
import { DashboardPreview } from "@/components/dashboard-preview";
import { AIAgents } from "@/components/ai-agents";
import { Automation } from "@/components/automation";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <AIWorkflow />
        <DashboardPreview />
        <AIAgents />
        <Automation />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
