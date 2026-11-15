import Image from "next/image";

export function PortfolioPhotoSection({
	title,
	description,
	image,
	url,
}: {
	title: string;
	description: string;
	image: string;
	url: string;
}) {
	return (
		<div>
			<h2>{title}</h2>
			<p>{description}</p>
			<Image src={image} alt={title} width={1000} height={1000} />
			<a href={url}>{url}</a>
		</div>
	);
}

export function PortfolioVideoSection({
	title,
	description,
	video,
}: {
	title: string;
	description: string;
	video: string;
}) {
	return (
		<div className="w-full max-w-7xl items-start justify-between">
			{/* <h2>{title}</h2> */}
			<div className="flex flex-col items-start justify-between md:flex-row">
				<p>{description}</p>
				<video src={video} className="w-1/3" />
			</div>
		</div>
	);
}
