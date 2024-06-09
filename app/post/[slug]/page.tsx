import { Metadata } from "next";
import Markdown from "markdown-to-jsx";

import { getPostContent, getPostMetadata } from "@/helpers";

interface Props {
  params: { slug: string };
}

// Generate meta data for post page
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const post = getPostContent(params.slug);
  return {
    title: post.data.title,
    description: post.data.subtitle,
  };
};

// To statically generate page (SSG) for each posts
export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export default function PostPage(props: Props) {
  const { slug } = props.params;

  // get post content from a markdown file
  const post = getPostContent(slug);

  return (
    <div>
      <h1>Post: {slug}</h1>
      {/* show the post content */}
      <h1>{post.data.title}</h1>
      <Markdown>{post.content}</Markdown>
    </div>
  );
}
