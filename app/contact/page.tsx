"use client";

import Link from "next/link";
import { useState } from "react";

export default function About() {
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	return (
		<main className="flex min-h-screen w-screen flex-col items-center space-y-16 bg-gray-900 p-12 pt-24">
			<h1 className="text-6xl font-semibold text-white">Contact</h1>

			<p className="max-w-4xl text-center text-lg text-gray-300">
				You can send me a message here, or email me at{" "}
				<Link
					href="mailto:matthew@matthewglasser.org"
					target="_blank"
					className="duration-150hover:text-blue-600 font-semibold text-blue-500">
					matthew@matthewglasser.org
				</Link>
				.
			</p>

			<form className="w-screen space-y-6 border-y border-white/10 bg-white/5 px-12 py-10 sm:max-w-xl sm:rounded-xl sm:border-x">
				<div className="space-y-2">
					<label htmlFor="email">Email</label>
					<input
						id="email"
						type="email"
						placeholder="matthew@matthewglasser.org"
						className="flex w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm ring-indigo-500 ring-offset-transparent focus-visible:outline-none focus-visible:ring-1"
						required
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
				</div>
				<div className="space-y-2">
					<label htmlFor="subject">Subject</label>
					<input
						id="subject"
						type="text"
						placeholder="Let's Chat!"
						className="flex w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm ring-indigo-500 ring-offset-transparent focus-visible:outline-none focus-visible:ring-1"
						required
						onChange={(e) => setSubject(e.target.value)}
						value={subject}
					/>
				</div>
				<div className="space-y-2">
					<label htmlFor="message">Message</label>
					<textarea
						id="message"
						placeholder="Your message here..."
						rows={8}
						className="flex w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm ring-indigo-500 ring-offset-transparent focus-visible:outline-none focus-visible:ring-1"
						required
						onChange={(e) => setMessage(e.target.value)}
						value={message}
					/>
				</div>
				<div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500" />
				<button className="group relative block h-10 w-full rounded-md border border-white/10 bg-white/5" type="submit">
					Send &rarr;
					<>
						<span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
						<span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover:opacity-100" />
					</>
				</button>
			</form>
		</main>
	);
}
