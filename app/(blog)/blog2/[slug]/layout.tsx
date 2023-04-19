import Link from "next/link";

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <div>
        <Link href="/blog2">← back to blog2</Link>
      </div>
    </>
  );
}
