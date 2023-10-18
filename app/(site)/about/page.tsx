import { siteConfig } from "@/config";

export default async function AboutPage() {

	return (
		<>
			<title>About | {siteConfig.title}</title>

			<section className="py-16">
				<div className="container">
				</div>
			</section>
		</>
	);
}