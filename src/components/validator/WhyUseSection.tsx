import { motion } from "framer-motion";
import { FileSearch, ShieldCheck, Lightbulb, Eye, Link2, LayoutTemplate } from "lucide-react";

const features = [
  { icon: FileSearch, title: "Detailed Error Reports", desc: "Identify issues instantly with precise error reports. Highlights specific lines and warnings to fix formatting or structural mistakes quickly." },
  { icon: ShieldCheck, title: "Comprehensive Validation", desc: "Deep validation of every required and optional element. Scans for syntax, structure, and formatting accuracy against the latest LLMs.txt standards." },
  { icon: Lightbulb, title: "Actionable Suggestions", desc: "Get real improvement insights with clear, practical suggestions to enhance your file's readability, compliance, and AI-crawler friendliness." },
  { icon: Eye, title: "Live Preview Mode", desc: "Visualize how your llms.txt file will appear once published. Review layout, headings, and content hierarchy in real time." },
  { icon: Link2, title: "Link Validation", desc: "Automatically verify all links inside your llms.txt file. Tests every hyperlink to confirm it's active, accessible, and correctly formatted." },
  { icon: LayoutTemplate, title: "URL or Text Options", desc: "Validate your file by pasting content or entering your website's URL. Supports both text input and live URL validation." },
];

const WhyUseSection = () => (
  <section className="py-16 bg-muted/30">
    <div className="container">
      <h2 className="text-h2 text-foreground text-center mb-4">
        Key Features of Our LLMs.txt Checker
      </h2>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        Unlike basic syntax tools, the LLMs.txt Checker performs a deep technical audit with actionable recommendations.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-xl border border-border p-5 shadow-card"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1.5">{f.title}</h3>
              <p className="text-caption text-muted-foreground">{f.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhyUseSection;
