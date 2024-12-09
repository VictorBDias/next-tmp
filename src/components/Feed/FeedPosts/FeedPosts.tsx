import { IPost } from '@/actions/posts-get';
import Image from 'next/image';
import Link from 'next/link';

import styled from './feed-posts.module.css';
import { Ul } from './style';

export const FeedPosts = ({ posts }: { posts: IPost[] }) => {
  return (
    <Ul>
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

            <span className={styled.view}>{post.acessos}</span>
          </Link>
        </li>
      ))}
    </Ul>
  );
};
