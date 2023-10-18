import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";

export default function SinglePost({ post }: { post: any }) {
	const { title, mainImage, slug, metadata, author, tags, publishedAt } = post;

	return (
		<>
			<div
				className="wow fadeInUp relative overflow-hidden group rounded-md shadow duration-300"
				data-wow-delay=".1s"
			>
				<Link
					href={`/blog/${slug.current}`}
					className="relative block h-[220px] w-full overflow-hidden"
				>
					<Badge className="absolute top-6 right-6 z-20 capitalize">{tags[0]}</Badge>

					<Image
						src={urlForImage(mainImage).url()}
						alt={title}
						fill
						className=" group-hover:scale-125 group-hover:rotate-6 duration-300 transition-all"
					/>
				</Link>
				<div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
					<h3>
						<Link
							href={`/blog/${slug.current}`}
							className="mb-4 block text-xl font-bold text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary sm:text-[22px]"
						>
							{`${title.slice(0, 40)}...`}
						</Link>
					</h3>
					<p className="mb-6 border-b border-body-color/10 pb-6 text-base text-body-color dark:border-white/10 dark:text-body-color-dark">
						{metadata.slice(0, 100)}
					</p>
					<div className="flex items-center">
						<div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
							<div className="mr-4">
								<div className="relative h-10 w-10 overflow-hidden rounded-full">
									<Image
										src={urlForImage(author?.image).url()}
										alt={author?.name}
										fill
									/>
								</div>
							</div>
							<div className="w-full">
								<h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
									By {author?.name}
								</h4>

								<div className="text-xs text-body-color">
									<PortableText value={author?.bio} />
								</div>
							</div>
						</div>
						<div className="inline-block">
							<h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
								Date
							</h4>
							<p className="text-xs text-body-color dark:text-body-color-dark">
								{new Date(publishedAt)
									.toDateString()
									.split(" ")
									.slice(1)
									.join(" ")}
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}