import { siteConfig } from "@/config";
import { getProjects } from "@/sanity/queries";
import SingleProject from "@/components/content/Project";
import Section from "@/components/layout/Section";

export default async function ProjectPage() {
	const projects = await getProjects();

	return (
		<>
			<title>Portfolio | {siteConfig.title}</title>

			<Section>
				<div className="container">
					<div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
						{projects.length > 0 &&
							projects.map((project: any, index: number) => (
								<SingleProject key={index} project={project} />
							))}
					</div>
				</div>
			</Section>
		</>
	);
}