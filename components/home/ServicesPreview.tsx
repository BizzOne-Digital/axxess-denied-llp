import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import ServiceCard from "@/components/shared/ServiceCard";
import { ServiceIcon } from "@/components/shared/serviceIcons";
import { ArrowRightIcon } from "@/components/icons";
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

        {/* Desktop / tablet: uniform card grid */}
        <div className="mt-12 hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {cardServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
          {listServices.map((service) => (
            <ServiceCard key={service.slug} service={service} showLink={false} />
          ))}
        </div>

        {/* Mobile: single plain list for all services */}
        <ul className="mt-12 sm:hidden divide-y divide-[var(--border-cyan)] border-t border-[var(--border-cyan)]">
          {services.map((service) => (
            <li key={service.slug} className="flex items-start gap-3 py-6">
              <ServiceIcon icon={service.icon} className="h-5 w-5 text-cyan shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-white">{service.title}</p>
                <p className="mt-1 text-sm text-muted leading-relaxed">
                  {service.shortDescription}
                </p>
                {!LIST_ONLY_SLUGS.includes(service.slug) && (
                  <Link
                    href={`/services#${service.slug}`}
                    className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-cyan"
                  >
                    Learn More <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
