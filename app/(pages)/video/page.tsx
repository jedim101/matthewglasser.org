"use client";
import TitleReveal from "@/components/titleReveal";
import { useSearchParams } from "next/navigation";

export default function Video() {
	const src = useSearchParams().get("src");
	if (!src) {
		return <div>No video found</div>;
	}

	return (
		<main className="flex min-h-screen w-screen flex-col items-center bg-gray-900 p-12">
			<TitleReveal
				className="h-16 text-6xl font-semibold text-white"
				text={src.split(".")[0].toUpperCase().replace(/-/g, " ")}
			/>

			<video src={`/videos/${src}`} controls className="h-[100vh] rounded-lg"></video>
		</main>
	);
}
