import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  enquiryType: z.enum([
    "New project",
    "Existing project",
    "Service question",
    "Partnership",
    "Team opportunity",
    "General enquiry",
  ]),
  subject: z.string().min(2, "Please add a subject."),
  message: z.string().min(10, "Please enter a message (at least 10 characters)."),
  consent: z.literal(true, { errorMap: () => ({ message: "Please confirm consent to be contacted." }) }),
});

export type ContactInput = z.infer<typeof contactSchema>;
