import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is an LLMs.txt validator?",
    a: "An LLMs.txt validator checks whether your website has a valid llms.txt file and whether AI crawlers can access your content.",
  },
  {
    q: "Why is llms.txt important?",
    a: "It helps control how AI models crawl and use your website content in AI search results, improving your visibility in AI-generated answers.",
  },
  {
    q: "Which AI crawlers use llms.txt?",
    a: "AI platforms like ChatGPT, Claude, Perplexity, Gemini, and other LLM-powered assistants check for llms.txt to determine content access rules.",
  },
  {
    q: "Is this LLMs.txt validator free?",
    a: "Yes. The tool is completely free and requires no signup.",
  },
  {
    q: "How is llms.txt different from robots.txt?",
    a: "While robots.txt controls traditional search engine crawlers, llms.txt is specifically designed for AI and LLM crawlers that process content for generative answers.",
  },
];

const FAQSection = () => (
  <section className="py-16 bg-muted/30">
    <div className="container">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-h2 text-foreground text-center mb-10">
          LLMs.txt Validator FAQ
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card rounded-xl border border-border px-5 shadow-card"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQSection;
