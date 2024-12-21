"use client";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@radix-ui/react-navigation-menu";
import { useContext, useState, useEffect } from "react";
import { NavigationContext } from "@/context/navigationContext";
import { MobileHeader } from "../MobileHeader/mobile-header";

export const Header = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { homeRef, skillsRef, projectsRef, contactRef } =
    useContext(NavigationContext);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 1024);
      };

      handleResize();

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return isMobile ? (
    <MobileHeader />
  ) : (
    <NavigationMenu className="bg-black w-screen h-[60px] flex justify-around items-center sticky text-xl z-20 top-0">
      <h1 className="text-white font-extrabold text-2xl cursor-pointer">
        Loi{" "}
        <span className="text-[#9746fa] font-extrabold hover:text-white transition duration-700">
          Lam
        </span>
      </h1>
      <NavigationMenuList className="flex flex-row justify-center items-center gap-10 h-[50px] text-white font-bold hover:cursor-pointer">
        <NavigationMenuItem
          className="hover:text-blue-500 cursor-pointer"
          onClick={() => scrollToSection(homeRef)}
        >
          Home
        </NavigationMenuItem>
        <NavigationMenuItem
          className="hover:text-blue-500 cursor-pointer"
          onClick={() => scrollToSection(skillsRef)}
        >
          Skills
        </NavigationMenuItem>
        <NavigationMenuItem
          className="hover:text-blue-500 cursor-pointer"
          onClick={() => scrollToSection(projectsRef)}
        >
          Projects
        </NavigationMenuItem>
        <NavigationMenuItem
          className="hover:text-blue-500 cursor-pointer"
          onClick={() => scrollToSection(contactRef)}
        >
          Contact
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
