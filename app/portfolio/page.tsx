import TitleReveal from "@/components/titleReveal";
import Image from "next/image";
import Link from "next/link";

const portfolios = [
	{ name: "Rubik's Cube", href: "/portfolio/Rubik's Cube Portfolio.pdf", image: "/images/rubiks.jpg" },
	{
		name: "Script Generator",
		href: "/portfolio/Script Generator Portfolio.pdf",
		image: "/images/script_generator.png",
	},
	{ name: "Gripper", href: "/portfolio/Gripper Design Portfolio.pdf", image: "/images/gripper.jpg" },
	{ name: "Links & Other Projects", href: "/portfolio/Links.pdf" },
];

export default function Portfolio() {
	return (
		<main className="flex min-h-screen w-screen flex-col items-center space-y-16 bg-gray-900 p-12 pt-24">
			<TitleReveal className="h-16 text-6xl font-semibold text-white" text="Portfolio" />
			<div className="flex w-full justify-center md:px-24">
				<div className="grid w-full max-w-5xl grid-cols-1 gap-8 xl:grid-cols-2">
					{portfolios.map((portfolio) => (
						<div className="relative mx-auto flex w-full max-w-2xl gap-16" key={portfolio.name}>
							<Link href={portfolio.href} className="relative w-full">
								<div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-xl" />

								<div className="relative z-50 flex h-full w-full flex-col items-center justify-center space-y-24 rounded-xl border border-slate-700 bg-gray-900 p-8">
									<div
										className={`flex w-full items-center gap-4 ${portfolio.image ? "justify-between" : "justify-center"}`}>
										<span className="text-lg font-bold text-gray-200 md:text-2xl">{portfolio.name}</span>
										{portfolio.image && (
											<Image
												src={portfolio.image}
												alt={portfolio.name}
												width={1000}
												height={1000}
												className="h-24 w-auto rounded-xl md:h-36"
											/>
										)}
									</div>
								</div>
							</Link>
						</div>
					))}
				</div>
			</div>
		</main>
	);
}
