import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Benefits } from "@/components/landing/Benefits";
import { Organizer } from "@/components/landing/Organizer";
import { EventTypes } from "@/components/landing/EventTypes";
import { Participant } from "@/components/landing/Participant";
import { Pricing } from "@/components/landing/Pricing";
import { Privacy } from "@/components/landing/Privacy";
import { Faq } from "@/components/landing/Faq";
import { FinalCta } from "@/components/landing/FinalCta";
import { Footer } from "@/components/landing/Footer";
import { BackToTop } from "@/components/landing/BackToTop";
import { ChatWidget } from "@/components/landing/ChatWidget";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kapotret — Satu momen. Banyak sudut." },
      {
        name: "description",
        content:
          "Bagikan satu QR dan kumpulkan foto dari setiap tamu acaramu dalam satu album. Tanpa install aplikasi, tanpa akun.",
      },
      { property: "og:title", content: "Kapotret — Satu momen. Banyak sudut." },
      {
        property: "og:description",
        content: "Album foto bersama untuk setiap acara, cukup dengan satu QR.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Benefits />
        <Organizer />
        <EventTypes />
        <Participant />
        <Pricing />
        <Privacy />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <BackToTop />
      <ChatWidget />
    </div>
  );
}
