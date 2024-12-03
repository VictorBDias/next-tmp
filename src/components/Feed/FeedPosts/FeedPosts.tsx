import { IPost } from "@/actions/posts-get";
import Image from "next/image";
import Link from "next/link";

import styled from "./feed-posts.module.css";

export const FeedPosts = ({ posts }: { posts: IPost[] }) => {
  return (
    <ul className={styled.feed}>
      {posts.map((post, i) => (
        <li className={styled.feedItem} key={post.id + i}>
          <Link href={`/post/${post.id}`} scroll={false}>
            <Image
              src={post.src}
              alt={post.title}
              width={1500}
              height={1500}
              sizes="80vw"
            />

            {/* {post.title} */}
          </Link>
        </li>
      ))}
    </ul>
  );
};
