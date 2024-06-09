import fs from "fs";
import matter from "gray-matter";

import { PostMetadata } from "@/types";

export const getPostMetadata = (): PostMetadata[] => {
  // read files from a directory
  const folder = "posts/";
  const files = fs.readdirSync(folder);

  // get only markdown file (.md)
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const postMetadatas: PostMetadata[] = markdownPosts.map((fileName) => {
    // get the content of the file
    const fileContent = fs.readFileSync(`${folder}${fileName}`, "utf8");

    // get front-matter from markdown content
    const matterResult = matter(fileContent);

    // create meta data for each post
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
    };
  });

  return postMetadatas;
};

export const getPostContent = (slug: string) => {
  // read content from a markdown file
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const fileContent = fs.readFileSync(file, "utf8"); // encoding is specified so the function will returns string (if omitted, it will returns buffer)

  // get front-matter from markdown content
  const matterResult = matter(fileContent);
  return matterResult;
};
