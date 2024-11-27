import { IPost } from "@/apis/posts";

interface FeedProps {
  posts: IPost[];
}

export const Feed = ({ posts }: FeedProps) => {
  return (
    <div>
      <h1>Feed</h1>

      {posts?.map((post) => (
        <div key={post.id}>
          <p>{post.author}</p>
        </div>
      ))}
    </div>
  );
};
