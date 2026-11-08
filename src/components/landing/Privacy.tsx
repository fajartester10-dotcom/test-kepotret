import { ArrowRight, Clock, EyeOff, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Reveal, SectionHeading } from "./Reveal";
import { privacyCards } from "./content";

const icons = [ShieldCheck, EyeOff, Clock];

export function Privacy() {
  return (
    <section id="keamanan" className="bg-sky-fade-reverse py-32 sm:py-40 lg:py-52">
      <div className="container-page grid gap-16 lg:grid-cols-[0.8fr_1.5fr] lg:gap-16 xl:gap-24 lg:items-center">
        <Reveal>
          <SectionHeading
            eyebrow="Privasi & Keamanan"
            title="Momen bersama, tetap dalam kendalimu."
            description="Kapotret dirancang agar penyelenggara tetap memegang kendali penuh atas album. Momen tetap aman dan hanya dilihat oleh orang yang kamu izinkan."
          />
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost-ink" size="pill" className="mt-6 -ml-4">
                Pelajari Keamanan <ArrowRight />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg gap-5 rounded-3xl border-border p-10 sm:rounded-3xl">
              <span className="eyebrow text-lime-deep">Privasi & Keamanan</span>
              <DialogTitle className="text-2xl font-semibold tracking-tight text-foreground">
                Momen bersama, tetap dalam kendalimu.
              </DialogTitle>
              <DialogDescription className="text-sm leading-relaxed text-muted-foreground">
                Berikut cara Kapotret menjaga album acaramu.
              </DialogDescription>
              <ul className="space-y-4">
                {privacyCards.map((c, i) => {
                  const Icon = icons[i] ?? icons[0]!;
                  return (
                    <li key={c.title} className="flex gap-4 rounded-2xl bg-muted p-4">
                      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-sky-deep" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">{c.title}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{c.body}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </DialogContent>
          </Dialog>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-3">
          {privacyCards.map((c, i) => {
            const Icon = icons[i] ?? icons[0]!;
            return (
              <Reveal key={c.title} delay={i * 110}>
                <div className="group h-full rounded-3xl border border-border bg-background p-8 shadow-soft hover-lift hover:border-sky-strong">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-sky text-sky-deep transition-colors duration-300 group-hover:bg-lime group-hover:text-ink">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-10 text-base font-semibold leading-snug text-foreground">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
