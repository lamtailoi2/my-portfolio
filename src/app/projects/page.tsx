import type { Metadata } from "next";
import { Footer } from "@/components/Footer/footer";
import { AllProjects } from "./all-projects";
import { getProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects | Loi Lam",
  description:
    "Browse all projects by Loi Lam — web applications, APIs, and more built with modern technologies.",
};

export default async function ProjectsPage() {
  const projects = getProjects();

  return (
    <>
      <AllProjects projects={projects} />
      <Footer />
    </>
  );
}
