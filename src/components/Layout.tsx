import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              Lahari Karrotu
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">
                About
              </Link>
              <Link href="/experience" className="text-gray-600 hover:text-gray-900">
                Experience
              </Link>
              <Link href="/services" className="text-gray-600 hover:text-gray-900">
                Services
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="pt-16">
        {children}
      </main>
      <footer className="bg-white border-t mt-20">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="https://github.com/laharikarrotu"
              className="text-gray-600 hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/laharikarrotu/"
              className="text-gray-600 hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:laharikarrothu@gmail.com"
              className="text-gray-600 hover:text-gray-900"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Lahari Karrotu. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}