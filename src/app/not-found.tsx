import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="bio-container flex min-h-[70vh] items-center justify-center py-16">
      <div className="bio-panel max-w-2xl p-8 text-center sm:p-10">
        <p className="bio-kicker">404 specimen</p>
        <h1 className="mt-4 text-4xl font-bold uppercase tracking-[0.12em] sm:text-5xl">
          Signal not found
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-muted-foreground">
          This route is not available yet, or the project case study you opened does not exist.
        </p>
        <Button asChild className="mt-7">
          <Link href="/">Return home</Link>
        </Button>
      </div>
    </section>
  );
}
