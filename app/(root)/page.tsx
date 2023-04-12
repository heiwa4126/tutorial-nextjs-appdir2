import Link from "next/link";
import styles from "./page.module.css";
import Nav from "@/components/nav";

export const metadata = {
  title: "Home",
};

export default function Page() {
  return (
    <main>
      <h1>root page</h1>
      <p>app dirのroutingの練習。</p>
      <p>
        <Link href="https://beta.nextjs.org/docs/routing/fundamentals" target="_blank">
          このへん
        </Link>
        の話
      </p>
      <Nav />
    </main>
  );
}
