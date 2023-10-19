import { Experiences } from "@/components/content/Experiences";
import { siteConfig } from "@/config";

export default async function ResumePage() {

	return (
		<>
			<title>Resume | {siteConfig.title}</title>

			<section className="py-16">
				<div className="container">
					<Experiences />
				</div>
			</section>
		</>
	)
}
