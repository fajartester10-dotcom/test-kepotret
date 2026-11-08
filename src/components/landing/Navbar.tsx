import { useEffect, useState } from "react";
import { ArrowRight, Globe, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { nav } from "./content";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"ID" | "EN">("ID");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled ? "py-3" : "py-6",
      )}
    >
      <div className="container-page">
        <nav
          className={cn(
            "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 rounded-full px-5 py-2.5 transition-all duration-300 lg:grid-cols-[1fr_auto_1fr]",
            scrolled
              ? "border border-border bg-background/80 shadow-card backdrop-blur-xl"
              : "border border-transparent bg-transparent",
          )}
          aria-label="Navigasi utama"
        >
          <div className="min-w-0">
            <Logo />
          </div>

          <ul className="hidden items-center gap-2 lg:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-sky-soft hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-end gap-2 sm:gap-3">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setLang((l) => (l === "ID" ? "EN" : "ID"))}
              className="hidden h-9 items-center gap-1.5 rounded-full px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-sky-soft hover:text-foreground sm:inline-flex"
              aria-label="Ganti bahasa"
            >
              <Globe className="h-4 w-4" />
              {lang}
            </button>
            <a
              href="#"
              className="hidden h-9 items-center rounded-full px-4 text-sm font-medium text-foreground transition-colors hover:bg-sky-soft md:inline-flex"
            >
              Masuk
            </a>
            <Button asChild variant="brand" size="pill-sm" className="hidden sm:inline-flex">
              <a href="#harga">
                Buat Album Gratis <ArrowRight />
              </a>
            </Button>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-sky-soft lg:hidden"
              aria-label="Buka menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          className={cn(
            "absolute inset-0 bg-overlay backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            "absolute inset-x-3 top-3 rounded-3xl border border-border bg-background p-6 shadow-lift transition-all duration-300",
            open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0",
          )}
        >
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="grid h-10 w-10 place-items-center rounded-full bg-muted text-foreground transition-colors hover:bg-sky"
              aria-label="Tutup menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <ul className="mt-6 space-y-1">
            {[...nav, { label: "Masuk", href: "#" }].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-sky-soft"
                >
                  {item.label}
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-2">
            <button
              type="button"
              onClick={() => setLang((l) => (l === "ID" ? "EN" : "ID"))}
              className="inline-flex h-11 items-center gap-1.5 rounded-full border border-border px-4 text-sm font-medium text-foreground"
            >
              <Globe className="h-4 w-4" />
              {lang}
            </button>
            <Button asChild variant="brand" size="pill" className="flex-1">
              <a href="#harga" onClick={() => setOpen(false)}>
                Buat Album Gratis <ArrowRight />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
