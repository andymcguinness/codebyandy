'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Services = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="relative min-h-screen border-b border-foreground/10">
      {/* Two-column grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 min-h-screen">
        {/* Left column - Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative border border-foreground/10"
        >
          <div className="relative w-full h-full min-h-[50vh] lg:min-h-screen">
            <Image
              src="/images/price_palm_computer.jpg"
              alt="Pricing"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover"
              priority
            />
            {/* Geometric overlay lines */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-background/20" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-background/20" />
            </div>
          </div>
        </motion.div>

        {/* Right column - Pricing content (2 columns) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-2 flex items-center justify-center p-8 lg:p-16"
        >
          <div className="w-full max-w-3xl space-y-12">
            {/* Header */}
            <div>
              <div className="w-16 h-px bg-accent mb-8" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-4 text-shadow-md">
                <p className="inline-block text-foreground">Simple,{" "}<span className="inline-block text-accent-warm">upfront pricing</span></p>
              </h2>
              <p className="text-lg md:text-xl text-muted">
                Start with one of these packages, or build your own!
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Custom Website */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="border border-foreground/10 rounded-xl p-8 flex flex-col"
          >
            <h3 className="text-2xl font-bold text-foreground mb-2">The Yucca</h3>
            <div className="mb-6">
              <span className="text-muted text-sm">Starting at</span>
              <div className="text-4xl font-bold text-foreground">$2,500</div>
            </div>

            <div className="grow space-y-3 mb-8">
              <div className="flex items-center gap-2">
                <svg width="15" height="15" version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg" className="fill-accent">
                  <path d="m37.5 37.5v1125c310.5 0 562.12-252 562.12-562.5s-251.62-562.5-562.12-562.5z"/>
                  <path d="m1162.5 600c0-310.5-251.62-562.5-562.12-562.5v1125c310.5 0 562.12-252 562.12-562.5z"/>
                </svg>

                <span className="text-muted">Basic marketing site</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="15" height="15" version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg" className="fill-accent">
                  <path d="m37.5 37.5v1125c310.5 0 562.12-252 562.12-562.5s-251.62-562.5-562.12-562.5z"/>
                  <path d="m1162.5 600c0-310.5-251.62-562.5-562.12-562.5v1125c310.5 0 562.12-252 562.12-562.5z"/>
                </svg>
                <span className="text-muted">Up to 5 pages</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="15" height="15" version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg" className="fill-accent">
                  <path d="m37.5 37.5v1125c310.5 0 562.12-252 562.12-562.5s-251.62-562.5-562.12-562.5z"/>
                  <path d="m1162.5 600c0-310.5-251.62-562.5-562.12-562.5v1125c310.5 0 562.12-252 562.12-562.5z"/>
                </svg>
                <span className="text-muted">SEO optimization</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="15" height="15" version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg" className="fill-accent">
                  <path d="m37.5 37.5v1125c310.5 0 562.12-252 562.12-562.5s-251.62-562.5-562.12-562.5z"/>
                  <path d="m1162.5 600c0-310.5-251.62-562.5-562.12-562.5v1125c310.5 0 562.12-252 562.12-562.5z"/>
                </svg>
                <span className="text-muted">Mobile responsive</span>
              </div>
            </div>

            <div className="pt-4 border-t border-foreground/10">
              <p className="text-sm text-muted">Add a blog: <span className="text-foreground font-semibold">+$500</span></p>
            </div>
          </motion.div>

          {/* E-commerce Site - Featured */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="border border-foreground/10 rounded-xl p-8 flex flex-col relative overflow-hidden"
          >
            <h3 className="text-2xl font-bold text-foreground mb-2">The Palm</h3>
            <div className="mb-6">
              <span className="text-muted text-sm">Starting at</span>
              <div className="text-4xl font-bold text-foreground">$5,000</div>
            </div>

            <div className="grow space-y-3 mb-8">
              <div className="flex items-center gap-2">
                <svg width="15" height="15" version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg" className="fill-accent">
                  <path d="m37.5 37.5v1125c310.5 0 562.12-252 562.12-562.5s-251.62-562.5-562.12-562.5z"/>
                  <path d="m1162.5 600c0-310.5-251.62-562.5-562.12-562.5v1125c310.5 0 562.12-252 562.12-562.5z"/>
                </svg>
                <span className="text-muted">Basic e-commerce site</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="15" height="15" version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg" className="fill-accent">
                  <path d="m37.5 37.5v1125c310.5 0 562.12-252 562.12-562.5s-251.62-562.5-562.12-562.5z"/>
                  <path d="m1162.5 600c0-310.5-251.62-562.5-562.12-562.5v1125c310.5 0 562.12-252 562.12-562.5z"/>
                </svg>
                <span className="text-muted">Up to 5 pages</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="15" height="15" version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg" className="fill-accent">
                  <path d="m37.5 37.5v1125c310.5 0 562.12-252 562.12-562.5s-251.62-562.5-562.12-562.5z"/>
                  <path d="m1162.5 600c0-310.5-251.62-562.5-562.12-562.5v1125c310.5 0 562.12-252 562.12-562.5z"/>
                </svg>
                <span className="text-muted">Up to 10 products</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="15" height="15" version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg" className="fill-accent">
                  <path d="m37.5 37.5v1125c310.5 0 562.12-252 562.12-562.5s-251.62-562.5-562.12-562.5z"/>
                  <path d="m1162.5 600c0-310.5-251.62-562.5-562.12-562.5v1125c310.5 0 562.12-252 562.12-562.5z"/>
                </svg>
                <span className="text-muted">SEO optimization</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="15" height="15" version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg" className="fill-accent">
                  <path d="m37.5 37.5v1125c310.5 0 562.12-252 562.12-562.5s-251.62-562.5-562.12-562.5z"/>
                  <path d="m1162.5 600c0-310.5-251.62-562.5-562.12-562.5v1125c310.5 0 562.12-252 562.12-562.5z"/>
                </svg>
                <span className="text-muted">Blog included</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="15" height="15" version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg" className="fill-accent">
                  <path d="m37.5 37.5v1125c310.5 0 562.12-252 562.12-562.5s-251.62-562.5-562.12-562.5z"/>
                  <path d="m1162.5 600c0-310.5-251.62-562.5-562.12-562.5v1125c310.5 0 562.12-252 562.12-562.5z"/>
                </svg>
                <span className="text-muted">Mobile responsive</span>
              </div>
            </div>
          </motion.div>
        </div>

            {/* Add-ons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">Add-ons</h3>
                <p className="text-muted">Need some non-development services? No problem!</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-foreground/10 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-bold text-foreground">Design</h4>
                    <span className="text-2xl font-bold text-foreground">+$1,500</span>
                  </div>
                  <p className="text-muted">Custom visual design, brand-aligned aesthetics, and UI/UX refinement</p>
                  <p className="text-foreground text-md mt-4">In partnership with <a href="https://www.spookiservices.com/" target="_blank" className="font-bold hover:text-accent-warm transition-colors">@spookiservices</a></p>
                </div>

                <div className="border border-foreground/10 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-bold text-foreground">Copywriting</h4>
                    <span className="text-2xl font-bold text-foreground">+$1,500</span>
                  </div>
                  <p className="text-muted">Professional content writing, messaging strategy, and brand voice development</p>
                  <p className="text-foreground text-md mt-4">In partnership with <a href="https://www.spookiservices.com/" target="_blank" className="font-bold hover:text-accent-warm transition-colors">@spookiservices</a></p>
                </div>
              </div>
            </motion.div>

            {/* Something Custom Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">Custom Development</h3>
                <p className="text-muted mb-6">
                  Need something that doesn&apos;t fit neatly in these boxes? No worries! Reach out and let&apos;s discuss what you&apos;re thinking. Quotes are always upfront and clear so you can make a confident decision.
                </p>

                <button
                  onClick={scrollToContact}
                  className="px-8 py-4 bg-accent hover:bg-accent-dark text-background font-semibold transition-all text-shadow-md shadow-md"
                >
                  Let&apos;s chat!
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
