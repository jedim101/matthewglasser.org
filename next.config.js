module.exports = {
	async redirects() {
		return [
			{
				source: "/schedule/15min",
				destination: "https://cal.com/matthewglasser/15min",
				permanent: true,
			},
			{
				source: "/schedule/30min",
				destination: "https://cal.com/matthewglasser/30min",
				permanent: true,
			},
		];
	},
};
