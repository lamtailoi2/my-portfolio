import { AboutUs } from "@/components/AboutUs/about-us";
import { Skills } from "@/components/Skills/skills";
import { FeaturedProjects } from "@/components/Project/projects";
import { DowloadCV } from "@/components/DowloadCV/dowload-cv";
import { WorkExperience as WorkExperienceComponent } from "@/components/WorkExperience/work-experience";
import { Footer } from "@/components/Footer/footer";
import dbConnect from "@/lib/mongoose";
import Project from "@/models/Project";
import WorkExperience from "@/models/WorkExperience";

export default async function Home() {
  await dbConnect();
  const dbProjects = await Project.find({}).lean();
  const dbExperiences = await WorkExperience.find({}).lean();
  
  const projects = JSON.parse(JSON.stringify(dbProjects));
  const experiences = JSON.parse(JSON.stringify(dbExperiences));

  return (
    <div className="flex flex-col justify-center items-center">
      <AboutUs />
      <DowloadCV />
      <WorkExperienceComponent experiences={experiences} />
      <Skills />
      <FeaturedProjects projects={projects} />
      <Footer />
    </div>
  );
}
