"use server";

import { Resend } from "resend";

export async function sendEmails(email: string, subject: string, message: string) {
	const resend = new Resend(process.env.RESEND_API_KEY);

	try {
		await resend.emails.send({
			from: "Matthew Glasser <matthew@matthewglasser.org>",
			to: "matthew@matthewglasser.org",
			reply_to: email.trim(),
			subject: `${subject.trim()}`,
			text: [`Email: ${email.trim()}`, `Subject: ${subject.trim()}`, `Message:\n${message.trim()}`].join("\n"),
		});

		await resend.emails.send({
			from: "Matthew Glasser <matthew@matthewglasser.org>",
			to: email.trim(),
			reply_to: "matthew@matthewglasser.org",
			subject: `Message Received: ${subject.trim()}`,
			text: "Thank you for contacting me! I will get back to you as soon as possible.\n\nBest regards,\nMatthew Glasser",
		});
	} catch (error) {
		console.error("Failed to send consultation email via Resend", error);
	}
}
