import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
	const requestJSON = await request.json();

	const { email, subject, message } = z
		.object({ email: z.string().email(), subject: z.string(), message: z.string() })
		.parse(requestJSON);

	resend.emails.send({
		from: "matthew@matthewglasser.org",
		to: "matthewsglasser@gmail.com",
		subject: subject,
		html: `<p>${email}\n\n${message}</p>`,
	});

	return NextResponse.json({});
}
