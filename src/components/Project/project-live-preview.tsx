import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProjectLivePreview({
  title,
  liveUrl,
}: {
  title: string;
  liveUrl: string;
}) {
  return (
    <div className="flex h-full min-h-[260px] flex-col bg-background">
      <div className="flex items-center gap-2 border-b border-border bg-secondary/70 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-accent" aria-hidden />
        <span className="ml-2 truncate font-mono text-[11px] text-muted-foreground">{liveUrl}</span>
        <Button asChild variant="ghost" size="sm" className="ml-auto min-h-8 px-2 py-1 text-[10px]">
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${title} live project`}>
            Open <ExternalLink className="h-3 w-3" />
          </a>
        </Button>
      </div>
      <iframe
        title={`${title} live preview`}
        src={liveUrl}
        loading="lazy"
        referrerPolicy="no-referrer"
        sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        className="h-full min-h-[260px] w-full flex-1 border-0 bg-white opacity-90"
      />
    </div>
  );
}

