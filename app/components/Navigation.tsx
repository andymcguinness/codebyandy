'use client';

import { useTheme } from '../context/ThemeContext';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Navigation({page = "home"}) {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Determine active section based on which one occupies most of the viewport
      const sections = ['hero', 'about', 'services', 'process', 'blog', 'contact'];
      let maxVisibleArea = 0;
      let currentSection = sections[0];

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const viewportHeight = window.innerHeight;

          // Calculate visible area of this section
          const visibleTop = Math.max(0, rect.top);
          const visibleBottom = Math.min(viewportHeight, rect.bottom);
          const visibleArea = Math.max(0, visibleBottom - visibleTop);

          if (visibleArea > maxVisibleArea) {
            maxVisibleArea = visibleArea;
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'process', label: 'Process' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top bar with logo and theme toggle */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-md border-b border-sage-300 shadow-sm`}
      >
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Brand */}
            {page === "home" ? (
              <motion.button
                onClick={() => scrollToSection('hero')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-start gap-3 text-2xl font-bold hover:text-accent-warm transition-colors tracking-tight leading-tight"
              >
                <svg width="32" height="32" version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg" className="fill-accent">
                  <path d="m37.5 37.5v1125c310.5 0 562.12-252 562.12-562.5s-251.62-562.5-562.12-562.5z"/>
                  <path d="m1162.5 600c0-310.5-251.62-562.5-562.12-562.5v1125c310.5 0 562.12-252 562.12-562.5z"/>
                </svg>
                Code by Andy
              </motion.button>
            ) : (
              <Link href="/">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-start gap-3 text-2xl font-bold hover:text-accent-warm transition-colors tracking-tight leading-tight"
                >
                  <svg width="32" height="32" version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg" className="fill-accent">
                    <path d="m37.5 37.5v1125c310.5 0 562.12-252 562.12-562.5s-251.62-562.5-562.12-562.5z"/>
                    <path d="m1162.5 600c0-310.5-251.62-562.5-562.12-562.5v1125c310.5 0 562.12-252 562.12-562.5z"/>
                  </svg>
                  Code by Andy
                </motion.div>
              </Link>
            )}

            {/* Dark Mode Toggle - organic style */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-card-bg border-2 border-sage-300 hover:border-accent-dark hover:bg-sage-50 transition-all text-accent"
              aria-label="Toggle dark mode"
            >
              <AnimatePresence mode="wait">
                {theme === 'light' ? (
                  <motion.svg
                    key="moon"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="sun"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                  </motion.svg>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Side navigation dots - organic style */}
      { page == "home" && (
      <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col gap-6">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="group relative"
              aria-label={`Go to ${section.label}`}
            >
              {/* Dot indicator - rounded organic style */}
              <div
                className={`w-3 h-3 rounded-full transition-all ${
                  activeSection === section.id
                    ? 'bg-accent scale-125 shadow-lg shadow-accent/50'
                    : 'bg-accent-dark hover:bg-accent/60'
                }`}
              ></div>

              {/* Tooltip label */}
              <span
                className="absolute right-8 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 whitespace-nowrap font-semibold text-sm pointer-events-none bg-accent-warm text-white px-4 py-2 shadow-lg transition-opacity duration-200"
              >
                {section.label}
              </span>
            </motion.button>
          ))}
        </div>
      </nav>
      )}
    </>
  );
}
