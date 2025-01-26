'use client';

import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-gray-900">Get in Touch</h1>
          <p className="mt-4 text-lg text-gray-600">
            I&apos;m interested in data engineering opportunities and collaborations. Feel free to reach out through any of these channels.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
            <div className="space-y-8">
              <div className="flex items-center">
                <Mail className="w-8 h-8 text-blue-600 mr-6" />
                <div>
                  <p className="text-sm text-gray-600 mb-1">Email</p>
                  <a 
                    href="mailto:laharikarrothu@gmail.com"
                    className="text-lg text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    laharikarrothu@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="w-8 h-8 text-blue-600 mr-6" />
                <div>
                  <p className="text-sm text-gray-600 mb-1">Phone</p>
                  <a 
                    href="tel:321-367-9669"
                    className="text-lg text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    321-367-9669
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <MapPin className="w-8 h-8 text-blue-600 mr-6" />
                <div>
                  <p className="text-sm text-gray-600 mb-1">Location</p>
                  <p className="text-lg text-gray-900">Melbourne, Florida 32901</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center">Professional Profiles</h2>
              <div className="flex justify-center space-x-8">
                <a
                  href="https://github.com/laharikarrotu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-white rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Github className="w-6 h-6 text-gray-700 mr-3" />
                  <span className="text-gray-900">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/laharikarrotu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-white rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Linkedin className="w-6 h-6 text-gray-700 mr-3" />
                  <span className="text-gray-900">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Looking forward to connecting with you and discussing potential opportunities in data engineering and cloud architecture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}