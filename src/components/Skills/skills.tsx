"use client";
import { SkillsSlider } from "../SkillsSlider/skills-slider";
import { Passion_One } from "next/font/google";
import { skills } from "@/constant";
import { useContext } from "react";
import { NavigationContext } from "@/context/navigationContext";
const passion_one = Passion_One({
  subsets: ["latin"],
  weight: ["400"],
});

export const Skills = () => {
  const { skillsRef } = useContext(NavigationContext);
  return (
    <div
      className="w-screen flex flex-col justify-center my-[50px] items-center"
      ref={skillsRef}
    >
      <h1 className="text-white text-center text-5xl font-bold">
        <span className={`${passion_one.className}`}>SKILLS</span>
      </h1>
      <div className="w-full flex justify-center">
        <SkillsSlider skills={skills} />
      </div>
    </div>
  );
};
