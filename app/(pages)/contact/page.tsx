"use client";

import TitleReveal from "@/components/titleReveal";
import { getCalApi } from "@calcom/embed-react";
import { CalendarIcon } from "@heroicons/react/20/solid";
import { CalendarDaysIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect } from "react";

export default function Contact() {
	useEffect(() => {
		(async function () {
			const cal = await getCalApi({ namespace: "30min" });
			cal("ui", {
				theme: "dark",
				styles: { branding: { brandColor: "#000000" } },
				hideEventTypeDetails: false,
				layout: "month_view",
			});
			cal("preload", { calLink: "matthewglasser/30min" });
		})();
	}, []);

	return (
		<main className="flex min-h-screen w-screen flex-col items-center space-y-16 bg-gray-900 p-12 pt-24">
			<TitleReveal className="h-16 text-6xl font-semibold text-white" text="Contact" />
			<div className="relative flex w-full max-w-3xl gap-16">
				<div className="relative h-64 w-full">
					<div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-xl" />

					<button
						className="group relative z-50 flex h-full w-full flex-col items-center justify-center space-y-24 rounded-xl border border-slate-700 bg-gray-900 p-12 duration-300"
						data-cal-namespace="30min"
						data-cal-link="matthewglasser/30min"
						data-cal-config='{"layout":"month_view","theme":"dark"}'>
						<div className="flex flex-col items-center gap-2">
							<CalendarDaysIcon className="size-16 text-indigo-700" />
							<span className="text-xl font-bold">Book a Meeting</span>
						</div>
					</button>
				</div>

				<Link href="/email" className="relative w-full">
					<div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-xl" />

					<div className="relative z-50 flex h-full w-full flex-col items-center justify-center space-y-24 rounded-xl border border-slate-700 bg-gray-900 p-12">
						<div className="flex flex-col items-center gap-2">
							<EnvelopeIcon className="size-16 text-indigo-700" />
							<span className="text-xl font-bold">Email Me</span>
						</div>
					</div>
				</Link>
			</div>
		</main>
	);
}
