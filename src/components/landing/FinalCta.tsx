import { ArrowRight, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { images } from "./content";

export function FinalCta() {
  return (
    <section className="bg-background pb-32 lg:pb-48">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-ink-glow px-8 py-20 sm:px-14 lg:px-20 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-[auto_1fr_auto] lg:gap-16">
            <div className="relative mx-auto h-44 w-64 shrink-0">
              <div className="absolute left-0 top-4 h-36 w-24 -rotate-6 rounded-2xl border-2 border-ink-foreground/70 bg-ink-soft" />
              <img src={images.trip} alt="" width={1024} height={1024} loading="lazy" className="absolute left-1/2 top-0 h-40 w-28 -translate-x-1/2 rounded-2xl border-2 border-ink-foreground/80 object-cover shadow-lift" />
              <img src={images.sport} alt="" width={1024} height={1024} loading="lazy" className="absolute right-0 top-5 h-32 w-24 rotate-6 rounded-2xl border-2 border-ink-foreground/70 object-cover" />
              <span className="absolute -top-2 right-6 grid h-9 w-9 place-items-center rounded-full bg-lime text-ink shadow-glow">
                <Camera className="h-4 w-4" />
              </span>
            </div>

            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-ink-foreground sm:text-4xl">
                Acara berikutnya, lihat dari lebih banyak sudut.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-muted lg:mx-0">
                Buat album, bagikan QR, dan kumpulkan momen dari berbagai sudut dalam satu tempat.
              </p>
            </div>

            <div className="flex justify-center">
              <Button asChild variant="brand" size="pill-lg">
                <a href="#harga">
                  Buat Album Gratis <ArrowRight />
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
