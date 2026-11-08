import { Hand, MousePointerClick, ShieldCheck, Users } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { benefits, images } from "./content";

const icons = [Hand, MousePointerClick, ShieldCheck, Users];

export function Benefits() {
  return (
    <section className="bg-sky-fade py-32 sm:py-40 lg:py-52">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Kenapa Kapotret"
            title="Lebih banyak sudut. Lebih sedikit repot."
            description="Dokumentasi acara jadi lebih lengkap karena setiap orang bisa ikut menangkap momennya. Kapotret membantu kamu mengumpulkan semuanya tanpa ribet."
            className="max-w-3xl"
          />
        </Reveal>

        <div className="mt-20 grid gap-14 lg:mt-28 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
          <Reveal className="group relative min-h-[440px] lg:min-h-[520px] overflow-hidden rounded-[2rem] shadow-card">
            <div className="grid h-full grid-cols-[1.4fr_1fr] gap-1.5">
              <img src={images.community} alt="Warga merayakan bersama" width={1280} height={1024} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="grid grid-rows-2 gap-1.5">
                <img src={images.corporate} alt="Acara kantor" width={1024} height={1024} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <img src={images.sport} alt="Fun bike" width={1024} height={1024} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </div>
            <div className="absolute inset-0 bg-photo-fade" />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
              <span className="eyebrow text-lime">
                <span className="h-1.5 w-1.5 rounded-full bg-lime" /> Banyak sudut
              </span>
              <h3 className="mt-3 max-w-md text-2xl font-semibold leading-snug text-ink-foreground sm:text-3xl">
                Capture momen dari lebih banyak sudut
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-foreground/80">
                Setiap orang melihat acara dengan caranya sendiri. Kumpulkan semuanya agar tidak ada
                cerita yang terlewat.
              </p>
            </div>
          </Reveal>

          <ul className="grid content-center gap-5">
            {benefits.map((b, i) => {
              const Icon = icons[i] ?? icons[0]!;
              return (
                <Reveal as="li" key={b.title} delay={i * 90}>
                  <div className="group flex gap-6 rounded-3xl border border-transparent p-6 lg:p-7 transition-all duration-300 hover:border-border hover:bg-background hover:shadow-card">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-background text-foreground shadow-soft transition-colors duration-300 group-hover:bg-lime group-hover:text-ink">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-base font-semibold text-foreground">{b.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
