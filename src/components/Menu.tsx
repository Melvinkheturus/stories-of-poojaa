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
      {/* Global Fixed Header aligning logo and toggle button */}
      <header className="fixed top-0 inset-x-0 h-24 z-50 px-6 md:px-16 flex items-center justify-between pointer-events-none">
        {/* Logo (left) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="pointer-events-auto relative w-14 h-14 md:w-20 md:h-20"
        >
          <a 
            href="#hero" 
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
              document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' });
            }}
            aria-label="Home"
            className="block w-full h-full"
          >
            <Image 
              src="/Logo.png" 
              alt="Poojaa G Logo" 
              fill
              sizes="(max-width: 768px) 56px, 80px"
              priority
              className="object-contain filter brightness-110 opacity-80 hover:opacity-100 transition-opacity"
            />
          </a>
        </motion.div>

        {/* Floating Toggle Button (right) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="pointer-events-auto flex items-center justify-center w-12 h-12 rounded-full bg-zinc-950/40 hover:bg-zinc-900/60 border border-zinc-850 text-zinc-100 backdrop-blur-md transition-all duration-300 shadow-xl group"
          aria-label="Toggle Menu"
        >
          <div className="flex flex-col gap-1.5 justify-center items-end w-5 h-5">
            <span
              className={`h-[1.5px] bg-zinc-100 transition-all duration-300 ${
                isOpen ? 'w-5 rotate-45 translate-y-[4.5px]' : 'w-5'
              }`}
            />
            <span
              className={`h-[1.5px] bg-zinc-100 transition-all duration-300 ${
                isOpen ? 'w-5 -rotate-45 -translate-y-[4.5px]' : 'w-3.5 group-hover:w-5'
              }`}
            />
          </div>
        </button>
      </header>

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

            <motion.nav
              variants={containerVariants}
              className="flex flex-col items-center gap-4 md:gap-6 max-w-4xl text-center"
            >
              {menuLinks.map((link, index) => {
                const isHovered = hoveredIndex === index;
                const isAnyHovered = hoveredIndex !== null;

                let textClass = "font-inter font-semibold tracking-[0.3em] text-3xl md:text-5xl uppercase transition-all duration-300 block py-2";
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
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;
