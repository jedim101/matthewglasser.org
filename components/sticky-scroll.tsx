"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const StickyScroll = ({
	content,
	contentClassName,
}: {
	content: {
		title: string;
		description: string;
		image: string;
		backgroundColor: string;
		url: string;
	}[];
	contentClassName?: string;
}) => {
	const [activeCard, setActiveCard] = React.useState(0);
	const ref = useRef<any>(null);
	const { scrollYProgress } = useScroll({
		// uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
		// target: ref
		container: ref,
		offset: ["start start", "end start"],
	});
	const cardLength = content.length;

	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		const cardsBreakpoints = content.map((_, index) => index / cardLength);
		const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
			const distance = Math.abs(latest - breakpoint);
			if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
				return index;
			}
			return acc;
		}, 0);
		setActiveCard(closestBreakpointIndex);
	});

	return (
		<motion.div
			animate={{
				backgroundColor: content.map((item) => item.backgroundColor)[activeCard],
			}}
			className="relative h-[30rem] max-w-6xl justify-center space-x-10 overflow-y-auto rounded-xl border border-slate-600 p-10 md:flex"
			ref={ref}>
			<div className="div relative flex items-start px-4">
				<div className="h-fit max-w-2xl">
					{content.map((item, index) => (
						<div key={item.title + index} className="my-20">
							<motion.h2
								initial={{
									opacity: 0,
								}}
								animate={{
									opacity: activeCard === index ? 1 : 0.3,
								}}
								className="text-2xl font-bold text-slate-100">
								{item.title}
							</motion.h2>
							<motion.p
								initial={{
									opacity: 0,
								}}
								animate={{
									opacity: activeCard === index ? 1 : 0.3,
								}}
								className="text-kg mt-10 max-w-sm text-slate-300">
								{item.description}
							</motion.p>
						</div>
					))}
					<div className="h-10" />
				</div>
			</div>
			<Link
				href={content[activeCard].url}
				className="sticky top-0 hidden w-96 items-center overflow-hidden duration-150 hover:scale-110 lg:flex">
				<div className="aspect-video w-full overflow-hidden rounded-lg border border-slate-600">
					<Image src={content[activeCard].image} width={384} height={216} alt="project image" className="w-full" />
				</div>
			</Link>
		</motion.div>
	);
};
