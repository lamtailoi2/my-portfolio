import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/card";
import { Github, Globe } from "lucide-react";
import Image from "next/image";
import { Project } from "@/interfaces";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden border-gray-800 bg-black backdrop-blur-sm hover:bg-gray-900/80 transition-all duration-300 m-10">
      <CardHeader className="p-0">
        <div className="relative h-40 sm:h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={400}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-4 right-4">
            <Badge
              variant={project.status === "completed" ? "default" : "secondary"}
            >
              {project.status === "completed" ? "Completed" : "In Progress"}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">
          {project.title}
        </h2>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-400 text-sm mb-4">
          <span>Team Size: {project.teamSize}</span>
          <span className="hidden sm:inline">•</span>
          <span>{project.role}</span>
        </div>
        <p className="text-gray-300 mb-4 text-sm sm:text-base line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="bg-gray-800/50 text-xs sm:text-sm text-white"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0 flex flex-col sm:flex-row gap-2 sm:gap-4">
        {project.links?.github && (
          <Button
            variant="outline"
            size="sm"
            className="w-full sm:w-auto gap-2"
          >
            <Github className="w-4 h-4" />
            GitHub
          </Button>
        )}
        {project.links?.live && (
          <Button
            variant="outline"
            size="sm"
            className="w-full sm:w-auto gap-2"
          >
            <Globe className="w-4 h-4" />
            Live Demo
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
