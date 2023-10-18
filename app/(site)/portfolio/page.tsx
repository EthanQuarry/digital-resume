import SingleProject from "@/components/content/Project";
import { siteConfig } from "@/config";
import { getProjects } from "@/sanity/queries";

export default async function ProjectPage() {
	const projects = await getProjects();

	return (
		<>
			<title>Portfolio | {siteConfig.title}</title>

			<section className="py-16">
				<div className="container">
					<div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
						{projects.length > 0 &&
							projects.map((project: any, index: number) => (
								<SingleProject key={index} project={project} />
							))}
					</div>
				</div>
			</section>
		</>
	);
}