import { Post, getPost, getPostIds, getNextId, getPreviousId } from "@/lib/blog";
import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Blog2",
};

async function ALink({ Id }: { Id: string }) {
  const post = await getPost(Id);
  return (
    <>
      {post?.date} - <Link href={`/blog2/${Id}`}>{post?.title}</Link>
    </>
  );
}

async function Idx() {
  const ids = await getPostIds();
  return (
    <ul>
      {ids.map((id, idx) => {
        return (
          <li key={idx}>
            <Suspense fallback={<>...</>}>
              {/* @ts-expect-error Async Server Component */}
              <ALink Id={id} />
            </Suspense>
          </li>
        );
      })}
    </ul>
  );
}

export default async function Page() {
  return (
    <main>
      <h1>blog2 page</h1>
      <p>ブログもどき。データはChatGPTに作ってもらいました。</p>
      <Suspense fallback={<>...</>}>
        {/* @ts-expect-error Async Server Component */}
        <Idx />
      </Suspense>
    </main>
  );
}
