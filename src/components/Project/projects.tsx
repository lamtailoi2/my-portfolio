"use client";
import { FeaturedProjectCard } from "./featured-project-card";
import { projects } from "@/constant";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const FeaturedProjects = () => {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="text-dracula-fg w-full flex flex-col items-center py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl">
        {/* Section header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-dracula-comment text-sm font-mono tracking-wider uppercase">
              {"// highlighted work"}
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold uppercase tracking-wider mt-2">
              Featured Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden sm:flex items-center gap-2 text-dracula-comment hover:text-dracula-cyan transition-colors duration-300 group"
          >
            <span className="text-sm font-mono">View All</span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
        </div>

        {/* Featured cards */}
        <div className="flex flex-col gap-8">
          {featuredProjects.map((project) => (
            <FeaturedProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* Mobile "View All" link */}
        <Link
          href="/projects"
          className="sm:hidden flex items-center justify-center gap-2 mt-8 text-dracula-comment hover:text-dracula-cyan transition-colors duration-300 group"
        >
          <span className="text-sm font-mono">View All Projects</span>
          <ArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform duration-300"
          />
        </Link>
      </div>
    </section>
  );
};
