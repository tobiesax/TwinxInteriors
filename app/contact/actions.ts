"use server";

import { Resend } from "resend";

const TO_EMAIL = "Info@twinxinteriors.co.za";

// Real visitors can't fill and submit the form faster than this; bots that skip
// the honeypot often still submit near-instantly.
const MIN_SUBMIT_MS = 2000;

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

  // Time-trap: the field is stamped client-side after the form actually mounts in
  // the browser, so a missing/invalid value means whatever submitted skipped JS entirely.
  const renderedAt = Number(formData.get("form-rendered-at"));
  if (!renderedAt || Date.now() - renderedAt < MIN_SUBMIT_MS) {
    console.warn("Contact form time-trap triggered — submission blocked without sending email.");
    return { status: "success" };
  }

  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
  if (turnstileSecret) {
    const turnstileToken = String(formData.get("cf-turnstile-response") || "");
    if (!turnstileToken) {
      return { status: "error", message: "Please complete the verification check and try again." };
    }
    try {
      const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ secret: turnstileSecret, response: turnstileToken }),
      });
      const verifyData = await verifyRes.json();
      if (!verifyData.success) {
        console.warn("Turnstile verification failed:", verifyData["error-codes"]);
        return { status: "error", message: "Verification failed — please try submitting again." };
      }
    } catch (err) {
      console.error("Turnstile verification request failed:", err);
      return { status: "error", message: "Something went wrong verifying your request. Please try again." };
    }
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
