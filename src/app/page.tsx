import { AboutUs } from "@/components/AboutUs/about-us";
import { Skills } from "@/components/Skills/skills";
import { Project } from "@/components/Project/projects";
import { DowloadCV } from "@/components/DowloadCV/dowload-cv";
import { Contact } from "@/components/Contact/contact";
import { Footer } from "@/components/Footer/footer";
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <AboutUs />
      <DowloadCV />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
