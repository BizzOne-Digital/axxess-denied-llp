"use client";

import { useState, type FormEvent } from "react";
import { contactSchema, serviceOptions } from "@/lib/contactSchema";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "w-full rounded-lg bg-[var(--card-2)] border border-[var(--border-cyan)] px-4 py-3 text-sm text-white placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-cyan/60 focus:border-cyan transition-colors";
const labelClass = "block text-sm font-medium text-white/90 mb-1.5";
const errorClass = "mt-1.5 text-xs text-[var(--pink)]";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverMessage, setServerMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    setServerMessage("");

    const formData = new FormData(e.currentTarget);
    const raw = {
      name: String(formData.get("name") || ""),
      phone: String(formData.get("phone") || ""),
      email: String(formData.get("email") || ""),
      service: String(formData.get("service") || ""),
      vehicleMake: String(formData.get("vehicleMake") || ""),
      vehicleModel: String(formData.get("vehicleModel") || ""),
      vehicleYear: String(formData.get("vehicleYear") || ""),
      message: String(formData.get("message") || ""),
      pricingAcknowledged: formData.get("pricingAcknowledged") === "on",
    };

    const parsed = contactSchema.safeParse(raw);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !fieldErrors[key]) {
          fieldErrors[key] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setServerMessage(
          data.error || "Something went wrong submitting your request. Please call us instead."
        );
        return;
      }

      setStatus("success");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
      setServerMessage("Something went wrong submitting your request. Please call us instead.");
    }
  }

  if (status === "success") {
    return (
      <div className="card p-8 text-center">
        <h3 className="text-xl font-semibold text-white">Request Received</h3>
        <p className="mt-2 text-muted">
          Thank you for reaching out. We&rsquo;ll follow up with you as soon as
          possible to confirm details and next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="card p-6 sm:p-8 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name <span className="text-magenta">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldClass}
          />
          {errors.name && <p id="name-error" className={errorClass}>{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number <span className="text-magenta">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={fieldClass}
          />
          {errors.phone && <p id="phone-error" className={errorClass}>{errors.phone}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={fieldClass}
          />
          {errors.email && <p id="email-error" className={errorClass}>{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="service" className={labelClass}>
            Service Needed <span className="text-magenta">*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            defaultValue=""
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? "service-error" : undefined}
            className={fieldClass}
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.service && <p id="service-error" className={errorClass}>{errors.service}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div>
          <label htmlFor="vehicleMake" className={labelClass}>
            Vehicle Make
          </label>
          <input id="vehicleMake" name="vehicleMake" type="text" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="vehicleModel" className={labelClass}>
            Vehicle Model
          </label>
          <input id="vehicleModel" name="vehicleModel" type="text" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="vehicleYear" className={labelClass}>
            Vehicle Year
          </label>
          <input id="vehicleYear" name="vehicleYear" type="text" inputMode="numeric" className={fieldClass} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message <span className="text-magenta">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={fieldClass}
        />
        {errors.message && <p id="message-error" className={errorClass}>{errors.message}</p>}
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-muted">
          <input
            type="checkbox"
            name="pricingAcknowledged"
            required
            aria-invalid={!!errors.pricingAcknowledged}
            aria-describedby={errors.pricingAcknowledged ? "pricing-error" : undefined}
            className="mt-1 h-4 w-4 rounded border-[var(--border-cyan)] bg-[var(--card-2)] accent-[var(--cyan)]"
          />
          I understand that pricing is confirmed after discussing the service
          requirements.
        </label>
        {errors.pricingAcknowledged && (
          <p id="pricing-error" className={errorClass}>{errors.pricingAcknowledged}</p>
        )}
      </div>

      {status === "error" && serverMessage && (
        <p role="alert" className="text-sm text-[var(--pink)]">
          {serverMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full sm:w-auto rounded-full px-8 py-3.5 text-sm font-semibold disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Request Locksmith Service"}
      </button>
    </form>
  );
}
