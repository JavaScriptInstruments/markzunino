import { EmailTemplate } from "../../components/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { Name, Subject, Message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "contact@markzunino.vercel.app",
      to: "daimyoscriptor@gmail.com",
      subject: `${Subject}`,
      react: EmailTemplate({
        name: Name,
        content: Message,
      }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error.message);
  }
}
