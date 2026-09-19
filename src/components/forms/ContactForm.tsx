"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Label, Input, Textarea, Select, ErrorMessage } from "@/components/ui/FormField";

const ENQUIRY_TYPES = [
  "New project",
  "Existing project",
  "Service question",
  "Partnership",
  "Team opportunity",
  "General enquiry",
];

export function ContactForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError(null);
    setErrors({});
    setSubmitting(true);

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      enquiryType: String(fd.get("enquiryType") || ""),
      subject: String(fd.get("subject") || ""),
      message: String(fd.get("message") || ""),
      consent: fd.get("consent") === "on",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.status === 400) {
        const body = await res.json();
        const fieldErrors: Record<string, string> = {};
        for (const [key, msgs] of Object.entries(body.issues?.fieldErrors ?? {})) {
          if (Array.isArray(msgs) && msgs[0]) fieldErrors[key] = msgs[0];
        }
        setErrors(fieldErrors);
        setFormError("Please check the highlighted fields below.");
        return;
      }
      if (!res.ok) {
        setFormError("Something went wrong sending your message. Please try again, or call us directly.");
        return;
      }

      const { reference } = await res.json();
      router.push(`/thank-you?type=contact&ref=${encodeURIComponent(reference)}`);
    } catch {
      setFormError("Something went wrong sending your message. Please try again, or call us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {formError && <p className="rounded-sm border border-error/30 bg-error/10 px-4 py-3.5 text-sm text-error">{formError}</p>}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" type="text" required />
          <ErrorMessage>{errors.name}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor="email">Email address</Label>
          <Input id="email" name="email" type="email" required />
          <ErrorMessage>{errors.email}</ErrorMessage>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="phone">Phone (optional)</Label>
          <Input id="phone" name="phone" type="tel" />
        </div>
        <div>
          <Label htmlFor="enquiryType">Enquiry type</Label>
          <Select id="enquiryType" name="enquiryType" required defaultValue="">
            <option value="" disabled>
              Select...
            </option>
            {ENQUIRY_TYPES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </Select>
          <ErrorMessage>{errors.enquiryType}</ErrorMessage>
        </div>
      </div>

      <div>
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" name="subject" type="text" required />
        <ErrorMessage>{errors.subject}</ErrorMessage>
      </div>

      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" rows={5} required />
        <ErrorMessage>{errors.message}</ErrorMessage>
      </div>

      <div className="flex items-start gap-2.5">
        <input type="checkbox" id="consent" name="consent" className="mt-1" required />
        <label htmlFor="consent" className="text-sm">
          I consent to be contacted by Kuluwa.digital regarding this enquiry.
        </label>
      </div>

      <Button type="submit" className="w-full" disabled={submitting}>
        {submitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
