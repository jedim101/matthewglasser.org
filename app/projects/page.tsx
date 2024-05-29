"use client";
import React from "react";
import { StickyScroll } from "@/components/sticky-scroll";

const content = [
	{
		title: "DeAP Learning Labs",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sunt nobis numquam ipsam tempora voluptas, enim, accusantium ipsa alias maxime esse magnam delectus blanditiis. Ipsa, totam fugit. Tempore expedita sint ullam quis reprehenderit aliquid, voluptates voluptas sequi quidem.",
		image: "/images/deaplearning-com.png",
		url: "https://deaplearning.com",
		backgroundColor: "#020617",
	},
	{
		title: "Jaybots FTC #16700",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sunt nobis numquam ipsam tempora voluptas, enim, accusantium ipsa alias maxime esse magnam delectus blanditiis. Ipsa, totam fugit. Tempore expedita sint ullam quis reprehenderit aliquid, voluptates voluptas sequi quidem.",
		image: "/images/jaybots-org.png",
		url: "https://jaybots.org",
		backgroundColor: "#172554",
	},
];

export default function Projects() {
	return (
		<main className="flex min-h-screen w-screen flex-col items-center bg-gray-900 p-12 pt-24">
			<StickyScroll content={content} />
		</main>
	);
}
