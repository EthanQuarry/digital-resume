import { getProjects } from "@/sanity/queries";
import SingleProject from "./Project";

const Projects = async () => {
	const projects = await getProjects();

	return (
		<section
			id="project"
			className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
		>
			<div className="container">
				<div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
					{projects.map((project: any, index: number) => (
						<SingleProject key={index} project={project} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;