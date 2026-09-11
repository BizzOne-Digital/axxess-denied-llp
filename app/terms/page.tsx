import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import PageHero from "@/components/shared/PageHero";
import { business } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Terms",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" />
      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl text-muted leading-relaxed space-y-5">
          <p>
            By contacting Axxess Denied LLP or requesting service, you agree
            that service pricing is confirmed after discussing your specific
            vehicle and locksmith needs. Service availability may vary based
            on location and vehicle compatibility.
          </p>
          <p>
            For questions about these terms, contact us at{" "}
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
