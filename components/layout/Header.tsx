"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "./Container";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { navigation, business } from "@/data/navigation";
import { PhoneIcon, MenuIcon } from "@/components/icons";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
          scrolled
            ? "bg-[var(--bg-1)]/90 backdrop-blur border-[var(--border-cyan)]"
            : "bg-transparent border-transparent"
        }`}
      >
        <Container className="flex h-18 items-center justify-between py-3">
          <Logo />

          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
            {navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-md hover:text-cyan ${
                    active ? "text-cyan" : "text-white/85"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute left-4 right-4 -bottom-[13px] h-[2px] bg-gradient-to-r from-cyan via-purple to-magenta rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={business.phoneHref}
              className="btn-primary flex items-center gap-2 rounded-full px-5 py-2.5 text-sm"
            >
              <PhoneIcon className="h-4 w-4" />
              Call Now {business.phone}
            </a>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            className="lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-md border border-[var(--border-cyan)] text-white"
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </Container>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} pathname={pathname} />
    </>
  );
}
