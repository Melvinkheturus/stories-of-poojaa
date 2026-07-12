'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

interface Interest {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

const WhatILove: React.FC = () => {
  const interests: Interest[] = [
    {
      number: '01',
      title: 'Human Resources & People Growth',
      description: 'Academically focused on understanding how individuals thrive within organizational structures. My focus is on talent acquisition, employee experience, and fostering inclusive, high-performing workplace dynamics.',
      tags: ['Talent Acquisition', 'Employee Engagement', 'HRM Basics'],
    },
    {
      number: '02',
      title: 'Psychology & Human Behavior',
      description: 'Deeply fascinated by why people think, act, and connect the way they do. Applying psychological insights to resolve conflicts, foster empathy, and drive positive collaboration in groups.',
      tags: ['Behavioral Studies', 'Conflict Resolution', 'Active Listening'],
    },
    {
      number: '03',
      title: 'Literature & Written Word',
      description: 'An avid collector of books and a believer in the power of storytelling. I find solace in classical literature, contemporary essays, and the art of expressing complex ideas through creative writing.',
      tags: ['Creative Writing', 'Reading', 'Storytelling'],
    },
    {
      number: '04',
      title: 'Wellness & Lifelong Learning',
      description: 'Advocating for psychological safety and mental wellness. I approach every challenge as a learning process, combining structured methodologies like MS Office tools with a flexible mindset.',
      tags: ['Mental Safety', 'Organization', 'Tally & Office'],
    },
  ];

  const cardVariants: Variants = {
    initial: { opacity: 0, y: 30 },
    whileInView: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section
      id="interests"
      className="relative min-h-screen bg-[#050505] py-24 px-6 md:px-16 lg:px-24 flex items-center overflow-hidden"
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
            02 / PASSIONS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-heading text-5xl md:text-7xl font-bold tracking-wider text-zinc-100"
          >
            WHAT I LOVE
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif-elegant italic text-zinc-400 text-xl max-w-2xl"
          >
            Interests, pursuits, and the building blocks of my daily world.
          </motion.p>
        </div>

        {/* Interests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.number}
              custom={index}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: '-50px' }}
              variants={cardVariants}
              className="bg-zinc-950/40 border border-zinc-900 rounded-2xl p-8 hover:border-zinc-800 transition-colors duration-300 relative group overflow-hidden"
            >
              {/* Card Hover Ambient Light */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-lavender/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="space-y-6 relative z-10">
                {/* Number & Title */}
                <div className="flex justify-between items-start">
                  <h3 className="font-heading text-2xl md:text-3xl tracking-wide text-zinc-200 group-hover:text-zinc-100 transition-colors">
                    {interest.title}
                  </h3>
                  <span className="font-heading text-xl tracking-wider text-zinc-600 select-none">
                    {interest.number}
                  </span>
                </div>

                {/* Description */}
                <p className="font-inter text-zinc-400 text-sm leading-relaxed md:text-base">
                  {interest.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {interest.tags.map((tag) => (
                    <span
                      key={tag}
                      className="pill-badge-premium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatILove;
