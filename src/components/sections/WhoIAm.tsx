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
      <div className="min-h-screen w-full flex flex-col justify-center items-center px-6 md:px-16 lg:px-24 select-none relative z-10 py-24">
        <span className="font-inter text-[10px] md:text-xs tracking-[0.4em] uppercase text-zinc-500 mb-8 block opacity-60">
          A Lil about me
        </span>
        
        <div className="w-full max-w-7xl flex justify-center items-center overflow-visible py-12">
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
                {"WHO AM I".split('').map((char, index) => (
                  <motion.span
                    key={index}
                    className="font-heading text-[12vw] leading-none text-zinc-100 font-light"
                    style={{ 
                      display: 'inline-block', 
                      transformOrigin: 'top',
                      willChange: 'transform'
                    }}
                    animate={{ scaleY: 1.7 }}
                    whileHover={{ scaleY: 2.5, color: '#ffffff' }}
                    transition={{ type: 'spring', stiffness: 350, damping: 12 }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="poojaa-g"
                initial={{ opacity: 0, y: 20, scaleY: 0.5 }}
                animate={{ opacity: 1, y: 0, scaleY: 1.7 }}
                transition={{ duration: 0.5, ease: [0.6, 0.05, 0.01, 0.9] }}
                className="flex justify-center gap-1.5 md:gap-3 overflow-visible py-4"
              >
                {"POOJAA G".split('').map((char, index) => (
                  <motion.span
                    key={index}
                    className="font-heading text-[12vw] leading-none text-zinc-300 font-light"
                    style={{ 
                      display: 'inline-block', 
                      transformOrigin: 'top',
                      willChange: 'transform'
                    }}
                    whileHover={{ scaleY: 2.5, color: '#ffffff' }}
                    transition={{ type: 'spring', stiffness: 350, damping: 12 }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="font-inter text-[10px] tracking-[0.2em] uppercase text-zinc-500 flex items-center gap-2 mt-12 animate-pulse"
        >
          <span>Scroll to explore</span>
          <span>↓</span>
        </motion.div>
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
