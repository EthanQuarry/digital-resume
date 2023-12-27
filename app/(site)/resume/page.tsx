import { Experiences } from "@/components/content/Experiences";
import { Intro } from "@/components/content/Intro";
import { siteConfig } from "@/config";

export default async function ResumePage() {

	return (
		<>
			<title>Resume | {siteConfig.title}</title>
			<section className="flex flex-col w-full max-w-6xl px-4 py-8 mx-auto items-center justify-evenly">
				<Intro />
				<Experiences />
			</section>
		</>
	)
}
