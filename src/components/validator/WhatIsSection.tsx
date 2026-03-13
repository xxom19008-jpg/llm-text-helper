const WhatIsSection = () => (
  <section className="py-16 bg-muted/30">
    <div className="container">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-h2 text-foreground mb-6">
          About LLMs.txt
        </h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
          <p>
            LLMs.txt Checker is a free validation tool built to help webmasters, SEOs, and developers verify the accuracy and structure of their{" "}
            <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-code text-primary">llms.txt</code> files — the emerging standard that guides how Large Language Models (LLMs) like ChatGPT, Gemini, and Claude access website content.
          </p>
          <p>
            By adding a properly formatted llms.txt file to your website's root directory, you can control how AI crawlers interpret, use, or restrict your content. The LLMs.txt Checker ensures your implementation follows the latest LLMs.txt specification, improving AI discoverability and compliance for Generative Engine Optimization (GEO).
          </p>
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-4">Key Validation Rules</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Our LLMs.txt Validator performs a full syntax and structural check of your file, ensuring every directive meets current standards. The tool validates:
        </p>
        <ul className="space-y-2 text-muted-foreground mb-8">
          <li className="flex gap-2"><span className="text-primary font-semibold">•</span><span><strong className="text-foreground">Markdown Format:</strong> Confirms your file follows correct Markdown formatting.</span></li>
          <li className="flex gap-2"><span className="text-primary font-semibold">•</span><span><strong className="text-foreground">H1 Title:</strong> Detects a clear project or website name heading (required).</span></li>
          <li className="flex gap-2"><span className="text-primary font-semibold">•</span><span><strong className="text-foreground">Quote Block:</strong> Checks for a short summary or description in blockquote format.</span></li>
          <li className="flex gap-2"><span className="text-primary font-semibold">•</span><span><strong className="text-foreground">Project Details:</strong> Validates optional metadata sections describing your site or project.</span></li>
          <li className="flex gap-2"><span className="text-primary font-semibold">•</span><span><strong className="text-foreground">File Lists:</strong> Ensures properly structured Markdown lists with active hyperlinks.</span></li>
          <li className="flex gap-2"><span className="text-primary font-semibold">•</span><span><strong className="text-foreground">Link Comments:</strong> Supports optional inline notes or explanations beside each link.</span></li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mb-4">Sample Template</h3>
        <div className="bg-card rounded-xl border border-border p-5 shadow-card">
          <pre className="bg-[#1e1e2e] text-[#cdd6f4] rounded-lg p-4 text-sm font-code overflow-x-auto whitespace-pre-wrap leading-relaxed">{`# Title

> Optional description goes here

Optional details go here

## Section name

- [Link title](https://link_url): Optional link details

## Optional

- [Link title](https://link_url)`}</pre>
        </div>
      </div>
    </div>
  </section>
);

export default WhatIsSection;
