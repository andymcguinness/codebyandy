'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative min-h-screen z-10 border-b border-foreground/10">
      {/* Mobile-only image at top */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative lg:hidden border border-foreground/10"
      >
        <div className="relative w-full h-[50vh]">
          <Image
            src="/images/andypic.jpg"
            alt="A picture of Andy, a white man, smiling at the camera. He has short, curly hair, dark-rimmed glasses, and gauges in his ears."
            title="Code by Andy | Andy McGuinness"
            fill
            sizes="100vw"
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

      {/* Two-column grid - reversed from Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-3 min-h-screen bg-background">
        {/* Left column - Text content (2 columns) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-2 flex items-center justify-center p-8 lg:p-16 lg:border-r border-foreground/10"
        >
          <div className="max-w-3xl space-y-8">
            {/* Geometric accent line */}
            <div className="w-16 h-px bg-accent-warm" />

            {/* Main heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-shadow-md">
              <p className="inline-block text-foreground">Your partner{" "}<span className="inline-block text-accent mt-2">in the process</span></p>
            </h2>

            {/* Description */}
            <div className="space-y-6 text-lg md:text-xl text-muted leading-relaxed">
              <p>
                Hi, I&apos;m Andy! For the past 3+ years, I&apos;ve been helping value-based small businesses and entrepreneurs bring their digital dreams to life.
              </p>
              <p>
                I work with folks from all walks of life, most of whom have one thing in common: they need a web presence, but don&apos;t have the time, energy, or resources to do it themselves. They&apos;re resourceful, determined, resilient, and also very, <span className="italic">very</span> busy. That&apos;s where I come in!
              </p>
              <p>
                It&apos;s my job to listen to my clients and understand their passion, vision, and goals. Being entrusted with their online presence is not something I take lightly! I build every project with intention and care, and make the process as collaborative as possible.
              </p>
              <p>
                In the end, I&apos;m not just another hire &mdash; I&apos;m a partner in the process, deeply invested in <span className="font-bold">your</span> success!
              </p>

              {/* Key message callout */}
              <div className="py-4">
                <div className="border-l-2 border-accent-warm pl-6">
                  <p className="text-accent-warm font-semibold text-xl text-shadow-md">
                    If this connects with you, let&apos;s chat!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right column - Image (1 column) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative hidden lg:block border border-foreground/10"
        >
          <div className="relative w-full h-full min-h-[50vh] lg:min-h-screen">
            <Image
              src="/images/andypic.jpg"
              alt="A picture of Andy, a white man, smiling at the camera. He has short, curly hair, dark-rimmed glasses, and gauges in his ears."
              title="Code by Andy | Andy McGuinness"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
