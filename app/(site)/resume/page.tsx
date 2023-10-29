import { Experiences } from "@/components/content/Experiences";
import { Intro } from "@/components/content/Intro";
import { siteConfig } from "@/config";

export default async function ResumePage() {

	return (
		<>
			<title>Resume | {siteConfig.title}</title>
            <section className="mb-2">
                <div className="container">
					<Intro />
				</div>
			<section className="py-4">
				<div className="container">
					<Experiences />
				</div>
			</section>
		</>
	)
}
