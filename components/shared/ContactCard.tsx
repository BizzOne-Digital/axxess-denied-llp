import type { ReactNode } from "react";

export default function ContactCard({
  icon,
  title,
  href,
  children,
}: {
  icon: ReactNode;
  title: string;
  href?: string;
  children: ReactNode;
}) {
  const content = (
    <>
      <div className="h-14 w-14 rounded-xl flex items-center justify-center bg-[var(--card-2)] border border-[var(--border-cyan)] mb-6 transition-shadow group-hover:shadow-[0_0_24px_rgba(0,234,251,0.35)]">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <div className="text-sm sm:text-base text-white/75 leading-relaxed">{children}</div>
    </>
  );

  if (href) {
    return (
      <a href={href} className="card group p-8 h-full flex flex-col hover:text-cyan transition-colors">
        {content}
      </a>
    );
  }

  return <div className="card p-8 h-full flex flex-col">{content}</div>;
}
