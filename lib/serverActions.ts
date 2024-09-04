"use server";

import { Resend } from "resend";

export async function sendEmails(email: string, subject: string, message: string) {
	const resend = new Resend(process.env.RESEND_API_KEY);

	resend.emails.send({
		from: "matthew@matthewglasser.org",
		to: "matthewsglasser@gmail.com",
		subject: subject,
		html: `<p>${email}<br></br>${message}</p>`,
	});

	console.log(email, subject, message);
}
