import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { ProjectDTO } from "@/interfaces";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { categoryLabels, capabilityLabels } from "@/lib/project-taxonomy";
import { ProjectLivePreview } from "@/components/Project/project-live-preview";

export function ProjectEvidencePanel({ project, compact = false }: { project?: ProjectDTO; compact?: boolean }) {
  if (!project) {
    return (
      <article className="bio-panel flex min-h-[360px] items-center justify-center p-8 text-center">
        <div>
          <p className="bio-kicker">No specimen selected</p>
          <h2 className="mt-3 text-2xl font-bold uppercase tracking-[0.12em]">Project snapshot unavailable</h2>
          <p className="mt-3 max-w-md text-muted-foreground">No matching project is available for the current data or filters.</p>
        </div>
      </article>
    );
  }

  return (
    <article className="bio-panel overflow-hidden" aria-labelledby={`panel-${project.id}`}>
      <div className="grid gap-0 xl:grid-cols-[minmax(0,1.2fr)_minmax(22rem,0.8fr)]">
        <div className="relative min-h-[260px] border-b border-border bg-secondary/50 xl:h-full xl:min-h-[34rem] xl:border-b-0 xl:border-r">
          {project.links.live ? (
            <ProjectLivePreview title={project.title} liveUrl={project.links.live} />
          ) : (
            <div className="flex h-full min-h-[260px] flex-col justify-center bg-[linear-gradient(135deg,rgba(168,116,255,0.16),rgba(255,94,215,0.10)),repeating-linear-gradient(90deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_18px)] p-8">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">No live deployment</p>
              <h3 className="mt-3 font-heading text-3xl font-bold uppercase tracking-[0.14em] text-foreground">{project.title}</h3>
              <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">{project.summary}</p>
              <dl className="mt-6 grid gap-3 text-sm">
                <div className="border border-border bg-background/55 p-3">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Status</dt>
                  <dd className="mt-1 capitalize text-foreground">{project.status.replace("-", " ")}</dd>
                </div>
                <div className="border border-border bg-background/55 p-3">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Proof mode</dt>
                  <dd className="mt-1 text-foreground">Description, scope, status, stack</dd>
                </div>
              </dl>
            </div>
          )}
          {!project.links.live && (
            <div className="absolute left-4 top-4 flex gap-2">
              <Badge className="border-primary/60 bg-background/80 text-primary">{project.status.replace("-", " ")}</Badge>
              {project.featured && <Badge className="border-accent/60 bg-background/80 text-accent">Featured proof</Badge>}
            </div>
          )}
        </div>

        <div className="p-5 sm:p-7 xl:p-8">
          <p className="bio-kicker">Evidence panel</p>
          <h2 id={`panel-${project.id}`} className="mt-3 text-2xl font-bold uppercase tracking-[0.1em] sm:text-3xl">
            {project.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">{project.summary}</p>

          <dl className="mt-6 grid gap-3 text-sm sm:grid-cols-3">
            <div className="border border-border bg-secondary/40 p-3">
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Role</dt>
              <dd className="mt-1 font-medium text-foreground">{project.role}</dd>
            </div>
            <div className="border border-border bg-secondary/40 p-3">
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Team</dt>
              <dd className="mt-1 font-medium text-foreground">{project.teamSize} {project.teamSize === 1 ? "person" : "people"}</dd>
            </div>
            <div className="border border-border bg-secondary/40 p-3">
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Category</dt>
              <dd className="mt-1 font-medium text-foreground">{project.category ? categoryLabels[project.category] : "Project"}</dd>
            </div>
          </dl>

          {project.highlights.length > 0 && (
            <ul className="mt-6 space-y-2 text-sm leading-6 text-foreground/88">
              {project.highlights.slice(0, compact ? 2 : 3).map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => <Badge key={tech}>{tech}</Badge>)}
            {project.capabilities.slice(0, 3).map((capability) => (
              <Badge key={capability} className="border-primary/40 text-primary/90">{capabilityLabels[capability]}</Badge>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild>
              <Link href={`/projects/${project.slug}`}>Read case study</Link>
            </Button>
            {project.links.live && (
              <Button asChild variant="outline">
                <a href={project.links.live} target="_blank" rel="noopener noreferrer">Live <ExternalLink className="h-4 w-4" /></a>
              </Button>
            )}
            {project.links.github && (
              <Button asChild variant="secondary">
                <a href={project.links.github} target="_blank" rel="noopener noreferrer">Code <ExternalLink className="h-4 w-4" /></a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}


