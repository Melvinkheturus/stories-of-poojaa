import React from 'react';

const Education: React.FC = () => {
  return (
    <section id="education" className="section-container py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Education & <span className="text-lavender">Certifications</span>
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-lavender/30"></div>
          
          {/* Timeline items */}
          <div className="space-y-16">
            {/* MA HRM */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-6 h-6 rounded-full bg-lavender border-4 border-white shadow"></div>
              <div className="ml-auto mr-auto md:ml-0 md:mr-[calc(50%+2rem)] md:pr-8 md:text-right">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-lavender/20 text-lavender mb-2">2023 - Present</span>
                  <h3 className="text-xl font-bold mb-1">MA Human Resource Management</h3>
                  <p className="text-gray-600 mb-2">Ethiraj College</p>
                  <p className="text-gray-700">First Year (in progress)</p>
                </div>
              </div>
            </div>
            
            {/* B.Com */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-6 h-6 rounded-full bg-pastel-pink border-4 border-white shadow"></div>
              <div className="ml-auto mr-auto md:mr-0 md:ml-[calc(50%+2rem)] md:pl-8">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-pastel-pink/20 text-gray-700 mb-2">2019 - 2022</span>
                  <h3 className="text-xl font-bold mb-1">B.Com (Accounting & Finance)</h3>
                  <p className="text-gray-600 mb-2">Gurunanak College</p>
                  <p className="text-gray-700">CGPA: 7.4</p>
                </div>
              </div>
            </div>
            
            {/* Certification */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-6 h-6 rounded-full bg-mint-green border-4 border-white shadow"></div>
              <div className="ml-auto mr-auto md:ml-0 md:mr-[calc(50%+2rem)] md:pr-8 md:text-right">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-mint-green/20 text-gray-700 mb-2">2022</span>
                  <h3 className="text-xl font-bold mb-1">Tally Certification</h3>
                  <p className="text-gray-600 mb-2">Accounting Software</p>
                  <div className="mt-3 inline-block">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                      Certified
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;