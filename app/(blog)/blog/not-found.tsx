import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1>Not Found on /blog</h1>
      <p>Could not find requested resource</p>
      <div>
        <Link href="/blog">← back to blog</Link>
      </div>
    </>
  );
}
