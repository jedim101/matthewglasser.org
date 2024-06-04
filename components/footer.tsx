import Link from "next/link";
import { GitHub, LinkedIn, Discord } from "./svg";

const links = [
	{ display: "Projects", href: "/projects" },
	{ display: "Contact", href: "/contact" },
	{ display: "About", href: "/about" },
];

const socials = [
	{ icon: <LinkedIn />, href: "https://www.linkedin.com/in/matthew-glasser/" },
	{ icon: <GitHub />, href: "https://github.com/jedim101" },
	{ icon: <Discord />, href: "https://discord.com/users/708753489630855198" },
];

export default function Footer() {
	return (
		<div className="text-slate font-sm flex w-full flex-col items-center space-y-4 border-t border-zinc-700 bg-zinc-900 p-10 text-sm font-light text-gray-400">
			<div className="flex justify-center space-x-8 text-base">
				{links.map((link) => (
					<Link href={link.href} key={link.display} className="hover:text-gray-200">
						{link.display}
					</Link>
				))}
			</div>
			<div className="h-px w-96 bg-gradient-to-r from-transparent via-gray-600" />
			<p>&copy; 2024 Matthew Glasser. All rights reserved.</p>
			<div className="flex justify-center space-x-4">
				{socials.map((social) => (
					<Link href={social.href} key={social.href} target="_blank" className="h-6 w-6 hover:text-gray-200">
						{social.icon}
					</Link>
				))}
			</div>
		</div>
	);
}
