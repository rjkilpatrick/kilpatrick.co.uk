export interface PostFrontmatter {
  title: string;
  datePublished: string;
  preview?: string;
  tags?: string[];
  draft?: boolean;
  minutesRead?: string;
}

export interface Post {
  frontmatter: PostFrontmatter;
  url: string;
}

const postModules = import.meta.glob<Post>("../pages/post/**/*.{md,mdx}", {
  eager: true,
});

export function getPosts(): Post[] {
  return Object.values(postModules).filter((post) => !post.frontmatter.draft);
}

export function byDateDescending(a: Post, b: Post): number {
  return (
    new Date(b.frontmatter.datePublished).getTime() -
    new Date(a.frontmatter.datePublished).getTime()
  );
}

export function getUniqueTags(posts: Post[]): string[] {
  return [...new Set(posts.flatMap((post) => post.frontmatter.tags ?? []))];
}
