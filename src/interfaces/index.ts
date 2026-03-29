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
  featured?: boolean;
  links?: {
    github?: string;
    live?: string;
  };
}

export interface WorkExperience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies?: string[];
  isCurrentRole?: boolean;
}
