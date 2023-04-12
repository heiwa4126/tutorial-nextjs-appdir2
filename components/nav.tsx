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
        <Link href="/blog/about">blog/about</Link>
      </li>
      <li>
        <Link href="/blog/111">blog/111</Link>
      </li>
      <li>
        <Link href="/blog/notfound">blog/notfound</Link>
      </li>
    </ul>
  );
}
