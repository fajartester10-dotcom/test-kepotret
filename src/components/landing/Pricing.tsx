import { useState } from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { ArrowRight, Check, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "./Reveal";
import { formatRupiah, pricingTiers } from "./content";

export function Pricing() {
  const [idx, setIdx] = useState(0);
  const tier = pricingTiers[idx] ?? pricingTiers[0]!;
  const free = tier.price === 0;

  return (
    <section id="harga" className="relative overflow-hidden bg-sky-fade py-32 sm:py-40 lg:py-52">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-sky/80 blur-3xl" />
      <div className="container-page relative grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 lg:items-center">
        <Reveal>
          <SectionHeading
            eyebrow="Harga"
            title="Pilih kapasitas sesuai kebutuhan acaramu."
            description="Mulai gratis dengan 10 peserta. Geser untuk memilih jumlah peserta yang paling sesuai, dan bayar hanya untuk kapasitas yang kamu perlukan."
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-[2rem] border border-border bg-background p-8 shadow-lift sm:p-12 lg:p-14">
            <div className="flex items-center justify-between gap-4">
              <p className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Users className="h-4 w-4 text-sky-deep" />
                Berapa banyak peserta yang ikut memotret?
              </p>
              <span className="shrink-0 rounded-full bg-lime px-3 py-1 text-sm font-bold text-ink">
                {tier.capacity}
              </span>
            </div>

            <SliderPrimitive.Root
              value={[idx]}
              min={0}
              max={pricingTiers.length - 1}
              step={1}
              onValueChange={([v]) => setIdx(v ?? 0)}
              className="relative mt-10 flex h-6 w-full touch-none select-none items-center"
              aria-label="Jumlah peserta"
            >
              <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-sky">
                <SliderPrimitive.Range className="absolute h-full rounded-full bg-lime" />
              </SliderPrimitive.Track>
              <SliderPrimitive.Thumb className="block h-6 w-6 cursor-grab rounded-full border-4 border-ink bg-lime shadow-glow transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-strong active:cursor-grabbing" />
            </SliderPrimitive.Root>

            <div className="mt-3 flex justify-between text-[0.7rem] font-medium text-muted-foreground">
              {pricingTiers.map((t, i) => (
                <button
                  key={t.capacity}
                  type="button"
                  onClick={() => setIdx(i)}
                  className={`rounded px-1 transition-colors hover:text-foreground ${i === idx ? "text-foreground" : ""}`}
                >
                  {t.capacity >= 1000 ? `${t.capacity / 1000}rb` : t.capacity}
                </button>
              ))}
            </div>

            <div className="mt-12 grid gap-8 border-t border-border pt-10 sm:grid-cols-[1fr_auto] sm:items-end">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  {tier.capacity} peserta
                </p>
                <p key={tier.price} className="mt-1 animate-fade-up text-4xl font-semibold tracking-tight text-foreground">
                  {free ? "Gratis" : formatRupiah(tier.price)}
                </p>
                <ul className="mt-4 space-y-2">
                  {["Unduh semua foto sekaligus", "Atur akses album"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="grid h-5 w-5 place-items-center rounded-full bg-lime-tint text-lime-deep">
                        <Check className="h-3 w-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <Button asChild variant={free ? "brand" : "ink"} size="pill-lg">
                <a href="#">
                  {free ? "Buat Album Gratis" : "Buat Album"} <ArrowRight />
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
