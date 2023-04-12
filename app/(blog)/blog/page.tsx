import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Blog",
};

export default async function Page() {
  return (
    <main>
      <ul>
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
    </main>
  );
}
