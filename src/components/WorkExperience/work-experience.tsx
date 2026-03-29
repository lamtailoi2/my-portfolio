"use client";
import { useContext } from "react";
import { NavigationContext } from "@/context/navigationContext";
import { WorkExperience as WorkExperienceType } from "@/interfaces";
import { Briefcase } from "lucide-react";

export const WorkExperience = ({ experiences }: { experiences: WorkExperienceType[] }) => {
  const { experienceRef } = useContext(NavigationContext);
  
  return (
    <section
      id="experience"
      className="py-20 lg:py-32 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
      ref={experienceRef}
    >
      <h1 className="text-dracula-fg text-center text-4xl sm:text-5xl font-bold mb-16 uppercase tracking-wider">
        Experience
      </h1>
      
      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <div 
            key={index}
            className="group relative rounded-lg border border-dracula-current bg-dracula-current/30 p-8 hover:border-dracula-pink/50 transition-all duration-500"
          >
            {/* Terminal Top Bar */}
            <div className="absolute top-0 left-0 w-full h-8 bg-dracula-current/50 rounded-t-lg flex items-center px-4 gap-2 border-b border-dracula-current/50">
              <div className="w-3 h-3 rounded-full bg-dracula-red"></div>
              <div className="w-3 h-3 rounded-full bg-dracula-yellow"></div>
              <div className="w-3 h-3 rounded-full bg-dracula-green"></div>
              <span className="ml-2 text-xs text-dracula-comment font-mono flex items-center gap-2">
                <Briefcase className="w-3 h-3" /> ~/experience/{exp.company.toLowerCase().replace(/\s+/g, '-')}
              </span>
            </div>

            <div className="mt-6 flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-dracula-pink mb-1">{exp.role}</h3>
                <h4 className="text-xl text-dracula-fg font-medium">{exp.company}</h4>
              </div>
              <div className="mt-2 md:mt-0 text-dracula-cyan font-mono bg-dracula-current/50 px-3 py-1 rounded-full text-sm self-start">
                {exp.startDate} &mdash; {exp.endDate}
              </div>
            </div>
            
            <ul className="list-disc list-inside space-y-2 text-dracula-fg/80 mb-6 marker:text-dracula-purple">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            {exp.technologies && (
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 text-xs font-mono text-dracula-comment border border-dracula-comment/50 rounded-md hover:text-dracula-fg hover:border-dracula-purple transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
