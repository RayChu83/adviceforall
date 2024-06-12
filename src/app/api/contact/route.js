import EmailTemplate from "@/app/_components/emails/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Invalid fields. Please try again" },
        { status: 422 }
      );
    }
    const { data, error } = await resend.emails.send({
      from: "Contact <contactadviceforall@gmail.com>",
      to: process.env.PERSONAL_EMAIL,
      subject: "AdviceForAll - Contact Form Submission",
      react: EmailTemplate({ name, email, message }),
    });
    if (error) {
      return Response.json({ error }, { status: 500 });
    }
    return Response.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: error.message || "Something went wrong. Please try again" },
      { status: 500 }
    );
  }
}
