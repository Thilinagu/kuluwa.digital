"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Label, Input, Textarea, Select, ErrorMessage } from "@/components/ui/FormField";
import { PROJECT_TYPES } from "@/lib/validation/projectEnquiry";

export function ProjectEnquiryForm() {
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
      company: String(fd.get("company") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      country: String(fd.get("country") || ""),
      projectType: String(fd.get("projectType") || ""),
      industry: String(fd.get("industry") || ""),
      projectTitle: String(fd.get("projectTitle") || ""),
      description: String(fd.get("description") || ""),
      mainProblem: String(fd.get("mainProblem") || ""),
      desiredFeatures: String(fd.get("desiredFeatures") || ""),
      budgetRange: String(fd.get("budgetRange") || ""),
      timeline: String(fd.get("timeline") || ""),
      existingUrl: String(fd.get("existingUrl") || ""),
      preferredContact: String(fd.get("preferredContact") || "Email"),
      source: String(fd.get("source") || ""),
      consent: fd.get("consent") === "on",
    };

    try {
      const res = await fetch("/api/project-enquiry", {
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
        setFormError("Something went wrong submitting your enquiry. Please try again, or call us directly.");
        return;
      }

      const { reference } = await res.json();
      router.push(`/thank-you?type=project&ref=${encodeURIComponent(reference)}`);
    } catch {
      setFormError("Something went wrong submitting your enquiry. Please try again, or call us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {formError && <p className="rounded-sm border border-error/30 bg-error/10 px-4 py-3.5 text-sm text-error">{formError}</p>}

      <div className="rounded-sm border border-border bg-surface-1 px-4 py-3.5 text-[13.5px] text-text-secondary dark:border-border-dark dark:bg-surface-dark-1">
        Please avoid submitting passwords, confidential credentials, or sensitive personal information through
        this form.
      </div>

      <h3 className="text-[15px] font-semibold">Your details</h3>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" required />
          <ErrorMessage>{errors.name}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor="company">Company / organisation</Label>
          <Input id="company" name="company" />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="email">Email address</Label>
          <Input id="email" name="email" type="email" required />
          <ErrorMessage>{errors.email}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor="phone">Phone number</Label>
          <Input id="phone" name="phone" type="tel" required />
          <ErrorMessage>{errors.phone}</ErrorMessage>
        </div>
      </div>
      <div>
        <Label htmlFor="country">Country</Label>
        <Input id="country" name="country" placeholder="e.g. Sri Lanka or Australia" />
      </div>

      <h3 className="pt-2 text-[15px] font-semibold">About the project</h3>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="projectType">Project type</Label>
          <Select id="projectType" name="projectType" required defaultValue="">
            <option value="" disabled>
              Select...
            </option>
            {PROJECT_TYPES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </Select>
          <ErrorMessage>{errors.projectType}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor="industry">Business industry</Label>
          <Input id="industry" name="industry" />
        </div>
      </div>
      <div>
        <Label htmlFor="projectTitle">Project title</Label>
        <Input id="projectTitle" name="projectTitle" required />
        <ErrorMessage>{errors.projectTitle}</ErrorMessage>
      </div>
      <div>
        <Label htmlFor="description">Project description</Label>
        <Textarea id="description" name="description" rows={4} required />
        <ErrorMessage>{errors.description}</ErrorMessage>
      </div>
      <div>
        <Label htmlFor="mainProblem">Main business problem</Label>
        <Textarea id="mainProblem" name="mainProblem" rows={3} required />
        <ErrorMessage>{errors.mainProblem}</ErrorMessage>
      </div>
      <div>
        <Label htmlFor="desiredFeatures">Desired features (optional)</Label>
        <Textarea id="desiredFeatures" name="desiredFeatures" rows={3} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="budgetRange">Estimated budget range</Label>
          <Select id="budgetRange" name="budgetRange" defaultValue="">
            <option value="">Prefer not to say</option>
            <option>Under $1,000</option>
            <option>$1,000 – $5,000</option>
            <option>$5,000 – $15,000</option>
            <option>$15,000 – $50,000</option>
            <option>$50,000+</option>
            <option>Not sure yet</option>
          </Select>
        </div>
        <div>
          <Label htmlFor="timeline">Desired timeline</Label>
          <Select id="timeline" name="timeline" defaultValue="">
            <option value="">Not sure yet</option>
            <option>ASAP</option>
            <option>Within 1 month</option>
            <option>1–3 months</option>
            <option>3–6 months</option>
            <option>Flexible</option>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="existingUrl">Existing website or application URL (if any)</Label>
        <Input id="existingUrl" name="existingUrl" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="preferredContact">Preferred contact method</Label>
          <Select id="preferredContact" name="preferredContact" defaultValue="Email">
            <option>Email</option>
            <option>Phone</option>
            <option>Either</option>
          </Select>
        </div>
        <div>
          <Label htmlFor="source">How did you hear about Kuluwa.digital?</Label>
          <Select id="source" name="source" defaultValue="">
            <option value="">Select...</option>
            <option>Search engine</option>
            <option>Social media</option>
            <option>Referral</option>
            <option>Existing client</option>
            <option>Other</option>
          </Select>
        </div>
      </div>

      <div className="flex items-start gap-2.5">
        <input type="checkbox" id="consent" name="consent" className="mt-1" required />
        <label htmlFor="consent" className="text-sm">
          I consent to be contacted by Kuluwa.digital regarding this project enquiry.
        </label>
      </div>

      <Button type="submit" className="w-full" disabled={submitting}>
        {submitting ? "Submitting..." : "Submit Project Enquiry"}
      </Button>
    </form>
  );
}
