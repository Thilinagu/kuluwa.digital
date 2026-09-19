import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation/contact";
import { prisma } from "@/lib/prisma";
import { sendNotificationEmail } from "@/lib/email";
import { rateLimit, getClientIp } from "@/lib/ratelimit";
import { generateReference } from "@/lib/utils";

export async function POST(req: NextRequest) {
  const ip = getClientIp(req.headers);
  const { allowed } = rateLimit(`contact:${ip}`, 5, 60_000);
  if (!allowed) {
    return NextResponse.json({ error: "Too many submissions. Please try again in a minute." }, { status: 429 });
  }

  const body = await req.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Validation failed", issues: parsed.error.flatten() }, { status: 400 });
  }

  const reference = generateReference();
  const data = parsed.data;

  const submission = await prisma.contactSubmission.create({
    data: { reference, ...data },
  });

  const emailResult = await sendNotificationEmail(`New Contact Form Message — ${reference}`, {
    Reference: reference,
    Name: data.name,
    Email: data.email,
    Phone: data.phone,
    "Enquiry type": data.enquiryType,
    Subject: data.subject,
    Message: data.message,
  });

  if (emailResult.sent) {
    await prisma.contactSubmission.update({ where: { id: submission.id }, data: { emailedAt: new Date() } });
  }

  return NextResponse.json({ reference }, { status: 201 });
}
