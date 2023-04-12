import data from "./blog.json";

export interface Post {
  id: string;
  title: string;
  date: string;
  content: string;
}

const blog: Post[] = data;
blog.sort((a, b) => {
  if (a.date > b.date) return -1;
  if (a.date < b.date) return 1;
  if (a.title > b.title) return 1;
  if (a.title < b.title) return -1;
  return 0;
});

const blogIdx: { [key: string]: number } = blog.reduce((acc: { [id: string]: number }, post: Post, index: number) => {
  acc[post.id] = index;
  return acc;
}, {});

export async function getPost(id: string): Promise<Post | undefined> {
  return blog?.[blogIdx?.[id]];
}

export async function getPostIds(): Promise<string[]> {
  return Object.keys(blogIdx);
}

export function hasId(id: string): boolean {
  return id in blogIdx;
}
