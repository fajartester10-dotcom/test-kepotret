import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
};

/** Fades content up once it scrolls into view. */
export function Reveal({ children, className, delay = 0, as: Tag = "div" }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-visible={visible}
      className={cn("reveal", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div className={cn("max-w-2xl", className)}>
      <span className={cn("eyebrow", dark ? "text-lime" : "text-lime-deep")}>
        <span className={cn("h-1.5 w-1.5 rounded-full", dark ? "bg-lime" : "bg-lime-deep")} />
        {eyebrow}
      </span>
      <h2
        className={cn(
          "mt-4 text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.6rem]",
          dark ? "text-ink-foreground" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-[1.05rem]",
            dark ? "text-ink-muted" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
