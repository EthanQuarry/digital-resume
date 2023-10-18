// import ShareProject from "@/components/Blog/ShareProject";
// import TagButton from "@/components/Blog/TagButton";
import { siteConfig } from "@/config";
import { getProject } from "@/sanity/queries";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Props = {
	params: { slug: string };
};

export default async function Project({ params }: Props) {
	const { slug } = params;
	const project = await getProject(slug);

	return (
		<>
			<title>{`${project?.name} - ${siteConfig.name}`}</title>

			<section className="py-16">
				<div className="container">
					<div className="-mx-4 flex flex-wrap justify-center">
						<div className="w-full px-4 lg:w-8/12">
							<div>
								<div className="flex justify-between w-full items-start">
									<h1 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
										{project?.name}
									</h1>
									<Link href={project?.url} target="_blank">
										<Button>See Demo</Button>
									</Link>
								</div>
								<div className="mb-10 flex flex-wrap items-center justify-between border-b border-stroke pb-4 dark:border-stroke-dark">
									{project?.description}
								</div>
								<div>
									<div className="mb-10 w-full overflow-hidden rounded-sm">
										<div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
											<Image
												src={urlForImage(project?.image).url()}
												alt="image"
												fill
												className="object-cover object-center"
											/>
										</div>
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