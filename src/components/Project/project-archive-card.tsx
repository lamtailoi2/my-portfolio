import Link from "next/link";
import type { ProjectDTO } from "@/interfaces";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ProjectArchiveCard({
  project,
  selected,
  onSelect,
  caseStudyHref,
}: {
  project: ProjectDTO;
  selected: boolean;
  onSelect: (project: ProjectDTO) => void;
  caseStudyHref?: string;
}) {
  return (
    <article className={`bio-panel p-5 transition-colors ${selected ? "border-primary" : "hover:border-primary/60"}`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{project.status.replace("-", " ")}</p>
          <h3 className="mt-2 font-heading text-xl font-bold uppercase tracking-[0.1em]">{project.title}</h3>
        </div>
        {project.featured && <Badge className="border-accent/60 text-accent">Featured</Badge>}
      </div>
      <p className="mt-4 line-clamp-3 text-sm leading-6 text-muted-foreground">{project.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.slice(0, 4).map((tech) => <Badge key={tech}>{tech}</Badge>)}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button type="button" variant={selected ? "default" : "secondary"} size="sm" onClick={() => onSelect(project)}>
          {selected ? "Selected" : "Inspect"}
        </Button>
        <Button asChild variant="ghost" size="sm">
          <Link href={caseStudyHref ?? `/projects/${project.slug}`}>Read case study</Link>
        </Button>
      </div>
    </article>
  );
}
