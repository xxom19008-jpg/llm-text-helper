import { useState, useRef } from "react";
import { Search, ChevronDown, ChevronUp, Loader2, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import ValidationResult from "./ValidationResult";

type ValidationData = {
  status: "valid" | "warning" | "error";
  fileUrl: string;
  fileContent: string;
  crawlers: { name: string; status: "allowed" | "partial" | "blocked" }[];
  warnings: string[];
  fix?: string;
};

const AI_CRAWLERS = [
  { id: "chatgpt", label: "ChatGPT" },
  { id: "claude", label: "Claude" },
  { id: "perplexity", label: "Perplexity" },
  { id: "gemini", label: "Gemini" },
  { id: "common", label: "Common AI bots" },
];

const ValidatorTool = () => {
  const [url, setUrl] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [selectedCrawlers, setSelectedCrawlers] = useState<string[]>(["chatgpt", "claude", "perplexity", "gemini"]);
  const [fetchMode, setFetchMode] = useState("auto");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ValidationData | null>(null);
  const [error, setError] = useState("");
  const resultRef = useRef<HTMLDivElement>(null);

  const isValidUrl = (value: string) => /^https?:\/\/.+/.test(value);

  const handleValidate = async () => {
    if (!url.trim()) {
      setError("Please enter a website URL");
      return;
    }

    const finalUrl = url.startsWith("http") ? url : `https://${url}`;
    if (!isValidUrl(finalUrl)) {
      setError("Please enter a valid website URL");
      return;
    }

    setError("");
    setIsLoading(true);
    setResult(null);

    // Simulate validation (replace with real API call)
    await new Promise((r) => setTimeout(r, 2000));

    const mockResults: ValidationData[] = [
      {
        status: "valid",
        fileUrl: `${finalUrl.replace(/\/$/, "")}/llms.txt`,
        fileContent: `# LLMs.txt - AI Crawler Access Rules\n\nUser-agent: ChatGPT\nAllow: /\n\nUser-agent: Claude\nAllow: /\n\nUser-agent: Perplexity\nAllow: /\n\nUser-agent: Gemini\nAllow: /\n\nSitemap: ${finalUrl.replace(/\/$/, "")}/sitemap.xml`,
        crawlers: [
          { name: "ChatGPT", status: "allowed" },
          { name: "Claude", status: "allowed" },
          { name: "Perplexity", status: "allowed" },
          { name: "Gemini", status: "allowed" },
        ],
        warnings: [],
      },
      {
        status: "warning",
        fileUrl: `${finalUrl.replace(/\/$/, "")}/llms.txt`,
        fileContent: `User-agent: ChatGPT\nAllow: /\n\nUser-agent: Claude\nAllow: /`,
        crawlers: [
          { name: "ChatGPT", status: "allowed" },
          { name: "Claude", status: "allowed" },
          { name: "Perplexity", status: "blocked" },
          { name: "Gemini", status: "blocked" },
        ],
        warnings: [
          "Missing rule for Perplexity crawler",
          "Missing rule for Gemini crawler",
          "No sitemap declared",
        ],
        fix: `User-agent: Perplexity\nAllow: /\n\nUser-agent: Gemini\nAllow: /\n\nSitemap: ${finalUrl.replace(/\/$/, "")}/sitemap.xml`,
      },
      {
        status: "error",
        fileUrl: `${finalUrl.replace(/\/$/, "")}/llms.txt`,
        fileContent: "",
        crawlers: [
          { name: "ChatGPT", status: "blocked" },
          { name: "Claude", status: "blocked" },
          { name: "Perplexity", status: "blocked" },
          { name: "Gemini", status: "blocked" },
        ],
        warnings: [
          "LLMs.txt file not found at expected location",
          "No AI crawler rules detected",
        ],
        fix: `# LLMs.txt - AI Crawler Access Rules\n\nUser-agent: ChatGPT\nAllow: /\n\nUser-agent: Claude\nAllow: /\n\nUser-agent: Perplexity\nAllow: /\n\nUser-agent: Gemini\nAllow: /\n\nSitemap: ${finalUrl.replace(/\/$/, "")}/sitemap.xml`,
      },
    ];

    const pick = mockResults[Math.floor(Math.random() * mockResults.length)];
    setResult(pick);
    setIsLoading(false);

    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const toggleCrawler = (id: string) => {
    setSelectedCrawlers((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  return (
    <section className="pb-12">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          {/* Tool Card */}
          <div className="bg-card rounded-xl shadow-elevated border border-border p-6 md:p-8">
            <h2 className="text-h3 text-foreground mb-6 flex items-center gap-2">
              <Search className="w-5 h-5 text-primary" />
              LLMs.txt Validator
            </h2>

            {/* URL Input */}
            <div className="space-y-2 mb-4">
              <label className="text-sm font-medium text-foreground">
                Website URL <span className="text-destructive">*</span>
              </label>
              <Input
                type="url"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                  setError("");
                }}
                onKeyDown={(e) => e.key === "Enter" && handleValidate()}
                className="h-12 text-base font-code"
              />
              {error && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  ⚠ {error}
                </p>
              )}
            </div>

            {/* Advanced Options */}
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
            >
              {showAdvanced ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              {showAdvanced ? "Hide" : "Show"} advanced options
            </button>

            {showAdvanced && (
              <div className="space-y-4 mb-6 p-4 bg-muted/50 rounded-lg border border-border">
                {/* AI Crawlers */}
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <label className="text-sm font-medium text-foreground">Check AI Crawlers</label>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="w-3.5 h-3.5 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>Validate rules affecting AI crawlers</TooltipContent>
                    </Tooltip>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {AI_CRAWLERS.map((crawler) => (
                      <label
                        key={crawler.id}
                        className="flex items-center gap-2 text-sm cursor-pointer"
                      >
                        <Checkbox
                          checked={selectedCrawlers.includes(crawler.id)}
                          onCheckedChange={() => toggleCrawler(crawler.id)}
                        />
                        {crawler.label}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Fetch Mode */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Fetch Mode
                  </label>
                  <Select value={fetchMode} onValueChange={setFetchMode}>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="auto">Auto detect</SelectItem>
                      <SelectItem value="llms">Fetch root llms.txt</SelectItem>
                      <SelectItem value="robots">Fetch robots.txt fallback</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Validate Button */}
            <Button
              onClick={handleValidate}
              disabled={isLoading}
              className="w-full h-12 text-base font-semibold"
              size="lg"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Checking website...
                </>
              ) : (
                "Validate LLMs.txt"
              )}
            </Button>
          </div>

          {/* Result */}
          <div ref={resultRef}>
            {result && <ValidationResult data={result} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValidatorTool;
