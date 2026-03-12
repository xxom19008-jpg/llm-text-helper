import { useState } from "react";
import { CheckCircle2, AlertTriangle, XCircle, ExternalLink, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

type CheckItem = {
  status: "pass" | "warn" | "fail";
  message: string;
};

type ValidationData = {
  status: "valid" | "warning" | "error";
  fileUrl: string;
  fileContent: string;
  crawlers: { name: string; status: "allowed" | "partial" | "blocked" }[];
  warnings: string[];
  fix?: string;
  // New fields
  fileSize?: string;
  score?: number;
  checks?: CheckItem[];
};

const statusIcon = (status: "pass" | "warn" | "fail") => {
  switch (status) {
    case "pass":
      return <CheckCircle2 className="w-6 h-6 text-success shrink-0" />;
    case "warn":
      return <AlertTriangle className="w-6 h-6 text-warning shrink-0" />;
    case "fail":
      return <XCircle className="w-6 h-6 text-destructive shrink-0" />;
  }
};

const statusBorder = (status: "pass" | "warn" | "fail") => {
  switch (status) {
    case "pass": return "border-l-success bg-success/5";
    case "warn": return "border-l-warning bg-warning/5";
    case "fail": return "border-l-destructive bg-destructive/5";
  }
};

const statusPrefix = (status: "pass" | "warn" | "fail") => {
  switch (status) {
    case "pass": return "✓";
    case "warn": return "⚠";
    case "fail": return "✗";
  }
};

const ValidationResult = ({ data }: { data: ValidationData }) => {
  const [copied, setCopied] = useState(false);

  const copyFix = () => {
    if (data.fix) {
      navigator.clipboard.writeText(data.fix);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Build checks from data
  const checks: CheckItem[] = data.checks || buildDefaultChecks(data);

  const score = data.score ?? calculateScore(checks);
  const fileSize = data.fileSize ?? (data.fileContent ? `${(new TextEncoder().encode(data.fileContent).length / 1024).toFixed(2)} KB` : "0 KB");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-8 space-y-4"
    >
      {/* Stats Row */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-card rounded-xl border border-border p-4 text-center shadow-card">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">File Size</p>
          <p className="text-xl font-bold text-foreground">{fileSize}</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-4 text-center shadow-card">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Score</p>
          <p className="text-xl font-bold text-foreground">{score}/100</p>
        </div>
      </div>

      {/* Validation Summary */}
      <div className="bg-card rounded-xl border border-border p-5 shadow-card">
        <h3 className="text-lg font-bold text-foreground mb-4">Validation Summary</h3>
        <div className="space-y-3">
          {checks.map((check, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 p-3.5 rounded-lg border-l-4 ${statusBorder(check.status)}`}
            >
              {statusIcon(check.status)}
              <span className="text-sm text-foreground">
                {statusPrefix(check.status)} {check.message}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Detected File */}
      {data.fileContent && (
        <div className="bg-card rounded-xl border border-border p-5 shadow-card">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-foreground">Detected File</h3>
            <a
              href={data.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline flex items-center gap-1"
            >
              View file <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
          <p className="text-caption text-muted-foreground mb-3 font-code">{data.fileUrl}</p>
          <pre className="bg-muted rounded-lg p-4 text-sm font-code text-foreground overflow-x-auto whitespace-pre-wrap leading-relaxed">
            {data.fileContent}
          </pre>
        </div>
      )}

      {/* Recommended Fix */}
      {data.fix && (
        <div className="bg-card rounded-xl border border-primary/20 p-5 shadow-card">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-foreground">Recommended Fix</h3>
            <Button variant="outline" size="sm" onClick={copyFix} className="gap-1.5">
              {copied ? <><Check className="w-3.5 h-3.5" /> Copied</> : <><Copy className="w-3.5 h-3.5" /> Copy Fix</>}
            </Button>
          </div>
          <p className="text-caption text-muted-foreground mb-3">
            Add the following rules to your llms.txt:
          </p>
          <pre className="bg-muted rounded-lg p-4 text-sm font-code text-foreground overflow-x-auto whitespace-pre-wrap leading-relaxed">
            {data.fix}
          </pre>
        </div>
      )}
    </motion.div>
  );
};

function buildDefaultChecks(data: ValidationData): CheckItem[] {
  const checks: CheckItem[] = [];

  // Check 1: File found
  if (data.status === "error") {
    checks.push({ status: "fail", message: "LLMs.txt file not found" });
  } else {
    checks.push({ status: "pass", message: "Valid LLMs.txt file detected" });
  }

  // Check 2: H1 title (# Title at start)
  if (data.fileContent && data.fileContent.startsWith("#")) {
    checks.push({ status: "pass", message: "Title heading found (# Title)" });
  } else if (data.fileContent) {
    checks.push({ status: "fail", message: "Missing H1 title (use # Title at the start)" });
  }

  // Check 3: Description / quote block
  if (data.fileContent && data.fileContent.includes(">")) {
    checks.push({ status: "pass", message: "Quote block found with project description" });
  } else if (data.fileContent) {
    checks.push({ status: "warn", message: "No quote block description found (optional)" });
  }

  // Check 4: Crawler rules completeness
  const allAllowed = data.crawlers.every((c) => c.status === "allowed");
  const someBlocked = data.crawlers.some((c) => c.status === "blocked");
  if (allAllowed) {
    checks.push({ status: "pass", message: "All AI crawler rules configured correctly" });
  } else if (someBlocked) {
    const blocked = data.crawlers.filter((c) => c.status === "blocked").map((c) => c.name);
    checks.push({ status: "fail", message: `Missing rules for: ${blocked.join(", ")}` });
  } else {
    checks.push({ status: "warn", message: "Some crawler rules have partial access" });
  }

  // Check 5: Sitemap reference
  if (data.fileContent && /sitemap/i.test(data.fileContent)) {
    checks.push({ status: "pass", message: "Sitemap reference found" });
  } else if (data.fileContent) {
    checks.push({ status: "warn", message: "No sitemap declared (optional)" });
  }

  // Check 6: File links / URLs
  if (data.fileContent) {
    const urlMatches = data.fileContent.match(/https?:\/\/[^\s]+/g);
    if (urlMatches && urlMatches.length > 0) {
      checks.push({ status: "pass", message: `URL references found: ${urlMatches.length} entries` });
    } else {
      checks.push({ status: "warn", message: "Limited URL references (optional)" });
    }
  }

  return checks;
}

function calculateScore(checks: CheckItem[]): number {
  if (checks.length === 0) return 0;
  const points = checks.reduce((sum, c) => {
    if (c.status === "pass") return sum + 100;
    if (c.status === "warn") return sum + 50;
    return sum;
  }, 0);
  return Math.round(points / checks.length);
}

export default ValidationResult;
