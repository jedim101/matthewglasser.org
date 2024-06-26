"use client";
import React from "react";
import Footer from "@/components/footer";
import { Vortex } from "@/components/vortex";
import Link from "next/link";
import TitleReveal from "@/components/titleReveal";

export default function Home() {
	return (
		<main className="min-h-screen w-screen bg-gray-950">
			<div className="mx-auto h-screen w-screen overflow-hidden">
				<Vortex
					rangeY={800}
					particleCount={300}
					baseHue={150}
					baseSpeed={0}
					className="flex h-full w-full flex-col items-center justify-center px-2 py-4 md:px-10">
					<TitleReveal
						className="flex h-[1/2vh] items-end text-center text-7xl font-semibold text-white"
						text="Matthew Glasser"
					/>
					{/* <div className="flex h-full flex-col items-center"> */}
					<p className="mt-6 max-w-xl text-center text-2xl text-gray-200">
						Full Stack Software Engineer & Web Developer
					</p>
					<div className="mt-6 flex flex-col items-center gap-4 sm:flex-row">
						<Link
							href="/projects"
							className="relative w-28 rounded-full border border-slate-800 bg-slate-900 py-2 text-center text-sm text-white transition duration-300 hover:border-slate-700 hover:bg-slate-800">
							<div className="absolute inset-x-0 -top-px mx-auto h-px w-1/2 bg-gradient-to-r  from-transparent via-indigo-500 to-transparent shadow-2xl" />
							<span className="relative z-20">Projects</span>
							<div className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r  from-transparent via-indigo-500 to-transparent shadow-2xl" />
						</Link>
						<Link
							href="/contact"
							className="relative w-28 rounded-full border border-slate-800 bg-slate-900 py-2 text-center text-sm text-white transition duration-300 hover:border-slate-700 hover:bg-slate-800">
							<div className="absolute inset-x-0 -top-px mx-auto h-px w-1/2 bg-gradient-to-r  from-transparent via-indigo-500 to-transparent shadow-2xl" />
							<span className="relative z-20">Contact</span>
							<div className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r  from-transparent via-indigo-500 to-transparent shadow-2xl" />
						</Link>
						<Link
							href="/about"
							className="relative w-28 rounded-full border border-slate-800 bg-slate-900 py-2 text-center text-sm text-white transition duration-300 hover:border-slate-700 hover:bg-slate-800">
							<div className="absolute inset-x-0 -top-px mx-auto h-px w-1/2 bg-gradient-to-r  from-transparent via-indigo-500 to-transparent shadow-2xl" />
							<span className="relative z-20">About</span>
							<div className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r  from-transparent via-indigo-500 to-transparent shadow-2xl" />
						</Link>
					</div>
					{/* </div> */}
				</Vortex>
			</div>
		</main>
	);
}
