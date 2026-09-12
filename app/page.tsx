import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import AboutPreview from "@/components/home/AboutPreview";
import Process from "@/components/home/Process";
import ServicesBanner from "@/components/home/ServicesBanner";
import TestimonialsPreview from "@/components/home/TestimonialsPreview";
import EmergencyCTA from "@/components/home/EmergencyCTA";

export const metadata: Metadata = {
  title: "Axxess Denied LLP | Mobile Automotive Locksmith",
  description:
    "Professional mobile automotive locksmith services including key programming, key replacement, car remote replacement, key cutting, ignition services and emergency lockouts.",
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Locksmith",
  name: "Axxess Denied LLP",
  telephone: "+1-901-303-5875",
  email: "tarvis.smith@axxessdenied.net",
  url: "https://www.axxessdenied.net",
  openingHours: "Mo-Su 06:00-18:00",
  description:
    "Mobile automotive locksmith services including key programming, key replacement, car remote replacement, key cutting and emergency lockouts.",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <ServicesPreview />
      <AboutPreview />
      <Process />
      <ServicesBanner />
      <TestimonialsPreview />
      <EmergencyCTA />
    </>
  );
}
