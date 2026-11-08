import { ArrowRight, Camera, Images, PlayCircle, QrCode, Smartphone, UserX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HowItWorksDialog } from "./HowItWorksDialog";
import { images } from "./content";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero pb-28 pt-40 sm:pb-36 sm:pt-48 lg:pb-48 lg:pt-60">
      <div className="pointer-events-none absolute inset-0 grid-dots opacity-40 [mask-image:radial-gradient(60%_60%_at_70%_30%,black,transparent)]" />

      <div className="container-page relative grid items-center gap-20 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
        {/* Copy */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground shadow-soft backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime-deep" />
            Dokumentasi acara berbasis QR untuk semua tamu
          </span>

          <h1 className="mt-8 text-[2.75rem] font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-[4.25rem]">
            Satu momen.
            <br />
            Banyak sudut<span className="text-lime-deep">.</span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Kumpulkan semua momen dari sudut pandang setiap tamu dalam satu album. Bagikan satu QR dan
            biarkan orang-orang di acaramu memotret langsung dari HP.
          </p>

          <ul className="mt-10 grid max-w-xl gap-4 sm:grid-cols-2">
            {[
              { icon: Images, text: "Foto langsung masuk ke satu album" },
              { icon: UserX, text: "Tanpa install aplikasi & tanpa akun" },
            ].map(({ icon: Icon, text }) => (
              <li
                key={text}
                className="flex items-center gap-3 rounded-2xl border border-border bg-background/70 p-3 text-sm font-medium text-foreground shadow-soft backdrop-blur"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-sky text-sky-deep">
                  <Icon className="h-4 w-4" />
                </span>
                {text}
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button asChild variant="brand" size="pill-lg">
              <a href="#harga">
                Buat Album Gratis <ArrowRight />
              </a>
            </Button>
            <HowItWorksDialog>
              <Button variant="ghost-ink" size="pill-lg">
                <PlayCircle className="!size-5" /> Lihat Cara Kerjanya
              </Button>
            </HowItWorksDialog>
          </div>
        </div>

        {/* Visual collage */}
        <div className="relative mx-auto h-[440px] w-full max-w-[540px] sm:h-[520px]">
          <div className="absolute inset-6 rounded-[2.5rem] bg-sky/70 blur-2xl" />

          <figure className="absolute left-0 top-8 w-[44%] overflow-hidden rounded-3xl shadow-card animate-float-slow">
            <img src={images.wedding} alt="Pasangan pengantin difoto oleh para tamu" width={1024} height={1280} className="aspect-[4/5] h-full w-full object-cover" />
          </figure>
          <figure className="absolute bottom-6 left-[6%] w-[36%] overflow-hidden rounded-3xl shadow-card">
            <img src={images.sport} alt="Peserta fun bike" width={1024} height={1024} loading="lazy" className="aspect-square h-full w-full object-cover" />
          </figure>
          <figure className="absolute right-0 top-0 w-[34%] overflow-hidden rounded-3xl shadow-card">
            <img src={images.community} alt="Perayaan komunitas" width={1280} height={1024} loading="lazy" className="aspect-[3/4] h-full w-full object-cover" />
          </figure>
          <figure className="absolute bottom-0 right-[2%] w-[32%] overflow-hidden rounded-3xl shadow-card animate-float">
            <img src={images.trip} alt="Swafoto rombongan perjalanan" width={1024} height={1024} loading="lazy" className="aspect-square h-full w-full object-cover" />
          </figure>

          {/* Phone mockup */}
          <div className="absolute left-1/2 top-1/2 w-[46%] max-w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-[2.2rem] border-[6px] border-ink bg-background p-3 shadow-lift">
            <div className="mx-auto h-1.5 w-12 rounded-full bg-ink/80" />
            <div className="mt-4 flex items-center justify-between text-muted-foreground">
              <Smartphone className="h-3.5 w-3.5" />
              <span className="h-2 w-2 rounded-full bg-lime-deep" />
            </div>
            <div className="mt-3 rounded-2xl bg-sky-soft p-3 text-center">
              <p className="text-[0.7rem] font-semibold leading-snug text-foreground">Momen dari berbagai sudut</p>
              <div className="mx-auto mt-3 grid h-20 w-20 place-items-center rounded-xl border border-dashed border-sky-strong bg-background">
                <QrCode className="h-12 w-12 text-foreground" strokeWidth={1.5} />
              </div>
              <p className="mt-2 text-[0.6rem] text-muted-foreground">Scan untuk ikut memotret</p>
            </div>
            <div className="mt-3 flex h-9 items-center justify-center gap-1.5 rounded-full bg-lime text-[0.7rem] font-semibold text-ink">
              <Camera className="h-3.5 w-3.5" /> Scan & Potret
            </div>
          </div>

          <div className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold text-foreground shadow-card">
            <span className="text-lime-deep">01</span> Bagikan QR
          </div>
        </div>
      </div>
    </section>
  );
}
