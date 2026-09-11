import Link from "next/link";
import type { ReactNode } from "react";

export default function CTAButton({
  href,
  children,
  variant = "primary",
  icon,
  className = "",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
  className?: string;
  external?: boolean;
}) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm sm:text-base font-semibold ${
    variant === "primary" ? "btn-primary" : "btn-secondary"
  } ${className}`;

  if (external || href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("#")) {
    return (
      <a href={href} className={cls}>
        {icon}
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {icon}
      {children}
    </Link>
  );
}
