import { StaticImageData } from "next/image";
export interface Skill {
  name: string;
  image: string;
}

export interface Project {
  title: string;
  description: string;
  img: string | StaticImageData;
  teamSize?: number;
  owner?: string;
  role?: string;
}
