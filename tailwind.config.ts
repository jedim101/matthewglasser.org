import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			keyframes: {
				wave: {
					"0%": { transform: "rotate(0deg)" },
					"10%": { transform: "rotate(15deg)" },
					"20%": { transform: "rotate(-5deg)" },
					"30%": { transform: "rotate(15deg)" },
					"40%": { transform: "rotate(-4deg)" },
					"50%": { transform: "rotate(10deg)" },
					"60%": { transform: "rotate(0deg)" },
				},
			},
			animation: {
				"waving-hand": "wave 2s linear infinite",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
export default config;
