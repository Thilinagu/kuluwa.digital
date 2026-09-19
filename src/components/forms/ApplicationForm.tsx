"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Label, Input, Textarea, Select, ErrorMessage } from "@/components/ui/FormField";
import { NoticeBanner } from "@/components/shared/NoticeBanner";

const STEPS = ["Personal", "Professional", "Preferences", "Skills", "Motivation", "Confirm"];

const ROLE_OPTIONS = [
  "IT Sales",
  "Business Development",
  "Business Analysis",
  "Project Coordination",
  "Client Relationship Management",
  "Web Development",
  "Mobile Development",
  "AI Development",
  "IoT Development",
  "UI/UX",
  "SEO",
  "Digital Marketing",
  "QA",
  "Other",
];

// Fields required to advance past each step (client-side gate only —
// the API route re-validates everything with Zod server-side).
const REQUIRED_BY_STEP: string[][] = [
  ["name", "email", "phone", "district"],
  [],
  [],
  [],
  ["whyJoin"],
  ["consentReview", "consentAccurate"],
];

export function ApplicationForm() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Record<string, string>>({ preferredContact: "Email" });
  const [roles, setRoles] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  function update(name: string, value: string) {
    setValues((v) => ({ ...v, [name]: value }));
  }

  function toggleRole(role: string) {
    setRoles((r) => (r.includes(role) ? r.filter((x) => x !== role) : [...r, role]));
  }

  function validateStep(): boolean {
    const required = REQUIRED_BY_STEP[step] ?? [];
    const newErrors: Record<string, string> = {};
    for (const field of required) {
      if (!values[field]) newErrors[field] = "This field is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function next() {
    if (!validateStep()) return;
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  }
  function back() {
    setStep((s) => Math.max(s - 1, 0));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validateStep()) return;
    setFormError(null);
    setSubmitting(true);

    const payload = {
      name: values.name || "",
      email: values.email || "",
      phone: values.phone || "",
      district: values.district || "",
      city: values.city,
      preferredContact: values.preferredContact,
      currentStatus: values.currentStatus,
      yearsExperience: values.yearsExperience,
      occupation: values.occupation,
      education: values.education,
      linkedinUrl: values.linkedinUrl,
      portfolioUrl: values.portfolioUrl,
      interestedRoles: roles,
      technicalSkills: values.technicalSkills,
      businessExperience: values.businessExperience,
      languages: values.languages,
      availability: values.availability,
      whyJoin: values.whyJoin || "",
      valueOffered: values.valueOffered,
      story: values.story,
      consentReview: values.consentReview === "true",
      consentAccurate: values.consentAccurate === "true",
    };

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.status === 400) {
        setFormError("Please check the highlighted fields and try again.");
        return;
      }
      if (!res.ok) {
        setFormError("Something went wrong submitting your application. Please try again.");
        return;
      }

      const { reference } = await res.json();
      router.push(`/thank-you?type=apply&ref=${encodeURIComponent(reference)}`);
    } catch {
      setFormError("Something went wrong submitting your application. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <div className="mb-9 flex flex-wrap gap-1.5">
        {STEPS.map((label, i) => (
          <div key={label} className="min-w-[70px] flex-1 text-center">
            <div className={`mb-2 h-1 rounded-full ${i <= step ? "bg-coral" : "bg-surface-2 dark:bg-surface-dark-2"}`} />
            <div className={`text-xs font-medium ${i === step ? "text-text-primary dark:text-text-dark-primary" : "text-text-secondary"}`}>
              {label}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} noValidate>
        {formError && <p className="mb-5 rounded-sm border border-error/30 bg-error/10 px-4 py-3.5 text-sm text-error">{formError}</p>}

        {step === 0 && (
          <div className="space-y-5">
            <h3 className="text-[16px] font-semibold">Personal information</h3>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor="name">Full name</Label>
                <Input id="name" value={values.name || ""} onChange={(e) => update("name", e.target.value)} />
                <ErrorMessage>{errors.name}</ErrorMessage>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={values.email || ""} onChange={(e) => update("email", e.target.value)} />
                <ErrorMessage>{errors.email}</ErrorMessage>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor="phone">Phone number</Label>
                <Input id="phone" type="tel" value={values.phone || ""} onChange={(e) => update("phone", e.target.value)} />
                <ErrorMessage>{errors.phone}</ErrorMessage>
              </div>
              <div>
                <Label htmlFor="district">District</Label>
                <Input id="district" value={values.district || ""} onChange={(e) => update("district", e.target.value)} />
                <ErrorMessage>{errors.district}</ErrorMessage>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor="city">City / general location</Label>
                <Input id="city" value={values.city || ""} onChange={(e) => update("city", e.target.value)} />
              </div>
              <div>
                <Label htmlFor="preferredContact">Preferred contact method</Label>
                <Select id="preferredContact" value={values.preferredContact} onChange={(e) => update("preferredContact", e.target.value)}>
                  <option>Email</option>
                  <option>Phone</option>
                  <option>WhatsApp</option>
                </Select>
              </div>
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-5">
            <h3 className="text-[16px] font-semibold">Professional information</h3>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor="currentStatus">Current status</Label>
                <Select id="currentStatus" value={values.currentStatus || ""} onChange={(e) => update("currentStatus", e.target.value)}>
                  <option>Student</option>
                  <option>Professional</option>
                  <option>Freelancer</option>
                  <option>Business owner</option>
                  <option>Retired professional</option>
                  <option>Other</option>
                </Select>
              </div>
              <div>
                <Label htmlFor="yearsExperience">Years of experience</Label>
                <Select id="yearsExperience" value={values.yearsExperience || ""} onChange={(e) => update("yearsExperience", e.target.value)}>
                  <option>0–1</option>
                  <option>1–3</option>
                  <option>3–5</option>
                  <option>5–10</option>
                  <option>10+</option>
                </Select>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor="occupation">Current occupation</Label>
                <Input id="occupation" value={values.occupation || ""} onChange={(e) => update("occupation", e.target.value)} />
              </div>
              <div>
                <Label htmlFor="education">Education</Label>
                <Input id="education" value={values.education || ""} onChange={(e) => update("education", e.target.value)} />
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor="linkedinUrl">LinkedIn URL (optional)</Label>
                <Input id="linkedinUrl" value={values.linkedinUrl || ""} onChange={(e) => update("linkedinUrl", e.target.value)} />
              </div>
              <div>
                <Label htmlFor="portfolioUrl">Portfolio / GitHub URL (optional)</Label>
                <Input id="portfolioUrl" value={values.portfolioUrl || ""} onChange={(e) => update("portfolioUrl", e.target.value)} />
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 className="text-[16px] font-semibold">Opportunity preferences</h3>
            <p className="mb-3.5 mt-1 text-[13.5px] text-text-secondary">Select all areas you&apos;re interested in.</p>
            <div className="grid gap-2.5 sm:grid-cols-2">
              {ROLE_OPTIONS.map((role) => (
                <label
                  key={role}
                  className="flex items-center gap-2 rounded-sm border border-border px-3 py-2.5 text-sm dark:border-border-dark"
                >
                  <input type="checkbox" checked={roles.includes(role)} onChange={() => toggleRole(role)} />
                  {role}
                </label>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-5">
            <h3 className="text-[16px] font-semibold">Skills and experience</h3>
            <div>
              <Label htmlFor="technicalSkills">Technical knowledge (languages, tools, platforms)</Label>
              <Textarea id="technicalSkills" rows={3} value={values.technicalSkills || ""} onChange={(e) => update("technicalSkills", e.target.value)} />
            </div>
            <div>
              <Label htmlFor="businessExperience">Business, sales or client-relationship experience</Label>
              <Textarea id="businessExperience" rows={3} value={values.businessExperience || ""} onChange={(e) => update("businessExperience", e.target.value)} />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor="languages">Languages spoken</Label>
                <Input id="languages" value={values.languages || ""} onChange={(e) => update("languages", e.target.value)} />
              </div>
              <div>
                <Label htmlFor="availability">Availability</Label>
                <Select id="availability" value={values.availability || ""} onChange={(e) => update("availability", e.target.value)}>
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Project-based</option>
                  <option>Flexible</option>
                </Select>
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-5">
            <h3 className="text-[16px] font-semibold">Motivation</h3>
            <div>
              <Label htmlFor="whyJoin">Why would you like to join the Kuluwa.digital network?</Label>
              <Textarea id="whyJoin" rows={4} value={values.whyJoin || ""} onChange={(e) => update("whyJoin", e.target.value)} />
              <ErrorMessage>{errors.whyJoin}</ErrorMessage>
            </div>
            <div>
              <Label htmlFor="valueOffered">What value could you bring to our network?</Label>
              <Textarea id="valueOffered" rows={3} value={values.valueOffered || ""} onChange={(e) => update("valueOffered", e.target.value)} />
            </div>
            <div>
              <Label htmlFor="story">Describe a time you found an opportunity, solved a problem, or helped someone achieve a goal.</Label>
              <Textarea id="story" rows={4} value={values.story || ""} onChange={(e) => update("story", e.target.value)} />
            </div>
          </div>
        )}

        {step === 5 && (
          <div>
            <h3 className="mb-3.5 text-[16px] font-semibold">Confirmation</h3>
            <NoticeBanner>
              You&apos;re almost done. Applying is completely free, every application is read by our team, and
              we&apos;ll follow up personally on next steps.
            </NoticeBanner>
            <div className="mb-4 flex items-start gap-2.5">
              <input
                type="checkbox"
                id="consentReview"
                checked={values.consentReview === "true"}
                onChange={(e) => update("consentReview", String(e.target.checked))}
                className="mt-1"
              />
              <label htmlFor="consentReview" className="text-sm">
                I consent to Kuluwa.digital reviewing this application and contacting me about it.
              </label>
            </div>
            <ErrorMessage>{errors.consentReview}</ErrorMessage>
            <div className="mb-4 flex items-start gap-2.5">
              <input
                type="checkbox"
                id="consentAccurate"
                checked={values.consentAccurate === "true"}
                onChange={(e) => update("consentAccurate", String(e.target.checked))}
                className="mt-1"
              />
              <label htmlFor="consentAccurate" className="text-sm">
                I declare that the information submitted is accurate to the best of my knowledge.
              </label>
            </div>
            <ErrorMessage>{errors.consentAccurate}</ErrorMessage>
          </div>
        )}

        <div className="mt-7 flex justify-between gap-3">
          <Button type="button" variant="secondary" onClick={back} className={step === 0 ? "invisible" : ""}>
            Back
          </Button>
          {step < STEPS.length - 1 ? (
            <Button type="button" onClick={next}>
              Continue
            </Button>
          ) : (
            <Button type="submit" disabled={submitting}>
              {submitting ? "Submitting..." : "Submit Application"}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
