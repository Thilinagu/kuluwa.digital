import { describe, it, expect } from "vitest";
import { contactSchema } from "@/lib/validation/contact";
import { projectEnquirySchema } from "@/lib/validation/projectEnquiry";
import { applicationSchema } from "@/lib/validation/application";

describe("contactSchema", () => {
  it("accepts a valid submission", () => {
    const result = contactSchema.safeParse({
      name: "Jane Doe",
      email: "jane@example.com",
      enquiryType: "New project",
      subject: "Website enquiry",
      message: "I would like to discuss a new website.",
      consent: true,
    });
    expect(result.success).toBe(true);
  });

  it("rejects an invalid email", () => {
    const result = contactSchema.safeParse({
      name: "Jane Doe",
      email: "not-an-email",
      enquiryType: "New project",
      subject: "Website enquiry",
      message: "I would like to discuss a new website.",
      consent: true,
    });
    expect(result.success).toBe(false);
  });

  it("rejects missing consent", () => {
    const result = contactSchema.safeParse({
      name: "Jane Doe",
      email: "jane@example.com",
      enquiryType: "New project",
      subject: "Website enquiry",
      message: "I would like to discuss a new website.",
      consent: false,
    });
    expect(result.success).toBe(false);
  });
});

describe("projectEnquirySchema", () => {
  it("accepts a valid project enquiry", () => {
    const result = projectEnquirySchema.safeParse({
      name: "Jane Doe",
      email: "jane@example.com",
      phone: "+94712345678",
      projectType: "Website",
      projectTitle: "New corporate site",
      description: "We need a new corporate website.",
      mainProblem: "Our current site is outdated and not mobile friendly.",
      consent: true,
    });
    expect(result.success).toBe(true);
  });

  it("rejects an invalid project type", () => {
    const result = projectEnquirySchema.safeParse({
      name: "Jane Doe",
      email: "jane@example.com",
      phone: "+94712345678",
      projectType: "Spaceship",
      projectTitle: "New corporate site",
      description: "We need a new corporate website.",
      mainProblem: "Our current site is outdated.",
      consent: true,
    });
    expect(result.success).toBe(false);
  });
});

describe("applicationSchema", () => {
  it("accepts a valid application", () => {
    const result = applicationSchema.safeParse({
      name: "Jane Doe",
      email: "jane@example.com",
      phone: "+94712345678",
      district: "Colombo",
      whyJoin: "I want to contribute my sales experience to the network.",
      consentReview: true,
      consentAccurate: true,
    });
    expect(result.success).toBe(true);
  });

  it("rejects a missing required consent", () => {
    const result = applicationSchema.safeParse({
      name: "Jane Doe",
      email: "jane@example.com",
      phone: "+94712345678",
      district: "Colombo",
      whyJoin: "I want to contribute my sales experience to the network.",
      consentReview: true,
      consentAccurate: false,
    });
    expect(result.success).toBe(false);
  });
});
