export interface PostFrontMatter {
  title: string;
  date: string;
  subtitle: string;
}

export interface PostMetadata extends PostFrontMatter {
  slug: string;
}
