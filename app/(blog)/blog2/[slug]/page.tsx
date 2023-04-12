import { Post, getNextId, getPost, getPreviousId } from "@/lib/blog";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next/types";

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

async function Nav({ Id }: { Id: string | undefined }) {
  if (!Id) return <></>;

  const post = await getPost(Id);
  return (
    <>
      <Link href={`/blog2/${Id}`}>{post?.title}</Link>
    </>
  );
}

export default async function Page({ params }: { params: { slug: string } }) {
  const id = params.slug;
  const post = await getPost(id);
  if (!post) {
    return notFound();
  }
  const nextId = await getNextId(id);
  const prevId = await getPreviousId(id);

  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <p>{post.content}</p>
      <div>
        {/* @ts-expect-error Async Server Component */}
        1つ新しい記事: <Nav Id={nextId} />
        {/* @ts-expect-error Async Server Component */}
        <br /> 1つ古い記事: <Nav Id={prevId} />
      </div>
    </main>
  );
}
