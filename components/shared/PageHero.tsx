import type { ReactNode } from "react";
import Container from "@/components/layout/Container";

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-[var(--bg-1)] bg-grid border-b border-[var(--border-cyan)]">
      <div className="glow-radial" />
      <Container className="relative py-20 sm:py-28 text-center">
        <p className="eyebrow mb-4 animate-fade-up">{eyebrow}</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white max-w-3xl mx-auto animate-fade-up [animation-delay:80ms]">
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-base sm:text-lg text-muted max-w-2xl mx-auto animate-fade-up [animation-delay:160ms]">
            {description}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}
