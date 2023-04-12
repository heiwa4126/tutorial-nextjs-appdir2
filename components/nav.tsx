import Link from "next/link";

export default function Nav() {
  return (
    <ul>
      <li>
        <Link href="/">root</Link>
      </li>
      <li>
        <Link href="/about">about</Link>
      </li>
      <li>
        <Link href="/notfound">not found (wrong)</Link>
      </li>
      <li>
        <Link href="/blog">blog</Link>
      </li>
      <li>
        <Link href="/blog2">blog2</Link>
      </li>
    </ul>
  );
}
