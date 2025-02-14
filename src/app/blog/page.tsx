'use client';
import Navigation from '@/components/Navigation';
import { blogPosts } from './blogData';
import Link from 'next/link';

const Blog = () => {
  return (
    <main className="bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen text-white">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <h1 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
          Latest Articles
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className="group relative bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-800/50 
                         backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 
                         hover:transform hover:scale-105 transition-all duration-300
                         hover:shadow-[0_0_30px_rgba(124,58,237,0.3)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              <time className="text-blue-300 text-sm font-medium">{post.date}</time>
              <h2 className="text-xl font-bold mt-2 mb-4 bg-clip-text text-transparent bg-gradient-to-r 
                           from-blue-400 to-purple-400">{post.title}</h2>
              <p className="text-gray-300 mb-6">{post.excerpt}</p>
              <Link 
                href={`/blog/${post.slug}`} 
                className="inline-flex items-center text-purple-400 hover:text-purple-300 
                         transition-colors duration-200"
              >
                Read more 
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M5 7l5 5-5 5" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Blog; 