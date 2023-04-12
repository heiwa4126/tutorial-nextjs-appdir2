import { Post, getPost, getPostIds } from "@/lib/blog";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog2",
};

async function Idx() {
  const ids = await getPostIds();
  return (
    <ul>
      {/* @ts-expect-error Async Server Component */}
      {ids.map(async (id, idx) => {
        const post = await getPost(id);
        return (
          <li key={idx}>
            {post?.date} - <Link href={`/blog2/${id}`}>{post?.title}</Link>
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
      {/* @ts-expect-error Async Server Component */}
      <Idx />
    </main>
  );
}
