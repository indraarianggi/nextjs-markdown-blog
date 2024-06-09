import Link from "next/link";

import { PostMetadata } from "@/types";

interface Props {
  post: PostMetadata;
}

export default function PostPreview({ post }: Props) {
  return (
    <div key={post.slug}>
      <Link href={`/post/${post.slug}`}>
        <h2>{post.title}</h2>
      </Link>
      <p>{post.subtitle}</p>
      <p>{post.date}</p>
    </div>
  );
}
