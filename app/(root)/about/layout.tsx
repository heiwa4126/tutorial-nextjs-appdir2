import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "app dir routing test",
};

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1>about layout</h1>
      {children}
    </>
  );
}
