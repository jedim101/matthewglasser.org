"use client";
import React from "react";
import { StickyScroll } from "@/components/sticky-scroll";
import TitleReveal from "@/components/titleReveal";

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
	{
		title: "3D Mania Prints",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sunt nobis numquam ipsam tempora voluptas, enim, accusantium ipsa alias maxime esse magnam delectus blanditiis. Ipsa, totam fugit. Tempore expedita sint ullam quis reprehenderit aliquid, voluptates voluptas sequi quidem.",
		image: "/images/3D Mania Prints.png",
		url: "https://3dmaniaprints.etsy.com",
		backgroundColor: "#7f1d1d",
	},
];

export default function Projects() {
	return (
		<main className="flex min-h-screen w-screen flex-col items-center space-y-16 bg-gray-900 p-12 pt-24">
			<TitleReveal className="text-6xl font-semibold text-white" text="Projects" />
			<StickyScroll content={content} />
		</main>
	);
}
