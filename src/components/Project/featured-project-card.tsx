import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { Github, Globe, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Project } from "@/interfaces";
import { Suspense } from "react";
import { Spinner } from "../spinner";

interface FeaturedProjectCardProps {
  project: Project;
}

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {


  const handleOpenLink = (link: string | undefined) => {
    if (!link) return;
    window.open(link, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="group relative w-full rounded-lg border border-dracula-current overflow-hidden bg-dracula-current/30 hover:border-dracula-pink/50 transition-all duration-500">
      {/* Terminal window header */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-dracula-bg/80 border-b border-dracula-current">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-dracula-red" />
          <span className="w-3 h-3 rounded-full bg-dracula-yellow" />
          <span className="w-3 h-3 rounded-full bg-dracula-green" />
        </div>
        <span className="text-dracula-comment text-xs ml-2 font-mono">
          ~/projects/{project.title.toLowerCase().replace(/\s+/g, "-")}
        </span>
        <div className="ml-auto">
          <Badge
            className={
              project.status === "completed"
                ? "bg-dracula-green/20 text-dracula-green border-dracula-green/30 text-xs"
                : "bg-dracula-orange/20 text-dracula-orange border-dracula-orange/30 text-xs"
            }
          >
            {project.status === "completed" ? "● Completed" : "◌ In Progress"}
          </Badge>
        </div>
      </div>

      {/* Content area */}
      <div className="flex flex-col lg:flex-row">
        {/* Image */}
        <div className="relative lg:w-1/2 h-56 lg:h-auto overflow-hidden">
          <Suspense fallback={<Spinner />}>
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={500}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            />
          </Suspense>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dracula-bg/60 hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-dracula-bg/60 to-transparent lg:hidden" />
        </div>

        {/* Details */}
        <div className="flex-1 p-6 lg:p-8 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-dracula-pink text-sm font-semibold uppercase tracking-widest">
              Featured
            </span>
            <ArrowUpRight
              size={16}
              className="text-dracula-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>

          <h2 className="text-2xl lg:text-3xl font-bold text-dracula-fg mb-3 group-hover:text-dracula-cyan transition-colors duration-300">
            {project.title}
          </h2>

          <div className="flex items-center gap-3 text-dracula-comment text-sm mb-4">
            <span className="flex items-center gap-1">
              <span className="text-dracula-purple">λ</span> {project.role}
            </span>
            <span className="text-dracula-current">|</span>
            <span>
              <span className="text-dracula-green">{project.teamSize}</span>{" "}
              members
            </span>
          </div>

          <p className="text-dracula-fg/70 mb-6 leading-relaxed line-clamp-4">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono rounded-md bg-dracula-bg border border-dracula-comment/30 text-dracula-cyan"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex gap-3">
            {project.links?.github && (
              <Button
                variant="outline"
                size="sm"
                className="gap-2 border-dracula-comment text-dracula-fg hover:border-dracula-cyan hover:text-dracula-white transition-colors"
                onClick={() => handleOpenLink(project.links?.github)}
              >
                <Github className="w-4 h-4" />
                Source
              </Button>
            )}
            {project.links?.live && (
              <Button
                size="sm"
                className="gap-2 bg-dracula-pink text-dracula-bg hover:bg-dracula-pink/80 transition-colors"
                onClick={() => handleOpenLink(project.links?.live)}
              >
                <Globe className="w-4 h-4" />
                Live Demo
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
