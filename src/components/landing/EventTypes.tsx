import { useState } from "react";
import { ArrowRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Reveal, SectionHeading } from "./Reveal";
import { eventTypes } from "./content";

export function EventTypes() {
  const [active, setActive] = useState<number | null>(null);
  const ev = active !== null ? eventTypes[active] : null;

  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="container-page">
        <Reveal className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <SectionHeading eyebrow="Untuk Berbagai Acara" title="Setiap acara punya momen dari sudut yang berbeda." />
          <p className="max-w-lg text-base leading-relaxed text-muted-foreground lg:justify-self-end">
            Dari acara pribadi sampai acara besar, Kapotret membantu mengumpulkan momen dari setiap
            orang yang hadir dalam satu album.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {eventTypes.map((e, i) => (
            <Reveal key={e.title} delay={(i % 3) * 100}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group block w-full text-left"
                aria-label={`Lihat detail ${e.title}`}
              >
                <div className="relative overflow-hidden rounded-3xl bg-muted shadow-soft transition-shadow duration-300 group-hover:shadow-lift">
                  <img
                    src={e.image}
                    alt={e.title}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-background/90 text-ink shadow-soft backdrop-blur transition-all duration-300 group-hover:rotate-90 group-hover:bg-lime">
                    <Plus className="h-4 w-4" />
                  </span>
                </div>
                <div className="px-1 pt-5">
                  <h3 className="text-lg font-semibold text-ink transition-colors group-hover:text-lime-deep">{e.title}</h3>
                  <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={active !== null} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-lg overflow-hidden rounded-3xl border-border p-0 sm:rounded-3xl">
          {ev && (
            <>
              <img src={ev.image} alt={ev.title} width={1024} height={1024} className="aspect-[16/10] w-full object-cover" />
              <div className="space-y-3 px-7 pb-7 pt-2">
                <span className="eyebrow text-lime-deep">Untuk Berbagai Acara</span>
                <DialogTitle className="text-2xl font-semibold tracking-tight text-ink">{ev.title}</DialogTitle>
                <DialogDescription className="text-sm leading-relaxed text-muted-foreground">{ev.body}</DialogDescription>
                <Button asChild variant="brand" size="pill" className="mt-2 w-full">
                  <a href="#harga" onClick={() => setActive(null)}>
                    Buat Album Gratis <ArrowRight />
                  </a>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
