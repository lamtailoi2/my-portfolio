"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState } from "react";
import type { ProjectDTO } from "@/interfaces";
import { ProjectEvidencePanel } from "@/components/Project/project-evidence-panel";
import { Button } from "@/components/ui/button";

const ProjectDNACanvas = dynamic(
  () => import("@/components/Project/project-dna-canvas").then((mod) => mod.ProjectDNACanvas),
  { ssr: false, loading: () => null }
);

export function ProjectExplorer({
  projects,
  initialProjectId,
  label = "Project DNA selector",
}: {
  projects: ProjectDTO[];
  initialProjectId?: string;
  label?: string;
}) {
  const subset = useMemo(() => getExplorerSubset(projects), [projects]);
  const initial = projects.find((project) => project.id === initialProjectId) ?? subset[0] ?? projects[0];
  const [selectedId, setSelectedId] = useState(initial?.id);
  const [canvasEnabled, setCanvasEnabled] = useState(false);
  const [canvasFailed, setCanvasFailed] = useState(false);
  const railRef = useRef<HTMLElement>(null);
  const selected = projects.find((project) => project.id === selectedId) ?? initial;
  const subsetIndex = subset.findIndex((project) => project.id === selected?.id);

  useEffect(() => {
    if (!projects.some((project) => project.id === selectedId)) {
      setSelectedId(projects[0]?.id);
    }
  }, [projects, selectedId]);

  useEffect(() => {
    const element = railRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const desktop = window.matchMedia("(min-width: 768px)").matches;

    if (!element || reduceMotion || !desktop || !hasWebGL()) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setCanvasEnabled(true);
        observer.disconnect();
      }
    }, { rootMargin: "120px" });

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  function move(delta: number) {
    if (subset.length === 0) return;
    const index = subsetIndex >= 0 ? subsetIndex : 0;
    const next = subset[(index + delta + subset.length) % subset.length];
    setSelectedId(next.id);
  }

  return (
    <div className="grid gap-8 xl:grid-cols-[19rem_minmax(0,1fr)] xl:items-stretch">
      <section ref={railRef} className="bio-panel h-full p-4 sm:p-5" aria-label={label}>
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="bio-kicker">DNA rail</p>
            <h3 className="mt-2 font-heading text-xl font-bold uppercase tracking-[0.12em]">Project specimens</h3>
          </div>
          <p className="font-mono text-xs text-muted-foreground">{subset.length}/{projects.length}</p>
        </div>

        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          {selected ? `Selected / ${selected.title}` : "Select a specimen"}
        </p>

        <div className="mt-4 flex gap-2">
          <Button type="button" variant="secondary" size="sm" onClick={() => move(-1)} disabled={subset.length < 2}>Previous</Button>
          <Button type="button" variant="secondary" size="sm" onClick={() => move(1)} disabled={subset.length < 2}>Next</Button>
        </div>

        <div className="sr-only" aria-live="polite">
          {selected ? `Selected: ${selected.title}, ${selected.status}.` : "No project selected."}
        </div>

        {canvasEnabled && !canvasFailed && subset.length > 0 && (
          <div className="mt-4 hidden md:block" onError={() => setCanvasFailed(true)}>
            <ProjectDNACanvas projects={subset} selectedId={selected?.id} onSelect={(project) => setSelectedId(project.id)} />
          </div>
        )}

        {subset.length > 0 ? (
          <ol className="relative mt-4 space-y-2 before:absolute before:left-5 before:top-4 before:h-[calc(100%-2rem)] before:w-px before:bg-primary/30">
            {subset.map((project) => {
              const active = selected?.id === project.id;
return (
                <li key={project.id} className="relative">
                  <button
                    type="button"
                    aria-pressed={active}
                    onClick={() => setSelectedId(project.id)}
                    className={`group flex min-h-12 w-full items-center gap-3 border bg-background/70 px-3 py-2.5 text-left transition-colors ${active ? "border-primary bg-primary/[0.07] text-primary" : "border-border text-foreground hover:border-primary/60"}`}
                  >
                    <span className={`h-4 w-4 shrink-0 rounded-full border ${active ? "border-primary bg-primary shadow-[0_0_18px_rgba(168,116,255,0.72)]" : "border-muted-foreground bg-secondary"}`} aria-hidden />
                    <span className="min-w-0">
                      <span className="block truncate font-mono text-xs uppercase tracking-[0.18em]">{project.title}</span>
                      <span className="block text-xs text-muted-foreground">{project.featured ? "Featured proof" : "Archive specimen"} · {project.status.replace("-", " ")}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        ) : (
          <div className="mt-7 border border-border bg-secondary/40 p-6 text-sm text-muted-foreground">No projects available for the explorer.</div>
        )}

      </section>

      <ProjectEvidencePanel project={selected} />
    </div>
  );
}

function hasWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") ?? canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

export function getExplorerSubset(projects: ProjectDTO[]) {
  const featured = projects.filter((project) => project.featured);
  const remaining = projects.filter((project) => !project.featured).slice(0, 12);

  return [...featured, ...remaining];
}




