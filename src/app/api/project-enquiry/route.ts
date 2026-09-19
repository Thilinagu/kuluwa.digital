import { NextRequest, NextResponse } from "next/server";
import { projectEnquirySchema } from "@/lib/validation/projectEnquiry";
import { prisma } from "@/lib/prisma";
import { sendNotificationEmail } from "@/lib/email";
import { rateLimit, getClientIp } from "@/lib/ratelimit";
import { generateReference } from "@/lib/utils";

export async function POST(req: NextRequest) {
  const ip = getClientIp(req.headers);
  const { allowed } = rateLimit(`project-enquiry:${ip}`, 5, 60_000);
  if (!allowed) {
    return NextResponse.json({ error: "Too many submissions. Please try again in a minute." }, { status: 429 });
  }

  const body = await req.json().catch(() => null);
  const parsed = projectEnquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Validation failed", issues: parsed.error.flatten() }, { status: 400 });
  }

  const reference = generateReference();
  const data = parsed.data;

  const submission = await prisma.projectInquiry.create({
    data: { reference, ...data },
  });

  const emailResult = await sendNotificationEmail(`New Project Enquiry — ${reference}`, {
    Reference: reference,
    Name: data.name,
    Company: data.company,
    Email: data.email,
    Phone: data.phone,
    Country: data.country,
    "Project type": data.projectType,
    Industry: data.industry,
    "Project title": data.projectTitle,
    Description: data.description,
    "Main problem": data.mainProblem,
    "Desired features": data.desiredFeatures,
    Budget: data.budgetRange,
    Timeline: data.timeline,
    "Existing URL": data.existingUrl,
    "Preferred contact": data.preferredContact,
    "Heard via": data.source,
  });

  if (emailResult.sent) {
    await prisma.projectInquiry.update({ where: { id: submission.id }, data: { emailedAt: new Date() } });
  }

  return NextResponse.json({ reference }, { status: 201 });
}
