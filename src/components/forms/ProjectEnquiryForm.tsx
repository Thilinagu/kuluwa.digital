"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Label, Input, Textarea, Select, ErrorMessage } from "@/components/ui/FormField";
import { PROJECT_TYPES } from "@/lib/validation/projectEnquiry";

interface ProjectEnquiryValues {
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  projectType: string;
  industry: string;
  projectTitle: string;
  description: string;
  mainProblem: string;
  desiredFeatures: string;
  budgetRange: string;
  timeline: string;
  existingUrl: string;
  preferredContact: string;
  source: string;
  consent: string;
}

// Regex validation patterns
const NAME_REGEX = /^[a-zA-Z\s'-]+$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\+?[0-9\s\-()]{7,15}$/;
const URL_REGEX = /^https?:\/\/.+/i;

export function ProjectEnquiryForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<string | null>(null);

  const [values, setValues] = useState<ProjectEnquiryValues>({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    projectType: "",
    industry: "",
    projectTitle: "",
    description: "",
    mainProblem: "",
    desiredFeatures: "",
    budgetRange: "",
    timeline: "",
    existingUrl: "",
    preferredContact: "Email",
    source: "",
    consent: "false",
  });

  function updateField(name: keyof ProjectEnquiryValues, value: string) {
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

    // 3. Phone Number
    const phone = values.phone.trim();
    if (!phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!PHONE_REGEX.test(phone)) {
      newErrors.phone = "Please enter a valid phone number (digits only, 7–15 numbers).";
    }

    // 4. Country (Optional format check if provided)
    const country = values.country.trim();
    if (country && !NAME_REGEX.test(country)) {
      newErrors.country = "Country name can only contain letters and spaces.";
    }

    // 5. Project Type
    if (!values.projectType) {
      newErrors.projectType = "Please select a project type.";
    }

    // 6. Project Title
    if (!values.projectTitle.trim()) {
      newErrors.projectTitle = "Project title is required.";
    }

    // 7. Project Description
    if (!values.description.trim()) {
      newErrors.description = "Project description is required.";
    }

    // 8. Main Business Problem
    if (!values.mainProblem.trim()) {
      newErrors.mainProblem = "Main business problem is required.";
    }

    // 9. Existing URL (Optional format check)
    const url = values.existingUrl.trim();
    if (url && !URL_REGEX.test(url)) {
      newErrors.existingUrl = "Please enter a valid URL starting with http:// or https://";
    }

    // 10. Consent Checkbox
    if (values.consent !== "true") {
      newErrors.consent = "You must consent to be contacted regarding this enquiry.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError(null);

    if (!validateForm()) {
      setFormError("Please check the highlighted fields below.");
      return;
    }

    setSubmitting(true);

    const payload = {
      name: values.name.trim(),
      company: values.company.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      country: values.country.trim(),
      projectType: values.projectType,
      industry: values.industry.trim(),
      projectTitle: values.projectTitle.trim(),
      description: values.description.trim(),
      mainProblem: values.mainProblem.trim(),
      desiredFeatures: values.desiredFeatures.trim(),
      budgetRange: values.budgetRange,
      timeline: values.timeline,
      existingUrl: values.existingUrl.trim(),
      preferredContact: values.preferredContact,
      source: values.source,
      consent: values.consent === "true",
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
        Please avoid submitting passwords, confidential credentials, or sensitive personal information through this form.
      </div>

      <h3 className="text-[15px] font-semibold">Your details</h3>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Full name</Label>
          <Input
            id="name"
            name="name"
            value={values.name}
            onChange={(e) => updateField("name", e.target.value)}
          />
          <ErrorMessage>{errors.name}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor="company">Company / organisation</Label>
          <Input
            id="company"
            name="company"
            value={values.company}
            onChange={(e) => updateField("company", e.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
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
        <div>
          <Label htmlFor="phone">Phone number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={(e) => updateField("phone", e.target.value)}
          />
          <ErrorMessage>{errors.phone}</ErrorMessage>
        </div>
      </div>

      <div>
        <Label htmlFor="country">Country</Label>
        <Input
          id="country"
          name="country"
          placeholder="e.g. Sri Lanka or Australia"
          value={values.country}
          onChange={(e) => updateField("country", e.target.value)}
        />
        <ErrorMessage>{errors.country}</ErrorMessage>
      </div>

      <h3 className="pt-2 text-[15px] font-semibold">About the project</h3>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="projectType">Project type</Label>
          <Select
            id="projectType"
            name="projectType"
            value={values.projectType}
            onChange={(e) => updateField("projectType", e.target.value)}
          >
            <option value="" disabled>
              Select...
            </option>
            {PROJECT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </Select>
          <ErrorMessage>{errors.projectType}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor="industry">Business industry</Label>
          <Input
            id="industry"
            name="industry"
            value={values.industry}
            onChange={(e) => updateField("industry", e.target.value)}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="projectTitle">Project title</Label>
        <Input
          id="projectTitle"
          name="projectTitle"
          value={values.projectTitle}
          onChange={(e) => updateField("projectTitle", e.target.value)}
        />
        <ErrorMessage>{errors.projectTitle}</ErrorMessage>
      </div>

      <div>
        <Label htmlFor="description">Project description</Label>
        <Textarea
          id="description"
          name="description"
          rows={4}
          value={values.description}
          onChange={(e) => updateField("description", e.target.value)}
        />
        <ErrorMessage>{errors.description}</ErrorMessage>
      </div>

      <div>
        <Label htmlFor="mainProblem">Main business problem</Label>
        <Textarea
          id="mainProblem"
          name="mainProblem"
          rows={3}
          value={values.mainProblem}
          onChange={(e) => updateField("mainProblem", e.target.value)}
        />
        <ErrorMessage>{errors.mainProblem}</ErrorMessage>
      </div>

      <div>
        <Label htmlFor="desiredFeatures">Desired features (optional)</Label>
        <Textarea
          id="desiredFeatures"
          name="desiredFeatures"
          rows={3}
          value={values.desiredFeatures}
          onChange={(e) => updateField("desiredFeatures", e.target.value)}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="budgetRange">Estimated budget range</Label>
          <Select
            id="budgetRange"
            name="budgetRange"
            value={values.budgetRange}
            onChange={(e) => updateField("budgetRange", e.target.value)}
          >
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
          <Select
            id="timeline"
            name="timeline"
            value={values.timeline}
            onChange={(e) => updateField("timeline", e.target.value)}
          >
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
        <Input
          id="existingUrl"
          name="existingUrl"
          value={values.existingUrl}
          onChange={(e) => updateField("existingUrl", e.target.value)}
        />
        <ErrorMessage>{errors.existingUrl}</ErrorMessage>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="preferredContact">Preferred contact method</Label>
          <Select
            id="preferredContact"
            name="preferredContact"
            value={values.preferredContact}
            onChange={(e) => updateField("preferredContact", e.target.value)}
          >
            <option>Email</option>
            <option>Phone</option>
            <option>Either</option>
          </Select>
        </div>
        <div>
          <Label htmlFor="source">How did you hear about Kuluwa.digital?</Label>
          <Select
            id="source"
            name="source"
            value={values.source}
            onChange={(e) => updateField("source", e.target.value)}
          >
            <option value="">Select...</option>
            <option>Search engine</option>
            <option>Social media</option>
            <option>Referral</option>
            <option>Existing client</option>
            <option>Other</option>
          </Select>
        </div>
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
            I consent to be contacted by Kuluwa.digital regarding this project enquiry.
          </label>
        </div>
        <ErrorMessage>{errors.consent}</ErrorMessage>
      </div>

      <Button type="submit" className="w-full" disabled={submitting}>
        {submitting ? "Submitting..." : "Submit Project Enquiry"}
      </Button>
    </form>
  );
}