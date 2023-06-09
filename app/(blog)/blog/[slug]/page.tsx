import { Metadata } from "next/types";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return { title: `blog entry - ${params.slug}` };
}

export default async function Page({ params }: { params: { slug: string } }) {
  if (params.slug === "notfound") {
    notFound();
  }
  return (
    <>
      <main>
        <h1>blog entry - {params.slug}</h1>
      </main>
      <div>
        <Link href="/blog">← back to blog</Link>
      </div>
    </>
  );
}
