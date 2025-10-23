"use client";
import React from "react";
import { StickyScroll } from "@/components/sticky-scroll";
import TitleReveal from "@/components/titleReveal";
import Link from "next/link";

const content = [
	{
		title: "Jaybots FTC #16700",
		description: (
			<>
				I am the President of the Jaybots. I have served as CAD Leader and Manufacturer. In the 2024-25 season, The
				Jaybots qualified for the FTC World Championship. I was responsible for designing the robot, and I have played a
				significant role in building, coding, and running outreach events. View more at{" "}
				<Link
					href="https://jaybots.org"
					target="_blank"
					className="font-semibold text-blue-500 duration-150 hover:text-blue-600">
					jaybots.org
				</Link>
				.
			</>
		),
		image: "/images/jaybots-org.png",
		url: "https://jaybots.org",
		backgroundColor: "#172554",
	},
	{
		title: "Ember Learning",
		description: (
			<>
				I am the Lead Web Developer at Ember Learning, an AI-powered AP study assistant, tutor, and grader. I oversee
				the development of{" "}
				<Link
					href="https://emberlearning.org"
					target="_blank"
					className="font-semibold text-blue-500 duration-150 hover:text-blue-600">
					emberlearning.org
				</Link>
				, an AI-powered tool for teachers, and{" "}
				<Link
					href="https://deaplearning.com"
					target="_blank"
					className="font-semibold text-blue-500 duration-150 hover:text-blue-600">
					deaplearning.com
				</Link>
				, an AI-powered AP study assistant, tutor, and grader.
			</>
		),
		image: "/images/emberlearning-org.png",
		url: "https://emberlearning.org",
		backgroundColor: "#92400e",
	},
	{
		title: "3D Mania Prints",
		description: (
			<>
				I founded{" "}
				<Link
					href="https://3dmaniaprints.etsy.com"
					target="_blank"
					className="duration-150hover:text-blue-600 font-semibold text-blue-500">
					3D Mania Prints
				</Link>
				, an Etsy shop that designs and 3D prints a variety of custom items for sale. Currently, I am working on
				updating and expanding our selection of items.
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
