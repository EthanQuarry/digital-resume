// import SharePost from "@/components/Blog/SharePost";
// import TagButton from "@/components/Blog/TagButton";
import { siteConfig } from "@/config";
import { getPost } from "@/sanity/queries";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
	params: { slug: string };
};

export default async function Post({ params }: Props) {
	const { slug } = params;
	const post = await getPost(slug);

	return (
		<>
			<title>{`${post?.title} - ${siteConfig.name}`}</title>

			<section className="py-16">
				<div className="container">
					<div className="-mx-4 flex flex-wrap justify-center">
						<div className="w-full px-4 lg:w-8/12">
							<div>
								<h1 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
									{post?.title}
								</h1>
								<div className="mb-10 flex flex-wrap items-center justify-between border-b border-stroke pb-4 dark:border-stroke-dark">
									<div className="flex flex-wrap items-center">
										<div className="mr-10 mb-5 flex items-center">
											<div className="mr-4">
												<div className="relative h-10 w-10 overflow-hidden rounded-full">
													<Image
														src={urlForImage(post?.author?.image).url()}
														alt={post?.author?.name}
														fill
													/>
												</div>
											</div>
											<div className="w-full">
												<h4 className="text-base text-body-color dark:text-body-color-dark">
													By
													<span> {post?.author?.name}</span>
												</h4>
											</div>
										</div>
										<div className="mb-5 flex items-center">
											<p className="mr-5 flex items-center text-base text-body-color dark:text-body-color-dark">
												{new Date(post?.publishedAt)
													.toDateString()
													.split(" ")
													.slice(1)
													.join(" ")}
											</p>
										</div>
									</div>
									<div className="mb-5">
										<a
											href="#0"
											className="inline-flex items-center justify-center rounded-full bg-primary py-2 px-4 text-sm font-semibold text-white duration-300 hover:bg-primary/90"
										>
											{post?.tags[0]}
										</a>
									</div>
								</div>
								<div>
									<div className="mb-10 w-full overflow-hidden rounded-sm">
										<div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
											<Image
												src={urlForImage(post?.mainImage).url()}
												alt="image"
												fill
												className="object-cover object-center"
											/>
										</div>
									</div>

									<div className="blog-details mb-12">
										<PortableText value={post?.body} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}