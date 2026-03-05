import { FileText, Map, Bot, Tag, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const tools = [
  { icon: FileText, name: "Robots.txt Validator", desc: "Check your robots.txt file for errors and best practices." },
  { icon: Map, name: "Sitemap Validator", desc: "Validate your XML sitemap structure and accessibility." },
  { icon: Bot, name: "AI Crawler Checker", desc: "Detect which AI bots are crawling your website." },
  { icon: Tag, name: "Meta Tag Analyzer", desc: "Analyze meta tags for SEO and social sharing." },
  { icon: Code2, name: "Structured Data Validator", desc: "Test your JSON-LD and schema.org markup." },
];

const MoreToolsSection = () => (
  <section className="py-16">
    <div className="container">
      <h2 className="text-h2 text-foreground text-center mb-10">
        More AI SEO Tools
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {tools.map((tool, i) => {
          const Icon = tool.icon;
          return (
            <div
              key={i}
              className="bg-card rounded-xl border border-border p-5 shadow-card hover:shadow-soft transition-shadow group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/15 transition-colors">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1.5">{tool.name}</h3>
              <p className="text-caption text-muted-foreground mb-4">{tool.desc}</p>
              <Button variant="outline" size="sm" className="w-full">
                Try Tool
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default MoreToolsSection;
