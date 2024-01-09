import { Experiences } from "@/components/content/Experiences";
import { siteConfig } from "@/config";

export default function ResumePage() {

	return (
		<>
			<title>Resume | {siteConfig.title}</title>
			<section className="flex flex-col w-full max-w-6xl px-4 py-8 mx-auto items-center justify-evenly">
				<Experiences />
			</section>
		</>
	)
}
