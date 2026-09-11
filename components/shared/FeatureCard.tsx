import type { ReactNode } from "react";

export default function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="card p-6 h-full">
      <div className="h-11 w-11 rounded-lg flex items-center justify-center bg-[var(--card-2)] border border-[var(--border-cyan)] mb-4">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-muted leading-relaxed">{description}</p>
    </div>
  );
}
