import type { Testimonial } from "@/data/testimonials";
import { StarIcon, QuoteIcon } from "@/components/icons";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="card p-7 h-full flex flex-col">
      <QuoteIcon className="h-7 w-7 text-purple/70 mb-3" />
      <div className="flex gap-1 mb-4" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} className="h-4 w-4 text-cyan" />
        ))}
      </div>
      <p className="text-sm sm:text-base text-white/90 leading-relaxed flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3">
        <span className="h-10 w-10 rounded-full flex items-center justify-center text-xs font-semibold bg-gradient-to-br from-cyan/30 via-purple/30 to-magenta/30 border border-[var(--border-cyan)] text-white">
          {testimonial.initials}
        </span>
        <span className="text-sm font-medium text-white">{testimonial.name}</span>
      </div>
    </div>
  );
}
