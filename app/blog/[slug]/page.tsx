import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog";
import BlogPostView from "@/components/blog/BlogPostView";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return <BlogPostView post={post} />;
}
