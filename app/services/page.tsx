import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/layout/Container";
import PageHero from "@/components/shared/PageHero";
import CTAButton from "@/components/shared/CTAButton";
import { ServiceIcon } from "@/components/shared/serviceIcons";
import { CheckIcon, PhoneIcon } from "@/components/icons";
import { services } from "@/data/services";
import { business } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional mobile solutions for vehicle keys, lockouts, remotes and ignition systems including key programming, key cutting and emergency lockouts.",
  alternates: { canonical: "/services" },
};

const serviceImages: Record<string, string> = {
  "key-programming": "/ser1.png",
  "duplicate-keys": "/ser2.png",
  "ignition-cylinder-replacement": "/ser3.png",
  "key-cutting": "/ser4.png",
  "lost-key-replacement": "/ser5.png",
  "car-remote-replacement": "/ser6.png",
  "emergency-lockouts": "/ser7.png",
  "multi-service-discounts": "/ser8.png",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Offer"
        title="Automotive Locksmith Services"
        description="Professional mobile solutions for vehicle keys, lockouts, remotes and ignition systems."
      />

      <div className="divide-y divide-[var(--border-cyan)]">
        {services.map((service, i) => (
          <section
            key={service.slug}
            id={service.slug}
            className={`py-16 sm:py-20 scroll-mt-24 ${i % 2 === 1 ? "bg-[var(--bg-1)]" : ""}`}
          >
            <Container
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--border-cyan)]">
                <Image
                  src={serviceImages[service.slug]}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-0)]/70 to-transparent" />
              </div>

              <div>
                <div className="h-12 w-12 rounded-xl flex items-center justify-center bg-[var(--card-2)] border border-[var(--border-cyan)] mb-5">
                  <ServiceIcon icon={service.icon} className="h-6 w-6 text-cyan" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  {service.title}
                </h2>
                <p className="mt-4 text-muted leading-relaxed">{service.description}</p>

                <ul className="mt-5 space-y-2.5">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex gap-2.5 text-sm text-white/90">
                      <CheckIcon className="h-4 w-4 text-cyan shrink-0 mt-0.5" /> {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-4">
                  <CTAButton href={business.phoneHref} icon={<PhoneIcon className="h-4 w-4" />}>
                    Call for a Quote
                  </CTAButton>
                  <CTAButton href="/contact" variant="secondary">
                    Contact for Pricing
                  </CTAButton>
                </div>
              </div>
            </Container>
          </section>
        ))}
      </div>

      <section className="py-20 sm:py-24 bg-[var(--bg-1)] border-t border-[var(--border-cyan)]">
        <Container className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Not Sure Which Service You Need?
          </h2>
          <p className="mt-3 text-muted max-w-xl mx-auto">
            Call us and tell us what&rsquo;s going on with your vehicle &mdash;
            we&rsquo;ll help you figure out the right solution.
          </p>
          <div className="mt-7">
            <CTAButton href={business.phoneHref} icon={<PhoneIcon className="h-5 w-5" />}>
              Call {business.phone}
            </CTAButton>
          </div>
        </Container>
      </section>
    </>
  );
}
