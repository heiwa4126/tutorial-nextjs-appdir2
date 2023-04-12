import data from "./movie.json";

export interface Post {
  id: string;
  title: string;
  tagline: string;
  synopsis: string;
}

const movie: Post[] = data;

const movieIdx: { [key: string]: number } = movie.reduce((acc: { [id: string]: number }, post: Post, index: number) => {
  acc[post.id] = index;
  return acc;
}, {});

export async function getPost(id: string): Promise<Post | undefined> {
  return movie?.[movieIdx[id]];
}

export async function getPostIds(): Promise<string[]> {
  return Object.keys(movieIdx);
}

export function hasId(id: string): boolean {
  return id in movieIdx;
}
