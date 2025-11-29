'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Blog() {
  return (
    <section id="blog" className="relative min-h-screen">
      {/* Two-column grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 min-h-screen">
        {/* Left column - Image (1 column) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative border border-foreground/10"
        >
          <div className="relative w-full h-full min-h-[50vh] lg:min-h-screen">
            <Image
              src="/images/blog_background.jpg"
              alt="A series of cacti reaching upwards"
              title="Code by Andy | Blog"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover"
              priority
            />
            {/* Geometric overlay lines */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-background/20" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-background/20" />
            </div>
          </div>
        </motion.div>

        {/* Right column - Text content (2 columns) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-2 flex items-center justify-center p-8 lg:p-16"
        >
          <div className="max-w-3xl space-y-8">
            {/* Geometric accent line */}
            <div className="w-16 h-px bg-accent" />

            {/* Main heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-shadow-md">
              <span className="block text-foreground">Thoughts by Andy</span>
              <span className="block text-3xl text-accent-warm mt-2">Reflections on intentional development</span>
            </h2>

            {/* Description */}
            <div className="space-y-6 text-lg md:text-xl text-muted leading-relaxed">
              <p>
                I write about web development, values-based work, and building with intention. From technical deep-dives to reflections on human-centered design, my blog is where I share what I&apos;m learning and thinking about.
              </p>
              <p>
                Whether you&apos;re a fellow developer, a small business owner, or just curious about thoughtful web development, there&apos;s something here for you.
              </p>
            </div>

            {/* Topics list */}
            <div className="space-y-4 pt-4">
              <p className="text-sm font-semibold text-accent-dark uppercase tracking-wide">
                Topics I write about
              </p>
              <div className="flex flex-wrap gap-6">
                {['Web Development', 'Human-Centered Design', 'Small Business', 'Technology'].map((topic) => (
                  <span
                    key={topic}
                    className="inline-flex items-center align-text-bottom font-semibold text-muted hover:text-accent-warm transition-colors duration-200 leading-none text-base pb-1"
                  >
                    <span className="text-accent-warm mr-1">#</span>
                    <span>{topic}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* CTA button */}
            <Link
              href="/blog"
              className="inline-block px-8 py-4 bg-accent hover:bg-accent-dark text-background font-semibold transition-all text-shadow-md shadow-md rounded-xl"
            >
              Read the blog
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
