'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'imaginary products',
      description: 'an imaginary product generator built using next.js and openai',
      image: '/images/imaginaryproducts.png',
    },
    {
      id: 2,
      title: 'andymcguinness.com',
      description: 'my personal website built using next.js and tailwindcss',
      image: '/images/andymcguinnessdotcom.png',
    },
    {
      id: 3,
      title: 'codetunes',
      description: 'a playlist app built using next.js and tailwindcss',
      image: '/images/codetunes.png',
    },
    {
      id: 4,
      title: 'dj zach vibes',
      description: 'a website for my djing hobby built using wordpress',
      image: '/images/zachvibes.png',
    },
    {
      id: 5,
      title: 'the side project guy',
      description: 'a home for all my side projects, built using next.js',
      image: '/images/thesideprojectguy.png',
    },
    {
      id: 6,
      title: 'wowstatistica',
      description: 'a website for world of warcraft statistics, built using gatsby and d3.js',
      image: '/images/wowstatistica.png',
    },
  ];

  return (
    <section className="relative flex bg-cerulean/20 min-h-screen" id="portfolio">
      <div className="container max-w-screen-xl mx-auto flex flex-col justify-center">
        <h2 className="text-5xl font-bold mb-8 tracking-tight">made by andy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>   
      </div>
    </section>
  );
};

export default Portfolio;