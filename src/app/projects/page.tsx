import type { Metadata } from "next";
import { Footer } from "@/components/Footer/footer";
import { AllProjects } from "./all-projects";
import dbConnect from "@/lib/mongoose";
import Project from "@/models/Project";

export const metadata: Metadata = {
  title: "Projects | Loi Lam",
  description:
    "Browse all projects by Loi Lam — web applications, APIs, and more built with modern technologies.",
};

export default async function ProjectsPage() {
  await dbConnect();
  const dbProjects = await Project.find({}).lean();
  const projects = JSON.parse(JSON.stringify(dbProjects));

  return (
    <>
      <AllProjects projects={projects} />
      <Footer />
    </>
  );
}
