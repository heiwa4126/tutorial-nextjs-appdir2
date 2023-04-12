import "./globals.css";

export const metadata = {
  title: "blog/about layout",
  description: "app dir routing test",
};

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1>blog/about layout</h1>
      {children}
    </>
  );
}
