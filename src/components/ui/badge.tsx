import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center border border-border bg-secondary/70 px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}
