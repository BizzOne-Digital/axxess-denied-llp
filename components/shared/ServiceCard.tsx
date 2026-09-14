import Link from "next/link";
import type { Service } from "@/data/services";
import { ServiceIcon } from "./serviceIcons";
import { ArrowRightIcon } from "@/components/icons";

export default function ServiceCard({
  service,
  showLink = true,
}: {
  service: Service;
  showLink?: boolean;
}) {
  return (
    <div className="card group p-6 flex flex-col h-full">
      <div className="h-12 w-12 rounded-xl flex items-center justify-center bg-[var(--card-2)] border border-[var(--border-cyan)] mb-5 transition-shadow group-hover:shadow-[0_0_20px_rgba(0,234,251,0.35)]">
        <ServiceIcon icon={service.icon} className="h-6 w-6 text-cyan" />
      </div>
      <h3 className="text-lg font-semibold text-white">{service.title}</h3>
      <p className="mt-2 text-sm text-muted leading-relaxed flex-1">
        {service.shortDescription}
      </p>
      {showLink && (
        <Link
          href={`/services#${service.slug}`}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-cyan hover:gap-2.5 transition-all"
        >
          Learn More <ArrowRightIcon className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}
