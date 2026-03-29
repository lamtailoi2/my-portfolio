import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { Github, Globe } from "lucide-react";
import Image from "next/image";
import { Project } from "@/interfaces";
import { Suspense } from "react";
import { Spinner } from "../spinner";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative rounded-lg border border-dracula-current overflow-hidden bg-dracula-current/30 hover:border-dracula-purple/40 transition-all duration-500 hover:-translate-y-1">
      {/* Terminal dots bar */}
      <div className="flex items-center gap-2 px-3 py-2 bg-dracula-bg/80 border-b border-dracula-current">
        <div className="flex gap-1.5">
          <span className="w-2 h-2 rounded-full bg-dracula-red/70" />
          <span className="w-2 h-2 rounded-full bg-dracula-yellow/70" />
          <span className="w-2 h-2 rounded-full bg-dracula-green/70" />
        </div>
        <span className="text-dracula-comment text-[10px] ml-1.5 font-mono truncate">
          ~/{project.title.toLowerCase().replace(/\s+/g, "-")}
        </span>
      </div>

      {/* Image */}
      <div className="relative h-40 overflow-hidden">
        <Suspense fallback={<Spinner />}>
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={300}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />
        </Suspense>
        <div className="absolute inset-0 bg-gradient-to-t from-dracula-bg/80 via-transparent to-transparent" />

        {/* Status badge overlay */}
        <div className="absolute top-3 right-3">
          <Badge
            className={
              project.status === "completed"
                ? "bg-dracula-green/20 text-dracula-green border-dracula-green/30 text-[10px] backdrop-blur-sm"
                : "bg-dracula-orange/20 text-dracula-orange border-dracula-orange/30 text-[10px] backdrop-blur-sm"
            }
          >
            {project.status === "completed" ? "● Done" : "◌ WIP"}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-dracula-fg mb-1.5 group-hover:text-dracula-cyan transition-colors duration-300 line-clamp-1">
          {project.title}
        </h3>

        <div className="flex items-center gap-2 text-dracula-comment text-xs mb-3">
          <span>
            <span className="text-dracula-purple">λ</span> {project.role}
          </span>
          <span className="text-dracula-current">|</span>
          <span>
            <span className="text-dracula-green">{project.teamSize}</span>{" "}
            members
          </span>
        </div>

        <p className="text-dracula-fg/60 text-sm mb-4 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[10px] font-mono rounded bg-dracula-bg border border-dracula-comment/20 text-dracula-cyan/80"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-dracula-bg border border-dracula-comment/20 text-dracula-comment">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          {project.links?.github && (
            <Button
              variant="outline"
              size="sm"
              className="gap-1.5 text-xs h-8 border-dracula-comment/50 text-dracula-fg hover:border-dracula-cyan hover:text-dracula-cyan"
            >
              <Github className="w-3.5 h-3.5" />
              Code
            </Button>
          )}
          {project.links?.live && (
            <Button
              size="sm"
              className="gap-1.5 text-xs h-8 bg-dracula-pink text-dracula-bg hover:bg-dracula-pink/80"
            >
              <Globe className="w-3.5 h-3.5" />
              Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
