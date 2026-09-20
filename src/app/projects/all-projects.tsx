"use client";
import type { ProjectCapability, ProjectCategory, ProjectDTO, ProjectStatus } from "@/interfaces";
import { ProjectArchiveCard } from "@/components/Project/project-archive-card";
import { ProjectExplorer } from "@/components/Project/project-explorer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { capabilities, capabilityLabels, categories, categoryLabels } from "@/lib/project-taxonomy";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";

type FilterStatus = "all" | "completed" | "in-progress";

export function AllProjects({ projects }: { projects: ProjectDTO[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [selectedId, setSelectedId] = useState(projects[0]?.id);
  const status = parseStatus(searchParams.get("status"));
  const tech = searchParams.getAll("tech");
  const category = searchParams.getAll("category").filter((value): value is ProjectCategory => categories.includes(value as ProjectCategory));
  const capability = searchParams.getAll("capability").filter((value): value is ProjectCapability => capabilities.includes(value as ProjectCapability));
  const technologyOptions = useMemo(() => Array.from(new Set(projects.flatMap((project) => project.technologies))).sort(), [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const statusMatch = status === "all" || project.status === status;
      const techMatch = tech.length === 0 || tech.some((item) => project.technologies.includes(item));
      const categoryMatch = category.length === 0 || (project.category && category.includes(project.category));
      const capabilityMatch = capability.length === 0 || capability.some((item) => project.capabilities.includes(item));

      return statusMatch && techMatch && categoryMatch && capabilityMatch;
    });
  }, [projects, status, tech, category, capability]);

  useEffect(() => {
    if (!filteredProjects.some((project) => project.id === selectedId)) {
      setSelectedId(filteredProjects[0]?.id);
    }
  }, [filteredProjects, selectedId]);

  const selectedProject = filteredProjects.find((project) => project.id === selectedId) ?? filteredProjects[0];
  const currentFilterQuery = buildFilterQuery(status, tech, category, capability);

  const filterOptions: { label: string; value: FilterStatus }[] = [
    { label: "All", value: "all" },
    { label: "Completed", value: "completed" },
    { label: "In Progress", value: "in-progress" },
  ];

  function update(next: { status?: FilterStatus; tech?: string; category?: ProjectCategory; capability?: ProjectCapability; clear?: boolean }) {
    const params = new URLSearchParams(searchParams.toString());

    if (next.clear) {
      router.push(pathname);
      return;
    }

    if (next.status) {
      if (next.status === "all") params.delete("status");
      else params.set("status", next.status);
    }

    toggleMulti(params, "tech", next.tech);
    toggleMulti(params, "category", next.category);
    toggleMulti(params, "capability", next.capability);

    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname);
  }

  return (
    <div className="min-h-screen">
      <div className="bio-container pt-8 pb-4">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="bio-kicker">Archive</p>
            <h1 className="mt-2 text-4xl font-bold uppercase tracking-[0.12em] sm:text-5xl">Projects</h1>
            <p className="mt-3 text-sm text-muted-foreground" aria-live="polite">
              {filteredProjects.length} of {projects.length} project{projects.length !== 1 ? "s" : ""} match the current filters.
            </p>
          </div>
        </div>
      </div>

      <section className="bio-container py-6" aria-label="Project filters">
        <div className="bio-panel space-y-5 p-5">
          <fieldset>
            <legend className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Status</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {filterOptions.map((option) => (
                <label key={option.value} className={`cursor-pointer border px-3 py-2 font-mono text-xs uppercase tracking-[0.16em] ${status === option.value ? "border-primary bg-primary text-primary-foreground" : "border-border bg-secondary/60 text-muted-foreground"}`}>
                  <input type="radio" name="status" value={option.value} checked={status === option.value} onChange={() => update({ status: option.value })} className="sr-only" />
                  {option.label}
                </label>
              ))}
            </div>
          </fieldset>
          <FilterGroup title="Technology" values={technologyOptions} selected={tech} onToggle={(value) => update({ tech: value })} />
          <FilterGroup title="Category" values={categories} selected={category} labels={categoryLabels} onToggle={(value) => update({ category: value as ProjectCategory })} />
          <FilterGroup title="Capability" values={capabilities} selected={capability} labels={capabilityLabels} onToggle={(value) => update({ capability: value as ProjectCapability })} />
        </div>
      </section>

      <section className="bio-container py-8">
        {filteredProjects.length > 0 ? (
          <ProjectExplorer projects={filteredProjects} initialProjectId={selectedProject?.id} label="Filtered project DNA selector" />
        ) : (
          <div className="bio-panel p-8 text-center">
            <p className="bio-kicker">Zero matches</p>
            <h2 className="mt-3 text-2xl font-bold uppercase tracking-[0.12em]">No projects match these filters</h2>
            <Button className="mt-5" type="button" onClick={() => update({ clear: true })}>Clear filters</Button>
          </div>
        )}
      </section>

      {filteredProjects.length > 0 && (
        <section className="bio-container pb-16">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <h2 className="font-heading text-2xl font-bold uppercase tracking-[0.12em]">Accessible archive</h2>
            {(status !== "all" || tech.length > 0 || category.length > 0 || capability.length > 0) && <Button type="button" variant="secondary" size="sm" onClick={() => update({ clear: true })}>Clear filters</Button>}
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectArchiveCard
                key={project.id}
                project={project}
                selected={project.id === selectedProject?.id}
                onSelect={(next) => setSelectedId(next.id)}
                caseStudyHref={caseStudyHref(project.slug, currentFilterQuery)}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function parseStatus(value: string | null): FilterStatus {
  return value === "completed" || value === "in-progress" ? value : "all";
}

function toggleMulti(params: URLSearchParams, key: string, value?: string) {
  if (!value) return;
  const values = params.getAll(key);
  params.delete(key);

  const next = values.includes(value) ? values.filter((item) => item !== value) : [...values, value];
  next.forEach((item) => params.append(key, item));
}

function FilterGroup({
  title,
  values,
  selected,
  labels,
  onToggle,
}: {
  title: string;
  values: string[];
  selected: string[];
  labels?: Partial<Record<string, string>>;
  onToggle: (value: string) => void;
}) {
  if (values.length === 0) return null;

  return (
    <fieldset>
      <legend className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{title}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {values.map((value) => {
          const active = selected.includes(value);

          return (
            <label key={value} className={`cursor-pointer border px-3 py-2 font-mono text-xs uppercase tracking-[0.16em] ${active ? "border-primary bg-primary text-primary-foreground" : "border-border bg-secondary/60 text-muted-foreground"}`}>
              <input type="checkbox" checked={active} onChange={() => onToggle(value)} className="sr-only" />
              {labels?.[value] ?? value}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

function buildFilterQuery(status: FilterStatus, tech: string[], category: string[], capability: string[]) {
  const params = new URLSearchParams();
  if (status !== "all") params.set("status", status);
  tech.forEach((value) => params.append("tech", value));
  category.forEach((value) => params.append("category", value));
  capability.forEach((value) => params.append("capability", value));
  return params.toString();
}

function caseStudyHref(slug: string, filterQuery: string) {
  return filterQuery ? `/projects/${slug}?from=${encodeURIComponent(filterQuery)}` : `/projects/${slug}`;
}
