import { AboutUs } from "@/components/AboutUs/about-us";
import { Skills } from "@/components/Skills/skills";
import { FeaturedProjects } from "@/components/Project/projects";
import { DowloadCV } from "@/components/DowloadCV/dowload-cv";
import { WorkExperience } from "@/components/WorkExperience/work-experience";
import { Footer } from "@/components/Footer/footer";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <AboutUs />
      <DowloadCV />
      <WorkExperience />
      <Skills />
      <FeaturedProjects />
      <Footer />
    </div>
  );
}
