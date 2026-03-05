import { motion } from "framer-motion";

const benefits = [
  { icon: "🤖", title: "Improve AI Search Visibility", desc: "Ensure AI crawlers can access your content." },
  { icon: "🔍", title: "Detect Configuration Errors", desc: "Identify missing rules or incorrect configurations." },
  { icon: "⚡", title: "Optimize for AI Assistants", desc: "Improve your chances of appearing in AI-generated answers." },
  { icon: "🧰", title: "Free Technical Tool", desc: "Validate your AI crawler setup instantly." },
];

const WhyUseSection = () => (
  <section className="py-16">
    <div className="container">
      <h2 className="text-h2 text-foreground text-center mb-12">
        Why Use LLMs.txt Validator?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {benefits.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex gap-4 p-5 bg-card rounded-xl border border-border shadow-card"
          >
            <span className="text-2xl shrink-0">{b.icon}</span>
            <div>
              <h3 className="font-semibold text-foreground mb-1">{b.title}</h3>
              <p className="text-caption text-muted-foreground">{b.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUseSection;
