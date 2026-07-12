'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { ScrollTextRise } from '@/components/ruixen/scroll-text-rise';

const WhoIAm: React.FC = () => {
  const [isMorphed, setIsMorphed] = useState(false);

  // Scroll targets for scroll animations (pinned target)
  const maskRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: maskScroll } = useScroll({
    target: maskRef,
    offset: ["start start", "end end"]
  });

  // Create a circular clip-path scaling from 18vh to 130vh to completely cover the screen, clamping so it stays full screen
  const clipPath = useTransform(
    maskScroll,
    [0.0, 1.0],
    ["circle(18vh at 50% 50%)", "circle(130vh at 50% 50%)"],
    { clamp: true }
  );

  const aboutText = "I believe that every organization is, at its core, a collection of stories. My journey began in the world of commerce, but I quickly realized my true calling wasn't just looking at the numbers—it was understanding the people behind them. Currently expanding my horizons through an MA in Human Resource Management in Chennai, I approach the corporate space with deep empathy and a fascination for human psychology and team dynamics. I strive to blend analytical thinking with deep empathy to create environments where people feel heard, valued, and empowered to do their best work.";

  return (
    <section id="about" className="relative bg-[#050505] text-zinc-100 overflow-visible">
      {/* Part 1: Interactive Who Am I / Poojaa G Morph screen */}
      <div className="min-h-screen w-full flex flex-col justify-between px-6 py-12 md:px-16 lg:px-24 select-none relative z-10">
        {/* Empty top block for spacing */}
        <div />

        {/* Center content block */}
        <div className="flex flex-col items-center justify-center text-center my-auto relative z-10 pt-24 md:pt-36">
          <div className="w-full max-w-7xl flex justify-center items-center overflow-visible py-4">
            <AnimatePresence mode="wait">
              {!isMorphed ? (
                <motion.div
                  key="who-am-i"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20, scaleY: 0.5 }}
                  transition={{ duration: 0.5, ease: [0.6, 0.05, 0.01, 0.9] }}
                  onClick={() => setIsMorphed(true)}
                  className="flex justify-center gap-1.5 md:gap-3 overflow-visible py-4 cursor-pointer"
                  data-cursor="about us"
                >
                  {"WHO AM I".split('').map((char, index) => {
                    if (char === ' ') {
                      return <span key={index}>&nbsp;</span>;
                    }
                    return (
                      <motion.span
                        key={index}
                        className="font-roswell text-[12vw] leading-none text-zinc-100 font-light"
                        style={{ 
                          display: 'inline-block', 
                          transformOrigin: 'bottom',
                          willChange: 'transform'
                        }}
                        animate={{ scaleY: 1.0 }}
                        whileHover={{ scaleY: 1.35, color: '#ffffff' }}
                        transition={{ type: 'spring', stiffness: 350, damping: 15 }}
                      >
                        {char}
                      </motion.span>
                    );
                  })}
                </motion.div>
              ) : (
                <motion.div
                  key="poojaa-g"
                  initial={{ opacity: 0, y: 20, scaleY: 0.5 }}
                  animate={{ opacity: 1, y: 0, scaleY: 1.0 }}
                  transition={{ duration: 0.5, ease: [0.6, 0.05, 0.01, 0.9] }}
                  className="flex justify-center gap-1.5 md:gap-3 overflow-visible py-4"
                >
                  {"POOJAA G".split('').map((char, index) => {
                    if (char === ' ') {
                      return <span key={index}>&nbsp;</span>;
                    }
                    return (
                      <motion.span
                        key={index}
                        className="font-roswell text-[12vw] leading-none text-zinc-300 font-light"
                        style={{ 
                          display: 'inline-block', 
                          transformOrigin: 'bottom',
                          willChange: 'transform'
                        }}
                        whileHover={{ scaleY: 1.35, color: '#ffffff' }}
                        transition={{ type: 'spring', stiffness: 350, damping: 15 }}
                      >
                        {char}
                      </motion.span>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Centered subtext moved from top and made bold */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8, transition: { delay: 0.6 } }}
            className="mt-4"
          >
            <p className="font-inter text-xs tracking-[0.4em] uppercase text-zinc-300 font-bold">
              A Lil about me
            </p>
          </motion.div>
        </div>

        {/* Bottom Footer Info matching Hero */}
        <div className="w-full mt-auto relative z-10 flex justify-start pb-4">
          <motion.a
            href="#about-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6, transition: { delay: 1.2, duration: 0.8 } }}
            whileHover={{ opacity: 1 }}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('[data-scroll-text-rise]')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center gap-2 hover:opacity-100 transition-opacity cursor-pointer select-none group"
          >
          </motion.a>
        </div>
      </div>

      {/* Part 2: Scroll Text Rise Block */}
      <div className="w-full bg-[#050505] flex flex-col justify-center items-center py-12 px-6 md:px-16 relative z-10 border-t border-zinc-950">
        <div className="max-w-5xl w-full">
          <ScrollTextRise
            text={aboutText}
            className="bg-transparent"
            textClassName="font-inter font-light tracking-wide text-zinc-400 text-center leading-relaxed text-2xl md:text-4xl"
          />
        </div>
      </div>

      {/* Part 3: Pinned Circular Clip Mask Reveal */}
      <div ref={maskRef} className="relative h-[250vh] bg-[#050505] overflow-visible">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          <motion.div 
            style={{ clipPath }}
            className="relative w-full h-full"
          >
            <Image 
              src="/poojaa_portrait.png" 
              alt="Poojaa G Portrait Reveal" 
              fill
              sizes="100vw"
              priority
              className="object-cover brightness-95"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoIAm;
