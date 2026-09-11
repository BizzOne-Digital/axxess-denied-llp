import Image from "next/image";
import Container from "@/components/layout/Container";
import CTAButton from "@/components/shared/CTAButton";
import { business } from "@/data/navigation";
import { PhoneIcon, ArrowRightIcon } from "@/components/icons";

export default function ServicesBanner() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1800&q=80"
        alt="Dark automotive dashboard and steering wheel at night"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[var(--bg-0)]/80" />
      <div className="glow-radial" />
      <Container className="relative text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white max-w-2xl mx-auto">
          Locked Out or Lost Your Car Keys?
        </h2>
        <p className="mt-4 text-muted max-w-xl mx-auto">
          Fast mobile service for automotive lockouts, keys, remotes and more.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton href={business.phoneHref} icon={<PhoneIcon className="h-5 w-5" />}>
            Call {business.phone}
          </CTAButton>
          <CTAButton href="/services" variant="secondary" icon={<ArrowRightIcon className="h-5 w-5" />}>
            View All Services
          </CTAButton>
        </div>
      </Container>
    </section>
  );
}
