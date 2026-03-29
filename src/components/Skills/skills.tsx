"use client";
import { SkillsSlider } from "../SkillsSlider/skills-slider";
import { skills } from "@/constant";
import { useContext } from "react";
import { NavigationContext } from "@/context/navigationContext";

export const Skills = () => {
  const { skillsRef } = useContext(NavigationContext);
  return (
    <section
      id="skills"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col items-center"
      ref={skillsRef}
    >
      <h1 className="text-dracula-fg text-center text-4xl sm:text-5xl font-bold mb-16 uppercase tracking-wider">
        Skills
      </h1>
      <div className="w-full flex justify-center">
        <SkillsSlider skills={skills} />
      </div>
    </section>
  );
};
