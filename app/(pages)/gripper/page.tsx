import TitleReveal from "@/components/titleReveal";
import Link from "next/link";

export default function Gripper() {
	return (
		<main className="flex min-h-screen w-screen flex-col items-center space-y-16 bg-gray-900 p-12">
			<TitleReveal className="h-16 text-6xl font-semibold text-white" text="Gripper" />

			<video src="/videos/gripper.mp4" controls className=" h-[100vh] rounded-lg"></video>

			<p>
				View the full portfolio here:{" "}
				<Link
					href="/portfolio/Gripper Design Portfolio.pdf"
					className="font-semibold text-blue-500 duration-150 hover:text-blue-600">
					Gripper Design Portfolio
				</Link>
			</p>
		</main>
	);
}
