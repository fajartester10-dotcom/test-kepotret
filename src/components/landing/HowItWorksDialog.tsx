import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { hostSteps, participantSteps } from "./content";

/** Modal that walks through the full flow for organisers and participants. */
export function HowItWorksDialog({ children }: { children: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto rounded-3xl border-border p-0 sm:rounded-3xl">
        <div className="bg-sky-fade px-6 pb-6 pt-8 sm:px-8">
          <span className="eyebrow text-lime-deep">Cara Kerja</span>
          <DialogTitle className="mt-3 text-2xl font-semibold tracking-tight text-ink">
            Dari QR ke album dalam 3 langkah.
          </DialogTitle>
          <DialogDescription className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Kamu cukup buat albumnya. Peserta tinggal scan & motret, dan semua momen dari berbagai
            sudut langsung terkumpul.
          </DialogDescription>
        </div>

        <div className="space-y-8 px-6 pb-8 sm:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Untuk penyelenggara
            </p>
            <ol className="mt-4 space-y-3">
              {hostSteps.map((s) => (
                <li
                  key={s.no}
                  className="flex gap-4 rounded-2xl border border-border p-4 transition-colors hover:border-sky-strong hover:bg-sky-soft"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-lime text-xs font-bold text-ink">
                    {s.no}
                  </span>
                  <div className="min-w-0">
                    <p className="font-semibold text-ink">{s.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Untuk peserta
            </p>
            <ol className="mt-4 grid gap-3 sm:grid-cols-2">
              {participantSteps.map((s) => (
                <li key={s.no} className="rounded-2xl bg-muted p-4">
                  <span className="text-xs font-bold text-lime-deep">{s.no}</span>
                  <p className="mt-1 font-semibold text-ink">{s.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>

          <Button asChild variant="brand" size="pill" className="w-full">
            <a href="#harga">
              Buat Album Gratis <ArrowRight />
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
