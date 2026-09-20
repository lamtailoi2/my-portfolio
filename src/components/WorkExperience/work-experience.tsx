import { WorkExperience as WorkExperienceType } from "@/interfaces";

export const WorkExperience = ({ experiences }: { experiences: WorkExperienceType[] }) => {
  return (
    <section
      id="experience"
      className="bio-container py-16 lg:py-24"
    >
      <p className="bio-kicker">Chronology</p>
      <h2 className="mt-3 text-3xl font-bold uppercase tracking-[0.12em] sm:text-4xl">Experience</h2>
      
      <div className="mt-10 grid gap-5">
        {experiences.map((exp, index) => (
          <div 
            key={`${exp.company}-${exp.role}-${index}`}
            className="bio-panel p-6 transition-colors hover:border-primary/60"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="font-heading text-2xl font-bold uppercase tracking-[0.08em] text-primary">{exp.role}</h3>
                <h4 className="mt-1 text-lg text-foreground">{exp.company}</h4>
              </div>
              <div className="self-start border border-border bg-secondary/70 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {exp.startDate} - {exp.endDate}
              </div>
            </div>
            
            <ul className="mt-5 space-y-2 text-sm leading-6 text-muted-foreground">
              {exp.description.map((item, i) => (
                <li key={i} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden />{item}</li>
              ))}
            </ul>

            {exp.technologies && (
              <div className="mt-5 flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="border border-border bg-secondary/60 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground"
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
