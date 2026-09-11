import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import PageHero from "@/components/shared/PageHero";
import { business } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl text-muted leading-relaxed space-y-5">
          <p>
            Axxess Denied LLP respects your privacy. Information submitted
            through our contact form or provided by phone or email is used
            solely to respond to your service request and is not sold or
            shared with third parties for marketing purposes.
          </p>
          <p>
            If you have questions about how your information is handled,
            contact us at{" "}
            <a href={business.emailHref} className="text-cyan hover:underline">
              {business.email}
            </a>{" "}
            or {business.phone}.
          </p>
        </Container>
      </section>
    </>
  );
}
