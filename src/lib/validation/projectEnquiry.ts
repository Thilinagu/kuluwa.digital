import { z } from "zod";

export const PROJECT_TYPES = [
  "Website",
  "Web application",
  "Mobile application",
  "AI solution",
  "IoT solution",
  "Custom software",
  "E-commerce",
  "SEO",
  "Digital marketing",
  "UI/UX design",
  "Other",
] as const;

export const projectEnquirySchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  company: z.string().optional(),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(6, "Please enter a phone number."),
  country: z.string().optional(),
  projectType: z.enum(PROJECT_TYPES),
  industry: z.string().optional(),
  projectTitle: z.string().min(2, "Please give your project a short title."),
  description: z.string().min(10, "Please describe your project."),
  mainProblem: z.string().min(10, "Please describe the problem you're trying to solve."),
  desiredFeatures: z.string().optional(),
  budgetRange: z.string().optional(),
  timeline: z.string().optional(),
  existingUrl: z.string().optional(),
  preferredContact: z.enum(["Email", "Phone", "Either"]).optional(),
  source: z.string().optional(),
  consent: z.literal(true, { errorMap: () => ({ message: "Please confirm consent to be contacted." }) }),
});

export type ProjectEnquiryInput = z.infer<typeof projectEnquirySchema>;
