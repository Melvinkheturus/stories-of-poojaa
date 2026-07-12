import React from 'react';
import Link from 'next/link';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Importance of Employee Engagement in Modern Workplaces',
      excerpt: 'Exploring how engaged employees contribute to organizational success and strategies for improving engagement.',
      date: 'August 15, 2023',
      category: 'Employee Engagement',
      featured: true,
    },
    {
      id: 2,
      title: 'Effective Onboarding Practices for Remote Teams',
      excerpt: 'Best practices for welcoming and integrating new employees in remote or hybrid work environments.',
      date: 'July 22, 2023',
      category: 'Onboarding',
      featured: false,
    },
    {
      id: 3,
      title: 'Building a Positive Workplace Culture',
      excerpt: 'How HR professionals can contribute to creating and maintaining a healthy organizational culture.',
      date: 'June 10, 2023',
      category: 'Workplace Culture',
      featured: false,
    },
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section id="blog" className="section-container bg-white py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          HR <span className="text-lavender">Insights</span>
        </h2>
        
        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-12">
            <div className="bg-gradient-to-r from-lavender/20 to-pastel-pink/20 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-lavender/30 text-gray-700 mb-4">
                {featuredPost.category}
              </span>
              <h3 className="text-2xl font-bold mb-3">{featuredPost.title}</h3>
              <p className="text-gray-700 mb-4">{featuredPost.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{featuredPost.date}</span>
                <Link href={`/blog/${featuredPost.id}`} className="text-lavender font-medium hover:underline flex items-center">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        )}
        
        {/* Regular Posts */}
        <div className="grid md:grid-cols-2 gap-6">
          {regularPosts.map(post => (
            <div key={post.id} className="bg-[#F9F9F6] rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-pastel-pink/20 text-gray-700 mb-3">
                {post.category}
              </span>
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{post.date}</span>
                <Link href={`/blog/${post.id}`} className="text-pastel-pink font-medium hover:underline flex items-center">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="mt-10 text-center">
          <Link href="/blog" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-lavender hover:bg-lavender/80 transition-colors">
            View All Articles
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;