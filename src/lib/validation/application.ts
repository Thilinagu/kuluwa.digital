import { z } from "zod";

export const applicationSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(6, "Please enter a phone number."),
  district: z.string().min(2, "Please enter your district."),
  city: z.string().optional(),
  preferredContact: z.enum(["Email", "Phone", "WhatsApp"]).optional(),
  currentStatus: z.string().optional(),
  yearsExperience: z.string().optional(),
  occupation: z.string().optional(),
  education: z.string().optional(),
  linkedinUrl: z.string().optional(),
  portfolioUrl: z.string().optional(),
  interestedRoles: z.array(z.string()).default([]),
  technicalSkills: z.string().optional(),
  businessExperience: z.string().optional(),
  languages: z.string().optional(),
  availability: z.string().optional(),
  whyJoin: z.string().min(10, "Please share a short answer."),
  valueOffered: z.string().optional(),
  story: z.string().optional(),
  consentReview: z.literal(true, { errorMap: () => ({ message: "Please confirm this consent to continue." }) }),
  consentAccurate: z.literal(true, { errorMap: () => ({ message: "Please confirm this declaration to continue." }) }),
});

export type ApplicationInput = z.infer<typeof applicationSchema>;
