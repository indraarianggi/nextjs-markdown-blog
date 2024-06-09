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
      <div className="my-8 text-center">
        <h1 className="text-2xl text-violet-600">{post.data.title}</h1>
        <p className="text-slate-400 mt-2">{post.data.date}</p>
      </div>
      <Markdown
        options={{ wrapper: "article", forceWrapper: true }}
        className="prose"
      >
        {post.content}
      </Markdown>
    </div>
  );
}
