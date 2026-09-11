import Container from "@/components/layout/Container";
import CTAButton from "@/components/shared/CTAButton";
import { PhoneIcon, ArrowRightIcon } from "@/components/icons";
import { business } from "@/data/navigation";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg-1)] bg-grid min-h-[70vh] flex items-center">
      <div className="glow-radial" />
      <Container className="relative text-center py-20">
        <p className="eyebrow mb-4">404</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
          Looks Like That <span className="text-gradient">Key Doesn&rsquo;t Fit.</span>
        </h1>
        <p className="mt-5 text-muted max-w-xl mx-auto">
          The page you&rsquo;re looking for doesn&rsquo;t exist. Let&rsquo;s get
          you back on the road.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton href="/" icon={<ArrowRightIcon className="h-5 w-5" />}>
            Back to Home
          </CTAButton>
          <CTAButton href={business.phoneHref} variant="secondary" icon={<PhoneIcon className="h-5 w-5" />}>
            Call {business.phone}
          </CTAButton>
        </div>
      </Container>
    </section>
  );
}
