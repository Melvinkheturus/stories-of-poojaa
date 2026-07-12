import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-container bg-white py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Internship <span className="text-lavender">Experience</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Recruitment Card */}
          <div className="bg-[#F9F9F6] rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="bg-lavender/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lavender" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Recruitment</h3>
            <p className="text-gray-700 mb-4">
              Supported recruitment drives by screening resumes, coordinating interviews, and assisting with candidate evaluation processes.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-block px-2 py-1 text-xs font-medium bg-lavender/10 text-gray-700 rounded-full">Resume Screening</span>
              <span className="inline-block px-2 py-1 text-xs font-medium bg-lavender/10 text-gray-700 rounded-full">Interview Coordination</span>
            </div>
          </div>
          
          {/* Onboarding Card */}
          <div className="bg-[#F9F9F6] rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="bg-pastel-pink/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pastel-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Onboarding</h3>
            <p className="text-gray-700 mb-4">
              Managed new employee onboarding processes, prepared welcome kits, and facilitated orientation sessions for smooth transitions.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-block px-2 py-1 text-xs font-medium bg-pastel-pink/10 text-gray-700 rounded-full">Documentation</span>
              <span className="inline-block px-2 py-1 text-xs font-medium bg-pastel-pink/10 text-gray-700 rounded-full">Orientation</span>
            </div>
          </div>
          
          {/* Engagement Card */}
          <div className="bg-[#F9F9F6] rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="bg-mint-green/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-mint-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Engagement</h3>
            <p className="text-gray-700 mb-4">
              Coordinated employee engagement activities, assisted with event planning, and helped implement wellness initiatives.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-block px-2 py-1 text-xs font-medium bg-mint-green/10 text-gray-700 rounded-full">Event Planning</span>
              <span className="inline-block px-2 py-1 text-xs font-medium bg-mint-green/10 text-gray-700 rounded-full">Wellness Programs</span>
            </div>
          </div>
        </div>
        
        {/* Testimonial */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-md border border-lavender/20">
          <div className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-lavender/40 mr-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <div>
              <p className="text-gray-700 italic mb-4">
                &quot;Poojaa demonstrated exceptional organizational skills and a natural ability to connect with people during her internship. Her proactive approach and attention to detail made her a valuable asset to our HR team.&quot;
              </p>
              <div className="flex items-center">
                <div className="mr-3 w-10 h-10 rounded-full bg-lavender/20 flex items-center justify-center text-lavender font-bold">
                  M
                </div>
                <div>
                  <h4 className="font-medium">Mentor Name</h4>
                  <p className="text-sm text-gray-600">HR Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;