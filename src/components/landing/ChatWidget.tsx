import { lazy, Suspense, useEffect, useState } from "react";
import { Bot, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// The chat window (AI toolkit + markdown renderer) loads only when first opened.
const ChatPanel = lazy(() => import("./ChatPanel"));

/** Floating AI assistant: fixed launcher bottom-right plus a slide-up chat window. */
export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (open) setMounted(true);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div
        role="dialog"
        aria-label="Asisten Kapotret"
        aria-hidden={!open}
        className={cn(
          "fixed bottom-24 right-4 z-50 flex h-[min(38rem,calc(100dvh-8rem))] w-[calc(100vw-2rem)] origin-bottom-right flex-col overflow-hidden rounded-[1.75rem] border border-border bg-background shadow-lift transition-all duration-300 ease-out sm:right-6 sm:w-[25rem]",
          open ? "pointer-events-auto translate-y-0 scale-100 opacity-100" : "pointer-events-none translate-y-4 scale-95 opacity-0",
        )}
      >
        {mounted && (
          <Suspense
            fallback={<div className="grid flex-1 place-items-center text-sm text-muted-foreground">Memuat asisten…</div>}
          >
            <ChatPanel open={open} onClose={() => setOpen(false)} />
          </Suspense>
        )}
      </div>

      <Button
        variant="ghost"
        size="icon"
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Tutup asisten" : "Tanya asisten Kapotret"}
        aria-expanded={open}
        className="group fixed bottom-6 right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-lime p-0 text-ink shadow-lift ring-[6px] ring-lime/20 transition-all duration-300 hover:-translate-y-1 hover:bg-lime hover:text-ink hover:shadow-glow sm:right-6"
      >
        <span
          className={cn(
            "pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-medium text-foreground shadow-card transition-all duration-300 md:block",
            open ? "translate-x-2 opacity-0" : "translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100",
          )}
        >
          Tanya asisten
        </span>
        <Bot
          aria-hidden="true"
          strokeWidth={3}
          className={cn(
            "size-6 transition-all duration-300 group-hover:rotate-[-8deg] group-hover:scale-110",
            open ? "scale-50 opacity-0" : "scale-100 opacity-100",
          )}
        />
        <span aria-hidden="true" className="pointer-events-none absolute -right-0.5 top-0 size-3.5 rounded-full border-2 border-ink-foreground bg-ink" />
        <X
          className={cn(
            "absolute h-5 w-5 transition-all duration-300",
            open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0",
          )}
        />
      </Button>
    </>
  );
}
