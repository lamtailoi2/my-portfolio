"use client";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@radix-ui/react-navigation-menu";
import { useContext, useState } from "react";
import { NavigationContext } from "@/context/navigationContext";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { homeRef, skillsRef, contactRef } = useContext(NavigationContext);
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  const handleScrollNavigation = (ref: React.RefObject<HTMLDivElement>) => {
    scrollToSection(ref);
    setIsOpen(false);
  };

  return (
    <>
      <div className="bg-dracula-bg/95 backdrop-blur-sm border-b border-dracula-current w-screen h-[60px] flex justify-around items-center text-xl sticky top-0 z-20">
        <Link href="/">
          <h1 className="text-dracula-fg font-extrabold text-2xl cursor-pointer">
            Loi{" "}
            <span className="text-dracula-pink font-extrabold hover:text-dracula-cyan transition duration-700">
              Lam
            </span>
          </h1>
        </Link>
        {isOpen ? (
          <X
            className="text-dracula-fg cursor-pointer transition-opacity duration-300 opacity-100"
            size={35}
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <Menu
            className="text-dracula-fg cursor-pointer transition-opacity duration-300 opacity-100"
            size={35}
            onClick={() => setIsOpen(true)}
          />
        )}
      </div>
      {isOpen && (
        <NavigationMenu className="bg-dracula-bg w-screen h-screen overflow-x-hidden sticky z-10">
          <NavigationMenuList className="flex flex-col gap-2 px-5 pb-10 text-dracula-comment">
            <NavigationMenuItem
              className="hover:text-dracula-cyan border-b border-dracula-current py-3 cursor-pointer transition duration-300"
              onClick={() => handleScrollNavigation(homeRef)}
            >
              Home
            </NavigationMenuItem>
            <NavigationMenuItem
              className="hover:text-dracula-cyan border-b border-dracula-current py-3 cursor-pointer transition duration-300"
              onClick={() => handleScrollNavigation(skillsRef)}
            >
              Skills
            </NavigationMenuItem>
            <NavigationMenuItem className="hover:text-dracula-cyan border-b border-dracula-current py-3 cursor-pointer transition duration-300">
              <Link href="/projects" onClick={() => setIsOpen(false)}>
                Projects
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem
              className="hover:text-dracula-cyan border-b border-dracula-current py-3 cursor-pointer transition duration-300"
              onClick={() => handleScrollNavigation(contactRef)}
            >
              Contact
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      )}
    </>
  );
};
