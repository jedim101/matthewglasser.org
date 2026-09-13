import TitleReveal from "@/components/titleReveal";
import Link from "next/link";

export default function About() {
	return (
		<main className="flex min-h-screen w-screen flex-col items-center space-y-16 bg-gray-900 p-12 pt-24 text-center">
			<TitleReveal className="h-16 text-6xl font-semibold text-white" text="About" />
			<h2 className="flex text-4xl font-semibold text-gray-200">
				<span className="mr-2 animate-waving-hand">👋</span>Hi! I&apos;m Matthew
			</h2>

			<p className="max-w-4xl text-lg text-gray-300">
				I&apos;m Matthew, a sophomore at Georgia Tech studying Mechanical Engineering. I have worked on many{" "}
				<Link href="/projects" className="font-semibold text-blue-500 duration-150 hover:text-blue-600">
					projects
				</Link>
				, including building robots, websites, and other applications. In addition to Mechanical Engineering and
				Robotics, I love Computer Science. I&apos;m also an Eagle Scout!
			</p>

			<p className="max-w-4xl text-lg text-gray-300">
				I&apos;m proficient in CAD, including OnShape, SolidWorks, Fusion 360, and Blender. I have experience
				manufacturing parts with 3D Printing (FDM & SLA), CNC Machining (Router, Waterjet, Mill), and Manual Machining
				(Mill, Lathe). I have experience with programming languages including C++, MATLAB, Python, Java, JavaScript, and
				more.
			</p>

			<p className="max-w-4xl text-lg text-gray-300">
				You can reach out at{" "}
				<Link href="/contact" className="font-semibold text-blue-500 duration-150 hover:text-blue-600">
					matthewglasser.org/contact
				</Link>{" "}
				or send me an email at{" "}
				<Link
					href="mailto:matthew@matthewglasser.org"
					target="_blank"
					className="font-semibold text-blue-500 duration-150 hover:text-blue-600">
					matthew@matthewglasser.org
				</Link>
				. You can also find me on{" "}
				<Link
					href="https://linkedin.com/in/matthew-glasser"
					target="_blank"
					className="font-semibold text-blue-500 duration-150 hover:text-blue-600">
					LinkedIn
				</Link>
				,{" "}
				<Link
					href="https://github.com/jedim101"
					target="_blank"
					className="font-semibold text-blue-500 duration-150 hover:text-blue-600">
					GitHub
				</Link>
				, and{" "}
				<Link
					href="https://discord.com/users/708753489630855198"
					target="_blank"
					className="font-semibold text-blue-500 duration-150 hover:text-blue-600">
					Discord
				</Link>
				.
			</p>
		</main>
	);
}
