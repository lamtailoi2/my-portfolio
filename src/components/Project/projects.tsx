"use client";
import { Passion_One } from "next/font/google";
import { ProjectCard } from "./project-card";
import { projects } from "@/constant";
import { useContext } from "react";
import { NavigationContext } from "@/context/navigationContext";
const passion_one = Passion_One({
  subsets: ["latin"],
  weight: ["400"],
});

export const Project = () => {
  const { projectsRef } = useContext(NavigationContext);
  return (
    <div
      className="text-white w-screen flex flex-col justify-center my-[50px] items-center"
      ref={projectsRef}
    >
      <h1 className={`text-5xl text-center ${passion_one.className}`}>
        PROJECTS
      </h1>
      <div className="flex justify-center items-center gap-5">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            img={project.img ? project.img : ""}
            title={project.title}
            teamSize={project.teamSize}
            role={project.role}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};
