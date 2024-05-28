"use client";
import React from "react";
import { HeroParallax } from "@/components/hero-parallax";
import Footer from "@/components/footer";
import { Vortex } from "@/components/vortex";

// const images = [
// 	{
// 		title: "Moonbeam",
// 		link: "https://gomoonbeam.com",
// 		thumbnail: "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
// 	},
// 	{
// 		title: "Jaybots",
// 		link: "https://jaybots.org",
// 		thumbnail: "/images/jaybots-org.png",
// 	},
// 	{
// 		title: "Rogue",
// 		link: "https://userogue.com",
// 		thumbnail: "https://aceternity.com/images/products/thumbnails/new/rogue.png",
// 	},

// 	{
// 		title: "Editorially",
// 		link: "https://editorially.org",
// 		thumbnail: "https://aceternity.com/images/products/thumbnails/new/editorially.png",
// 	},
// 	{
// 		title: "Editrix AI",
// 		link: "https://editrix.ai",
// 		thumbnail: "https://aceternity.com/images/products/thumbnails/new/editrix.png",
// 	},
// 	{
// 		title: "DeAP Learning",
// 		link: "https://deaplearning.com",
// 		thumbnail: "/images/deaplearing-com.png",
// 	},
// 	{
// 		title: "Algochurn",
// 		link: "https://algochurn.com",
// 		thumbnail: "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
// 	},
// 	{
// 		title: "Aceternity UI",
// 		link: "https://ui.aceternity.com",
// 		thumbnail: "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
// 	},
// 	{
// 		title: "Tailwind Master Kit",
// 		link: "https://tailwindmasterkit.com",
// 		thumbnail: "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
// 	},
// 	{
// 		title: "SmartBridge",
// 		link: "https://smartbridgetech.com",
// 		thumbnail: "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
// 	},
// 	{
// 		title: "Renderwork Studio",
// 		link: "https://renderwork.studio",
// 		thumbnail: "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
// 	},

// 	{
// 		title: "Creme Digital",
// 		link: "https://cremedigital.com",
// 		thumbnail: "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
// 	},
// 	{
// 		title: "Golden Bells Academy",
// 		link: "https://goldenbellsacademy.com",
// 		thumbnail: "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
// 	},
// 	{
// 		title: "Invoker Labs",
// 		link: "https://invoker.lol",
// 		thumbnail: "https://aceternity.com/images/products/thumbnails/new/invoker.png",
// 	},
// 	{
// 		title: "E Free Invoice",
// 		link: "https://efreeinvoice.com",
// 		thumbnail: "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
// 	},
// ];

export default function HeroParallaxDemo() {
	return (
		<>
			{/* <HeroParallax images={images} /> */}
			<div className="mx-auto h-screen w-screen overflow-hidden rounded-md bg-gray-950">
				<Vortex
					rangeY={800}
					particleCount={500}
					baseHue={150}
					baseSpeed={0}
					className="flex h-full w-full flex-col items-center justify-center  px-2 py-4 md:px-10">
					<h2 className="text-center text-7xl font-bold text-white">Matthew Glasser</h2>
					<p className="mt-6 max-w-xl text-center text-xl text-gray-200">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, eveniet.
					</p>
					<div className="mt-6 flex flex-col items-center gap-4 sm:flex-row">
						<button className="rounded-lg bg-blue-600 px-4 py-2 text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset] transition duration-200 hover:bg-blue-700">
							Order now
						</button>
						<button className="px-4 py-2  text-white ">Watch trailer</button>
					</div>
				</Vortex>
			</div>
			<Footer />
		</>
	);
}
