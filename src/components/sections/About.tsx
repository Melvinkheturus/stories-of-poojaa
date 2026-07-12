import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-container bg-white py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="text-lavender">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I&apos;m an aspiring HR professional with a strong foundation in commerce and a passion for building positive workplace cultures. Currently pursuing my MA in Human Resource Management at Ethiraj College, I bring a fresh perspective and dedication to the field of HR.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My strengths lie in people management, communication, and organization. I approach HR with empathy, proactivity, and attention to detail, believing that when employees thrive, organizations succeed.
            </p>
          </div>
          
          <div className="bg-[#F9F9F6] rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-center">Quick Snapshot</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-lavender p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Education</h4>
                  <p className="text-gray-600">B.Com (A&F), MA HRM (in progress)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-pastel-pink p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Certifications</h4>
                  <p className="text-gray-600">Tally</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-mint-green p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-600">Chennai, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;