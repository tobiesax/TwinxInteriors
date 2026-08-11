"use server";

import { Resend } from "resend";

const TO_EMAIL = "Info@twinxinteriors.co.za";

export type SubmitQuoteState = {
  status: "idle" | "success" | "error";
  message?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function submitQuoteRequest(
  _prevState: SubmitQuoteState,
  formData: FormData
): Promise<SubmitQuoteState> {
  // Honeypot: real visitors never fill this hidden field in.
  if (formData.get("hp-field")) {
    console.warn("Contact form honeypot triggered — submission blocked without sending email.");
    return { status: "success" };
  }

  const firstName = String(formData.get("firstName") || "").trim();
  const lastName = String(formData.get("lastName") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const wallSize = String(formData.get("wallSize") || "").trim();
  const description = String(formData.get("description") || "").trim();
  const address = String(formData.get("address") || "").trim();
  const wallDesignOptions = formData.getAll("wallDesignOptions").map(String);

  if (!firstName || !phone) {
    return { status: "error", message: "Please fill in at least your name and phone number." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — contact form cannot send email.");
    return { status: "error", message: "Something went wrong on our end. Please WhatsApp us instead." };
  }

  const resend = new Resend(apiKey);

  const optionsHtml = wallDesignOptions.length
    ? `<ul>${wallDesignOptions.map((o) => `<li>${escapeHtml(o)}</li>`).join("")}</ul>`
    : "<p>None selected</p>";

  const html = `
    <h2>New quote request from twinxinteriors.co.za</h2>
    <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Wall size:</strong> ${escapeHtml(wallSize)}</p>
    <p><strong>Installation address:</strong> ${escapeHtml(address)}</p>
    <p><strong>Product interest:</strong></p>
    ${optionsHtml}
    <p><strong>Description:</strong></p>
    <p>${escapeHtml(description).replace(/\n/g, "<br>")}</p>
  `;

  try {
    const { error } = await resend.emails.send({
      from: "Twinx Website <info@twinxinteriors.co.za>",
      to: TO_EMAIL,
      replyTo: email || undefined,
      subject: `New quote request — ${firstName} ${lastName}`.trim(),
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return { status: "error", message: "Something went wrong sending your request. Please WhatsApp us instead." };
    }

    return { status: "success" };
  } catch (err) {
    console.error("Contact form send failed:", err);
    return { status: "error", message: "Something went wrong sending your request. Please WhatsApp us instead." };
  }
}
