'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

const Hero: React.FC = () => {
  const [animationComplete, setAnimationComplete] = React.useState(false);

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
    initial: { y: 150, opacity: 0, scaleY: 1 },
    animate: {
      y: 0,
      opacity: 1,
      scaleY: 1.7,
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



      {/* Center Main Content */}
      <div className="flex flex-col items-center justify-center text-center my-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          onAnimationComplete={() => setAnimationComplete(true)}
          className={animationComplete ? "overflow-visible py-4" : "overflow-hidden py-4"}
        >
          <h1 className="font-roswell text-[22vw] md:text-[16vw] lg:text-[18vw] leading-none tracking-wider select-none font-light text-zinc-100 flex justify-center gap-[0.02em] overflow-visible py-8">
            {name.split('').map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block cursor-default"
                style={{ 
                  display: 'inline-block', 
                  transformOrigin: 'bottom',
                  willChange: 'transform'
                }}
                whileHover={{ scaleY: 2.5, color: '#ffffff' }}
                transition={{ type: 'spring', stiffness: 350, damping: 12 }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        {/* Welcome to my works subtext */}
        <motion.div
          variants={textRevealVariants}
          initial="initial"
          animate="animate"
          className="mt-4"
        >
          <p className="font-inter text-xs tracking-[0.4em] uppercase text-zinc-400 opacity-60">
            WELCOME TO MY WORKS
          </p>
        </motion.div>
      </div>

      {/* Bottom Footer Info */}
      <div className="w-full mt-auto relative z-10 flex justify-start pb-4">
        {/* Scroll Indicator at bottom left */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6, transition: { delay: 1.2, duration: 0.8 } }}
          whileHover={{ opacity: 1 }}
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex items-center gap-2 hover:opacity-100 transition-opacity cursor-pointer select-none group"
        >
          <span className="font-inter text-xs tracking-[0.3em] uppercase text-zinc-400 font-light">
            Scroll to Explore
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-3.5 h-3.5 text-zinc-400 group-hover:translate-y-1 transition-transform duration-300"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;