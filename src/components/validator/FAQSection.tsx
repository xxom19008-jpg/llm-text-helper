import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is an LLMs.txt file?",
    a: "An llms.txt file is a structured text document placed in your website's root directory that communicates directly with Large Language Models (LLMs). It's written in Markdown format to help AI systems better understand, interpret, and interact with your site's content.",
  },
  {
    q: "How do I use LLMs.txt?",
    a: "Create a Markdown file that follows the official specification, save it as llms.txt, and upload it to your root directory. Include an H1 title, a short summary in a quote block, and optional sections with file lists and links. Before publishing, validate it using our LLMs.txt Checker to confirm compliance.",
  },
  {
    q: "Why was LLMs.txt created?",
    a: "The llms.txt standard was designed to give website owners a consistent way to communicate with AI crawlers and Large Language Models about their site content. As AI plays a bigger role in search and data interpretation, LLMs.txt helps ensure these systems accurately understand and represent your website.",
  },
  {
    q: "Is LLMs.txt required for my website?",
    a: "Although llms.txt is not yet mandatory, it's highly recommended for anyone who wants to optimize their site for AI discovery and Generative Engine Optimization (GEO). Having a properly formatted file gives your website a strong technical advantage in how AI systems index and summarize your content.",
  },
  {
    q: "How often should I update my LLMs.txt file?",
    a: "Update your llms.txt file whenever you make meaningful changes to your site — such as adding new pages, modifying URLs, or updating your content hierarchy. After every major update, re-run the LLMs.txt Checker to ensure your file remains valid.",
  },
  {
    q: "How is LLMs.txt different from robots.txt?",
    a: "robots.txt manages what search engine crawlers can or cannot access, while llms.txt provides structured context for AI systems to understand your content. In simple terms, robots.txt controls access, whereas llms.txt improves comprehension.",
  },
  {
    q: "How is LLMs.txt different from sitemap.xml?",
    a: "A sitemap.xml file lists all your website URLs to help search engines discover and crawl them. In contrast, llms.txt describes what those pages represent and how they should be interpreted by Large Language Models. While sitemap.xml improves crawl coverage, llms.txt enhances content understanding for AI systems.",
  },
  {
    q: "Is this LLMs.txt Checker free?",
    a: "Yes. The tool is completely free and requires no signup. You can validate as many files as you need.",
  },
];

const FAQSection = () => (
  <section className="py-16">
    <div className="container">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-h2 text-foreground text-center mb-10">
          Frequently Asked Questions About LLMs.txt
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
              <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
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
