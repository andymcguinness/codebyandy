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
              alt="A picture of green palm leaves"
              title="Code by Andy | Hero Image"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover"
              priority
              fetchPriority="high"
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
              <span className="block text-foreground text-shadow-md">Code by Andy</span>
              <span className="block text-3xl text-accent-warm mt-2">Human-Centered Web Development</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted leading-relaxed">
              I partner with values-driven small business owners. Together, we grow their online presence through:
            </p>

            {/* Icon list */}
            <div className="space-y-4 pt-4">
              {/* Icon item 1 */}
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 flex items-center justify-center shrink-0">
                  <svg width="50" height="50" version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg" className="fill-accent">
                    <path d="m37.5 37.5v1125c310.5 0 562.12-252 562.12-562.5s-251.62-562.5-562.12-562.5z"/>
                    <path d="m1162.5 600c0-310.5-251.62-562.5-562.12-562.5v1125c310.5 0 562.12-252 562.12-562.5z"/>
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">Thoughtful Websites</h2>
                  <p className="text-muted text-md">Crafted meticulously to inspire audiences and exceed goals</p>
                </div>
              </div>

              {/* Icon item 2 */}
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 flex items-center justify-center shrink-0">
                  <svg width="50" height="50" version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg" className="fill-accent">
                    <path d="m37.5 37.5v1125c310.5 0 562.12-252 562.12-562.5s-251.62-562.5-562.12-562.5z"/>
                    <path d="m1162.5 600c0-310.5-251.62-562.5-562.12-562.5v1125c310.5 0 562.12-252 562.12-562.5z"/>
                  </svg>
                </div>
                <div>
                  <h2 className="font-semibold text-xl text-foreground">Intentional E-Commerce Sites</h2>
                  <p className="text-muted text-md">Built with care for human connection and sales conversions</p>
                </div>
              </div>

              {/* Icon item 3 */}
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 flex items-center justify-center shrink-0">
                  <svg width="50" height="50" version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg" className="fill-accent">
                    <path d="m37.5 37.5v1125c310.5 0 562.12-252 562.12-562.5s-251.62-562.5-562.12-562.5z"/>
                    <path d="m1162.5 600c0-310.5-251.62-562.5-562.12-562.5v1125c310.5 0 562.12-252 562.12-562.5z"/>
                  </svg>
                </div>
                <div>
                  <h2 className="font-semibold text-xl text-foreground">Deliberate Custom Projects</h2>
                  <p className="text-muted text-md">Developed purposefully to fulfill vision and meet needs</p>
                </div>
              </div>
            </div>

            {/* CTA button */}
            <p className="text-muted text-base mt-10 mb-6">Like the sound of thoughful, human-focused development?</p>
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-accent hover:bg-accent-dark text-foreground font-semibold transition-all shadow-md"
            >
              Let&apos;s work together!
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
