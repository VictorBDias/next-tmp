import { IPost } from "@/actions/posts-get";
import { FeedPosts } from "./FeedPosts";

import styled from "./feed.module.css";

export const Feed = ({ posts }: { posts: IPost[] }) => {
  return (
    <div className={styled.container}>
      <FeedPosts posts={posts} />
    </div>
  );
};
