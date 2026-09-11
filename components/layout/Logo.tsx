import Link from "next/link";
import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`flex items-center shrink-0 ${className}`}
      aria-label="Axxess Denied LLP home"
    >
      <Image
        src="/logo.png"
        alt="Axxess Denied LLP"
        width={180}
        height={48}
        priority
        className="h-10 w-auto object-contain"
      />
    </Link>
  );
}
