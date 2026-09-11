export default function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  heading: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
        {heading}
      </h2>
      {description && (
        <p className="mt-4 text-muted text-base leading-relaxed">{description}</p>
      )}
    </div>
  );
}
