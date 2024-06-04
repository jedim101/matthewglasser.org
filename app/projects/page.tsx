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
				I am one of the Lead Web Developers at{" "}
				<Link
					href="https://deaplearning.com"
					target="_blank"
					className="duration-150hover:text-blue-600 font-semibold text-blue-500">
					DeAP Learning Labs
				</Link>
				, an AI-powered AP study assistant, tutor, and grader. I play a major role in building the website both in
				designing it and adding functionality. I also lead development in many of our integrations to other services,
				such as Discord Bots.
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
				I am currently the CAD Leader of the Jaybots, but I have previously held roles as Manufacturer and Webmaster. I
				have developed the{" "}
				<Link
					href="https://jaybots.org"
					target="_blank"
					className="duration-150hover:text-blue-600 font-semibold text-blue-500">
					team website
				</Link>{" "}
				and played a significant role in the design, build, and code of the bot, as well as outreach events in our
				community.
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
				, an etsy shop that designs and 3D prints a variety of custom items for sale. I am currently working on updating
				and adding to the selection of items, creating a company website, and even building my own 3D printers.
			</>
		),
		image: "/images/3D Mania Prints.png",
		url: "https://3dmaniaprints.etsy.com",
		backgroundColor: "#7f1d1d",
	},
];

export default function Projects() {
	return (
		<main className="flex min-h-screen w-screen flex-col items-center space-y-16 bg-gray-900 p-12 pt-24">
			<TitleReveal className="h-16 text-6xl font-semibold text-white" text="Projects" />
			<StickyScroll content={content} />
		</main>
	);
}
