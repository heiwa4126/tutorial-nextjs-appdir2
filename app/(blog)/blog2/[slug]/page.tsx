import { Post, getNextId, getPost, getPostIds, getPreviousId } from "@/lib/blog";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next/types";
import { Suspense } from "react";

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

async function Nav({ Id, Label }: { Id: string | undefined; Label: string }) {
  if (Id == null) return <></>;
  const post = await getPost(Id);
  return (
    <div>
      {Label} : <Link href={`/blog2/${Id}`}>{post?.title}</Link>
    </div>
  );
}

async function PrevNext({ Id }: { Id: string }) {
  return (
    <div>
      {/* @ts-expect-error Async Server Component */}
      <Nav Id={await getNextId(Id)} Label="1つ新しい記事" />
      {/* @ts-expect-error Async Server Component */}
      <Nav Id={await getPreviousId(Id)} Label="1つ古い記事" />
    </div>
  );
}

async function Content({ Id }: { Id: string }) {
  const post = await getPost(Id);
  if (!post) {
    return notFound();
  }
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <p>{post.content}</p>
    </>
  );
}

export default async function Page({ params }: { params: { slug: string } }) {
  const id = params.slug;
  const post = await getPost(id);
  if (!post) {
    return notFound();
  }

  return (
    <main>
      <Suspense fallback={<>...</>}>
        {/* @ts-expect-error Async Server Component */}
        <Content Id={id} />
      </Suspense>
      <Suspense fallback={<>...</>}>
        {/* @ts-expect-error Async Server Component */}
        <PrevNext Id={id} />
      </Suspense>
    </main>
  );
}

export async function generateStaticParams() {
  const posts = await getPostIds();
  // ビルド時に新しいものから3つだけSSG
  return posts.slice(0, 3).map((post) => ({
    slug: post,
  }));
}
