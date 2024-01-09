import Image from "next/image"
import { ContactForm } from "@/components/content/ContactForm";
import { siteConfig } from "@/config";
import Section from "@/components/layout/Section";

export default function ContactPage() {

	return (
		<>
			<title>Contact | {siteConfig.title}</title>

			<Section>
				<div className="container w-full flex flex-col justify-around items-center">
					<div className="flex flex-col mb-2 items-center">
						<h1 className="mb-2 text-2xl sm:text-4xl md:text-5xl">Get in touch with me.</h1>
						<Image src="/handcrafts/undraw_fun-underline.svg" alt="handcraft illustration" width={100} height={40} className="w-[68%]" />
					</div>
					<div className="mt-6 p-4 flex justify-center items-center w-full">
						<ContactForm />
					</div>
				</div>
			</Section>
		</>
	);
}
