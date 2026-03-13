const WhyMattersSection = () => (
  <section className="py-16 bg-muted/30">
    <div className="container">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-h2 text-foreground mb-6">
          Why LLMs.txt Matters for Your Website
        </h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            As search and discovery shift from traditional search engines to AI-powered crawlers, a valid LLMs.txt file becomes essential. It communicates permissions and preferred content access directly to AI systems, improving how your pages are represented, summarized, or cited by LLMs.
          </p>
          <p>
            Using our LLMs.txt Checker ensures your file remains compliant, accurate, and aligned with best practices — helping your website stand out in the AI-driven web era.
          </p>
        </div>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
          Benefits of Regular Validation
        </h3>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex gap-2"><span className="text-primary">✓</span> Improve how AI systems interpret and interact with your site</li>
          <li className="flex gap-2"><span className="text-primary">✓</span> Prevent crawling or access errors from incorrect formatting</li>
          <li className="flex gap-2"><span className="text-primary">✓</span> Stay compliant with the latest LLMs.txt syntax updates</li>
          <li className="flex gap-2"><span className="text-primary">✓</span> Optimize your website for AI-based indexing and GEO</li>
        </ul>

        <p className="mt-6 text-muted-foreground leading-relaxed">
          To learn more about the official standard, visit{" "}
          <a href="https://llmstxt.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            llmstxt.org
          </a>.
        </p>
      </div>
    </div>
  </section>
);

export default WhyMattersSection;
