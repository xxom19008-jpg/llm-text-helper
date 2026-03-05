import HeroSection from "@/components/validator/HeroSection";
import ValidatorTool from "@/components/validator/ValidatorTool";
import HowToUseSection from "@/components/validator/HowToUseSection";
import WhyUseSection from "@/components/validator/WhyUseSection";
import WhatIsSection from "@/components/validator/WhatIsSection";
import CrossSellSection from "@/components/validator/CrossSellSection";
import FAQSection from "@/components/validator/FAQSection";
import MoreToolsSection from "@/components/validator/MoreToolsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ValidatorTool />
      <HowToUseSection />
      <WhyUseSection />
      <WhatIsSection />
      <CrossSellSection />
      <FAQSection />
      <MoreToolsSection />

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
