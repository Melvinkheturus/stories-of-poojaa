'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [cursorType, setCursorType] = useState<'default' | 'hover' | 'text'>('default');
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Mouse coordinates (motion values)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring configuration for lag-smooth effect
  const springConfig = { damping: 30, stiffness: 250, mass: 0.6 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Set target coordinates (accounting for half the max width of cursor to keep centered)
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    // Global listener for interactive hovers
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const customCursor = target.closest('[data-cursor]') as HTMLElement | null;
      const interactiveEl = target.closest('a, button, [role="button"], input, select, textarea');

      if (customCursor) {
        setCursorType('text');
        setCursorText(customCursor.getAttribute('data-cursor') || '');
      } else if (interactiveEl) {
        setCursorType('hover');
        setCursorText('');
      } else {
        setCursorType('default');
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  // Determine size & styling based on state
  const getVariants = () => {
    const clickScale = isClicked ? 0.85 : 1;

    switch (cursorType) {
      case 'hover':
        return {
          width: 64,
          height: 64,
          backgroundColor: 'rgba(230, 230, 250, 0.1)', // Subtle Lavender glow
          borderColor: 'rgba(230, 230, 250, 0.6)',
          scale: clickScale,
        };
      case 'text':
        return {
          width: 120,
          height: 120,
          backgroundColor: 'rgba(5, 5, 5, 0.85)',
          borderColor: 'rgba(63, 63, 70, 0.6)',
          scale: clickScale,
        };
      default:
        return {
          width: 32,
          height: 32,
          backgroundColor: 'rgba(255, 255, 255, 0)',
          borderColor: 'rgba(255, 255, 255, 0.3)',
          scale: clickScale,
        };
    }
  };

  if (typeof window !== 'undefined' && !window.matchMedia('(pointer: fine)').matches) {
    return null; // Don't render on touch/mobile devices
  }

  return (
    <motion.div
      className="custom-cursor fixed pointer-events-none z-50 rounded-full border flex items-center justify-center overflow-hidden"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
        willChange: 'transform, width, height, background-color, border-color',
      }}
      animate={getVariants()}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 28,
      }}
    >
      {/* Centered label when hovering on data-cursor targets */}
      {cursorType === 'text' && cursorText && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-[9px] font-heading font-semibold tracking-wider text-zinc-300 text-center px-2 select-none"
        >
          {`[ ${cursorText.toUpperCase()} ]`}
        </motion.span>
      )}
    </motion.div>
  );
};

export default CustomCursor;
