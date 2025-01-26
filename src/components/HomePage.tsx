import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Data Engineer & Cloud Specialist
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Crafting robust data solutions and scalable cloud architectures
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/services"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              View Services
            </Link>
            <Link
              href="/contact"
              className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-50"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}