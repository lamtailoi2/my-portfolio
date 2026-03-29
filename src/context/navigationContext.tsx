"use client";
import { createContext, useRef } from "react";

interface NavigationContextType {
  skillsRef: React.RefObject<HTMLDivElement | null>;
  homeRef: React.RefObject<HTMLDivElement | null>;
  experienceRef: React.RefObject<HTMLDivElement | null>;
}

const NavigationContext = createContext<NavigationContextType>({
  skillsRef: { current: null },
  homeRef: { current: null },
  experienceRef: { current: null },
});

interface NavigationProviderProps {
  children: React.ReactNode;
}

const NavigationProvider = ({ children }: NavigationProviderProps) => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const value = { skillsRef, homeRef, experienceRef };
  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationContext, NavigationProvider };
