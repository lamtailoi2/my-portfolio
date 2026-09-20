"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProjectsError({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="bio-container flex min-h-[70vh] items-center justify-center py-16">
      <section className="bio-panel max-w-xl p-8 text-center">
        <p className="bio-kicker">Repository offline</p>
        <h1 className="mt-3 text-3xl font-bold uppercase tracking-[0.12em]">Project data is unavailable</h1>
        <p className="mt-4 text-muted-foreground">The project repository could not be reached. Try again, or return to the archive shell.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button type="button" onClick={() => reset()}>Retry</Button>
          <Button asChild variant="secondary"><Link href="/projects">Archive</Link></Button>
        </div>
      </section>
    </div>
  );
}
