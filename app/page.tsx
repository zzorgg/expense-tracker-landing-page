import HeroSection from "@/components/hero-section";
import Features from "@/components/features-4";
import IntegrationsSection from "@/components/integrations";
import CallToAction from "@/components/call-to-action";
import FooterSection from "@/components/footer";

export default function Home() {
  return (
      <>
          <HeroSection />
          <Features />
          <IntegrationsSection />
          <CallToAction />
          <FooterSection />
      </>
  );
}
