import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/layout/Container";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import CTAButton from "@/components/shared/CTAButton";
import { CheckIcon, LocationIcon, ShieldIcon, BadgeIcon, PhoneIcon, CarIcon } from "@/components/icons";
import { business } from "@/data/navigation";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Axxess Denied LLP is a mobile automotive locksmith service dedicated to helping drivers regain access to their vehicles and get back on the road.",
  alternates: { canonical: "/about" },
};

const values = [
  { icon: ShieldIcon, title: "Reliability", desc: "Consistent, dependable service you can count on." },
  { icon: BadgeIcon, title: "Professionalism", desc: "Experienced, courteous service every visit." },
  { icon: LocationIcon, title: "Convenience", desc: "We come to your location, wherever you are." },
  { icon: CheckIcon, title: "Customer Service", desc: "Clear communication from start to finish." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Axxess Denied LLP"
        title="Mobile Automotive Locksmith You Can Trust"
        description="Mobile automotive locksmith service focused on speed, reliability and customer convenience."
      />

      <section className="py-20 sm:py-28">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--border-cyan)]">
            <Image
              src="/about.png"
              alt="Modern car driving on the road"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-0)]/70 to-transparent" />
          </div>
          <div>
            <p className="eyebrow mb-3">Our Story</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Who We Are
            </h2>
            <p className="mt-5 text-muted leading-relaxed">
              Axxess Denied LLP is a mobile automotive locksmith service
              dedicated to helping drivers regain access to their vehicles and
              get back on the road. We offer convenient on-site automotive
              locksmith solutions for keys, remotes, lockouts and
              ignition-related needs.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Our mission is to provide efficient, dependable and affordable
              automotive locksmith solutions without unnecessary hassle.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28 bg-[var(--bg-1)] border-y border-[var(--border-cyan)]">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="eyebrow mb-3">Why Mobile Service Matters</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              We Come to You
            </h2>
            <ul className="mt-6 space-y-4 text-muted">
              <li className="flex gap-3">
                <CheckIcon className="h-5 w-5 text-cyan shrink-0 mt-0.5" />
                Service comes directly to your location, wherever you are.
              </li>
              <li className="flex gap-3">
                <CheckIcon className="h-5 w-5 text-cyan shrink-0 mt-0.5" />
                No towing required for many common lockout and key situations.
              </li>
              <li className="flex gap-3">
                <CheckIcon className="h-5 w-5 text-cyan shrink-0 mt-0.5" />
                A convenient roadside solution that saves you time.
              </li>
              <li className="flex gap-3">
                <CheckIcon className="h-5 w-5 text-cyan shrink-0 mt-0.5" />
                Faster assistance compared to arranging a tow and dealership visit.
              </li>
            </ul>
          </div>
          <div className="card p-8">
            <CarIcon className="h-8 w-8 text-cyan mb-4" />
            <p className="eyebrow mb-3">What We Work With</p>
            <div className="grid grid-cols-2 gap-3 mt-2">
              {["Cars", "Trucks", "SUVs", "Common Makes & Models"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-white/90">
                  <CheckIcon className="h-4 w-4 text-cyan shrink-0" /> {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading align="center" eyebrow="Core Values" heading="What We Stand For" />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card p-6 text-center">
                <v.icon className="h-7 w-7 text-cyan mx-auto mb-3" />
                <h3 className="text-base font-semibold text-white">{v.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24 bg-[var(--bg-1)] border-t border-[var(--border-cyan)]">
        <Container className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Need Automotive Locksmith Help?
          </h2>
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
