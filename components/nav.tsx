import Link from "next/link";

export default function () {
  return (
    <ul>
      <li>
        <Link href="/">root</Link>
      </li>
      <li>
        <Link href="/about">about</Link>
      </li>
      <li>
        <Link href="/blog">blog</Link>
      </li>
      <li>
        <Link href="/blog/about">blog/about</Link>
      </li>
    </ul>
  );
}
