"use client";
import { projects } from "@/constant";
import { ProjectCard } from "@/components/Project/project-card";
import { FeaturedProjectCard } from "@/components/Project/featured-project-card";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Filter } from "lucide-react";

type FilterStatus = "all" | "completed" | "in-progress";

export function AllProjects() {
  const [filter, setFilter] = useState<FilterStatus>("all");

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.status === filter);

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

  const filterOptions: { label: string; value: FilterStatus }[] = [
    { label: "All", value: "all" },
    { label: "Completed", value: "completed" },
    { label: "In Progress", value: "in-progress" },
  ];

  return (
    <div className="min-h-screen text-dracula-fg">
      {/* Page header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-dracula-comment hover:text-dracula-cyan transition-colors duration-300 mb-8 group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform duration-300"
          />
          <span className="text-sm font-mono">Back to Home</span>
        </Link>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <span className="text-dracula-comment text-sm font-mono tracking-wider uppercase">
              {"// all work"}
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold uppercase tracking-wider mt-2">
              Projects
            </h1>
            <p className="text-dracula-comment mt-2 text-sm">
              {filteredProjects.length} project
              {filteredProjects.length !== 1 ? "s" : ""}
              {filter !== "all" && ` · ${filter.replace("-", " ")}`}
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1 bg-dracula-current/50 rounded-lg p-1 border border-dracula-current">
            <Filter size={14} className="text-dracula-comment ml-2 mr-1" />
            {filterOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setFilter(opt.value)}
                className={`px-3 py-1.5 text-xs font-mono rounded-md transition-all duration-200 ${filter === opt.value
                  ? "bg-dracula-pink text-dracula-bg font-semibold"
                  : "text-dracula-comment hover:text-dracula-fg"
                  }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured projects */}
      {featuredProjects.length > 0 && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <span className="text-dracula-pink text-xs font-mono uppercase tracking-widest mb-4 block">
            ★ Featured
          </span>
          <div className="flex flex-col gap-8">
            {featuredProjects.map((project) => (
              <FeaturedProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      )}

      {/* Other projects grid */}
      {otherProjects.length > 0 && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <span className="text-dracula-comment text-xs font-mono uppercase tracking-widest mb-4 block">
            Other Projects
          </span>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      )}

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <p className="text-dracula-comment font-mono text-lg">
            {"// no projects found for this filter"}
          </p>
          <button
            onClick={() => setFilter("all")}
            className="mt-4 text-dracula-cyan hover:text-dracula-pink transition-colors text-sm font-mono"
          >
            ← Show all projects
          </button>
        </div>
      )}
    </div>
  );
}
