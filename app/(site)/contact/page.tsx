import { ContactForm } from "@/components/content/ContactForm";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config";

export default async function ContactPage() {

	return (
		<>
			<title>Contact | {siteConfig.title}</title>
			<script src="https://www.google.com/recaptcha/api.js" async defer></script>

			<section className="py-8 w-full min-h-[calc(100vh-12rem)]">
				<div className="container w-full flex flex-col justify-around items-center">
					<h1 className="mb-6 text-2xl sm:text-4xl md:text-5xl">Get in touch with me.</h1>
					<div className="mt-6 p-4 flex justify-center items-center w-full">
						<ContactForm />
					</div>
				</div>
			</section>
		</>
	);
}