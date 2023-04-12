import GoHome from "@/components/gohome";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "app dir routing test",
};

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <h1>blog layout</h1>
        {children}
        <div>

          <GoHome />
        </div>
      </body>
    </html>
  );
}
