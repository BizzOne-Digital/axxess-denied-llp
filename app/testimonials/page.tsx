import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import PageHero from "@/components/shared/PageHero";
import TestimonialCard from "@/components/shared/TestimonialCard";
import CTAButton from "@/components/shared/CTAButton";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read about customer experiences with Axxess Denied LLP's mobile automotive locksmith services.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Trusted When Drivers Need Help Most"
        description="Customer experiences with our mobile automotive locksmith service."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <p className="text-xs text-muted max-w-2xl mx-auto text-center mb-10">
            The testimonials below are sample placeholders and have not been
            independently verified. They will be replaced with verified customer
            reviews.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24 bg-[var(--bg-1)] border-t border-[var(--border-cyan)]">
        <Container className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Had a Great Experience?
          </h2>
          <p className="mt-3 text-muted max-w-xl mx-auto">
            We&rsquo;d love to hear from you. Reach out and share your feedback.
          </p>
          <div className="mt-7">
            <CTAButton href="/contact">Contact Us</CTAButton>
          </div>
        </Container>
      </section>
    </>
  );
}
