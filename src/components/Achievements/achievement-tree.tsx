import type { Achievement } from "@/interfaces";
import { Badge } from "@/components/ui/badge";

export function AchievementTree({ achievements }: { achievements: Achievement[] }) {
  if (achievements.length === 0) return null;

  const sortedAchievements = [...achievements].sort(
    (a, b) => (a.order ?? Number.POSITIVE_INFINITY) - (b.order ?? Number.POSITIVE_INFINITY)
  );

  return (
    <section id="achievements" className="bio-container py-16 lg:py-24">
      <p className="bio-kicker">Achievement tree</p>
      <h2 className="mt-3 text-3xl font-bold uppercase tracking-[0.12em] sm:text-4xl">
        Competitive signals
      </h2>
      <div className="relative mt-10 grid gap-5 before:absolute before:left-5 before:top-6 before:hidden before:h-[calc(100%-3rem)] before:w-px before:bg-primary/35 md:before:block">
        {sortedAchievements.map((achievement, index) => (
          <article
            key={`${achievement.year}-${achievement.title}`}
            className="bio-panel relative overflow-hidden p-6 md:ml-14"
          >
            <div className="absolute -left-[3.25rem] top-6 hidden h-4 w-4 rounded-full border border-primary bg-primary shadow-[0_0_20px_rgba(168,116,255,0.72)] md:block" />
            <div className="absolute inset-y-0 left-0 w-1 bg-primary/70" aria-hidden />
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="border-primary/50 text-primary">{achievement.year}</Badge>
                  <Badge className="border-accent/50 text-accent">Node {String(index + 1).padStart(2, "0")}</Badge>
                </div>
                <h3 className="mt-4 font-heading text-2xl font-bold uppercase tracking-[0.1em] text-foreground">
                  {achievement.title}
                </h3>
                {achievement.description && (
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
                    {achievement.description}
                  </p>
                )}
              </div>
              <div className="border border-primary/40 bg-primary/10 px-4 py-3 font-heading text-lg font-bold uppercase tracking-[0.12em] text-primary">
                {achievement.result}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
