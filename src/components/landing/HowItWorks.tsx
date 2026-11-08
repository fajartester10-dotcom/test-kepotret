import { useState } from "react";
import { ArrowRight, ArrowUpRight, FolderPlus, Images, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { HowItWorksDialog } from "./HowItWorksDialog";
import { Reveal, SectionHeading } from "./Reveal";
import { hostSteps } from "./content";

const icons = [FolderPlus, QrCode, Images];

export function HowItWorks() {
  const [active, setActive] = useState<number | null>(null);
  const step = active !== null ? hostSteps[active] : null;

  return (
    <section id="cara-kerja" className="relative overflow-hidden bg-ink-glow py-24 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            tone="dark"
            eyebrow="Cara Kerja"
            title={
              <>
                Dari QR ke album dalam <span className="text-lime">3 langkah.</span>
              </>
            }
            description="Kamu cukup buat albumnya. Peserta tinggal scan & motret, dan momen dari berbagai sudut langsung terkumpul."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {hostSteps.map((s, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={s.no} delay={i * 120}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className="group relative flex h-full w-full flex-col rounded-3xl border border-ink-foreground/10 bg-ink-soft/60 p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:border-lime/50 hover:bg-ink-soft"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-lime text-sm font-bold text-ink">
                      {s.no}
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-ink-muted transition-all duration-300 group-hover:rotate-45 group-hover:text-lime" />
                  </div>
                  <Icon className="mt-10 h-6 w-6 text-lime" strokeWidth={1.6} />
                  <h3 className="mt-4 text-xl font-semibold text-ink-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.body}</p>
                  <span className="mt-6 text-xs font-semibold text-lime opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Lihat detail →
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200} className="mt-12">
          <HowItWorksDialog>
            <Button variant="brand" size="pill">
              Lihat cara kerja lengkap <ArrowRight />
            </Button>
          </HowItWorksDialog>
        </Reveal>
      </div>

      <Dialog open={active !== null} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-md rounded-3xl border-border p-8 sm:rounded-3xl">
          {step && (
            <>
              <span className="grid h-12 w-12 place-items-center rounded-full bg-lime text-sm font-bold text-ink">
                {step.no}
              </span>
              <DialogTitle className="text-2xl font-semibold tracking-tight text-ink">{step.title}</DialogTitle>
              <DialogDescription className="text-sm leading-relaxed text-muted-foreground">
                {step.detail}
              </DialogDescription>
              <div className="flex gap-2 pt-2">
                {hostSteps.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Langkah ${i + 1}`}
                    className={`h-1.5 flex-1 rounded-full transition-colors ${i === active ? "bg-ink" : "bg-muted hover:bg-sky-strong"}`}
                  />
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
