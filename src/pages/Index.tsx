import HeroSection from "@/components/validator/HeroSection";
import ValidatorTool from "@/components/validator/ValidatorTool";
import WhatIsSection from "@/components/validator/WhatIsSection";
import WhyUseSection from "@/components/validator/WhyUseSection";
import HowToUseSection from "@/components/validator/HowToUseSection";
import MoreToolsSection from "@/components/validator/MoreToolsSection";
import FAQSection from "@/components/validator/FAQSection";
import CrossSellSection from "@/components/validator/CrossSellSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ValidatorTool />
      <WhatIsSection />
      <WhyUseSection />
      <HowToUseSection />
      <MoreToolsSection />
      <FAQSection />
      <CrossSellSection />

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container text-center text-caption text-muted-foreground">
          © {new Date().getFullYear()} Letsmetrix. All rights reserved. |{" "}
          <a href="https://letsmetrix.com" className="text-primary hover:underline">
            letsmetrix.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
