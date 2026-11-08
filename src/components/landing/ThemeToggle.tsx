import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { toggleTheme } from "@/lib/theme";

/** Light/dark switch. Icons swap purely via the `dark` class, so SSR and hydration always match. */
export function ThemeToggle({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        toggleTheme({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
      }}
      aria-label="Ganti mode terang/gelap"
      title="Ganti mode terang/gelap"
      className={cn(
        "relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full border border-border bg-background/70 text-foreground backdrop-blur transition-all duration-300 hover:border-sky-strong hover:bg-sky-soft",
        className,
      )}
    >
      <Sun className="h-[1.1rem] w-[1.1rem] rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.1rem] w-[1.1rem] rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" />
    </button>
  );
}
