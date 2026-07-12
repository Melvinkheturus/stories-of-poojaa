'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const WhoIAm: React.FC = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#0b0b0b] py-24 px-6 md:px-16 lg:px-24 flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side: Text Content (Who I Am) */}
        <div className="lg:col-span-7 space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-inter text-xs tracking-[0.3em] uppercase text-zinc-500 block"
            >
              01 / PERSPECTIVE
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-heading text-5xl md:text-7xl font-bold tracking-wider text-zinc-100"
            >
              WHO I AM
            </motion.h2>
          </div>

          {/* Personal Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-zinc-300 font-serif-elegant text-xl md:text-2xl leading-relaxed italic"
          >
            <p>
              I believe that every organization is, at its core, a collection of stories. My journey began in the world of commerce, but I quickly realized my true calling wasn&apos;t just looking at the numbers—it was understanding the people behind them.
            </p>
            <p>
              Currently expanding my horizons through an MA in Human Resource Management at Ethiraj College in Chennai, I approach the corporate space not just as a future professional, but as someone who is genuinely fascinated by human psychology and team dynamics.
            </p>
            <p>
              Outside of academics, I&apos;m a collector of books, a lover of quiet coastal walks, and an advocate for mental wellness in everyday life. I strive to blend analytical thinking with deep empathy to create environments where people feel heard and empowered to do their best work.
            </p>
          </motion.div>

          {/* Personal Motto / Quote Block */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="border-l border-zinc-800 pl-6 py-2 space-y-2"
          >
            <p className="font-heading text-lg tracking-[0.1em] text-zinc-400 uppercase">
              Motto I Live By:
            </p>
            <p className="font-serif-elegant text-2xl text-zinc-200">
              “Building bridges, not just managing benches.”
            </p>
          </motion.div>
        </div>

        {/* Right Side: Portrait Image Wrapper */}
        <div className="lg:col-span-5 flex justify-center relative">
          {/* Subtle glow behind the photo */}
          <div className="absolute inset-0 bg-lavender/5 rounded-2xl blur-3xl pointer-events-none scale-75" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
            className="relative w-full max-w-sm aspect-[3/4] bg-zinc-900 border border-zinc-800 p-3 rounded-2xl shadow-2xl group overflow-hidden"
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image
                src="/poojaa_portrait.png"
                alt="Portrait of Poojaa G"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Visual highlight element */}
            <div className="absolute bottom-6 right-6 font-heading text-xs tracking-widest text-zinc-300 bg-[#050505]/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-zinc-800">
              POOJAA G.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoIAm;
