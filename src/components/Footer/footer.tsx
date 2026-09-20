import { profile } from "@/content/profile";

export const Footer = () => {
  return (
    <footer className="border-t border-border/80 bg-background/70">
      <div className="bio-container flex flex-col gap-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}. Digital Bio Lab portfolio.</p>
        <div className="flex flex-wrap gap-4 font-mono text-xs uppercase tracking-[0.2em]">
          {profile.socialLinks.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              {link.label}
            </a>
          ))}
          <a href={`mailto:${profile.email}`} className="hover:text-primary">Email</a>
        </div>
      </div>
    </footer>
  );
};
