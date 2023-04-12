import Link from "next/link";

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <p>
        <Link href="/blog2">← back to blog2</Link>
      </p>
    </>
  );
}
