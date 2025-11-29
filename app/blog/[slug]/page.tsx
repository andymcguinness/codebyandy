import { Metadata } from 'next';
import { readFile } from 'fs/promises';
import { remark } from 'remark';
import remarkFrontmatter from 'remark-frontmatter';
import { parse as parseYaml } from 'yaml';
import { getBlogPosts } from '@/lib/mdx';
import Navigation from '@/app/components/Navigation';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/app/components/Footer';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const content = await readFile(`content/${slug}.mdx`, 'utf-8');
    const tree = await remark().use(remarkFrontmatter, ['yaml']).parse(content);

    let frontmatter: { title?: string; date?: string; tags?: string[]; description?: string; image?: string } = {};

    for (const node of tree.children) {
      if (node.type === 'yaml') {
        frontmatter = parseYaml(node.value as string);
        break;
      }
    }

    const title = frontmatter.title || slug;
    const description = frontmatter.description || `Read ${title} on Code by Andy`;
    const tags = frontmatter.tags || [];

    return {
      title: `${title} | Code by Andy`,
      description,
      keywords: tags.length > 0 ? tags : undefined,
      openGraph: {
        title,
        description,
        type: 'article',
        publishedTime: frontmatter.date ? new Date(frontmatter.date).toISOString() : undefined,
        tags: tags.length > 0 ? tags : undefined,
      },
      twitter: {
        card: 'summary',
        title,
        description,
      },
    };
  } catch (error) {
    return {
      title: 'Blog Post | Code by Andy',
      description: 'Read this blog post on Code by Andy',
    };
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(`@/content/${slug}.mdx`);

  // Get frontmatter for display
  const content = await readFile(`content/${slug}.mdx`, 'utf-8');
  const tree = await remark().use(remarkFrontmatter, ['yaml']).parse(content);
  let frontmatter: { title?: string; date?: string; tags?: string[]; description?: string; image?: string } = {};

  for (const node of tree.children) {
    if (node.type === 'yaml') {
      frontmatter = parseYaml(node.value as string);
      break;
    }
  }

  return (
    <div className="relative min-h-screen flex flex-col">
      <Navigation page="blog" />
      <div className="relative flex-1 pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-muted hover:text-accent-warm transition-colors mb-8 font-medium"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to all posts
          </Link>

          {/* Paper-like container */}
          <article className="relative bg-background border border-foreground/10 px-8 py-12 md:px-16 md:py-16 rounded-xl overflow-visible before:absolute before:inset-0 before:bg-foreground/10 before:rounded-xl before:blur-xl before:scale-110 before:opacity-100 before:-z-10">
            {/* Header */}
            <header className="mb-12 space-y-4">

              {frontmatter.image && (
                <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden border border-foreground/10 mb-8">
                  <Image
                    src={frontmatter.image}
                    alt={frontmatter.title || slug}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div className="w-16 h-px bg-accent-warm" />

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-shadow-md text-foreground">
                {frontmatter.title || slug}
              </h1>

              {frontmatter.description && (
                <p className="text-xl md:text-2xl text-muted leading-relaxed border-l-4 border-l-accent pl-4">
                  {frontmatter.description}
                </p>
              )}

              <div className="flex items-center gap-4 flex-wrap">
                {frontmatter.date && (
                  <time className="text-muted text-sm font-medium">
                    {new Date(frontmatter.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                )}

                {frontmatter.tags && frontmatter.tags.length > 0 && (
                  <>
                    <span className="text-muted">•</span>
                    <div className="flex gap-4 flex-wrap">
                      {frontmatter.tags.map((tag) => (
                        <Link
                          key={tag}
                          href={`/blog?tag=${encodeURIComponent(tag)}`}
                          className="inline-flex items-center align-text-bottom font-semibold text-muted hover:text-accent-warm transition-colors duration-200"
                        >
                          <span className="text-accent-warm mr-1">#</span>
                          <span className="leading-none inline text-base">{tag}</span>
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </header>

            {/* Content */}
            <div className="prose prose-lg prose-headings:text-foreground prose-p:text-muted prose-a:text-accent-warm prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-code:text-accent-dark prose-pre:bg-background prose-pre:border prose-pre:border-foreground/10 prose-li:text-muted prose-ul:text-muted prose-ol:text-muted max-w-none">
              <Post />
            </div>
          </article>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export const dynamicParams = false;