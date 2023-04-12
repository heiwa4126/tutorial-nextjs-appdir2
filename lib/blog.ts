import data from "./blog.json";

export interface Post {
  id: string;
  title: string;
  tagline: string;
  synopsis: string;
}

const blog: Post[] = data;

const blogIndex: { [key: string]: number } = blog.reduce((acc: { [id: string]: number }, post: Post, index: number) => {
  acc[post.id] = index;
  return acc;
}, {});

export async function getPost(id: string): Promise<Post | undefined> {
  return blog?.[blogIndex[id]];
}

export async function getIds(): Promise<string[]> {
  return Object.keys(blogIndex);
}

export function hasId(id: string): boolean {
  return id in blogIndex;
}
