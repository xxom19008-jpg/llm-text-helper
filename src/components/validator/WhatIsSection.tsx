const WhatIsSection = () => (
  <section className="py-16 bg-muted/30">
    <div className="container">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-h2 text-foreground mb-6">
          What is an LLMs.txt File?
        </h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
          <p>
            <strong className="text-foreground">LLMs.txt</strong> is a configuration file that controls how AI crawlers
            access and use your website content.
          </p>
          <p>
            It works similarly to <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-code text-primary">robots.txt</code> but
            is designed specifically for large language model crawlers such as ChatGPT, Claude,
            Perplexity, and other AI assistants.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5 shadow-card">
          <h3 className="text-sm font-semibold text-foreground mb-3">Example llms.txt</h3>
          <pre className="bg-muted rounded-lg p-4 text-sm font-code text-foreground overflow-x-auto whitespace-pre-wrap leading-relaxed">{`# Title

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
