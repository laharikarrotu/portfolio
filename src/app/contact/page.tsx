'use client';

import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30 min-h-screen transition-all duration-500">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            I&apos;m interested in data engineering opportunities and collaborations. Feel free to reach out through any of these channels.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50/90 to-white/90 backdrop-blur-sm rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="space-y-8 stagger-animation">
              <div className="flex items-center transform hover:translate-x-2 transition-all duration-300 p-4 rounded-lg hover:bg-white/80">
                <Mail className="w-8 h-8 text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mr-6 animate-bounce-subtle" />
                <div>
                  <p className="text-sm text-gray-600 mb-1">Email</p>
                  <a 
                    href="mailto:laharikarrothu@gmail.com"
                    className="text-lg text-gray-900 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text transition-all duration-300"
                  >
                    laharikarrothu@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center transform hover:translate-x-2 transition-all duration-300 p-4 rounded-lg hover:bg-white/80">
                <Phone className="w-8 h-8 text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mr-6 animate-bounce-subtle" style={{ animationDelay: '0.1s' }} />
                <div>
                  <p className="text-sm text-gray-600 mb-1">Phone</p>
                  <a 
                    href="tel:321-367-9669"
                    className="text-lg text-gray-900 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text transition-all duration-300"
                  >
                    321-367-9669
                  </a>
                </div>
              </div>

              <div className="flex items-center transform hover:translate-x-2 transition-all duration-300 p-4 rounded-lg hover:bg-white/80">
                <MapPin className="w-8 h-8 text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mr-6 animate-bounce-subtle" style={{ animationDelay: '0.2s' }} />
                <div>
                  <p className="text-sm text-gray-600 mb-1">Location</p>
                  <p className="text-lg text-gray-900">Melbourne, Florida 32901</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-gray-200 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 text-center">
                Professional Profiles
              </h2>
              <div className="flex justify-center space-x-8">
                <a
                  href="https://github.com/laharikarrotu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-white rounded-lg hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
                >
                  <Github className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors mr-3" />
                  <span className="text-gray-900 group-hover:text-blue-600">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/laharikarrotu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-white rounded-lg hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
                >
                  <Linkedin className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors mr-3" />
                  <span className="text-gray-900 group-hover:text-blue-600">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <p className="text-gray-600 hover:scale-105 transition-transform duration-300">
              Looking forward to connecting with you and discussing potential opportunities in data engineering and cloud architecture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}