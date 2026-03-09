import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  description: string;
  budget: string;
};

async function sendViaResend({
  name,
  email,
  description,
  budget
}: ContactPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  const toEmail = process.env.CONTACT_TO_EMAIL as string;
  const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: `DVION Website <${fromEmail}>`,
      to: [toEmail],
      reply_to: email,
      subject: `New DVION Contact Request from ${name}`,
      text: [
        "New contact request received.",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Budget: ${budget}`,
        "",
        "Project Description:",
        description
      ].join("\n")
    })
  });

  if (!response.ok) {
    const data = (await response.json()) as { message?: string; error?: { message?: string } };
    throw new Error(data.error?.message || data.message || "Resend email delivery failed.");
  }

  return true;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>;
    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const description = body.description?.trim() ?? "";
    const budget = body.budget?.trim() ?? "";

    if (!name || !email || !description || !budget) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    if (!process.env.CONTACT_TO_EMAIL || !process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Missing email configuration: CONTACT_TO_EMAIL or RESEND_API_KEY" },
        { status: 500 }
      );
    }

    await sendViaResend({ name, email, description, budget });
    return NextResponse.json({ ok: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to send your request. Please try again.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
