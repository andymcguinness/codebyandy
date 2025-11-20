'use client';

import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import Image from 'next/image';

export default function Contact() {
  const [state, handleSubmit] = useForm("xdkzlede");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  if (state.succeeded) {
    return (
      <section
        id="contact"
        className="relative min-h-screen flex items-center py-16 md:py-24"
      >
        <div className="container mx-auto px-4 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            {/* Success message */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-foreground">
              Message received!
            </h2>

            <div className="border border-foreground/10 p-8 relative">
              <p className="text-lg md:text-xl text-muted leading-relaxed">
                Thanks for reaching out! I&apos;ll get back to you as soon as I can—usually within a day or two.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="relative min-h-screen flex items-center py-16 md:py-24"
    >
      {/* Mobile-only image at top */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-0 left-0 right-0 lg:hidden border border-foreground/10"
      >
        <div className="relative w-full h-[50vh]">
          <Image
            src="/images/contact_section.jpg"
            alt="Contact Section Image"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </motion.div>

      {/* Desktop background image */}
      <Image
        src="/images/contact_section.jpg"
        alt="Hero image"
        fill
        className="object-cover absolute inset-0 z-0 hidden lg:block"
        priority
      />

      <div className="container mx-auto px-4 lg:px-16 z-1 mt-[50vh] lg:mt-0">
        <div className="w-full lg:max-w-4xl mx-auto bg-background lg:rounded-xl p-8 lg:p-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            {/* Geometric accent line */}
            <div className="w-16 h-px bg-accent mb-8" />

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight text-shadow-md">
              <p className="inline-block text-foreground">Let&apos;s start{" "}<span className="inline-block text-accent-warm">a conversation</span></p>
            </h2>

            <p className="text-lg md:text-xl text-muted leading-relaxed">
              If you&apos;ve got a project in mind, or just want to chat, I&apos;d love to hear from you!
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border border-foreground/10 rounded-xl p-8 md:p-12 relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name field */}
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-semibold text-foreground uppercase tracking-wide">
                  Your name <span className="text-accent-warm font-bold">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-4 bg-background border border-foreground/10 focus:border-accent focus:outline-none transition-colors text-foreground"
                  required
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                  className="text-red-600 text-sm mt-2"
                />
              </div>

              {/* Email field */}
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-semibold text-foreground uppercase tracking-wide">
                  Email address <span className="text-accent-warm font-bold">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-4 bg-background border border-foreground/10 focus:border-accent focus:outline-none transition-colors text-foreground"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-red-600 text-sm mt-2"
                />
              </div>

              {/* Message field */}
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-semibold text-foreground uppercase tracking-wide">
                  What&apos;s on your mind? <span className="text-accent-warm font-bold">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-4 bg-background border border-foreground/10 focus:border-accent focus:outline-none transition-colors resize-none text-foreground"
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="text-red-600 text-sm mt-2"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full px-8 py-4 bg-accent hover:bg-accent-dark text-background font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed text-shadow-md shadow-md"
                disabled={state.submitting}
              >
                {state.submitting ? 'Sending...' : 'Send message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
