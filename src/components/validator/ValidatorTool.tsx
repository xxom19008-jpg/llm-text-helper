import { useState, useRef } from "react";
import { Search, ChevronDown, ChevronUp, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ValidationResult from "./ValidationResult";

type ValidationData = {
  status: "valid" | "warning" | "error";
  fileUrl: string;
  fileContent: string;
  crawlers: { name: string; status: "allowed" | "partial" | "blocked" }[];
  warnings: string[];
  fix?: string;
};


const ValidatorTool = () => {
  const [url, setUrl] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);
  
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
        fileContent: `# ${new URL(finalUrl).hostname}\n\n> A platform for AI search optimization and analytics.\n\n## Docs\n\n- [Getting Started](${finalUrl.replace(/\/$/, "")}/docs/getting-started): Quick start guide\n- [API Reference](${finalUrl.replace(/\/$/, "")}/docs/api): Full API documentation\n\n## Blog\n\n- [AI SEO Guide](${finalUrl.replace(/\/$/, "")}/blog/ai-seo): How to optimize for AI search`,
        crawlers: [],
        warnings: [],
      },
      {
        status: "warning",
        fileUrl: `${finalUrl.replace(/\/$/, "")}/llms.txt`,
        fileContent: `# ${new URL(finalUrl).hostname}\n\nSome content about the website without proper description block.`,
        crawlers: [],
        warnings: [
          "No quote block description found",
          "No section headings found",
        ],
        fix: `# ${new URL(finalUrl).hostname}\n\n> Add a brief description of your website here.\n\n## Docs\n\n- [Page Title](${finalUrl.replace(/\/$/, "")}/page): Description of the page`,
      },
      {
        status: "error",
        fileUrl: `${finalUrl.replace(/\/$/, "")}/llms.txt`,
        fileContent: "",
        crawlers: [],
        warnings: [
          "LLMs.txt file not found at expected location",
        ],
        fix: `# ${new URL(finalUrl).hostname}\n\n> Brief description of your website.\n\n## Docs\n\n- [Getting Started](${finalUrl.replace(/\/$/, "")}/docs/getting-started): Quick start guide\n\n## Optional\n\n- [Blog](${finalUrl.replace(/\/$/, "")}/blog): Latest articles`,
      },
    ];

    const pick = mockResults[Math.floor(Math.random() * mockResults.length)];
    setResult(pick);
    setIsLoading(false);

    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
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
