import Link from "next/link";
import { GitHub, LinkedIn } from "./svg";

const links = [
	{ display: "Contact", href: "/contact" },
	{ display: "Projects", href: "/projects" },
	{ display: "About", href: "/about" },
];

const socials = [
	{ icon: <LinkedIn />, href: "https://www.linkedin.com/in/matthew-glasser/" },
	{ icon: <GitHub />, href: "https://github.com/jedim101" },
];

export default function Footer() {
	return (
		<div className="text-slate font-sm flex w-full flex-col items-center border-t border-slate-700/40 bg-slate-500/20 p-10 text-sm font-light text-gray-400">
			<div className="mb-4 flex w-1/3 justify-center space-x-8 border-b border-gray-600 px-10 pb-4 text-base">
				{links.map((link) => (
					<Link href={link.href} key={link.display} className="hover:text-gray-200">
						{link.display}
					</Link>
				))}
			</div>
			&copy; 2024 Matthew Glasser. All rights reserved.
			<div className="flex justify-center space-x-4 pt-4">
				{socials.map((social) => (
					<Link href={social.href} key={social.href} className="h-6 w-6 hover:text-gray-200">
						{social.icon}
					</Link>
				))}
			</div>
		</div>
	);
}
