import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "app dir routing test",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <h1>root layout</h1>
        {children}
      </body>
    </html>
  );
}
