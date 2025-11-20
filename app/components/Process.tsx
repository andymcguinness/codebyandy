'use client';

import { motion } from 'framer-motion';
import Image from 'next/image'

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Intro",
      description: "We talk about your goals, your audience, and what success looks like for you. We have an in-depth discussion about your vision for this project, and ensure that I'm the right fit to make it happen!"
    },
    {
      number: "02",
      title: "Planning",
      description: "We map out a clear plan that works for your timeline and budget. Deliverables and a payment structure will be clearly defined, so there will be no surprises. Any lingering questions will be answered, so you feel confident in the process!"
    },
    {
      number: "03",
      title: "Building",
      description: "I start tinkering away, with consistent check-ins so you're always in the know. There will be plenty of chances to provide feedback and guide the overall progress of the project!"
    },
    {
      number: "04",
      title: "Launch",
      description: "Once final checks are done and the project is ready, we launch! And, of course, it's onwards to your next big project!"
    }
  ];

  return (
    <section id="process" className="relative min-h-screen flex items-center border-b border-foreground/10">
      <div className="">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-0">
          {/* Mobile-only image as first column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative lg:hidden border border-foreground/10"
          >
            <div className="relative w-full h-[50vh]">
              <Image
                src="/images/process_section.jpg"
                alt="Process Section Image"
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Left Column - Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-2 lg:border-r border-foreground/10 lg:px-16 px-8 py-16 lg:py-24"
          >
            <div className="lg:top-24 space-y-8">
              <div className="w-16 h-px bg-accent-warm" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                <p className="inline-block text-foreground">How we&apos;ll <span className="inline-block text-accent">collaborate</span></p>
              </h2>
              <p className="text-lg md:text-xl text-muted">
                Building something great together shouldn&apos;t feel complicated or stressful. I&apos;ll make sure the process is friendly and smooth!
              </p>
            </div>
          </motion.div>

          {/* Right Column - Steps */}
          <div className="lg:col-span-3 lg:pl-16 lg:pr-16 px-8 py-16 lg:py-24">
            <div className="space-y-5">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative py-8 border-b border-b-accent-warm/30 last:border-b-0 group"
                >
                  <div className="flex gap-6 items-start">
                    {/* Number */}
                    <div className="shrink-0">
                      <span className="text-5xl font-bold text-accent-warm lg:text-accent-warm/30 lg:group-hover:text-accent-warm">{step.number}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">

                      {/* Title and Description */}
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{step.title}</h3>
                        <p className="text-base md:text-lg text-muted leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative hidden lg:flex lg:col-span-1 border border-foreground/10"
          >
            <div className="relative w-full h-full min-h-[50vh] lg:min-h-screen">
              <Image
                src="/images/process_section.jpg"
                alt="Process Section Image"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Process;
