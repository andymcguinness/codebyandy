import Link from 'next/link';
import Image from 'next/image';
import { getBlogPosts, getAllTags } from '@/lib/mdx';
import Navigation from '@/app/components/Navigation';
import Footer from '../components/Footer';

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) {
  const { tag } = await searchParams;
  const posts = await getBlogPosts(tag);
  const allTags = await getAllTags();

  return (
    <div className="relative min-h-screen flex flex-col">
      <Navigation page="blog" />
      <section className="relative flex-1">
        {/* Two-column grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-0">
          {/* Left column - Image (sticky) */}
          <div className="relative col-span-1 border border-foreground/10">
            <div className="sticky top-0 w-full h-[50vh] lg:h-screen">
              <Image
                src="/images/blog_background.jpg"
                alt="A series of cacti reaching upwards."
                title="Code by Andy | Blog"
                fill
                className="object-cover border border-foreground/30"
                priority
              />
            </div>
          </div>

          {/* Right column - Content (scrollable) */}
          <div className="relative col-span-2 mt-20">
            {/* Header */}
            <div className="px-8 lg:px-16 py-16 lg:py-24 border-b border-foreground/10">
              <div className="max-w-3xl space-y-8">
                {/* Geometric accent line */}
                <div className="w-16 h-px bg-accent-warm" />

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                  <span className="text-foreground text-shadow-md">Thoughts by Andy</span>
                </h1>

                <p className="text-xl md:text-2xl text-muted leading-relaxed">
                  My thoughts on web development, values-based work, and building with intention.
                </p>
              </div>
            </div>

            {/* Tag filter */}
            {allTags.length > 0 && (
              <div className="px-8 lg:px-16 py-12 border-b border-foreground/10">
                <div className="max-w-3xl">
                  <h2 className="text-sm font-semibold text-accent-dark uppercase tracking-wide mb-4">
                    Filter by topic
                  </h2>
                  <div className="flex flex-wrap gap-6">
                    <Link
                      href="/blog"
                      className={`inline-flex items-center align-text-bottom font-semibold hover:text-accent-warm transition-colors duration-200 leading-none text-base pb-1 ${
                        !tag
                          ? 'text-foreground border-b-[3px] border-b-accent-warm'
                          : 'text-muted'
                      }`}
                    >
                      All Posts
                    </Link>
                    {allTags.map((tagName) => (
                      <Link
                        key={tagName}
                        href={`/blog?tag=${encodeURIComponent(tagName)}`}
                        className={`inline-flex items-center align-text-bottom font-semibold hover:text-accent-warm transition-colors duration-200 leading-none text-base pb-1 ${
                          tag === tagName
                            ? 'text-foreground border-b-[3px] border-b-accent-warm'
                            : 'text-muted'
                        }`}
                      >
                        <span className="text-accent-warm mr-1">#</span>
                        <span>{tagName}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Posts list */}
            <div className="px-8 lg:px-16 py-12">
              <div className="max-w-3xl space-y-8">
                {posts.map((post) => (
                  <article
                    key={post.slug}
                    className="relative group bg-background/50 border border-foreground/10 rounded-lg overflow-visible hover:border-accent-warm/50 transition-colors duration-300 ease-in-out before:absolute before:inset-0 before:bg-foreground/10 before:rounded-lg before:blur-xl before:scale-100 before:opacity-0 before:transition-all before:duration-300 before:ease-in-out before:-z-10 hover:before:scale-110 hover:before:opacity-100"
                  >
                    {/* Image */}
                    {post.image && (
                      <Link href={`/blog/${post.slug}`}>
                        <div className="relative w-full h-48 md:h-64 overflow-hidden rounded-t-xl">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </Link>
                    )}

                    {/* Content */}
                    <div className="p-5 md:p-6 space-y-3">
                      <div className="space-y-2">
                        <Link href={`/blog/${post.slug}`}>
                          <h2 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-accent-warm transition-colors">
                            {post.title}
                          </h2>
                        </Link>

                        <div className="flex items-center gap-4 flex-wrap">
                          <time className="text-muted text-sm font-medium">
                            {new Date(post.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </time>

                          {post.tags.length > 0 && (
                            <>
                              <span className="text-muted">•</span>
                              <div className="flex gap-4 flex-wrap">
                                {post.tags.map((postTag) => (
                                  <Link
                                    key={postTag}
                                    href={`/blog?tag=${encodeURIComponent(postTag)}`}
                                    className="inline-flex items-center align-text-bottom font-semibold text-muted hover:text-accent-warm transition-colors duration-200"
                                  >
                                    <span className="text-accent-warm mr-1">#</span>
                                    <span className="leading-none inline text-base">{postTag}</span>
                                  </Link>
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                      </div>

                      {post.description && (
                        <Link href={`/blog/${post.slug}`}>
                          <p className="text-base text-muted leading-relaxed line-clamp-2 mt-3">
                            {post.description}
                          </p>
                        </Link>
                      )}
                    </div>
                  </article>
                ))}

                {posts.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-xl text-muted">
                      No posts found{tag ? ` for "${tag}"` : ''}.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
