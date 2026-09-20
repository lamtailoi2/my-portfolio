import { StaticImageData } from "next/image";
export interface Skill {
  name: string;
  image: string;
}

export interface Project {
  id?: string;
  slug?: string;
  title: string;
  description: string;
  image?: string | StaticImageData;
  summary?: string;
  highlights?: string[];
  gallery?: GalleryImage[];
  teamSize: number;
  role: string;
  status: "completed" | "in-progress";
  technologies: string[];
  featured?: boolean;
  showcaseOrder?: number;
  category?: ProjectCategory;
  capabilities?: ProjectCapability[];
  accent?: ProjectAccent;
  links?: {
    github?: string;
    live?: string;
  };
  createdAt?: string;
}

export type ProjectStatus = "completed" | "in-progress";
export type ProjectAccent = "cyan" | "lime" | "amber";
export type ProjectCategory =
  | "web-app"
  | "api-backend"
  | "full-stack"
  | "mobile"
  | "tooling";
export type ProjectCapability =
  | "frontend"
  | "backend"
  | "data"
  | "ui-implementation"
  | "api-design"
  | "performance"
  | "testing";

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectDTO {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  image?: GalleryImage;
  gallery: GalleryImage[];
  teamSize: number;
  role: string;
  status: ProjectStatus;
  technologies: string[];
  featured: boolean;
  showcaseOrder?: number;
  category?: ProjectCategory;
  capabilities: ProjectCapability[];
  highlights: string[];
  accent: ProjectAccent;
  links: { github?: string; live?: string };
  createdAt: string;
}

export interface WorkExperience {
  order?: number;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies?: string[];
  isCurrentRole?: boolean;
}

export interface Achievement {
  order?: number;
  year: string;
  title: string;
  result: string;
  description?: string;
}
