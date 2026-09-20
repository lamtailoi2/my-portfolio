import type { WorkExperience } from "@/interfaces";

export const profileExperiences: WorkExperience[] = [
  {
    order: 2,
    company: "FPT Software",
    role: "Frontend Developer Intern",
    startDate: "Jan 2026",
    endDate: "Apr. 2026",
    isCurrentRole: false,
    description: [
      "Built webviews for Japanese customers.",
      "Learned professional development processes and software lifecycle.",
      "Participated in regular code reviews with senior mentors to improve code quality and best practices.",
    ],
    technologies: [],
  },
  {
    order: 1,
    company: "Tiximax",
    role: "Full-Stack Developer",
    startDate: "Apr. 2026",
    endDate: "Present",
    isCurrentRole: true,
    description: [
      "Built a full-stack F&B management platform for a Japanese client, covering admin operations, branch management, menu configuration, reservations, dine-in, and takeaway flows to support daily restaurant operations.",
      "Integrated local restaurant workstations with receipt printers, POS payment terminals, and QR-scanning kiosks to streamline in-store processes and improve operational efficiency.",
      "Collaborated on system architecture and UI design, creating reusable front-end components and scalable back-end structures to accelerate development and maintain consistency across modules.",
      "Worked across the software development lifecycle, optimizing performance and ensuring maintainable, production-ready implementation practices.",
    ],
  },
];
