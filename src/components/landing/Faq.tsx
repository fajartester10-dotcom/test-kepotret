import { MessageCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "./Reveal";
import { faqs } from "./content";

export function Faq() {
  return (
    <section id="faq" className="bg-background py-24 sm:py-32">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="FAQ"
            title="Masih ada yang ingin kamu pastikan?"
            description="Ini beberapa hal yang paling sering ditanyakan sebelum membuat album pertama."
          />
          <div className="mt-8 rounded-3xl bg-sky-soft p-6">
            <p className="text-sm font-semibold text-ink">Belum menemukan jawabannya?</p>
            <p className="mt-1 text-sm text-muted-foreground">Tim kami siap membantu lewat WhatsApp.</p>
            <Button asChild variant="ink" size="pill-sm" className="mt-4">
              <a href="#">
                <MessageCircle /> Hubungi kami
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="rounded-2xl border border-border bg-background px-5 transition-all duration-300 hover:border-sky-strong data-[state=open]:border-sky-strong data-[state=open]:bg-sky-soft data-[state=open]:shadow-soft"
              >
                <AccordionTrigger className="py-5 text-left text-[0.95rem] font-medium text-ink hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
