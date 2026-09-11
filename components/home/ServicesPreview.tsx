import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import ServiceCard from "@/components/shared/ServiceCard";
import { services } from "@/data/services";

export default function ServicesPreview() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          heading="Our Auto Locksmith Services"
          description="Complete automotive locksmith solutions delivered directly to your location."
        />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
