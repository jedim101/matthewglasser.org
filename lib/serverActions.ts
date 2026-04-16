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
      text: [
        `Email: ${email.trim()}`,
        `Subject: ${subject.trim()}`,
        `Message:\n${message.trim()}`,
      ].join("\n"),
    });
  } catch (error) {
    console.error("Failed to send consultation email via Resend", error);
  }
}
