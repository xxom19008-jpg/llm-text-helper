import { BarChart3, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const CrossSellSection = () => (
  <section className="py-16">
    <div className="container">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 rounded-2xl border border-primary/15 p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-h2 text-foreground mb-4">
              Track Traffic from AI Search Engines
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              After optimizing your site for AI crawlers, track how much traffic comes from AI search
              platforms. Letsmetrix helps you measure traffic from ChatGPT, Perplexity, and other AI sources.
            </p>
            <Button size="lg" className="font-semibold" asChild>
              <a href="https://letsmetrix.com" target="_blank" rel="noopener noreferrer">
                Start Using Letsmetrix
              </a>
            </Button>
          </div>
          <div className="bg-card rounded-xl border border-border p-6 shadow-soft">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">AI Traffic Analytics</p>
                  <p className="text-caption text-muted-foreground">Track ChatGPT, Claude referrals</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-success" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Growth Insights</p>
                  <p className="text-caption text-muted-foreground">Monitor AI search visibility</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-warning" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Real-time Monitoring</p>
                  <p className="text-caption text-muted-foreground">Instant crawler detection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CrossSellSection;
