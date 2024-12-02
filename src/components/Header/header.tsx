"use client";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@radix-ui/react-navigation-menu";
import { useContext } from "react";
import { NavigationContext } from "@/context/navigationContext";
export const Header = () => {
  const { homeRef, skillsRef, projectsRef } = useContext(NavigationContext);
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  return (
    <NavigationMenu className="bg-black w-screen h-[60px] flex justify-around items-center text-xl sticky top-0 z-10">
      <h1 className="text-white font-extrabold text-2xl cursor-pointer">
        Loi{" "}
        <span className="text-[#9746fa] font-extrabold hover:text-white transition duration-700">
          Lam
        </span>
      </h1>
      <NavigationMenuList className="flex flex-row justify-center items-center gap-10 h-[50px] text-white font-bold hover:cursor-pointer">
        <NavigationMenuItem
          className="hover:text-blue-500"
          onClick={() => scrollToSection(homeRef)}
        >
          Home
        </NavigationMenuItem>
        <NavigationMenuItem
          className="hover:text-blue-500"
          onClick={() => scrollToSection(skillsRef)}
        >
          Skills
        </NavigationMenuItem>
        <NavigationMenuItem
          className="hover:text-blue-500"
          onClick={() => scrollToSection(projectsRef)}
        >
          Projects
        </NavigationMenuItem>
        <NavigationMenuItem className="hover:text-blue-500">
          Contact
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
