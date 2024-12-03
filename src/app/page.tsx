import { listPostsAPI } from "@/actions/posts-get";
import { Feed } from "@/components";

export default async function Home() {
  const { data: posts } = await listPostsAPI({ page: 1, perPage: 6 });

  return (
    <section className="container">
      <Feed posts={posts} />
    </section>
  );
}
