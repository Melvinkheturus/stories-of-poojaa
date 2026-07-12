'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
<nav className="fixed z-40 top-4 left-0 right-0 flex items-center justify-between px-4 md:pr-4 md:pl-0">
      <div className="hidden md:flex items-center bg-white/80 backdrop-blur-md shadow-md rounded-r-3xl px-4 py-2 ml-0">
        <Image
          src="/Logo.png"
          alt="Poojaa G Logo"
          width={40}
          height={40}
          className="mr-2"
        />
        <span className="text-xl font-bold text-purple-800">POOJAA G</span>
      </div>

      {/* Right side: floating purple nav (only on md+) */}
      <div className="hidden md:flex space-x-6 px-6 py-3 rounded-full bg-purple-100 text-purple-800 shadow-md ml-auto">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="hover:text-purple-600 transition-colors duration-300"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile: normal bar with logo + hamburger */}
      <div className="flex md:hidden w-full justify-between items-center bg-white/80 backdrop-blur-md shadow-md rounded-2xl px-4 py-3 pl-4">
        <div className="flex items-center">
          <Image
            src="/Logo.png"
            alt="Poojaa G Logo"
            width={32}
            height={32}
            className="mr-2"
          />
          <span className="text-lg font-bold text-purple-800">POOJAA G</span>
        </div>
        <button
          onClick={toggleMenu}
          className="text-purple-800 focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isOpen
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M4 6h16M4 12h16M4 18h16'
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white h-screen backdrop-blur-lg flex flex-col items-start justify-start space-y-8 z-50 pt-8 pl-4 pr-4">
          <button
            onClick={toggleMenu}
            className="absolute top-8 right-8 text-purple-800 focus:outline-none text-xl"
          >
            Close X
          </button>
          {navLinks.map((link) => (
            <React.Fragment key={link.name}>
              <Link
                href={link.href}
                className="text-5xl font-bold text-purple-800 hover:text-purple-600 transition-colors duration-300 flex items-center"
                onClick={toggleMenu}
              >
                {link.name}
                <svg
                  className="w-8 h-8 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
              <div className="border-b border-purple-200 w-full"></div>
            </React.Fragment>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
