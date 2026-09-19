import { Resend } from "resend";

/**
 * Central email-sending helper. Every form submission on the site routes
 * through here so there is exactly one place that knows how delivery works.
 *
 * Requires RESEND_API_KEY, EMAIL_FROM and ADMIN_EMAIL in .env (see
 * .env.example). If RESEND_API_KEY is not set, this logs a warning and
 * skips sending instead of throwing — so local development and CI don't
 * require a real API key, but production MUST have one configured.
 */
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function sendNotificationEmail(subject: string, fields: Record<string, string | undefined>) {
  const rows = Object.entries(fields)
    .filter(([, v]) => v !== undefined && v !== "")
    .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;font-weight:600;vertical-align:top;">${k}</td><td style="padding:4px 0;">${escapeHtml(String(v))}</td></tr>`)
    .join("");

  const html = `<table style="font-family:sans-serif;font-size:14px;">${rows}</table>`;

  if (!resend) {
    console.warn(
      `[email] RESEND_API_KEY not set — skipping email send for "${subject}". ` +
        `Configure RESEND_API_KEY in .env to enable real delivery.`,
    );
    return { sent: false, reason: "not_configured" as const };
  }

  const adminEmail = process.env.ADMIN_EMAIL || "gtmgunasekara@gmail.com";
  const from = process.env.EMAIL_FROM || "Kuluwa.digital <notifications@kuluwa.digital>";

  await resend.emails.send({
    from,
    to: adminEmail,
    subject: `Kuluwa.digital — ${subject}`,
    html,
  });

  return { sent: true as const };
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
