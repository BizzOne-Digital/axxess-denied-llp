import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import FeatureCard from "@/components/shared/FeatureCard";
import { LightningIcon, ShieldIcon, BadgeIcon, WalletIcon } from "@/components/icons";

const features = [
  {
    icon: <LightningIcon className="h-5 w-5 text-cyan" />,
    title: "Fast Response",
    description: "Get automotive locksmith help when you need it.",
  },
  {
    icon: <ShieldIcon className="h-5 w-5 text-blue" />,
    title: "Reliable Service",
    description: "Professional service focused on getting you moving again.",
  },
  {
    icon: <BadgeIcon className="h-5 w-5 text-purple" />,
    title: "Quality Solutions",
    description: "Modern tools and dependable automotive locksmith solutions.",
  },
  {
    icon: <WalletIcon className="h-5 w-5 text-magenta" />,
    title: "Affordable Service",
    description: "Professional assistance without unnecessary dealership costs.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Us"
          heading="More Than Just a Locksmith"
          description="We're committed to providing top-quality service with honesty and affordability."
        />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </Container>
    </section>
  );
}
