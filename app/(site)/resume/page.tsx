import { Experiences } from "@/components/content/Experiences";
import { Intro } from "@/components/content/Intro";
import { siteConfig } from "@/config";

export default async function ResumePage() {

	return (
		<>
			<title>Resume | {siteConfig.title}</title>
			<section className="py-4">
				<div className="container flex flex-col items-center justify-evenly">
					<Intro />
					<Experiences />
				</div>
			</section>
		</>
	)
}
