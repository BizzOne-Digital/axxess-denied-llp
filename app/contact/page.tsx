import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import PageHero from "@/components/shared/PageHero";
import ContactCard from "@/components/shared/ContactCard";
import { PhoneIcon, MailIcon, ClockIcon, AlertIcon } from "@/components/icons";
import { business } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Axxess Denied LLP for mobile automotive locksmith services. Call, email, or reach out about your vehicle key, remote or lockout needs.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Need Automotive Locksmith Help?"
        description="Call or email us and tell us what automotive locksmith service you need. We're ready to help you get back on the road."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ContactCard
              icon={<PhoneIcon className="h-6 w-6 text-cyan" />}
              title="Call Us"
              href={business.phoneHref}
            >
              <p className="text-white text-lg font-medium">{business.phone}</p>
              <p className="mt-2 text-white/60">
                Speak directly with our team about lockouts, key replacement,
                programming and more.
              </p>
            </ContactCard>

            <ContactCard
              icon={<MailIcon className="h-6 w-6 text-cyan" />}
              title="Email Us"
              href={business.emailHref}
            >
              <p className="text-white text-lg font-medium break-all">{business.email}</p>
              <p className="mt-2 text-white/60">
                Send us the details of your vehicle and locksmith need and
                we&rsquo;ll follow up as soon as possible.
              </p>
            </ContactCard>

            <ContactCard icon={<ClockIcon className="h-6 w-6 text-cyan" />} title="Business Hours">
              <p className="text-white text-lg font-medium">{business.hours}</p>
              <p className="mt-2 text-white/60">
                Our regular hours for scheduled automotive locksmith services.
              </p>
            </ContactCard>

            <ContactCard icon={<AlertIcon className="h-6 w-6 text-cyan" />} title="Emergency Service">
              <p className="text-white text-lg font-medium">Available Outside Business Hours</p>
              <p className="mt-2 text-white/60">
                Locked out late at night or early morning? Call us &mdash;
                emergency assistance is available.
              </p>
            </ContactCard>
          </div>
        </Container>
      </section>
    </>
  );
}
