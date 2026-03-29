"use client";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@radix-ui/react-navigation-menu";
import { useContext, useState, useEffect } from "react";
import { NavigationContext } from "@/context/navigationContext";
import { MobileHeader } from "../MobileHeader/mobile-header";
import Link from "next/link";

export const Header = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { homeRef, skillsRef, contactRef } = useContext(NavigationContext);

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
    <NavigationMenu className="bg-dracula-bg/95 backdrop-blur-sm border-b border-dracula-current w-screen h-[60px] flex justify-around items-center sticky text-xl z-20 top-0">
      <Link href="/">
        <h1 className="text-dracula-fg font-extrabold text-2xl cursor-pointer">
          Loi{" "}
          <span className="text-dracula-pink font-extrabold hover:text-dracula-cyan transition duration-700">
            Lam
          </span>
        </h1>
      </Link>
      <NavigationMenuList className="flex flex-row justify-center items-center gap-10 h-[50px] text-dracula-fg font-bold hover:cursor-pointer">
        <NavigationMenuItem
          className="hover:text-dracula-cyan cursor-pointer transition duration-300"
          onClick={() => scrollToSection(homeRef)}
        >
          Home
        </NavigationMenuItem>
        <NavigationMenuItem
          className="hover:text-dracula-cyan cursor-pointer transition duration-300"
          onClick={() => scrollToSection(skillsRef)}
        >
          Skills
        </NavigationMenuItem>
        <NavigationMenuItem className="hover:text-dracula-cyan cursor-pointer transition duration-300">
          <Link href="/projects">Projects</Link>
        </NavigationMenuItem>
        <NavigationMenuItem
          className="hover:text-dracula-cyan cursor-pointer transition duration-300"
          onClick={() => scrollToSection(contactRef)}
        >
          Contact
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
