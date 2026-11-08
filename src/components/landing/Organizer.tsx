import { Download, EyeOff, Lock, MessageCircle } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { organizerFeatures } from "./content";

const icons = [Download, EyeOff, Lock, MessageCircle];

export function Organizer() {
  return (
    <section className="bg-sky-fade-reverse py-8 sm:py-12">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-[2.5rem] border border-border bg-lime-sky p-8 shadow-card sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-lime/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-sky-strong/60 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <SectionHeading
              eyebrow="Untuk Penyelenggara"
              title="Ajak lebih banyak orang ikut menangkap momen."
              description="Untuk penyelenggara, Kapotret jadi cara mudah mengumpulkan dokumentasi dari banyak orang sekaligus, dengan kendali penuh atas hasilnya."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {organizerFeatures.map((f, i) => {
                const Icon = icons[i];
                return (
                  <div
                    key={f.title}
                    className="group rounded-3xl border border-background/80 bg-background/70 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-background hover:shadow-card"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink text-lime transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3 className="mt-5 text-[0.95rem] font-semibold leading-snug text-ink">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
