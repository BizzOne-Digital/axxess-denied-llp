import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";

const steps = [
  { num: "01", title: "Call Us", desc: "Reach out by phone and describe your locksmith need." },
  { num: "02", title: "Tell Us What You Need", desc: "Share the vehicle details and the service required." },
  { num: "03", title: "We Come to Your Location", desc: "Our mobile locksmith arrives ready to help." },
  { num: "04", title: "Get Back on the Road", desc: "Drive off with your issue resolved, fast." },
];

export default function Process() {
  return (
    <section className="py-20 sm:py-28 bg-[var(--bg-1)] border-y border-[var(--border-cyan)]">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Our Process"
          heading="Getting Back on the Road Is Simple"
        />
        <div className="mt-14 relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="hidden lg:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-cyan via-purple to-magenta opacity-40" />
          {steps.map((step) => (
            <div key={step.num} className="relative text-center lg:text-left">
              <div className="mx-auto lg:mx-0 h-12 w-12 rounded-full flex items-center justify-center bg-[var(--card)] border border-[var(--border-cyan)] text-cyan font-[family-name:var(--font-heading)] font-bold relative z-10">
                {step.num}
              </div>
              <h3 className="mt-4 text-base font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
