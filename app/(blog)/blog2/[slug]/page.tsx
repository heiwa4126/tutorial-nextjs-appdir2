import { Metadata } from "next/types";
import { notFound } from "next/navigation";
import { Post, getPost } from "@/lib/blog";

function genTitle(post: Post): string {
  return `${post.title} | blog2 entry`;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) {
    return {};
  }
  return { title: genTitle(post) };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) {
    return notFound();
  }
  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <p>{post.content}</p>
    </main>
  );
}
