'use client';

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import CodeByAndyLogo from './ui/CodeByAndyLogo';
import { useEffect, useState, MouseEvent } from 'react';

export default function Hero() {
  const words = ['code', 'websites', 'apps', 'blogs'];
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(150);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {

    const tick = () => {
      const currentWord = words[wordIndex];
      
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        setDelta(150);
      } else {
        setText(currentWord.substring(0, text.length - 1));
        setDelta(100);
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timeout = setTimeout(tick, delta);
    return () => clearTimeout(timeout);
  }, [text, delta, isDeleting, wordIndex]);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative group h-screen flex flex-col items-center justify-center bg-transparent overflow-hidden"
    >
       <motion.div
        className="pointer-events-none absolute -inset-1 rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              1000px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="container mx-auto max-w-screen-xl text-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-black">
            <CodeByAndyLogo />
            {text} by andy
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => {
            const nextSection = document.querySelector('section:nth-of-type(2)')
            nextSection?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-davys-gray"
          >
            <path d="M7 13l5 5 5-5" />
            <path d="M7 6l5 5 5-5" />
          </svg>
        </motion.div>      
      </div>
    </section>
  );
}
