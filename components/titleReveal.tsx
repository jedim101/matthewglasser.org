"use client";

import { useEffect, useState } from "react";

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function TitleReveal({ text, className }: { text: string; className: string }) {
	const [displayText, setDisplayText] = useState("");

	useEffect(() => {
		let iterations = 0;
		const interval = setInterval(() => {
			setDisplayText(
				text.substring(0, iterations / 2) +
					text
						.substring(iterations / 2)
						.split("")
						.map((e) => (e === " " ? " " : characters[Math.floor(Math.random() * characters.length)]))
						.join(""),
			);
			console.log(iterations);

			if (displayText === text) clearInterval(interval);

			iterations++;
		}, 50);
	}, []);

	return <h1 className={`font-mono uppercase ${className}`}>{displayText}</h1>;
}
