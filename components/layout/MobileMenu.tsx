"use client";

import Link from "next/link";
import { navigation, business } from "@/data/navigation";
import { CloseIcon, PhoneIcon } from "@/components/icons";
import Logo from "./Logo";

export default function MobileMenu({
  open,
  onClose,
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
}) {
  return (
    <div
      className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className={`absolute inset-y-0 right-0 w-full max-w-sm bg-[var(--bg-1)] border-l border-[var(--border-cyan)] flex flex-col transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 h-18 border-b border-[var(--border-cyan)]">
          <Logo />
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="inline-flex items-center justify-center h-11 w-11 rounded-md border border-[var(--border-cyan)]"
          >
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-col gap-1 px-5 py-6" aria-label="Mobile">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-lg px-4 py-4 text-lg font-medium transition-colors ${
                pathname === item.href
                  ? "text-cyan bg-[var(--card)]"
                  : "text-white/90 hover:bg-[var(--card)]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto p-5 border-t border-[var(--border-cyan)]">
          <a
            href={business.phoneHref}
            className="btn-primary flex items-center justify-center gap-2 rounded-full px-5 py-4 text-base w-full"
          >
            <PhoneIcon className="h-5 w-5" />
            Call Now {business.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
