import { motion } from "framer-motion";

const steps = [
  { icon: "🌐", title: "Enter URL", desc: "Enter your website URL in the validator tool above." },
  { icon: "🔍", title: "Validate", desc: "Click Validate to scan your llms.txt configuration." },
  { icon: "📊", title: "Review", desc: "Review AI crawler access and configuration issues." },
  { icon: "⚙", title: "Fix & Optimize", desc: "Apply recommended fixes to optimize AI search visibility." },
];

const HowToUseSection = () => (
  <section className="py-16 bg-muted/30">
    <div className="container">
      <h2 className="text-h2 text-foreground text-center mb-12">
        How to Use LLMs.txt Validator Tool
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl border border-border p-6 text-center shadow-card"
          >
            <div className="text-3xl mb-3">{step.icon}</div>
            <div className="text-xs font-semibold text-primary mb-1">Step {i + 1}</div>
            <h3 className="text-base font-semibold text-foreground mb-2">{step.title}</h3>
            <p className="text-caption text-muted-foreground">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowToUseSection;
