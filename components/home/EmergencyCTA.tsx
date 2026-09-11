import Image from "next/image";
import Container from "@/components/layout/Container";
import CTAButton from "@/components/shared/CTAButton";
import { business } from "@/data/navigation";
import { PhoneIcon, ArrowRightIcon } from "@/components/icons";

export default function EmergencyCTA() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1800&q=80"
        alt="Road at night with car headlights and taillights"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[var(--bg-0)]/85" />
      <div className="glow-radial" />
      <Container className="relative text-center">
        <p className="eyebrow mb-4">Need an Automotive Locksmith?</p>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          WE&rsquo;RE JUST A <span className="text-gradient">CALL AWAY.</span>
        </h2>
        <p className="mt-5 text-muted max-w-xl mx-auto">
          Fast and reliable mobile automotive locksmith services when you need
          assistance.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton href={business.phoneHref} icon={<PhoneIcon className="h-5 w-5" />}>
            Call {business.phone}
          </CTAButton>
          <CTAButton href="/contact" variant="secondary" icon={<ArrowRightIcon className="h-5 w-5" />}>
            Contact Us
          </CTAButton>
        </div>
        <p className="mt-6 text-xs text-muted">
          Emergency services available outside normal business hours.
        </p>
      </Container>
    </section>
  );
}
