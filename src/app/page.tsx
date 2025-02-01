'use client';
import VoiceChat from '../components/VoiceChat';

import Image from 'next/image';
import Link from 'next/link';
import { Database, Cloud, Terminal } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';

export default function Home() {
  const services = [
    {
      icon: <Database className="w-8 h-8 mb-4 text-blue-600" />,
      title: "Data Engineering",
      description: "ETL pipeline development, data warehouse design, and optimization using AWS services."
    },
    {
      icon: <Cloud className="w-8 h-8 mb-4 text-blue-600" />,
      title: "Cloud Architecture",
      description: "Design and implementation of scalable cloud solutions using AWS."
    },
    {
      icon: <Terminal className="w-8 h-8 mb-4 text-blue-600" />,
      title: "API Development",
      description: "Building secure and efficient RESTful APIs using Python and FastAPI."
    }
  ];

  const skills = [
    "AWS Services",
    "Data Engineering",
    "Python",
    "ETL Pipeline",
    "SQL",
    "Databricks",
    "Machine Learning",
    "Data Visualization"
  ];

  return (
    <>
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-indigo-50 to-purple-50 h-[500px] animate-gradient-x" />
        
        <div className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="pt-20 pb-12">
              <div className="text-center space-y-8 animate-fade-in">
                <div className="relative mx-auto h-40 w-40 group animate-scale-in">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-spin-slow"></div>
                  <div className="relative h-full w-full rounded-full overflow-hidden border-4 border-white shadow-lg hover:scale-105 transition-transform duration-300">
                    <Image
                      src="https://avatars.githubusercontent.com/laharikarrotu"
                      alt="Lahari Karrotu"
                      fill
                      sizes="160px"
                      className="rounded-full object-cover transform hover:scale-110 transition-transform duration-500"
                      priority
                    />
                  </div>
                </div>
                <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform">
                    Lahari Karrotu
                  </h1>
                  <p className="mt-2 text-xl text-gray-600">Data Engineer & Cloud Specialist</p>
                </div>
                <p className="max-w-2xl mx-auto text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                  Over 3 years of expertise in Data Engineering and Data Warehousing, delivering robust and scalable data solutions.
                  Specializing in AWS cloud architecture, ETL pipeline development, and data optimization.
                </p>
                <div className="flex justify-center space-x-4 animate-fade-in" style={{ animationDelay: '0.7s' }}>
                  <Link
                    href="/contact"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    Hire Me
                  </Link>
                  <Link
                    href="/about"
                    className="border border-gray-300 px-8 py-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:-translate-y-1 transition-all duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-12 animate-fade-in">
            Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-blue-50/50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col items-center text-center group">
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 animate-fade-in">
            <Link
              href="/services"
              className="inline-block text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text hover:scale-105 transition-transform font-medium"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-12 animate-fade-in">
            Key Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="bg-white/80 backdrop-blur-sm rounded-lg p-4 text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-gray-800 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text transition-colors">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-3xl font-bold text-white mb-4 hover:scale-105 transition-transform">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s work together to build scalable data solutions for your business
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
<VoiceChat />
</>

  );
}