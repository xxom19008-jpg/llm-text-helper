import { useState } from "react";
import { CheckCircle2, AlertTriangle, XCircle, ExternalLink, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

type CrawlerResult = { name: string; status: "allowed" | "partial" | "blocked" };

type ValidationData = {
  status: "valid" | "warning" | "error";
  fileUrl: string;
  fileContent: string;
  crawlers: CrawlerResult[];
  warnings: string[];
  fix?: string;
};

const statusConfig = {
  valid: {
    icon: CheckCircle2,
    label: "Valid LLMs.txt found",
    bgClass: "bg-success/10",
    textClass: "text-success",
    borderClass: "border-success/30",
  },
  warning: {
    icon: AlertTriangle,
    label: "LLMs.txt has issues",
    bgClass: "bg-warning/10",
    textClass: "text-warning",
    borderClass: "border-warning/30",
  },
  error: {
    icon: XCircle,
    label: "LLMs.txt not found",
    bgClass: "bg-destructive/10",
    textClass: "text-destructive",
    borderClass: "border-destructive/30",
  },
};

const crawlerStatusIcon = (status: string) => {
  switch (status) {
    case "allowed": return <span className="text-success font-medium flex items-center gap-1"><Check className="w-4 h-4" /> Allowed</span>;
    case "partial": return <span className="text-warning font-medium flex items-center gap-1"><AlertTriangle className="w-4 h-4" /> Partial</span>;
    case "blocked": return <span className="text-destructive font-medium flex items-center gap-1"><XCircle className="w-4 h-4" /> Blocked</span>;
    default: return null;
  }
};

const ValidationResult = ({ data }: { data: ValidationData }) => {
  const [copied, setCopied] = useState(false);
  const config = statusConfig[data.status];
  const StatusIcon = config.icon;

  const copyFix = () => {
    if (data.fix) {
      navigator.clipboard.writeText(data.fix);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-8 space-y-4"
    >
      {/* Status Badge */}
      <div className={`flex items-center gap-3 p-4 rounded-xl border ${config.bgClass} ${config.borderClass}`}>
        <StatusIcon className={`w-6 h-6 ${config.textClass}`} />
        <span className={`text-lg font-semibold ${config.textClass}`}>{config.label}</span>
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

      {/* Crawler Access Table */}
      <div className="bg-card rounded-xl border border-border p-5 shadow-card">
        <h3 className="text-sm font-semibold text-foreground mb-3">AI Crawler Access</h3>
        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="text-left px-4 py-2.5 font-medium text-muted-foreground">Crawler</th>
                <th className="text-left px-4 py-2.5 font-medium text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.crawlers.map((crawler) => (
                <tr key={crawler.name} className="border-t border-border">
                  <td className="px-4 py-2.5 font-medium text-foreground">{crawler.name}</td>
                  <td className="px-4 py-2.5">{crawlerStatusIcon(crawler.status)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Warnings */}
      {data.warnings.length > 0 && (
        <div className="bg-card rounded-xl border border-border p-5 shadow-card">
          <h3 className="text-sm font-semibold text-foreground mb-3">Warnings & Errors</h3>
          <ul className="space-y-2">
            {data.warnings.map((w, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-warning">
                <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" />
                {w}
              </li>
            ))}
          </ul>
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

export default ValidationResult;
