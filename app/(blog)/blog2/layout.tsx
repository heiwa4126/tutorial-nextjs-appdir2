import "./globals.css";
import GoHome from "@/components/gohome";

export const metadata = {
  title: "Create Next App",
  description: "app dir routing test",
};

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <h1>blog2 layout</h1>
        {children}
        <p>
          <GoHome />
        </p>
      </body>
    </html>
  );
}
