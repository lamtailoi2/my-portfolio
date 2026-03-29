"use client";
import { ContactForm } from "./contactForm";
import { SocialLinks } from "./socialLinks";
import { useContext } from "react";
import { NavigationContext } from "@/context/navigationContext";

export const Contact = () => {
  const { contactRef } = useContext(NavigationContext);
  return (
    <div
      className="my-[100px] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      ref={contactRef}
    >
      <h1 className="text-dracula-fg text-center text-5xl font-bold mb-10 uppercase tracking-wider">
        Contact
      </h1>
      <div className="grid md:grid-cols-2 gap-8 bg-gradient-to-b from-dracula-current to-dracula-bg p-8 rounded-xl border border-dracula-current lg:w-[750px]">
        <ContactForm />
        <SocialLinks />
      </div>
    </div>
  );
};
