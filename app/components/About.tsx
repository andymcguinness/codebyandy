'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const About = () => {
  return (
    <section className="relative min-h-screen px-6 py-24 bg-mounbatten-pink/20 text-black overflow-hidden items-center justify-center align-center flex">
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-5xl font-bold mb-8 tracking-tight">about andy</h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 text-lg leading-relaxed space-y-5"
          >
            <p>
              hey, i&apos;m andy! i&apos;ve been building websites professionally for over 5 years now. i use a modern tech stack, and focus on keeping things forward-thinking, modular, and clean.
            </p>
            <p>
              i work with humans who are awesome and capable, but either need an extra hand to get things done, or don&apos;t have the time and energy to diy a polished product. i&apos;m here to do the heavy lifting so you can focus on what really matters!
            </p>
            <p>
              if you&apos;ve been thinking about building a new product, or have a project under construction, let&apos;s chat! i&apos;m here to help.
            </p>
          </motion.div>

          {/* Tech Badges */}
          <div className="mt-10 flex flex-wrap gap-4 items-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex items-center gap-2 bg-mounbatten-pink text-white px-5 py-2.5 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-base font-medium"
            >
              <SiNextdotjs /> Next.js
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-2 bg-mounbatten-pink text-white px-5 py-2.5 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-base font-medium"
            >
              <SiTypescript /> TypeScript
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="flex items-center gap-2 bg-mounbatten-pink text-white px-5 py-2.5 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-base font-medium"
            >
              <SiTailwindcss /> Tailwind CSS
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex items-center gap-2 bg-mounbatten-pink text-white px-5 py-2.5 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-base font-medium"
            >
              <FaNodeJs /> Node.js
            </motion.span>
          </div>
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="relative w-full h-[500px]">
            <Image
              src="/images/hero-bg.jpg"
              alt="A computer on a table"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
              priority
            />
          </div>
        </motion.div>
      </div>  
    </section>
  );
};

export default About;