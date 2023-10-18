import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function SingleProject({ project }: { project: any }) {
	const { name, image, slug, url, description } = project;

	return (
		<>
			<div
				className="p-2 wow fadeInUp relative overflow-hidden group rounded-md bg-card shadow duration-300"
				data-wow-delay=".1s"
			>
				<Link
					href={`/portfolio/${slug.current}`}
					className="relative block h-[220px] w-full overflow-hidden"
				>
					<Image
						src={urlForImage(image).url()}
						alt={name}
						fill
						className=" group-hover:scale-125 group-hover:rotate-6 duration-300 transition-all"
					/>
				</Link>
				<div className="p-2 flex justify-between items-start w-full">
					<div className="flex flex-col justify-start items-start">
						<Link
							href={`/portfolio/${slug.current}`}
							className="mb-2 block text-xl font-bold text-foreground duration-300 hover:text-primary"
						>
							<h3>{`${name.slice(0, 40)}`}</h3>
						</Link>
						<p className="mb-2 text-sm text-muted-foreground">
							{`${description?.slice(0, 100)}...`}
						</p>
					</div>
					<Link href={url} target="_blank">
						<Button>See Demo</Button>
					</Link>
				</div>
			</div>
		</>
	);
}