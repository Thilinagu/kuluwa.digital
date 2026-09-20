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

// Regex patterns for field validation
const NAME_REGEX = /^[a-zA-Z\s'-]+$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\+?[0-9\s\-()]{7,15}$/;

interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  enquiryType: string;
  subject: string;
  message: string;
  consent: string;
}

export function ContactForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<string | null>(null);

  // Track values to clear field errors on input
  const [values, setValues] = useState<ContactFormValues>({
    name: "",
    email: "",
    phone: "",
    enquiryType: "",
    subject: "",
    message: "",
    consent: "false",
  });

  function updateField(name: string, value: string) {
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  }

  function validateForm(): boolean {
    const newErrors: Record<string, string> = {};

    // 1. Full Name
    const name = values.name.trim();
    if (!name) {
      newErrors.name = "Full name is required.";
    } else if (!NAME_REGEX.test(name)) {
      newErrors.name = "Full name can only contain letters, spaces, hyphens, or apostrophes.";
    }

    // 2. Email Address
    const email = values.email.trim();
    if (!email) {
      newErrors.email = "Email address is required.";
    } else if (!EMAIL_REGEX.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // 3. Optional Phone
    const phone = values.phone.trim();
    if (phone && !PHONE_REGEX.test(phone)) {
      newErrors.phone = "Please enter a valid phone number (digits only, 7–15 numbers).";
    }

    // 4. Enquiry Type
    if (!values.enquiryType) {
      newErrors.enquiryType = "Please select an enquiry type.";
    }

    // 5. Subject
    if (!values.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }

    // 6. Message
    if (!values.message.trim()) {
      newErrors.message = "Message is required.";
    }

    // 7. Consent Checkbox
    if (values.consent !== "true") {
      newErrors.consent = "You must consent to be contacted to send a message.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError(null);

    // Run client-side validation
    if (!validateForm()) {
      setFormError("Please check the highlighted fields below.");
      return;
    }

    setSubmitting(true);

    const payload = {
      name: values.name.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      enquiryType: values.enquiryType,
      subject: values.subject.trim(),
      message: values.message.trim(),
      consent: values.consent === "true",
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
          <Input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={(e) => updateField("name", e.target.value)}
          />
          <ErrorMessage>{errors.name}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={(e) => updateField("email", e.target.value)}
          />
          <ErrorMessage>{errors.email}</ErrorMessage>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="phone">Phone (optional)</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={(e) => updateField("phone", e.target.value)}
          />
          <ErrorMessage>{errors.phone}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor="enquiryType">Enquiry type</Label>
          <Select
            id="enquiryType"
            name="enquiryType"
            value={values.enquiryType}
            onChange={(e) => updateField("enquiryType", e.target.value)}
          >
            <option value="" disabled>
              Select...
            </option>
            {ENQUIRY_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </Select>
          <ErrorMessage>{errors.enquiryType}</ErrorMessage>
        </div>
      </div>

      <div>
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          name="subject"
          type="text"
          value={values.subject}
          onChange={(e) => updateField("subject", e.target.value)}
        />
        <ErrorMessage>{errors.subject}</ErrorMessage>
      </div>

      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(e) => updateField("message", e.target.value)}
        />
        <ErrorMessage>{errors.message}</ErrorMessage>
      </div>

      <div>
        <div className="flex items-start gap-2.5">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            className="mt-1"
            checked={values.consent === "true"}
            onChange={(e) => updateField("consent", String(e.target.checked))}
          />
          <label htmlFor="consent" className="text-sm">
            I consent to be contacted by Kuluwa.digital regarding this enquiry.
          </label>
        </div>
        <ErrorMessage>{errors.consent}</ErrorMessage>
      </div>

      <Button type="submit" className="w-full" disabled={submitting}>
        {submitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}