import type { Skill } from "@/interfaces";
import type { Project } from "@/interfaces";
import epmImg from "../../public/epm.png";
import csr from "../../public/crs.png";
import cnppImg from "../../public/cnpp.png";
import chargedImg from "../../public/charged.png"
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
    name: "git",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
];

export const projects: Project[] = [
  {
    image: chargedImg,
    title: "Charged",
    teamSize: 5,
    role: "Fullstack Developer",
    status: "completed",
    featured: true,
    links: {
      github: "https://github.com/orgs/SWP391-MaintenanceManagementSystem/repositories"
    },
    description:
      "A web application designed to streamline vehicle maintenance operations. It provides a user-friendly interface for customers, technicians, and administrators to manage bookings, services, and vehicle information.",
    technologies: ["NestJS", "TypeScript", "React", "PostgresSQL", "Redis"],
  },
  {
    image: cnppImg,
    title: "Cẩm Nang Phố Phường",
    teamSize: 2,
    role: "Fullstack Developer",
    status: "completed",
    featured: true,
    links: {
      live: "https://n4hx-capstone-website.vercel.app"
    },
    description:
      "A web app providing post-merger HCMC ward information, featuring interactive mini-games and an admin dashboard with Google Analytics integration.",
    technologies: ["Next.js", "TypeScript", "MongoDB"],
  },
  {
    image: epmImg,
    title: "Experience Point Management System",
    teamSize: 8,
    role: "Frontend Developer",
    status: "completed",
    featured: false,
    description:
      "The system aims to provide an online platform for clubs and departments to manage and input students' experience points efficiently. It enables users to view, add, edit, and delete student activity points with ease. The users of the system include Admins, Clubs, and Departments, allowing for streamlined management of student engagement across various activities",
    technologies: ["React", "JavaScript"],
  },
  {
    image: csr,
    title: "Checking Résumé System",
    teamSize: 4,
    role: "Frontend Developer",
    status: "completed",
    featured: false,
    description:
      "This web application is designed to streamline the recruitment process for the F-Code Club. It allows potential members to apply, submit their résumés, and track the status of their applications. Additionally, it provides a platform for club members to review applications, provide feedback, and make selection decisions.",
    technologies: ["React", "TypeScript"],
  },

];