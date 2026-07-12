'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

const Hero: React.FC = () => {
  // Title letter container variants
  const containerVariants: Variants = {
    animate: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  // Letter animations
  const letterVariants: Variants = {
    initial: { y: 150, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.6, 0.01, 0.05, 0.95] },
    },
  };

  const textRevealVariants: Variants = {
    initial: { y: 30, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.6, duration: 0.8, ease: 'easeOut' },
    },
  };

  const name = "POOJAA G";

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#050505] flex flex-col justify-between px-6 py-12 md:px-16 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-zinc-900/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Top Bar Header */}
      <div className="flex justify-between items-center w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-20 h-20 md:w-28 md:h-28"
        >
          <Image 
            src="/Logo.png" 
            alt="Poojaa G Logo" 
            fill
            sizes="(max-width: 768px) 80px, 112px"
            priority
            className="object-contain filter brightness-110"
          />
        </motion.div>
      </div>

      {/* Center Main Content */}
      <div className="flex flex-col items-center justify-center text-center my-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="overflow-hidden py-4"
        >
          <h1 className="font-heading text-[15vw] md:text-[10vw] leading-[0.8] tracking-tighter select-none font-bold text-zinc-100 flex justify-center gap-[0.02em]">
            {name.split('').map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        {/* Cinematic Tagline */}
        <motion.div
          variants={textRevealVariants}
          initial="initial"
          animate="animate"
          className="mt-6 md:mt-8 space-y-4"
        >
          <p className="font-serif-elegant italic text-zinc-400 text-xl md:text-3xl max-w-2xl mx-auto leading-relaxed">
            “Seeking stories, organizing chaos, and championing the human element.”
          </p>
          <div className="flex items-center justify-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-ping"></span>
            <span className="font-inter text-xs tracking-[0.3em] uppercase text-zinc-500">
              Curator of human potential
            </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer Info */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-full mt-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 1, duration: 0.6 } }}
          className="text-zinc-500 font-inter text-xs tracking-wider text-center md:text-left"
        >
          CURRENTLY GROWING IN CHENNAI, IN
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6, y: [0, 8, 0], transition: { delay: 1.2, repeat: Infinity, duration: 2 } }}
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex flex-col items-center gap-2 hover:opacity-100 transition-opacity"
        >
          <span className="font-inter text-[10px] tracking-[0.2em] uppercase text-zinc-400">
            SCROLL TO EXPLORE
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 text-zinc-400"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 1, duration: 0.6 } }}
          className="text-zinc-500 font-inter text-xs tracking-wider text-center md:text-right"
        >
          EST. 2026 / PERSONAL IDENTITY
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;