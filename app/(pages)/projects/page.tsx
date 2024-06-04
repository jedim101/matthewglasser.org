"use client";
import React from "react";
import { StickyScroll } from "@/components/sticky-scroll";
import TitleReveal from "@/components/titleReveal";
import Link from "next/link";

const content = [
	{
		title: "DeAP Learning Labs",
		description: (
			<>
				I work as a Lead Web Developer at{" "}
				<Link
					href="https://deaplearning.com"
					target="_blank"
					className="duration-150hover:text-blue-600 font-semibold text-blue-500">
					DeAP Learning Labs
				</Link>
				, an AI-powered AP study assistant, tutor, and grader. I also oversee the development of various integrations
				with other services, such as Discord Bots.
			</>
		),
		image: "/images/deaplearning-com.png",
		url: "https://deaplearning.com",
		backgroundColor: "#020617",
	},
	{
		title: "Jaybots FTC #16700",
		description: (
			<>
				I currently serve as the CAD Leader of the Jaybots. Previously, I held positions as a Manufacturer and
				Webmaster. I was responsible for developing the{" "}
				<Link
					href="https://jaybots.org"
					target="_blank"
					className="duration-150hover:text-blue-600 font-semibold text-blue-500">
					team&apos;s website
				</Link>{" "}
				and played a significant role in designing, building, and coding the robot and participating in outreach events
				within our community.
			</>
		),
		image: "/images/jaybots-org.png",
		url: "https://jaybots.org",
		backgroundColor: "#172554",
	},
	{
		title: "3D Mania Prints",
		description: (
			<>
				In 2023, I founded{" "}
				<Link
					href="https://3dmaniaprints.etsy.com"
					target="_blank"
					className="duration-150hover:text-blue-600 font-semibold text-blue-500">
					3D Mania Prints
				</Link>
				, an Etsy shop that designs and 3D prints a variety of custom items for sale. Currently, I am working on
				updating and expanding our selection of items, creating a website, and even building custom 3D printers.
			</>
		),
		image: "/images/3D Mania Prints.png",
		url: "https://3dmaniaprints.etsy.com",
		backgroundColor: "#7f1d1d",
	},
];

export default function Projects() {
	return (
		<main className="flex min-h-screen w-screen flex-col items-center space-y-16 bg-gray-900 pt-24">
			<TitleReveal className="h-16 text-6xl font-semibold text-white" text="Projects" />
			<StickyScroll content={content} />
		</main>
	);
}
