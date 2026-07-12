'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Image from 'next/image';

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const menuLinks = [
    { label: 'HOME', href: '#hero' },
    { label: 'WHO I AM', href: '#about' },
    { label: 'MY WORLD', href: '#interests' },
    { label: 'MOMENTS', href: '#gallery' },
    { label: 'CONNECT', href: '#connect' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Smooth scroll using native scrollIntoView since Lenis will capture and smooth it
    const element = document.querySelector(href);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 500); // Wait for menu close transition to finish
    }
  };

  // Framer Motion variants
  const menuVariants: Variants = {
    initial: {
      clipPath: 'circle(30px at calc(100% - 40px) 40px)',
      opacity: 0,
    },
    animate: {
      clipPath: 'circle(150% at calc(100% - 40px) 40px)',
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 40,
        restDelta: 2,
      },
    },
    exit: {
      clipPath: 'circle(30px at calc(100% - 40px) 40px)',
      opacity: 0,
      transition: {
        delay: 0.1,
        type: 'spring',
        stiffness: 80,
        damping: 24,
      },
    },
  };

  const containerVariants: Variants = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const linkVariants: Variants = {
    initial: { y: 80, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] } },
    exit: { y: 50, opacity: 0, transition: { duration: 0.4 } },
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-8 right-8 z-50 flex items-center gap-4 bg-zinc-950/80 hover:bg-zinc-900 border border-zinc-800 text-zinc-100 px-5 py-2.5 rounded-full backdrop-blur-md transition-all duration-300 shadow-xl"
        aria-label="Toggle Menu"
      >
        <span className="font-heading tracking-[0.2em] text-xs uppercase pt-0.5">
          {isOpen ? 'CLOSE' : 'MENU'}
        </span>
        <div className="flex flex-col gap-1.5 justify-center items-center w-5 h-5">
          <span
            className={`w-5 h-[1px] bg-zinc-100 transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`w-5 h-[1px] bg-zinc-100 transition-all duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-5 h-[1px] bg-zinc-100 transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </div>
      </button>

      {/* Fullscreen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={menuVariants}
            className="fixed inset-0 bg-[#050505] z-40 flex items-center justify-center p-8 overflow-hidden"
          >
            {/* Minimalist Logo on left */}
            <div className="absolute top-8 left-8 hidden md:block">
              <div className="relative w-20 h-20 md:w-28 md:h-28">
                <Image 
                  src="/Logo.png" 
                  alt="Poojaa G Logo" 
                  fill
                  sizes="(max-width: 768px) 80px, 112px"
                  className="object-contain filter brightness-110 opacity-75 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>

            <motion.nav
              variants={containerVariants}
              className="flex flex-col items-center gap-6 max-w-4xl text-center"
            >
              {menuLinks.map((link, index) => {
                const isHovered = hoveredIndex === index;
                const isAnyHovered = hoveredIndex !== null;

                let textClass = "font-heading text-6xl md:text-8xl tracking-wider uppercase transition-all duration-300 block";
                if (isHovered) {
                  textClass += " text-zinc-100 scale-[1.03]";
                } else if (isAnyHovered) {
                  textClass += " text-zinc-800 opacity-20 scale-[0.98]";
                } else {
                  textClass += " text-zinc-400";
                }

                return (
                  <div key={link.label} className="overflow-hidden py-1">
                    <motion.div variants={linkVariants}>
                      <a
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href)}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className={textClass}
                      >
                        {link.label}
                      </a>
                    </motion.div>
                  </div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.6 } }}
                exit={{ opacity: 0 }}
                className="mt-12 flex flex-col items-center gap-2"
              >
                <p className="font-serif-elegant italic text-zinc-500 text-lg">
                  Chennai, India
                </p>
                <a
                  href="mailto:poojaa.g@example.com"
                  className="font-inter text-xs tracking-[0.2em] text-zinc-400 hover:text-zinc-100 uppercase transition-colors"
                >
                  poojaa.g@example.com
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;
