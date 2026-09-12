import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import ServiceCard from "@/components/shared/ServiceCard";
import { ServiceIcon } from "@/components/shared/serviceIcons";
import { services } from "@/data/services";

const LIST_ONLY_SLUGS = ["key-programming", "key-cutting", "emergency-lockouts"];

export default function ServicesPreview() {
  const cardServices = services.filter((s) => !LIST_ONLY_SLUGS.includes(s.slug));
  const listServices = services.filter((s) => LIST_ONLY_SLUGS.includes(s.slug));

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          heading="Our Auto Locksmith Services"
          description="Complete automotive locksmith solutions delivered directly to your location."
        />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <ul className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-[var(--border-cyan)] pt-10">
          {listServices.map((service) => (
            <li key={service.slug} className="flex items-start gap-3">
              <ServiceIcon icon={service.icon} className="h-5 w-5 text-cyan shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-white">{service.title}</p>
                <p className="mt-1 text-sm text-muted leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
