import { StaticImageData } from "next/image";
export interface Skill {
  name: string;
  image: string;
}

export interface Project {
  title: string;
  description: string;
  image: string | StaticImageData;
  teamSize: number;
  role: string;
  status: "completed" | "in-progress";
  technologies: string[];
  links?: {
    github?: string;
    live?: string;
  };
}
