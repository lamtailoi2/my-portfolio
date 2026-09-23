import type { Project } from "@/interfaces";

export const staticProjects: Project[] = [
  {
    id: "stale-ai-fashion-platform",
    title: "StAle",
    summary:
      "Full-stack AI fashion commerce platform with virtual try-on, live try-on, stylist consultation, chatbot, subscriptions, payments, mobile flows, and admin operations.",
    description:
      "Designed and developed a full-stack AI fashion platform supporting e-commerce, virtual try-on, live try-on, AI stylist consultation, chatbot, subscriptions, payments, user measurements, notifications, and admin operations. Built RESTful APIs with NestJS, TypeScript, Prisma, and PostgreSQL for authentication, product catalog, orders, shipment tracking, payments, AI usage quotas, admin settings, and standardized responses. Implemented JWT access/refresh rotation, email verification, password recovery, logout-all, token blacklist, and Google OAuth for web and mobile flows. Integrated fal.ai FASHN, Decart realtime, Google Gemini, contextual chatbot services, SePay checkout/webhooks, Redis quotas/rate limiting/caching, Socket.io realtime features, BullMQ email jobs, and an Expo React Native mobile application.",
    teamSize: 1,
    role: "Full-Stack Developer",
    status: "in-progress",
    technologies: [
      "NestJS",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Socket.io",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Expo React Native",
      "TanStack Query",
      "Zustand",
      "fal.ai",
      "Decart AI",
      "Gemini",
      "Groq",
      "SePay",
      "Cloudinary",
      "Brevo",
      "Docker",
    ],
    featured: true,
    showcaseOrder: 1,
    category: "full-stack",
    capabilities: ["frontend", "backend", "data", "api-design", "ui-implementation", "performance"],
    highlights: [],
    links: {
      live: "https://fashion-ai-fe.vercel.app/",
    },
    createdAt: "2026-07-01T00:00:00.000Z",
  },
  {
    id: "69c8da8486403906b4108766",
    title: "Experience Point Management System",
    description:
      "The system aims to provide an online platform for clubs and departments to manage and input students' experience points efficiently. It enables users to view, add, edit, and delete student activity points with ease. The users of the system include Admins, Clubs, and Departments, allowing for streamlined management of student engagement across various activities.",
    image:
      "https://res.cloudinary.com/dcbmk7k6l/image/upload/v1774770820/portfolio_projects/rg4dapm2dqmhtciwqjgh.png",
    teamSize: 8,
    role: "Frontend Developer",
    status: "completed",
    technologies: ["React", "JavaScript"],
    featured: false,
    category: "web-app",
    capabilities: ["frontend", "ui-implementation"],
    createdAt: "2026-03-29T07:53:40.901Z",
  },
  {
    id: "69c8da8286403906b4108762",
    title: "Charged",
    description:
      "A web application designed to streamline vehicle maintenance operations. It provides a user-friendly interface for customers, technicians, and administrators to manage bookings, services, and vehicle information.",
    image:
      "https://res.cloudinary.com/dcbmk7k6l/image/upload/v1774770818/portfolio_projects/gugtlobizucppcutvvba.png",
    teamSize: 5,
    role: "Fullstack Developer",
    status: "completed",
    technologies: ["NestJS", "TypeScript", "React", "PostgresSQL", "Redis"],
    featured: true,
    category: "full-stack",
    capabilities: ["frontend", "backend", "api-design", "data"],
    links: {
      github: "https://github.com/orgs/SWP391-MaintenanceManagementSystem/repositories",
      live: "https://swp-391-fe-one.vercel.app/",
    },
    createdAt: "2026-03-29T07:53:38.905Z",
  },
  {
    id: "69c8da8586403906b4108768",
    title: "Checking Résumé System",
    description:
      "This web application is designed to streamline the recruitment process for the F-Code Club. It allows potential members to apply, submit their résumés, and track the status of their applications. Additionally, it provides a platform for club members to review applications, provide feedback, and make selection decisions.",
    image:
      "https://res.cloudinary.com/dcbmk7k6l/image/upload/v1774770821/portfolio_projects/g1ecdsilhxpybniv7k0t.png",
    teamSize: 4,
    role: "Frontend Developer",
    status: "completed",
    technologies: ["React", "TypeScript"],
    featured: false,
    category: "web-app",
    capabilities: ["frontend", "ui-implementation"],
    createdAt: "2026-03-29T07:53:41.799Z",
  },
  {
    id: "69c8da8486403906b4108764",
    title: "Cẩm Nang Phố Phường",
    description:
      "A web app providing post-merger HCMC ward information, featuring interactive mini-games and an admin dashboard with Google Analytics integration.",
    image:
      "https://res.cloudinary.com/dcbmk7k6l/image/upload/v1774770819/portfolio_projects/c5cpnsxbt430rfimc3nf.png",
    teamSize: 2,
    role: "Fullstack Developer",
    status: "completed",
    technologies: ["Next.js", "TypeScript", "MongoDB"],
    featured: true,
    category: "full-stack",
    capabilities: ["frontend", "backend", "data"],
    links: {
      live: "https://n4hx-capstone-website.vercel.app",
    },
    createdAt: "2026-03-29T07:53:40.046Z",
  },
];
