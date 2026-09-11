import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contactSchema";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed.", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const smtpConfigured =
    process.env.SMTP_HOST && process.env.SMTP_PORT && process.env.SMTP_USER && process.env.SMTP_PASS;

  if (!smtpConfigured) {
    return NextResponse.json(
      {
        error:
          "Message delivery is not currently configured on the server. Please call or email us directly.",
      },
      { status: 503 }
    );
  }

  // SMTP is configured — send the message here using your preferred mail
  // library (e.g. nodemailer) or an email API (e.g. Resend), delivering to
  // process.env.CONTACT_TO_EMAIL. Credentials are read from environment
  // variables only and are never exposed to the client.

  return NextResponse.json({ success: true });
}
