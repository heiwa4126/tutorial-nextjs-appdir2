export const metadata = {
  title: "Blog entry",
};

export default function ({ params }: { params: { slug: string } }) {
  return (
    <main>
      <h1>blog entry - {params.slug}</h1>
    </main>
  );
}
