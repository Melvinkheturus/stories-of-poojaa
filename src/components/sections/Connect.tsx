'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Connect: React.FC = () => {
  return (
    <section
      id="connect"
      className="relative min-h-[70vh] bg-[#050505] py-24 px-6 md:px-16 lg:px-24 flex flex-col justify-between overflow-hidden"
    >
      {/* Background soft glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-zinc-900/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Empty space/spacer at top */}
      <div className="w-full" />

      {/* Main Say Hello / Connect Text */}
      <div className="max-w-4xl mx-auto text-center space-y-8 my-auto relative z-10">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          className="font-inter text-xs tracking-[0.3em] uppercase text-zinc-500 block"
        >
          04 / COLLABORATIONS
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-heading text-6xl md:text-8xl lg:text-[7.5vw] font-bold tracking-wider text-stroke text-stroke-hover hover:text-white uppercase transition-all duration-500 cursor-default select-none"
        >
          SAY HELLO
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-serif-elegant italic text-zinc-400 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed"
        >
          I&apos;m always open to talking about human dynamics, literature, new learning opportunities, or potential HR internships. Let&apos;s build something positive together.
        </motion.p>

        {/* Action Connect Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6 pt-4"
        >
          <a
            href="mailto:poojaa.g@example.com"
            className="px-8 py-3.5 rounded-full border border-zinc-800 bg-zinc-950/60 hover:bg-zinc-900/80 hover:border-zinc-600 text-sm tracking-wider uppercase font-inter transition-all duration-300 shadow-lg"
          >
            Send an Email
          </a>
          <a
            href="https://www.linkedin.com/in/poojaa-g"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full border border-zinc-800 bg-zinc-950/60 hover:bg-zinc-900/80 hover:border-zinc-600 text-sm tracking-wider uppercase font-inter transition-all duration-300 shadow-lg"
          >
            LinkedIn Profile
          </a>
        </motion.div>
      </div>

      {/* Footer Info at the very bottom */}
      <div className="w-full border-t border-zinc-900/60 pt-12 mt-12 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10 text-zinc-500 font-inter text-xs tracking-wider">
        <div className="text-center md:text-left">
          © {new Date().getFullYear()} POOJAA G. ALL RIGHTS RESERVED.
        </div>
        <div className="flex gap-6 justify-center md:justify-end">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-zinc-300 transition-colors"
          >
            BACK TO TOP
          </a>
        </div>
      </div>
    </section>
  );
};

export default Connect;
