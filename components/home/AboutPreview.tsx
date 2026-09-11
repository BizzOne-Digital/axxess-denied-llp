import Image from "next/image";
import Container from "@/components/layout/Container";
import { CheckIcon, LocationIcon, ShieldIcon, BadgeIcon } from "@/components/icons";

export default function AboutPreview() {
  return (
    <section className="py-20 sm:py-28 bg-[var(--bg-1)] border-y border-[var(--border-cyan)]">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--border-cyan)]">
            <Image
              src="/home1.png"
              alt="Close-up of a car key near the vehicle door"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-0)]/70 to-transparent" />
          </div>

          <div className="absolute -bottom-8 left-4 right-4 sm:left-8 sm:right-auto sm:w-72 card p-5 bg-[var(--bg-0)]/95">
            <p className="text-xs uppercase tracking-wider text-cyan font-semibold mb-3">
              On-Site Service at Your Location
            </p>
            <ul className="space-y-2 text-sm text-white/80">
              {["Cars", "Trucks", "SUVs", "Most Makes & Models"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-cyan shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 lg:pt-0">
          <p className="eyebrow mb-3">About Axxess Denied</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Your Local Mobile Automotive Locksmith
          </h2>
          <p className="mt-5 text-white/80 leading-relaxed">
            Axxess Denied LLP provides fast, professional and affordable mobile
            automotive locksmith services. Whether you&rsquo;re locked out, need a
            replacement key, require key programming or need ignition
            assistance, we bring the service directly to you.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <LocationIcon className="h-6 w-6 text-cyan mb-2" />
              <p className="text-sm font-semibold text-white">Mobile Service</p>
              <p className="text-xs text-white/70 mt-1">We Come to You</p>
            </div>
            <div>
              <ShieldIcon className="h-6 w-6 text-purple mb-2" />
              <p className="text-sm font-semibold text-white">Professional Service</p>
              <p className="text-xs text-white/70 mt-1">Dependable assistance</p>
            </div>
            <div>
              <BadgeIcon className="h-6 w-6 text-magenta mb-2" />
              <p className="text-sm font-semibold text-white">Customer Focused</p>
              <p className="text-xs text-white/70 mt-1">Fast &amp; reliable service</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
