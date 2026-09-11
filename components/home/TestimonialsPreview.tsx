import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import TestimonialCard from "@/components/shared/TestimonialCard";
import CTAButton from "@/components/shared/CTAButton";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsPreview() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Testimonials"
          heading="What Our Customers Say"
        />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <CTAButton href="/testimonials" variant="secondary">
            Read More Testimonials
          </CTAButton>
        </div>
      </Container>
    </section>
  );
}
