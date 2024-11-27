import { listPostsAPI } from "@/apis/posts";
import { Feed } from "@/components/Feed";

export default async function Home() {
  const { data: posts } = await listPostsAPI({ page: 1, perPage: 2 });

  return (
    <section className="container">
      <Feed posts={posts} />
    </section>
  );
}
