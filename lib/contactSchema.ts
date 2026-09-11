import { z } from "zod";

export const serviceOptions = [
  "Key Programming",
  "Duplicate Keys",
  "Ignition Cylinder Replacement",
  "Key Cutting",
  "Lost Key Replacement",
  "Car Remote Replacement",
  "Emergency Lockout",
  "Other",
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .regex(/^[0-9()+\-.\s]+$/, "Please enter a valid phone number."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .optional()
    .or(z.literal("")),
  service: z.enum(serviceOptions, {
    message: "Please select the service you need.",
  }),
  vehicleMake: z.string().trim().optional().or(z.literal("")),
  vehicleModel: z.string().trim().optional().or(z.literal("")),
  vehicleYear: z.string().trim().optional().or(z.literal("")),
  message: z.string().trim().min(10, "Please provide a few details about your request."),
  pricingAcknowledged: z.literal(true, {
    message: "Please confirm you understand pricing is discussed after service details.",
  }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
