'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
<section 
      id="hero" 
      className="relative section-container pt-32 pb-16 bg-cover bg-center"
      style={{ backgroundImage: `url('/mesh-gradient.png')` }}
    >
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="space-y-6">
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-2 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Poojaa G
            </motion.span>
          </motion.h1>
          <style jsx>{`
            .gradient-text {
              background: linear-gradient(90deg, #ff7e5f, #feb47b, #86a8e7, #91eae4);
              background-size: 200% 200%;
              -webkit-background-clip: text;

              animation: gradient-animation 5s ease infinite;
            }

            @keyframes gradient-animation {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}</style>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
            HR Professional in the Making
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
            “Helping businesses build workplaces where people thrive and performance scales.”
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="/resume.pdf"
              download
              className="btn-primary flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Download Resume
            </a>
            <a
              href="#contact"
              className="btn-secondary flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Let&apos;s Connect
            </a>
          </div>
          <p className="text-md text-gray-500 mt-4">
            Open to HR internships and trainee opportunities
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://www.linkedin.com/in/poojaa-g" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-lavender transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="mailto:poojaa.g@example.com" className="text-gray-600 hover:text-lavender transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.727v15.439h24v-15.439l-12 9.727z"/></svg>
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <span className="pill-badge"><span className="text-green-500 mr-2">✅</span>Talent Acquisition</span>
          <span className="pill-badge"><span className="text-green-500 mr-2">✅</span>People Engagement</span>
          <span className="pill-badge"><span className="text-green-500 mr-2">✅</span>Performance Growth</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;