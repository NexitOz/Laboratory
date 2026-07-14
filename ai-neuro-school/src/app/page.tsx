import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SubscriptionModalProvider } from "@/components/providers/SubscriptionModalProvider";
import { Hero } from "@/components/sections/Hero";
import { ToolsMarquee } from "@/components/sections/ToolsMarquee";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { CoursesGrid } from "@/components/sections/CoursesGrid";
import { HiggsfieldSpotlight } from "@/components/sections/HiggsfieldSpotlight";
import { CuratorBenefits } from "@/components/sections/CuratorBenefits";
import { PricingSection } from "@/components/sections/PricingSection";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <SubscriptionModalProvider>
      <Header />
      <main className="flex-1">
        <Hero />
        <ToolsMarquee />
        <ComparisonSection />
        <CoursesGrid />
        <HiggsfieldSpotlight />
        <CuratorBenefits />
        <PricingSection />
        <CaseStudies />
        <Testimonials />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </SubscriptionModalProvider>
  );
}
