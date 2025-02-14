'use client';
import Navigation from '@/components/Navigation';
import { useParams } from 'next/navigation';
import { blogPosts } from '../blogData';
import Link from 'next/link';

const BlogPost = () => {
  const params = useParams();
  const post = blogPosts.find(post => post.slug === params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <main className="bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen text-white">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <Link 
          href="/blog"
          className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>
        <article className="prose prose-invert max-w-none">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            {post.title}
          </h1>
          <time className="text-blue-300 text-sm font-medium block mb-8">{post.date}</time>
          <div className="mt-8 leading-relaxed space-y-6 text-gray-300">
            <div 
              className="prose-h2:text-2xl prose-h2:font-bold prose-h2:mb-4 prose-h2:text-purple-300
                         prose-p:mb-6 prose-p:leading-relaxed
                         prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-ul:space-y-2
                         prose-li:text-gray-300"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
          </div>
        </article>
      </div>
    </main>
  );
};

export default BlogPost; 