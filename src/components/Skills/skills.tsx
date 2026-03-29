"use client";
import { SkillsSlider } from "../SkillsSlider/skills-slider";
import { skills } from "@/constant";
import { useContext } from "react";
import { NavigationContext } from "@/context/navigationContext";

export const Skills = () => {
  const { skillsRef } = useContext(NavigationContext);
  return (
    <div
      className="w-screen flex flex-col justify-center my-[50px] items-center"
      ref={skillsRef}
    >
      <h1 className="text-dracula-fg text-center text-5xl font-bold uppercase tracking-wider">
        Skills
      </h1>
      <div className="w-full flex justify-center">
        <SkillsSlider skills={skills} />
      </div>
    </div>
  );
};
