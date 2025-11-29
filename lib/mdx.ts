import { globby } from 'globby';
import { readFile } from 'fs/promises';
import { remark } from 'remark';
import remarkFrontmatter from 'remark-frontmatter';
import { parse as parseYaml } from 'yaml';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  description?: string;
  image?: string;
  filePath: string;
}

export async function getBlogPosts(tag?: string): Promise<BlogPost[]> {
  const files = await globby('content/**/*.mdx');

  const posts = await Promise.all(
    files.map(async (filePath) => {
      const content = await readFile(filePath, 'utf-8');
      const tree = await remark()
        .use(remarkFrontmatter, ['yaml'])
        .parse(content);

      let frontmatter: { title?: string; date?: string; tags?: string[]; description?: string; image?: string } = {};

      // Extract YAML frontmatter
      for (const node of tree.children) {
        if (node.type === 'yaml') {
          frontmatter = parseYaml(node.value as string);
          break;
        }
      }

      const slug = filePath
        .replace('content/', '')
        .replace(/\.mdx$/, '');

      return {
        slug,
        title: frontmatter.title || slug,
        date: frontmatter.date || '',
        tags: frontmatter.tags || [],
        description: frontmatter.description,
        image: frontmatter.image,
        filePath,
      };
    })
  );

  // Filter by tag if provided
  let filteredPosts = posts;
  if (tag) {
    filteredPosts = posts.filter((post) =>
      post.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
    );
  }

  // Sort by date (newest first)
  filteredPosts.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  return filteredPosts;
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getBlogPosts();
  const tagsSet = new Set<string>();

  posts.forEach((post) => {
    post.tags.forEach((tag) => tagsSet.add(tag));
  });

  return Array.from(tagsSet).sort();
}
