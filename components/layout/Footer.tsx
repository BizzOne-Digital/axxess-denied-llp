import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";
import { business } from "@/data/navigation";
import { PhoneIcon, MailIcon, ClockIcon } from "@/components/icons";
import { services } from "@/data/services";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-cyan)] bg-[var(--bg-1)] mt-20">
      <Container className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-muted leading-relaxed max-w-xs">
            Axxess Denied LLP provides professional mobile automotive locksmith
            services for vehicle keys, remotes, ignition needs and lockouts.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2.5 text-sm text-muted">
            <li><Link href="/" className="hover:text-cyan transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-cyan transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-cyan transition-colors">Services</Link></li>
            <li><Link href="/testimonials" className="hover:text-cyan transition-colors">Testimonials</Link></li>
            <li><Link href="/contact" className="hover:text-cyan transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
            Contact
          </h3>
          <ul className="space-y-3 text-sm text-muted">
            <li>
              <a href={business.phoneHref} className="flex items-center gap-2 hover:text-cyan transition-colors">
                <PhoneIcon className="h-4 w-4 text-cyan shrink-0" /> {business.phone}
              </a>
            </li>
            <li>
              <a href={business.emailHref} className="flex items-center gap-2 hover:text-cyan transition-colors break-all">
                <MailIcon className="h-4 w-4 text-cyan shrink-0" /> {business.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <ClockIcon className="h-4 w-4 text-cyan shrink-0" /> {business.hours}
            </li>
            <li className="text-xs text-muted/80 pt-1">
              Emergency services available outside normal business hours.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
            Services
          </h3>
          <ul className="space-y-2.5 text-sm text-muted">
            {services.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className="hover:text-cyan transition-colors">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-[var(--border-cyan)]">
        <Container className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted">
          <p>&copy; 2026 Axxess Denied LLP. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="hover:text-cyan transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-cyan transition-colors">Terms</Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
