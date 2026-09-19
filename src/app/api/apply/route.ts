import { NextRequest, NextResponse } from "next/server";
import { applicationSchema } from "@/lib/validation/application";
import { prisma } from "@/lib/prisma";
import { sendNotificationEmail } from "@/lib/email";
import { rateLimit, getClientIp } from "@/lib/ratelimit";
import { generateReference } from "@/lib/utils";

export async function POST(req: NextRequest) {
  const ip = getClientIp(req.headers);
  const { allowed } = rateLimit(`apply:${ip}`, 3, 60_000);
  if (!allowed) {
    return NextResponse.json({ error: "Too many submissions. Please try again in a minute." }, { status: 429 });
  }

  const body = await req.json().catch(() => null);
  const parsed = applicationSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Validation failed", issues: parsed.error.flatten() }, { status: 400 });
  }

  const reference = generateReference();
  const data = parsed.data;

  const submission = await prisma.application.create({
    data: { reference, ...data },
  });

  const emailResult = await sendNotificationEmail(`New Team Application — ${reference}`, {
    Reference: reference,
    Name: data.name,
    Email: data.email,
    Phone: data.phone,
    District: data.district,
    City: data.city,
    "Preferred contact": data.preferredContact,
    Status: data.currentStatus,
    "Years experience": data.yearsExperience,
    Occupation: data.occupation,
    Education: data.education,
    LinkedIn: data.linkedinUrl,
    Portfolio: data.portfolioUrl,
    "Interested in": data.interestedRoles.join(", "),
    "Technical skills": data.technicalSkills,
    "Business experience": data.businessExperience,
    Languages: data.languages,
    Availability: data.availability,
    "Why join": data.whyJoin,
    "Value offered": data.valueOffered,
    Story: data.story,
  });

  if (emailResult.sent) {
    await prisma.application.update({ where: { id: submission.id }, data: { emailedAt: new Date() } });
  }

  return NextResponse.json({ reference }, { status: 201 });
}
