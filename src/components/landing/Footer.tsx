import { Logo } from "./Logo";
import { brand, footerColumns } from "./content";

export function Footer() {
  return (
    <footer className="border-t border-border bg-sky-fade">
      <div className="container-page py-20 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[1.3fr_2fr] lg:gap-24">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-5 text-sm font-semibold text-foreground">Satu momen. Banyak sudut.</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Album foto bersama untuk setiap acara, cukup dengan satu QR.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <p className="text-sm font-semibold text-foreground">{col.title}</p>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 flex flex-col gap-3 border-t border-border pt-8 pr-16 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:pr-20">
          <p>© {new Date().getFullYear()} {brand}. All rights reserved.</p>
          <p>Dibuat untuk setiap momen bersama.</p>
        </div>
      </div>
    </footer>
  );
}
