import { WorkExperience as WorkExperienceComponent } from "@/components/WorkExperience/work-experience";
import { AchievementTree } from "@/components/Achievements/achievement-tree";
import { Footer } from "@/components/Footer/footer";
import { ProjectExplorer } from "@/components/Project/project-explorer";
import { ProjectEvidencePanel } from "@/components/Project/project-evidence-panel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { profile } from "@/content/profile";
import { profileExperiences } from "@/content/experience";
import { achievements } from "@/content/achievements";
import { getProjects, isHomeProof } from "@/lib/projects";
import { capabilityLabels } from "@/lib/project-taxonomy";
import Image from "next/image";
import Link from "next/link";
import me from "../../public/me14.webp";

export default async function Home() {
  const projects = getProjects();
  const experiences = [...profileExperiences].sort(
    (a, b) => (a.order ?? Number.POSITIVE_INFINITY) - (b.order ?? Number.POSITIVE_INFINITY)
  );
  const proofProjects = projects.filter(isHomeProof);
  const initialProject = proofProjects[0] ?? projects[0];

  return (
    <>
      <section className="bio-container grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
        <div>
          <div className="inline-flex border border-accent/50 bg-accent/10 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-accent">
            {profile.availability}
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl font-bold uppercase tracking-[0.08em] sm:text-6xl lg:text-7xl">
            {profile.name}<span className="block text-primary">{profile.targetRole}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{profile.valueProposition}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild><Link href="#selected-work">Explore work</Link></Button>
            <Button asChild variant="outline"><a href={`mailto:${profile.email}`}>Contact</a></Button>
          </div>
          <dl className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
            {[profile.currentRole, profile.location, profile.timezone].filter(Boolean).map((fact) => (
              <div key={fact} className="border border-border bg-card/70 p-3 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">{fact}</div>
            ))}
          </dl>
        </div>
        <div className="bio-panel relative min-h-[420px] overflow-hidden p-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(168,116,255,0.22),transparent_34%)]" />
          <Image src={me} alt="Portrait of Loi Lam" width={520} priority className="relative mx-auto h-auto max-h-[480px] w-auto object-contain grayscale-[0.2]" />
          <div className="absolute bottom-5 left-5 right-5 border border-primary/40 bg-background/85 p-4 backdrop-blur">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">Signal profile</p>
            <p className="mt-2 text-sm text-muted-foreground">Frontend systems, backend data flow, and product-minded delivery.</p>
          </div>
        </div>
      </section>

      <section id="selected-work" className="bio-container py-16">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="bio-kicker">Selected work</p>
            <h2 className="mt-3 text-3xl font-bold uppercase tracking-[0.12em] sm:text-4xl">Digital specimens</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              {proofProjects.length > 0 ? "Featured proof packages with role, impact, stack, and live evidence." : "Project snapshot using current legacy records; richer case-study fields can be backfilled later."}
            </p>
          </div>
          <Button asChild variant="secondary"><Link href="/projects">Open archive</Link></Button>
        </div>
        {projects.length > 0 ? <ProjectExplorer projects={projects} initialProjectId={initialProject?.id} /> : <ProjectEvidencePanel />}
      </section>

      <WorkExperienceComponent experiences={experiences} />

      <AchievementTree achievements={achievements} />

      <section id="capabilities" className="bio-container py-16 lg:py-24">
        <p className="bio-kicker">Capabilities</p>
        <h2 className="mt-3 text-3xl font-bold uppercase tracking-[0.12em] sm:text-4xl">Operating range</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <Capability title="Frontend Systems" items={["frontend", "ui-implementation", "performance"]} />
          <Capability title="Backend & Data" items={["backend", "api-design", "data"]} />
          <Capability title="Product Engineering" items={["testing", "performance", "frontend"]} />
        </div>
      </section>
      <Footer />
    </>
  );
}

function Capability({ title, items }: { title: string; items: (keyof typeof capabilityLabels)[] }) {
  return (
    <article className="bio-panel p-6">
      <h3 className="font-heading text-xl font-bold uppercase tracking-[0.1em] text-primary">{title}</h3>
      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <Link key={item} href={`/projects?capability=${item}`}>
            <Badge className="transition-colors hover:border-primary hover:text-primary">{capabilityLabels[item]}</Badge>
          </Link>
        ))}
      </div>
    </article>
  );
}
