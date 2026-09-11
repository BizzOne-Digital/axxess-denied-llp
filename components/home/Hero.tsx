import Image from "next/image";
import Container from "@/components/layout/Container";
import CTAButton from "@/components/shared/CTAButton";
import { business } from "@/data/navigation";
import { PhoneIcon, LightningIcon, ShieldIcon, ClockIcon, ArrowRightIcon } from "@/components/icons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center">
      <Image
        src="/hero.png"
        alt="Mobile automotive locksmith service at night"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-0)] via-[var(--bg-0)]/80 sm:via-[var(--bg-0)]/60 to-[var(--bg-0)]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-0)] via-transparent to-[var(--bg-0)]/40" />
      <div className="glow-radial" />

      <Container className="relative py-24 sm:py-28 lg:py-32">
        <div className="max-w-2xl text-center lg:text-left">
          <p className="eyebrow mb-4 animate-fade-up">Mobile Automotive Locksmith</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] animate-fade-up [animation-delay:80ms]">
            <span className="text-white">WE POP LOCKS,</span>
            <br />
            <span className="text-gradient">NOT POCKETS.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted max-w-xl mx-auto lg:mx-0 animate-fade-up [animation-delay:160ms]">
            Fast. Reliable. Affordable. Axxess Denied LLP provides professional
            mobile automotive locksmith services at your location.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up [animation-delay:240ms]">
            <CTAButton href={business.phoneHref} icon={<PhoneIcon className="h-5 w-5" />}>
              Call Now {business.phone}
            </CTAButton>
            <CTAButton href="/services" variant="secondary" icon={<ArrowRightIcon className="h-5 w-5" />}>
              Our Services
            </CTAButton>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 animate-fade-up [animation-delay:320ms]">
            <div className="flex items-center gap-2 text-sm text-muted">
              <LightningIcon className="h-5 w-5 text-cyan" /> Fast Response
            </div>
            <div className="flex items-center gap-2 text-sm text-muted">
              <ShieldIcon className="h-5 w-5 text-purple" /> Trusted &amp; Reliable
            </div>
            <div className="flex items-center gap-2 text-sm text-muted">
              <ClockIcon className="h-5 w-5 text-magenta" /> 24/7 Emergency
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
