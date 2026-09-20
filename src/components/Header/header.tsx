import Link from "next/link";
import { profile } from "@/content/profile";

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/88 backdrop-blur-xl">
      <nav className="bio-container flex h-16 items-center justify-between gap-4" aria-label="Main navigation">
        <Link href="/" className="font-heading text-sm font-bold uppercase tracking-[0.28em] text-foreground">
          {profile.name.split(" ")[0]} <span className="text-primary">{profile.name.split(" ").slice(1).join(" ")}</span>
        </Link>
        <div className="hidden items-center gap-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground sm:flex">
          <Link className="transition-colors hover:text-primary" href="/#selected-work">Work</Link>
          <Link className="transition-colors hover:text-primary" href="/#experience">Experience</Link>
          <Link className="transition-colors hover:text-primary" href="/#capabilities">Capabilities</Link>
          <Link className="transition-colors hover:text-primary" href="/projects">Archive</Link>
        </div>
        <a className="min-h-11 border border-primary/70 px-3 py-2 font-mono text-xs uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground" href={`mailto:${profile.email}`}>
          Contact
        </a>
      </nav>
    </header>
  );
};
