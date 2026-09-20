import type {
  GalleryImage,
  ProjectAccent,
  ProjectCapability,
  ProjectCategory,
  ProjectDTO,
  ProjectStatus,
} from "@/interfaces";
import { capabilities, categories } from "@/lib/project-taxonomy";
import { staticProjects } from "@/content/projects";

type RawProject = Record<string, unknown>;

export function getProjects(): ProjectDTO[] {
  const projects = staticProjects.map((project) => normalizeProject(project as unknown as RawProject));

  return sortProjects(projects);
}

export function getProjectBySlug(slug: string) {
  const projects = getProjects();

  return {
    projects,
    project: projects.find((project) => project.slug === slug) ?? null,
  };
}

export function sortProjects(projects: ProjectDTO[]) {
  return [...projects].sort((a, b) => {
    const orderA = a.showcaseOrder ?? Number.POSITIVE_INFINITY;
    const orderB = b.showcaseOrder ?? Number.POSITIVE_INFINITY;

    if (orderA !== orderB) return orderA - orderB;
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    if (a.createdAt !== b.createdAt) return b.createdAt.localeCompare(a.createdAt);
    return a.id.localeCompare(b.id);
  });
}

export function normalizeProject(raw: RawProject): ProjectDTO {
  const id = String(raw._id ?? raw.id ?? raw.title ?? "project");
  const title = asText(raw.title, "Untitled project");
  const description = asText(raw.description, "No project description supplied yet.");
  const status = raw.status === "in-progress" ? "in-progress" : "completed";
  const technologies = asStringArray(raw.technologies);
  const gallery = normalizeGallery(raw.gallery, raw.image, title);
  const createdAt = toIsoDate(raw.createdAt);
  const summary = asText(raw.summary, description);

  return {
    id,
    slug: `${slugify(title)}-${id}`,
    title,
    summary,
    description,
    image: gallery[0],
    gallery,
    teamSize: typeof raw.teamSize === "number" ? raw.teamSize : 1,
    role: asText(raw.role, "Contributor"),
    status,
    technologies,
    featured: Boolean(raw.featured),
    showcaseOrder: typeof raw.showcaseOrder === "number" ? raw.showcaseOrder : undefined,
    category: categories.includes(raw.category as ProjectCategory)
      ? (raw.category as ProjectCategory)
      : inferCategory(technologies),
    capabilities: normalizeCapabilities(raw.capabilities, technologies),
    highlights: asStringArray(raw.highlights),
    accent: normalizeAccent(raw.accent, status, id),
    links: normalizeLinks(raw.links),
    createdAt,
  };
}

export function isHomeProof(project: ProjectDTO) {
  const hasProofLink = Boolean(project.links.github || project.links.live);

  return (
    project.featured &&
    project.summary.length > 0 &&
    project.highlights.length >= 2 &&
    project.role.length > 0 &&
    project.teamSize > 0 &&
    project.technologies.length > 0 &&
    (project.gallery.length > 0 || hasProofLink)
  );
}

function normalizeGallery(
  gallery: unknown,
  legacyImage: unknown,
  title: string
): GalleryImage[] {
  const images = Array.isArray(gallery) ? gallery : [];
  const normalized = images
    .map((image) => {
      if (!image || typeof image !== "object") return null;
      const item = image as Record<string, unknown>;
      const src = validUrl(item.src);
      const alt = asText(item.alt, "");

      if (!src || !alt) return null;

      return {
        src,
        alt,
        caption: asOptionalText(item.caption),
      } satisfies GalleryImage;
    })
    .filter(Boolean) as GalleryImage[];

  const fallback = validUrl(legacyImage);

  if (normalized.length === 0 && fallback) {
    return [{ src: fallback, alt: `${title} representative screen` }];
  }

  return normalized;
}

function normalizeLinks(links: unknown) {
  if (!links || typeof links !== "object") return {};

  const record = links as Record<string, unknown>;

  return {
    github: validUrl(record.github),
    live: validUrl(record.live),
  };
}

function normalizeCapabilities(input: unknown, technologies: string[]): ProjectCapability[] {
  const explicit = asStringArray(input).filter((value): value is ProjectCapability =>
    capabilities.includes(value as ProjectCapability)
  );

  if (explicit.length > 0) return [...new Set(explicit)];

  const tech = technologies.join(" ").toLowerCase();
  const inferred: ProjectCapability[] = [];

  if (/react|next|css|html|tailwind/.test(tech)) inferred.push("frontend", "ui-implementation");
  if (/node|express|nest|api|java/.test(tech)) inferred.push("backend", "api-design");
  if (/mongo|mysql|sql|database/.test(tech)) inferred.push("data");
  if (/test|vitest|jest|playwright/.test(tech)) inferred.push("testing");

  return [...new Set<ProjectCapability>(inferred.length > 0 ? inferred : ["frontend"])];
}

function inferCategory(technologies: string[]): ProjectCategory | undefined {
  const tech = technologies.join(" ").toLowerCase();

  if (/react native|android|ios|mobile/.test(tech)) return "mobile";
  if (/node|express|nest|api/.test(tech) && !/react|next/.test(tech)) return "api-backend";
  if (/node|express|nest|mongo|mysql|sql/.test(tech) && /react|next/.test(tech)) return "full-stack";
  if (/cli|tool|script/.test(tech)) return "tooling";
  if (technologies.length > 0) return "web-app";

  return undefined;
}

function normalizeAccent(
  input: unknown,
  status: ProjectStatus,
  id: string
): ProjectAccent {
  if (input === "cyan" || input === "lime" || input === "amber") return input;
  if (status === "in-progress") return "amber";

  return id.length % 2 === 0 ? "cyan" : "lime";
}

function slugify(input: string) {
  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "") || "project";
}

function validUrl(input: unknown) {
  if (typeof input !== "string" || !input.trim()) return undefined;

  try {
    const url = new URL(input);
    return url.protocol === "http:" || url.protocol === "https:" ? url.toString() : undefined;
  } catch {
    return undefined;
  }
}

function asText(input: unknown, fallback: string) {
  return typeof input === "string" && input.trim() ? input.trim() : fallback;
}

function asOptionalText(input: unknown) {
  return typeof input === "string" && input.trim() ? input.trim() : undefined;
}

function asStringArray(input: unknown) {
  return Array.isArray(input)
    ? input
        .filter((item): item is string => typeof item === "string" && item.trim().length > 0)
        .map((item) => item.trim())
    : [];
}

function toIsoDate(input: unknown) {
  if (input instanceof Date) return input.toISOString();
  if (typeof input === "string") {
    const date = new Date(input);
    if (!Number.isNaN(date.valueOf())) return date.toISOString();
  }

  return new Date(0).toISOString();
}
