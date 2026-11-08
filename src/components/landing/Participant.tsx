import { ArrowRight, Camera, Check, QrCode, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HowItWorksDialog } from "./HowItWorksDialog";
import { Reveal, SectionHeading } from "./Reveal";
import { images, participantSteps } from "./content";

function Screen({ index }: { index: number }) {
  if (index === 0)
    return (
      <div className="grid flex-1 place-items-center">
        <QrCode className="h-14 w-14 text-foreground" strokeWidth={1.5} />
      </div>
    );
  if (index === 1)
    return (
      <div className="flex flex-1 flex-col justify-center gap-2.5 px-1">
        <div className="flex items-center gap-1.5 text-[0.6rem] font-semibold text-foreground">
          <User className="h-3 w-3" /> Nama kamu
        </div>
        <div className="h-7 rounded-lg border border-border bg-background" />
        <div className="h-7 rounded-full bg-lime" />
      </div>
    );
  if (index === 2)
    return (
      <div className="grid flex-1 place-items-center">
        <div className="grid h-16 w-16 place-items-center rounded-2xl bg-ink text-ink-foreground">
          <Camera className="h-6 w-6" />
        </div>
      </div>
    );
  return (
    <div className="flex flex-1 flex-col justify-center gap-2.5">
      <img src={images.trip} alt="" width={1024} height={1024} loading="lazy" className="h-16 w-full rounded-lg object-cover" />
      <div className="grid h-7 place-items-center rounded-full bg-lime text-[0.6rem] font-semibold text-ink">Terkirim ✓</div>
    </div>
  );
}

export function Participant() {
  return (
    <section id="peserta" className="relative overflow-hidden bg-ink-glow py-32 sm:py-40 lg:py-52">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            tone="dark"
            eyebrow="Pengalaman Peserta"
            title="Untuk peserta, sesederhana scan lalu motret."
            description="Peserta tidak perlu install aplikasi atau membuat akun. Cukup scan QR, isi nama, dan mulai memotret langsung dari HP."
            className="max-w-3xl"
          />
        </Reveal>

        <ol className="relative mt-20 grid grid-cols-2 gap-x-6 gap-y-16 lg:mt-28 lg:grid-cols-4 lg:gap-x-10">
          <div className="pointer-events-none absolute left-[12%] right-[12%] top-5 hidden h-px bg-ink-foreground/15 lg:block" />
          {participantSteps.map((s, i) => (
            <Reveal as="li" key={s.no} delay={i * 110} className="group relative flex flex-col items-center text-center">
              <span className="relative z-10 grid h-10 w-10 place-items-center rounded-full bg-lime text-xs font-bold text-ink ring-8 ring-ink">
                {s.no}
              </span>
              <div className="mt-6 flex h-52 w-32 flex-col rounded-[1.6rem] border-4 border-ink-soft bg-muted p-3 shadow-lift transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-[-2deg] sm:w-36">
                <div className="mx-auto h-1 w-8 rounded-full bg-ink/70" />
                <Screen index={i} />
              </div>
              <h3 className="mt-6 text-base font-semibold text-ink-foreground">{s.title}</h3>
              <p className="mt-1.5 max-w-[14rem] text-sm leading-relaxed text-ink-muted">{s.body}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-20 flex flex-col gap-8 lg:mt-28 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {["Tanpa install aplikasi", "Tanpa buat akun"].map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/15 px-4 py-2 text-sm text-ink-foreground"
              >
                <Check className="h-4 w-4 text-lime" /> {t}
              </span>
            ))}
          </div>
          <HowItWorksDialog>
            <Button variant="brand" size="pill">
              Lihat cara kerja lengkap <ArrowRight />
            </Button>
          </HowItWorksDialog>
        </Reveal>
      </div>
    </section>
  );
}
