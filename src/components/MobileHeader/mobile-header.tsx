"use client";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@radix-ui/react-navigation-menu";
import { RefObject, useContext, useState } from "react";
import { NavigationContext } from "@/context/navigationContext";
import { Menu, X } from "lucide-react";
export const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { homeRef, skillsRef, projectsRef, contactRef } =
    useContext(NavigationContext);
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  const handleNavigation = (ref: RefObject<HTMLDivElement>) => {
    scrollToSection(ref);
    setIsOpen(false);
  };

  return (
    <>
      <div className="bg-black w-screen h-[60px] flex justify-around items-center text-xl sticky top-0 z-20">
        <h1 className="text-white font-extrabold text-2xl cursor-pointer">
          Loi{" "}
          <span className="text-[#9746fa] font-extrabold hover:text-white transition duration-700">
            Lam
          </span>
        </h1>
        {isOpen ? (
          <X
            className="text-white cursor-pointer transition-opacity duration-300 opacity-100"
            size={35}
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <Menu
            className="text-white cursor-pointer transition-opacity duration-300 opacity-100"
            size={35}
            onClick={() => setIsOpen(true)}
          />
        )}
      </div>
      {isOpen && (
        <NavigationMenu className="bg-black w-screen h-screen overflow-x-hidden sticky z-10">
          <NavigationMenuList className="flex flex-col gap-2 px-5 pb-10 text-muted-foreground">
            <NavigationMenuItem
              className="hover:text-blue-500 border-b-[0.5px]"
              onClick={() => handleNavigation(homeRef)}
            >
              Home
            </NavigationMenuItem>
            <NavigationMenuItem
              className="hover:text-blue-500 border-b-[0.5px]"
              onClick={() => handleNavigation(skillsRef)}
            >
              Skills
            </NavigationMenuItem>
            <NavigationMenuItem
              className="hover:text-blue-500 border-b-[0.5px]"
              onClick={() => handleNavigation(projectsRef)}
            >
              Projects
            </NavigationMenuItem>
            <NavigationMenuItem
              className="hover:text-blue-500 border-b-[0.5px]"
              onClick={() => handleNavigation(contactRef)}
            >
              Contact
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      )}
    </>
  );
};
