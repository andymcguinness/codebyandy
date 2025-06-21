'use client';

import { FC } from 'react';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-200 py-6">
      <div className="container mx-auto text-center text-sm text-gray-600">
        <p>&copy; {currentYear} andy mcguinness</p>
      </div>
    </footer>
  );
};

export default Footer;
