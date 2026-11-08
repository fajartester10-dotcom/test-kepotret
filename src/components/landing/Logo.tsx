import { cn } from "@/lib/utils";
import { brand } from "./content";

export function Logo({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <a
      href="#top"
      className={cn(
        "group inline-flex items-center gap-2 text-xl font-bold tracking-tight",
        tone === "dark" ? "text-foreground" : "text-ink-foreground",
        className,
      )}
      aria-label={`${brand} beranda`}
    >
      <span className="relative grid h-8 w-8 place-items-center rounded-xl bg-contrast text-contrast-foreground transition-transform duration-300 group-hover:rotate-6">
        <span className="h-3 w-3 rounded-full border-2 border-contrast-foreground" />
        <span className="absolute right-1.5 top-1.5 h-1 w-1 rounded-full bg-contrast-foreground" />
      </span>
      <span>
        {brand}
        <span className="text-lime-deep">.</span>
      </span>
    </a>
  );
}
