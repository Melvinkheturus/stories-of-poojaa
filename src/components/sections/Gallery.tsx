'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface GalleryItem {
  id: number;
  src: string;
  category: string;
  title: string;
  description: string;
}

const Gallery: React.FC = () => {
  const items: GalleryItem[] = [
    {
      id: 1,
      src: '/gallery_books.png',
      category: 'LITERATURE',
      title: 'Solace in Stories',
      description: 'A cozy corner where literature, tea, and human psychology insights blend.',
    },
    {
      id: 2,
      src: '/gallery_connections.png',
      category: 'CONNECTIONS',
      title: 'Human Architecture',
      description: 'An abstract expression of network structures, people bonds, and workplace ecosystems.',
    },
    {
      id: 3,
      src: '/gallery_coastal.png',
      category: 'PERSPECTIVE',
      title: 'Coastal Reflections',
      description: 'Walking by the Chennai coast, finding quiet rhythms and fresh motivation.',
    },
  ];

  return (
    <section
      id="gallery"
      className="relative min-h-screen bg-[#0b0b0b] py-24 px-6 md:px-16 lg:px-24 flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-inter text-xs tracking-[0.3em] uppercase text-zinc-500 block"
          >
            03 / LIFE GLIMPSES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-heading text-5xl md:text-7xl font-bold tracking-wider text-zinc-100"
          >
            MOMENTS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif-elegant italic text-zinc-400 text-xl max-w-2xl"
          >
            A aesthetic narrative of thoughts, inspirations, and quiet spaces.
          </motion.p>
        </div>

        {/* Gallery Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.6, 0.05, 0.01, 0.9] }}
              className="group space-y-4"
            >
              {/* Image Frame Wrapper */}
              <div 
                data-cursor="view" 
                className="relative w-full aspect-[4/5] bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl p-2"
              >
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:filter group-hover:brightness-95"
                  />
                  
                  {/* Subtle vignette layer on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                </div>
              </div>

              {/* Caption details below image */}
              <div className="space-y-1.5 px-2">
                <span className="font-heading text-xs tracking-[0.2em] text-zinc-500 uppercase">
                  {item.category}
                </span>
                <h3 className="font-heading text-2xl tracking-wide text-zinc-200 group-hover:text-zinc-100 transition-colors">
                  {item.title}
                </h3>
                <p className="font-inter text-zinc-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
