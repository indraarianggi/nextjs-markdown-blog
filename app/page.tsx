import { getPostMetadata } from "@/helpers";
import { PostPreview } from "@/components";

export default function Home() {
  const postMetadatas = getPostMetadata();
  const postPreviews = postMetadatas.map((post) => (
    <PostPreview key={post.slug} post={post} />
  ));

  return (
    <main>
      <div>{postPreviews}</div>
    </main>
  );
}
