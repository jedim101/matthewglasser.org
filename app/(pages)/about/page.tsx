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
				I&apos;m Matthew and I&apos;m a sophomore in high school! I do frontend & backend development. I have worked on
				many{" "}
				<Link href="/projects" className="duration-150hover:text-blue-600 font-semibold text-blue-500">
					projects
				</Link>
				, including websites, Discord bots, and other applications. In addition to Computer Science, I love Mechanical
				Engineering and Robotics, especially 3D printing, which is why I founded{" "}
				<Link
					href="https://3dmaniaprints.etsy.com"
					target="_blank"
					className="duration-150hover:text-blue-600 font-semibold text-blue-500">
					3D Mania Prints
				</Link>
				.
			</p>

			<p className="max-w-4xl text-lg text-gray-300">
				I mainly use JavaScript / TypeScript, Python, Java, Kotlin, and HTML/CSS. I have experience with resources like
				Node.js, Next.js, React, MongoDB, Figma, Tailwind CSS, Doppler, and more.
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
