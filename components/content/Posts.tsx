import { getPosts } from "@/sanity/queries";
import SinglePost from "./Post";

const Posts = async () => {
	const posts = await getPosts();

	return (
		<section
			id="post"
			className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
		>
			<div className="container">
				<div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
					{posts.map((post: any, index: number) => (
						<SinglePost key={index} post={post} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Posts;