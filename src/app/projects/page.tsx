import type { Metadata } from "next";
import { Footer } from "@/components/Footer/footer";
import { AllProjects } from "./all-projects";

export const metadata: Metadata = {
  title: "Projects | Loi Lam",
  description:
    "Browse all projects by Loi Lam — web applications, APIs, and more built with modern technologies.",
};

export default function ProjectsPage() {
  return (
    <>
      <AllProjects />
      <Footer />
    </>
  );
}
