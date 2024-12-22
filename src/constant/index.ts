import type { Skill } from "@/interfaces";
import type { Project } from "@/interfaces";
import epmImg from "../../public/epm.png";
import csr from "../../public/crs.png";
export const skills: Skill[] = [
  {
    name: "ts",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "css",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    name: "html",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    name: "java",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  },
  {
    name: "C",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
  },
  {
    name: "reactjs",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "mongodb",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "nodejs",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    name: "express",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg",
  },
  {
    name: "nextjs",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "tailwindcss",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "bootstrap",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "nestjs",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
  },
  {
    name: "sqlserver",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original-wordmark.svg",
  },
  {
    name: "mysql",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
  },
  {
    name: "mui",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
  },
  {
    name: "git",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
];

export const projects: Project[] = [
  {
    image: epmImg,
    title: "Experience Point Management System",
    teamSize: 8,
    role: "Frontend Developer",
    status: "completed",
    description:
      "The system aims to provide an online platform for clubs and departments to manage and input students' experience points efficiently. It enables users to view, add, edit, and delete student activity points with ease. The users of the system include Admins, Clubs, and Departments, allowing for streamlined management of student engagement across various activities",
    technologies: ["React", "JavaScript", "Tailwind CSS", "MUI"],
  },
  {
    image: csr,
    title: "Checking Résumé System",
    teamSize: 4,
    role: "Frontend Developer",
    status: "in-progress",
    description:
      "This web application is designed to streamline the recruitment process for the F-Code Club. It allows potential members to apply, submit their résumés, and track the status of their applications. Additionally, it provides a platform for club members to review applications, provide feedback, and make selection decisions.",
    technologies: ["React", "TypeScript", "Shadcn UI"],
  },
];
