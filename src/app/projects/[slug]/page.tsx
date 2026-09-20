import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Footer } from "@/components/Footer/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectEvidencePanel } from "@/components/Project/project-evidence-panel";
import { ProjectLivePreview } from "@/components/Project/project-live-preview";
import { getProjectBySlug } from "@/lib/projects";
import { capabilities, capabilityLabels, categories, categoryLabels } from "@/lib/project-taxonomy";
import type { ProjectCapability, ProjectCategory, ProjectDTO } from "@/interfaces";

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ from?: string }>;
};

export async function generateMetadata({ params }: Pick<PageProps, "params">): Promise<Metadata> {
  const { slug } = await params;
  const { project } = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found | Loi Lam" };
  }

  return {
    title: `${project.title} | Loi Lam`,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

export default async function ProjectCaseStudyPage({ params, searchParams }: PageProps) {
  const [{ slug }, query] = await Promise.all([params, searchParams]);
  const result = await getProjectBySlug(slug);

  if (!result.project) {
    notFound();
  }

  const project = result.project;
  const from = parseFrom(query.from);
  const contextProjects = applyContext(result.projects, from);
  const safeContext = contextProjects.some((item) => item.id === project.id) ? contextProjects : result.projects;
  const index = safeContext.findIndex((item) => item.id === project.id);
  const previous = index > 0 ? safeContext[index - 1] : undefined;
  const next = index >= 0 && index < safeContext.length - 1 ? safeContext[index + 1] : undefined;
  const archiveHref = from ? `/projects?${from.toString()}` : "/projects";

  return (
    <>
      <article className="bio-container py-10 lg:py-16">
        <Link href={archiveHref} className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-primary">
          <ArrowLeft className="h-4 w-4" /> Return to archive
        </Link>

        <header className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="bio-kicker">Project case study</p>
            <h1 className="mt-4 text-4xl font-bold uppercase tracking-[0.08em] sm:text-6xl">{project.title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{project.summary}</p>
          </div>
          <div className="bio-panel grid grid-cols-2 gap-px overflow-hidden bg-border text-sm sm:grid-cols-4">
            <Metric label="Status" value={project.status.replace("-", " ")} />
            <Metric label="Role" value={project.role} />
            <Metric label="Team" value={`${project.teamSize}`} />
            <Metric label="Category" value={project.category ? categoryLabels[project.category] : "Project"} />
          </div>
        </header>

        <section className="mt-10">
          <ProjectEvidencePanel project={project} compact />
        </section>

        <section className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bio-panel p-6">
            <h2 className="font-heading text-2xl font-bold uppercase tracking-[0.12em]">Visual evidence</h2>
            <div className="mt-5 space-y-5">
              {project.links.live && (
                <div className="overflow-hidden border border-border">
                  <ProjectLivePreview title={project.title} liveUrl={project.links.live} />
                </div>
              )}
              {!project.links.live && (
                <div className="border border-border bg-secondary/40 p-6 text-sm leading-6 text-muted-foreground">
                  No live deployment is available, so this case study intentionally skips screenshots and focuses on description, status, scope, contribution, and stack.
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <section className="bio-panel p-6">
              <h2 className="font-heading text-2xl font-bold uppercase tracking-[0.12em]">Contribution and impact</h2>
              {project.highlights.length > 0 ? (
                <ul className="mt-5 space-y-3 text-muted-foreground">
                  {project.highlights.map((highlight) => <li key={highlight} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden />{highlight}</li>)}
                </ul>
              ) : (
                <p className="mt-5 text-muted-foreground">Detailed contribution bullets have not been backfilled for this legacy project yet.</p>
              )}
              <p className="mt-6 leading-7 text-muted-foreground">{project.description}</p>
            </section>

            <section className="bio-panel p-6">
              <h2 className="font-heading text-2xl font-bold uppercase tracking-[0.12em]">Stack and capabilities</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => <Badge key={tech}>{tech}</Badge>)}
                {project.capabilities.map((capability) => <Badge key={capability} className="border-primary/50 text-primary">{capabilityLabels[capability]}</Badge>)}
              </div>
            </section>

            <section className="bio-panel p-6">
              <h2 className="font-heading text-2xl font-bold uppercase tracking-[0.12em]">External proof</h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {project.links.live && <Button asChild><a href={project.links.live} target="_blank" rel="noopener noreferrer">Live project <ExternalLink className="h-4 w-4" /></a></Button>}
                {project.links.github && <Button asChild variant="secondary"><a href={project.links.github} target="_blank" rel="noopener noreferrer">Repository <ExternalLink className="h-4 w-4" /></a></Button>}
                {!project.links.live && !project.links.github && <p className="text-muted-foreground">No public external links are available for this project.</p>}
              </div>
            </section>
          </div>
        </section>

        <nav className="mt-10 grid gap-4 sm:grid-cols-2" aria-label="Case study navigation">
          {previous ? <CaseLink label="Previous" project={previous} from={from} /> : <div />}
          {next && <CaseLink label="Next" project={next} from={from} alignRight />}
        </nav>
      </article>
      <Footer />
    </>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return <div className="bg-card p-4"><dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{label}</dt><dd className="mt-1 font-medium capitalize text-foreground">{value}</dd></div>;
}

function CaseLink({ label, project, from, alignRight }: { label: string; project: ProjectDTO; from?: URLSearchParams; alignRight?: boolean }) {
  const href = from ? `/projects/${project.slug}?from=${encodeURIComponent(from.toString())}` : `/projects/${project.slug}`;

  return (
    <Button asChild variant="secondary" className={alignRight ? "sm:justify-self-end" : undefined}>
      <Link href={href}>{label}: {project.title} {alignRight && <ArrowRight className="h-4 w-4" />}</Link>
    </Button>
  );
}

function parseFrom(input?: string) {
  if (!input) return undefined;

  try {
    const params = new URLSearchParams(input);
    const clean = new URLSearchParams();
    const status = params.get("status");

    if (status === "completed" || status === "in-progress") clean.set("status", status);
    params.getAll("tech").forEach((value) => value && clean.append("tech", value));
    params.getAll("category").forEach((value) => categories.includes(value as ProjectCategory) && clean.append("category", value));
    params.getAll("capability").forEach((value) => capabilities.includes(value as ProjectCapability) && clean.append("capability", value));

    return clean.toString() ? clean : undefined;
  } catch {
    return undefined;
  }
}

function applyContext(projects: ProjectDTO[], params?: URLSearchParams) {
  if (!params) return projects;

  const status = params.get("status");
  const tech = params.getAll("tech");
  const category = params.getAll("category") as ProjectCategory[];
  const capability = params.getAll("capability") as ProjectCapability[];

  const filtered = projects.filter((project) => {
    const statusMatch = !status || project.status === status;
    const techMatch = tech.length === 0 || tech.some((item) => project.technologies.includes(item));
    const categoryMatch = category.length === 0 || (project.category && category.includes(project.category));
    const capabilityMatch = capability.length === 0 || capability.some((item) => project.capabilities.includes(item));

    return statusMatch && techMatch && categoryMatch && capabilityMatch;
  });

  return filtered.length > 0 ? filtered : projects;
}
