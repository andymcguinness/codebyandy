'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-sage-300 py-12 bg-warm-cream">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm text-muted"
          >
            &copy; {currentYear} Andy McGuinness. Built with care.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
