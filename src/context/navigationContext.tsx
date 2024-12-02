"use client";
import { createContext, useRef } from "react";

interface NavigationContextType {
  skillsRef: React.RefObject<HTMLDivElement>;
  homeRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const NavigationContext = createContext<NavigationContextType>({
  skillsRef: { current: null },
  homeRef: { current: null },
  projectsRef: { current: null },
  contactRef: { current: null },
});

interface NavigationProviderProps {
  children: React.ReactNode;
}

const NavigationProvider = ({ children }: NavigationProviderProps) => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const value = { skillsRef, homeRef, projectsRef, contactRef };
  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationContext, NavigationProvider };
