import { ChevronRight } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.jpg";

const HeroSection = () => {
  return (
    <section className="pt-8 pb-4">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-caption text-muted-foreground mb-6">
          <a href="https://letsmetrix.com" className="hover:text-primary transition-colors">Home</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <span>Free Tools</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-medium">LLMs.txt Validator</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Heading */}
          <div>
            <h1 className="text-h1 text-foreground mb-4">
              LLMs.txt Validator – Free Online Tool
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Check whether your website correctly implements an{" "}
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-code text-primary">llms.txt</code>{" "}
              file for AI crawlers like ChatGPT, Claude, and Perplexity.
              Improve your visibility in AI search results.
            </p>
          </div>

          {/* Hero Image */}
          <div className="hidden md:block">
            <img
              src={heroIllustration}
              alt="AI web crawlers scanning and validating website content"
              className="w-full rounded-xl"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
