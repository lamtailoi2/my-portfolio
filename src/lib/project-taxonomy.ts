import type { ProjectCapability, ProjectCategory } from "@/interfaces";

export const categories: ProjectCategory[] = [
  "web-app",
  "api-backend",
  "full-stack",
  "mobile",
  "tooling",
];

export const capabilities: ProjectCapability[] = [
  "frontend",
  "backend",
  "data",
  "ui-implementation",
  "api-design",
  "performance",
  "testing",
];

export const categoryLabels: Record<ProjectCategory, string> = {
  "web-app": "Web app",
  "api-backend": "API backend",
  "full-stack": "Full stack",
  mobile: "Mobile",
  tooling: "Tooling",
};

export const capabilityLabels: Record<ProjectCapability, string> = {
  frontend: "Frontend",
  backend: "Backend",
  data: "Data",
  "ui-implementation": "UI implementation",
  "api-design": "API design",
  performance: "Performance",
  testing: "Testing",
};
