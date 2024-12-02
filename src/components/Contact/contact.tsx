"use client";
import { Passion_One } from "next/font/google";
import { ContactForm } from "./contactForm";
import { SocialLinks } from "./socialLinks";
import { useContext } from "react";
import { NavigationContext } from "@/context/navigationContext";
const passion_one = Passion_One({
  subsets: ["latin"],
  weight: ["400"],
});

export const Contact = () => {
  const { contactRef } = useContext(NavigationContext);
  return (
    <div
      className="my-[100px] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      ref={contactRef}
    >
      <h1 className="text-primary-foreground text-center text-5xl font-bold mb-10">
        <span className={passion_one.className}>CONTACT</span>
      </h1>
      <div className="grid md:grid-cols-2 gap-8 bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg lg:w-[750px]">
        <ContactForm />
        <SocialLinks />
      </div>
    </div>
  );
};
