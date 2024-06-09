import Link from "next/link";

import { PostMetadata } from "@/types";

interface Props {
  post: PostMetadata;
}

export default function PostPreview({ post }: Props) {
  return (
    <div className="border border-slate-300 p-4 rounded-md shadow-sm bg-white">
      <p className="text-sm text-slate-400">{post.date}</p>
      <Link href={`/post/${post.slug}`}>
        <h2 className="text-violet-600 hover:underline mb-4">{post.title}</h2>
      </Link>
      <p className="text-slate-700">{post.subtitle}</p>
    </div>
  );
}
