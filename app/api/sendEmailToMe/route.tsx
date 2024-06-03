import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export function POST(request: NextRequest) {
	resend.emails.send({
		from: "onboarding@resend.dev",
		to: "matthewsglasser@gmail.com",
		subject: "Hello World",
		html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
	});

	return NextResponse.json({});
}
