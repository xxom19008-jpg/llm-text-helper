import { motion } from "framer-motion";

const steps = [
  { step: 1, icon: "🔗", title: "Choose Your Input Method", desc: "Select URL Input to validate directly from your website, or use Text Input to paste your llms.txt content." },
  { step: 2, icon: "📝", title: "Enter Your Content", desc: "For URL input, enter your website address. For text input, paste your llms.txt content for instant analysis." },
  { step: 3, icon: "✅", title: "Click Validate", desc: "Press the Validate button to initiate the full validation process. The checker will scan your file for syntax and structure accuracy." },
  { step: 4, icon: "📊", title: "Review Results", desc: "Examine all detected errors, warnings, and improvement suggestions provided by the validator." },
  { step: 5, icon: "🔧", title: "Make Improvements", desc: "Use the recommendations to update your file. Address syntax issues, fix invalid links, and ensure compliance." },
  { step: 6, icon: "🔄", title: "Revalidate", desc: "After applying fixes, run the checker again to confirm all issues have been resolved and your file is fully compliant." },
];

const HowToUseSection = () => (
  <section className="py-16">
    <div className="container">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-h2 text-foreground text-center mb-12">
          How to Use the LLMs.txt Checker
        </h2>
        <div className="space-y-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-4 p-5 bg-card rounded-xl border border-border shadow-card"
            >
              <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                {step.step}
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                <p className="text-caption text-muted-foreground">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 bg-primary/5 rounded-xl border border-primary/15 p-5">
          <h4 className="font-semibold text-foreground mb-2">💡 Pro Tips</h4>
          <ul className="space-y-1.5 text-caption text-muted-foreground">
            <li>• Use the LLMs.txt Checker frequently to keep your file aligned with evolving AI and GEO standards.</li>
            <li>• Pay attention to the key elements flagged by the checker to maintain top-level compliance.</li>
            <li>• Re-validate after every major content update on your website.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default HowToUseSection;
