'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen border-b border-foreground/10">
      {/* Two-column grid */}
      <div className="relative grid grid-cols-1 lg:grid-cols-3 min-h-screen gap-0">
        {/* Left column - Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="border border-foreground/10 relative col-span-1"
        >
          <div className="w-full h-full min-h-[50vh] lg:min-h-screen">
            <Image
              src="/images/palm_hero.jpg"
              alt="Hero image"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Right column - Text content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative flex items-center justify-start p-8 lg:p-16 col-span-2"
        >
          <div className="max-w-3xl space-y-8">
            {/* Geometric accent line */}
            <div className="w-16 h-px bg-accent" />

            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              <span className="block text-foreground">Code by Andy</span>
              <span className="block text-3xl text-accent-warm mt-2">Human-Centric Web Development</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted leading-relaxed">
              I partner with thoughtful small business owners to grow their online presence through:
            </p>

            {/* Icon list */}
            <div className="space-y-4 pt-4">
              {/* Icon item 1 */}
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 flex items-center justify-center shrink-0">
                  <svg width="50" height="50" version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg" className="fill-accent">
                    <path d="m600 600c0 310.5 252 562.5 562.5 562.5 0-310.5-252-562.5-562.5-562.5z"/>
                    <path d="m37.5 1162.5c310.5 0 562.5-252 562.5-562.5-310.5 0-562.5 252-562.5 562.5z"/>
                    <path d="m1162.5 37.5c-310.5 0-562.5 252-562.5 562.5 310.5 0 562.5-252 562.5-562.5z"/>
                    <path d="m37.5 37.5c0 310.5 252 562.5 562.5 562.5 0-310.5-252-562.5-562.5-562.5z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Websites</h3>
                  <p className="text-muted text-md">authentic to your brand</p>
                </div>
              </div>

              {/* Icon item 2 */}
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 flex items-center justify-center shrink-0">
                  <svg width="50" height="50" version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg" className="fill-accent">
                    <path d="m600 600c0 310.5 252 562.5 562.5 562.5 0-310.5-252-562.5-562.5-562.5z"/>
                    <path d="m37.5 1162.5c310.5 0 562.5-252 562.5-562.5-310.5 0-562.5 252-562.5 562.5z"/>
                    <path d="m1162.5 37.5c-310.5 0-562.5 252-562.5 562.5 310.5 0 562.5-252 562.5-562.5z"/>
                    <path d="m37.5 37.5c0 310.5 252 562.5 562.5 562.5 0-310.5-252-562.5-562.5-562.5z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-foreground">Blogs</h3>
                  <p className="text-muted text-md">that look and sound like you</p>
                </div>
              </div>

              {/* Icon item 3 */}
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 flex items-center justify-center shrink-0">
                  <svg width="50" height="50" version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg" className="fill-accent">
                    <path d="m600 600c0 310.5 252 562.5 562.5 562.5 0-310.5-252-562.5-562.5-562.5z"/>
                    <path d="m37.5 1162.5c310.5 0 562.5-252 562.5-562.5-310.5 0-562.5 252-562.5 562.5z"/>
                    <path d="m1162.5 37.5c-310.5 0-562.5 252-562.5 562.5 310.5 0 562.5-252 562.5-562.5z"/>
                    <path d="m37.5 37.5c0 310.5 252 562.5 562.5 562.5 0-310.5-252-562.5-562.5-562.5z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-foreground"> E-Commerce Sites</h3>
                  <p className="text-muted text-md">that connect with your audience</p>
                </div>
              </div>
            </div>

            {/* CTA button */}
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-accent hover:bg-accent-dark text-background font-semibold transition-all mt-8"
            >
              Let&apos;s work together
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
