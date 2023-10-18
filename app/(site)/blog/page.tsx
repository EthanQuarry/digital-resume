import SingleBlog from "@/components/content/Post";
import { siteConfig } from "@/config";
import { getPosts } from "@/sanity/queries";

export default async function BlogPage() {
	const posts = await getPosts();

	return (
		<>
			<title>Blog | {siteConfig.title}</title>

			<section className="py-16">
				<div className="container">
					<div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
						{posts.length > 0 &&
							posts.map((post: any, index: number) => (
								<SingleBlog key={index} post={post} />
							))}
					</div>
				</div>
			</section>
		</>
	);
}